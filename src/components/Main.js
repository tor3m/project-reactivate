import React, { useState } from 'react';
import CardPreview from './CardPreview';
import Form from './Form';

function Main() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const handleChangeInputs = (event) => {
    console.log('Change!', event);
    //setName(nuevoValor);
  };
  return (
    <section className='main_container'>
      <CardPreview name={name} avatar={avatar} />
      <Form handleChangeInputs={handleChangeInputs} />{' '}
    </section>
  );
}
export default Main;
