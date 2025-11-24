const products = document.querySelectorAll('.product');
const cartProductsContainer = document.querySelector('.cart__products');

function updateCart(productId, productImage, quantity) {
    const existingProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);

    if (existingProduct) {        
        const countElement = existingProduct.querySelector('.cart__product-count');
        countElement.textContent = parseInt(countElement.textContent) + quantity;
    } else {        
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.setAttribute('data-id', productId);

        const productImageElement = document.createElement('img');
        productImageElement.classList.add('cart__product-image');
        productImageElement.src = productImage;

        const productCountElement = document.createElement('div');
        productCountElement.classList.add('cart__product-count');
        productCountElement.textContent = quantity;

        cartProduct.appendChild(productImageElement);
        cartProduct.appendChild(productCountElement);
        cartProductsContainer.appendChild(cartProduct);
    }
}

products.forEach(product => {
    const quantityControlDec = product.querySelector('.product__quantity-control_dec');
    const quantityControlInc = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');
    const addToCartButton = product.querySelector('.product__add');

    quantityControlDec.addEventListener('click', () => {
        let currentValue = parseInt(quantityValue.textContent);
        if (currentValue > 1) {
            quantityValue.textContent = currentValue - 1;
        }
    });

    quantityControlInc.addEventListener('click', () => {
        let currentValue = parseInt(quantityValue.textContent);
        quantityValue.textContent = currentValue + 1;
    });

    addToCartButton.addEventListener('click', () => {
        const productId = product.getAttribute('data-id');
        const productImage = product.querySelector('.product__image').src;
        const quantity = parseInt(quantityValue.textContent);
        updateCart(productId, productImage, quantity);
    });
});