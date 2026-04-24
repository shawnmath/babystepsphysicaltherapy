(function() {
  const menu = document.querySelector('nav ul')
  const menuToggle = document.querySelector('nav button')  

  menuToggle.addEventListener('click', function() {    
    const expanded = this.getAttribute('aria-expanded')
    const ariaVal = expanded === 'false' ? 'true' : 'false'
    this.setAttribute('aria-expanded', ariaVal)

    if (expanded === 'false') {
      menu.style.display = 'block'
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
})()