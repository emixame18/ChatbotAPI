const express = require('express')
const app = express()
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql7.freesqldatabase.com",
  user: "sql7623777",
  password: "wc7vSQsyap"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
/*const mongoose =require("mongoose")
const port = 3000*/

// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Dialog API',
            description: 'Dialog API Information',
            contact: {
                name: 'Developer Name',
            },
            servers: ['http://localhost:3000'],
        },
    },
    apis: ['./routes/v1/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/v1', require('./routes/v1'))

app.get('*', (req, res) => {
    // res.status(404).json({message: 'Not found'}) bonne pratique
    res.sendFile(__dirname + '/view/404.html')
})


   /*  mongoose.connect('mongodb+srv://admin:admin@stjo.n7hiept.mongodb.net/')
     .then(console.log("connected to database"))
     .catch((error)=>{console.log("error")});*/
  

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})