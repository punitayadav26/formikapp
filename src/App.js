import { useState } from "react";
import { Formik, Form , Field} from "formik";
import * as Yup from 'yup';

const SignupSchema=Yup.object().shape({
  firstname:Yup.string('invalid firstname type').required("First name is required!")
  .min(3,"Name cannot be lass than 3 chars")
  .max(30,"name is too long"),

  lastname:Yup.string('invalid lastname type').required("last name is required!")
  .min(3,"Name cannot be lass than 3 chars")
  .max(30,"name is too long"),

  useremail:Yup.string()
  .email("email type invalid").required("email is required"),

  userpassword:Yup.string().required("Password is required")
  .min(6,"Password needs to be a min of 6 chars").max(12,"password too long!"),
});

function App() {
  const [initialFormValues]=useState({
    firstname:"",
    lastname:"",
    useremail:"",
    userpassword:"",
  }
  );
  const handleFormSubmit=async (values)=>{
    console.log(values);
  }
  return (
    <div className="App">
      <h1>Sign up to this formik form !!</h1>
      <Formik validationSchema={SignupSchema} initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        { ({errors,touched})=>(
          <Form className="login-form">
          <label>
            First Name
          <Field type="text" name="firstname"></Field>
          </label>
          {errors.firstname && touched.firstname ? (
            <div>{errors.firstname}</div>
          ) : null}

          <label>
            Last Name
          <Field  type="text" name="lastname"></Field>
          </label>
          {errors.lastname && touched.lastname ? (
            <div>{errors.lastname}</div>
          ) : null}
          <label>
            Email
            <Field type="email" name="useremail"></Field>
            </label>
            {errors.useremail && touched.useremail ? (
            <div>{errors.useremail}</div>
          ) : null}
          <label>
            Password
          <Field  type="password" name="userpassword"></Field>
          </label>
          {errors.userpassword && touched.userpassword ? (
            <div>{errors.userpassword}</div>
          ) : null}
          <button type='submit'>Sign Up</button>
        </Form>
        )}
      </Formik>
    </div>
  );
}
export default App;
