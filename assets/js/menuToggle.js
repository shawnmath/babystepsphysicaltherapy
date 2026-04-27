import Store from './Store.js'

const { menu, menuToggle } = Store

const toggleAriaAttr = function(btn) {
  const expanded = btn.getAttribute('aria-expanded')
  const ariaVal = expanded === 'false' ? 'true' : 'false'
  btn.setAttribute('aria-expanded', ariaVal)
}

const toggleMenuClass = () => {
  if (Store.menuActive) {
    menu.classList.add('active')
  } else {
    menu.classList.remove('active')
  }
}

const toggleMenuActiveState = () => {
  Store.menuActive = !Store.menuActive
}

const onMenuActiveChange = (e) => {
  toggleAriaAttr(menuToggle)
  toggleMenuClass()
}

const registerOnResize = () => {
  let timeout
  window.addEventListener('resize', () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if (window.innerWidth > 767) {
        if (Store.menuActive) {
          toggleMenuActiveState()
        }
      }      
    }, 250)
  })
}

export default function registerToggleMenu() {  
  // On button click
  menuToggle.addEventListener('click', toggleMenuActiveState)

  // On off click
  document.addEventListener('click', (e) => {
    if (e.target !== menuToggle) {
      if (Store.menuActive) {
        toggleMenuActiveState()
      }
    }    
  })

  // On window resize
  registerOnResize()

  // Listen to menu change on proxy
  window.addEventListener('menuactivechange', onMenuActiveChange)
}
