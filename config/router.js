const router = require('express').Router();

const catalogMainControler = require('../controlers/catalogMainControler');

router.get('/', (req, res)=>{
    res.redirect('/catalog');
});

router.post("/", (req, res, next) => {
    const body = req.body;
    console.log(body);
  
    if (typeof req.session === "undefined") {
      req.session = {};
    }
  
    next();
  });

router.use('/catalog', catalogMainControler);

module.exports = router;