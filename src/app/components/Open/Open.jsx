import React from 'react';
import { Formik } from 'formik';

import "./styles.scss";

import MobileCodes from "./MobileCodes";

export default function Open(){
  const [login, setLogin] = React.useState(true);
  const [signup, setSignup] = React.useState(false);
  
  function handleTabClick(tab){
    switch(tab){
      case "login":
        setSignup(false);
        setLogin(true);
        break;
      case "signup":
        setLogin(false);
        setSignup(true);
        break;
    }
  }
  
  return (
    <div id="login">
      <div className="tabs">
        <div className={`tab ${login && "active"}`} onClick={()=>handleTabClick("login")}>Login</div>
        <div className={`tab ${signup && "active"}`} onClick={()=>handleTabClick("signup")}>Signup</div>
      </div>
      {login ? <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
      {
        ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
            <p className="input-error">{errors.email && touched.email && errors.email}</p>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
            <p className="input-error">{errors.password && touched.password && errors.password}</p>
            <button type="submit" disabled={isSubmitting}>Login</button>
          </form>)
      }
      </Formik> : <>
       <Formik
        initialValues={{username:'', email: '', password: '', confirmPassword: '' , mobile:''}}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if(!values.password){
            errors.password = "A password is required";
          }else if(!/[A-Za-z0-9@_]{8,30}/.test(values.password)){
            errors.password = "Use the recomended password structure";
          }
          
          if(values.password !== values.confirmPassword){
            errors.confirmPassword = "The Confirm password should be same as Password"
          }
          
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
      {
        ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Full name" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
            <p className="input-error">{errors.username && touched.username && errors.username}</p>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
            <p className="input-error">{errors.email && touched.email && errors.email}</p>
             <MobileCodes input={<input type="text" name="mobile" placeholder="Mobile number" onChange={handleChange} onBlur={handleBlur} value={values.mobile}/>}/>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
            <p className="input-error">{errors.password && touched.password && errors.password}</p>
            <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword}/>
            <p className="input-error">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</p>
            <button type="submit" disabled={isSubmitting}>Signup</button>
            <button>Demo Ac</button>
          </form>)
      }
      </Formik>
      <div id="googleSignup"><button>Signup with Google</button></div>
      </>}
  </div>);
}
