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
  const image = document.createElement('img')
  image.src = productDivs[index].image
  productDivs[index].textContent = item.name
  productDivs[index].appendChild(image)
})
