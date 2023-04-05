module.exports = async (req, res) => {

    const { id } = req.params;
    const item = await req.storage.getItemById(id);
    console.log(req.session);
    
  
    res.render("detailsPage", {
      titel: "Test",
      item
    });

}