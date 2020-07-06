import React from "react";
import {Redirect} from "react-router-dom"
import {Formik} from 'formik';

import {Loader} from "../../styles";

export default function Login({style}){
  const [openPortal, setOpenPortal] = React.useState(false)
  
  if(openPortal){
    return <Redirect to="/app"/>
  }
  
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
          setOpenPortal(true);
          setSubmitting(false);
        }, 400);
      }}
    >
    {
      ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit} style={style}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
          <p className="input-error">{errors.email && touched.email && errors.email}</p>
          <input type="password" name="password" placeholder="Password" autocomplete="new-password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
          <p className="input-error">{errors.password && touched.password && errors.password}</p>
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? <Loader size="20px"/> : "Login"}</button>
        </form>)
    }
  </Formik>)
}