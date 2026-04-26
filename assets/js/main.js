import proxiedStore from './Store.js'
import registerToggleMenu from './menuToggle.js'
import registerMenuOnResize from './menuOnResize.js'

(function() {
  const { menuToggle } = proxiedStore
  registerToggleMenu(menuToggle)
  registerMenuOnResize()  
})()