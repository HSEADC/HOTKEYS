export function animateKeyboard(imgElement, image2, image3) {
  const imageContainer = document.querySelector('.M_KeyboardContainer')
  const imageElement = document.querySelector(imgElement)
  const image1 = imageElement.src

  let images = [image1, image2, image3]
  let imageIndex = 0

  function changeImage() {
    imageElement.src = images[imageIndex]
    imageIndex = (imageIndex + 1) % images.length
  }

  imageContainer.style.opacity = '1'

  setTimeout(() => {
    setInterval(changeImage, 1000)
  }, 2500)
}
