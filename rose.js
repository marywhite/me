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
    this.drawPetals()
  }

  drawPetals() {
    const top = [
      this.getEllipsePoint(200),
      [-.16, -2],
      [0.5, -2.33],
      [0.6, -1.33],
      this.getEllipsePoint(320)
    ]

    const topLeft = [
      this.getAnchorPoint(top, .4, 'start'),
      [-0.83, -1.16],
      [-0.66, -2.16],
      this.getAnchorPoint(top, .2)
    ]

    const topRight = [
      ...top,
      this.getAnchorPoint(top, .5, 'end'),
      [1, -1.33],
      [1, -1.66],
      this.getAnchorPoint(top, .5, 'middle')
    ]

    const left = [
      [-1, -1.66],
      [-1.17, -1.33],
      [-1.33, 0],
      this.getEllipsePoint(100),
      [.33, 0],
      [-.5, -1],
      [-0.67, -1.67],
      [-1, -1.66]
    ]

    const right = [
      this.getEllipsePoint(20),
      [1.33, -0.83],
      [1.33, -1.33],
      [1, -1.4],
      [0.5, -1],
      [0, -0.83],
      this.getEllipsePoint(130),
    ]

    const rightTwo = [
      right[1],
      [1, .67],
      this.getEllipsePoint(100),
      [.1, .1],
      [1, -0.33],
      right[1]
    ]

    this.drawCurve(topLeft)
    this.drawCurve(topRight)
    this.drawCurve(top)
    this.drawCurve(right)
    this.drawCurve(rightTwo)
    this.drawCurve(left)
  }

  drawStem() {

  }

  getEllipsePoint(angle) {
    return [
      this._p.cos(this._p.radians(angle)),
      this._p.sin(this._p.radians(angle))
    ]
  }

  getAnchorPoint(vertices, point, position) {
    const v = [...vertices]
    let chunk = [0, 4]
    if (position === 'start') {
      v.unshift(v[0])
      chunk = [0, 4]
    }
    if (position === 'middle') {
      chunk = [1, 5]
    }
    if (position === 'end') {
      v.push([...v].pop())
      chunk = [2, 6]
    }
    let coords = v.slice(...chunk)
    return [
      this._p.curvePoint(...coords.map(([x]) => x), point),
      this._p.curvePoint(...coords.map(([, y]) => y), point)
    ]
  }

  scale(vertices) {
    return [this._x + this._radius * vertices[0], this._y + this._radius * vertices[1]]
  }

  drawCurve(vertices) {
    const anchored = [
      vertices[0],
      ...vertices,
      [...vertices].pop()
    ].map(this.scale.bind(this))
    this._p.beginShape()
    anchored.map(v => this._p.curveVertex(...v))
    this._p.endShape()
  }

}

const rose = new Rose(750, 500, 200, 200, 30, 255, 0)
const pRose = new p5(rose.sketch.bind(rose), 'rose')

