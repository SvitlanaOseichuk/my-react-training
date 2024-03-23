import React from 'react'

const Filter = ({value, onFilter}) => {
  return (
    <div>
    <p >Search by name</p>
    <input
      type="text"
      value={value}
      onChange={(evt) => onFilter(evt.target.value)}
    />
  </div>
  )
}

export default Filter


  