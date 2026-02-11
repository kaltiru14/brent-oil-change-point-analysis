import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  Legend
} from "recharts";

function App() {
  const [prices, setPrices] = useState([]);
  const [events, setEvents] = useState([]);
  const [changepoints, setChangepoints] = useState([]);

  // Filter states
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showEvents, setShowEvents] = useState(true);

  useEffect(() => {
    // Fetch prices
    fetch("http://localhost:5000/api/prices")
      .then(res => res.json())
      .then(setPrices)
      .catch(err => console.error("Failed to fetch prices:", err));

    // Fetch events
    fetch("http://localhost:5000/api/events")
      .then(res => res.json())
      .then(data => {
        // normalize keys
        const formatted = data.map(e => ({
          date: e.date ?? e.Date,
          event: e.event ?? e.Event,
        }));
        setEvents(formatted);
      })
      .catch(err => console.error("Failed to fetch events:", err));

    // Fetch change points
    fetch("http://localhost:5000/api/changepoints")
      .then(res => res.json())
      .then(setChangepoints)
      .catch(err => console.error("Failed to fetch changepoints:", err));
  }, []);

  // Filter prices by selected date range
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

  return (
    <div style={{ padding: 20 }}>
      <h2>Brent Oil Price Analysis Dashboard</h2>

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

        <button onClick={() => { setStartDate(""); setEndDate(""); }}>
          Reset Dates
        </button>
      </div>

      {/* Price Chart */}
      <LineChart width={1100} height={450} data={filteredPrices}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="price"
          strokeWidth={2}
          dot={false}
          stroke="#1f77b4"
        />

        {/* Change Points */}
        {changepoints.map((cp, i) => (
          <ReferenceLine
            key={i}
            x={cp.date}
            stroke="red"
            strokeDasharray="3 3"
            label="Change Point"
          />
        ))}

        {/* Event Highlights */}
        {showEvents && filteredEvents.map((ev, i) => (
          <ReferenceLine
            key={i}
            x={ev.date}
            stroke="orange"
            strokeDasharray="2 2"
            label={ev.event}
          />
        ))}
      </LineChart>
    </div>
  );
}

export default App;
