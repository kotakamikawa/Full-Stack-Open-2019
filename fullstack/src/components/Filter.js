import React, { useState } from 'react'

const Filter = (props) =>{
  return(
    <div>
      filter shown with
      <input
        value={props.showName}
        onChange={(e) => props.setShowName(e.target.value)}
      />
    </div>
  )
}

export default Filter