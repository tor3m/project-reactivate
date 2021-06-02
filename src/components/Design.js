import paletteBlue from '../images/Blue.jpg';
import paletteRed from '../images/red.jpg';
import paletteMixed from '../images/mixed.jpg';

function Design() {
  return (
    <fieldset className='user-options'>
      <div className='icon2 js-design-title item-collapsable'>
        <i className='far fa-object-group list-icon2b'></i>
        <h2 className='legend-fill'>diseña</h2>

        <button className='ico-scroll js-arrow-up-d'>
          <i className='fas fa-angle-up'></i>
        </button>

        <button className='ico-scroll js-arrow-down-d js-hidden'>
          <i className='fas fa-angle-down'></i>
        </button>
      </div>
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
