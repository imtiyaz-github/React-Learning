import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';



  // const [title, setTitle] = useState(props.title);
  // const [amount,setAmout] = useState(props.amount)
  // console.log('ExpenseItem evaluated');

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //    console.log(title);
   
  //    } 
  //     const changeAmoutHandler = () => {
  //       setAmout('100');
  //       console.log(amount);
  //     }

  const ExpenseItem = (props) => {
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler} style={{
        padding : "10px", borderRadius: "5px " , margin: '10px', background: "#40005d",color: 'white' ,cursor:"pointer"}}>Change Title</button>
      <button onClick={changeAmoutHandler} style={{
        padding : "10px", borderRadius: "5px " , margin: '10px', background: "#40005d",color: 'white' ,cursor:"pointer" */}
{/*       
      >Change Amout</button> */}
  
    </Card>
    <h1 style={{color : "white"}}> "Only single Expense here. Please add more..."</h1>
    </li>
  );
}


export default ExpenseItem;
