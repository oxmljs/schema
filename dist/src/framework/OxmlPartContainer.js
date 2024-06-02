import { oxmlParse } from "./OxmlParser";
import { Relationship, Relationships } from "./schema/Relationships";
class OxmlPartContainer {
  constructor(pkg) {
    this.pkg = pkg;
    if (!pkg) {
      this.pkg = this;
    }
  }
  static registry = {};
  uri = "";
  children = [];
  relationships = [];
  _pkg = false;
  addPart(type) {
    return this._a(type);
  }
  _f(rel) {
    const children = this.children;
    const childrenLength = children.length;
    for (let i = 0; i < childrenLength; ++i) {
      const child = children[i];
      const ctr = child.constructor;
      if (ctr._N === rel)
        return child;
    }
    return void 0;
  }
  _m(rel) {
    const children = this.children;
    const childrenLength = children.length;
    const result = [];
    for (let i = 0; i < childrenLength; ++i) {
      const child = children[i];
      const ctr = child.constructor;
      if (ctr._N === rel)
        result.push(child);
    }
    return result;
  }
  _a(type) {
    const part = new type(this.pkg);
    this.children.push(part);
    return part;
  }
  async load() {
    if (!this.uri && this.pkg !== this)
      return;
    const uriParts = this.uri.split("/");
    const fileName = uriParts.pop() || "";
    uriParts.push("_rels");
    uriParts.push(fileName + ".rels");
    const relsUri = uriParts.join("/");
    const xml = await this.pkg.getContents(relsUri);
    if (!xml)
      return;
    const relationships = oxmlParse(xml, Relationships);
    await Promise.all(relationships.children.map((rel) => {
      if (!(rel instanceof Relationship))
        return;
      this.relationships.push(rel);
      if (!rel.type || !rel.target)
        return;
      const parts = this.uri.split("/");
      parts.pop();
      parts.push(rel.target);
      const uri = parts.join("/");
      const ct = this.pkg.getContentType(uri);
      if (!ct)
        return;
      const partConstructor = OxmlPartContainer.registry[rel.type + "|" + ct] || OxmlPartContainer.registry[rel.type + "|*"];
      if (!partConstructor)
        return;
      const part = this._a(partConstructor);
      part.uri = uri;
      return part.load();
    }));
  }
}
export {
  OxmlPartContainer
};
