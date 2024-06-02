import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { ByteValue } from '../../../../framework/types/ByteValue';
import { BlackWhiteModeValues } from '../../../Drawing';
import { Transform2D as ATransform2D } from '../../../Drawing';
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
export declare class ShowSketchButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the BooleanFalseType Class. */
export declare abstract class BooleanFalseType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the InSketchMode Class. Serialized as `c14:inSketchMode` */
export declare class InSketchMode extends BooleanFalseType {
    static _Q: string;
}
/** Defines the DropZonesVisible Class. Serialized as `c14:dropZonesVisible` */
export declare class DropZonesVisible extends BooleanFalseType {
    static _Q: string;
}
/** Defines the DropZoneSeries Class. Serialized as `c14:dropZoneSeries` */
export declare class DropZoneSeries extends BooleanFalseType {
    static _Q: string;
}
/** Defines the DropZoneData Class. Serialized as `c14:dropZoneData` */
export declare class DropZoneData extends BooleanFalseType {
    static _Q: string;
}
/** Defines the DropZoneCategories Class. Serialized as `c14:dropZoneCategories` */
export declare class DropZoneCategories extends BooleanFalseType {
    static _Q: string;
}
/** Defines the DropZoneFilter Class. Serialized as `c14:dropZoneFilter` */
export declare class DropZoneFilter extends BooleanFalseType {
    static _Q: string;
}
/** Defines the ShapeProperties Class. Serialized as `c14:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Defines the Style Class. Serialized as `c14:style` */
export declare class Style extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): ByteValue | undefined;
    set val(v: ByteValue | undefined);
}
/** Defines the InvertSolidFillFormat Class. Serialized as `c14:invertSolidFillFmt` */
export declare class InvertSolidFillFormat extends OxmlCompositeElement<ShapeProperties> {
    static _Q: string;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
}
/** Defines the SketchOptions Class. Serialized as `c14:sketchOptions` */
export declare class SketchOptions extends OxmlCompositeElement<InSketchMode | ShowSketchButton> {
    static _Q: string;
    /** Returns InSketchMode. */
    get inSketchMode(): InSketchMode | undefined;
    /** Returns ShowSketchButton. */
    get showSketchButton(): ShowSketchButton | undefined;
}
/** Defines the PivotOptions Class. Serialized as `c14:pivotOptions` */
export declare class PivotOptions extends OxmlCompositeElement<DropZoneFilter | DropZoneCategories | DropZoneData | DropZoneSeries | DropZonesVisible> {
    static _Q: string;
    /** Returns DropZoneFilter. */
    get dropZoneFilter(): DropZoneFilter | undefined;
    /** Returns DropZoneCategories. */
    get dropZoneCategories(): DropZoneCategories | undefined;
    /** Returns DropZoneData. */
    get dropZoneData(): DropZoneData | undefined;
    /** Returns DropZoneSeries. */
    get dropZoneSeries(): DropZoneSeries | undefined;
    /** Returns DropZonesVisible. */
    get dropZonesVisible(): DropZonesVisible | undefined;
}
export declare function initOffice2010DrawingChartsNamespace(): {
    prefix: string;
    xmlns: string;
};
