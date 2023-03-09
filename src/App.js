// import './App.css';
import FormInput from './components/FormInput';
import { useState } from 'react';

function App() {
   const[values, setValues]=useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
   });

  const inputs=[{
   id:1,
   name:'username',
   type:"text",
   placeholder:"username",
   errormessage:"username should be 3-16 characters and shouldn't include any special characters",
   label:"Username",
   pattern:"^[A-Za-z0-9]{3,16}$",
   required:true
 

  },{
    id:2,
    name:'email',
    type:"email",
    placeholder:"email",
    errormessage:"it should be a valid email address!",
    label:"Email",
    required:true
 
 
   },{
    id:3,
    name:'birthday',
    type:"date",
    placeholder:"birthday",
    errormessage:"",
    label:"Birthday"
 
   },
   {
    id:4,
    name:'password',
    type:"password",
    placeholder:"Password",
    errormessage:"password should be 8-20 characters and should include 1 letter, 1 number and 1 special character",
    label:"Password",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true
 
 
   },
   {
    id:5,
    name:'confirmPassword',
    type:"password",
    placeholder:"confirm Password",
    errormessage:" passwords don't match",
    label:"Confirm Password",
    pattern:values.password,
    required:true
 
   },
   
    


]

  const handleSubmit=(e)=>{
    e.preventDefault()

}

const handleOnchange=(e)=>{
  setValues({...values, [e.target.name]:e.target.value})
}

console.log(values)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
      {inputs.map((input)=>(
      <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleOnchange}/> 
      ))}
     
     <button>Submit</button>
     </form>

    </div>
  );
}

export default App;
