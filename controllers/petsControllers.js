const cards = require("../data/card");

module.exports = {
    home: (req, res)=>{
        res.render('home', { cards: cards });
    },
    caes: (req, res) => {
    res.render('caes', { cards: cards });
},
    gatos: (req, res) => {
    res.render('gatos', { cards: cards });
},
    passaros: (req, res) => {
    res.render('passaros', { cards: cards });
},
    repteis: (req, res) => {
    res.render('repteis', { cards: cards });
},
}