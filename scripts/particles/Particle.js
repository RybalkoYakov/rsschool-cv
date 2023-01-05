export default class Particle {
  // Link to particle owner
  #particlesObj = null


  // Data for color and pixel position
  #pixelInitialColor = null
  #red = null
  #green = null
  #blue = null
  #alpha = null
  #x = null
  #y = null
  #originX = null
  #originY = null
  #ctx = null
  #pixelSize = null

  // Info bind with pointer
  #dx = null
  #dy = null
  #squareDistance = null

  // Data for effect
  #force = null
  #vx = null
  #vy  = null
  #angle = null
  #friction = .8
  #ease = .1

  constructor(props) {
    this.#red = props.red || 0;
    this.#green = props.green || 0;
    this.#blue = props.blue || 0;
    this.#alpha = props.alpha || 0;
    this.#x = props.x || 0;
    this.#y = props.y || 0;
    this.#originX = Math.floor(this.#x)
    this.#originY = Math.floor(this.#y)
    this.#ctx = props.ctx;
    this.#pixelSize = props.pixelSize;
    this.#particlesObj = props.particlesObj;

    this.#pixelInitialColor = `rgba(${this.#red}, ${this.#green}, ${this.#blue}, ${this.#alpha/255})`;
  }

  draw(){
    this.#ctx.fillStyle = this.#pixelInitialColor;
    this.#ctx.fillRect(this.#x, this.#y, this.#pixelSize, this.#pixelSize);
  }

  update(){
    this.#dx = this.#particlesObj.pointer.x - this.#x;
    this.#dy = this.#particlesObj.pointer.y - this.#y;
    this.#squareDistance = this.#dx * this.#dx + this.#dy * this.#dy;
    this.#force = this.#particlesObj.pointer.interactionRadius / this.#squareDistance;

    if (this.#squareDistance <= this.#particlesObj.pointer.interactionRadius) {
      this.#angle = Math.atan2(this.#dy, this.#dx);
      this.#vx += this.#force * Math.cos(this.#angle);
      this.#vy += this.#force * Math.sin(this.#angle);
    }

    this.#x += (this.#vx *= this.#friction) + (this.#originX - this.#x) * this.#ease;
    this.#y += (this.#vy *= this.#friction) + (this.#originY - this.#y) * this.#ease;
  }
}