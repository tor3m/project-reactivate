import Icons from './Icons';

function Preview() {
  return (
    <section className='cards'>
      <div>
        <button
          className='cards_button reset-js'
          onclick='resetAll()'
          value='resetinfo'
        >
          <i className='far fa-trash-alt'></i> Reset
        </button>
      </div>
      <section className='cards_box js-card_box palette-1'>
        <div className='cards_box-border js-border'></div>
        <div className='cards-box--text'>
          <h1 className='cards_box--text--title js-preview-name'>
            Nombre Apellido
          </h1>
          <h2 className='cards_box--text--subtitle js-preview-job'>
            Front-end developer
          </h2>
        </div>
        <div className='cards_box-photo js__profile-preview'></div>
        <Icons />
      </section>
    </section>
  );
}

export default Preview;
