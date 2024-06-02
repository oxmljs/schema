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
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'wpc:extLst';

}
/** Defines the GraphicFrameType Class. Serialized as `wpc:graphicFrame` */
export class GraphicFrameType extends OxmlCompositeElement<WpgNonVisualDrawingProperties | WpgNonVisualGraphicFrameProperties | WpgTransform2D | AGraphic | WpgOfficeArtExtensionList> {

    public static override _Q = 'wpc:graphicFrame';
    /** Returns WpgNonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): WpgNonVisualDrawingProperties | undefined { return this._f(WpgNonVisualDrawingProperties); }
    /** Returns WpgNonVisualGraphicFrameProperties. */
    public get nonVisualGraphicFrameProperties(): WpgNonVisualGraphicFrameProperties | undefined { return this._f(WpgNonVisualGraphicFrameProperties); }
    /** Returns WpgTransform2D. */
    public get transform2D(): WpgTransform2D | undefined { return this._f(WpgTransform2D); }
    /** Returns AGraphic. */
    public get graphic(): AGraphic | undefined { return this._f(AGraphic); }
    /** Returns WpgOfficeArtExtensionList. */
    public get officeArtExtensionList(): WpgOfficeArtExtensionList | undefined { return this._f(WpgOfficeArtExtensionList); }

}
/** Defines the WholeFormatting Class. Serialized as `wpc:whole` */
export class WholeFormatting extends OxmlCompositeElement<AOutline | AEffectList | AEffectDag> {

    public static override _Q = 'wpc:whole';
    /** Outline. */
    public get outline(): AOutline | undefined { return this._f(AOutline); }

}
/** Defines the BackgroundFormatting Class. Serialized as `wpc:bg` */
export class BackgroundFormatting extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag> {

    public static override _Q = 'wpc:bg';

}
/** Defines the WordprocessingCanvas Class. Serialized as `wpc:wpc` */
export class WordprocessingCanvas extends OxmlCompositeElement<BackgroundFormatting | WholeFormatting | WpsWordprocessingShape | PicPicture | W14ContentPart | WpgWordprocessingGroup | GraphicFrameType | OfficeArtExtensionList> {

    public static override _Q = 'wpc:wpc';
    /** Returns BackgroundFormatting. */
    public get backgroundFormatting(): BackgroundFormatting | undefined { return this._f(BackgroundFormatting); }
    /** Returns WholeFormatting. */
    public get wholeFormatting(): WholeFormatting | undefined { return this._f(WholeFormatting); }

}

export function initOffice2010WordDrawingCanvasNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    GraphicFrameType._C = {
        'wpg:cNvPr': WpgNonVisualDrawingProperties,
        'wpg:cNvFrPr': WpgNonVisualGraphicFrameProperties,
        'wpg:xfrm': WpgTransform2D,
        'a:graphic': AGraphic,
        'wpg:extLst': WpgOfficeArtExtensionList,
    };
    WholeFormatting._C = {
        'a:ln': AOutline,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
    };
    BackgroundFormatting._C = {
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
    };
    WordprocessingCanvas._C = {
        'wpc:bg': BackgroundFormatting,
        'wpc:whole': WholeFormatting,
        'wps:wsp': WpsWordprocessingShape,
        'pic:pic': PicPicture,
        'w14:contentPart': W14ContentPart,
        'wpg:wgp': WpgWordprocessingGroup,
        'wpc:graphicFrame': GraphicFrameType,
        'wpc:extLst': OfficeArtExtensionList,
    };
    return {
        prefix: 'wpc',
        xmlns: 'http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas',
    };
}
