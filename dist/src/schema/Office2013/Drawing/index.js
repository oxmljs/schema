import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../Drawing";
var TargetScreenSize = /* @__PURE__ */ ((TargetScreenSize2) => {
  TargetScreenSize2["Sz544x376"] = "544x376";
  TargetScreenSize2["Sz640x480"] = "640x480";
  TargetScreenSize2["Sz720x512"] = "720x512";
  TargetScreenSize2["Sz800x600"] = "800x600";
  TargetScreenSize2["Sz1024x768"] = "1024x768";
  TargetScreenSize2["Sz1152x882"] = "1152x882";
  TargetScreenSize2["Sz1152x900"] = "1152x900";
  TargetScreenSize2["Sz1280x1024"] = "1280x1024";
  TargetScreenSize2["Sz1600x1200"] = "1600x1200";
  TargetScreenSize2["Sz1800x1440"] = "1800x1440";
  TargetScreenSize2["Sz1920x1200"] = "1920x1200";
  return TargetScreenSize2;
})(TargetScreenSize || {});
const TargetScreenSizeArray = [
  "544x376" /* Sz544x376 */,
  "640x480" /* Sz640x480 */,
  "720x512" /* Sz720x512 */,
  "800x600" /* Sz800x600 */,
  "1024x768" /* Sz1024x768 */,
  "1152x882" /* Sz1152x882 */,
  "1152x900" /* Sz1152x900 */,
  "1280x1024" /* Sz1280x1024 */,
  "1600x1200" /* Sz1600x1200 */,
  "1800x1440" /* Sz1800x1440 */,
  "1920x1200" /* Sz1920x1200 */
];
class SignatureLine extends OxmlLeafElement {
  static _Q = "a15:signatureLine";
  static _A = [":isSignatureLine", ":id", ":provId", ":signingInstructionsSet", ":allowComments", ":showSignDate", ":suggestedSigner", ":suggestedSigner2", ":suggestedSignerEmail", ":signingInstructions", ":addlXml", ":sigProvUrl"];
  /** isSignatureLine. Serialized as `:isSignatureLine` */
  get isSignatureLine() {
    return this._g(":isSignatureLine");
  }
  set isSignatureLine(v) {
    this._s(":isSignatureLine", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** provId. Serialized as `:provId` */
  get providerId() {
    return this._g(":provId");
  }
  set providerId(v) {
    this._s(":provId", v);
  }
  /** signingInstructionsSet. Serialized as `:signingInstructionsSet` */
  get signingInstructionsSet() {
    return this._g(":signingInstructionsSet");
  }
  set signingInstructionsSet(v) {
    this._s(":signingInstructionsSet", v);
  }
  /** allowComments. Serialized as `:allowComments` */
  get allowComments() {
    return this._g(":allowComments");
  }
  set allowComments(v) {
    this._s(":allowComments", v);
  }
  /** showSignDate. Serialized as `:showSignDate` */
  get showSignDate() {
    return this._g(":showSignDate");
  }
  set showSignDate(v) {
    this._s(":showSignDate", v);
  }
  /** suggestedSigner. Serialized as `:suggestedSigner` */
  get suggestedSigner() {
    return this._g(":suggestedSigner");
  }
  set suggestedSigner(v) {
    this._s(":suggestedSigner", v);
  }
  /** suggestedSigner2. Serialized as `:suggestedSigner2` */
  get suggestedSigner2() {
    return this._g(":suggestedSigner2");
  }
  set suggestedSigner2(v) {
    this._s(":suggestedSigner2", v);
  }
  /** suggestedSignerEmail. Serialized as `:suggestedSignerEmail` */
  get suggestedSignerEmail() {
    return this._g(":suggestedSignerEmail");
  }
  set suggestedSignerEmail(v) {
    this._s(":suggestedSignerEmail", v);
  }
  /** signingInstructions. Serialized as `:signingInstructions` */
  get signingInstructions() {
    return this._g(":signingInstructions");
  }
  set signingInstructions(v) {
    this._s(":signingInstructions", v);
  }
  /** addlXml. Serialized as `:addlXml` */
  get additionalXml() {
    return this._g(":addlXml");
  }
  set additionalXml(v) {
    this._s(":addlXml", v);
  }
  /** sigProvUrl. Serialized as `:sigProvUrl` */
  get signatureProviderUrl() {
    return this._g(":sigProvUrl");
  }
  set signatureProviderUrl(v) {
    this._s(":sigProvUrl", v);
  }
}
class ObjectProperties extends OxmlLeafElement {
  static _Q = "a15:objectPr";
  static _A = [":objectId", ":isActiveX", ":linkType"];
  /** objectId. Serialized as `:objectId` */
  get id() {
    return this._g(":objectId");
  }
  set id(v) {
    this._s(":objectId", v);
  }
  /** isActiveX. Serialized as `:isActiveX` */
  get isActiveX() {
    return this._g(":isActiveX");
  }
  set isActiveX(v) {
    this._s(":isActiveX", v);
  }
  /** linkType. Serialized as `:linkType` */
  get linkType() {
    return this._g(":linkType");
  }
  set linkType(v) {
    this._s(":linkType", v);
  }
}
class NonVisualGroupProperties extends OxmlLeafElement {
  static _Q = "a15:nonVisualGroupProps";
  static _A = [":isLegacyGroup"];
  /** isLegacyGroup. Serialized as `:isLegacyGroup` */
  get isLegacyGroup() {
    return this._g(":isLegacyGroup");
  }
  set isLegacyGroup(v) {
    this._s(":isLegacyGroup", v);
  }
}
class BackgroundProperties extends OxmlLeafElement {
  static _Q = "a15:backgroundPr";
  static _A = [":bwMode", ":bwPure", ":bwNormal", ":targetScreenSize"];
  /** bwMode. Serialized as `:bwMode` */
  get mode() {
    return this._g(":bwMode");
  }
  set mode(v) {
    this._s(":bwMode", v);
  }
  /** bwPure. Serialized as `:bwPure` */
  get pure() {
    return this._g(":bwPure");
  }
  set pure(v) {
    this._s(":bwPure", v);
  }
  /** bwNormal. Serialized as `:bwNormal` */
  get normal() {
    return this._g(":bwNormal");
  }
  set normal(v) {
    this._s(":bwNormal", v);
  }
  /** targetScreenSize. Serialized as `:targetScreenSize` */
  get targetScreenSize() {
    return this._g(":targetScreenSize");
  }
  set targetScreenSize(v) {
    this._s(":targetScreenSize", v);
  }
}
function initOffice2013DrawingNamespace() {
  SignatureLine._D = {
    ":isSignatureLine": new OxmlAttr(":isSignatureLine", OxmlType.BooleanValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":provId": new OxmlAttr(":provId", OxmlType.StringValue),
    ":signingInstructionsSet": new OxmlAttr(":signingInstructionsSet", OxmlType.BooleanValue),
    ":allowComments": new OxmlAttr(":allowComments", OxmlType.BooleanValue),
    ":showSignDate": new OxmlAttr(":showSignDate", OxmlType.BooleanValue),
    ":suggestedSigner": new OxmlAttr(":suggestedSigner", OxmlType.StringValue),
    ":suggestedSigner2": new OxmlAttr(":suggestedSigner2", OxmlType.StringValue),
    ":suggestedSignerEmail": new OxmlAttr(":suggestedSignerEmail", OxmlType.StringValue),
    ":signingInstructions": new OxmlAttr(":signingInstructions", OxmlType.StringValue),
    ":addlXml": new OxmlAttr(":addlXml", OxmlType.StringValue),
    ":sigProvUrl": new OxmlAttr(":sigProvUrl", OxmlType.StringValue)
  };
  ObjectProperties._D = {
    ":objectId": new OxmlAttr(":objectId", OxmlType.StringValue),
    ":isActiveX": new OxmlAttr(":isActiveX", OxmlType.BooleanValue),
    ":linkType": new OxmlAttr(":linkType", OxmlType.StringValue)
  };
  NonVisualGroupProperties._D = {
    ":isLegacyGroup": new OxmlAttr(":isLegacyGroup", OxmlType.BooleanValue)
  };
  BackgroundProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray),
    ":bwPure": new OxmlAttr(":bwPure", OxmlType.EnumValue, BlackWhiteModeValuesArray),
    ":bwNormal": new OxmlAttr(":bwNormal", OxmlType.EnumValue, BlackWhiteModeValuesArray),
    ":targetScreenSize": new OxmlAttr(":targetScreenSize", OxmlType.EnumValue, TargetScreenSizeArray)
  };
  return {
    prefix: "a15",
    xmlns: "http://schemas.microsoft.com/office/drawing/2012/main"
  };
}
export {
  BackgroundProperties,
  NonVisualGroupProperties,
  ObjectProperties,
  SignatureLine,
  TargetScreenSize,
  TargetScreenSizeArray,
  initOffice2013DrawingNamespace
};
