const mongooes = require("mongoose");

const db = async () => {
    await mongooes.connect("mongodb+srv://patelrushil1510:FzFWhSVqWdiDwfHd@blog-nodejs.bkdkvn0.mongodb.net/?retryWrites=true&w=majority&appName=Blog-Nodejs");
    console.log("database is connected");
}

module.exports = db;

// FzFWhSVqWdiDwfHd