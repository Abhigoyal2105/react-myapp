import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  // Function being called by the button at the end
  function clickHandler() {
    setTitle("Abhishekkk");
    // console.log("button onClick");
  }

  return (
    <div className="expense-item">
      {/* Date component below */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <div>
          {/* Render the 'title' state instead of 'props.title' */}
          <h2>{title}</h2>
        </div>
        {/* Price component below */}
        <ExpensePrice price={props.price} />
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
