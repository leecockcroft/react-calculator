import React, { Component } from 'react';
import './ClearButton.css'
  const ClearButton = props =>{
  return (
  <div className='clear' onClick={props.clear}>{props.name}</div>
)
  
  
}
export default ClearButton
