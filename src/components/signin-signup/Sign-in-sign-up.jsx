import React from "react";
import SignIn from "../sign-in/Sign-in";
import SignUp from "../sign-up/sign-up";
import "./Sign-in-sign-up.scss";

export const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};
