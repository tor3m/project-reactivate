import paletteBlue from "../images/Blue.jpg";
import paletteRed from "../images/red.jpg";
import paletteMixed from "../images/mixed.jpg";
import Palette from "./Palette";
import { useState } from "react";

function Design(props) {

const [color, setColor] = useState('red');

const handleInputColor = (ev) => {
  setColor (ev.currentTarget.value)
}

  return (
    // <fieldset className='user-options'>
    <div className="color-design">
      <div className="color-container">
        <p>COLORES</p>
      </div>
      <div className="radio-color">
        <Palette handleInputColor={props.handleInputColor}
          className={"js-form js-palette color js-color1 "}
          id={"color1"}
          value={"blue"}
          src={paletteBlue}
          onChange={props.handleRadios}
          checked={color==="blue"}
        ></Palette>
        <Palette
          className={"js-form js-palette color js-color2"}
          id={"color2"}
          value={"red"}
          src={paletteRed}
          onChange={props.handleRadios}
          checked={color==="red"}
        ></Palette>
        <Palette
          className={"js-form js-palette color js-color3"}
          id={"color3"}
          value={"mixedcolor"}
          src={paletteMixed}
          onChange={props.handleRadios}
          checked={color==="mixedcolor"}
        ></Palette>
      </div>
    </div>

    // </fieldset>
  );
}

export default Design;
