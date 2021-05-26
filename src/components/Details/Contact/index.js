import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 5rem;

  .submitme {
    display: block;
    padding: 14px 15px;
    font-size: 1.3rem;
    font-family: "Epilogue", sans-serif;
    font-weight: 800;
    color: #fff;
    background: #00b2ff;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: #006aff;
    }
  }

  label,
  input {
    display: block;
    font-family: "IBM Plex Sans", sans-serif;
  }

  .form_group {
    margin: 2rem 0;

    .form_control {
      padding: 8px 0;
      width: 65%;
      background: #201b1b;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      color: #fff;
    }
    .form_control_text {
      padding: 8px 0;
      background: #201b1b;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      color: #fff;
    }
  }
`;

const Contact = () => {
  return (
    <FormContainer>
      <h1>Work with me?</h1>

      <form
        action="https://formsubmit.co/jmarvicdeleon21@gmail.com"
        method="POST"
      >
        <div className="form_group">
          <label for="name">Name*</label>
          <input
            type="text"
            name="name"
            className="form_control"
            placeholder="John Doe"
            autoComplete="off"
            required
          />
        </div>
        <div className="form_group">
          <label for="email">Email*</label>
          <input
            type="email"
            name="email"
            className="form_control"
            placeholder="johndoe@email.com"
            autoComplete="off"
            required
          />
        </div>
        <div className="form_group">
          <label for="body">Message</label>
          <textarea
            cols="70"
            rows="20"
            name="body"
            placeholder="Write your message here..."
            className="form_control_text"
            required
          />
        </div>
        <button type="submit" name="submit" className="submitme">
          Send me a mail!
        </button>
      </form>
    </FormContainer>
  );
};

export default Contact;

// import React from "react";
// import styled from "styled-components";
// import { Formik, useField, Form } from "formik";
// import * as Yup from "yup";

// const FormContainer = styled.div`
//   padding: 5rem;
//   h1 {
//     margin-bottom: 2rem;
//   }
//   input,
//   label {
//     background: #201b1b;
//     width: 450px;
//     height: 30px;
//     display: block;
//     font-family: "Courier Prime";
//     color: #fff;
//     font-size: 14px;
//   }
//   label {
//     margin-top: 1rem;
//   }

//   .text-input {
//     border: 1px solid #201b1b;
//     outline: none;
//     border-bottom: 1px solid whitesmoke;
//   }

//   .text-area {
//     background: #201b1b;
//     border: 1px solid #201b1b;
//     outline: none;
//     border-bottom: 1px solid whitesmoke;
//     color: #fff;
//   }

//   .error {
//     color: red;
//     font-size: 12px;
//     font-weight: 100;
//     margin-bottom: 1rem;
//   }

//   .submit_button {
//     display: block;
//     padding: 10px 13px;
//     background: orange;
//     border: 1px solid #fff;
//     margin-top: 10px;
//     font-family: "Epilogue", sans-serif;
//     cursor: pointer;
//   }
// `;

// const CustomTextInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// const CustomTextArea = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <textarea
//         rows="12"
//         cols="75"
//         className="text-area"
//         {...field}
//         {...props}
//       />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// const Contact = () => {
//   return (
//     <FormContainer>
//       <Formik
//         initialValues={{ name: "", email: "", body: "" }}
//         validationSchema={Yup.object({
//           name: Yup.string()
//             .min(3, "Must be at least 3 characters long")
//             .max(15, "Must be 15 characters or less")
//             .required("Required"),
//           email: Yup.string()
//             .email("Invalid email address")
//             .required("Required"),
//           body: Yup.string().required("Please type your inquiry"),
//         })}
//         onSubmit={(values, { setSubmitting, resetForm }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             resetForm();
//             setSubmitting(false);
//           }, 2000);
//         }}
//       >
//         {(props) => (
//           <Form className="form-mid">
//             <h1>Work with Me</h1>
//             <CustomTextInput
//               label="Name"
//               name="name"
//               type="text"
//               placeholder="John Doe"
//             />
//             <CustomTextInput
//               label="Email"
//               name="email"
//               type="email"
//               placeholder="johndoe@email.com"
//             />
//             <CustomTextArea
//               label="Message"
//               name="body"
//               placeholder="Hi there!"
//             />
//             <button name="submit" type="submit" className="submit_button">
//               Send Mail
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </FormContainer>
//   );
// };

// export default Contact;
