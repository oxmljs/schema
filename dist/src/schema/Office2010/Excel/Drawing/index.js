import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { Extension as AExtension } from "../../../Drawing";
import { Offset as AOffset } from "../../../Drawing";
import { Extents as AExtents } from "../../../Drawing";
import { ContentPartLocks as A14ContentPartLocks } from "../../../Office2010/Drawing";
import { OfficeArtExtensionList as A14OfficeArtExtensionList } from "../../../Office2010/Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../../Drawing";
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "xdr14:extLst";
}
class Transform2D extends OxmlCompositeElement {
  static _Q = "xdr14:xfrm";
  static _A = [":rot", ":flipH", ":flipV"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Horizontal Flip. Serialized as `:flipH` */
  get horizontalFlip() {
    return this._g(":flipH");
  }
  set horizontalFlip(v) {
    this._s(":flipH", v);
  }
  /** Vertical Flip. Serialized as `:flipV` */
  get verticalFlip() {
    return this._g(":flipV");
  }
  set verticalFlip(v) {
    this._s(":flipV", v);
  }
  /** Offset. */
  get offset() {
    return this._f(AOffset);
  }
  /** Extents. */
  get extents() {
    return this._f(AExtents);
  }
}
class ApplicationNonVisualDrawingProperties extends OxmlLeafElement {
  static _Q = "xdr14:nvPr";
  static _A = [":macro", ":fPublished"];
  /** macro. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** fPublished. Serialized as `:fPublished` */
  get publishedFlag() {
    return this._g(":fPublished");
  }
  set publishedFlag(v) {
    this._s(":fPublished", v);
  }
}
class ExcelNonVisualContentPartShapeProperties extends OxmlCompositeElement {
  static _Q = "xdr14:nvContentPartPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Returns NonVisualInkContentPartProperties. */
  get nonVisualInkContentPartProperties() {
    return this._f(NonVisualInkContentPartProperties);
  }
}
class NonVisualInkContentPartProperties extends OxmlCompositeElement {
  static _Q = "xdr14:cNvContentPartPr";
  static _A = [":isComment"];
  /** isComment. Serialized as `:isComment` */
  get isComment() {
    return this._g(":isComment");
  }
  set isComment(v) {
    this._s(":isComment", v);
  }
  /** Returns A14ContentPartLocks. */
  get contentPartLocks() {
    return this._f(A14ContentPartLocks);
  }
  /** Returns A14OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(A14OfficeArtExtensionList);
  }
}
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "xdr14:cNvPr";
  static _A = [":id", ":name", ":descr", ":hidden", ":title"];
  /** Application defined unique identifier.. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Description of the drawing element.. Serialized as `:descr` */
  get description() {
    return this._g(":descr");
  }
  set description(v) {
    this._s(":descr", v);
  }
  /** Flag determining to show or hide this element.. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Hyperlink associated with clicking or selecting the element.. */
  get hyperlinkOnClick() {
    return this._f(AHyperlinkOnClick);
  }
  /** Hyperlink associated with hovering over the element.. */
  get hyperlinkOnHover() {
    return this._f(AHyperlinkOnHover);
  }
  /** Future extension. */
  get nonVisualDrawingPropertiesExtensionList() {
    return this._f(ANonVisualDrawingPropertiesExtensionList);
  }
}
class ContentPart extends OxmlCompositeElement {
  static _Q = "xdr14:contentPart";
  static _A = ["r:id", ":bwMode"];
  /** id. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** bwMode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** Returns ExcelNonVisualContentPartShapeProperties. */
  get excelNonVisualContentPartShapeProperties() {
    return this._f(ExcelNonVisualContentPartShapeProperties);
  }
  /** Returns ApplicationNonVisualDrawingProperties. */
  get applicationNonVisualDrawingProperties() {
    return this._f(ApplicationNonVisualDrawingProperties);
  }
  /** Returns Transform2D. */
  get transform2D() {
    return this._f(Transform2D);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
function initOffice2010ExcelDrawingNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  Transform2D._C = {
    "a:off": AOffset,
    "a:ext": AExtents
  };
  Transform2D._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  ApplicationNonVisualDrawingProperties._D = {
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":fPublished": new OxmlAttr(":fPublished", OxmlType.BooleanValue)
  };
  ExcelNonVisualContentPartShapeProperties._C = {
    "xdr14:cNvPr": NonVisualDrawingProperties,
    "xdr14:cNvContentPartPr": NonVisualInkContentPartProperties
  };
  NonVisualInkContentPartProperties._C = {
    "a14:cpLocks": A14ContentPartLocks,
    "a14:extLst": A14OfficeArtExtensionList
  };
  NonVisualInkContentPartProperties._D = {
    ":isComment": new OxmlAttr(":isComment", OxmlType.BooleanValue)
  };
  NonVisualDrawingProperties._C = {
    "a:hlinkClick": AHyperlinkOnClick,
    "a:hlinkHover": AHyperlinkOnHover,
    "a:extLst": ANonVisualDrawingPropertiesExtensionList
  };
  NonVisualDrawingProperties._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":descr": new OxmlAttr(":descr", OxmlType.StringValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue)
  };
  ContentPart._C = {
    "xdr14:nvContentPartPr": ExcelNonVisualContentPartShapeProperties,
    "xdr14:nvPr": ApplicationNonVisualDrawingProperties,
    "xdr14:xfrm": Transform2D,
    "xdr14:extLst": OfficeArtExtensionList
  };
  ContentPart._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  return {
    prefix: "xdr14",
    xmlns: "http://schemas.microsoft.com/office/excel/2010/spreadsheetDrawing"
  };
}
export {
  ApplicationNonVisualDrawingProperties,
  ContentPart,
  ExcelNonVisualContentPartShapeProperties,
  NonVisualDrawingProperties,
  NonVisualInkContentPartProperties,
  OfficeArtExtensionList,
  Transform2D,
  initOffice2010ExcelDrawingNamespace
};
