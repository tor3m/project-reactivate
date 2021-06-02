function Fill() {
  return (
    <fieldset className='info'>
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
      <div className='fill-container'>
        <label>
          Nombre completo
          <input
            className='js-form formies js-name'
            placeholder='Blanket Team'
            type='text'
            name='name'
          />
        </label>
        <label>
          Puesto
          <input
            className='js-form formies js-job'
            placeholder='Frontend Unicorn'
            type='text'
            name='job'
          />
        </label>
        <p>Imagen de perfil</p>

        <div className='image'>
          <label className='profile-image' for='img-selector'>
            Añadir Imagen
          </label>
          <input
            type='file'
            name=''
            id='img-selector'
            className='js-hidden js__profile-upload-btn'
          />
          <div className='button-white js__profile-image'></div>
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
    </fieldset>
  );
}
export default Fill;
