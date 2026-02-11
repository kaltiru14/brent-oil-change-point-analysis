import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const PriceChart = ({ prices, changePoint, events }) => {

  // Custom tooltip for events
  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || payload.length === 0) return null;

    const event = events.find(e => e.date === label);

    return (
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "10px"
        }}
      >
        <p><strong>Date:</strong> {label}</p>
        <p><strong>Price:</strong> {payload[0].value}</p>
        {event && (
          <>
            <p><strong>Event:</strong> {event.event}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </>
        )}
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={prices}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />

        <Line
          type="monotone"
          dataKey="price"
          stroke="#1f77b4"
          dot={false}
        />

        {/* Change point */}
        {changePoint && (
          <ReferenceLine
            x={changePoint}
            stroke="red"
            strokeDasharray="4 4"
            label={{ value: "Change Point", position: "top", fill: "red" }}
          />
        )}

        {/* Event markers */}
        {events.map((event, index) => (
          <ReferenceLine
            key={index}
            x={event.date}
            stroke="orange"
            strokeDasharray="2 2"
            label={{ value: event.event, position: "top", fill: "orange" }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
