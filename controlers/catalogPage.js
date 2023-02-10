module.exports = async (req, res) => {

    const data = await req.storage.getAllItems();
        
    res.render('homePage', {
        title: "Catalog",
        data
    });
}