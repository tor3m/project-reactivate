import Collapsible from './Collapsible';

function Share() {
  return (
    <fieldset>
      <Collapsible />
      <div className='share-container'>
        <div className='sharebutton'>
          <button className='new-card js-create-card'>
            <i className='far fa-address-card list-icon2c'></i> Crear tarjeta
          </button>
        </div>
        <div className='card-done js-hidden'>
          <p className='tarjeta'>La tarjeta ha sido creada:</p>
          <p className='url js-generate'></p>
          <button className='twitter-share' type='button'>
            {/* <i className="fab fa-twitter list-icon2c"></i>
                  Compartir en twitter
                <a className="js-twitter-link" title="Twitter"></a> */}
          </button>
        </div>
      </div>
    </fieldset>
  );
}

export default Share;
