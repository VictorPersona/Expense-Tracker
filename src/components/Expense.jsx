import React from 'react'

function Expense({ date, type, amount }) {
  return (
    <div className="container border p-3 rounded">
      <div className="conatiner">{date}</div>
      <div className="container">{type}</div>
      <div className="container">{amount}</div>
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
