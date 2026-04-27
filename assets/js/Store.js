const Store = {
  menu: document.querySelector('nav ul'),
  menuToggle: document.querySelector('nav button'),
  menuActive: false,
  *[Symbol.iterator]() {
    for(let key of Object.keys(this)) {
      yield this[key]
    }
  }
}

const proxiedStore = new Proxy(Store, {
  get(target, prop, receiver) {
    if (prop === 'menuActive') return target.menuActive
    if (prop === 'menu') return target.menu
    if (prop === 'menuToggle') return target.menuToggle
  },
  set(target, property, value) {
    target[property] = value
    if (property === 'menuActive') {
      window.dispatchEvent(new Event('menuactivechange'))
    }
    return true
  }
})

export default proxiedStore