const cards = require("../data/card");

module.exports = {
    home: (req, res)=>{
        res.render('home', { cards: cards });
    },
    caes: (req, res) => {
        res.render('pets');
},
}