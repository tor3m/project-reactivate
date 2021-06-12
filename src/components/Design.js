import paletteBlue from "../images/Blue.jpg";
import paletteRed from "../images/red.jpg";
import paletteMixed from "../images/mixed.jpg";
import Palette from "./Palette";
import { useState } from "react";
// import "../stylesheets/App.scss";

function Design(props) {
  //   const [color, setColor] = useState("");
  // function checked() {
  //   if(color ===)
  // }
  return (
    // <fieldset className='user-options'>
    <div className="color-design">
      <div className="color-container">
        <p>COLORES</p>
      </div>
      <div className="radio-color">
        <Palette
          handleChangeInputs={props.handleChangeInputs}
          className={"js-form js-palette color js-color1 "}
          id={"color1"}
          value={"1"}
          src={paletteBlue}
          onChange={props.handlePaletteInput}
          checked={props.data.palette === "1"}
        ></Palette>
        <Palette
          className={"js-form js-palette color js-color2"}
          id={"color2"}
          value={"2"}
          src={paletteRed}
          handleChangeInputs={props.handleChangeInputs}
          checked={props.data.palette === "2"}
        ></Palette>
        <Palette
          className={"js-form js-palette color js-color3"}
          id={"color3"}
          value={"3"}
          src={paletteMixed}
          handleChangeInputs={props.handleChangeInputs}
          checked={props.data.palette === "3"}
        ></Palette>
      </div>
    </div>

    // </fieldset>
  );
}

export default Design;
