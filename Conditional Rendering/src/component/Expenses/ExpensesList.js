import React from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = <p>No expenses Found.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list_fallback">Found no Expenses.</h2>;
  }
  return (
    <ul className="expense-list">
      (
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      )
    </ul>
  );
};

export default ExpensesList;
