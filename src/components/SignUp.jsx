import React, { Component } from "react";
import { auth, createUserDocument } from "../firebase";
import { Formik } from "formik";
class SignUp extends Component {
  state = { displayName: "", email: "", password: "" };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async ({ displayName, email, password }) => {
    //const { email, password, displayName } = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(displayName);
      createUserDocument(user, { displayName });
    } catch (error) {
      alert(error);
    }

    this.setState({ displayName: "", email: "", password: "" });
  };

  render() {
    return (
      <Formik
        initialValues={{ displayName: "", password: "", email: "" }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          this.handleSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form className="SignUp" onSubmit={handleSubmit}>
            <input
              type="text"
              name="displayName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.displayName}
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    );
  }
}

export default SignUp;
