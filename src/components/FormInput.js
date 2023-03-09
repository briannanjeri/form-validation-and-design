import React, { useState } from 'react'
import "./formInput.css"

const FormInput = (props) => {
 const[focused, setFocused]=useState(false)
  const { label, errormessage, onChange, id, ...inputprops }=props

  const handleFocus=(e)=>{
     setFocused(true)
  }


  return (
    <div className='FormInput'>
      <label>{label}</label>
        <input {...inputprops} onChange={onChange}  onBlur={handleFocus} 
        focused={focused.toString()} onFocus={()=>inputprops.name==="confirmPassword"&&setFocused(true)}/>
        <span>{errormessage}</span>
    </div>
  )
}

export default FormInput