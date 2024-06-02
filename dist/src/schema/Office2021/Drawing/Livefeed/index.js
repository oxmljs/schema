import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { Extension as AExtension } from "../../../Drawing";
class LiveFeedBackgroundProperties extends OxmlCompositeElement {
  static _Q = "alf:backgroundProps";
}
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "alf:extLst";
}
class LiveFeedProperties extends OxmlCompositeElement {
  static _Q = "alf:liveFeedProps";
  /** Returns LiveFeedBackgroundProperties. */
  get liveFeedBackgroundProperties() {
    return this._f(LiveFeedBackgroundProperties);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class BackgroundCustomProperties extends OxmlCompositeElement {
  static _Q = "alf:Custom";
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class BackgroundBlurProperties extends OxmlCompositeElement {
  static _Q = "alf:Blur";
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class BackgroundRemovedProperties extends OxmlCompositeElement {
  static _Q = "alf:Removed";
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class BackgroundNormalProperties extends OxmlCompositeElement {
  static _Q = "alf:Normal";
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
function initOffice2021DrawingLivefeedNamespace() {
  LiveFeedBackgroundProperties._C = {
    "alf:Normal": BackgroundNormalProperties,
    "alf:Removed": BackgroundRemovedProperties,
    "alf:Blur": BackgroundBlurProperties,
    "alf:Custom": BackgroundCustomProperties,
    "alf:extLst": OfficeArtExtensionList
  };
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  LiveFeedProperties._C = {
    "alf:backgroundProps": LiveFeedBackgroundProperties,
    "alf:extLst": OfficeArtExtensionList
  };
  BackgroundCustomProperties._C = {
    "alf:extLst": OfficeArtExtensionList
  };
  BackgroundBlurProperties._C = {
    "alf:extLst": OfficeArtExtensionList
  };
  BackgroundRemovedProperties._C = {
    "alf:extLst": OfficeArtExtensionList
  };
  BackgroundNormalProperties._C = {
    "alf:extLst": OfficeArtExtensionList
  };
  return {
    prefix: "alf",
    xmlns: "http://schemas.microsoft.com/office/drawing/2021/livefeed"
  };
}
export {
  BackgroundBlurProperties,
  BackgroundCustomProperties,
  BackgroundNormalProperties,
  BackgroundRemovedProperties,
  LiveFeedBackgroundProperties,
  LiveFeedProperties,
  OfficeArtExtensionList,
  initOffice2021DrawingLivefeedNamespace
};
