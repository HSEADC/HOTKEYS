export function animateKeyboard(imgElement, image2, image3) {
  const imageElement = document.querySelector(imgElement)
  const image1 = imageElement.src

  let images = [image1, image2, image3]
  let imageIndex = 0

  function changeImage() {
    imageElement.src = images[imageIndex]
    imageIndex = (imageIndex + 1) % images.length
  }

  setTimeout(() => {
    setInterval(changeImage, 1000)
  }, 1000)
}
