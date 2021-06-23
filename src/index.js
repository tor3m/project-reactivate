const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

// STATIC SERVER: listen files in public folder
const staticServerPath = './public'; // relative to the root of the project
server.use(express.static(staticServerPath));

// API: listen fetch requests
// API request > GET > http://localhost:3000/users
server.post('/card', (req, res) => {
  let response = {};
  console.log(req.body);
  if (
    req.body.palette === '' ||
    req.body.name === '' ||
    req.body.job === '' ||
    req.body.email === '' ||
    req.body.phone === '' ||
    req.body.photo === '' ||
    req.body.linkedin === '' ||
    req.body.github === ''
  ) {
    response = {
      success: false,
      error: 'Intentalo más tarde:) !',
    };
    res.json(response);
  } else {
    // Falta base de datos que devolverá cardID
    response = {
      success: true,
      cardURL: 'https://awesome-proflile-cards.herokuapp.com/card/${cardID}',
    };
    res.json(response);
  }
});

// API request > POST > http://localhost:3000/new-user
server.post('/card', (req, res) => {
  // console request body params
  console.log(`Creating the user in database with user name: `);
  const response = {
    result: `User created:`,
  };
  res.json(response);
});
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
