console.log('sanity check!')

const productListSection = document.getElementById('product-list')
const productList = document.createElement('UL')
const allProducts = data.products

// Filters
document.getElementById('show-all').addEventListener('click', function(e) {
  displayProducts(allProducts)
})

document.getElementById('filter-price-xs').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.price < 0.25)
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})
document.getElementById('filter-price-s').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return ((item.price >= 0.25) && (item.price < 0.50))
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})
document.getElementById('filter-price-m').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return ((item.price >= 0.50) && (item.price < 1.00))
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})
document.getElementById('filter-price-l').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.price >= 1.00)
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})

document.getElementById('filter-edible-leaves').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.edibleParts.includes('leaf'))
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})
document.getElementById('filter-edible-roots').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.edibleParts.includes('root'))
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})
document.getElementById('filter-edible-stem').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.edibleParts.includes('stem'))
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})
document.getElementById('filter-edible-fruit').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.edibleParts.includes('fruit'))
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})

document.getElementById('filter-season-winter').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.season === 'winter')
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})
document.getElementById('filter-season-spring').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.season === 'spring')
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})
document.getElementById('filter-season-summer').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.season === 'summer')
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
})
document.getElementById('filter-season-fall').addEventListener('click', function(e) {
  const filteredProducts = allProducts.filter(function(item) {
    return (item.season === 'fall')
  })
  console.log(filteredProducts)
  displayProducts(filteredProducts)
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
    image.src = data.products[index].image
    image.className = 'product-img'
    productItem.appendChild(image)

    const description = document.createElement('p')
    description.className = "productDescription"
    description.textContent = data.products[index].description
    productItem.appendChild(description)

    const price = document.createElement('span')
    price.className = 'price'
    price.textContent = "$" + data.products[index].price
    productItem.appendChild(price)

    const addToCart = document.createElement('button')
    addToCart.className = 'btn addToCart hidden'
    addToCart.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart'
    productItem.appendChild(addToCart)

    productList.appendChild(productItem)

    productItem.addEventListener('mouseenter', function(e) {
      addToCart.classList.remove('hidden')
    })
    productItem.addEventListener('mouseleave', function(e) {
      addToCart.classList.add('hidden')
    })
  })
  productListSection.appendChild(productList)
}

displayProducts(data.products)
