import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class OpenXmlIdentifierElement extends OxmlLeafElement {
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ColIdIdentifier extends OpenXmlIdentifierElement {
  static _Q = "a16:colId";
}
class RowIdIdentifier extends OpenXmlIdentifierElement {
  static _Q = "a16:rowId";
}
class ConnectableReferences extends OxmlLeafElement {
  static _Q = "a16:cxnDERefs";
  static _A = [":st", ":end"];
  /** st. Serialized as `:st` */
  get st() {
    return this._g(":st");
  }
  set st(v) {
    this._s(":st", v);
  }
  /** end. Serialized as `:end` */
  get end() {
    return this._g(":end");
  }
  set end(v) {
    this._s(":end", v);
  }
}
class PredecessorDrawingElementReference extends OxmlLeafElement {
  static _Q = "a16:predDERef";
  static _A = [":pred"];
  /** pred. Serialized as `:pred` */
  get pred() {
    return this._g(":pred");
  }
  set pred(v) {
    this._s(":pred", v);
  }
}
class CreationId extends OxmlLeafElement {
  static _Q = "a16:creationId";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
function initOffice2016DrawingNamespace() {
  OpenXmlIdentifierElement._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  ConnectableReferences._D = {
    ":st": new OxmlAttr(":st", OxmlType.StringValue),
    ":end": new OxmlAttr(":end", OxmlType.StringValue)
  };
  PredecessorDrawingElementReference._D = {
    ":pred": new OxmlAttr(":pred", OxmlType.StringValue)
  };
  CreationId._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  return {
    prefix: "a16",
    xmlns: "http://schemas.microsoft.com/office/drawing/2014/main"
  };
}
export {
  ColIdIdentifier,
  ConnectableReferences,
  CreationId,
  OpenXmlIdentifierElement,
  PredecessorDrawingElementReference,
  RowIdIdentifier,
  initOffice2016DrawingNamespace
};
