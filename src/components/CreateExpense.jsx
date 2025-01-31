import React, { useEffect, useState } from 'react'

function CreateExpense() {
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
      <button>Create</button>
    </div>
  )
}

export default CreateExpense
