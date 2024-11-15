import React, { useState } from 'react'
import styles from './Styling/loginsignup.module.scss'
const LoginSignup = () => {
  const[state,setState] = useState("Login");
  const[formData,setFormData] = useState({
    name:"",
    password:"",
    email:""
  });
  const changeHandler = (e)=>{
setFormData({...formData,[e.target.name]:e.target.value});

  }
  const login = async()=>{
    let responseData;
    await fetch("http://localhost:4000/login",{
     method:"POST",
     headers:{
       Accept:"application/form-data",
       "Content-Type":"application/json"
     },
     body:JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data);
   if(responseData.success){
     localStorage.setItem("auth-token",responseData.token);
     window.location.replace("/")
   }else{
     alert("Something went wrong");
   }
    
  }
  const signUp = async()=>{
   let responseData;
   await fetch("http://localhost:4000/signup",{
    method:"POST",
    headers:{
      Accept:"application/form-data",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(formData)
   }).then((response)=>response.json()).then((data)=>responseData=data);
  if(responseData.success){
    localStorage.setItem("auth-token",responseData.token);
    window.location.replace("/")
  }else{
    alert("Something went wrong");
  }
  }
  return (
    <div className={styles.loginSignUp}>
    <div className={styles.loginSignupContaier}>
    <h1>{state}</h1>
    <div className={styles.loginSignUpFields}>
    {state === "Sign Up" ?  <input type='text' value={formData.name} onChange={changeHandler} name='name' placeholder='Your name'/> : <></>}
   
    <input name='email' onChange={changeHandler} value={formData.email} type='email' placeholder='Email Address'/>
    <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password'/>
    </div>
    <button onClick={state === "Sign Up" ? signUp : login}>Continue</button>
    {state === "Sign Up" ?  <p className={styles.loginSignUpLogin}>Already have an account? <span onClick={() => setState("Login")}>Login Here</span></p>:  <p className={styles.loginSignUpLogin}>Create an account ? <span onClick={() => setState("Sign Up")}>Click Here</span></p>}
   
    <div className={styles.loginSignUpAgree}>
    <input type='checkbox' name='' id=''/>
    <p>By Continuing , i agree to the terms of use and privacy policy</p>
    </div>
    </div>
    
      
    </div>
  )
}

export default LoginSignup
