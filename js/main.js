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

  const addToCart = document.createElement('button')
  addToCart.classList.add('addToCart')
  addToCart.classList.add('hidden')
  addToCart.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart'
  productDivs[index].appendChild(addToCart)

  const image = document.createElement('img')
  image.id = 'product'+index
  image.src = item.image
  image.className = 'product-img'
  productDivs[index].appendChild(image)

  const description = document.createElement('p')
  description.className = "productDescription"
  description.textContent = item.description
  productDivs[index].appendChild(description)

  const price = document.createElement('span')
  price.className = 'price'
  price.textContent = "$" + item.price
  productDivs[index].appendChild(price)

  document.getElementById(image.id).addEventListener('mouseenter',function(){
    addToCart.classList.remove('hidden')
  })

  document.getElementById(image.id).addEventListener('mouseleave',function(){
    addToCart.classList.add('hidden')
  })
})

function validateEmail() {
  let email = document.getElementById('emailInput').value
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(email)){
    document.getElementById('emailInput').value = "Thank you!  We've signed you up for our newsletter.  :)"
  } else{
    alert('Please enter an email address!')
  }
}
