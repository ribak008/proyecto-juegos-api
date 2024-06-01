const {games} = require('../games');

 
 const getGames = (req,res)=>{
    return res.json({
        ok:true,
        statusCode:200,
        games
    })
 };

 const getGamesTitle = (req,res)=>{
   return res.json({
       ok:true,
       statusCode:200,
       games
   })
};

 module.exports = {
    getGames
 } 