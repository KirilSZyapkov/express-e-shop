module.exports = (req, res) => {

    console.log(req.cart);
    res.render('detailsPage', {
        titel: 'Test'
    })
}