module.exports = async (req, res) => {

    const data = await req.storage.getAllItems();
    console.log(data);
    
    res.render('homePage', {
        title: "Catalog",
        data
    });
}