console.log("sanity check!")

const productSection = document.getElementById('products-section')
const productDivs = productSection.children

const productArray = data.products

//pick three products at random to dipslay
const randomThree = []
for(let i=0; i<3; i++) {
  let rando = Math.floor(Math.random() * productArray.length)
  randomThree.push(productArray[rando])
}

randomThree.forEach((item, index)=> {
  // populate content from data source
  productDivs[index].textContent = ""

  const header = document.createElement('h5')
  header.textContent = item.name
  productDivs[index].appendChild(header)

  const image = document.createElement('img')
  image.src = productArray[index].image
  productDivs[index].appendChild(image)

  const description = document.createElement('p')
  description.className = "productDescription"
  description.textContent = productArray[index].description
  productDivs[index].appendChild(description)

  const price = document.createElement('span')
  price.className = 'price'
  price.textContent = "$" + productArray[index].price
  productDivs[index].appendChild(price)

  const addToCart = document.createElement('button')
  addToCart.className = 'addToCart'
  addToCart.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart'
  productDivs[index].appendChild(addToCart)
})
