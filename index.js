const figlet = require("figlet");

const initFiglet = () => {
    console.log(
        figlet.textSync("wyugen", {
            font: 'Slant'
        })
    );
};

const initializeApp = async() => {
    initFiglet();
};

module.exports = initializeApp;
