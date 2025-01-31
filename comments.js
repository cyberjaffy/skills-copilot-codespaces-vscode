// Create web server 
// Create a web server that listens to incoming requests and returns a JSON object.
// The server will respond with a JSON object that looks like this: { comments: [] }
// The server should listen to port 3000.
// The server should respond to the following endpoints:
// GET /comments - returns the JSON object { comments: [] }
// POST /comments - accepts a JSON object in the request body and adds it to the comments array. It should respond with the added comment.
// The comments array should persist across requests. This means that if you add a comment and then call GET /comments, that comment should be included in the response.
// You can use the express library to create the server.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let comments = [];

app.get('/comments', (req, res) => {
  res.json({ comments });
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});