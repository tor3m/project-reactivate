<<<<<<< HEAD
import React from 'react';
import Design from './Design';
import Share from './Share';
import Fill from './Fill';
import Collapsible from './Collapsible';
=======
import React from "react";
import Design from "./Design";
import Share from "./Share";
import Fill from "./Fill";
import Collapsible from "./Collapsible";
>>>>>>> 7ef1e298946814868186f636d21283e2f0348749

class Form extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
<<<<<<< HEAD
      <form className='form' id='cleanForm'>
        <Collapsible
          className={'diseña'}
          classButtonUp={'js-arrow-up-d'}
          classButtonDown={'js-arrow-down-d'}
=======
      <form className="form" id="cleanForm">
        <Collapsible
          classIcon={"far fa-object-group list-icon2b"}
          className={"diseña"}
          classButtonUp={"js-arrow-up-d"}
          classButtonDown={"js-arrow-down-d"}
>>>>>>> 7ef1e298946814868186f636d21283e2f0348749
        >
          <Design />
        </Collapsible>
        <Collapsible
<<<<<<< HEAD
          className={'rellena'}
          classButtonUp={'js-arrow-up-f'}
          classButtonDown={'js-arrow-down-f'}
        >
          <Fill handleChangeInputs={this.props.handleChangeInputs} />
        </Collapsible>
        <Collapsible
          className={'comparte'}
          classButtonUp={'js-arrow-up-s'}
          classButtonDown={'js-arrow-down-s'}
=======
          classIcon={"far fa-keyboard list-icon2b"}
          className={"rellena"}
          classButtonUp={"js-arrow-up-f"}
          classButtonDown={"js-arrow-down-f"}
        >
          <Fill />
        </Collapsible>
        <Collapsible
          classIcon={"fas fa-share-alt list-icon2b"}
          className={"comparte"}
          classButtonUp={"js-arrow-up-s"}
          classButtonDown={"js-arrow-down-s"}
>>>>>>> 7ef1e298946814868186f636d21283e2f0348749
        >
          <Share />
        </Collapsible>
      </form>
    );
  }
}

export default Form;
