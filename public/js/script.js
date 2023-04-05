async function sendData(){
    const wishList = await localStorage.getItem("wishList");
    const cart = await localStorage.getItem("cart");
    const respons = await fetch("https://kirilszyapkov-scaling-halibut-9wr45579q9x3p656-3000.preview.app.github.dev/", {
  method: "POST",
  headers: {
    "Conten-Type": "application/json"
  },
  body: JSON.stringify({
    session: {
        wishList,
        cart
    }
  })
})
};
sendData();