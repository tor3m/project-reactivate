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
server.get('/card/:id:/', (req, res) => {
  const response = {
    data: [{
      "palette": "1",
      "name": "María García",
      "job": "Front-end developer",
      "phone": "+34 666666666",
      "email": "mariagar@example.com",
      "linkedin": "mariagar",
      "github": "mariagar",
      "photo": "data:image/png;base64,2342ba..."
    }]
  };
  res.json(response);
});
// API request > POST > http://localhost:3000/new-user
server.post('/card', (req, res) => {
  // console request body params
  console.log(`Creating the user in database with user name: `);
  const response = {
    result: `User created:`
  };
  res.json(response);
});
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
  
});


