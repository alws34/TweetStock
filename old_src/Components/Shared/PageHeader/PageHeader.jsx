import React from "react";
import "./HeaderStyle.css";

export default function PageHeader(props) {
  return (
    <div className="PageHeader">
      <p>{props.text}</p>
    </div>
  );
}
