import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css"
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    price: 1300,
    date: new Date(2023, 6, 3),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    price: 3400,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e3",
    title: "Truck Insurance",
    price: 3040,
    date: new Date(2023, 7, 23),
  },
];

function App() {
  return (
    <>
    <NewExpense/>  
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </>
  );
}

export default App;
