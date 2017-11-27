const productListSection = document.getElementById('product-list')
const productList = document.createElement('UL')
const allProducts = data.products

// Filters
document.getElementById('show-all').addEventListener('click', function(e) {
  displayProducts(allProducts)
})

const allFilters = document.querySelectorAll('.filter')
allFilters.forEach(element => {
  element.addEventListener('click', function(e) {
    let filteredProducts = []
    switch (element.id) {
      case "filter-price-xs":
        filteredProducts = allProducts.filter(item => item.price < 0.25)
        break;
      case "filter-price-s":
        filteredProducts = allProducts.filter(item => ((item.price >= 0.25) && (item.price < 0.50)))
        break;
      case "filter-price-m":
        filteredProducts = allProducts.filter(item => ((item.price >= 0.50) && (item.price < 1.00)))
        break;
      case "filter-price-l":
        filteredProducts = allProducts.filter(item => (item.price >= 1.00))
        break;
      case "filter-edible-leaves":
        filteredProducts = allProducts.filter(item => (item.edibleParts.includes('leaf')))
        break;
      case "filter-edible-roots":
        filteredProducts = allProducts.filter(item => (item.edibleParts.includes('root')))
        break;
      case "filter-edible-stem":
        filteredProducts = allProducts.filter(item => (item.edibleParts.includes('stem')))
        break;
      case "filter-edible-fruit":
        filteredProducts = allProducts.filter(item => (item.edibleParts.includes('fruit')))
        break;
      case "filter-season-winter":
        filteredProducts = allProducts.filter(item => (item.season === 'winter'))
        break;
      case "filter-season-spring":
        filteredProducts = allProducts.filter(item => (item.season === 'spring'))
        break;
      case "filter-season-summer":
        filteredProducts = allProducts.filter(item => (item.season === 'summer'))
        break;
      case "filter-season-fall":
        filteredProducts = allProducts.filter(item => (item.season === 'fall'))
        break;
      default:
        filteredProducts = allProducts
        break

    }
    displayProducts(filteredProducts)
  })
})

// Display products
function displayProducts(products) {
  productList.innerHTML = ""
  products.forEach((item, index)=> {
    // populate content from data source
    const productItem = document.createElement('LI')
    productItem.className = "card"
    const header = document.createElement('h5')
    header.textContent = item.name
    productItem.appendChild(header)

    const image = document.createElement('img')
    image.src = item.image
    image.className = 'product-img'
    productItem.appendChild(image)

    const description = document.createElement('p')
    description.className = "productDescription"
    description.textContent = item.description
    productItem.appendChild(description)

    const price = document.createElement('span')
    price.className = 'price'
    price.textContent = "$" + item.price
    productItem.appendChild(price)

    const addToCart = document.createElement('button')
    addToCart.className = 'btn addToCart hidden'
    addToCart.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart'
    productItem.appendChild(addToCart)

    productList.appendChild(productItem)

    productItem.addEventListener('mouseenter', function() {
      addToCart.classList.remove('hidden')
    })
    productItem.addEventListener('mouseleave', function() {
      addToCart.classList.add('hidden')
    })
  })
  productListSection.appendChild(productList)
}

displayProducts(data.products)
