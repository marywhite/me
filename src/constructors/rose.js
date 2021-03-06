export default class Rose {
  constructor(p, { radius, x, y, stroke = 0, fill = 255 } = {}) {
    this._radius = radius
    this._x = x
    this._y = y
    this._stroke = stroke
    this._fill = fill
    this._p = p
  }

  draw = () => {
    this._p.stroke(this._stroke)
    this._p.fill(this._fill)
    this._p.ellipse(this._x, this._y, this._radius)
    this.drawPetals()
    this.drawStem()
  }

  drawPetals = () => {
    const top = [
      this.getEllipsePoint(200),
      [-.16, -2],
      [0.5, -2.33],
      [0.6, -1.33],
      this.getEllipsePoint(320)
    ]

    const topLeft = [
      this.getAnchorPoint(top, .4, 0, { repeatFirst: true }),
      [-0.83, -1.16],
      [-0.66, -2.16],
      this.getAnchorPoint(top, .2)
    ]

    const topRight = [
      ...top,
      this.getAnchorPoint(top, .5, 2, { repeatLast: true }),
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
    const leafAnchor = [-.14, 3]
    const line = this.scale([
      this.getEllipsePoint(95),
      [-.21, 2],
      leafAnchor,
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

    const leaf = [
      [0.57, 2.43],
      [1.14, 1.71],
      [2.29, 1.43],
      [3, 1.71],
      [1.86, 2.5],
      [1.28, 2.93],
      [0.57, 2.6],
      [0, 3.1]
    ]

    // draw leaf
    this.drawCurve([
      leafAnchor,
      ...leaf,
      leafAnchor
    ])

    // draw stem
    this._p.beginShape()
    stem.map(v => this._p.vertex(...v))
    this._p.endShape()

    const decoration = [
      [.62, 2.5],
      [1.14, 2.14],
      [2.29, 1.79],
      [2.85, 1.76]
    ]
    // draw center vein of rose
    this.drawCurve(decoration)

    const calcPoints = (arr, vertices) => this.scale(arr.map(([a, index, opts]) =>
      this.getAnchorPoint(vertices, a, index, opts)))

    // grab points along the center vein of the rose
    const centerLeaf = [
      [.75, 0, { repeatFirst: true }],
      [.25],
      [.66],
      [.25, 1, { repeatLast: true }]
    ]
    const centerPoints = calcPoints(centerLeaf, decoration)

    // grab points along the top edge of the rose
    const topLeaf = [
      [.75, 0, { repeatFirst: true }],
      [.25],
      [.66],
      [.25, 1]
    ]
    const topPoints = calcPoints(topLeaf, leaf)

    // grab points along the bottom edge of the rose
    const bottomLeaf = [
      [.25, 1],
      [.9, 1],
      [.33, 2],
      [.6, 2],
    ]
    const bottomPoints = calcPoints(bottomLeaf, [...leaf].reverse())

    // draw inner veins
    centerPoints.forEach((centerPt, i) => {
      this._p.curve(...centerPt, ...centerPt, ...topPoints[i], ...topPoints[i])
      this._p.curve(...centerPt, ...centerPt, ...bottomPoints[i], ...bottomPoints[i])
    })
  }

  getEllipsePoint = (angle) => ([
    this._p.cos(this._p.radians(angle)),
    this._p.sin(this._p.radians(angle))
  ])

  // return coordinates from any point along a curve where amount is a number between 0 and 1
  // anchor points require 4 vertices tbd... specify starting index to target point in a curve.
  // adjust for control points on curves, where first and last indicies are repeated with repeatFirst/Last
  getAnchorPoint = (vertices, amount, startingIndex = 0, { repeatFirst = false, repeatLast = false } = {}) => {
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

  scale = (vertices) => vertices.map(([vx, vy]) => [this._x + this._radius * vx, this._y + this._radius * vy])

  drawCurve = (vertices) => {
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
}
