import React from "react";
import Design from "./Design";
import Share from "./Share";
import Fill from "./Fill";
import Collapsible from "./Collapsible"

class Form extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <form className="form" id="cleanForm">
        <Collapsible className = {"diseña"} classButtonUp = {"js-arrow-up-d"} classButtonDown = {"js-arrow-down-d"}>
          <Design />
        </Collapsible>
        <Collapsible className = {"rellena"} classButtonUp = {"js-arrow-up-f"} classButtonDown = {"js-arrow-down-f"}>
          <Fill />
        </Collapsible>
        <Collapsible className = {"comparte"} classButtonUp = {"js-arrow-up-s"} classButtonDown = {"js-arrow-down-s"}>
          <Share />
        </Collapsible>
        
      </form>
    );
  }
}

export default Form;
