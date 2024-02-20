import React, { useEffect, useState } from 'react';
import {notify} from './toast'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate'
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';


const SignUp = () => {
   const [data , setData] = useState({
    name : "",
    email : "",
    password : "",
    confirmPassword:"",
    isAccepted:false

   });


   const [errors , setErrors] = useState({});
   const [Touched , setTouched] = useState({});

   useEffect(() => {
      setErrors(validate(data , SignUp))
      console.log(errors)
   }, [data, Touched])


   const changeHandler = event => {
      if(event.target.value ==="isAccepted"){
         setData({...data , [event.target.name]: event.target.checked})
      } else{
         setData({...data , [event.target.name]: event.target.value})
      }
      console.log(data)
   }

   const focusHandler = event => {
   setTouched({...Touched , [event.target.name] : true})

}

const submitHandler = event => {
   event.preventDefault();
   if (!Object.keys(errors).length){
    notify("you signed in successfully" , "success")      
   }
   else {
      notify("invalid data!" , "error")   
      setTouched({
         name:true,
         email:true,
         password:true,
         confirmPassword:true,
         isAccepted:true,
      })
   }
}

 return (

  <div className={styles.container}>

     <form onSubmit={submitHandler} className={styles.formContainer}>

      <h2 className={styles.header}>SignUp</h2>

      <div className={styles.formField}>
       <label>name</label>
       <input
        className={(errors.name &&  Touched.name) ? styles.uncompleted : styles.formInput}
        name="name" 
        value={data.name}
        type='text'
        onChange={changeHandler}
        onFocus = {focusHandler}
        />
       {errors.name &&  Touched.name && <span>{errors.name}</span>}
      </div>

      <div className={styles.formField}>
       <label>email</label>
       <input 
        className={(errors.email &&  Touched.email) ? styles.uncompleted : styles.formInput}
        name="email"  
        value={data.email} 
        type='text' 
        onChange={changeHandler} 
        onFocus = {focusHandler}
        />
       {errors.email &&  Touched.email && <span>{errors.email}</span>}

      </div>

      <div className={styles.formField}>
       <label>password</label>
       <input 
        className={(errors.password &&  Touched.password) ? styles.uncompleted : styles.formInput}
        name="password"  
        value={data.password} 
        type='password' 
        onChange={changeHandler} 
        onFocus = {focusHandler} 
        />
       {errors.password &&  Touched.password && <span>{errors.password}</span>}

      </div>

      <div className={styles.formField}>
       <label>confirmPassword</label>
       <input
        className={(errors.confirmPassword &&  Touched.confirmPassword) ? styles.uncompleted : styles.formInput} 
        name="confirmPassword"  
        value={data.confirmPassword} 
        type='password' 
        onChange={changeHandler} 
        onFocus = {focusHandler}
        />
       {errors.confirmPassword &&  Touched.confirmPassword && <span>{errors.confirmPassword}</span>}

      </div>

      <div className={styles.formField}>
      <div className={styles.checkBoxContainer}>
      <label>I Accept terms of privacy policy</label>
       <input 
        name="isAccepted"  
        value={data.isAccepted} 
        type='checkbox' 
        onChange={changeHandler} 
        onFocus = {focusHandler}
        />
      </div>
              {errors.isAccepted &&  Touched.isAccepted && <span>{errors.isAccepted}</span>}

      </div>

      <div className={styles.formButtons}>
       <Link to='/login'>Login</Link>
       <button type='submit'>submit</button>
      </div>
     </form>

     <ToastContainer />

  </div>
 );
};

export default SignUp;