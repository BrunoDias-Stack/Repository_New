const cards = require("../data/card");

module.exports = {
    home: (req, res)=>{
        res.render('home', { cards: cards });
    },
    caes: (req, res) => {
        res.render('pets');
},
    gatos: (req, res) => {
    res.render('pets');
},
    passaros: (req, res) => {
    res.render('pets');
},
    repteis: (req, res) => {
    res.render('pets');
},
}