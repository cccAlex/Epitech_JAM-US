const mongoose = require('mongoose');

const mongooseSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

const init_db = () => {
    return new Promise((resolve, reject) => {
        const uri = process.env.MONGODB_URI;

        console.log('Connecting to db...');
        mongoose.connect(uri, mongooseSettings)
            .then(() => {
                console.log('Successfully connected to MongoDB !');
                resolve();
            })
            .catch((err) => {
                console.log('Connection to MongoDB failed :', err.message);
                reject(err);
            });
    });
};

module.exports = init_db;