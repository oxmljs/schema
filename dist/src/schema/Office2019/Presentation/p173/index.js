import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
var DisplayLocation = /* @__PURE__ */ ((DisplayLocation2) => {
  DisplayLocation2["Media"] = "media";
  DisplayLocation2["Slide"] = "slide";
  return DisplayLocation2;
})(DisplayLocation || {});
const DisplayLocationArray = [
  "media" /* Media */,
  "slide" /* Slide */
];
class TrackList extends OxmlCompositeElement {
  static _Q = "p173:trackLst";
}
class Track extends OxmlLeafElement {
  static _Q = "p173:track";
  static _A = [":id", ":label", ":lang", "r:embed", "r:link"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** lang. Serialized as `:lang` */
  get lang() {
    return this._g(":lang");
  }
  set lang(v) {
    this._s(":lang", v);
  }
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
class TracksInfo extends OxmlCompositeElement {
  static _Q = "p173:tracksInfo";
  static _A = [":displayLoc"];
  /** displayLoc. Serialized as `:displayLoc` */
  get displayLoc() {
    return this._g(":displayLoc");
  }
  set displayLoc(v) {
    this._s(":displayLoc", v);
  }
  /** Returns TrackList. */
  get trackList() {
    return this._f(TrackList);
  }
}
function initOffice2019Presentationp173Namespace() {
  TrackList._C = {
    "p173:track": Track
  };
  Track._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue),
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue)
  };
  TracksInfo._C = {
    "p173:trackLst": TrackList
  };
  TracksInfo._D = {
    ":displayLoc": new OxmlAttr(":displayLoc", OxmlType.EnumValue, DisplayLocationArray)
  };
  return {
    prefix: "p173",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2017/3/main"
  };
}
export {
  DisplayLocation,
  DisplayLocationArray,
  Track,
  TrackList,
  TracksInfo,
  initOffice2019Presentationp173Namespace
};
