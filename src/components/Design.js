import paletteBlue from '../images/Blue.jpg';
import paletteRed from '../images/red.jpg';
import paletteMixed from '../images/mixed.jpg';
import Collapsible from './Collapsible';

function Design() {
  return (
    <fieldset className='user-options'>
      <Collapsible />
      <div className='color-design'>
        <div className='color-container'>
          <p>COLORES</p>
        </div>
        <div className='radio-color'>
          <label>
            <input
              className='js-form js-palette color js-color1'
              id='color1'
              type='radio'
              value='blue'
              name='palette'
              checked
            />
            <img className='color-image' src={paletteBlue} />
          </label>
          <label>
            <input
              className='js-form js-palette color js-color2'
              id='color2'
              type='radio'
              value='red'
              name='palette'
            />
            <img className='color-image' src={paletteRed} />
          </label>
          <label>
            <input
              className='js-form js-palette color js-color3'
              id='color3'
              type='radio'
              value='mixedcolor'
              name='palette'
            />
            <img className='color-image' src={paletteMixed} />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default Design;
