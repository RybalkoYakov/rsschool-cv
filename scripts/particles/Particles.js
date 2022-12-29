import Particle from "./Particle.js";

export default class Particles {
  #particles
  #pixelSize = 1
  #ctx
  #canvasWidth
  #canvasHeight

  constructor(props) {
    const {pixelSize} = props;
    this.#pixelSize = pixelSize || this.#pixelSize;
    this.#init(props);
  }

  #addParticle (particle) {
    this.#particles.push(particle)
  }

  #init(props){
    this.#particles = [];
    this.#ctx = props.ctx;
    this.#canvasWidth = props.canvasWidth;
    this.#canvasHeight = props.canvasHeight;
    const {data} = props.ctx.getImageData(0,0, props.canvasWidth, props.canvasHeight)
    const {width} = props.ctx.getImageData(0,0, props.canvasWidth, props.canvasHeight)
    const {height} = props.ctx.getImageData(0,0, props.canvasWidth, props.canvasHeight)

    for (let y = 0; y < height; y += this.#pixelSize) {
      for (let x = 0; x < width;x += this.#pixelSize) {
        const index = (width * y + x) * 4
        const red = data[index]
        const green = data[index + 1]
        const blue = data[index + 2]
        const alpha = data[index + 3]

        const particle = new Particle({red,green,blue,alpha,x,y,ctx:props.ctx, pixelSize: this.#pixelSize});
        this.#addParticle(particle)
      }
    }
  }

  draw(){
    this.#ctx.clearRect(0,0, this.#canvasWidth, this.#canvasHeight)
    this.#particles.forEach(particle => particle.draw())
  }
}