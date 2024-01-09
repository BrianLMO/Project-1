let cartCount = 0;
let cartItems = [];

function addToCart(name, price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;

    const item = {
        name: name,
        price: price
    };

    cartItems.push(item);
}

function goToBasket() {
    // Here, you can navigate to another page (e.g., basket.html) and pass the cartItems data.
    // For simplicity, we'll just log the items to the console.
    console.log("Cart Items:", cartItems);
}


function displayBasketItems() {
    const basketItemsContainer = document.getElementById('basket-items');

    if (cartItems.length === 0) {
        basketItemsContainer.innerHTML = "<p>Your basket is empty.</p>";
    } else {
        let totalAmount = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('basket-item');
            itemElement.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            basketItemsContainer.appendChild(itemElement);

            totalAmount += item.price;
        });

        const totalElement = document.createElement('div');
        totalElement.classList.add('total');
        totalElement.innerHTML = `<p>Total: $${totalAmount}</p>`;
        basketItemsContainer.appendChild(totalElement);
    }
}

function goToBasket() {
    // Navigate to the basket.html page
    window.location.href = "basket.html";
}
