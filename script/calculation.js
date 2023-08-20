// Add event listeners to product elements
for (let i = 1; i <= 9; i++) {
    const prodElement = document.getElementById(`prod${i}`);
    if (prodElement) {
        prodElement.addEventListener('click', function() {
            const title = document.getElementById(`title${i}`).innerHTML;
            const price = document.getElementById(`price${i}`).innerHTML;
            addToCart(title);
            addPrice(price);
        });
    }
}

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