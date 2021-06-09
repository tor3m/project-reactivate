import React, { useState } from 'react';
import '../stylesheets/App.scss';
import GetAvatar from './GetAvatar';
import Profile from './Profile';

function Inputs(props) {
  const [avatar, setAvatar] = useState('');

  function updateAvatar(avatar) {
    setAvatar({ avatar: avatar });
  }
  const intermedia(event) {
    props.handleChangeInputs();
  }

  return (
    <div className='fill-container'>
      <label>
        Nombre completo
        <input
          className='js-form formies js-name'
          placeholder='Blanket Team'
          type='text'
          name='name'
          onChange={props.handleChangeInputs}
        />
      </label>
      <label>
        Puesto
        <input
          className='js-form formies js-job'
          placeholder='Frontend Unicorn'
          type='text'
          name='job'
          onChange={intermedia}
        />
      </label>
      <p>Imagen de perfil</p>

      <div>
        <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
        <Profile avatar={avatar} />
      </div>

      <div>
        <p>
          E-mail
          <input
            className='js-form formies js-mail'
            placeholder='blanket@blanket.com'
            type='email'
            id='mail'
            name='mail'
          />
        </p>
        <p>
          Teléfono
          <input
            className='js-form js-preview-phone formies js-phone'
            placeholder='000000000'
            type='tel'
            id='phone'
            name='phone'
          />
        </p>
        <p>
          Linkedin
          <input
            className='js-form formies js-linkedin'
            placeholder='Blanket.Linkedin'
            type='text'
            name='linkedin'
          />
        </p>
        <p>
          Github
          <input
            className='js-form formies js-github'
            placeholder='Blanket.GitHub'
            type='text'
            name='github'
          />
        </p>
      </div>
    </div>
  );
}

export default Inputs;
