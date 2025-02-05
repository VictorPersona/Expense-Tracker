import React, { useEffect, useState } from 'react'

function CreateExpense({ addExpense }) {
  const [expenseType, setExpenseType] = useState('')
  const [expenseDate, setExpenseDate] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')
  const typeOnChange = (e) => {
    setExpenseType(e.target.value)
  }
  const amountOnChange = (e) => {
    setExpenseAmount(e.target.value)
  }
  const dateOnChange = (e) => {
    setExpenseDate(e.target.value)
  }

  const handleOnClick = () => {
    const expenseToBeAdded = {
      id: crypto.randomUUID(),
      type: expenseType,
      amount: expenseAmount,
      date: expenseDate,
    }
    addExpense(expenseToBeAdded)
  }
  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    setExpenseDate(formattedDate)
  }, [])
  return (
    <div>
      <input
        type="text"
        value={expenseType}
        placeholder="Type"
        onChange={typeOnChange}
      />
      <input
        type="number"
        value={expenseAmount}
        placeholder="Amount"
        onChange={amountOnChange}
      />
      <input type="date" value={expenseDate} onChange={amountOnChange} />
      <button type="button" className="btn btn-primary" onClick={handleOnClick}>
        Create
      </button>
    </div>
  )
}

export default CreateExpense
