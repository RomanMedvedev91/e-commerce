import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/Directory";

import { HomepageContainer } from "./Homepage.style";

const Homepage = () => {
  return (
    <HomepageContainer>
      <Directory />
      <Outlet />
    </HomepageContainer>
  );
};

export default Homepage;
