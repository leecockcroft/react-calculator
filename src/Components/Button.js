import React, { Component } from 'react';
import './Button.css'



//return boolean
const isOperator=val=>{
   return !isNaN(val) || val==='.' || val ==='='
  
  
}

const Button = props =>(
  
  <div className={`button-wrapper ${isOperator(props.children)?null:'operator'}` }onClick={()=>props.handleClick(props.children)} value={props.children}>
  {props.children}
</div>
  
)
  
  
export default Button;
