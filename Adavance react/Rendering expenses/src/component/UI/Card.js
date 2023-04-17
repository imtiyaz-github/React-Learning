import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const expenseData = {
  //     title: enteredTitle,
  //     amount: enteredAmout,
  //     date: new Date(enteredDate),
  //   };
  //   console.log(expenseData);
  // }

  return <div className={classes}>{props.children}</div>;
};

export default Card;