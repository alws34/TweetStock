import React from "react";
import "./Styles/HeaderStyle.css";

export default function EHeader(props) {
  return (
    <div className="Eheader">
      <main>
        <span><p>{props.text}</p></span>
      </main>
    </div>
  );
}
