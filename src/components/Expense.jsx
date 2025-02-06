import React from 'react'

function Expense({ expenseDetails, deleteExpense }) {
  const handleOnClick = (e) => {
    if (e.target.name === 'delete') {
      deleteExpense(expenseDetails)
    }
  }

  return (
    <div className="container border p-3 rounded">
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-primary">
            Edit
          </button>
        </div>
        <div className="col">
          <div className="container">{expenseDetails.type}</div>
        </div>
        <div className="col">
          <div className="container">{expenseDetails.amount}</div>
        </div>
        <div className="col">
          <div className="conatiner">{expenseDetails.date}</div>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            name="delete"
            onClick={handleOnClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Expense

/*
Data to be submitted 
    1.Date
    2.Type of Transaction
                 3.Type of Expense or Credit
    4.Amount
*/
