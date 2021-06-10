import React from "react";
import Design from "./Design";
import Share from "./Share";
import Fill from "./Fill";
import Collapsible from "./Collapsible";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.nombre = "";
  }

  render() {
    return (
      <form className="form" id="cleanForm">
        <Collapsible
          classIcon={"far fa-object-group list-icon2b"}
          className={"diseña"}
          classButtonUp={"js-arrow-up-d"}
          classButtonDown={"js-arrow-down-d"}
        >
          <Design />
        </Collapsible>
        <Collapsible
          classIcon={"far fa-keyboard list-icon2b"}
          className={"rellena"}
          classButtonUp={"js-arrow-up-f"}
          classButtonDown={"js-arrow-down-f"}
        >
          <Fill
            data={this.props.data}
            handleChangeInputs={this.props.handleChangeInputs}
          />
        </Collapsible>
        <Collapsible
          classIcon={"fas fa-share-alt list-icon2b"}
          className={"comparte"}
          classButtonUp={"js-arrow-up-s"}
          classButtonDown={"js-arrow-down-s"}
        >
          <Share />
        </Collapsible>
      </form>
    );
  }
}

export default Form;
