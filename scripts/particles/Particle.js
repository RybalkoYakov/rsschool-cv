export default class Particle {
  #red
  #green
  #blue
  #alpha
  #x
  #y

  constructor(props) {
    this.#red = props.red || 0;
    this.#green = props.green || 0;
    this.#blue = props.blue || 0;
    this.#alpha = props.alpha || 0;
    this.#x = props.x || 0;
    this.#y = props.y || 0;
  }
}