import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
class Scope extends OxmlLeafTextElement {
  static _Q = "ntns:xsnScope";
}
class OpenByDefault extends OxmlLeafTextElement {
  static _Q = "ntns:openByDefault";
}
class CachedView extends OxmlLeafTextElement {
  static _Q = "ntns:cached";
}
class XsnLocation extends OxmlLeafTextElement {
  static _Q = "ntns:xsnLocation";
}
class CustomXsn extends OxmlCompositeElement {
  static _Q = "ntns:customXsn";
  /** Returns XsnLocation. */
  get xsnLocation() {
    return this._f(XsnLocation);
  }
  /** Returns CachedView. */
  get cachedView() {
    return this._f(CachedView);
  }
  /** Returns OpenByDefault. */
  get openByDefault() {
    return this._f(OpenByDefault);
  }
  /** Returns Scope. */
  get scope() {
    return this._f(Scope);
  }
}
function initOfficeCustomXsnNamespace() {
  CustomXsn._C = {
    "ntns:xsnLocation": XsnLocation,
    "ntns:cached": CachedView,
    "ntns:openByDefault": OpenByDefault,
    "ntns:xsnScope": Scope
  };
  return {
    prefix: "ntns",
    xmlns: "http://schemas.microsoft.com/office/2006/metadata/customXsn"
  };
}
export {
  CachedView,
  CustomXsn,
  OpenByDefault,
  Scope,
  XsnLocation,
  initOfficeCustomXsnNamespace
};
