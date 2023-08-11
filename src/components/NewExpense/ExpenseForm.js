import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [title, setEnterTitle] = useState("");
  const [amount, setEnterAmount] = useState("");
  const [date, setEnterDate] = useState("");

  function changeTitle(event) {
    setEnterTitle(event.target.value);
  }

  function changeAmount(event) {
    setEnterAmount(event.target.value);
  }

  function changeDate(event) {
    setEnterDate(event.target.value);
  }

  return (
    <form action="">
      <div className="new-expense--controls">
        <div className="new-expense--control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={changeTitle} />
        </div>
        <div className="new-expense--control">
          <label htmlFor="">Amount</label>
          <input type="number" onChange={changeAmount} />
        </div>
        <div className="new-expense--control">
          <label htmlFor="">Date</label>
          <input type="date" onChange={changeDate} />
        </div>
      </div>
      <div className="new-expense--actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
