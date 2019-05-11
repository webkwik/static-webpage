import React, { Component } from "react";
import "./FooterForms.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

class FooterForms extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required")
        })}
        onSubmit={fields => {
          alert("GOOD EMAIL \n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <Form className="footer-forms">
            <div className="input-error">
              <Field
                name="email"
                type="text"
                placeholder="Email"
                className={
                  "footer-input" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button className="footer-button" type="submit">
              SENT
            </button>
          </Form>
        )}
      />
    );
  }
}

export default FooterForms;

// class FooterForms extends Component {
//   render() {
//     return (
//       <form className="footer-forms">
//         <input className="footer-input" type="email" placeholder="Email" />
//         <button className="footer-button" type="button">
//           SENT
//         </button>
//       </form>
//     );
//   }
// }

// export default FooterForms;
