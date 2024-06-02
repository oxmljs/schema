import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { ThemeColorValuesArray } from "../../Wordprocessing";
var SdtAppearance = /* @__PURE__ */ ((SdtAppearance2) => {
  SdtAppearance2["BoundingBox"] = "boundingBox";
  SdtAppearance2["Tags"] = "tags";
  SdtAppearance2["Hidden"] = "hidden";
  return SdtAppearance2;
})(SdtAppearance || {});
const SdtAppearanceArray = [
  "boundingBox" /* BoundingBox */,
  "tags" /* Tags */,
  "hidden" /* Hidden */
];
class SectionTitle extends OxmlLeafElement {
  static _Q = "w15:sectionTitle";
  static _A = ["w:val"];
  /** String Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class PresenceInfo extends OxmlLeafElement {
  static _Q = "w15:presenceInfo";
  static _A = ["w15:providerId", "w15:userId"];
  /** providerId. Serialized as `w15:providerId` */
  get providerId() {
    return this._g("w15:providerId");
  }
  set providerId(v) {
    this._s("w15:providerId", v);
  }
  /** userId. Serialized as `w15:userId` */
  get userId() {
    return this._g("w15:userId");
  }
  set userId(v) {
    this._s("w15:userId", v);
  }
}
class Person extends OxmlCompositeElement {
  static _Q = "w15:person";
  static _A = ["w15:author"];
  /** author. Serialized as `w15:author` */
  get author() {
    return this._g("w15:author");
  }
  set author(v) {
    this._s("w15:author", v);
  }
  /** Returns PresenceInfo. */
  get presenceInfo() {
    return this._f(PresenceInfo);
  }
}
class CommentEx extends OxmlLeafElement {
  static _Q = "w15:commentEx";
  static _A = ["w15:paraId", "w15:paraIdParent", "w15:done"];
  /** paraId. Serialized as `w15:paraId` */
  get paraId() {
    return this._g("w15:paraId");
  }
  set paraId(v) {
    this._s("w15:paraId", v);
  }
  /** paraIdParent. Serialized as `w15:paraIdParent` */
  get paraIdParent() {
    return this._g("w15:paraIdParent");
  }
  set paraIdParent(v) {
    this._s("w15:paraIdParent", v);
  }
  /** done. Serialized as `w15:done` */
  get done() {
    return this._g("w15:done");
  }
  set done(v) {
    this._s("w15:done", v);
  }
}
class FootnoteColumns extends OxmlLeafElement {
  static _Q = "w15:footnoteColumns";
  static _A = ["w:val"];
  /** Decimal Number Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class PersistentDocumentId extends OxmlLeafElement {
  static _Q = "w15:docId";
  static _A = ["w15:val"];
  /** val. Serialized as `w15:val` */
  get val() {
    return this._g("w15:val");
  }
  set val(v) {
    this._s("w15:val", v);
  }
}
class OnOffType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** On/Off Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class DoNotAllowInsertDeleteSection extends OnOffType {
  static _Q = "w15:doNotAllowInsertDeleteSection";
}
class WebExtensionCreated extends OnOffType {
  static _Q = "w15:webExtensionCreated";
}
class WebExtensionLinked extends OnOffType {
  static _Q = "w15:webExtensionLinked";
}
class DefaultCollapsed extends OnOffType {
  static _Q = "w15:collapsed";
}
class ChartTrackingRefBased extends OnOffType {
  static _Q = "w15:chartTrackingRefBased";
}
class SdtRepeatedSectionItem extends OxmlLeafElement {
  static _Q = "w15:repeatingSectionItem";
}
class SdtRepeatedSection extends OxmlCompositeElement {
  static _Q = "w15:repeatingSection";
  /** Returns SectionTitle. */
  get sectionTitle() {
    return this._f(SectionTitle);
  }
  /** Returns DoNotAllowInsertDeleteSection. */
  get doNotAllowInsertDeleteSection() {
    return this._f(DoNotAllowInsertDeleteSection);
  }
}
class People extends OxmlPartRootElement {
  static _Q = "w15:people";
}
class CommentsEx extends OxmlPartRootElement {
  static _Q = "w15:commentsEx";
}
class Appearance extends OxmlLeafElement {
  static _Q = "w15:appearance";
  static _A = ["w15:val"];
  /** val. Serialized as `w15:val` */
  get val() {
    return this._g("w15:val");
  }
  set val(v) {
    this._s("w15:val", v);
  }
}
class DataBinding extends OxmlLeafElement {
  static _Q = "w15:dataBinding";
  static _A = ["w:prefixMappings", "w:xpath", "w:storeItemID"];
  /** XML Namespace Prefix Mappings. Serialized as `w:prefixMappings` */
  get prefixMappings() {
    return this._g("w:prefixMappings");
  }
  set prefixMappings(v) {
    this._s("w:prefixMappings", v);
  }
  /** XPath. Serialized as `w:xpath` */
  get xPath() {
    return this._g("w:xpath");
  }
  set xPath(v) {
    this._s("w:xpath", v);
  }
  /** Custom XML Data Storage ID. Serialized as `w:storeItemID` */
  get storeItemId() {
    return this._g("w:storeItemID");
  }
  set storeItemId(v) {
    this._s("w:storeItemID", v);
  }
}
class Color extends OxmlLeafElement {
  static _Q = "w15:color";
  static _A = ["w:val", "w:themeColor", "w:themeTint", "w:themeShade"];
  /** Run Content Color. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Run Content Theme Color. Serialized as `w:themeColor` */
  get themeColor() {
    return this._g("w:themeColor");
  }
  set themeColor(v) {
    this._s("w:themeColor", v);
  }
  /** Run Content Theme Color Tint. Serialized as `w:themeTint` */
  get themeTint() {
    return this._g("w:themeTint");
  }
  set themeTint(v) {
    this._s("w:themeTint", v);
  }
  /** Run Content Theme Color Shade. Serialized as `w:themeShade` */
  get themeShade() {
    return this._g("w:themeShade");
  }
  set themeShade(v) {
    this._s("w:themeShade", v);
  }
}
function initOffice2013WordNamespace() {
  SectionTitle._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  PresenceInfo._D = {
    "w15:providerId": new OxmlAttr("w15:providerId", OxmlType.StringValue),
    "w15:userId": new OxmlAttr("w15:userId", OxmlType.StringValue)
  };
  Person._C = {
    "w15:presenceInfo": PresenceInfo
  };
  Person._D = {
    "w15:author": new OxmlAttr("w15:author", OxmlType.StringValue)
  };
  CommentEx._D = {
    "w15:paraId": new OxmlAttr("w15:paraId", OxmlType.HexBinaryValue),
    "w15:paraIdParent": new OxmlAttr("w15:paraIdParent", OxmlType.HexBinaryValue),
    "w15:done": new OxmlAttr("w15:done", OxmlType.OnOffValue)
  };
  FootnoteColumns._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  PersistentDocumentId._D = {
    "w15:val": new OxmlAttr("w15:val", OxmlType.StringValue)
  };
  OnOffType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.OnOffValue)
  };
  SdtRepeatedSection._C = {
    "w15:sectionTitle": SectionTitle,
    "w15:doNotAllowInsertDeleteSection": DoNotAllowInsertDeleteSection
  };
  People._C = {
    "w15:person": Person
  };
  CommentsEx._C = {
    "w15:commentEx": CommentEx
  };
  Appearance._D = {
    "w15:val": new OxmlAttr("w15:val", OxmlType.EnumValue, SdtAppearanceArray)
  };
  DataBinding._D = {
    "w:prefixMappings": new OxmlAttr("w:prefixMappings", OxmlType.StringValue),
    "w:xpath": new OxmlAttr("w:xpath", OxmlType.StringValue),
    "w:storeItemID": new OxmlAttr("w:storeItemID", OxmlType.StringValue)
  };
  Color._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue),
    "w:themeColor": new OxmlAttr("w:themeColor", OxmlType.EnumValue, ThemeColorValuesArray),
    "w:themeTint": new OxmlAttr("w:themeTint", OxmlType.StringValue),
    "w:themeShade": new OxmlAttr("w:themeShade", OxmlType.StringValue)
  };
  return {
    prefix: "w15",
    xmlns: "http://schemas.microsoft.com/office/word/2012/wordml"
  };
}
export {
  Appearance,
  ChartTrackingRefBased,
  Color,
  CommentEx,
  CommentsEx,
  DataBinding,
  DefaultCollapsed,
  DoNotAllowInsertDeleteSection,
  FootnoteColumns,
  OnOffType,
  People,
  PersistentDocumentId,
  Person,
  PresenceInfo,
  SdtAppearance,
  SdtAppearanceArray,
  SdtRepeatedSection,
  SdtRepeatedSectionItem,
  SectionTitle,
  WebExtensionCreated,
  WebExtensionLinked,
  initOffice2013WordNamespace
};
