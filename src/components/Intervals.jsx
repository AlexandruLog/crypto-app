import React, { useState } from "react";

function Intervals(props) {
  return (
    <div className="intervals mb-5 text-center">
      <div
        className="btn-group container-lg"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className={`btn btn-sm btn-outline-secondary ${
            props.opened ? "" : "disabled"
          }`}
          onClick={() => {
            props.getHistoryData(props.selectedCoin.id, 1);
          }}
        >
          24h
        </button>
        <button
          type="button"
          className={`btn btn-sm btn-outline-secondary ${
            props.opened ? "" : "disabled"
          }`}
          onClick={() => {
            props.getHistoryData(props.selectedCoin.id, 7);
          }}
        >
          7d
        </button>
        <button
          type="button"
          className={`btn btn-sm btn-outline-secondary ${
            props.opened ? "" : "disabled"
          }`}
          onClick={() => {
            props.getHistoryData(props.selectedCoin.id, 30);
          }}
        >
          30d
        </button>
        <button
          type="button"
          className={`btn btn-sm btn-outline-secondary ${
            props.opened ? "" : "disabled"
          }`}
          onClick={() => {
            props.getHistoryData(props.selectedCoin.id, 60);
          }}
        >
          60d
        </button>
      </div>
    </div>
  );
}

export default Intervals;
