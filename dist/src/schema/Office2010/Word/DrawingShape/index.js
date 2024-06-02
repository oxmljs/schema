import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { TextVerticalOverflowValuesArray } from "../../../Drawing";
import { TextHorizontalOverflowValuesArray } from "../../../Drawing";
import { TextVerticalValuesArray } from "../../../Drawing";
import { TextWrappingValuesArray } from "../../../Drawing";
import { TextAnchoringTypeValuesArray } from "../../../Drawing";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { PresetTextWrap as APresetTextWrap } from "../../../Drawing";
import { NoAutoFit as ANoAutoFit } from "../../../Drawing";
import { NormalAutoFit as ANormalAutoFit } from "../../../Drawing";
import { ShapeAutoFit as AShapeAutoFit } from "../../../Drawing";
import { Scene3DType as AScene3DType } from "../../../Drawing";
import { Shape3DType as AShape3DType } from "../../../Drawing";
import { FlatText as AFlatText } from "../../../Drawing";
import { ExtensionList as AExtensionList } from "../../../Drawing";
import { TextBoxContent as WTextBoxContent } from "../../../Wordprocessing";
import { LineReference as ALineReference } from "../../../Drawing";
import { FillReference as AFillReference } from "../../../Drawing";
import { EffectReference as AEffectReference } from "../../../Drawing";
import { FontReference as AFontReference } from "../../../Drawing";
import { Transform2D as ATransform2D } from "../../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../../Drawing";
import { NoFill as ANoFill } from "../../../Drawing";
import { SolidFill as ASolidFill } from "../../../Drawing";
import { GradientFill as AGradientFill } from "../../../Drawing";
import { BlipFill as ABlipFill } from "../../../Drawing";
import { PatternFill as APatternFill } from "../../../Drawing";
import { GroupFill as AGroupFill } from "../../../Drawing";
import { Outline as AOutline } from "../../../Drawing";
import { EffectList as AEffectList } from "../../../Drawing";
import { EffectDag as AEffectDag } from "../../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../../Drawing";
import { ConnectionShapeLocks as AConnectionShapeLocks } from "../../../Drawing";
import { StartConnection as AStartConnection } from "../../../Drawing";
import { EndConnection as AEndConnection } from "../../../Drawing";
import { ShapeLocks as AShapeLocks } from "../../../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../../Drawing";
import { Extension as AExtension } from "../../../Drawing";
class TextBodyProperties extends OxmlCompositeElement {
  static _Q = "wps:bodyPr";
  static _A = [":rot", ":spcFirstLastPara", ":vertOverflow", ":horzOverflow", ":vert", ":wrap", ":lIns", ":tIns", ":rIns", ":bIns", ":numCol", ":spcCol", ":rtlCol", ":fromWordArt", ":anchor", ":anchorCtr", ":forceAA", ":upright", ":compatLnSpc"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
  get useParagraphSpacing() {
    return this._g(":spcFirstLastPara");
  }
  set useParagraphSpacing(v) {
    this._s(":spcFirstLastPara", v);
  }
  /** Text Vertical Overflow. Serialized as `:vertOverflow` */
  get verticalOverflow() {
    return this._g(":vertOverflow");
  }
  set verticalOverflow(v) {
    this._s(":vertOverflow", v);
  }
  /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
  get horizontalOverflow() {
    return this._g(":horzOverflow");
  }
  set horizontalOverflow(v) {
    this._s(":horzOverflow", v);
  }
  /** Vertical Text. Serialized as `:vert` */
  get vertical() {
    return this._g(":vert");
  }
  set vertical(v) {
    this._s(":vert", v);
  }
  /** Text Wrapping Type. Serialized as `:wrap` */
  get wrap() {
    return this._g(":wrap");
  }
  set wrap(v) {
    this._s(":wrap", v);
  }
  /** Left Inset. Serialized as `:lIns` */
  get leftInset() {
    return this._g(":lIns");
  }
  set leftInset(v) {
    this._s(":lIns", v);
  }
  /** Top Inset. Serialized as `:tIns` */
  get topInset() {
    return this._g(":tIns");
  }
  set topInset(v) {
    this._s(":tIns", v);
  }
  /** Right Inset. Serialized as `:rIns` */
  get rightInset() {
    return this._g(":rIns");
  }
  set rightInset(v) {
    this._s(":rIns", v);
  }
  /** Bottom Inset. Serialized as `:bIns` */
  get bottomInset() {
    return this._g(":bIns");
  }
  set bottomInset(v) {
    this._s(":bIns", v);
  }
  /** Number of Columns. Serialized as `:numCol` */
  get columnCount() {
    return this._g(":numCol");
  }
  set columnCount(v) {
    this._s(":numCol", v);
  }
  /** Space Between Columns. Serialized as `:spcCol` */
  get columnSpacing() {
    return this._g(":spcCol");
  }
  set columnSpacing(v) {
    this._s(":spcCol", v);
  }
  /** Columns Right-To-Left. Serialized as `:rtlCol` */
  get rightToLeftColumns() {
    return this._g(":rtlCol");
  }
  set rightToLeftColumns(v) {
    this._s(":rtlCol", v);
  }
  /** From WordArt. Serialized as `:fromWordArt` */
  get fromWordArt() {
    return this._g(":fromWordArt");
  }
  set fromWordArt(v) {
    this._s(":fromWordArt", v);
  }
  /** Anchor. Serialized as `:anchor` */
  get anchor() {
    return this._g(":anchor");
  }
  set anchor(v) {
    this._s(":anchor", v);
  }
  /** Anchor Center. Serialized as `:anchorCtr` */
  get anchorCenter() {
    return this._g(":anchorCtr");
  }
  set anchorCenter(v) {
    this._s(":anchorCtr", v);
  }
  /** Force Anti-Alias. Serialized as `:forceAA` */
  get forceAntiAlias() {
    return this._g(":forceAA");
  }
  set forceAntiAlias(v) {
    this._s(":forceAA", v);
  }
  /** Text Upright. Serialized as `:upright` */
  get upRight() {
    return this._g(":upright");
  }
  set upRight(v) {
    this._s(":upright", v);
  }
  /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
  get compatibleLineSpacing() {
    return this._g(":compatLnSpc");
  }
  set compatibleLineSpacing(v) {
    this._s(":compatLnSpc", v);
  }
  /** Preset Text Shape. */
  get presetTextWrap() {
    return this._f(APresetTextWrap);
  }
}
class LinkedTextBox extends OxmlCompositeElement {
  static _Q = "wps:linkedTxbx";
  static _A = [":id", ":seq"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** seq. Serialized as `:seq` */
  get sequence() {
    return this._g(":seq");
  }
  set sequence(v) {
    this._s(":seq", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class TextBoxInfo2 extends OxmlCompositeElement {
  static _Q = "wps:txbx";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns WTextBoxContent. */
  get textBoxContent() {
    return this._f(WTextBoxContent);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class ShapeStyle extends OxmlCompositeElement {
  static _Q = "wps:style";
  /** Returns ALineReference. */
  get lineReference() {
    return this._f(ALineReference);
  }
  /** Returns AFillReference. */
  get fillReference() {
    return this._f(AFillReference);
  }
  /** Returns AEffectReference. */
  get effectReference() {
    return this._f(AEffectReference);
  }
  /** Font Reference. */
  get fontReference() {
    return this._f(AFontReference);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "wps:spPr";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** 2D Transform for Individual Objects. */
  get transform2D() {
    return this._f(ATransform2D);
  }
}
class NonVisualConnectorProperties extends OxmlCompositeElement {
  static _Q = "wps:cNvCnPr";
  /** Connection Shape Locks. */
  get connectionShapeLocks() {
    return this._f(AConnectionShapeLocks);
  }
  /** Connection Start. */
  get startConnection() {
    return this._f(AStartConnection);
  }
  /** Connection End. */
  get endConnection() {
    return this._f(AEndConnection);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class NonVisualDrawingShapeProperties extends OxmlCompositeElement {
  static _Q = "wps:cNvSpPr";
  static _A = [":txBox"];
  /** Text Box. Serialized as `:txBox` */
  get textBox() {
    return this._g(":txBox");
  }
  set textBox(v) {
    this._s(":txBox", v);
  }
  /** Shape Locks. */
  get shapeLocks() {
    return this._f(AShapeLocks);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "wps:cNvPr";
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
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "wps:extLst";
}
class WordprocessingShape extends OxmlCompositeElement {
  static _Q = "wps:wsp";
  static _A = [":normalEastAsianFlow"];
  /** normalEastAsianFlow. Serialized as `:normalEastAsianFlow` */
  get normalEastAsianFlow() {
    return this._g(":normalEastAsianFlow");
  }
  set normalEastAsianFlow(v) {
    this._s(":normalEastAsianFlow", v);
  }
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
}
function initOffice2010WordDrawingShapeNamespace() {
  TextBodyProperties._C = {
    "a:prstTxWarp": APresetTextWrap,
    "a:noAutofit": ANoAutoFit,
    "a:normAutofit": ANormalAutoFit,
    "a:spAutoFit": AShapeAutoFit,
    "a:scene3d": AScene3DType,
    "a:sp3d": AShape3DType,
    "a:flatTx": AFlatText,
    "a:extLst": AExtensionList
  };
  TextBodyProperties._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":spcFirstLastPara": new OxmlAttr(":spcFirstLastPara", OxmlType.BooleanValue),
    ":vertOverflow": new OxmlAttr(":vertOverflow", OxmlType.EnumValue, TextVerticalOverflowValuesArray),
    ":horzOverflow": new OxmlAttr(":horzOverflow", OxmlType.EnumValue, TextHorizontalOverflowValuesArray),
    ":vert": new OxmlAttr(":vert", OxmlType.EnumValue, TextVerticalValuesArray),
    ":wrap": new OxmlAttr(":wrap", OxmlType.EnumValue, TextWrappingValuesArray),
    ":lIns": new OxmlAttr(":lIns", OxmlType.Int32Value),
    ":tIns": new OxmlAttr(":tIns", OxmlType.Int32Value),
    ":rIns": new OxmlAttr(":rIns", OxmlType.Int32Value),
    ":bIns": new OxmlAttr(":bIns", OxmlType.Int32Value),
    ":numCol": new OxmlAttr(":numCol", OxmlType.Int32Value),
    ":spcCol": new OxmlAttr(":spcCol", OxmlType.Int32Value),
    ":rtlCol": new OxmlAttr(":rtlCol", OxmlType.BooleanValue),
    ":fromWordArt": new OxmlAttr(":fromWordArt", OxmlType.BooleanValue),
    ":anchor": new OxmlAttr(":anchor", OxmlType.EnumValue, TextAnchoringTypeValuesArray),
    ":anchorCtr": new OxmlAttr(":anchorCtr", OxmlType.BooleanValue),
    ":forceAA": new OxmlAttr(":forceAA", OxmlType.BooleanValue),
    ":upright": new OxmlAttr(":upright", OxmlType.BooleanValue),
    ":compatLnSpc": new OxmlAttr(":compatLnSpc", OxmlType.BooleanValue)
  };
  LinkedTextBox._C = {
    "wps:extLst": OfficeArtExtensionList
  };
  LinkedTextBox._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt16Value),
    ":seq": new OxmlAttr(":seq", OxmlType.UInt16Value)
  };
  TextBoxInfo2._C = {
    "w:txbxContent": WTextBoxContent,
    "wps:extLst": OfficeArtExtensionList
  };
  TextBoxInfo2._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt16Value)
  };
  ShapeStyle._C = {
    "a:lnRef": ALineReference,
    "a:fillRef": AFillReference,
    "a:effectRef": AEffectReference,
    "a:fontRef": AFontReference
  };
  ShapeProperties._C = {
    "a:xfrm": ATransform2D,
    "a:custGeom": ACustomGeometry,
    "a:prstGeom": APresetGeometry,
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill,
    "a:ln": AOutline,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag,
    "a:scene3d": AScene3DType,
    "a:sp3d": AShape3DType,
    "a:extLst": AShapePropertiesExtensionList
  };
  ShapeProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  NonVisualConnectorProperties._C = {
    "a:cxnSpLocks": AConnectionShapeLocks,
    "a:stCxn": AStartConnection,
    "a:endCxn": AEndConnection,
    "a:extLst": AExtensionList
  };
  NonVisualDrawingShapeProperties._C = {
    "a:spLocks": AShapeLocks,
    "a:extLst": AExtensionList
  };
  NonVisualDrawingShapeProperties._D = {
    ":txBox": new OxmlAttr(":txBox", OxmlType.BooleanValue)
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
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  WordprocessingShape._C = {
    "wps:cNvPr": NonVisualDrawingProperties,
    "wps:cNvSpPr": NonVisualDrawingShapeProperties,
    "wps:cNvCnPr": NonVisualConnectorProperties,
    "wps:spPr": ShapeProperties,
    "wps:style": ShapeStyle,
    "wps:extLst": OfficeArtExtensionList,
    "wps:txbx": TextBoxInfo2,
    "wps:linkedTxbx": LinkedTextBox,
    "wps:bodyPr": TextBodyProperties
  };
  WordprocessingShape._D = {
    ":normalEastAsianFlow": new OxmlAttr(":normalEastAsianFlow", OxmlType.BooleanValue)
  };
  return {
    prefix: "wps",
    xmlns: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
  };
}
export {
  LinkedTextBox,
  NonVisualConnectorProperties,
  NonVisualDrawingProperties,
  NonVisualDrawingShapeProperties,
  OfficeArtExtensionList,
  ShapeProperties,
  ShapeStyle,
  TextBodyProperties,
  TextBoxInfo2,
  WordprocessingShape,
  initOffice2010WordDrawingShapeNamespace
};
