import Particles from "./Particles.js";

export default class HTMLParticlesBundler {
  #canvas
  #image
  #canvasProps
  #ctx
  particles

  constructor(canvas, image, canvasProps) {
    this.#canvas = canvas;
    this.#image = image;
    this.#canvasProps = canvasProps;
    this.#init();
  }

  #init(){
    this.#ctx = this.#canvas.getContext('2d');
    this.#canvas.width = this.#canvasProps.width;
    this.#canvas.height = this.#canvasProps.height;
    this.#ctx.drawImage(this.#image, 0, 0, this.#canvasProps.width, this.#canvasProps.height);

    this.particles  = new Particles({
      ctx: this.#ctx,
      canvasWidth: this?.#canvasProps?.width || 250,
      canvasHeight: this?.#canvasProps?.height || 250,
      pixelSize: this?.#canvasProps?.pixelSize || 1
    });
  }
}