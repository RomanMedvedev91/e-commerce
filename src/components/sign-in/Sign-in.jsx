import React from "react";
// import { CustomButton } from "../custom-button/Custom-button";
// import FormInput from "../form-input/Form-input";
// import "./Sign-in.scss";

import { signInWithGoogle } from "../../utils/firebase/firebase.utils";
// import { auth } from "firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const responce = await signInWithGoogle();
    console.log(responce);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = this.state;
//     try {
//       await auth().signInWithEmailAndPassword(email, password);
//       this.setState({ email: "", password: "" });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   handleChange = (e) => {
//     const { value, name } = e.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div className='sign-in'>
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name='email'
//             type='email'
//             handleChange={this.handleChange}
//             label='email'
//             value={this.state.email}
//             required
//           />
//           <FormInput
//             name='password'
//             type='password'
//             value={this.state.password}
//             label='password'
//             handleChange={this.handleChange}
//             required
//           />
//           <div className='buttons'>
//             <CustomButton type='submit'>Sign in</CustomButton>
//             {
//               <CustomButton
//                 type='button'
//                 onClick={signInWithGoogle}
//                 isGoogleSignIn
//               >
//                 Sign in with Google
//               </CustomButton>
//             }
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SignIn;
