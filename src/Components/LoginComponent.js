import React, { useEffect, useState } from 'react';
import {notify} from './toast'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate'
import styles from './SignUp.module.css'
// import { Link } from 'react-router-dom';


const LoginComponent = () => {
   const [data , setData] = useState({
    email : "",
    password : "",

   });


   const [errors , setErrors] = useState({});
   const [Touched , setTouched] = useState({});

   useEffect(() => {
      setErrors(validate(data, LoginComponent))
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
    notify("you login in successfully" , "success")      
   }
   else {
      notify("invalid data!" , "error")   
      setTouched({
         email:true,
         password:true,
      })
   }
}

 return (

  <div className={styles.container}>

     <form onSubmit={submitHandler} className={styles.formContainer}>

      <h2 className={styles.header}>Login</h2>


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

    
      <div className={styles.formButtons}>
       {/* <Link to = '/signup'>SignUp</Link> */}
       <button type='submit'>Login</button>
      </div>
     </form>

     <ToastContainer />

  </div>
 );
};

export default LoginComponent;