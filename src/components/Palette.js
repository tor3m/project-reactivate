

import React from "react";

class Palette extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <label>
            <input
            className= {this.props.className}
            id={this.props.id}
            type='radio'
            value={this.props.value}
            name='palette'
            
            />
            <img className='color-image' alt = '' src={this.props.src} />
        </label>
    );
  }
}

export default Palette;
