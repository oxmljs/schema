import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { DirectionValuesArray } from "../../Presentation";
import { Extension as PExtension } from "../../Presentation";
import { RgbColorModelPercentage as ARgbColorModelPercentage } from "../../Drawing";
import { RgbColorModelHex as ARgbColorModelHex } from "../../Drawing";
import { HslColor as AHslColor } from "../../Drawing";
import { SystemColor as ASystemColor } from "../../Drawing";
import { SchemeColor as ASchemeColor } from "../../Drawing";
import { PresetColor as APresetColor } from "../../Drawing";
class ExtendedGuide extends OxmlCompositeElement {
  static _Q = "p15:guide";
  static _A = [":id", ":name", ":orient", ":pos", ":userDrawn"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** orient. Serialized as `:orient` */
  get orientation() {
    return this._g(":orient");
  }
  set orientation(v) {
    this._s(":orient", v);
  }
  /** pos. Serialized as `:pos` */
  get position() {
    return this._g(":pos");
  }
  set position(v) {
    this._s(":pos", v);
  }
  /** userDrawn. Serialized as `:userDrawn` */
  get isUserDrawn() {
    return this._g(":userDrawn");
  }
  set isUserDrawn(v) {
    this._s(":userDrawn", v);
  }
  /** Returns ColorType. */
  get colorType() {
    return this._f(ColorType);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "p15:extLst";
}
class ColorType extends OxmlCompositeElement {
  static _Q = "p15:clr";
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(ARgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(ARgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(AHslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(ASystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(ASchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(APresetColor);
  }
}
class ParentCommentIdentifier extends OxmlLeafElement {
  static _Q = "p15:parentCm";
  static _A = [":authorId", ":idx"];
  /** authorId. Serialized as `:authorId` */
  get authorId() {
    return this._g(":authorId");
  }
  set authorId(v) {
    this._s(":authorId", v);
  }
  /** idx. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
}
class ChartTrackingReferenceBased extends OxmlLeafElement {
  static _Q = "p15:chartTrackingRefBased";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ExtendedGuideList extends OxmlCompositeElement {
}
class NotesGuideList extends ExtendedGuideList {
  static _Q = "p15:notesGuideLst";
}
class SlideGuideList extends ExtendedGuideList {
  static _Q = "p15:sldGuideLst";
}
class ThreadingInfo extends OxmlCompositeElement {
  static _Q = "p15:threadingInfo";
  static _A = [":timeZoneBias"];
  /** timeZoneBias. Serialized as `:timeZoneBias` */
  get timeZoneBias() {
    return this._g(":timeZoneBias");
  }
  set timeZoneBias(v) {
    this._s(":timeZoneBias", v);
  }
  /** Returns ParentCommentIdentifier. */
  get parentCommentIdentifier() {
    return this._f(ParentCommentIdentifier);
  }
}
class PresenceInfo extends OxmlLeafElement {
  static _Q = "p15:presenceInfo";
  static _A = [":userId", ":providerId"];
  /** userId. Serialized as `:userId` */
  get userId() {
    return this._g(":userId");
  }
  set userId(v) {
    this._s(":userId", v);
  }
  /** providerId. Serialized as `:providerId` */
  get providerId() {
    return this._g(":providerId");
  }
  set providerId(v) {
    this._s(":providerId", v);
  }
}
class PresetTransition extends OxmlLeafElement {
  static _Q = "p15:prstTrans";
  static _A = [":prst", ":invX", ":invY"];
  /** prst. Serialized as `:prst` */
  get preset() {
    return this._g(":prst");
  }
  set preset(v) {
    this._s(":prst", v);
  }
  /** invX. Serialized as `:invX` */
  get invX() {
    return this._g(":invX");
  }
  set invX(v) {
    this._s(":invX", v);
  }
  /** invY. Serialized as `:invY` */
  get invY() {
    return this._g(":invY");
  }
  set invY(v) {
    this._s(":invY", v);
  }
}
function initOffice2013PowerPointNamespace() {
  ExtendedGuide._C = {
    "p15:clr": ColorType,
    "p15:extLst": ExtensionList
  };
  ExtendedGuide._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":orient": new OxmlAttr(":orient", OxmlType.EnumValue, DirectionValuesArray),
    ":pos": new OxmlAttr(":pos", OxmlType.Int32Value),
    ":userDrawn": new OxmlAttr(":userDrawn", OxmlType.BooleanValue)
  };
  ExtensionList._C = {
    "p:ext": PExtension
  };
  ColorType._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  ParentCommentIdentifier._D = {
    ":authorId": new OxmlAttr(":authorId", OxmlType.UInt32Value),
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  ChartTrackingReferenceBased._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  ExtendedGuideList._C = {
    "p15:guide": ExtendedGuide,
    "p15:extLst": ExtensionList
  };
  NotesGuideList._C = {
    "p15:guide": ExtendedGuide,
    "p15:extLst": ExtensionList
  };
  SlideGuideList._C = {
    "p15:guide": ExtendedGuide,
    "p15:extLst": ExtensionList
  };
  ThreadingInfo._C = {
    "p15:parentCm": ParentCommentIdentifier
  };
  ThreadingInfo._D = {
    ":timeZoneBias": new OxmlAttr(":timeZoneBias", OxmlType.Int32Value)
  };
  PresenceInfo._D = {
    ":userId": new OxmlAttr(":userId", OxmlType.StringValue),
    ":providerId": new OxmlAttr(":providerId", OxmlType.StringValue)
  };
  PresetTransition._D = {
    ":prst": new OxmlAttr(":prst", OxmlType.StringValue),
    ":invX": new OxmlAttr(":invX", OxmlType.BooleanValue),
    ":invY": new OxmlAttr(":invY", OxmlType.BooleanValue)
  };
  return {
    prefix: "p15",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2012/main"
  };
}
export {
  ChartTrackingReferenceBased,
  ColorType,
  ExtendedGuide,
  ExtendedGuideList,
  ExtensionList,
  NotesGuideList,
  ParentCommentIdentifier,
  PresenceInfo,
  PresetTransition,
  SlideGuideList,
  ThreadingInfo,
  initOffice2013PowerPointNamespace
};
