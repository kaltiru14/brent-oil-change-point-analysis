import React from "react";

const IndicatorCards = ({ indicators }) => {
  if (!indicators) return null;

  return (
    <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor: "#f0f8ff" }}>
        <h4>Annualized Volatility</h4>
        <p>{indicators.annualized_volatility}</p>
      </div>
      <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor: "#f0fff0" }}>
        <h4>Avg Price Change Around Events</h4>
        <p>{indicators.avg_price_change_around_events}</p>
      </div>
    </div>
  );
};

export default IndicatorCards;
