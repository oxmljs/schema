import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { Extension as AExtension } from '../../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../../Drawing';


/** Defines the OfficeArtExtensionList Class. Serialized as `ask:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'ask:extLst';

}
/** Defines the LineSketchSeed Class. Serialized as `ask:seed` */
export class LineSketchSeed extends OxmlLeafTextElement {

    public static override _Q = 'ask:seed';

}
/** Defines the LineSketchTypeProperties Class. Serialized as `ask:type` */
export class LineSketchTypeProperties extends OxmlCompositeElement<LineSketchNoneEmpty | LineSketchCurvedEmpty | LineSketchFreehandEmpty | LineSketchScribbleEmpty> {

    public static override _Q = 'ask:type';
    /** Returns LineSketchNoneEmpty. */
    public get lineSketchNoneEmpty(): LineSketchNoneEmpty | undefined { return this._f(LineSketchNoneEmpty); }
    /** Returns LineSketchCurvedEmpty. */
    public get lineSketchCurvedEmpty(): LineSketchCurvedEmpty | undefined { return this._f(LineSketchCurvedEmpty); }
    /** Returns LineSketchFreehandEmpty. */
    public get lineSketchFreehandEmpty(): LineSketchFreehandEmpty | undefined { return this._f(LineSketchFreehandEmpty); }
    /** Returns LineSketchScribbleEmpty. */
    public get lineSketchScribbleEmpty(): LineSketchScribbleEmpty | undefined { return this._f(LineSketchScribbleEmpty); }

}
/** Defines the LineSketchStyleProperties Class. Serialized as `ask:lineSketchStyleProps` */
export class LineSketchStyleProperties extends OxmlCompositeElement<ACustomGeometry | APresetGeometry | LineSketchTypeProperties | LineSketchSeed | OfficeArtExtensionList> {

    public static override _Q = 'ask:lineSketchStyleProps';
    public static override _A = [':sd',];
    /** sd. Serialized as `:sd` */
    public get sd(): UInt32Value | undefined { return this._g(':sd'); }
    public set sd(v: UInt32Value | undefined) { this._s(':sd', v); }

}
/** Defines the OpenXmlEmptyElement Class. */
export abstract class OpenXmlEmptyElement extends OxmlLeafElement {


}
/** Defines the LineSketchScribbleEmpty Class. Serialized as `ask:lineSketchScribble` */
export class LineSketchScribbleEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'ask:lineSketchScribble';

}
/** Defines the LineSketchFreehandEmpty Class. Serialized as `ask:lineSketchFreehand` */
export class LineSketchFreehandEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'ask:lineSketchFreehand';

}
/** Defines the LineSketchCurvedEmpty Class. Serialized as `ask:lineSketchCurved` */
export class LineSketchCurvedEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'ask:lineSketchCurved';

}
/** Defines the LineSketchNoneEmpty Class. Serialized as `ask:lineSketchNone` */
export class LineSketchNoneEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'ask:lineSketchNone';

}

export function initOffice2021DrawingSketchyShapesNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    LineSketchTypeProperties._C = {
        'ask:lineSketchNone': LineSketchNoneEmpty,
        'ask:lineSketchCurved': LineSketchCurvedEmpty,
        'ask:lineSketchFreehand': LineSketchFreehandEmpty,
        'ask:lineSketchScribble': LineSketchScribbleEmpty,
    };
    LineSketchStyleProperties._C = {
        'a:custGeom': ACustomGeometry,
        'a:prstGeom': APresetGeometry,
        'ask:type': LineSketchTypeProperties,
        'ask:seed': LineSketchSeed,
        'ask:extLst': OfficeArtExtensionList,
    };
    LineSketchStyleProperties._D = {
        ':sd': new OxmlAttr(':sd', OxmlType.UInt32Value),
    };
    return {
        prefix: 'ask',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2018/sketchyshapes',
    };
}
