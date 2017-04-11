class Rose {
  constructor(width, height, x, y, radius, stroke, fill) {
    this._width = width
    this._height = height
    this._x = x
    this._y = y
    this._radius = radius
    this._stroke = stroke
    this._fill = fill
  }
  sketch(p) {
    this._p = p
    p.setup = this.setup.bind(this)
  }

  setup() {
    this._p.createCanvas(this._width, this._height)
    this._p.stroke(this._stroke)
    this._p.fill(this._fill)
    this._p.ellipse(this._x, this._y, this._radius * 2)
  }

  drawPetals() {

  }

  drawStem() {

  }

}

const flora = new Rose(750, 750, 200, 200, 30, 255, 0)
const rose = new p5(flora.sketch.bind(flora), 'rose')

