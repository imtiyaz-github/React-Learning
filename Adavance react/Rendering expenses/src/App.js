import React, {useState} from "react";
import "./index.css";
import NewExpense from "./component/New Expense/NewExpense";
import Expenses from "./component/Expenses/Expenses";


  const DUMMY_EXPENSES = [
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
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  const App = () => {

   const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

   const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
        return [expense, ...expenses];
    });
   };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <h1>Lets Get Started</h1> */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
