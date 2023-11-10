const buttonAccordion = [...document.querySelectorAll('.accordion-title-box')]

buttonAccordion.map(el => {
  el.addEventListener('click', () => {
    let text = el.nextElementSibling
    if (text.classList.contains('accordion-text-visible')) {
      text.classList.remove('accordion-text-visible')
    } else {
      text.classList.add('accordion-text-visible')
    }
  })
})
