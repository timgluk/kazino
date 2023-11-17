const buttonAccordion = [...document.querySelectorAll('.accordion-title-box')]

buttonAccordion.map(el => {
  el.addEventListener('click', () => {
    const text = el.nextElementSibling
    const arrow = el.querySelector('.accordion-arrow')

    if (text.classList.contains('accordion-text-visible')) {
      text.classList.remove('accordion-text-visible')
      arrow.classList.remove('accordion-arrow_active')
    } else {
      text.classList.add('accordion-text-visible')
      arrow.classList.add('accordion-arrow_active')
    }
  })
})
