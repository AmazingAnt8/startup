const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// selectedQuandary
apiRouter.get('/selected_quandary', (_req, res) => {
    console.log("node worked");
    res.send(selected_quandary);
  });

/*
Endpoints are for things I would later put in my databases:
get quandaries and suggestions
modify quandaries and suggestions
saved journals
quandary selection and suggestion history
user posts
friend posts
celebration counts
*/

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });