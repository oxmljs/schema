import { oxmlParse } from "./OxmlParser";
import { OxmlPartContainer } from "./OxmlPartContainer";
class OxmlPart extends OxmlPartContainer {
  static _R = "";
  static _N = "";
  static _C = "";
  static _E;
  _r;
  async load() {
    await super.load();
    const rootElementTag = this.constructor._E;
    if (!rootElementTag)
      return;
    const xml = await this.pkg.getContents(this.uri, "string");
    if (!xml)
      throw new Error("content_miss");
    this._r = oxmlParse(xml, rootElementTag);
  }
}
export {
  OxmlPart
};
