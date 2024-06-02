import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as AExtension } from "../../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../../Drawing";
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "ask:extLst";
}
class LineSketchSeed extends OxmlLeafTextElement {
  static _Q = "ask:seed";
}
class LineSketchTypeProperties extends OxmlCompositeElement {
  static _Q = "ask:type";
  /** Returns LineSketchNoneEmpty. */
  get lineSketchNoneEmpty() {
    return this._f(LineSketchNoneEmpty);
  }
  /** Returns LineSketchCurvedEmpty. */
  get lineSketchCurvedEmpty() {
    return this._f(LineSketchCurvedEmpty);
  }
  /** Returns LineSketchFreehandEmpty. */
  get lineSketchFreehandEmpty() {
    return this._f(LineSketchFreehandEmpty);
  }
  /** Returns LineSketchScribbleEmpty. */
  get lineSketchScribbleEmpty() {
    return this._f(LineSketchScribbleEmpty);
  }
}
class LineSketchStyleProperties extends OxmlCompositeElement {
  static _Q = "ask:lineSketchStyleProps";
  static _A = [":sd"];
  /** sd. Serialized as `:sd` */
  get sd() {
    return this._g(":sd");
  }
  set sd(v) {
    this._s(":sd", v);
  }
}
class OpenXmlEmptyElement extends OxmlLeafElement {
}
class LineSketchScribbleEmpty extends OpenXmlEmptyElement {
  static _Q = "ask:lineSketchScribble";
}
class LineSketchFreehandEmpty extends OpenXmlEmptyElement {
  static _Q = "ask:lineSketchFreehand";
}
class LineSketchCurvedEmpty extends OpenXmlEmptyElement {
  static _Q = "ask:lineSketchCurved";
}
class LineSketchNoneEmpty extends OpenXmlEmptyElement {
  static _Q = "ask:lineSketchNone";
}
function initOffice2021DrawingSketchyShapesNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  LineSketchTypeProperties._C = {
    "ask:lineSketchNone": LineSketchNoneEmpty,
    "ask:lineSketchCurved": LineSketchCurvedEmpty,
    "ask:lineSketchFreehand": LineSketchFreehandEmpty,
    "ask:lineSketchScribble": LineSketchScribbleEmpty
  };
  LineSketchStyleProperties._C = {
    "a:custGeom": ACustomGeometry,
    "a:prstGeom": APresetGeometry,
    "ask:type": LineSketchTypeProperties,
    "ask:seed": LineSketchSeed,
    "ask:extLst": OfficeArtExtensionList
  };
  LineSketchStyleProperties._D = {
    ":sd": new OxmlAttr(":sd", OxmlType.UInt32Value)
  };
  return {
    prefix: "ask",
    xmlns: "http://schemas.microsoft.com/office/drawing/2018/sketchyshapes"
  };
}
export {
  LineSketchCurvedEmpty,
  LineSketchFreehandEmpty,
  LineSketchNoneEmpty,
  LineSketchScribbleEmpty,
  LineSketchSeed,
  LineSketchStyleProperties,
  LineSketchTypeProperties,
  OfficeArtExtensionList,
  OpenXmlEmptyElement,
  initOffice2021DrawingSketchyShapesNamespace
};
