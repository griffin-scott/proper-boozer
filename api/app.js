const express = require('express')
const app = express();

const cors = require("cors")
    app.use(cors())

app.use(express.json());

const PORT = process.env.PORT || 8000;

let file = require('./data.json')

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

// Get all pubs
app.get('/pubs', (req, res) => {
    res.send(file)
})

// Get specific pub
app.get('/pubs/:id', (req, res) => {
    res.send({"test": `get pub ${req.params.id}`})
})
