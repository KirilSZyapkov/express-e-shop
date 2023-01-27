const router = require('express').Router();

const catalogPage = require('./catalogPage');
const detailsPage = require('./detailsPage');

router.get('/', catalogPage);
router.get('/details/:id', detailsPage);


module.exports = router;