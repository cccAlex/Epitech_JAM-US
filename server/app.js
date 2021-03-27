require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./src/router');
const init_db = require('./src/db');

init_db()
    .then(async () => {
        const app = express();

        app.use(cors());
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());

        app.use('/api', router);

        app.listen(6969, () => console.log(`The magic port is 6969`));
    })
    .catch(() => process.exit(1));