import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { NonVisualGroupShapeProperties as ANonVisualGroupShapeProperties } from '../../Drawing';
import { VisualGroupShapeProperties as AVisualGroupShapeProperties } from '../../Drawing';
import { TextShape as ATextShape } from '../../Drawing';
import { Shape as AShape } from '../../Drawing';
import { ConnectionShape as AConnectionShape } from '../../Drawing';
import { Picture as APicture } from '../../Drawing';
import { GvmlContentPart as A14GvmlContentPart } from '../../Office2010/Drawing';
import { GraphicFrame as AGraphicFrame } from '../../Drawing';
import { GroupShape as AGroupShape } from '../../Drawing';
import { GvmlGroupShapeExtensionList as AGvmlGroupShapeExtensionList } from '../../Drawing';
/** Locked Canvas Container. Serialized as `lc:lockedCanvas` */
export declare class LockedCanvas extends OxmlCompositeElement<ANonVisualGroupShapeProperties | AVisualGroupShapeProperties | ATextShape | AShape | AConnectionShape | APicture | A14GvmlContentPart | AGraphicFrame | AGroupShape | AGvmlGroupShapeExtensionList> {
    static _Q: string;
    /** Non-Visual Properties for a Group Shape. */
    get nonVisualGroupShapeProperties(): ANonVisualGroupShapeProperties | undefined;
    /** Visual Group Shape Properties. */
    get visualGroupShapeProperties(): AVisualGroupShapeProperties | undefined;
}
export declare function initDrawingLockedCanvasNamespace(): {
    prefix: string;
    xmlns: string;
};
