export default class Pointer {
  #x = null;
  #y = null;
  #rect = null;
  #targetObjectID = null;

  constructor(targetObject) {
    this.#targetObjectID = targetObject || null
    this.#init()
  }

  #init() {
    window.addEventListener('pointermove', (e) => {
      if (e.target.id !== this.#targetObjectID) return

      this.#rect = e.target.getBoundingClientRect();
      this.#x = Math.floor(e.clientX - this.#rect.left);
      this.#y = Math.floor(e.clientY - this.#rect.top);
    })
  }

  get rect() {
    return this.#rect;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  getCoordinates() {
    return {
      x: this.#x,
      y: this.#y
    }
  }
}