import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/Directory";
import MenuItem from "../../components/menu-item/Menu-item";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className='homepage'>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Homepage;
