import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";

function App() {
  return (
    <>
      <Header />
      <section className="main_container">
        <Preview />
        <Form />
      </section>
      <Footer />
    </>
  );
}
export default App;
