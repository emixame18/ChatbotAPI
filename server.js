const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())
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

/*app.get('/allchats', async (req, res) => {
    
    const allchats = await Chat.findAll();
    
    res.status(200).json({
        data: allchats
    })
})

app.post('/createchat', (req, res) => {
    const chat = Chat.build({ question: req.body.question, answer: req.body.answer});
    (async function save(){
        await chat.save();
        console.log(chat);
        console.log('Chat was saved to the database!');
    })()
    res.status(200).json({
        message: "created"
    })
})

app.patch('/updatechat', async (req, res) =>{
    const updatechat = Chat.update({ question: req.body.question, answer: req.body.answer}, {
        where: {
            id: req.body.id
        }
    });
    res.status(200).json({
        message: "updated"
    })
})

app.delete('/deletechat', async (req, res) =>{
    const deletechat = await Chat.destroy({
        where: {
            id: req.body.id
        }
    });
    console.log('Chat was deleted to the database!');
    res.status(200).json({
        message: "deleted"
    })
})

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite'
});
  
(async function connect(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()
*/
app.use('/api/v1', require('./routes/v1'))

app.get('*', (req, res) => {
    //res.status(404).json({ message: 'Not found'}) bonne pratique
    res.sendFile(__dirname + "/view/404.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*function middleware(req, res, next){
    console.log('coucou')
    next()
}*/