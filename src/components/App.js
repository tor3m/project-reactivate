import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Footer />

      <section className="main_container">
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

        <form className="form" id="cleanForm">
          <fieldset className="user-options">
            <div className="icon2 js-design-title item-collapsable">
              <i className="far fa-object-group list-icon2b"></i>
              <h2 className="legend-fill">diseña</h2>

              <button className="ico-scroll js-arrow-up-d">
                <i className="fas fa-angle-up"></i>
              </button>

              <button className="ico-scroll js-arrow-down-d js-hidden">
                <i className="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="color-design">
              <div className="color-container">
                <p>COLORES</p>
              </div>
              <div className="radio-color">
                <label>
                  <input
                    className="js-form js-palette color js-color1"
                    id="color1"
                    type="radio"
                    value="blue"
                    name="palette"
                    checked
                  />
                  <img className="color-image" src="./assets/images/Blue.jpg" />
                </label>
                <label>
                  <input
                    className="js-form js-palette color js-color2"
                    id="color2"
                    type="radio"
                    value="red"
                    name="palette"
                  />
                  <img className="color-image" src="./assets/images/red.jpg" />
                </label>
                <label>
                  <input
                    className="js-form js-palette color js-color3"
                    id="color3"
                    type="radio"
                    value="mixedcolor"
                    name="palette"
                  />
                  <img
                    className="color-image"
                    src="./assets/images/mixed.jpg"
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset className="info">
            <div className="icon2 js-fill-title2 item-collapsable">
              <i className="far fa-keyboard list-icon2b"></i>
              <h2 className="legend-fill">rellena</h2>

              <button className="ico-scroll2 js-arrow-up-f">
                <i className="fas fa-angle-up"></i>
              </button>
              <button className="ico-scroll fill-arrow js-hidden js-arrow-down-f">
                <i className="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="fill-container">
              <label>
                Nombre completo
                <input
                  className="js-form formies js-name"
                  placeholder="Blanket Team"
                  type="text"
                  name="name"
                />
              </label>
              <label>
                Puesto
                <input
                  className="js-form formies js-job"
                  placeholder="Frontend Unicorn"
                  type="text"
                  name="job"
                />
              </label>
              <p>Imagen de perfil</p>

              <div className="image">
                <label className="profile-image" for="img-selector">
                  Añadir Imagen
                </label>
                <input
                  type="file"
                  name=""
                  id="img-selector"
                  className="js-hidden js__profile-upload-btn"
                />
                <div className="button-white js__profile-image"></div>
              </div>

              <div>
                <p>
                  E-mail
                  <input
                    className="js-form formies js-mail"
                    placeholder="blanket@blanket.com"
                    type="email"
                    id="mail"
                    name="mail"
                  />
                </p>
                <p>
                  Teléfono
                  <input
                    className="js-form js-preview-phone formies js-phone"
                    placeholder="000000000"
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </p>
                <p>
                  Linkedin
                  <input
                    className="js-form formies js-linkedin"
                    placeholder="Blanket.Linkedin"
                    type="text"
                    name="linkedin"
                  />
                </p>
                <p>
                  Github
                  <input
                    className="js-form formies js-github"
                    placeholder="Blanket.GitHub"
                    type="text"
                    name="github"
                  />
                </p>
              </div>
            </div>
          </fieldset>
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
                <i className="far fa-address-card list-icon2c"></i> Crear
                tarjeta
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
        </form>
      </section>

      
    </>
  );
}
export default App;
