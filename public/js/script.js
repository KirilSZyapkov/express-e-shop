import axios from "axios";

async function sendData() {
  console.log("hi");
  const wishList = await localStorage.getItem("wishList");
  const cart = await localStorage.getItem("cart");

  const data = await axios()
  // await fetch("http://localhost:3000", {
  //   method: "POST",
  //   headers: {
  //     "Conten-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     session: {
  //       wishList,
  //       cart,
  //     },
  //   }),
  // });
}
sendData();
