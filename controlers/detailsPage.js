module.exports = (req, res) => {

    console.log("detail", req.session);
    res.render('detailsPage', {
        titel: 'Test'
    })
}