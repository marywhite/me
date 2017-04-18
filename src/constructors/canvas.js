import Rose from './rose'
import Resume from './resume'

const DIMENSION_THRESHOLD = 1024

export default class Canvas {
  constructor(target = '') {
    this._target = target
  }
  sketch = (p) => {
    this._p = p
    this._p.setup = this.setup
    this._p.draw = this.draw
    this._p.drawFns = new Set()
  }
  setup = () => {
    this.canvas = this._p.createCanvas(this._p.displayWidth, this._p.displayHeight)
    const smallDisplay = this._p.displayWidth <= DIMENSION_THRESHOLD
    const [x, y] = [
      this._p.displayWidth / 3,
      this._p.displayHeight / 5
    ]
    const opts = {
      x,
      y,
      radius: this._p.displayWidth / (smallDisplay ? 10 : 30),
      stroke: '#fda732',
      fill: '#ffffff',
    }
    this._rose = new Rose(this._p, opts)
    this._p.drawFns.add(this._rose.draw)
    const resume = new Resume(this._p, { x, y, smallDisplay })
    resume.setup()
  }

  draw = () => {
    this._p.clear()
    this._p.drawFns.forEach(fn => fn())
  }

  render = () => new p5(this.sketch, this._target)
}