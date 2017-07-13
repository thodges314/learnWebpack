// // import big from '../assets/big.jpg'
// // import small from '../assets/small.jpg'
// import '../styles/image_viewer.css'
//
// const image = document.createElement('img')
// // const imageSmall = document.createElement('img')
// // const imageBig = document.createElement('img')
// image.src = 'http://lorempixel.com/400/400'
// // imageSmall.src=small
// // imageBig.src=big
//
// document.body.appendChild(image)
// // document.body.appendChild(imageSmall)
// // document.body.appendChild(imageBig)
/// to see codesplitting - make a function be returned which can display an image
import small from '../assets/small.jpg'
import '../styles/image_viewer.css'

export default () => {
  const image = document.createElement('img')
  image.src = small

  document.body.appendChild(image)
}
