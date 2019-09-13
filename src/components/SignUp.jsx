<<<<<<< HEAD
import React, { Component } from "react";
import { auth, createUserDocument } from "../firebase";
import { Formik } from "formik";
class SignUp extends Component {
  state = { displayName: "", email: "", password: "" };
=======
import React, { Component } from 'react';

class SignUp extends Component {
  state = { displayName: '', email: '', password: '' };
>>>>>>> 5de4ac1a8265642f074fc634045064088fcae714

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

<<<<<<< HEAD
  handleSubmit = async ({ displayName, email, password }) => {
    //const { email, password, displayName } = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserDocument(user, { displayName });
    } catch (error) {
      alert(error);
    }

    this.setState({ displayName: "", email: "", password: "" });
  };

  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
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
              value={values.email}
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
=======
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ displayName: '', email: '', password: '' });
  };

  render() {
    const { displayName, email, password } = this.state;

    return (
      <form className="SignUp" onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Sign Up" />
      </form>
>>>>>>> 5de4ac1a8265642f074fc634045064088fcae714
    );
  }
}

export default SignUp;
