// script for 'when the picture is loaded'
// document.addEventListener('DOMContentLoaded', () => {
//   const images = document.querySelectorAll('.portfolio__image')
//   images.forEach(portfolio__image => {
//     portfolio__image.addEventListener('load', loadedHandler)
//   })

//   function loadedHandler(event) {
//     event.path[0].setAttribute('src', event.path[0].dataset.src)
//     event.path[0].removeEventListener('load', loadedHandler)
//   }
// })

// script for modal image

window.onload = function () {
  const modal = document.querySelector('.modal-img')
  const portfolioItem = document.querySelectorAll('.portfolio__image')
  const span = document.getElementsByClassName('close-modal-img')[0]

  portfolioItem.forEach(image => {
    image.addEventListener('click', event => {
      modal.style.display = 'inline-flex'
      const modalImg = modal.querySelector('.modal-window')
      if (modalImg.children[1]) modalImg.children[1].remove();
      modalImg.append(image.cloneNode())
    })
  })

  span.addEventListener('click', function(e){
    e.preventDefault();
    modal.style.display = 'none'
  })

  modal.addEventListener('click', function(e){
    e.preventDefault();
    modal.style.display = 'none'
  })
}
