import React, { useEffect, useState } from 'react'

function CreateExpense({ addExpense }) {
  const [expenseData, setExpenseData] = useState({
    type: '',
    amount: '',
    date: '',
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setExpenseData((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }))
  }

  const handleOnClick = () => {
    if (
      expenseData.amount == '' ||
      expenseData.date == '' ||
      expenseData.type == ''
    ) {
      alert('Please fill all the details')
      return
    }
    const expenseToBeAdded = {
      id: crypto.randomUUID(),
      type: expenseData.type,
      amount: expenseData.amount,
      date: expenseData.date,
    }
    addExpense(expenseToBeAdded)

    setExpenseData({
      type: '',
      amount: '',
      date: '',
    })
  }
  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    setExpenseData((prevExpense) => ({ ...prevExpense, date: formattedDate }))
  }, [])
  return (
    <div>
      <input
        type="text"
        value={expenseData.type}
        name="type"
        placeholder="Type"
        onChange={handleOnChange}
      />
      <input
        type="number"
        value={expenseData.amount}
        placeholder="Amount"
        name="amount"
        onChange={handleOnChange}
      />
      <input
        type="date"
        value={expenseData.date}
        name="date"
        onChange={handleOnChange}
      />
      <button type="button" className="btn btn-primary" onClick={handleOnClick}>
        Create
      </button>
    </div>
  )
}

export default CreateExpense
