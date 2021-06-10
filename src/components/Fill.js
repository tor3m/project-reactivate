import Inputs from "./Inputs";
import React from "react";

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avatar: "" };
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  updateAvatar(avatar) {
    this.setState({ avatar: avatar });
  }

  render() {
    return (
      <fieldset className="info">
        <Inputs
          data={this.props.data}
          handleChangeInputs={this.props.handleChangeInputs}
        />
      </fieldset>
    );
  }
}

export default Fill;
