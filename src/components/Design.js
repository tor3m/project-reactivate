import paletteBlue from '../images/Blue.jpg';
import paletteRed from '../images/red.jpg';
import paletteMixed from '../images/mixed.jpg';
import Collapsible from './Collapsible';
import Palette from './Palette';

function Design() {
  return (
    // <fieldset className='user-options'>
      <Collapsible>
        <div className='color-design'>
          <div className='color-container'>
            <p>COLORES</p>
          </div>
          <div className='radio-color'>
            <Palette
              className = {'js-form js-palette color js-color1'}
              id = {'color1'}
              value = {'blue'}
              checked
              src = {paletteBlue}
            ></Palette>
            <Palette
              className={'js-form js-palette color js-color2'}
              id={'color2'}
              value={'red'}
              src={paletteRed}
            ></Palette>
            <Palette
              className={'js-form js-palette color js-color3'}
              id={'color3'}
              value={'mixedcolor'}
              src={paletteMixed}
            ></Palette>   
            
          </div>
        </div>
      </Collapsible>
    // </fieldset>
  );
}

export default Design;
