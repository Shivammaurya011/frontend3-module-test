var cartPrice = new Array();
cartPrice=JSON.parse(localStorage.getItem("cartData"))?JSON.parse(localStorage.getItem("cartData")):[]
for(let i in cartPrice){
    items.innerHTML +=`
        <div class="item">
            <img src="${cartPrice[i].image}" alt="Item" />
            <div class="info">
                <div class="title">Title: ${cartPrice[i].name.slice(0, 18)}</div>
                <div class="price">&#8377 ${parseInt(cartPrice[i].price)}</div>
                <button id="addBtn" onclick="removeItem('${cartPrice[i].name}')">Remove From Cart</button>
            </div>   
        </div>
    `
}

function removeItem(name){
    var deletData = new Array();
    deletData=JSON.parse(localStorage.getItem("cartData"))?JSON.parse(localStorage.getItem("cartData")):[]
    if(deletData.some((v)=>{if(v.name == name){return v.id}})){
        console.log(v.id)
    }
}
var cartPrice = new Array();
var tp = 0;
cartPrice=JSON.parse(localStorage.getItem("cartData"))?JSON.parse(localStorage.getItem("cartData")):[]
for(let i in cartPrice){
    tp += parseInt(cartPrice[i].price);
    totalPrice.innerHTML +=`
        <div class="totalPrice">
            <div>${parseInt(i)+1}: ${cartPrice[i].name.slice(0, 20)}</div>
            <div class="cprice">&#8377 ${parseInt(cartPrice[i].price)}</div>  
        </div>
    `
}
document.getElementById('totalp').innerHTML=`&#8377 ${tp}`

document.getElementById("rzp-button1").onclick = function (e) {
    var options = {
      key: "rzp_test_Eb76Q7rMrrPgqh",
      amount: tp * 100,
      currency: "INR",
      name: "MeShop.",
      description: "Test Transaction",
      callback_url: "/shop/",
    notes: {
        address: "Razorpay Corporate Office"
    },
    theme: {
        color: "#3399cc"
    },
      image:"https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg",
      handler: function (response){
        alert('Payment Done');
        localStorage.removeItem('cartData')
        location.reload();
        },
    };
  
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    localStorage.removeItem('cartData')
    e.preventDefault();
  };