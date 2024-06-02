import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { BlackWhiteModeValues } from '../../../Drawing';
import { DefaultParagraphProperties as ADefaultParagraphProperties } from '../../../Drawing';
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
export declare class TextListStyleType extends OxmlCompositeElement<ADefaultParagraphProperties | ALevel1ParagraphProperties | ALevel2ParagraphProperties | ALevel3ParagraphProperties | ALevel4ParagraphProperties | ALevel5ParagraphProperties | ALevel6ParagraphProperties | ALevel7ParagraphProperties | ALevel8ParagraphProperties | ALevel9ParagraphProperties | AExtensionList> {
    static _Q: string;
    /** Default Paragraph Style. */
    get defaultParagraphProperties(): ADefaultParagraphProperties | undefined;
    /** List Level 1 Text Style. */
    get level1ParagraphProperties(): ALevel1ParagraphProperties | undefined;
    /** List Level 2 Text Style. */
    get level2ParagraphProperties(): ALevel2ParagraphProperties | undefined;
    /** List Level 3 Text Style. */
    get level3ParagraphProperties(): ALevel3ParagraphProperties | undefined;
    /** List Level 4 Text Style. */
    get level4ParagraphProperties(): ALevel4ParagraphProperties | undefined;
    /** List Level 5 Text Style. */
    get level5ParagraphProperties(): ALevel5ParagraphProperties | undefined;
    /** List Level 6 Text Style. */
    get level6ParagraphProperties(): ALevel6ParagraphProperties | undefined;
    /** List Level 7 Text Style. */
    get level7ParagraphProperties(): ALevel7ParagraphProperties | undefined;
    /** List Level 8 Text Style. */
    get level8ParagraphProperties(): ALevel8ParagraphProperties | undefined;
    /** List Level 9 Text Style. */
    get level9ParagraphProperties(): ALevel9ParagraphProperties | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Defines the ShapeProperties Class. Serialized as `dgm1612:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
export declare function initOffice2019DrawingDiagram12Namespace(): {
    prefix: string;
    xmlns: string;
};
