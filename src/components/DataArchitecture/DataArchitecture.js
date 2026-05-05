import React from "react";
import "./DataArchitecture.scss";

export default function DataArchitecture() {
  return (
    <div className="data-arch-container">
      <h1 className="data-arch-title">Data Architecture</h1>
      <p className="data-arch-subtitle">
        Example of how data flows through systems
      </p>

      <div className="pipeline">
        <div className="box">API</div>
        <span>→</span>
        <div className="box">Airflow</div>
        <span>→</span>
        <div className="box">PostgreSQL</div>
        <span>→</span>
        <div className="box">Dashboard</div>
      </div>
    </div>
  );
}
