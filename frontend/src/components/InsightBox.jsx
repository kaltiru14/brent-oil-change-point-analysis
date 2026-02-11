import React from "react";

const InsightBox = ({ changePoint, events = [] }) => {
  if (!changePoint) return null;

  const cpDate = new Date(changePoint.date || changePoint);
  const nearbyEvents = events.filter(event => {
    if (!event.date) return false;
    const eventDate = new Date(event.date);
    const diffDays = Math.abs(eventDate - cpDate) / (1000 * 60 * 60 * 24);
    return diffDays <= 30;
  });

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      marginTop: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "5px"
    }}>
      <h3>Key Insight</h3>
      <p>
        A statistically significant change in Brent oil prices was detected
        around <strong>{cpDate.toISOString().split("T")[0]}</strong>.
      </p>

      {nearbyEvents.length > 0 ? (
        <>
          <p>This structural break closely aligns with the following market events:</p>
          <ul>
            {nearbyEvents.map((e, i) => (
              <li key={i}>{e.event} ({e.date})</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No major documented market events occurred within ±30 days of this change point.</p>
      )}
    </div>
  );
};

export default InsightBox;
