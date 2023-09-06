import React from "react";
import "./EntriesContent.css";

function EntriesContent(props) {
  return (
    <div className="content">
      <div>{props.value_1}</div>
      <div>{props.value_2}</div>
      <div>{props.value_3}</div>
    </div>
  );
}

export default EntriesContent;
