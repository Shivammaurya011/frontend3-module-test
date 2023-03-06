document.getElementById('profile').innerText=`${JSON.parse(localStorage.getItem('currProfile'))[0].firstName} ${JSON.parse(localStorage.getItem('currProfile'))[0].lastName} `
allProduct()
function search(e){
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
        for(let i in data){
            if(data[i].title == e.value){
                items.innerHTML += `
                    <div class="item">
                        <img src="${data[i].image}" alt="Item" />
                        <div class="info">
                            <div class="price-size">
                                <div class="price">&#8377 ${data[i].price}</div>
                                <div class="sized">S,M,L</div>
                            </div>
                            <div class="colors">
                                <div class="row">Colors:</div>
                                <div class="circle" style="background-color: #000"></div>
                                <div class="circle" style="background-color: #4938af"></div>
                                <div class="circle" style="background-color: #203d3e"></div>
                                
                            </div>
                            <div class="rating">
                                <div >Rating:</div>
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                            </div>
                            
                            </div>
                        <button id="addBtn" onclick="handleCart('${data[i].image}','${data[i].title}','${data[i].price}')">Add to Cart</button>
                    </div>
                `
            }
        } 
    })
}
function allProduct(){
    document.getElementById('ph').innerText='All Products';
    items.innerHTML = '';
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
        for(let i in data)
        items.innerHTML += `
                <div class="item">
                    <img src="${data[i].image}" alt="Item" />
                    <div class="info">
                        <div class="price-size">
                            <div class="price">&#8377 ${data[i].price}</div>
                            <div class="sized">S,M,L</div>
                        </div>
                        <div class="colors">
                            <div class="row">Colors:</div>
                            <div class="circle" style="background-color: #000"></div>
                            <div class="circle" style="background-color: #4938af"></div>
                            <div class="circle" style="background-color: #203d3e"></div>
                            
                        </div>
                        <div class="rating">
                            <div >Rating:</div>
                            <img src="../asset/Star 1.png" alt="img not found" />
                            <img src="../asset/Star 1.png" alt="img not found" />
                            <img src="../asset/Star 1.png" alt="img not found" />
                            <img src="../asset/Star 1.png" alt="img not found" />
                        </div>
                        
                        </div>
                    <button id="addBtn" onclick="handleCart('${data[i].image}','${data[i].title}','${data[i].price}')">Add to Cart</button>
                </div>
        `
    })
    document.getElementById('allpro').style.backgroundColor='black';
    document.getElementById('allpro').style.color='white';
    document.getElementById('men').style.backgroundColor='white';
    document.getElementById('men').style.color='black';
    document.getElementById('wmen').style.backgroundColor='white';
    document.getElementById('wmen').style.color='black';
    document.getElementById('jewe').style.backgroundColor='white';
    document.getElementById('jewe').style.color='black';
    document.getElementById('ele').style.backgroundColor='white';
    document.getElementById('ele').style.color='black';
}


