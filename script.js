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

// script for modal image

window.onload = function () {
  const modal = document.querySelector('.modal-img')
  const img = document.querySelectorAll('.portfolio__image')
  img.forEach(image => {
    image.addEventListener('click', (event) => {
      console.log()
      modal.style.display = 'inline-flex';
      const modalImg = modal.querySelector('.modal-window')
      if (modalImg.children[1]) modalImg.children[1].remove()
      modalImg.append(image.cloneNode())
    })
  })
  const span = document.getElementsByClassName('close-modal-img')[0]
  span.onclick = function () {
    modal.style.display = 'none'
  }
}
