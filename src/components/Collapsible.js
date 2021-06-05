import React from 'react';

class Collapsible extends React.Component {
  // constructor(props){
  //   super (props)
  // }
  

  render() {
    return (
      <>
        <div className='icon2 js-design-title item-collapsable'>
          <i className='far fa-object-group list-icon2b'></i>
          <h2 className='legend-fill'>{this.props.className}</h2>

          <button className={`ico-scroll ${this.props.classButtonUp}`}>
            <i className='fas fa-angle-up'></i>
          </button>

          <button className={`ico-scroll ${this.props.classButtonDown} js-hidden`}>
            <i className='fas fa-angle-down'></i>
          </button>
        </div>
        <div>{this.props.children}</div>
        
      </>
    );
  }
}

export default Collapsible;
