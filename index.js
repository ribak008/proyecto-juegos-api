const {games} = require('./games');

const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000



//-------------------------------------

const {getGames} = require('./controllers/games.controllers');

app.use(cors());


app.get('/',getGames)

// app.get('/',(req,res)=>{
//     return res.json({
//         ok:true,
//         statusCode:200,
//         games
//     })
// })

//-------------------------------------
app.listen(port, () => {
    console.log('Esta bien el trabajo');
    console.log(`Servidor corriendo ${port}!`)})