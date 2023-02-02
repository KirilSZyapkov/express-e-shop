module.exports = async (req, res) => {
    if(typeof req.cart === "undefined") {
        req.cart = [];
        
    }
    console.log(req.cart);

    const data = await req.storage.getAllItems();
    // console.log(data);
    
    res.render('homePage', {
        title: "Catalog",
        data
    });
}