import { useState } from "react";
import './Expense.module.css'
const ExpenseItem = (props) => {
  const expenseItem = props.expenseItem;
  console.log(expenseItem);

  return (
    <ul>
      {expenseItem.map((expenseItem) => (
        <li key={expenseItem.money + expenseItem.description}>
          {expenseItem.money} {expenseItem.description} {expenseItem.category}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseItem;