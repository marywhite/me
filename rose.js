class Rose {
  constructor(radius, target, {stroke = 255, fill = 0, draggable = false} = {}) {
    this._radius = radius
    this._width = this._radius * 6
    this._height = this._radius * 13
    this._x = this._radius * 2
    this._y = this._radius * 3
    this._stroke = stroke
    this._fill = fill
    this._target = target
    this._draggable = draggable
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
    this.drawStem()
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
      this.getAnchorPoint(top, .4, 0, {repeatFirst: true}),
      [-0.83, -1.16],
      [-0.66, -2.16],
      this.getAnchorPoint(top, .2)
    ]

    const topRight = [
      ...top,
      this.getAnchorPoint(top, .5, 2, {repeatLast: true}),
      [1, -1.33],
      [1, -1.66],
      this.getAnchorPoint(top, .5, 1)
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
    const line = this.scale([
      this.getEllipsePoint(95),
      [-.21, 2],
      [-.14, 3],
      [-.19, 4],
      [-.02, 7.14],
      [-.02, 9.33]
    ])

    const left = [...line].map(([vx, vy]) => [vx - this._radius / 10, vy])
    const right = [...line].map(([vx, vy]) => [vx + this._radius / 10, vy]).reverse()

    // bend some lines
    left[left.length - 1][0] += this._radius / 20
    right[0][1] += this._radius / 20
    const stem = [
      ...left,
      ...right
    ]

    // draw the stem
    this._p.beginShape()
    stem.map(v => this._p.vertex(...v))
    this._p.endShape()

  }

  getEllipsePoint(angle) {
    return [
      this._p.cos(this._p.radians(angle)),
      this._p.sin(this._p.radians(angle))
    ]
  }

  // return coordinates from any point along a curve where amount is a number between 0 and 1
  // anchor points require 4 vertices tbd... specify starting index to target point in a curve.
  // adjust for control points on curves, where first and last indicies are repeated with repeatFirst/Last
  getAnchorPoint(vertices, amount, startingIndex = 0, {repeatFirst = false, repeatLast = false} = {}) {
    const v = [...vertices]
    let chunk = [startingIndex, startingIndex + 4]
    if (repeatFirst) {
      v.unshift(v[0])
    }
    if (repeatLast) {
      v.push([...v].pop())
    }
    let coords = v.slice(...chunk)
    return [
      this._p.curvePoint(...coords.map(([x]) => x), amount),
      this._p.curvePoint(...coords.map(([, y]) => y), amount)
    ]
  }

  scale(vertices) {
    return vertices.map(([vx, vy]) => [this._x + this._radius * vx, this._y + this._radius * vy])
  }

  drawCurve(vertices) {
    // add control points to beginning and end of curve
    const anchored = this.scale([
      vertices[0],
      ...vertices,
      [...vertices].pop()
    ])
    this._p.beginShape()
    anchored.map(v => this._p.curveVertex(...v))
    this._p.endShape()
  }

  render() {
    return new p5(this.sketch.bind(this), this._target)
  }

}

const rose = new Rose(50, 'rose')
rose.render()