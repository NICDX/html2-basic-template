
import Constant from './const.js'

const burgerButton = document.querySelector('.burger')

if (burgerButton && document.documentElement.clientWidth < Constant.VIEWPORT_TABLET) {
  const menu = document.querySelector('.nav')
  menu.classList.add('nav--hidden')

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger--opened')
    menu.classList.toggle('nav--hidden')
  })
}
