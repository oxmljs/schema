class OxmlElement {
  static _Q = "";
  static _A = [];
  static _D = {};
  _a = {};
  _q;
  constructor(q) {
    this._q = q || this.constructor._Q;
  }
  getAttr(a) {
    return this._a[a];
  }
  delAttr(a) {
    delete this._a[a];
  }
  setAttr(a, v) {
    this._a[a] = v;
  }
  parseAttr(a, v) {
    this._a[a] = v;
  }
  _g(a) {
    return this._a[a];
  }
  _s(a, v) {
    this._a[a] = v;
  }
  get qualifiedName() {
    return this._q;
  }
  validate() {
    return true;
  }
}
export {
  OxmlElement
};
