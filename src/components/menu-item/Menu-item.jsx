// import React from "react";
import "./Menu-item.scss";
// import { withRouter } from "react-router-dom";

const MenuItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='menu-item'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>

    // <div
    //   className={`${size} menu-item`}
    //   onClick={() => history.push(`${match.url}${linkUrl}`)}
    // >
    // <div
    //   className='background-image'
    //   style={{ backgroundImage: `url(${imageUrl})` }}
    // />
    // <div className='content'>
    //   <h1 className='title'>{title.toUpperCase()}</h1>
    //   <span className='subtitle'>SHOP NOW</span>
    // </div>
    // </div>
  );
};

// export default withRouter(MenuItem);
export default MenuItem;
