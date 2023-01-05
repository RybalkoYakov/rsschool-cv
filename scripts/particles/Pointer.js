export default class Pointer {
  #x = null;
  #y = null;
  #rect = null;
  #targetObjectID = null;
  interactionRadius = 5000;

  constructor(targetObject) {
    this.#targetObjectID = targetObject || null
    this.#init()
  }

  #init() {
    window.addEventListener('pointermove', (e) => {
      if (e.target.id !== this.#targetObjectID) {
        this.#x = null;
        this.#y = null;
        this.#rect = null;
      }

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
}