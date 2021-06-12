import Icons from "./Icons";
import defaultAvatar from "../images/rosalia.uni2.png";
// import "../stylesheets/App.scss";

function CardPreview(props) {
  // aqui hemos creado la misma variable que para el cuadradito con el condicional dentro, para que coja el defaultAvatar o la imagen que le queremos subir

  const imagePreview =
    props.data.photo === "" ? defaultAvatar : props.data.photo;
  // function handleResetButton() {
  //   // props.handleChangeInputs("", "name");
  //   // props.handleChangeInputs("", "job");
  //   // props.handleChangeInputs("", "email");
  //   // props.handleChangeInputs("", "photo");
  //   // props.handleChangeInputs("", "github");
  //   // props.handleChangeInputs("", "linkedin");
  //   // props.handleChangeInputs("", "phone");
  //   // props.handleChangeInputs("1", "palette");
  //   // {
  //   //   name: "",
  //   //   job: "",
  //   //   email: "",
  //   //   photo: "",
  //   //   github: "",
  //   //   linkedin: "",
  //   //   phone: "",
  //   //   ,
  //   // };
  // }
  return (
    <section className="cards">
      <div>
        <button
          className="cards_button reset-js"
          // onclick="resetAll()"
          // value="resetinfo"
          onClick={props.handleResetButton}
        >
          <i className="far fa-trash-alt"></i> Reset
        </button>
      </div>
      <section
        className={`cards_box js-card_box palette-${props.data.palette}`}
      >
        <div className="cards_box-border js-border"></div>
        <div className="cards-box--text">
          <h1 className="cards_box--text--title js-preview-name">
            {/* para pintar en la card preview */}
            {props.data.name === "" ? "Nombre Apellidos" : props.data.name}
          </h1>
          <h2 className="cards_box--text--subtitle js-preview-job">
            {props.data.job === "" ? "Front-End Developer" : props.data.job}
          </h2>
        </div>
        <div
          className="cards_box-photo js__profile-preview"
          // para cambiar la foto de la preview
          style={{ backgroundImage: `url(${imagePreview})` }}
        ></div>
        <ul className="cards_box-socialmedia">
          <Icons
            className={"far fa-envelope cards_box-icon-social js-social"}
            anchor={"js-preview-mail"}
          ></Icons>
          <Icons
            className={
              "fas fa-mobile-alt cards_box-icon-social js-preview-phone js-social"
            }
            anchor={'href = ""'}
          ></Icons>
          <Icons
            className={"fab fa-linkedin-in cards_box-icon-social js-social"}
            anchor={`"js-preview-linkedin" 'target="_blank"' 'href=""'`}
          ></Icons>
          <Icons
            className={"fab fa-github-alt cards_box-icon-social js-social"}
            anchor={`'js-preview-github' "target='_blank'" "href=''"`}
          ></Icons>
        </ul>
      </section>
    </section>
  );
}

export default CardPreview;
