1\. Data Analysis Workflow
--------------------------

### 1.1 Overview

The analysis follows a structured data science workflow to understand how major geopolitical, economic, and policy events influence Brent oil prices. The process moves from raw data exploration to statistical modeling and insight generation, with a strong emphasis on interpretability and uncertainty quantification using Bayesian methods.

### 1.2 Step-by-Step Workflow

### Step 1: Data Loading and Preprocessing

*   Load historical Brent oil price data
    
*   Convert the Date column to datetime format
    
*   Sort observations chronologically
    
*   Check for missing values and data inconsistencies
    
*   Ensure prices are numeric and properly scaled
    

**Purpose:**Ensure the dataset is clean, reliable, and suitable for time series analysis.

### Step 2: Exploratory Data Analysis (EDA)

*   Plot Brent oil prices over time to identify:
    
    *   Long-term trends
        
    *   Sudden shocks
        
    *   Periods of extreme volatility
        
*   Compute summary statistics (mean, median, variance)
    
*   Identify visually obvious regime changes
    

**Purpose:**Develop an intuitive understanding of price behavior and historical market dynamics.

### Step 3: Time Series Transformation

*   rt=log⁡(Pt)−log⁡(Pt−1)r\_t = \\log(P\_t) - \\log(P\_{t-1})rt​=log(Pt​)−log(Pt−1​)
    
*   Compare raw prices vs. log returns
    

**Purpose:**Log returns are more likely to be stationary and suitable for statistical modeling.

### Step 4: Time Series Diagnostics

*   **Trend analysis**
    
    *   Rolling averages
        
    *   Visual inspection
        
*   **Stationarity testing**
    
    *   Augmented Dickey-Fuller (ADF) test on prices and log returns
        
*   **Volatility analysis**
    
    *   Rolling standard deviation
        
    *   Detection of volatility clustering
        

**Purpose:**Inform modeling choices such as likelihood assumptions and parameter stability.

### Step 5: Bayesian Change Point Modeling

*   Apply Bayesian change point detection to identify structural breaks
    
*   Estimate:
    
    *   Change point location(s)
        
    *   Mean behavior before and after changes
        
*   Quantify uncertainty using posterior distributions
    

**Purpose:**Detect statistically significant shifts in oil price behavior over time.

### Step 6: Event Association and Interpretation

*   Compare detected change points with known real-world events:
    
    *   Geopolitical conflicts
        
    *   OPEC decisions
        
    *   Economic shocks
        
*   Form hypotheses linking events to observed changes
    

**Purpose:**Bridge statistical findings with real-world context.

### Step 7: Insight Generation and Communication

*   Translate results into actionable insights
    
*   Quantify impacts (e.g., average price shift before vs. after an event)
    
*   Prepare outputs for policymakers, investors, and energy companies
    

**Purpose:**Support decision-making with clear, data-driven evidence.

### 1.3 Workflow Summary Diagram (Optional to Mention)

> Data → EDA → Diagnostics → Bayesian Modeling → Event Mapping → Insights → Communication

3\. Assumptions and Limitations
-------------------------------

This analysis relies on several assumptions that simplify the complex dynamics of global oil markets. These assumptions are necessary to make the problem tractable but introduce important limitations that must be acknowledged.

### 3.1 Key Assumptions

**1\. Market prices reflect information efficiently**It is assumed that Brent oil prices incorporate available information about geopolitical events, economic conditions, and policy decisions relatively quickly.

**2\. Structural changes can be approximated by discrete change points**The analysis assumes that major events lead to sudden shifts in the statistical properties of oil prices (e.g., mean or volatility), which can be captured using change point models.

**3\. Event dates represent meaningful reference points**Event start dates are treated as approximate anchors for comparison with detected change points, even though real market reactions may occur before or after official announcements.

**4\. Log returns are more suitable for statistical modeling**The analysis assumes that transforming prices into log returns improves stationarity and makes the data more compatible with the assumptions of Bayesian statistical models.

**5\. External influences remain unmodeled**The model assumes that unobserved factors (such as interest rates, exchange rates, inventories, and speculative behavior) are implicitly captured in price movements.

### 3.2 Limitations

**1\. Correlation does not imply causation**A central limitation of this analysis is the distinction between identifying statistical correlation and establishing causal impact. Change point detection identifies moments in time where the statistical behavior of prices changes, but it does not prove that a specific event caused the change.

> A temporal alignment between a detected change point and a real-world event suggests a plausible association, not definitive causality.

**2\. Overlapping and confounding events**Multiple geopolitical and economic events often occur close together in time, making it difficult to attribute a detected change point to a single cause.

**3\. Model simplicity**The baseline change point model focuses on changes in the mean level of prices or returns and may not fully capture more complex dynamics such as gradual transitions, regime switching, or time-varying volatility.

**4\. Sensitivity to model assumptions**Results may vary depending on:

*   Choice of prior distributions
    
*   Number of change points allowed
    
*   Whether prices or log returns are modeled
    

