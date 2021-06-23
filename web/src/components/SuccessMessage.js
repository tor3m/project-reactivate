function SuccessMessage(props) {
  console.log(props.url);
  console.log(`https://twitter.com/intent/tweet?text=${props.url}`);

  return (
    <div className="card-done ">
      <p className="tarjeta">La tarjeta ha sido creada:</p>
      <a className="url js-generate" target="_blank" href={props.url}>
        <p className="url js-generate">URL: {props.url}</p>
      </a>

      <a
        className="js-twitter-link "
        title="Twitter"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${props.url}`}
      >
        <button className="twitter-share" type="button">
          <i className="fab fa-twitter list-icon2c"></i>
          Compartir en twitter
        </button>
      </a>
    </div>
  );
}
export default SuccessMessage;
