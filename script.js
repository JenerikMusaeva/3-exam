

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.portfolio__image')
  images.forEach(portfolio__image => {
    portfolio__image.addEventListener('load', loadedHandler)
})

function loadedHandler(event) {
  event.path[0].setAttribute('src', event.path[0].dataset.src)
  event.path[0].removeEventListener('load', loadedHandler)
}
})
