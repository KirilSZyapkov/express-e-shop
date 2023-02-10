const router = require('express').Router();

const catalogMainControler = require('../controlers/catalogMainControler');

router.get('/', (req, res)=>{
    res.redirect('/catalog');
});


router.use('/catalog', catalogMainControler);

module.exports = router;