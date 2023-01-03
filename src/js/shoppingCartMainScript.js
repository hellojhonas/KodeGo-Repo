window.onload = () => {
    let items = []
    let cartItems = []

    const fetchProducts = async () => {
        let res = await fetch('https://api.bluecartapi.com/request?api_key=5AE04C7EFF9E4838ACCD52AD8531FB5E&search_term=highlighter+pens&type=search')
        let json = await res.json()
        return await json
    }

    const showProducts = async () => {
        let results = await fetchProducts();
        getItems(results['search_results']);
    }

    showProducts()
    init()

    function init() {
        console.log('function init was called')
        if (sessionStorage.cart)
            cartItems = JSON.parse(sessionStorage.getItem('cart')).items
        else
            sessionStorage.setItem('cart', JSON.stringify({ items: [] }))
        updateCartIndicator();
    }

    function getItems(products) {
        items = products
        createItems(products);
        bindEvents();
    }

    function createItems(data) {
        document.querySelector("div.page-loading-status").style = "display: none";
        let itemsList = document.querySelector('#items-list');
        itemsList.innerHTML = ''
        let item = ''
        for (let i = 0; i < data.length; i++) {
            item += `<div class="col m-2">
                        <div class="thumbnail card h-100 justify-content-between">
                        <img src='${data[i].product.images[0]}' alt='${data[i].product.title}' class="card-img-top img"/>
                            <div class="caption p-3 d-flex flex-column justify-content-between">
                            <h6 class="justify-content-between line-clamp">${data[i].product.title}</h6>
                            <p>${data[i].offers.primary.currency_symbol}${data[i].offers.primary.price.toFixed(2)}</p>
                            <button data-item-id='${data[i].position}'class='btn btn-success add-to-cart'>Add to Cart</button>
                            </div>
                        </div>
                    </div>`
        }
        itemsList.innerHTML = item
    }

    function bindEvents() {
        document.querySelectorAll('.add-to-cart').forEach(function (e) {
            e.addEventListener('click', function (event) {
                const id = event.target.dataset.itemId
                const button = this;
                button.innerHTML = 'Adding...'
                button.setAttribute('disabled', true)
                setTimeout(() => {
                    button.innerHTML = 'Add to Cart'
                    button.removeAttribute('disabled')
                    addItem(id)
                    updateCartIndicator()
                }, 1000)
            })
        })
    }

    function addItem(id) {
        let itemObj = items.filter(item => {
            return item.position === parseInt(id)
        })[0]
        let itemInCart = cartItems.filter(item => {
            return item.id === id
        })[0]
        if (itemInCart)
            itemInCart.amount++
        else
            cartItems.push({ item: itemObj, amount: 1 })
        sessionStorage.setItem('cart', JSON.stringify({ items: cartItems }))
    }

    function updateCartIndicator() {
        let itemsTotal = 0
        console.log('cart', cartItems)
        for (let i = 0; i < cartItems.length; i++) {
            itemsTotal += cartItems[i].amount
        }
        document.getElementById('cart-items-num').innerHTML = itemsTotal
    }
}