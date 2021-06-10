import React, { useState } from "react";
import "../stylesheets/App.scss";
import GetAvatar from "./GetAvatar";
import Profile from "./Profile";

function Inputs(props) {
  const [avatar, setAvatar] = useState("");

  // funcion lifting para previsualizar la imagen en el cuadradito
  function updateAvatar(avatar) {
    console.log("Avatar!", avatar);
    //setAvatar({ avatar: avatar });

    props.handleChangeInputs(avatar, "photo");
  }
  // funcion intermedia con la que cambiamos el valor y se lo pasamos a la madre a traves del lifting (la que pasamos a partir de ahora a las hijas)
  function handleInputs(event) {
    props.handleChangeInputs(event.target.value, event.target.name);
  }

  return (
    <div className="fill-container">
      <label>
        Nombre completo
        <input
          className="js-form formies js-name"
          placeholder="Blanket Team"
          type="text"
          name="name"
          onChange={handleInputs}
        />
      </label>
      <label>
        Puesto
        <input
          className="js-form formies js-job"
          placeholder="Frontend Unicorn"
          type="text"
          name="job"
          onChange={handleInputs}
        />
      </label>
      <p>Imagen de perfil</p>

      <div>
        <GetAvatar
          avatar={props.data.photo}
          updateAvatar={updateAvatar}
          changeInputs={handleInputs}
        />
        <Profile avatar={avatar} />
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
            onChange={handleInputs}
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
            onChange={handleInputs}
          />
        </p>
        <p>
          Linkedin
          <input
            className="js-form formies js-linkedin"
            placeholder="Blanket.Linkedin"
            type="text"
            name="linkedin"
            onChange={handleInputs}
          />
        </p>
        <p>
          Github
          <input
            className="js-form formies js-github"
            placeholder="Blanket.GitHub"
            type="text"
            name="github"
            onChange={handleInputs}
          />
        </p>
      </div>
    </div>
  );
}

export default Inputs;
