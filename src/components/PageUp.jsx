import React from "react";

function PageUp() {
  return (
    <div
      className="pageup"
      style={{ position: "fixed", right: "2px", bottom: "20px", zIndex: "1" }}
    >
      <a
        className="btn btn-secondary text-white p-2 opacity-75 rounded-pill"
        href="#top-page-nav"
      >
        <i className="bi bi-arrow-up px-1"></i>
      </a>
    </div>
  );
}

export default PageUp;
