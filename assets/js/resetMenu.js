import { menu, menuToggle } from './Store.js'

export default function resetMenu(){
  menu.classList.remove('active')
  menuToggle.setAttribute('aria-expanded', 'false')
}