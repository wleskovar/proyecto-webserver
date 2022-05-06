const l= function(arg) {
    console.log(arg);
}

const express = require('express')
const app = express()

const port= 8080

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/views/index.html')
});
app.get('/index', (req, res) => {
   res.sendFile(__dirname + '/views/index.html')
});
app.get('/generic', (req, res) => {
   res.sendFile(__dirname + '/views/generic.html')
});
app.get('/elements', (req, res) => {
   res.sendFile(__dirname + '/views/elements.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });



/* ==============================================================*/

l('hola mundo');