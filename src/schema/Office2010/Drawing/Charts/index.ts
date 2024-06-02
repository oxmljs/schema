import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { ByteValue } from '../../../../framework/types/ByteValue';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';import { Transform2D as ATransform2D } from '../../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../../Drawing';
import { NoFill as ANoFill } from '../../../Drawing';
import { SolidFill as ASolidFill } from '../../../Drawing';
import { GradientFill as AGradientFill } from '../../../Drawing';
import { BlipFill as ABlipFill } from '../../../Drawing';
import { PatternFill as APatternFill } from '../../../Drawing';
import { GroupFill as AGroupFill } from '../../../Drawing';
import { Outline as AOutline } from '../../../Drawing';
import { EffectList as AEffectList } from '../../../Drawing';
import { EffectDag as AEffectDag } from '../../../Drawing';
import { Scene3DType as AScene3DType } from '../../../Drawing';
import { Shape3DType as AShape3DType } from '../../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../../Drawing';


/** Defines the ShowSketchButton Class. Serialized as `c14:showSketchBtn` */
export class ShowSketchButton extends OxmlLeafElement {

    public static override _Q = 'c14:showSketchBtn';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the BooleanFalseType Class. */
export abstract class BooleanFalseType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the InSketchMode Class. Serialized as `c14:inSketchMode` */
export class InSketchMode extends BooleanFalseType {

    public static override _Q = 'c14:inSketchMode';

}
/** Defines the DropZonesVisible Class. Serialized as `c14:dropZonesVisible` */
export class DropZonesVisible extends BooleanFalseType {

    public static override _Q = 'c14:dropZonesVisible';

}
/** Defines the DropZoneSeries Class. Serialized as `c14:dropZoneSeries` */
export class DropZoneSeries extends BooleanFalseType {

    public static override _Q = 'c14:dropZoneSeries';

}
/** Defines the DropZoneData Class. Serialized as `c14:dropZoneData` */
export class DropZoneData extends BooleanFalseType {

    public static override _Q = 'c14:dropZoneData';

}
/** Defines the DropZoneCategories Class. Serialized as `c14:dropZoneCategories` */
export class DropZoneCategories extends BooleanFalseType {

    public static override _Q = 'c14:dropZoneCategories';

}
/** Defines the DropZoneFilter Class. Serialized as `c14:dropZoneFilter` */
export class DropZoneFilter extends BooleanFalseType {

    public static override _Q = 'c14:dropZoneFilter';

}
/** Defines the ShapeProperties Class. Serialized as `c14:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'c14:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Defines the Style Class. Serialized as `c14:style` */
export class Style extends OxmlLeafElement {

    public static override _Q = 'c14:style';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): ByteValue | undefined { return this._g(':val'); }
    public set val(v: ByteValue | undefined) { this._s(':val', v); }

}
/** Defines the InvertSolidFillFormat Class. Serialized as `c14:invertSolidFillFmt` */
export class InvertSolidFillFormat extends OxmlCompositeElement<ShapeProperties> {

    public static override _Q = 'c14:invertSolidFillFmt';
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }

}
/** Defines the SketchOptions Class. Serialized as `c14:sketchOptions` */
export class SketchOptions extends OxmlCompositeElement<InSketchMode | ShowSketchButton> {

    public static override _Q = 'c14:sketchOptions';
    /** Returns InSketchMode. */
    public get inSketchMode(): InSketchMode | undefined { return this._f(InSketchMode); }
    /** Returns ShowSketchButton. */
    public get showSketchButton(): ShowSketchButton | undefined { return this._f(ShowSketchButton); }

}
/** Defines the PivotOptions Class. Serialized as `c14:pivotOptions` */
export class PivotOptions extends OxmlCompositeElement<DropZoneFilter | DropZoneCategories | DropZoneData | DropZoneSeries | DropZonesVisible> {

    public static override _Q = 'c14:pivotOptions';
    /** Returns DropZoneFilter. */
    public get dropZoneFilter(): DropZoneFilter | undefined { return this._f(DropZoneFilter); }
    /** Returns DropZoneCategories. */
    public get dropZoneCategories(): DropZoneCategories | undefined { return this._f(DropZoneCategories); }
    /** Returns DropZoneData. */
    public get dropZoneData(): DropZoneData | undefined { return this._f(DropZoneData); }
    /** Returns DropZoneSeries. */
    public get dropZoneSeries(): DropZoneSeries | undefined { return this._f(DropZoneSeries); }
    /** Returns DropZonesVisible. */
    public get dropZonesVisible(): DropZonesVisible | undefined { return this._f(DropZonesVisible); }

}

export function initOffice2010DrawingChartsNamespace() {
    ShowSketchButton._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    BooleanFalseType._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    ShapeProperties._C = {
        'a:xfrm': ATransform2D,
        'a:custGeom': ACustomGeometry,
        'a:prstGeom': APresetGeometry,
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:ln': AOutline,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'a:scene3d': AScene3DType,
        'a:sp3d': AShape3DType,
        'a:extLst': AShapePropertiesExtensionList,
    };
    ShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    Style._D = {
        ':val': new OxmlAttr(':val', OxmlType.ByteValue),
    };
    InvertSolidFillFormat._C = {
        'c14:spPr': ShapeProperties,
    };
    SketchOptions._C = {
        'c14:inSketchMode': InSketchMode,
        'c14:showSketchBtn': ShowSketchButton,
    };
    PivotOptions._C = {
        'c14:dropZoneFilter': DropZoneFilter,
        'c14:dropZoneCategories': DropZoneCategories,
        'c14:dropZoneData': DropZoneData,
        'c14:dropZoneSeries': DropZoneSeries,
        'c14:dropZonesVisible': DropZonesVisible,
    };
    return {
        prefix: 'c14',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2007/8/2/chart',
    };
}
