import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { BlipCompressionValuesArray } from "../../Drawing";
import { AlphaBiLevel as AAlphaBiLevel } from "../../Drawing";
import { AlphaCeiling as AAlphaCeiling } from "../../Drawing";
import { AlphaFloor as AAlphaFloor } from "../../Drawing";
import { AlphaInverse as AAlphaInverse } from "../../Drawing";
import { AlphaModulationEffect as AAlphaModulationEffect } from "../../Drawing";
import { AlphaModulationFixed as AAlphaModulationFixed } from "../../Drawing";
import { AlphaReplace as AAlphaReplace } from "../../Drawing";
import { BiLevel as ABiLevel } from "../../Drawing";
import { Blur as ABlur } from "../../Drawing";
import { ColorChange as AColorChange } from "../../Drawing";
import { ColorReplacement as AColorReplacement } from "../../Drawing";
import { Duotone as ADuotone } from "../../Drawing";
import { FillOverlay as AFillOverlay } from "../../Drawing";
import { Grayscale as AGrayscale } from "../../Drawing";
import { Hsl as AHsl } from "../../Drawing";
import { LuminanceEffect as ALuminanceEffect } from "../../Drawing";
import { TintEffect as ATintEffect } from "../../Drawing";
import { BlipExtensionList as ABlipExtensionList } from "../../Drawing";
import { Extension as AExtension } from "../../Drawing";
class Snapshot extends OxmlCompositeElement {
  static _Q = "we:snapshot";
  static _A = ["r:embed", "r:link", ":cstate"];
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
  /** Compression state for blips.. Serialized as `:cstate` */
  get compressionState() {
    return this._g(":cstate");
  }
  set compressionState(v) {
    this._s(":cstate", v);
  }
}
class WebExtensionBindingList extends OxmlCompositeElement {
  static _Q = "we:bindings";
}
class WebExtensionPropertyBag extends OxmlCompositeElement {
  static _Q = "we:properties";
}
class WebExtensionReferenceList extends OxmlCompositeElement {
  static _Q = "we:alternateReferences";
}
class WebExtensionStoreReference extends OxmlCompositeElement {
  static _Q = "we:reference";
  static _A = [":id", ":version", ":store", ":storeType"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** version. Serialized as `:version` */
  get version() {
    return this._g(":version");
  }
  set version(v) {
    this._s(":version", v);
  }
  /** store. Serialized as `:store` */
  get store() {
    return this._g(":store");
  }
  set store(v) {
    this._s(":store", v);
  }
  /** storeType. Serialized as `:storeType` */
  get storeType() {
    return this._g(":storeType");
  }
  set storeType(v) {
    this._s(":storeType", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class WebExtensionBinding extends OxmlCompositeElement {
  static _Q = "we:binding";
  static _A = [":id", ":type", ":appref"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** appref. Serialized as `:appref` */
  get appReference() {
    return this._g(":appref");
  }
  set appReference(v) {
    this._s(":appref", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "we:extLst";
}
class WebExtensionProperty extends OxmlLeafElement {
  static _Q = "we:property";
  static _A = [":name", ":value"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
}
class WebExtensionReference extends OxmlLeafElement {
  static _Q = "we:webextensionref";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class WebExtension extends OxmlPartRootElement {
  static _Q = "we:webextension";
  static _A = [":id", ":frozen"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** frozen. Serialized as `:frozen` */
  get frozen() {
    return this._g(":frozen");
  }
  set frozen(v) {
    this._s(":frozen", v);
  }
  /** Returns WebExtensionStoreReference. */
  get webExtensionStoreReference() {
    return this._f(WebExtensionStoreReference);
  }
  /** Returns WebExtensionReferenceList. */
  get webExtensionReferenceList() {
    return this._f(WebExtensionReferenceList);
  }
  /** Returns WebExtensionPropertyBag. */
  get webExtensionPropertyBag() {
    return this._f(WebExtensionPropertyBag);
  }
  /** Returns WebExtensionBindingList. */
  get webExtensionBindingList() {
    return this._f(WebExtensionBindingList);
  }
  /** Returns Snapshot. */
  get snapshot() {
    return this._f(Snapshot);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
function initOffice2013WebExtensionNamespace() {
  Snapshot._C = {
    "a:alphaBiLevel": AAlphaBiLevel,
    "a:alphaCeiling": AAlphaCeiling,
    "a:alphaFloor": AAlphaFloor,
    "a:alphaInv": AAlphaInverse,
    "a:alphaMod": AAlphaModulationEffect,
    "a:alphaModFix": AAlphaModulationFixed,
    "a:alphaRepl": AAlphaReplace,
    "a:biLevel": ABiLevel,
    "a:blur": ABlur,
    "a:clrChange": AColorChange,
    "a:clrRepl": AColorReplacement,
    "a:duotone": ADuotone,
    "a:fillOverlay": AFillOverlay,
    "a:grayscl": AGrayscale,
    "a:hsl": AHsl,
    "a:lum": ALuminanceEffect,
    "a:tint": ATintEffect,
    "a:extLst": ABlipExtensionList
  };
  Snapshot._D = {
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue),
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue),
    ":cstate": new OxmlAttr(":cstate", OxmlType.EnumValue, BlipCompressionValuesArray)
  };
  WebExtensionBindingList._C = {
    "we:binding": WebExtensionBinding
  };
  WebExtensionPropertyBag._C = {
    "we:property": WebExtensionProperty
  };
  WebExtensionReferenceList._C = {
    "we:reference": WebExtensionStoreReference
  };
  WebExtensionStoreReference._C = {
    "we:extLst": OfficeArtExtensionList
  };
  WebExtensionStoreReference._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":version": new OxmlAttr(":version", OxmlType.StringValue),
    ":store": new OxmlAttr(":store", OxmlType.StringValue),
    ":storeType": new OxmlAttr(":storeType", OxmlType.StringValue)
  };
  WebExtensionBinding._C = {
    "we:extLst": OfficeArtExtensionList
  };
  WebExtensionBinding._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    ":appref": new OxmlAttr(":appref", OxmlType.StringValue)
  };
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  WebExtensionProperty._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":value": new OxmlAttr(":value", OxmlType.StringValue)
  };
  WebExtensionReference._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  WebExtension._C = {
    "we:reference": WebExtensionStoreReference,
    "we:alternateReferences": WebExtensionReferenceList,
    "we:properties": WebExtensionPropertyBag,
    "we:bindings": WebExtensionBindingList,
    "we:snapshot": Snapshot,
    "we:extLst": OfficeArtExtensionList
  };
  WebExtension._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":frozen": new OxmlAttr(":frozen", OxmlType.BooleanValue)
  };
  return {
    prefix: "we",
    xmlns: "http://schemas.microsoft.com/office/webextensions/webextension/2010/11"
  };
}
export {
  OfficeArtExtensionList,
  Snapshot,
  WebExtension,
  WebExtensionBinding,
  WebExtensionBindingList,
  WebExtensionProperty,
  WebExtensionPropertyBag,
  WebExtensionReference,
  WebExtensionReferenceList,
  WebExtensionStoreReference,
  initOffice2013WebExtensionNamespace
};
