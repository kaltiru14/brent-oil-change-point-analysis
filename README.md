# Brent Oil Prices Change Point Analysis

## Project Overview
This project analyzes historical Brent oil prices to detect structural changes and link them to major geopolitical, OPEC, and macroeconomic events. Using exploratory data analysis (EDA), log returns, stationarity testing, and Bayesian change point detection, the analysis aims to provide actionable insights for investors, policymakers, and energy companies.

The core objectives are:

- Identify key events impacting Brent oil prices over the past decades.
- Quantify the effect of these events on price movements using statistical methods.
- Communicate insights through clear documentation and an interactive dashboard (planned).

---

## Repository Structure

``` bash
brent-oil-analysis/
│
├── data/
│   ├── raw/
│   │   └── BrentOilPrices.csv         # Historical Brent oil 
│   └── oil_market_events.csv      # Key geopolitical/
├── notebooks/
│   ├── task1_brent_analysis.ipynb  
├── reports/
│   └── task1_analysis_plan.md  # EDA of Brent prices and log returns
├── backend/ # Flask API for dashboard (future)
├── frontend/ # React dashboard (future)
├── requirements.txt # Python dependencies
├── README.md # Project overview and instructions
└── .gitignore # Files/folders to exclude from Git
```

## Data Sources
- **Brent Oil Prices:** Daily historical prices from May 20, 1987, to Sep 30, 2022.
- **Oil Market Events:** Curated dataset of geopolitical, OPEC, and macroeconomic events affecting the oil market.

> **Note:** The `data/` folder is excluded from version control due to size and privacy. Users should add the datasets manually.

---

## Environment Setup
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd brent-oil-analysis
2. Create and activate a virtual environment:
   ```bash 
   python -m venv env
   source env/bin/activate   # Linux/Mac
   .\env\Scripts\activate    # Windows 

3. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
### Running Notebooks
1. Navigate to the notebooks/ folder.

2. Start Jupyter Notebook:
   ```bash
   jupyter notebook
3. Open task1_brent_analysis.ipynb to explore Task 1 analysis and initial EDA.

### Key Features
*   **Data Cleaning & Preprocessing:** Ensures reliable time series analysis.  
*   **Exploratory Data Analysis (EDA):** Visualizes price trends, volatility, and log returns. 
*   **Stationarity Testing:** ADF tests to check for mean/variance stability.
*   **Bayesian Change Point Detection:** Identifies structural breaks and quantifies uncertainty.   
*   **Event Association:** Compares detected change points with historical events for contextual interpretation.   
*   **Documentation & Communication:** Clear assumptions, limitations, and communication strategy for stakeholders.
### Future Components  
*   **Backend (Flask):** Serve processed data, change point results, and model outputs via API. 
*   **Frontend (React):** Interactive dashboard for visualizing trends, events, and detected change points. 
*   **Advanced Modeling:** Multi-change point detection, VAR models, and regime-switching extensions.

### Contributing
- Open GitHub issues for bugs, improvements, or feature requests.
- Keep exploratory work in notebooks/.
- Maintain reports and final deliverables in reports/.