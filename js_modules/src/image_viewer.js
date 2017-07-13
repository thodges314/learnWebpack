import big from '../assets/big.jpg'
import small from '../assets/small.jpg'
import '../styles/image_viewer.css'

const imageSmall = document.createElement('img')
const imageBig = document.createElement('img')
// image.src = 'http://lorempixel.com/400/400'
imageSmall.src=small
imageBig.src=big

document.body.appendChild(imageSmall)
document.body.appendChild(imageBig)
