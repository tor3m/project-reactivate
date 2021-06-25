const express = require("express");
const cors = require("cors");

const server = express();

const userCards = [];

server.use(cors());
server.use(express.json({ limit: "50mb" }));

const serverPort = process.env.PORT || 3000;
// STATIC SERVER: listen files in public folder
const staticServerPath = "./public"; // relative to the root of the project
server.use(express.static(staticServerPath));
// API: listen fetch requests
// API request > GET > http://localhost:3000/card
server.get("/users", (req, res) => {
  const response = {
    users: [{ name: "Sofía" }, { name: "María" }],
  };
  res.json(response);
});
// API request > POST > http://localhost:3000/new-user
server.post("/card", (req, res) => {
  let response = {};
  console.log(req.body);
  if (
    req.body.palette === "" ||
    req.body.name === "" ||
    req.body.job === "" ||
    req.body.email === "" ||
    req.body.photo === "" ||
    req.body.github === "" ||
    req.body.linkedin === "" ||
    req.body.phone === ""
  ) {
    //mensaje de error
    response = {
      error: "Debe rellenar todos los campos",
    };
    console.log(res.json(response));
    //devolvemos la respuesta
    res.json(response);
  } else {
    userCards.push({
      palette: req.body.palette,
      name: req.body.palette,
      job: req.body.palette,
      name: req.body.palette,
      name: req.body.palette,
      name: req.body.palette,
      name: req.body.palette,
      name: req.body.palette,
    });
    response = {
      cardURL: "", //enlace de la url que se crea,
    };
    //devolvemos la respuesta
    res.json(response);
  }
});

const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:4000/card`);
});
