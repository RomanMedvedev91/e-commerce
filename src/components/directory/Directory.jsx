import React from "react";
import MenuItem from "../menu-item/Menu-item";
import "./Directory.scss";
import SECTIONS_DATA from "./sections.data.js";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
