import React from 'react';

class Collapsible extends React.Component {
  // constructor(props)
  // super (props)

  render() {
    return (
      <>
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
        <div className='icon2 js-fill-title2 item-collapsable'>
          <i className='far fa-keyboard list-icon2b'></i>
          <h2 className='legend-fill'>rellena</h2>

          <button className='ico-scroll2 js-arrow-up-f'>
            <i className='fas fa-angle-up'></i>
          </button>
          <button className='ico-scroll fill-arrow js-hidden js-arrow-down-f'>
            <i className='fas fa-angle-down'></i>
          </button>
        </div>
        <div className='icon2 js-share-title3 item-collapsable'>
          <i className='fas fa-share-alt list-icon2b'></i>
          <h2 className='legend-fill'>comparte</h2>
          <button className='ico-scroll2 js-arrow-up-s'>
            <i className='fas fa-angle-up'></i>
          </button>
          <button className='ico-scroll share-arrow js-arrow-down-s js-hidden'>
            <i className='fas fa-angle-down'></i>
          </button>
        </div>
      </>
    );
  }
}

export default Collapsible;
