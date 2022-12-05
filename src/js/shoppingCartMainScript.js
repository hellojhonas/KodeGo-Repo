const products = [
    {
        "id": "1",
        "img": "../assets/404.jpg",
        "name": "Desktop Power 1",
        "price": "434.00"
    },
    {
        "id": "2",
        "img": "../assets/404.jpg",
        "name": "Laptop X",
        "price": "1299.34"
    },
    {
        "id": "3",
        "img": "../assets/404.jpg",
        "name": "Desktop G",
        "price": "499.00"
    },
    {
        "id": "4",
        "img": "../assets/404.jpg",
        "name": "Desktop Power 1",
        "price": "434.00"
    },
    {
        "id": "5",
        "img": "../assets/404.jpg",
        "name": "Laptop X",
        "price": "1299.34"
    }
];



















window.onload = function () {
    let items = [];
    let cartItems = [];
    getItems();
    init();

    function init() {
        console.log("Funtion init was called.");
        if (sessionStorage.cart) {
            cartItems = JSON.parse(sessionStorage.getItem('cart')).items;
        } else {
            sessionStorage.setItem('cart', JSON.stringify({ items: [] }));
        }
        updateCartIndicator();
    }
    function getItems() {
        items = [...products];
        createItems(products);
        bindEvents();
    }

    function createItems(data) {                
        let itemList = document.querySelector('#items-list');
        itemList.innerHTML = '';
        let item = '';
        for (let i = 0; i < data.length; i++) {
            item += '<div class="col-sm-6 col-md-4">';
            item += '<div class="thumbnail">';
            item += '<img src="' + data[i].img + '" alt="' + data[i].name + '" />';
            item += '<div class="caption">';
            item += '<h3>' + data[i].name + '<span class="label label-default">$' + data[i].price + '</span></h3>';
             item += '<p><button data-item-id="' + data[i].id + '" class="btn btn-primary add-to-cart" role="button">Add To Cart</button></p>';
             item += '</div></div></div>';
         }
         itemList.innerHTML = item;
    }
    function bindEvents() {
        document.querySelectorAll('.add-to-cart').forEach(function (el) {
            el.addEventListener('click', function (event) {
                const id = event.target.dataset.itemId;
                console.log('id = ' + id);
                const button = this;
                button.innerHTML = 'Adding...';
                button.setAttribute('disabled', true);
                    setTimeout(function () {
                        button.innerHTML = 'Add to Cart';
                        button.removeAttribute('disabled');
                        addItem(id);
                        updateCartIndicator();
                    }, 1000);
            });
        });
    }
    function addItem(id) {
        let itemObj = items.filter(function (item) {
            return item.id === id;
        })[0];
        let itemInCart = cartItems.filter(function (product) {
            console.log(product);
            return product.item.id === id;
        })[0];
        
        if (itemInCart) {
            itemInCart.amount++;
        } else {
            cartItems.push( { item: itemObj, amount: 1});
        }
        sessionStorage.setItem('cart', JSON.stringify({ items: cartItems}));
    }
    function updateCartIndicator() {
        let itemsTotal = 0;
        for (let i = 0; i < cartItems.length; i++) {
            itemsTotal += cartItems[i].amount;
        }
        document.getElementById('cart-items-num').innerHTML = itemsTotal;
    }
}



