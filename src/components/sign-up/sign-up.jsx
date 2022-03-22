// import React from "react";

// import FormInput from "../form-input/Form-input";
// import { CustomButton } from "../custom-button/Custom-button";
// import {
//   auth,
//   createProfileDocument,
// } from "../../utils/firebase/firebase.utils";

import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h1>Sign up with your email and password</h1>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <label>Email</label>
        <input
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <label>Password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <button type='submit'>Sing Up</button>
      </form>
    </div>
  );
};
// class SignUp extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       displayName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { displayName, email, password, confirmPassword } = this.state;

//     if (password !== confirmPassword) {
//       alert("passwords don't match");
//       return;
//     }

//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );

//       await createProfileDocument(user, { displayName });

//       this.setState({
//         displayName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     const { displayName, email, password, confirmPassword } = this.state;
//     return (
//       <div className='sign-up'>
//         <h2 className='title'>I do not have a account</h2>
//         <span>Sign up with your email and password</span>
//         <form className='sign-up-form' onSubmit={this.handleSubmit}>
//           <FormInput
//             type='text'
//             name='displayName'
//             value={displayName}
//             onChange={this.handleChange}
//             label='Display name'
//             required
//           />
//           <FormInput
//             type='email'
//             name='email'
//             value={email}
//             onChange={this.handleChange}
//             label='Email'
//             required
//           />
//           <FormInput
//             type='password'
//             name='password'
//             value={password}
//             onChange={this.handleChange}
//             label='Password'
//             required
//           />
//           <FormInput
//             type='password'
//             name='confirmPassword'
//             value={confirmPassword}
//             onChange={this.handleChange}
//             label='Confirm Password'
//             required
//           />
//           <CustomButton type='submit'>SIGN UP</CustomButton>
//         </form>
//       </div>
//     );
//   }
// }

export default SignUp;
