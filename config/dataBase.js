const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_DB_PASWORD}@cluster0.fulo1on.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = mongoose.connection;

        db.on('error', (err) => {
            console.log('Connection error!');
            reject;
        });

        db.on('open', ()=> {
            console.log("Connected to DB!");
            resolve;
        })
    })
}