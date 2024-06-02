import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { Extension as AExtension } from '../../../Drawing';
import { NonVisualDrawingProperties as WpgNonVisualDrawingProperties } from '../../../Office2010/Word/DrawingGroup';
import { NonVisualGraphicFrameProperties as WpgNonVisualGraphicFrameProperties } from '../../../Office2010/Word/DrawingGroup';
import { Transform2D as WpgTransform2D } from '../../../Office2010/Word/DrawingGroup';
import { Graphic as AGraphic } from '../../../Drawing';
import { OfficeArtExtensionList as WpgOfficeArtExtensionList } from '../../../Office2010/Word/DrawingGroup';
import { Outline as AOutline } from '../../../Drawing';
import { EffectList as AEffectList } from '../../../Drawing';
import { EffectDag as AEffectDag } from '../../../Drawing';
import { NoFill as ANoFill } from '../../../Drawing';
import { SolidFill as ASolidFill } from '../../../Drawing';
import { GradientFill as AGradientFill } from '../../../Drawing';
import { BlipFill as ABlipFill } from '../../../Drawing';
import { PatternFill as APatternFill } from '../../../Drawing';
import { GroupFill as AGroupFill } from '../../../Drawing';
import { WordprocessingShape as WpsWordprocessingShape } from '../../../Office2010/Word/DrawingShape';
import { Picture as PicPicture } from '../../../Drawing/Pictures';
import { ContentPart as W14ContentPart } from '../../../Office2010/Word';
import { WordprocessingGroup as WpgWordprocessingGroup } from '../../../Office2010/Word/DrawingGroup';
/** Defines the OfficeArtExtensionList Class. Serialized as `wpc:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the GraphicFrameType Class. Serialized as `wpc:graphicFrame` */
export declare class GraphicFrameType extends OxmlCompositeElement<WpgNonVisualDrawingProperties | WpgNonVisualGraphicFrameProperties | WpgTransform2D | AGraphic | WpgOfficeArtExtensionList> {
    static _Q: string;
    /** Returns WpgNonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): WpgNonVisualDrawingProperties | undefined;
    /** Returns WpgNonVisualGraphicFrameProperties. */
    get nonVisualGraphicFrameProperties(): WpgNonVisualGraphicFrameProperties | undefined;
    /** Returns WpgTransform2D. */
    get transform2D(): WpgTransform2D | undefined;
    /** Returns AGraphic. */
    get graphic(): AGraphic | undefined;
    /** Returns WpgOfficeArtExtensionList. */
    get officeArtExtensionList(): WpgOfficeArtExtensionList | undefined;
}
/** Defines the WholeFormatting Class. Serialized as `wpc:whole` */
export declare class WholeFormatting extends OxmlCompositeElement<AOutline | AEffectList | AEffectDag> {
    static _Q: string;
    /** Outline. */
    get outline(): AOutline | undefined;
}
/** Defines the BackgroundFormatting Class. Serialized as `wpc:bg` */
export declare class BackgroundFormatting extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag> {
    static _Q: string;
}
/** Defines the WordprocessingCanvas Class. Serialized as `wpc:wpc` */
export declare class WordprocessingCanvas extends OxmlCompositeElement<BackgroundFormatting | WholeFormatting | WpsWordprocessingShape | PicPicture | W14ContentPart | WpgWordprocessingGroup | GraphicFrameType | OfficeArtExtensionList> {
    static _Q: string;
    /** Returns BackgroundFormatting. */
    get backgroundFormatting(): BackgroundFormatting | undefined;
    /** Returns WholeFormatting. */
    get wholeFormatting(): WholeFormatting | undefined;
}
export declare function initOffice2010WordDrawingCanvasNamespace(): {
    prefix: string;
    xmlns: string;
};
