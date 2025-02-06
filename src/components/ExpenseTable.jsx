import React from 'react'
import expenseData from '../assets/expenseData.json'
import Expense from './Expense'

function ExpenseTable({ expenseArray, setExpenseArray }) {
  const deleteExpense = (expenseToDelete) => {
    const filteredExpenseArray = expenseArray.filter(
      (expense) => expense.id !== expenseToDelete.id
    )
    setExpenseArray(filteredExpenseArray)
  }
  return (
    <div>
      <h3>Expense Table</h3>

      {expenseArray.length === 0 ? (
        <h4>Add an expense</h4>
      ) : (
        expenseArray.map((expense) => {
          return (
            <Expense
              expenseDetails={expense}
              deleteExpense={deleteExpense}
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
