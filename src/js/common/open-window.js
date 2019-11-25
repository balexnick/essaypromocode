const LINK = document.querySelectorAll('.redirect-page')

LINK.forEach(item => {
  item.addEventListener('click', (e) => {
    window.open(item.getAttribute('data-url'))
  })
})
