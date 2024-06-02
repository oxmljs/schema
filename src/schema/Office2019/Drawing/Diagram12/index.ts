import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';import { DefaultParagraphProperties as ADefaultParagraphProperties } from '../../../Drawing';
import { Level1ParagraphProperties as ALevel1ParagraphProperties } from '../../../Drawing';
import { Level2ParagraphProperties as ALevel2ParagraphProperties } from '../../../Drawing';
import { Level3ParagraphProperties as ALevel3ParagraphProperties } from '../../../Drawing';
import { Level4ParagraphProperties as ALevel4ParagraphProperties } from '../../../Drawing';
import { Level5ParagraphProperties as ALevel5ParagraphProperties } from '../../../Drawing';
import { Level6ParagraphProperties as ALevel6ParagraphProperties } from '../../../Drawing';
import { Level7ParagraphProperties as ALevel7ParagraphProperties } from '../../../Drawing';
import { Level8ParagraphProperties as ALevel8ParagraphProperties } from '../../../Drawing';
import { Level9ParagraphProperties as ALevel9ParagraphProperties } from '../../../Drawing';
import { ExtensionList as AExtensionList } from '../../../Drawing';
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


/** Defines the TextListStyleType Class. Serialized as `dgm1612:lstStyle` */
export class TextListStyleType extends OxmlCompositeElement<ADefaultParagraphProperties | ALevel1ParagraphProperties | ALevel2ParagraphProperties | ALevel3ParagraphProperties | ALevel4ParagraphProperties | ALevel5ParagraphProperties | ALevel6ParagraphProperties | ALevel7ParagraphProperties | ALevel8ParagraphProperties | ALevel9ParagraphProperties | AExtensionList> {

    public static override _Q = 'dgm1612:lstStyle';
    /** Default Paragraph Style. */
    public get defaultParagraphProperties(): ADefaultParagraphProperties | undefined { return this._f(ADefaultParagraphProperties); }
    /** List Level 1 Text Style. */
    public get level1ParagraphProperties(): ALevel1ParagraphProperties | undefined { return this._f(ALevel1ParagraphProperties); }
    /** List Level 2 Text Style. */
    public get level2ParagraphProperties(): ALevel2ParagraphProperties | undefined { return this._f(ALevel2ParagraphProperties); }
    /** List Level 3 Text Style. */
    public get level3ParagraphProperties(): ALevel3ParagraphProperties | undefined { return this._f(ALevel3ParagraphProperties); }
    /** List Level 4 Text Style. */
    public get level4ParagraphProperties(): ALevel4ParagraphProperties | undefined { return this._f(ALevel4ParagraphProperties); }
    /** List Level 5 Text Style. */
    public get level5ParagraphProperties(): ALevel5ParagraphProperties | undefined { return this._f(ALevel5ParagraphProperties); }
    /** List Level 6 Text Style. */
    public get level6ParagraphProperties(): ALevel6ParagraphProperties | undefined { return this._f(ALevel6ParagraphProperties); }
    /** List Level 7 Text Style. */
    public get level7ParagraphProperties(): ALevel7ParagraphProperties | undefined { return this._f(ALevel7ParagraphProperties); }
    /** List Level 8 Text Style. */
    public get level8ParagraphProperties(): ALevel8ParagraphProperties | undefined { return this._f(ALevel8ParagraphProperties); }
    /** List Level 9 Text Style. */
    public get level9ParagraphProperties(): ALevel9ParagraphProperties | undefined { return this._f(ALevel9ParagraphProperties); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Defines the ShapeProperties Class. Serialized as `dgm1612:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'dgm1612:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}

export function initOffice2019DrawingDiagram12Namespace() {
    TextListStyleType._C = {
        'a:defPPr': ADefaultParagraphProperties,
        'a:lvl1pPr': ALevel1ParagraphProperties,
        'a:lvl2pPr': ALevel2ParagraphProperties,
        'a:lvl3pPr': ALevel3ParagraphProperties,
        'a:lvl4pPr': ALevel4ParagraphProperties,
        'a:lvl5pPr': ALevel5ParagraphProperties,
        'a:lvl6pPr': ALevel6ParagraphProperties,
        'a:lvl7pPr': ALevel7ParagraphProperties,
        'a:lvl8pPr': ALevel8ParagraphProperties,
        'a:lvl9pPr': ALevel9ParagraphProperties,
        'a:extLst': AExtensionList,
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
    return {
        prefix: 'dgm1612',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2016/12/diagram',
    };
}
