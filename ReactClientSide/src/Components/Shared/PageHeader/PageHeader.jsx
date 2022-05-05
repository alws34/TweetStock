import React from "react";
import "./HeaderStyle.css";

export default function PageHeader(props) {
  return (
    <div className="PageHeader">
      <main>
        <span>
          <p>{props.text}</p>
        </span>
      </main>
    </div>
  );
}
