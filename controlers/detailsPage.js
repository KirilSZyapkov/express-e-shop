module.exports = async (req, res) => {

    const { id } = req.params;
    const item = await req.storage.getItemById(id);
    console.log(item.nutry);
    
  
    res.render("detailsPage", {
      titel: "Test",
      item
    });

}