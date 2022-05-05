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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });



/* ==============================================================*/

l('hola mundo');