**5\. Data limitations**While the dataset spans multiple decades, it represents only price information and does not include underlying supply, demand, or macroeconomic indicators.

### 3.3 Interpretation Guidance

The findings from this analysis should be interpreted as **probabilistic insights**, not deterministic conclusions. The results are best used to:

*   Support risk assessment
    
*   Inform scenario analysis
    
*   Guide further investigation
    

rather than to make definitive causal claims.

4\. Communication Channels and Reporting Strategy
-------------------------------------------------

The results of this analysis are intended for a diverse group of stakeholders with varying levels of technical expertise. To ensure clarity, accessibility, and impact, different communication channels and formats will be used.

### 4.1 Target Stakeholders

*   **Policymakers and government agencies**
    
*   **Energy investors and financial analysts**
    
*   **Energy companies and operational planners**
    
*   **Technical analysts and data science teams**
    

### 4.2 Communication Channels and Formats

Stakeholder GroupCommunication FormatPurposePolicymakersPDF report with executive summarySupport policy formulation and energy security planningInvestors & AnalystsInteractive dashboardExplore price changes and event impactsEnergy CompaniesVisual analytics & key metricsOperational planning and risk managementTechnical TeamsJupyter notebooks & GitHub repositoryTransparency, reproducibility, and collaborationGeneral AudienceBlog-style report (Medium/PDF)High-level insights and storytelling

### 4.3 Key Reporting Principles

*   **Clarity over complexity**Insights will be communicated using clear visualizations and concise explanations rather than technical jargon.
    
*   **Uncertainty awareness**Bayesian outputs will be presented with credible intervals to highlight uncertainty in estimates.
    
*   **Context-driven interpretation**Statistical results will be explained alongside real-world events to ensure meaningful interpretation.
    
*   **Actionability**Findings will be framed in terms of their implications for investment decisions, policy planning, and operational strategy.
    

### 4.4 Dashboard Communication (Preview)

The interactive dashboard (developed in Task 3) will allow users to:

*   View historical Brent oil price trends
    
*   Highlight major geopolitical and economic events
    
*   Explore detected change points and their impacts
    
*   Filter results by date range and event category

5\. Time Series Properties of Brent Oil Prices
----------------------------------------------

Before applying any statistical or Bayesian change point models, it is essential to understand the underlying properties of the Brent oil price time series. These properties directly inform modeling choices and interpretation.

### 5.1 Trend Analysis

The Brent oil price series exhibits strong long-term trends combined with abrupt shifts. Over the full sample period, prices show:

*   Extended upward and downward movements driven by macroeconomic cycles
    
*   Sharp price collapses during major crises (e.g., 2008 financial crisis, 2020 COVID-19 shock)
    
*   Rapid recoveries following supply interventions or demand rebounds
    

These characteristics indicate that the series is **non-stationary in levels**, meaning its statistical properties (mean and variance) change over time.

**Implication for modeling:**Non-stationary series violate the assumptions of many standard statistical models. This motivates the use of transformations and models capable of handling structural breaks.

### 5.2 Stationarity Testing

Stationarity refers to whether a time series has constant statistical properties over time.

*   Raw Brent oil prices typically fail stationarity tests such as the Augmented Dickey-Fuller (ADF) test.
    
*   After transforming prices into **log returns**, the series is closer to stationarity, with a more stable mean over time.
    

rt=log⁡(Pt)−log⁡(Pt−1)r\_t = \\log(P\_t) - \\log(P\_{t-1})rt​=log(Pt​)−log(Pt−1​)

**Implication for modeling:**Log returns are more suitable for Bayesian change point detection because:

*   They reduce trend effects
    
*   They stabilize variance
    
*   They better satisfy model assumptions
    

### 5.3 Volatility Patterns

A key feature of oil price time series is **volatility clustering**:

*   Periods of high volatility tend to be followed by high volatility
    
*   Calm periods tend to persist
    
*   Extreme volatility spikes coincide with major global events
    

Examples include:

*   2008–2009 financial crisis
    
*   2020 COVID-19 pandemic
    
*   2022 Russia–Ukraine conflict
    

**Implication for modeling:**The presence of volatility clustering suggests that:

*   Market regimes change over time
    
*   A single global mean is insufficient
    
*   Change point or regime-switching models are appropriate
    

### 5.4 Summary of Time Series Properties

| Property          | Observation             | Modeling Implication               |
|-------------------|-------------------------|------------------------------------|
| Trend             | Strong, non-linear      | Avoid modeling raw prices directly |
| Stationarity      | Non-stationary prices   | Use log returns                    |
| Volatility        | Clustered, event-driven | Allow for regime changes           |
| Structural breaks | Frequent                | Apply change point models          |

### 5.5 How These Properties Inform Modeling Choices

Based on these observations:

*   Bayesian change point models are suitable for detecting structural breaks
    
*   Modeling log returns improves statistical validity
    
*   Bayesian inference allows uncertainty-aware interpretation
    
*   Detected change points can be compared with historical events for contextual insight

6\. Change Point Models
-----------------------

### 6.1 What is a Change Point Model?

