import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { NonVisualGroupShapeProperties as ANonVisualGroupShapeProperties } from "../../Drawing";
import { VisualGroupShapeProperties as AVisualGroupShapeProperties } from "../../Drawing";
import { TextShape as ATextShape } from "../../Drawing";
import { Shape as AShape } from "../../Drawing";
import { ConnectionShape as AConnectionShape } from "../../Drawing";
import { Picture as APicture } from "../../Drawing";
import { GvmlContentPart as A14GvmlContentPart } from "../../Office2010/Drawing";
import { GraphicFrame as AGraphicFrame } from "../../Drawing";
import { GroupShape as AGroupShape } from "../../Drawing";
import { GvmlGroupShapeExtensionList as AGvmlGroupShapeExtensionList } from "../../Drawing";
class LockedCanvas extends OxmlCompositeElement {
  static _Q = "lc:lockedCanvas";
  /** Non-Visual Properties for a Group Shape. */
  get nonVisualGroupShapeProperties() {
    return this._f(ANonVisualGroupShapeProperties);
  }
  /** Visual Group Shape Properties. */
  get visualGroupShapeProperties() {
    return this._f(AVisualGroupShapeProperties);
  }
}
function initDrawingLockedCanvasNamespace() {
  LockedCanvas._C = {
    "a:nvGrpSpPr": ANonVisualGroupShapeProperties,
    "a:grpSpPr": AVisualGroupShapeProperties,
    "a:txSp": ATextShape,
    "a:sp": AShape,
    "a:cxnSp": AConnectionShape,
    "a:pic": APicture,
    "a14:contentPart": A14GvmlContentPart,
    "a:graphicFrame": AGraphicFrame,
    "a:grpSp": AGroupShape,
    "a:extLst": AGvmlGroupShapeExtensionList
  };
  return {
    prefix: "lc",
    xmlns: "http://schemas.openxmlformats.org/drawingml/2006/lockedCanvas"
  };
}
export {
  LockedCanvas,
  initDrawingLockedCanvasNamespace
};
