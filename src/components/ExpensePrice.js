import React from 'react'

function ExpensePrice({price}) {
  return (
    <div>
      <div className="expense-item__price">{`$${price}`}</div>
    </div>
  )
}

export default ExpensePrice