A **change point model** is a statistical tool used to detect **structural breaks** in a time series. Structural breaks are moments in time when the underlying behavior of the series changes significantly — for example, a shift in the mean, variance, or both.

*   **Purpose:** Identify points where the data-generating process changes
    
*   **Applications:** Financial markets, climate studies, industrial monitoring, etc.
    

In our context:

*   Change points correspond to sudden shifts in Brent oil prices due to major geopolitical, economic, or policy events.
    

### 6.2 Why Use Change Point Models for Oil Prices?

Brent oil prices are **highly volatile** and influenced by discrete external events. Features that motivate change point modeling:

1.  **Abrupt regime changes** — e.g., financial crises, wars, or OPEC decisions.
    
2.  **Non-stationary behavior** — mean and variance of returns are not constant.
    
3.  **Event alignment** — change points provide dates that can be compared with real-world events.
    

A change point model helps **quantify** these shifts and provides **probabilistic statements** about when and how the market regime changes.

### 6.3 Bayesian Change Point Models

We focus on **Bayesian change point detection** using PyMC:

*   Treat the **change point location (τ\\tauτ)** as a **random variable** with a prior distribution over all possible dates.
    
*   Define **“before” and “after” parameters**, e.g., mean returns μ1\\mu\_1μ1​ and μ2\\mu\_2μ2​.
    
*   Use a **switch function** to apply the correct parameter depending on whether the observation is before or after τ\\tauτ.
    
*   Run **MCMC simulation** to get a **posterior distribution** of τ\\tauτ and parameters.
    

**Benefits of Bayesian approach:**

*   Captures **uncertainty** in the change point location
    
*   Provides **credible intervals** for the mean before and after
    
*   Allows **probabilistic interpretation**, not just point estimates
    

### 6.4 Conceptual Model Diagram (Optional for Report)

```bash 
Price/Return Series
      |
      v
[ Bayesian Change Point Model ]
      |
      v
Posterior Distribution of:
- τ (change point date)
- μ1 (before mean)
- μ2 (after mean)
      |
      v
Compare τ with historical events → Interpret impact
```
### 6.5 How It Will Be Used in This Project

*   Detect dates of sudden shifts in Brent oil prices
    
*   Quantify changes in mean log returns before and after the break
    
*   Associate detected changes with **geopolitical and economic events** from our CSV
    
*   Provide **probabilistic, interpretable results** for stakeholders

7\. Expected Outputs of Change Point Analysis
---------------------------------------------

The Bayesian change point model applied to Brent oil prices is expected to produce the following outputs:

| Output                                                      | Description                                                                | Purpose / Use                                                                                  |
|------------------------------------------------------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Posterior distribution of change points (τ)**            | Probabilistic estimates of when structural breaks occur in the time series | Identify periods where market behavior shifted significantly; compare with real-world events  |
| **Posterior means before and after change points (μ₁, μ₂)**| Estimates of the mean log returns before and after each change point       | Quantify the magnitude of price shifts; measure impact of events on average returns           |
| **Credible intervals**                                      | Bayesian intervals for τ, μ₁, μ₂                                           | Provide uncertainty bounds, helping stakeholders understand the confidence in detected changes |
| **Visualizations**                                          | Plots of time series with detected change points highlighted               | Support intuitive understanding and storytelling for stakeholders                               |
| **Event association table**                                 | Dates of change points mapped to significant historical events             | Bridge statistical findings with real-world occurrences                                         |

**Key Insight:**The outputs allow analysts to **identify, quantify, and interpret structural changes** in the oil market over time, while acknowledging uncertainty in the estimates.

8\. Limitations of the Change Point Analysis
--------------------------------------------

While change point models are powerful, they have important limitations:

1.  **Correlation vs. causation**
    
    *   Detected change points indicate statistical shifts but do **not prove causality** with any specific event. Temporal alignment is suggestive, not definitive.
        
2.  **Model simplicity**
    
    *   Basic models detect **single or few change points in mean**.
        
    *   They may not capture:
        
        *   Gradual shifts
            
        *   Changes in variance only
            
        *   Multiple overlapping effects
            
3.  **Sensitivity to priors and assumptions**
    
    *   Bayesian results depend on chosen priors, number of allowed change points, and whether prices or log returns are modeled.
        
4.  **Unmodeled confounding factors**
    
    *   Macroeconomic variables, supply chain dynamics, and speculative trading are **not explicitly included**.
        
5.  **Event timing uncertainty**
    
    *   Market reactions may **precede or lag** official event dates.
        
    *   Exact alignment with historical events is an approximation.
        
6.  **Data limitations**
    
    *   Daily prices from 1987–2022 are used, but finer intraday dynamics or global supply-demand details are missing.
        

### 8.1 Interpretation Guidance

*   Outputs should be interpreted as **probabilistic insights**, not deterministic statements.
    
*   The focus is on **informing decisions, supporting scenario analysis, and highlighting potential risk periods**.
    
*   Combining detected change points with real-world events helps stakeholders understand **plausible drivers of price shifts**, while remaining aware of uncertainty.