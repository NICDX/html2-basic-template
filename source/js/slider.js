const slider = document.querySelector('.slider')

if (slider) {
  const sliderTrack = slider.querySelector('.slider__track')
  const sliderItems = sliderTrack.querySelectorAll('.slider__item')

  const arrowPrev = slider.querySelector('.slider__arrow--prev')
  const arrowNext = slider.querySelector('.slider__arrow--next')

  const paginationItems = slider.querySelectorAll('.slider__pagination-item')

  let currentSlideIndex = 0

  const checkBorders = () => {
    currentSlideIndex <= 0 ?
      arrowPrev.setAttribute('disabled', '')
      :
      arrowPrev.removeAttribute('disabled')

    currentSlideIndex + 1 >= sliderItems.length ?
      arrowNext.setAttribute('disabled', '')
      :
      arrowNext.removeAttribute('disabled')
  }

  const setCurrentPaginationItem = () => {
    paginationItems.forEach(item => item.classList.remove('slider__pagination-item--current'))
    paginationItems[currentSlideIndex].classList.add('slider__pagination-item--current')
  }

  const setCurrentSlide = () => {
    sliderTrack.style = `transform: translateX(-${currentSlideIndex * 100}%)`
    sliderItems.forEach(item => item.classList.remove('slider__item--current'))
    sliderItems[currentSlideIndex].classList.add('slider__item--current')
  }

  const moveSlider = () => {
    checkBorders()
    setCurrentPaginationItem()
    setCurrentSlide()
  }

  const moveSliderTo = (index) => {
    currentSlideIndex = index
    moveSlider()
  }

  const arrowNextHandler = () => {
    currentSlideIndex++
    moveSlider()
  }

  const arrowPrevHandler = () => {
    currentSlideIndex--
    moveSlider()
  }

  const initSlider = () => {

    paginationItems.forEach((item, index) => item
      .querySelector('.slider__pagination-button')
      .addEventListener('click', () => moveSliderTo(index)))

    arrowNext.addEventListener('click', arrowNextHandler)
    arrowPrev.addEventListener('click', arrowPrevHandler)
    moveSlider()
  }

  initSlider()
}
