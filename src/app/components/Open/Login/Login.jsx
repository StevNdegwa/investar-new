import React from "react";
import {Redirect, useLocation} from "react-router-dom"
import {Formik} from 'formik';

import {Loader} from "../../styles";

export default function Login({style}){
  const [openPortal, setOpenPortal] = React.useState(false)
  
  /**
  const location= useLocation();
  
  if(openPortal){
    switch(location.pathname){
      case "/":
        return <Redirect to="/app?demo=false"/>
      default:
        return <Redirect to="?demo=false"/>
    }
  }
  **/
  
  return (
    <Formik initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email is required';
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          
          setSubmitting(false);
        }, 400);
      }}
    >
    {
      ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit} style={style}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
          <p className="input-error">{errors.email && touched.email && errors.email}</p>
          <input type="password" name="password" placeholder="Password" autoComplete="new-password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
          <p className="input-error">{errors.password && touched.password && errors.password}</p>
          <div className="actions">
            <div><a href="#">Forgot Your Password?</a></div>
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? <Loader size="20px"/> : "Login"}</button>
          </div>
        </form>)
    }
  </Formik>)
}