import React from 'react'
import styles from './Styling/loginsignup.module.scss'
const LoginSignup = () => {
  return (
    <div className={styles.loginSignUp}>
    <div className={styles.loginSignupContaier}>
    <h1>Sign Up</h1>
    <div className={styles.loginSignUpFields}>
    <input type='text' placeholder='Your name'/>
    <input type='email' placeholder='Email Address'/>
    <input type='password' placeholder='Password'/>
    </div>
    <button>Continue</button>
    <p className={styles.loginSignUpLogin}>Already have an account? <span>Login Here</span></p>
    <div className={styles.loginSignUpAgree}>
    <input type='checkbox' name='' id=''/>
    <p>By Cotinuing , i agree to the terms of use and privacy policy</p>
    </div>
    </div>
    
      
    </div>
  )
}

export default LoginSignup
