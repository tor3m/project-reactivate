import React from "react";
import Design from "./Design";
import Share from "./Share";
import Fill from "./Fill";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form" id="cleanForm">
        <Design />
        <Fill />
        <Share />
      </form>
    );
  }
}

export default Form;
