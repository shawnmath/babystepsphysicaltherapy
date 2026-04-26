import resetMenu from './resetMenu.js'

let timeout
const onResize = () => {
  clearTimeout(timeout)
  timeout = setTimeout(resetMenu, 250)
}

export default function registerMenuOnResize() {
  window.addEventListener('resize', onResize)
}