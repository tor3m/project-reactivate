function Preview() {
  return (
    <section className="cards">
      <div>
        <button
          className="cards_button reset-js"
          onclick="resetAll()"
          value="resetinfo"
        >
          <i className="far fa-trash-alt"></i> Reset
        </button>
      </div>
      <section className="cards_box js-card_box palette-1">
        <div className="cards_box-border js-border"></div>
        <div className="cards-box--text">
          <h1 className="cards_box--text--title js-preview-name">
            Nombre Apellido
          </h1>
          <h2 className="cards_box--text--subtitle js-preview-job">
            Front-end developer
          </h2>
        </div>
        <div className="cards_box-photo js__profile-preview"></div>

        <ul className="cards_box-socialmedia">
          <li className="cards_box-socialmedia--item">
            <i className="fas fa-mobile-alt cards_box-icon-social js-preview-phone js-social">
              <a href=""></a>
            </i>
          </li>

          <li className="cards_box-socialmedia--item">
            <i className="far fa-envelope cards_box-icon-social js-social">
              <a className="js-preview-mail"></a>
            </i>
          </li>

          <li className="cards_box-socialmedia--item">
            <a className="js-preview-linkedin" target="_blank" href="">
              <i className="fab fa-linkedin-in cards_box-icon-social js-social"></i>
            </a>
          </li>
          <li className="cards_box-socialmedia--item">
            <a className="js-preview-github" target="_blank" href="">
              <i className="fab fa-github-alt cards_box-icon-social js-social"></i>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Preview;
