/*import React,{useState,useEffect,useRef} from 'react'
import './App.css';
import AccountList from './AccountList'
import { Formik, Field, Form } from 'formik';
export default function Account() {

  const nameRef=useRef();
  const emailRef=useRef();
    const [accounts,setAccounts]=useState([])//const accounts=[]
   
    useEffect( ()=>{
        console.log("useeffect called")
        accounts.forEach( (account) =>{
            console.log(JSON.stringify(account))
         })
        }, [accounts])
         
    
 

    let handleClick= ()=>{
      
        setAccounts([...accounts,{'name':nameRef.current.value,'email':emailRef.current.value}])
       
    }
    return (
        <div>
        Name: <input type="text" ref={nameRef} placeholder="Enter name"/><br/>
        Email:  <input type="email" ref={emailRef}  placeholder="enter email" />
        <div align="center"><button className="btn btn-danger btn-sm" type="button" onClick={handleClick}>Click Me</button></div>
        <AccountList accounts={accounts}/>

        </div>
    )
}*/

/*import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';


const Account = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
ReactDOM.render(<Account />, document.getElementById('root'));
export default Account*/

 import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from 'react-bootstrap';



export default function Account() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="signup">
      <h1>SIGN UP</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.full_name}</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          {formik.errors.confirm_password &&
            formik.touched.confirm_password && (
              <p>{formik.errors.confirm_password}</p>
            )}
        </div>
        <div>
      
        <Button color="primary" type="submit">submit</Button>
        </div>
      </form>
    </div>
  );
}







