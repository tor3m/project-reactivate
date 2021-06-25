const express = require("express");
const cors = require("cors");

// Digo al servidor: mi motor de plantillas es este.
const server = express();
server.set("view engine", "ejs");

const userCards = [];

server.use(cors());
server.use(express.json({ limit: "50mb" }));

const serverPort = process.env.PORT || 3000;
// STATIC SERVER: listen files in public folder
const staticServerPath = "./public"; // relative to the root of the project
server.use(express.static(staticServerPath));

server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// API: listen fetch requests
// API request > GET > http://localhost:3000/users

// server.get('/users', (req, res) => {
//   const response = {
//     users: [{ name: 'So' }, { name: 'María' }],
//   };
//   res.json(response);
// });

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
    // base de datos que devolverá cardID
    const cardId = "id-" + Date.now();
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
// Crear Tarjeta
server.get("/card/:cardId", (req, res) => {
  //console.log(req.params.cardId);
  const foundCard = userCards.find(
    (userCard) => userCard.id === req.params.cardId
  );
  if (foundCard === undefined) {
    res.send("No encontrado");
  } else {
    console.log(foundCard);
    //res.json(foundCard);
    res.render("pages/card", foundCard); // <%= name %>
  }
});

// // API request > POST > http://localhost:3000/new-user
// server.post('/card', (req, res) => {
//   // console request body params
//   console.log(`Creating the user in database with user name: `);
//   const response = {
//     result: `User created:`,
//   };
//   res.json(response);
// });
