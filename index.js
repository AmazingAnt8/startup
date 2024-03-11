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
apiRouter.post('/selected_quandary', (req, res) => {
    console.log(".post");
    console.log(req.body);
    selected_quandary = req.body;
    res.send(selected_quandary);
});
apiRouter.get('/selected_quandary', (_req, res) => {
    res.send(selected_quandary);
});

// pairedQuandariesList
apiRouter.get('/paired_quandaries_list', (_req, res) => {
    res.send(pairedQuandariesList);
});
apiRouter.post('paired_quandaries_list', (req, res) => {
    selected_quandary = req.body;
    res.send(selected_quandary);
})

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

// storage
let selected_quandary = "";
let pairedQuandariesList = [];

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });