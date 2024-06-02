import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { NoBullet as ANoBullet } from "../../../Drawing";
import { AutoNumberedBullet as AAutoNumberedBullet } from "../../../Drawing";
import { CharacterBullet as ACharacterBullet } from "../../../Drawing";
import { PictureBullet as APictureBullet } from "../../../Drawing";
var STorageType = /* @__PURE__ */ ((STorageType2) => {
  STorageType2["SibTrans"] = "sibTrans";
  STorageType2["ParTrans"] = "parTrans";
  return STorageType2;
})(STorageType || {});
const STorageTypeArray = [
  "sibTrans" /* SibTrans */,
  "parTrans" /* ParTrans */
];
class NumberDiagramInfo extends OxmlCompositeElement {
  static _Q = "dgm1611:autoBuNodeInfo";
  static _A = [":lvl", ":ptType"];
  /** lvl. Serialized as `:lvl` */
  get lvl() {
    return this._g(":lvl");
  }
  set lvl(v) {
    this._s(":lvl", v);
  }
  /** ptType. Serialized as `:ptType` */
  get ptType() {
    return this._g(":ptType");
  }
  set ptType(v) {
    this._s(":ptType", v);
  }
  /** Returns DiagramAutoBullet. */
  get diagramAutoBullet() {
    return this._f(DiagramAutoBullet);
  }
}
class DiagramAutoBullet extends OxmlCompositeElement {
  static _Q = "dgm1611:buPr";
  static _A = [":prefix", ":leadZeros"];
  /** prefix. Serialized as `:prefix` */
  get autoBulletPrefix() {
    return this._g(":prefix");
  }
  set autoBulletPrefix(v) {
    this._s(":prefix", v);
  }
  /** leadZeros. Serialized as `:leadZeros` */
  get leadZeros() {
    return this._g(":leadZeros");
  }
  set leadZeros(v) {
    this._s(":leadZeros", v);
  }
  /** No Bullet. */
  get noBullet() {
    return this._f(ANoBullet);
  }
  /** Auto-Numbered Bullet. */
  get autoNumberedBullet() {
    return this._f(AAutoNumberedBullet);
  }
  /** Character Bullet. */
  get characterBullet() {
    return this._f(ACharacterBullet);
  }
  /** Picture Bullet. */
  get pictureBullet() {
    return this._f(APictureBullet);
  }
}
class NumberDiagramInfoList extends OxmlCompositeElement {
  static _Q = "dgm1611:autoBuNodeInfoLst";
}
function initOffice2019DrawingDiagram11Namespace() {
  NumberDiagramInfo._C = {
    "dgm1611:buPr": DiagramAutoBullet
  };
  NumberDiagramInfo._D = {
    ":lvl": new OxmlAttr(":lvl", OxmlType.UInt32Value),
    ":ptType": new OxmlAttr(":ptType", OxmlType.EnumValue, STorageTypeArray)
  };
  DiagramAutoBullet._C = {
    "a:buNone": ANoBullet,
    "a:buAutoNum": AAutoNumberedBullet,
    "a:buChar": ACharacterBullet,
    "a:buBlip": APictureBullet
  };
  DiagramAutoBullet._D = {
    ":prefix": new OxmlAttr(":prefix", OxmlType.StringValue),
    ":leadZeros": new OxmlAttr(":leadZeros", OxmlType.BooleanValue)
  };
  NumberDiagramInfoList._C = {
    "dgm1611:autoBuNodeInfo": NumberDiagramInfo
  };
  return {
    prefix: "dgm1611",
    xmlns: "http://schemas.microsoft.com/office/drawing/2016/11/diagram"
  };
}
export {
  DiagramAutoBullet,
  NumberDiagramInfo,
  NumberDiagramInfoList,
  STorageType,
  STorageTypeArray,
  initOffice2019DrawingDiagram11Namespace
};
