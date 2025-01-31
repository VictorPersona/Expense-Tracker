import React from 'react'
import ExpenseTable from './components/ExpenseTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateExpense from './components/CreateExpense'
function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <CreateExpense />
      <ExpenseTable />
    </div>
  )
}

export default App
