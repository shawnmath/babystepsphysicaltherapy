import resetMenu from './resetMenu.js'

const toggleAriaAttr = function(btn) {
  const expanded = btn.getAttribute('aria-expanded')
  const ariaVal = expanded === 'false' ? 'true' : 'false'
  btn.setAttribute('aria-expanded', ariaVal)
  return expanded
}

const menu = document.querySelector('nav ul')

const toggleMenu = function (e) {
  const expanded = toggleAriaAttr(this)

  if (expanded === 'false') {
    menu.classList.add('active')
  } else {
    menu.classList.remove('active')
  }
}

export default function registerToggleMenu(menuButton) {
  menuButton.addEventListener('click', toggleMenu)
  document.addEventListener('click', function(e) {
    if (e.target !== menuButton) {
      if (menuButton.getAttribute('aria-expanded') === 'true') {
        resetMenu()
      }
    }    
  })
}