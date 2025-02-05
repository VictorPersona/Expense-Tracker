import React from 'react'
import expenseData from '../assets/expenseData.json'
import Expense from './Expense'

function ExpenseTable({ expenseArray }) {
  return (
    <div>
      <h3>Expense Table</h3>

      {expenseArray.length === 0 ? (
        <h4>Add an expense</h4>
      ) : (
        expenseArray.map((expense) => {
          return (
            <Expense
              date={expense.date}
              type={expense.type}
              amount={expense.amount}
              key={expense.id}
            />
          )
        })
      )}
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
