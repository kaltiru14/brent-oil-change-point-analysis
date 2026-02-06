Brent Oil Price Change Point Analysis
=====================================

Project Overview
----------------

This project analyzes historical Brent oil prices (May 1987 – Sep 2022) to identify structural breaks and quantify the impact of major geopolitical and economic events.

The analysis combines **exploratory data analysis (EDA)** with **Bayesian change point modeling** to detect shifts in price behavior and associate them with significant market events.

Project Structure
-----------------
``` bash
brent-oil-analysis/
│
├── data/
│   ├── raw/
│   │   └── BrentOilPrices.csv         # Historical Brent oil 
│   └── events/
│       └── oil_market_events.csv      # Key geopolitical/
├── notebooks/
│   ├── 02_eda_time_series.ipynb  
│   ├── README.md # Project overview and instructions
├── reports/
│   └── task1_analysis_plan.md  # EDA of Brent prices and log returns
├── README.md                           
└── requirements.txt                    # Python packages needed 
```

Task 1 — Laying the Foundation
------------------------------

**Objective:** Define the analysis workflow and understand the data.
**Deliverables included:**
*   A **documented analysis workflow**, outlining steps from data loading and preprocessing to insights generation
    
*   A **structured event dataset** (oil\_market\_events.csv) containing key geopolitical events, OPEC decisions, and economic shocks with approximate dates
*   Documentation of **assumptions and limitations**, including discussion of correlation vs. causation and considerations for time series modeling
    
Task 2 — Exploratory Data Analysis & Change Point Modeling
----------------------------------------------------------

**Objective:** Prepare and explore the Brent oil price data to support Bayesian change point analysis.
**EDA Included:**
*   **Raw price series plots** to identify trends, spikes, and major shocks
*   **Log returns plots** to observe volatility clustering and make the data more stationary
*   **Basic statistics** for both raw prices and log returns 

**Bayesian Modeling Preparation:**

*   Data is prepared for change point modeling in PyMC
*   Posterior distributions and MCMC setup are included for later identification of structural breaks 
*   Initial comparisons of detected change points to major events are included

Key Features
------------

*   Comprehensive time series exploration and visualization 
*   Structured dataset of market-relevant events   
*   Bayesian change point model framework ready for further analysis 
*   Clear documentation of workflow, assumptions, and modeling approach

Requirements
------------
*   Python ≥ 3.9 
*   Pandas
*   NumPy
*   Matplotlib
*   Seaborn
*   PyMC
*   ArviZ
Install dependencies with:

`   pip install -r requirements.txt   `

Usage
-----

1.  Open the notebooks in Jupyter or VS Code.
    
2.  Run **task1_analysis_plan.ipynb** to understand workflow and explore event dataset.
    
3.  Run **02_eda_time_series.ipynb** to perform initial EDA and prepare data for Bayesian change point modeling.