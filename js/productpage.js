console.log('sanity check!')

const productListSection = document.getElementById('product-list')
const productList = document.createElement('UL')

data.products.forEach((item, index)=> {
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
  addToCart.className = 'btn addToCart'
  addToCart.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart'
  productItem.appendChild(addToCart)

  productList.appendChild(productItem)
})

productListSection.appendChild(productList)
