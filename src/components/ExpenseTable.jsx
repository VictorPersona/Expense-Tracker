import React from 'react'
import expenseData from '../assets/expenseData.json'
import Expense from './Expense'
function ExpenseTable() {
  return (
    <div>
      <h3>Expesne Table</h3>

      {expenseData.map((expense) => {
        return (
          <Expense
            date={expense.date}
            type={expense.type}
            amount={expense.amount}
            key={expense.id}
          />
        )
      })}
    </div>
  )
}

export default ExpenseTable

/*
Data to be submitted 
    1.Date
    2.Type of Transaction
                 3.Type of Expense or Credit
    4.Amount
*/
