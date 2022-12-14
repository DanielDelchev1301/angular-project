const router = require('express').Router();

const parfumeController = require('./controllers/parfumeController');

router.use('/parfume', parfumeController);

module.exports = router;