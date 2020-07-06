import React from "react";
import {Redirect} from "react-router-dom"
import {Formik} from 'formik';

import {Loader} from "../../styles";
import MobileCodes from "./MobileCodes";

export default function Signup({style}){
  const [openPortal, setOpenPortal] = React.useState(false);
  
  if(openPortal){
    return <Redirect to="/app"/>
  }
  
  return (
    <Formik initialValues={{username:'', email: '', password: '', confirmPassword: '' , mobile:''}}
      validate={(values) => {
        const errors = {};
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
          <input type="text" name="username" placeholder="Full name" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
          <p className="input-error">{errors.username && touched.username && errors.username}</p>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
          <p className="input-error">{errors.email && touched.email && errors.email}</p>
          <MobileCodes input={<input type="text" name="mobile" placeholder="Mobile number" onChange={handleChange} onBlur={handleBlur} value={values.mobile}/>}/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
          <p className="input-error">{errors.password && touched.password && errors.password}</p>
          <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword}/>
          <p className="input-error">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</p>
          <div className="actions">
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? <Loader size="20px"/> : "Signup"}</button>
          </div>
          <div className="actions">
            <button>Demo Ac</button>
          </div>
          <div id="googleSignup"><button>Signup with Google</button></div>
        </form>)
      }
  </Formik>)
}