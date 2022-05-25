const path = require('path');

const controller = {

    home: (req, res) => {
        const mainPath = path.resolve(__dirname, '../views/home.html'); 
        return res.sendFile(mainPath)
    },

    about: (req, res) => {
        const aboutPath = path.resolve(__dirname, '../views/about.html')
        return res.sendFile(aboutPath)
    }
}

module.exports = controller; 