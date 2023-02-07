module.exports = (req, res) => {

    console.log(req);
    res.render('detailsPage', {
        titel: 'Test'
    })
}