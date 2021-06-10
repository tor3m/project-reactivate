import React, { useState } from "react";
import CardPreview from "./CardPreview";
import Form from "./Form";
// import defaultAvatar from "../images/rosalia.uni2.png";

function Main() {
  const [data, setData] = useState({
    name: "",
    job: "",
    email: "",
    photo: "",
    github: "",
    linkedin: "",
    phone: "",
  });
  // funcion lifting/props donde vienen todos los valores de los inputs para que se guarden y actualicen en nustro data
  const handleChangeInputs = (inputValue, inputName) => {
    console.log("Change!", inputValue, inputName);
    setData({
      ...data,
      [inputName]: inputValue,
    });
  };
  return (
    <section className="main_container">
      {/* esto se hace para exportar a las hijas todo el objeto data */}
      <CardPreview data={data} />
      <Form data={data} handleChangeInputs={handleChangeInputs} />{" "}
    </section>
  );
}
export default Main;
