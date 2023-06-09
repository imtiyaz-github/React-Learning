import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmout, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amoutChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

//   const [userInput, setUserInput] = useState({
//     enteredTitle: " ",
//     enteredAmout: " ",
//     enteredDate: " ",
//   });
  //   const titleChangeHandler = (event) => {
  //     //    setEnteredTitle(event.target.value);
  //     //    setUserInput({
  //     //     ...userInput,
  //     //     enteredTitle:event.target.value,
  //     //    });
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   };
  //   const amoutChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredAmout: event.target.value };
  //     });
  //     const dateChangeHandler = (event) => {
  //       setUserInput((prevState) => {
  //         return { ...prevState, enteredAmout: event.target.value };
  //       });
  //     };
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmout,
        date: new Date(enteredDate),
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amoutChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