function mens(){
    document.getElementById('ph').innerText='Mens Section';
    items.innerHTML = '';
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
        for(let i in data){
            if(data[i].category == "men's clothing"){
                items.innerHTML += `
                    <div class="item">
                        <img src="${data[i].image}" alt="Item" />
                        <div class="info">
                            <div class="price-size">
                                <div class="price">&#8377 ${data[i].price}</div>
                                <div class="sized">S,M,L</div>
                            </div>
                            <div class="colors">
                                <div class="row">Colors:</div>
                                <div class="circle" style="background-color: #000"></div>
                                <div class="circle" style="background-color: #4938af"></div>
                                <div class="circle" style="background-color: #203d3e"></div>
                                
                            </div>
                            <div class="rating">
                                <div >Rating:</div>
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                            </div>
                            
                            </div>
                        <button id="addBtn" onclick="handleCart('${data[i].image}','${data[i].title}','${data[i].price}')">Add to Cart</button>
                    </div>
            `
            }
        }

    })
    document.getElementById('allpro').style.backgroundColor='white';
    document.getElementById('allpro').style.color='black';
    document.getElementById('men').style.backgroundColor='black';
    document.getElementById('men').style.color='white';
    document.getElementById('wmen').style.backgroundColor='white';
    document.getElementById('wmen').style.color='black';
    document.getElementById('jewe').style.backgroundColor='white';
    document.getElementById('jewe').style.color='black';
    document.getElementById('ele').style.backgroundColor='white';
    document.getElementById('ele').style.color='black';
}
function women(){
    console.log("hi")
    document.getElementById('ph').innerText='Womens Section';
    items.innerHTML = '';
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
        for(let i in data){
            if(data[i].category == "women's clothing"){
                items.innerHTML += `
                    <div class="item">
                        <img src="${data[i].image}" alt="Item" />
                        <div class="info">
                            <div class="price-size">
                                <div class="price">&#8377 ${data[i].price}</div>
                                <div class="sized">S,M,L</div>
                            </div>
                            <div class="colors">
                                <div class="row">Colors:</div>
                                <div class="circle" style="background-color: #000"></div>
                                <div class="circle" style="background-color: #4938af"></div>
                                <div class="circle" style="background-color: #203d3e"></div>
                                
                            </div>
                            <div class="rating">
                                <div >Rating:</div>
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                            </div>
                            
                            </div>
                        <button id="addBtn" onclick="handleCart('${data[i].image}','${data[i].title}','${data[i].price}')">Add to Cart</button>
                    </div>
                `
            }
        }
        
    })
    document.getElementById('allpro').style.backgroundColor='white';
    document.getElementById('allpro').style.color='black';
    document.getElementById('men').style.backgroundColor='white';
    document.getElementById('men').style.color='black';
    document.getElementById('wmen').style.backgroundColor='black';
    document.getElementById('wmen').style.color='white';
    document.getElementById('jewe').style.backgroundColor='white';
    document.getElementById('jewe').style.color='black';
    document.getElementById('ele').style.backgroundColor='white';
    document.getElementById('ele').style.color='black';
}
function jewe(){
    document.getElementById('ph').innerText='Jewellery Section';
    items.innerHTML = '';
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
        for(let i in data){
            if(data[i].category == "jewelery"){
                items.innerHTML += `
                    <div class="item">
                        <img src="${data[i].image}" alt="Item" />
                        <div class="info">
                            <div class="price-size">
                                <div class="price">&#8377 ${data[i].price}</div>
                                <div class="sized">S,M,L</div>
                            </div>
                            <div class="colors">
                                <div class="row">Colors:</div>
                                <div class="circle" style="background-color: #000"></div>
                                <div class="circle" style="background-color: #4938af"></div>
                                <div class="circle" style="background-color: #203d3e"></div>
                                
                            </div>
                            <div class="rating">
                                <div >Rating:</div>
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                            </div>
                            
                            </div>
                        <button id="addBtn" onclick="handleCart('${data[i].image}','${data[i].title}','${data[i].price}')">Add to Cart</button>
                    </div>
                `
            }
        }
    })
    document.getElementById('allpro').style.backgroundColor='white';
    document.getElementById('allpro').style.color='black';
    document.getElementById('men').style.backgroundColor='white';
    document.getElementById('men').style.color='black';
    document.getElementById('wmen').style.backgroundColor='white';
    document.getElementById('wmen').style.color='black';
    document.getElementById('jewe').style.backgroundColor='black';
    document.getElementById('jewe').style.color='white';
    document.getElementById('ele').style.backgroundColor='white';
    document.getElementById('ele').style.color='black';
}
function electronics(){
    document.getElementById('ph').innerText='Electronics Section';
    items.innerHTML = '';
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
        for(let i in data){
            if(data[i].category == "electronics"){
                items.innerHTML += `
                    <div class="item">
                        <img src="${data[i].image}" alt="Item" />
                        <div class="info">
                            <div class="price-size">
                                <div class="price">&#8377 ${data[i].price}</div>
                                <div class="sized">S,M,L</div>
                            </div>
                            <div class="colors">
                                <div class="row">Colors:</div>
                                <div class="circle" style="background-color: #000"></div>
                                <div class="circle" style="background-color: #4938af"></div>
                                <div class="circle" style="background-color: #203d3e"></div>
                                
                            </div>
                            <div class="rating">
                                <div >Rating:</div>
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                            </div>
                            
                            </div>
                        <button id="addBtn" onclick="handleCart('${data[i].image}','${data[i].title}','${data[i].price}')">Add to Cart</button>
                    </div>
                `
            }
        }
        
    })
    document.getElementById('allpro').style.backgroundColor='white';
    document.getElementById('allpro').style.color='black';
    document.getElementById('men').style.backgroundColor='white';
    document.getElementById('men').style.color='black';
    document.getElementById('wmen').style.backgroundColor='whitw';
    document.getElementById('wmen').style.color='black';
    document.getElementById('jewe').style.backgroundColor='white';
    document.getElementById('jewe').style.color='black';
    document.getElementById('ele').style.backgroundColor='black';
    document.getElementById('ele').style.color='white';
}

// Handle Chart

var cartData = new Array();
function handleCart(img, title, price){
    cartData.push(
        {
            'name':title,
            'image':img,
            'price':price
        }
    )
    localStorage.setItem("cartData",JSON.stringify(cartData));
    document.getElementById('cartCount').innerText= 'My Cart '+cartData.length;
}

function getData(){
    let currVal = document.getElementById('searchData').value;
    console.log(currVal)
    items.innerHTML = '';
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
        for(let i in data){
            if((data[i].title).includes(currVal)){
                items.innerHTML += `
                    <div class="item">
                        <img src="${data[i].image}" alt="Item" />
                        <div class="info">
                            <div class="price-size">
                                <div class="price">&#8377 ${data[i].price}</div>
                                <div class="sized">S,M,L</div>
                            </div>
                            <div class="colors">
                                <div class="row">Colors:</div>
                                <div class="circle" style="background-color: #000"></div>
                                <div class="circle" style="background-color: #4938af"></div>
                                <div class="circle" style="background-color: #203d3e"></div>
                                
                            </div>
                            <div class="rating">
                                <div >Rating:</div>
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                                <img src="../asset/Star 1.png" alt="img not found" />
                            </div>
                            
                            </div>
                        <button id="addBtn" onclick="handleCart('${data[i].image}','${data[i].title}','${data[i].price}')">Add to Cart</button>
                    </div>
                `
            }
        }
        
    })
}