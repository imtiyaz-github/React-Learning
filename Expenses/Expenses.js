import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

const  Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem
            title={props.items[0].title}
            amout={props.items[0].amout}
            date={props.items[0].date}
        />
        <ExpenseItem
        title={props.items[2].title}
        amout={props.items[2].amout}
        date={props.items[2].date}
        />
         <ExpenseItem
        title={props.items[3].title}
        amout={props.items[3].amout}
        date={props.items[3].date}
        />
    </Card>
    );
}

export default Expenses;