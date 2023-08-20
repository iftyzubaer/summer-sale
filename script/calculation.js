document.getElementById('prod1').addEventListener('click', function(){
    title=title1.innerHTML
    price=price1.innerHTML
    addToCart(title);
    addPrice(price);
});
document.getElementById('prod2').addEventListener('click', function(){
    title=title2.innerHTML
    price=price2.innerHTML
    addToCart(title);
    addPrice(price);
});
document.getElementById('prod3').addEventListener('click', function(){
    title=title3.innerHTML
    price=price3.innerHTML
    addToCart(title);
    addPrice(price);
});
document.getElementById('prod4').addEventListener('click', function(){
    title=title4.innerHTML
    price=price4.innerHTML
    addToCart(title);
    addPrice(price);
});
document.getElementById('prod5').addEventListener('click', function(){
    title=title5.innerHTML
    price=price5.innerHTML
    addToCart(title);
    addPrice(price);
});
document.getElementById('prod6').addEventListener('click', function(){
    title=title6.innerHTML
    price=price6.innerHTML
    addToCart(title);
    addPrice(price);
});
document.getElementById('prod7').addEventListener('click', function(){
    title=title7.innerHTML
    price=price7.innerHTML
    addToCart(title);
    addPrice(price);
});
document.getElementById('prod8').addEventListener('click', function(){
    title=title8.innerHTML
    price=price8.innerHTML
    addToCart(title);
    addPrice(price);
});
document.getElementById('prod9').addEventListener('click', function(){
    title=title9.innerHTML
    price=price9.innerHTML
    addToCart(title);
    addPrice(price);
});

function addToCart(title) {
    const storageBox = document.getElementById('storage-box');
    const p = document.createElement('p');
    const count = storageBox.childElementCount;
    p.innerHTML = `${count+1}. ${title}`;
    storageBox.appendChild(p);
}

function addPrice(productPrice) {
    maxStringElement = document.getElementById('totalPrice');
    maxString = maxStringElement.innerHTML;
    max = parseFloat(maxString);
    productPrice = parseFloat(productPrice);
    totalPrice = max + productPrice;
    maxStringElement.innerHTML = totalPrice.toFixed(2);

    if (totalPrice >= 200) {
        couponBox.removeAttribute('disabled');
        couponBtn.removeAttribute('disabled');
        
        document.getElementById('couponBtn').addEventListener('click', function(){
            const coupon = document.getElementById('couponBox');
            const couponValue = coupon.value;

            if(couponValue === "SELL200") {
                discountPriceElement = document.getElementById('discountPrice');
                discountPrice = totalPrice * 20 / 100;
                discountPriceElement.innerHTML = discountPrice.toFixed(2);

                grandPriceElement = document.getElementById('grandPrice')
                grandPrice = totalPrice - discountPrice;
                grandPriceElement.innerHTML = grandPrice.toFixed(2);
            }
        })

    }
    else {
        couponBox.setAttribute('disabled', 'disabled');
        couponBtn.setAttribute('disabled', 'disabled');
    }
}