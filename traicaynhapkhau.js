const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click", function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("p").innerText
        var productPrice = product.querySelector("h3").innerText
        //console.log(productPrice, productImg, productName)
        addcart(productPrice, productImg, productName)
    }})

})

function addcart(productPrice, productImg, productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            alrerE = "Sản phẩm của bạn đã có trong giỏ hàng"
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    //console.log(cartItem)
    var totalC = 0
    for(var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        totalA = inputValue*productPrice*1000
        //totalB = totalA.toLocaleString('de-DE')
        //console.log(totalB)
        totalC = totalC + totalA
        //totalD = totalC.toLocaleString('de-DE')
        //console.log(totalC)
    }

    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    console.log(cartTotalA)
    inputchange()
}

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            //console.log(cartitemR)
            cartitemR.remove()
            carttotal()
        })
    }
}

function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        }) 
    }
}

const cartbtn = document.querySelector(".ti-close")
const cartshow = document.querySelector(".cart-icon")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})

cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})

// var closeButton = document.querySelector(".cart i.ti-close");
//     // Lấy section có class "cart"
//     var cartSection = document.querySelector(".cart");

//     // Thêm sự kiện click vào thẻ i
//     closeButton.addEventListener("click", function() {
//         // Ẩn section "cart"
//         cartSection.style.display = "none";
//     });

function dieu_huong(){
    window.location.href = 'thanhtoan2.html';
    console.log("xuất")
}

    

   
