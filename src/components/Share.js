function Share() {
  return (
    <fieldset>
      <div className="icon2 js-share-title3 item-collapsable">
        <i className="fas fa-share-alt list-icon2b"></i>
        <h2 className="legend-fill">comparte</h2>
        <button className="ico-scroll2 js-arrow-up-s">
          <i className="fas fa-angle-up"></i>
        </button>
        <button className="ico-scroll share-arrow js-arrow-down-s js-hidden">
          <i className="fas fa-angle-down"></i>
        </button>
      </div>
      <div className="share-container">
        <div className="sharebutton">
          <button className="new-card js-create-card">
            <i className="far fa-address-card list-icon2c"></i> Crear tarjeta
          </button>
        </div>
        <div className="card-done js-hidden">
          <p className="tarjeta">La tarjeta ha sido creada:</p>
          <p className="url js-generate"></p>
          <button className="twitter-share" type="button">
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
