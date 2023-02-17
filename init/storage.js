const Item = require('../models/Item');

function initStorage() {
    return (req, res, next) => {
        req.storage = {
            getAllItems
        }

        next();
    }
}

async function getAllItems(){
    return Item.find({}).lean();
};

async function getItemById(id){
    return Item.find({}).lean();
};

module.exports = initStorage;