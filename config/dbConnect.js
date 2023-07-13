const { default: mongoose } = require('mongoose');

const dbConnect = () => {
    try {
        const conn = mongoose.connect("mongodb+srv://mindx:mindx@cluster0.secro9e.mongodb.net/Comic?retryWrites=true&w=majority")
        console.log("Connected successfully")
    } catch (error) {
        console.log("Failed to connect");
    }
}

module.exports = dbConnect;