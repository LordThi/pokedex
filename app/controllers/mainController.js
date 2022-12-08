
const pokedex = require("../../data/pokedex.json");

const mainController = {

    renderIndexPage: (req, res) => {
        const pokemons = Object.values(pokedex);

        res.render("index", {pokemons});
    },
};

module.exports = mainController;