import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { Extension as AExtension } from '../../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../../Drawing';
/** Defines the OfficeArtExtensionList Class. Serialized as `ask:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the LineSketchSeed Class. Serialized as `ask:seed` */
export declare class LineSketchSeed extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the LineSketchTypeProperties Class. Serialized as `ask:type` */
export declare class LineSketchTypeProperties extends OxmlCompositeElement<LineSketchNoneEmpty | LineSketchCurvedEmpty | LineSketchFreehandEmpty | LineSketchScribbleEmpty> {
    static _Q: string;
    /** Returns LineSketchNoneEmpty. */
    get lineSketchNoneEmpty(): LineSketchNoneEmpty | undefined;
    /** Returns LineSketchCurvedEmpty. */
    get lineSketchCurvedEmpty(): LineSketchCurvedEmpty | undefined;
    /** Returns LineSketchFreehandEmpty. */
    get lineSketchFreehandEmpty(): LineSketchFreehandEmpty | undefined;
    /** Returns LineSketchScribbleEmpty. */
    get lineSketchScribbleEmpty(): LineSketchScribbleEmpty | undefined;
}
/** Defines the LineSketchStyleProperties Class. Serialized as `ask:lineSketchStyleProps` */
export declare class LineSketchStyleProperties extends OxmlCompositeElement<ACustomGeometry | APresetGeometry | LineSketchTypeProperties | LineSketchSeed | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** sd. Serialized as `:sd` */
    get sd(): UInt32Value | undefined;
    set sd(v: UInt32Value | undefined);
}
/** Defines the OpenXmlEmptyElement Class. */
export declare abstract class OpenXmlEmptyElement extends OxmlLeafElement {
}
/** Defines the LineSketchScribbleEmpty Class. Serialized as `ask:lineSketchScribble` */
export declare class LineSketchScribbleEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the LineSketchFreehandEmpty Class. Serialized as `ask:lineSketchFreehand` */
export declare class LineSketchFreehandEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the LineSketchCurvedEmpty Class. Serialized as `ask:lineSketchCurved` */
export declare class LineSketchCurvedEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the LineSketchNoneEmpty Class. Serialized as `ask:lineSketchNone` */
export declare class LineSketchNoneEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
export declare function initOffice2021DrawingSketchyShapesNamespace(): {
    prefix: string;
    xmlns: string;
};
