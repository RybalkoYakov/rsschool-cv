import Particle from "./Particle.js";

export default class Particles {
  #particles

  constructor(props) {
    this.#particles = []
    const {data} = props.ctx.getImageData(0,0, props.canvasWidth, props.canvasHeight)
    const {width} = props.ctx.getImageData(0,0, props.canvasWidth, props.canvasHeight)
    const {height} = props.ctx.getImageData(0,0, props.canvasWidth, props.canvasHeight)

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = (data.width * y + x) * 4
        const red = data[index]
        const green = data[index + 1]
        const blue = data[index + 2]
        const alpha = data[index + 3]

        const particle = new Particle({red,green,blue,alpha,x,y});
        this.#addParticle(particle)
      }
    }
  }

  #addParticle (particle) {
    this.#particles.push(particle)
  }


}