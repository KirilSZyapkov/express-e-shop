const Item = require('../models/Item');

function initStorage() {
    return (req, res, next) => {
        req.storage = {
            getAllItems,
            getItemById
        }

        next();
    }
}

async function getAllItems(){
    return Item.find({}).lean();
};

async function getItemById(id){
    return Item.findById(id).lean();
};

module.exports = initStorage;