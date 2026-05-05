import React from "react";
import "./loading.scss";

export default function Loading() {
  return (
    <div className="loader-container">
      <div className="loader-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <p className="loader-text">Loading Portfolio...</p>
    </div>
  );
}