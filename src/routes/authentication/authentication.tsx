import { AuthenticationContainer } from "./authentication.style";

import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/Sign-in";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
