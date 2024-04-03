const express = require("express");
const app = express();
const path = require('path');

var json = require("./cliente_servidor/data.json")

// app.get("/express", (req, res) => res.send("Express on Vercel!"));
// app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));

app.get('/express', (req, res) => {
    res.sendFile(path.join(__dirname, 'express', 'index.html'));//,  { headers: hdrs, lastModified: false, etag: false });
});

app.get('/cliente_servidor/data', (req, res) => {
    res.send(json);
}); 


app.use('/express', express.static(path.join(__dirname + '/express')));
app.use('/cliente_servidor', express.static(path.join(__dirname + '/cliente_servidor')));
app.use(express.static('public'));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;