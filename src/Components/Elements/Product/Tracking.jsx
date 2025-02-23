import React from "react";


const TrackingStatus = ({ trackingStage }) => {
  const stages = ["Processing", "Shipping", "Out for Delivery", "Delivered"];
  const stageColors = {
    "Processing": "bg-yellow-500",
    "Shipping": "bg-blue-500",
    "Out for Delivery": "bg-orange-500",
    "Delivered": "bg-green-500",
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 text-gray-700 rounded-md shadow-md">
      <p className="font-semibold">Tracking Status:</p>
      <div className="tracking-container">
        {stages.map((stage, index) => (
          <div key={index} className="tracking-step">
            <div className={`circle ${trackingStage === stage ? "active" : ""} ${stageColors[stage]}`}></div>
            <p className={trackingStage === stage ? "font-bold text-green-700" : "text-gray-500"}>{stage}</p>
            {index < stages.length - 1 && <div className="line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingStatus;