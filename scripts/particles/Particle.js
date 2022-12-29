export default class Particle {
  #pixelInitialColor
  #red
  #green
  #blue
  #alpha
  #x
  #y
  #ctx
  #pixelSize

  constructor(props) {
    this.#red = props.red || 0;
    this.#green = props.green || 0;
    this.#blue = props.blue || 0;
    this.#alpha = props.alpha || 0;
    this.#x = props.x || 0;
    this.#y = props.y || 0;
    this.#ctx = props.ctx;
    this.#pixelSize = props.pixelSize;

    this.#pixelInitialColor = `rgba(${this.#red}, ${this.#green}, ${this.#blue}, ${this.#alpha/255})`
  }

  draw(){
    this.#ctx.fillStyle = this.#pixelInitialColor;
    this.#ctx.fillRect(this.#x, this.#y, this.#pixelSize, this.#pixelSize)
  }
}