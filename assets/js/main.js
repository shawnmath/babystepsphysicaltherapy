(function() {
  const menu = document.querySelector('nav ul')
  const menuToggle = document.querySelector('nav button')

  menuToggle.addEventListener('click', function() {    
    const expanded = this.getAttribute('aria-expanded')
    const ariaVal = expanded === 'false' ? 'true' : 'false'
    this.setAttribute('aria-expanded', ariaVal)

    if (expanded === 'false') {
      menu.style.display = 'flex'
    } else {
      menu.style.display = 'none'
    }    
  })

  document.addEventListener('click', function(e) {
    if (e.target !== menuToggle) {
      if (menuToggle.getAttribute('aria-expanded') === 'true') {
        menuToggle.setAttribute('aria-expanded', 'false')
        menu.style.display = 'none'
      }
    }    
  })

  const resetMenu = () => {
    if (window.innerWidth > 767) {
      menu.style.display = 'flex'
      menuToggle.setAttribute('aria-expanded', 'false')
    }
  }

  let timeout
  window.addEventListener('resize', function(e) {
    clearTimeout(timeout)
    timeout = setTimeout(resetMenu, 150)
  })
})()