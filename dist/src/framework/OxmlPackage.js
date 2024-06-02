import JSZip from "jszip";
import { oxmlParse } from "./OxmlParser";
import { OxmlPartContainer } from "./OxmlPartContainer";
import { Default, Override, Types } from "./schema/ContentTypes";
class OxmlPackage extends OxmlPartContainer {
  static _S = false;
  static _P = false;
  static _E = "";
  static packages = {};
  _pkg = true;
  getContents(uri, type = "string") {
    const file = this.zip.files[uri];
    if (!file)
      return void 0;
    return file.async(type);
  }
  zip = new JSZip();
  init() {
    return new Promise(async (res, rej) => {
      try {
        const start = Date.now();
        if (!OxmlPackage._S) {
          const { oxmlInitPackaging } = await import("../packaging/_init");
          oxmlInitPackaging();
          OxmlPackage._S = true;
        }
        if (!OxmlPackage._P) {
          const { oxmlInitSchema } = await import("../schema/_init");
          oxmlInitSchema();
          OxmlPackage._P = true;
        }
        const end = Date.now();
        console.log(`Init time: ${end - start}ms`);
        res(null);
      } catch (e) {
        rej(e);
      }
    });
  }
  async open(source) {
    await this.init();
    const start = Date.now();
    await this.zip.loadAsync(source);
    await this.load();
    const end = Date.now();
    console.log(`Load time: ${end - start}ms`);
  }
  async create() {
    await this.init();
  }
  getContentType(path) {
    const { overrides } = this;
    const ct = overrides[path];
    if (ct)
      return ct;
    const { defaults } = this;
    const ext = path.split(".").pop() || "";
    return defaults[ext] || "";
  }
  defaults = {};
  overrides = {};
  async load() {
    const { defaults, overrides } = this;
    const xml = await this.getContents("[Content_Types].xml");
    const types = oxmlParse(xml, Types);
    const children = types.children;
    const childrenLength = children.length;
    for (let i = 0; i < childrenLength; ++i) {
      const type = children[i];
      if (type instanceof Override) {
        const ct = type.contentType;
        const pn = type.partName;
        if (ct && pn)
          overrides[pn.substring(1)] = ct;
      } else if (type instanceof Default) {
        const ct = type.contentType;
        const ex = type.extension;
        if (ct && ex)
          defaults[ex] = ct;
      }
    }
    await super.load();
  }
}
export {
  OxmlPackage
};
