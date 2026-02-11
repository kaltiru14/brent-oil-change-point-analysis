import React, { useEffect, useState } from "react";
import PriceChart from "./PriceChart";
import InsightBox from "./InsightBox";
import IndicatorCards from "./IndicatorCards";

const Dashboard = () => {
  const [prices, setPrices] = useState([]);
  const [events, setEvents] = useState([]);
  const [changePoint, setChangePoint] = useState(null);
  const [indicators, setIndicators] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showEvents, setShowEvents] = useState(true);

  // Fetch all data
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/prices")
      .then(res => res.json())
      .then(data => setPrices(data))
      .catch(err => console.error("Failed to fetch prices:", err));

    fetch("http://127.0.0.1:5000/api/events")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(e => ({
          date: e.date ?? e.Date,
          event: e.event ?? e.Event,
          category: e.category ?? "",
          description: e.description ?? ""
        }));
        setEvents(formatted);
      })
      .catch(err => console.error("Failed to fetch events:", err));

    fetch("http://127.0.0.1:5000/api/change-point")
      .then(res => res.json())
      .then(setChangePoint)
      .catch(err => console.error("Failed to fetch change point:", err));

    fetch("http://127.0.0.1:5000/api/indicators")
      .then(res => res.json())
      .then(setIndicators)
      .catch(err => console.error("Failed to fetch indicators:", err));
  }, []);

  // Set default start/end dates once prices are loaded
  useEffect(() => {
    if (prices.length > 0) {
      setStartDate(prices[0].date);
      setEndDate(prices[prices.length - 1].date);
    }
  }, [prices]);

  // Filter prices by date
  const filteredPrices = prices.filter(p => {
    const d = new Date(p.date);
    if (startDate && d < new Date(startDate)) return false;
    if (endDate && d > new Date(endDate)) return false;
    return true;
  });

  // Filter events by date
  const filteredEvents = events.filter(e => {
    const d = new Date(e.date);
    if (startDate && d < new Date(startDate)) return false;
    if (endDate && d > new Date(endDate)) return false;
    return true;
  });

  // Reset date filter
  const resetDates = () => {
    if (prices.length > 0) {
      setStartDate(prices[0].date);
      setEndDate(prices[prices.length - 1].date);
    }
  };

  return (
    <div className="dashboard">
      {/* Indicator Cards */}
      {indicators ? (
        <IndicatorCards indicators={indicators} />
      ) : (
        <p>Loading indicators...</p>
      )}

        {/* Filters */}
        <div style={{
        marginBottom: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        backgroundColor: "#f4f4f4",
        borderRadius: "5px"
        }}>
        <label style={{ marginRight: "10px" }}>
            Start Date:
            <input 
            type="date" 
            value={startDate} 
            onChange={e => setStartDate(e.target.value)} 
            style={{ marginLeft: "5px" }}
            />
        </label>

        <label style={{ marginRight: "10px" }}>
            End Date:
            <input 
            type="date" 
            value={endDate} 
            onChange={e => setEndDate(e.target.value)} 
            style={{ marginLeft: "5px" }}
            />
        </label>

        <label style={{ marginRight: "10px" }}>
            <input 
            type="checkbox" 
            checked={showEvents} 
            onChange={() => setShowEvents(!showEvents)} 
            style={{ marginRight: "5px" }}
            />
            Show Events
        </label>

        <button onClick={() => {
            setStartDate(""); // Reset to show all data
            setEndDate("");
        }}>
            Reset Dates
        </button>
        </div>



      {/* Price Chart */}
      <PriceChart
        prices={filteredPrices}
        events={showEvents ? filteredEvents : []}
        changePoint={changePoint?.date ?? changePoint}
      />

      {/* Insights */}
      {changePoint && (
        <InsightBox
          changePoint={changePoint?.date ?? changePoint}
          events={filteredEvents}
        />
      )}
    </div>
  );
};

export default Dashboard;
