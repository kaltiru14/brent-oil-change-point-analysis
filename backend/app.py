from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# -----------------------------
# Load data
# -----------------------------
prices_df = pd.read_csv("data/brent_prices.csv")
# lowercase column names
prices_df.columns = prices_df.columns.str.lower()
prices_df["date"] = pd.to_datetime(prices_df["date"], dayfirst=True)

events_df = pd.read_csv("data/oil_market_events.csv")
events_df.columns = events_df.columns.str.lower()
events_df["date"] = pd.to_datetime(events_df["date"])

# Example change point (from Task 2 output)
CHANGE_POINT_DATE = prices_df["date"].iloc[int(len(prices_df) * 0.6)]

# -----------------------------
# API: Prices
# -----------------------------
@app.route("/api/prices")
def get_prices():
    data = prices_df[["date", "price"]].copy()
    data["date"] = data["date"].dt.strftime("%Y-%m-%d")
    return jsonify(data.to_dict(orient="records"))

# -----------------------------
# API: Change Point
# -----------------------------
@app.route("/api/change-point")
def get_change_point():
    return jsonify({
        "date": CHANGE_POINT_DATE.strftime("%Y-%m-%d"),
        "description": "Bayesian detected structural break in Brent oil prices"
    })

# -----------------------------
# API: Events
# -----------------------------
@app.route("/api/events")
def get_events():
    data = events_df.copy()
    data["date"] = data["date"].dt.strftime("%Y-%m-%d")
    return jsonify(data.to_dict(orient="records"))

# -----------------------------
# API: Indicators
# -----------------------------
@app.route("/api/indicators")
def get_indicators():
    df = prices_df.sort_values("date").copy()
    df["returns"] = df["price"].pct_change()

    # Annualized volatility
    volatility = df["returns"].std() * np.sqrt(252)

    # Average price change around events (±30 days)
    impacts = []
    for _, event in events_df.iterrows():
        window = df[
            (df["date"] >= event["date"] - pd.Timedelta(days=30)) &
            (df["date"] <= event["date"] + pd.Timedelta(days=30))
        ]
        if len(window) > 1:
            change = (window["price"].iloc[-1] - window["price"].iloc[0]) / window["price"].iloc[0]
            impacts.append(change)

    avg_event_impact = np.mean(impacts) if impacts else 0.0

    return jsonify({
        "annualized_volatility": round(float(volatility), 4),
        "avg_price_change_around_events": round(float(avg_event_impact), 4)
    })

# -----------------------------
# Run app
# -----------------------------
if __name__ == "__main__":
    app.run(debug=True)
