import React from "react";

class Icons extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <li className="cards_box-socialmedia--item">
        <i className={this.props.className}>
          <a className={this.props.anchor}></a>
        </i>
      </li>
    );
  }
}

export default Icons;
