import React from "react";
import "./index.css";
import NewExpense from "./component/Expenses/NewExpense";
import Expenses from "./component/Expenses/Expenses";

const App = () => {
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "100",
    date: new Date(2023, 1, 12),
  },
  { id: "e2", title: "New TV", amount: "500", date: new Date(2021, 2, 11) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "400",
    date: new Date(2023, 5, 2),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: "450",
    date: new Date(2019, 2, 5),
  },
];
  return (
    <div>
      <NewExpense/>
     {/* <h1>Lets Get Started</h1> */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
