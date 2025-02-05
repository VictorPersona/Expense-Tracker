import React, { useState } from 'react'
import ExpenseTable from './components/ExpenseTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateExpense from './components/CreateExpense'

function App() {
  const [expenseArray, setExpenseArray] = useState([])

  const addExpense = (expense) => {
    const newExpneseArray = [...expenseArray, expense]
    setExpenseArray(newExpneseArray)
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <CreateExpense addExpense={addExpense} />
      <ExpenseTable expenseArray={expenseArray} />
    </div>
  )
}

export default App
