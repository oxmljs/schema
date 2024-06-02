import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class SVGBlip extends OxmlLeafElement {
  static _Q = "asvg:svgBlip";
  static _A = ["r:embed", "r:link"];
  /** Embedded Picture Reference. Serialized as `r:embed` */
  get embed() {
    return this._g("r:embed");
  }
  set embed(v) {
    this._s("r:embed", v);
  }
  /** Linked Picture Reference. Serialized as `r:link` */
  get link() {
    return this._g("r:link");
  }
  set link(v) {
    this._s("r:link", v);
  }
}
function initOffice2019DrawingSVGNamespace() {
  SVGBlip._D = {
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue),
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue)
  };
  return {
    prefix: "asvg",
    xmlns: "http://schemas.microsoft.com/office/drawing/2016/SVG/main"
  };
}
export {
  SVGBlip,
  initOffice2019DrawingSVGNamespace
};
