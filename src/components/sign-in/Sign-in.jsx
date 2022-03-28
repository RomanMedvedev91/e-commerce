import FormInput from "../form-input/Form-input";
import CustomButton from "../custom-button/Custom-button";
// import {
//   auth,
//   createProfileDocument,
// } from "../../utils/firebase/firebase.utils";

import { useContext, useState } from "react";
import {
  signInWithGoogle,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./Sign-in.scss";
import { UserContext } from "../../context/User.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGooglePopup = async () => {
    const { user } = await signInWithGoogle();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;

        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.log(error);
      }

      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            buttonType='google'
            onClick={signInWithGooglePopup}
          >
            Google Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
