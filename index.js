const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const { initializeDataBase } = require('./configuration/dataBase');
const { PORT } = require('./configuration/environment');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(routes);

initializeDataBase()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
    })
    .catch(err => {
        console.log(`Something went wrong: ${err}`);
    })