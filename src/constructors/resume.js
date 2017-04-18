import Rose from './rose'

export default class Resume {
  constructor(p, { x, y, smallDisplay } = {}) {
    this._p = p
    this._x = x
    this._y = y
    this._smallDisplay = smallDisplay
    this._button = this._p.select('.name')
    this.sections = [...this._p.selectAll('.content'), void 0]
  }

  setup = () => {
    this._button.position(this._x * 1.25, this._y * 2.5)
    this._button.elt.style.visibility = 'visible'
    if (this._smallDisplay) {
      this._button.elt.style['font-size'] = '24px'
    }
    this._button.elt.onkeypress = (e) => {
      if (e.keyCode === 31 || e.keyCode === 13) {
        this.navigate()
      }
    }
    this._button.mousePressed(() => this.navigate())
  }

  navigate = () => {
    if (this.hasRose) {
      this._p.drawFns.delete(this.decorate)
    }
    this.hasRose = false
    if (this._selected) {
      this._selected.elt.style.visibility = 'hidden'
    }
    this._selected = this.sections.shift()
    if (this._selected) {
      const coords = this._smallDisplay ? [this._button.x, this._button.y + this._button.height * 2] :
      [this._x * 1.75, this._y]
      this._selected.position(...coords)
      this._selected.elt.style.visibility = 'visible'
      this.hasRose = this._selected.class().split(' ').includes('decorate')
    }
    if (this.hasRose) {
      this._p.drawFns.add(this.decorate)
    }
    this.sections.push(this._selected)
  }

  decorate = () => {
    const { width, height, x, y } = this._selected
    const opts = {
      x: x + (this._smallDisplay ? this._button.width : width) / 2,
      y: y + height * 2.75,
      radius: width / 15
    }
    this._rose = new Rose(this._p, opts)
    this._rose.draw()
  }
}
