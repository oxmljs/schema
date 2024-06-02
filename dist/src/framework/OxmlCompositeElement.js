import { OxmlElement } from "./OxmlElement";
class OxmlCompositeElement extends OxmlElement {
  static _C = {};
  addChild(c) {
    this._c.push(c);
  }
  _c = [];
  get children() {
    return this._c;
  }
  _f(type) {
    const children = this._c;
    const childrenLength = children.length;
    for (let i = 0; i < childrenLength; ++i) {
      const child = children[i];
      if (child instanceof type)
        return child;
    }
    return void 0;
  }
}
export {
  OxmlCompositeElement
};
