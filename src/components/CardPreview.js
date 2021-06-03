import Icons from "./Icons";

function CardPreview() {
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
          <Icons
            className={
              "fas fa-mobile-alt cards_box-icon-social js-preview-phone js-social"
            }
            anchor={'href = ""'}
          ></Icons>
          <Icons
            className={"far fa-envelope cards_box-icon-social js-social"}
            anchor={"js-preview-mail"}
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
