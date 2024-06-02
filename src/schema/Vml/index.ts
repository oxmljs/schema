import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';
import { TrueFalseBlankValue } from '../../framework/types/TrueFalseBlankValue';
import { TrueFalseValue } from '../../framework/types/TrueFalseValue';
import { IntegerValue } from '../../framework/types/IntegerValue';
import { SingleValue } from '../../framework/types/SingleValue';
import { Int32Value } from '../../framework/types/Int32Value';
import { Base64BinaryValue } from '../../framework/types/Base64BinaryValue';
import { DecimalValue } from '../../framework/types/DecimalValue';
import { HorizontalRuleAlignmentValues, HorizontalRuleAlignmentValuesArray } from '../Vml/Office';
import { InsetMarginValues, InsetMarginValuesArray } from '../Vml/Office';
import { ConnectorValues, ConnectorValuesArray } from '../Vml/Office';
import { BlackAndWhiteModeValues, BlackAndWhiteModeValuesArray } from '../Vml/Office';
import { ScreenSizeValues, ScreenSizeValuesArray } from '../Vml/Office';
import { ConnectValues, ConnectValuesArray } from '../Vml/Office';import { Skew as OSkew } from '../Vml/Office';
import { Extrusion as OExtrusion } from '../Vml/Office';
import { Callout as OCallout } from '../Vml/Office';
import { Lock as OLock } from '../Vml/Office';
import { ClipPath as OClipPath } from '../Vml/Office';
import { SignatureLine as OSignatureLine } from '../Vml/Office';
import { TextWrap as W10TextWrap } from '../Vml/Wordprocessing';
import { AnchorLock as W10AnchorLock } from '../Vml/Wordprocessing';
import { TopBorder as W10TopBorder } from '../Vml/Wordprocessing';
import { BottomBorder as W10BottomBorder } from '../Vml/Wordprocessing';
import { LeftBorder as W10LeftBorder } from '../Vml/Wordprocessing';
import { RightBorder as W10RightBorder } from '../Vml/Wordprocessing';
import { ClientData as XvmlClientData } from '../Vml/Spreadsheet';
import { TextData as PvmlTextData } from '../Vml/Presentation';
import { Ink as OInk } from '../Vml/Office';
import { Diagram as ODiagram } from '../Vml/Office';
import { Complex as OComplex } from '../Vml/Office';
import { InkAnnotationFlag as PvmlInkAnnotationFlag } from '../Vml/Presentation';
import { TextBoxContent as WTextBoxContent } from '../Wordprocessing';
import { LeftStroke as OLeftStroke } from '../Vml/Office';
import { TopStroke as OTopStroke } from '../Vml/Office';
import { RightStroke as ORightStroke } from '../Vml/Office';
import { BottomStroke as OBottomStroke } from '../Vml/Office';
import { ColumnStroke as OColumnStroke } from '../Vml/Office';
import { FillExtendedProperties as OFillExtendedProperties } from '../Vml/Office';


export enum ExtensionHandlingBehaviorValues {
    /** Not renderable. Serialized value: `view` */
    View = 'view',
    /** Editable. Serialized value: `edit` */
    Edit = 'edit',
    /** Renderable. Serialized value: `backwardCompatible` */
    BackwardCompatible = 'backwardCompatible',
}

export const ExtensionHandlingBehaviorValuesArray = [
    ExtensionHandlingBehaviorValues.View,
    ExtensionHandlingBehaviorValues.Edit,
    ExtensionHandlingBehaviorValues.BackwardCompatible,
] as const;

export enum FillTypeValues {
    /** Solid Fill. Serialized value: `solid` */
    Solid = 'solid',
    /** Linear Gradient. Serialized value: `gradient` */
    Gradient = 'gradient',
    /** Radial Gradient. Serialized value: `gradientRadial` */
    GradientRadial = 'gradientRadial',
    /** Tiled Image. Serialized value: `tile` */
    Tile = 'tile',
    /** Image Pattern. Serialized value: `pattern` */
    Pattern = 'pattern',
    /** Stretch Image to Fit. Serialized value: `frame` */
    Frame = 'frame',
}

export const FillTypeValuesArray = [
    FillTypeValues.Solid,
    FillTypeValues.Gradient,
    FillTypeValues.GradientRadial,
    FillTypeValues.Tile,
    FillTypeValues.Pattern,
    FillTypeValues.Frame,
] as const;

export enum FillMethodValues {
    /** No Gradient Fill. Serialized value: `none` */
    None = 'none',
    /** Linear Fill. Serialized value: `linear` */
    Linear = 'linear',
    /** Sigma Fill. Serialized value: `sigma` */
    Sigma = 'sigma',
    /** Application Default Fill. Serialized value: `any` */
    Any = 'any',
    /** Linear Sigma Fill. Serialized value: `linear sigma` */
    Linearsigma = 'linear sigma',
}

export const FillMethodValuesArray = [
    FillMethodValues.None,
    FillMethodValues.Linear,
    FillMethodValues.Sigma,
    FillMethodValues.Any,
    FillMethodValues.Linearsigma,
] as const;

export enum StrokeLineStyleValues {
    /** Single Line. Serialized value: `single` */
    Single = 'single',
    /** Two Thin Lines. Serialized value: `thinThin` */
    ThinThin = 'thinThin',
    /** Thin Line Outside Thick Line. Serialized value: `thinThick` */
    ThinThick = 'thinThick',
    /** Thick Line Outside Thin Line. Serialized value: `thickThin` */
    ThickThin = 'thickThin',
    /** Thck Line Between Thin Lines. Serialized value: `thickBetweenThin` */
    ThickBetweenThin = 'thickBetweenThin',
}

export const StrokeLineStyleValuesArray = [
    StrokeLineStyleValues.Single,
    StrokeLineStyleValues.ThinThin,
    StrokeLineStyleValues.ThinThick,
    StrokeLineStyleValues.ThickThin,
    StrokeLineStyleValues.ThickBetweenThin,
] as const;

export enum StrokeJoinStyleValues {
    /** Round Joint. Serialized value: `round` */
    Round = 'round',
    /** Bevel Joint. Serialized value: `bevel` */
    Bevel = 'bevel',
    /** Miter Joint. Serialized value: `miter` */
    Miter = 'miter',
}

export const StrokeJoinStyleValuesArray = [
    StrokeJoinStyleValues.Round,
    StrokeJoinStyleValues.Bevel,
    StrokeJoinStyleValues.Miter,
] as const;

export enum StrokeEndCapValues {
    /** Flat End. Serialized value: `flat` */
    Flat = 'flat',
    /** Square End. Serialized value: `square` */
    Square = 'square',
    /** Round End. Serialized value: `round` */
    Round = 'round',
}

export const StrokeEndCapValuesArray = [
    StrokeEndCapValues.Flat,
    StrokeEndCapValues.Square,
    StrokeEndCapValues.Round,
] as const;

export enum StrokeArrowLengthValues {
    /** Short Arrowhead. Serialized value: `short` */
    Short = 'short',
    /** Medium Arrowhead. Serialized value: `medium` */
    Medium = 'medium',
    /** Long Arrowhead. Serialized value: `long` */
    Long = 'long',
}

export const StrokeArrowLengthValuesArray = [
    StrokeArrowLengthValues.Short,
    StrokeArrowLengthValues.Medium,
    StrokeArrowLengthValues.Long,
] as const;

export enum StrokeArrowWidthValues {
    /** Narrow Arrowhead. Serialized value: `narrow` */
    Narrow = 'narrow',
    /** Medium Arrowhead. Serialized value: `medium` */
    Medium = 'medium',
    /** Wide Arrowhead. Serialized value: `wide` */
    Wide = 'wide',
}

export const StrokeArrowWidthValuesArray = [
    StrokeArrowWidthValues.Narrow,
    StrokeArrowWidthValues.Medium,
    StrokeArrowWidthValues.Wide,
] as const;

export enum StrokeArrowValues {
    /** No Arrowhead. Serialized value: `none` */
    None = 'none',
    /** Block Arrowhead. Serialized value: `block` */
    Block = 'block',
    /** Classic Arrowhead. Serialized value: `classic` */
    Classic = 'classic',
    /** Oval Arrowhead. Serialized value: `oval` */
    Oval = 'oval',
    /** Diamond Arrowhead. Serialized value: `diamond` */
    Diamond = 'diamond',
    /** Open Arrowhead. Serialized value: `open` */
    Open = 'open',
}

export const StrokeArrowValuesArray = [
    StrokeArrowValues.None,
    StrokeArrowValues.Block,
    StrokeArrowValues.Classic,
    StrokeArrowValues.Oval,
    StrokeArrowValues.Diamond,
    StrokeArrowValues.Open,
] as const;

export enum ImageAspectValues {
    /** Ignore Aspect Ratio. Serialized value: `ignore` */
    Ignore = 'ignore',
    /** At Most. Serialized value: `atMost` */
    AtMost = 'atMost',
    /** At Least. Serialized value: `atLeast` */
    AtLeast = 'atLeast',
}

export const ImageAspectValuesArray = [
    ImageAspectValues.Ignore,
    ImageAspectValues.AtMost,
    ImageAspectValues.AtLeast,
] as const;

export enum EditAsValues {
    /** Shape Canvas. Serialized value: `canvas` */
    Canvas = 'canvas',
    /** Organization Chart Diagram. Serialized value: `orgchart` */
    OrganizationChart = 'orgchart',
    /** Radial Diagram. Serialized value: `radial` */
    Radial = 'radial',
    /** Cycle Diagram. Serialized value: `cycle` */
    Cycle = 'cycle',
    /** Pyramid Diagram. Serialized value: `stacked` */
    Stacked = 'stacked',
    /** Venn Diagram. Serialized value: `venn` */
    Venn = 'venn',
    /** Bullseye Diagram. Serialized value: `bullseye` */
    Bullseye = 'bullseye',
}

export const EditAsValuesArray = [
    EditAsValues.Canvas,
    EditAsValues.OrganizationChart,
    EditAsValues.Radial,
    EditAsValues.Cycle,
    EditAsValues.Stacked,
    EditAsValues.Venn,
    EditAsValues.Bullseye,
] as const;

export enum ShadowValues {
    /** Single Shadow. Serialized value: `single` */
    Single = 'single',
    /** Double Shadow. Serialized value: `double` */
    Double = 'double',
    /** Embossed Shadow. Serialized value: `emboss` */
    Emboss = 'emboss',
    /** Perspective Shadow. Serialized value: `perspective` */
    Perspective = 'perspective',
    /** undefined. Serialized value: `shapeRelative` */
    ShapeRelative = 'shapeRelative',
    /** undefined. Serialized value: `drawingRelative` */
    DrawingRelative = 'drawingRelative',
}

export const ShadowValuesArray = [
    ShadowValues.Single,
    ShadowValues.Double,
    ShadowValues.Emboss,
    ShadowValues.Perspective,
    ShadowValues.ShapeRelative,
    ShadowValues.DrawingRelative,
] as const;

export enum StrokeFillTypeValues {
    /** undefined. Serialized value: `solid` */
    Solid = 'solid',
    /** undefined. Serialized value: `tile` */
    Tile = 'tile',
    /** undefined. Serialized value: `pattern` */
    Pattern = 'pattern',
    /** undefined. Serialized value: `frame` */
    Frame = 'frame',
}

export const StrokeFillTypeValuesArray = [
    StrokeFillTypeValues.Solid,
    StrokeFillTypeValues.Tile,
    StrokeFillTypeValues.Pattern,
    StrokeFillTypeValues.Frame,
] as const;

/** Single Formula. Serialized as `v:f` */
export class Formula extends OxmlLeafElement {

    public static override _Q = 'v:f';
    public static override _A = [':eqn',];
    /** Equation. Serialized as `:eqn` */
    public get equation(): StringValue | undefined { return this._g(':eqn'); }
    public set equation(v: StringValue | undefined) { this._s(':eqn', v); }

}
/** Shape Handle. Serialized as `v:h` */
export class ShapeHandle extends OxmlLeafElement {

    public static override _Q = 'v:h';
    public static override _A = [':position',':polar',':map',':invx',':invy',':switch',':xrange',':yrange',':radiusrange',];
    /** Handle Position. Serialized as `:position` */
    public get position(): StringValue | undefined { return this._g(':position'); }
    public set position(v: StringValue | undefined) { this._s(':position', v); }
    /** Handle Polar Center. Serialized as `:polar` */
    public get polar(): StringValue | undefined { return this._g(':polar'); }
    public set polar(v: StringValue | undefined) { this._s(':polar', v); }
    /** Handle Coordinate Mapping. Serialized as `:map` */
    public get map(): StringValue | undefined { return this._g(':map'); }
    public set map(v: StringValue | undefined) { this._s(':map', v); }
    /** Invert Handle's X Position. Serialized as `:invx` */
    public get invertX(): TrueFalseBlankValue | undefined { return this._g(':invx'); }
    public set invertX(v: TrueFalseBlankValue | undefined) { this._s(':invx', v); }
    /** Invert Handle's Y Position. Serialized as `:invy` */
    public get invertY(): TrueFalseBlankValue | undefined { return this._g(':invy'); }
    public set invertY(v: TrueFalseBlankValue | undefined) { this._s(':invy', v); }
    /** Handle Inversion Toggle. Serialized as `:switch` */
    public get switch(): TrueFalseBlankValue | undefined { return this._g(':switch'); }
    public set switch(v: TrueFalseBlankValue | undefined) { this._s(':switch', v); }
    /** Handle X Position Range. Serialized as `:xrange` */
    public get xRange(): StringValue | undefined { return this._g(':xrange'); }
    public set xRange(v: StringValue | undefined) { this._s(':xrange', v); }
    /** Handle Y Position Range. Serialized as `:yrange` */
    public get yRange(): StringValue | undefined { return this._g(':yrange'); }
    public set yRange(v: StringValue | undefined) { this._s(':yrange', v); }
    /** Handle Polar Radius Range. Serialized as `:radiusrange` */
    public get radiusRange(): StringValue | undefined { return this._g(':radiusrange'); }
    public set radiusRange(v: StringValue | undefined) { this._s(':radiusrange', v); }

}
/** Rounded Rectangle. Serialized as `v:roundrect` */
export class RoundRectangle extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {

    public static override _Q = 'v:roundrect';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip','o:gfxdata',':arcsize',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** style. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** href. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** class. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** alt. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** coordsize. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** wrapcoords. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** print. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get gfxdata(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set gfxdata(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }
    /** Rounded Corner Arc Size. Serialized as `:arcsize` */
    public get arcSize(): StringValue | undefined { return this._g(':arcsize'); }
    public set arcSize(v: StringValue | undefined) { this._s(':arcsize', v); }

}
/** Rectangle. Serialized as `v:rect` */
export class Rectangle extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {

    public static override _Q = 'v:rect';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':coordorigin',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip','o:gfxdata',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Hyperlink Target. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Hyperlink Display Target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** CSS Reference. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** Shape Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Alternate Text. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** Coordinate Space Size. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    public get coordinateOrigin(): StringValue | undefined { return this._g(':coordorigin'); }
    public set coordinateOrigin(v: StringValue | undefined) { this._s(':coordorigin', v); }
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** Print Toggle. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get gfxdata(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set gfxdata(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }

}
/** Multiple Path Line. Serialized as `v:polyline` */
export class PolyLine extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData | OInk> {

    public static override _Q = 'v:polyline';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':coordorigin',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip','o:gfxdata',':points',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Hyperlink Target. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Hyperlink Display Target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** CSS Reference. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** Shape Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Alternate Text. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** Coordinate Space Size. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    public get coordinateOrigin(): StringValue | undefined { return this._g(':coordorigin'); }
    public set coordinateOrigin(v: StringValue | undefined) { this._s(':coordorigin', v); }
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** Print Toggle. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get gfxdata(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set gfxdata(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }
    /** Points for Compound Line. Serialized as `:points` */
    public get points(): StringValue | undefined { return this._g(':points'); }
    public set points(v: StringValue | undefined) { this._s(':points', v); }

}
/** Oval. Serialized as `v:oval` */
export class Oval extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {

    public static override _Q = 'v:oval';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':coordorigin',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip','o:gfxdata',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Hyperlink Target. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Hyperlink Display Target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** CSS Reference. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** Shape Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Alternate Text. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** Coordinate Space Size. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    public get coordinateOrigin(): StringValue | undefined { return this._g(':coordorigin'); }
    public set coordinateOrigin(v: StringValue | undefined) { this._s(':coordorigin', v); }
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** Print Toggle. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get gfxdata(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set gfxdata(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }

}
/** Line. Serialized as `v:line` */
export class Line extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {

    public static override _Q = 'v:line';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':coordorigin',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip','o:gfxdata',':from',':to',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Hyperlink Target. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Hyperlink Display Target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** CSS Reference. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** Shape Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Alternate Text. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** Coordinate Space Size. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    public get coordinateOrigin(): StringValue | undefined { return this._g(':coordorigin'); }
    public set coordinateOrigin(v: StringValue | undefined) { this._s(':coordorigin', v); }
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** Print Toggle. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get gfxdata(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set gfxdata(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }
    /** Line Start. Serialized as `:from` */
    public get from(): StringValue | undefined { return this._g(':from'); }
    public set from(v: StringValue | undefined) { this._s(':from', v); }
    /** Line End Point. Serialized as `:to` */
    public get to(): StringValue | undefined { return this._g(':to'); }
    public set to(v: StringValue | undefined) { this._s(':to', v); }

}
/** Image File. Serialized as `v:image` */
export class ImageFile extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {

    public static override _Q = 'v:image';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip',':src',':cropleft',':croptop',':cropright',':cropbottom',':gain',':blacklevel',':gamma',':grayscale',':bilevel','o:gfxdata',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** style. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** href. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** class. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** alt. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** coordsize. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** wrapcoords. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** print. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Image Source. Serialized as `:src` */
    public get source(): StringValue | undefined { return this._g(':src'); }
    public set source(v: StringValue | undefined) { this._s(':src', v); }
    /** Image Left Crop. Serialized as `:cropleft` */
    public get cropLeft(): StringValue | undefined { return this._g(':cropleft'); }
    public set cropLeft(v: StringValue | undefined) { this._s(':cropleft', v); }
    /** Image Top Crop. Serialized as `:croptop` */
    public get cropTop(): StringValue | undefined { return this._g(':croptop'); }
    public set cropTop(v: StringValue | undefined) { this._s(':croptop', v); }
    /** Image Right Crop. Serialized as `:cropright` */
    public get cropRight(): StringValue | undefined { return this._g(':cropright'); }
    public set cropRight(v: StringValue | undefined) { this._s(':cropright', v); }
    /** Image Bottom Crop. Serialized as `:cropbottom` */
    public get cropBottom(): StringValue | undefined { return this._g(':cropbottom'); }
    public set cropBottom(v: StringValue | undefined) { this._s(':cropbottom', v); }
    /** Image Intensity. Serialized as `:gain` */
    public get gain(): StringValue | undefined { return this._g(':gain'); }
    public set gain(v: StringValue | undefined) { this._s(':gain', v); }
    /** Image Brightness. Serialized as `:blacklevel` */
    public get blackLevel(): StringValue | undefined { return this._g(':blacklevel'); }
    public set blackLevel(v: StringValue | undefined) { this._s(':blacklevel', v); }
    /** Image Gamma Correction. Serialized as `:gamma` */
    public get gamma(): StringValue | undefined { return this._g(':gamma'); }
    public set gamma(v: StringValue | undefined) { this._s(':gamma', v); }
    /** Image Grayscale Toggle. Serialized as `:grayscale` */
    public get grayScale(): TrueFalseValue | undefined { return this._g(':grayscale'); }
    public set grayScale(v: TrueFalseValue | undefined) { this._s(':grayscale', v); }
    /** Image Bilevel Toggle. Serialized as `:bilevel` */
    public get biLevel(): TrueFalseValue | undefined { return this._g(':bilevel'); }
    public set biLevel(v: TrueFalseValue | undefined) { this._s(':bilevel', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get gfxdata(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set gfxdata(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }

}
/** Bezier Curve. Serialized as `v:curve` */
export class Curve extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {

    public static override _Q = 'v:curve';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':coordorigin',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip','o:gfxdata',':from',':control1',':control2',':to',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Hyperlink Target. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Hyperlink Display Target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** CSS Reference. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** Shape Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Alternate Text. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** Coordinate Space Size. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    public get coordinateOrigin(): StringValue | undefined { return this._g(':coordorigin'); }
    public set coordinateOrigin(v: StringValue | undefined) { this._s(':coordorigin', v); }
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** Print Toggle. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get gfxdata(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set gfxdata(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }
    /** Curve Starting Point. Serialized as `:from` */
    public get from(): StringValue | undefined { return this._g(':from'); }
    public set from(v: StringValue | undefined) { this._s(':from', v); }
    /** First Curve Control Point. Serialized as `:control1` */
    public get control1(): StringValue | undefined { return this._g(':control1'); }
    public set control1(v: StringValue | undefined) { this._s(':control1', v); }
    /** Second Curve Control Point. Serialized as `:control2` */
    public get control2(): StringValue | undefined { return this._g(':control2'); }
    public set control2(v: StringValue | undefined) { this._s(':control2', v); }
    /** Curve Ending Point. Serialized as `:to` */
    public get to(): StringValue | undefined { return this._g(':to'); }
    public set to(v: StringValue | undefined) { this._s(':to', v); }

}
/** Arc Segment. Serialized as `v:arc` */
export class Arc extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {

    public static override _Q = 'v:arc';
    public static override _A = ['o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip','o:gfxdata',':id',':style',':href',':target',':title',':alt',':coordsize',':coordorigin',':wrapcoords',':print',':startangle',':endangle',];
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get gfxdata(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set gfxdata(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Hyperlink Target. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Hyperlink Display Target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** Shape Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Alternate Text. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** Coordinate Space Size. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    public get coordinateOrigin(): StringValue | undefined { return this._g(':coordorigin'); }
    public set coordinateOrigin(v: StringValue | undefined) { this._s(':coordorigin', v); }
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    public get wrapcoords(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapcoords(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** Print Toggle. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Starting Angle. Serialized as `:startangle` */
    public get startAngle(): DecimalValue | undefined { return this._g(':startangle'); }
    public set startAngle(v: DecimalValue | undefined) { this._s(':startangle', v); }
    /** Ending Angle. Serialized as `:endangle` */
    public get endAngle(): DecimalValue | undefined { return this._g(':endangle'); }
    public set endAngle(v: DecimalValue | undefined) { this._s(':endangle', v); }

}
/** Document Background. Serialized as `v:background` */
export class Background extends OxmlCompositeElement<Fill> {

    public static override _Q = 'v:background';
    public static override _A = [':id',':fill',':fillcolor','o:bwmode','o:bwpure','o:bwnormal','o:targetscreensize',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Fill Toggle. Serialized as `:fill` */
    public get filled(): TrueFalseValue | undefined { return this._g(':fill'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':fill', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillcolor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillcolor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Target Screen Size. Serialized as `o:targetscreensize` */
    public get targetScreenSize(): ScreenSizeValues | undefined { return this._g('o:targetscreensize'); }
    public set targetScreenSize(v: ScreenSizeValues | undefined) { this._s('o:targetscreensize', v); }
    /** Returns Fill. */
    public get fill(): Fill | undefined { return this._f(Fill); }

}
/** Shape Group. Serialized as `v:group` */
export class Group extends OxmlCompositeElement<Group | Shape | Shapetype | Arc | Curve | ImageFile | Line | Oval | PolyLine | Rectangle | RoundRectangle | ODiagram | OLock | OClipPath | W10TextWrap | W10AnchorLock | XvmlClientData> {

    public static override _Q = 'v:group';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':coordorigin',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode','o:gfxdata',':editas','o:tableproperties','o:tablelimits',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Hyperlink Target. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Hyperlink Display Target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** CSS Reference. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** Shape Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Alternate Text. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** Coordinate Space Size. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    public get coordinateOrigin(): StringValue | undefined { return this._g(':coordorigin'); }
    public set coordinateOrigin(v: StringValue | undefined) { this._s(':coordorigin', v); }
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** Print Toggle. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** spid. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** oned. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** regroupid. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** doubleclicknotify. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** button. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** userhidden. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** hr. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** hrstd. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** hrnoshade. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** hrpct. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** hralign. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** allowincell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** allowoverlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** userdrawn. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** dgmlayout. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** dgmnodekind. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** dgmlayoutmru. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** insetmode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get gfxdata(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set gfxdata(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }
    /** Group Diagram Type. Serialized as `:editas` */
    public get editAs(): EditAsValues | undefined { return this._g(':editas'); }
    public set editAs(v: EditAsValues | undefined) { this._s(':editas', v); }
    /** Table Properties. Serialized as `o:tableproperties` */
    public get tableProperties(): StringValue | undefined { return this._g('o:tableproperties'); }
    public set tableProperties(v: StringValue | undefined) { this._s('o:tableproperties', v); }
    /** Table Row Height Limits. Serialized as `o:tablelimits` */
    public get tableLimits(): StringValue | undefined { return this._g('o:tablelimits'); }
    public set tableLimits(v: StringValue | undefined) { this._s('o:tablelimits', v); }

}
/** Shape Template. Serialized as `v:shapetype` */
export class Shapetype extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData | OComplex> {

    public static override _Q = 'v:shapetype';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':coordorigin',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip',':adj',':path','o:master',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Hyperlink Target. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Hyperlink Display Target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** CSS Reference. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** Shape Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Alternate Text. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** Coordinate Space Size. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    public get coordinateOrigin(): StringValue | undefined { return this._g(':coordorigin'); }
    public set coordinateOrigin(v: StringValue | undefined) { this._s(':coordorigin', v); }
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** Print Toggle. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Adjustment Parameters. Serialized as `:adj` */
    public get adjustment(): StringValue | undefined { return this._g(':adj'); }
    public set adjustment(v: StringValue | undefined) { this._s(':adj', v); }
    /** Edge Path. Serialized as `:path` */
    public get edgePath(): StringValue | undefined { return this._g(':path'); }
    public set edgePath(v: StringValue | undefined) { this._s(':path', v); }
    /** Master Element Toggle. Serialized as `o:master` */
    public get master(): StringValue | undefined { return this._g('o:master'); }
    public set master(v: StringValue | undefined) { this._s('o:master', v); }

}
/** Shape Definition. Serialized as `v:shape` */
export class Shape extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData | OInk | PvmlInkAnnotationFlag> {

    public static override _Q = 'v:shape';
    public static override _A = [':id',':style',':href',':target',':class',':title',':alt',':coordsize',':coordorigin',':wrapcoords',':print','o:spid','o:oned','o:regroupid','o:doubleclicknotify','o:button','o:userhidden','o:bullet','o:hr','o:hrstd','o:hrnoshade','o:hrpct','o:hralign','o:allowincell','o:allowoverlap','o:userdrawn','o:bordertopcolor','o:borderleftcolor','o:borderbottomcolor','o:borderrightcolor','o:dgmlayout','o:dgmnodekind','o:dgmlayoutmru','o:insetmode',':filled',':fillcolor',':stroked',':strokecolor',':strokeweight',':insetpen','o:spt','o:connectortype','o:bwmode','o:bwpure','o:bwnormal','o:forcedash','o:oleicon','o:ole','o:preferrelative','o:cliptowrap','o:clip',':type',':adj',':path','o:gfxdata',':equationxml',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Hyperlink Target. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Hyperlink Display Target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** CSS Reference. Serialized as `:class` */
    public get class(): StringValue | undefined { return this._g(':class'); }
    public set class(v: StringValue | undefined) { this._s(':class', v); }
    /** Shape Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Alternate Text. Serialized as `:alt` */
    public get alternate(): StringValue | undefined { return this._g(':alt'); }
    public set alternate(v: StringValue | undefined) { this._s(':alt', v); }
    /** Coordinate Space Size. Serialized as `:coordsize` */
    public get coordinateSize(): StringValue | undefined { return this._g(':coordsize'); }
    public set coordinateSize(v: StringValue | undefined) { this._s(':coordsize', v); }
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    public get coordinateOrigin(): StringValue | undefined { return this._g(':coordorigin'); }
    public set coordinateOrigin(v: StringValue | undefined) { this._s(':coordorigin', v); }
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    public get wrapCoordinates(): StringValue | undefined { return this._g(':wrapcoords'); }
    public set wrapCoordinates(v: StringValue | undefined) { this._s(':wrapcoords', v); }
    /** Print Toggle. Serialized as `:print` */
    public get print(): TrueFalseValue | undefined { return this._g(':print'); }
    public set print(v: TrueFalseValue | undefined) { this._s(':print', v); }
    /** Optional String. Serialized as `o:spid` */
    public get optionalString(): StringValue | undefined { return this._g('o:spid'); }
    public set optionalString(v: StringValue | undefined) { this._s('o:spid', v); }
    /** Shape Handle Toggle. Serialized as `o:oned` */
    public get oned(): TrueFalseValue | undefined { return this._g('o:oned'); }
    public set oned(v: TrueFalseValue | undefined) { this._s('o:oned', v); }
    /** Regroup ID. Serialized as `o:regroupid` */
    public get regroupId(): IntegerValue | undefined { return this._g('o:regroupid'); }
    public set regroupId(v: IntegerValue | undefined) { this._s('o:regroupid', v); }
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    public get doubleClickNotify(): TrueFalseValue | undefined { return this._g('o:doubleclicknotify'); }
    public set doubleClickNotify(v: TrueFalseValue | undefined) { this._s('o:doubleclicknotify', v); }
    /** Button Behavior Toggle. Serialized as `o:button` */
    public get button(): TrueFalseValue | undefined { return this._g('o:button'); }
    public set button(v: TrueFalseValue | undefined) { this._s('o:button', v); }
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    public get userHidden(): TrueFalseValue | undefined { return this._g('o:userhidden'); }
    public set userHidden(v: TrueFalseValue | undefined) { this._s('o:userhidden', v); }
    /** Graphical Bullet. Serialized as `o:bullet` */
    public get bullet(): TrueFalseValue | undefined { return this._g('o:bullet'); }
    public set bullet(v: TrueFalseValue | undefined) { this._s('o:bullet', v); }
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    public get horizontal(): TrueFalseValue | undefined { return this._g('o:hr'); }
    public set horizontal(v: TrueFalseValue | undefined) { this._s('o:hr', v); }
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    public get horizontalStandard(): TrueFalseValue | undefined { return this._g('o:hrstd'); }
    public set horizontalStandard(v: TrueFalseValue | undefined) { this._s('o:hrstd', v); }
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    public get horizontalNoShade(): TrueFalseValue | undefined { return this._g('o:hrnoshade'); }
    public set horizontalNoShade(v: TrueFalseValue | undefined) { this._s('o:hrnoshade', v); }
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    public get horizontalPercentage(): SingleValue | undefined { return this._g('o:hrpct'); }
    public set horizontalPercentage(v: SingleValue | undefined) { this._s('o:hrpct', v); }
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    public get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined { return this._g('o:hralign'); }
    public set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined) { this._s('o:hralign', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    public get userDrawn(): TrueFalseValue | undefined { return this._g('o:userdrawn'); }
    public set userDrawn(v: TrueFalseValue | undefined) { this._s('o:userdrawn', v); }
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    public get borderTopColor(): StringValue | undefined { return this._g('o:bordertopcolor'); }
    public set borderTopColor(v: StringValue | undefined) { this._s('o:bordertopcolor', v); }
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    public get borderLeftColor(): StringValue | undefined { return this._g('o:borderleftcolor'); }
    public set borderLeftColor(v: StringValue | undefined) { this._s('o:borderleftcolor', v); }
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    public get borderBottomColor(): StringValue | undefined { return this._g('o:borderbottomcolor'); }
    public set borderBottomColor(v: StringValue | undefined) { this._s('o:borderbottomcolor', v); }
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    public get borderRightColor(): StringValue | undefined { return this._g('o:borderrightcolor'); }
    public set borderRightColor(v: StringValue | undefined) { this._s('o:borderrightcolor', v); }
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    public get diagramLayout(): IntegerValue | undefined { return this._g('o:dgmlayout'); }
    public set diagramLayout(v: IntegerValue | undefined) { this._s('o:dgmlayout', v); }
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    public get diagramNodeKind(): IntegerValue | undefined { return this._g('o:dgmnodekind'); }
    public set diagramNodeKind(v: IntegerValue | undefined) { this._s('o:dgmnodekind', v); }
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    public get diagramLayoutMostRecentUsed(): IntegerValue | undefined { return this._g('o:dgmlayoutmru'); }
    public set diagramLayoutMostRecentUsed(v: IntegerValue | undefined) { this._s('o:dgmlayoutmru', v); }
    /** Text Inset Mode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Shape Fill Toggle. Serialized as `:filled` */
    public get filled(): TrueFalseValue | undefined { return this._g(':filled'); }
    public set filled(v: TrueFalseValue | undefined) { this._s(':filled', v); }
    /** Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    public get stroked(): TrueFalseValue | undefined { return this._g(':stroked'); }
    public set stroked(v: TrueFalseValue | undefined) { this._s(':stroked', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    public get strokeWeight(): StringValue | undefined { return this._g(':strokeweight'); }
    public set strokeWeight(v: StringValue | undefined) { this._s(':strokeweight', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Optional Number. Serialized as `o:spt` */
    public get optionalNumber(): Int32Value | undefined { return this._g('o:spt'); }
    public set optionalNumber(v: Int32Value | undefined) { this._s('o:spt', v); }
    /** Shape Connector Type. Serialized as `o:connectortype` */
    public get connectorType(): ConnectorValues | undefined { return this._g('o:connectortype'); }
    public set connectorType(v: ConnectorValues | undefined) { this._s('o:connectortype', v); }
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    public get blackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwmode'); }
    public set blackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwmode', v); }
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    public get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwpure'); }
    public set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwpure', v); }
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    public get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined { return this._g('o:bwnormal'); }
    public set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined) { this._s('o:bwnormal', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    public get oleIcon(): TrueFalseValue | undefined { return this._g('o:oleicon'); }
    public set oleIcon(v: TrueFalseValue | undefined) { this._s('o:oleicon', v); }
    /** Embedded Object Toggle. Serialized as `o:ole` */
    public get ole(): TrueFalseBlankValue | undefined { return this._g('o:ole'); }
    public set ole(v: TrueFalseBlankValue | undefined) { this._s('o:ole', v); }
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    public get preferRelative(): TrueFalseValue | undefined { return this._g('o:preferrelative'); }
    public set preferRelative(v: TrueFalseValue | undefined) { this._s('o:preferrelative', v); }
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    public get clipToWrap(): TrueFalseValue | undefined { return this._g('o:cliptowrap'); }
    public set clipToWrap(v: TrueFalseValue | undefined) { this._s('o:cliptowrap', v); }
    /** Clipping Toggle. Serialized as `o:clip` */
    public get clip(): TrueFalseValue | undefined { return this._g('o:clip'); }
    public set clip(v: TrueFalseValue | undefined) { this._s('o:clip', v); }
    /** Shape Type Reference. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** Adjustment Parameters. Serialized as `:adj` */
    public get adjustment(): StringValue | undefined { return this._g(':adj'); }
    public set adjustment(v: StringValue | undefined) { this._s(':adj', v); }
    /** Edge Path. Serialized as `:path` */
    public get edgePath(): StringValue | undefined { return this._g(':path'); }
    public set edgePath(v: StringValue | undefined) { this._s(':path', v); }
    /** Encoded Package. Serialized as `o:gfxdata` */
    public get encodedPackage(): Base64BinaryValue | undefined { return this._g('o:gfxdata'); }
    public set encodedPackage(v: Base64BinaryValue | undefined) { this._s('o:gfxdata', v); }
    /** Storage for Alternate Math Content. Serialized as `:equationxml` */
    public get equationXml(): StringValue | undefined { return this._g(':equationxml'); }
    public set equationXml(v: StringValue | undefined) { this._s(':equationxml', v); }

}
/** Defines the ImageData Class. Serialized as `v:imagedata` */
export class ImageData extends OxmlLeafElement {

    public static override _Q = 'v:imagedata';
    public static override _A = [':id',':chromakey',':cropleft',':croptop',':cropright',':cropbottom',':gain',':blacklevel',':gamma',':grayscale',':bilevel',':embosscolor',':recolortarget','o:title','o:detectmouseclick','o:relid','r:id','r:pict','r:href',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Image Transparency Color. Serialized as `:chromakey` */
    public get chromAKey(): StringValue | undefined { return this._g(':chromakey'); }
    public set chromAKey(v: StringValue | undefined) { this._s(':chromakey', v); }
    /** Image Left Crop. Serialized as `:cropleft` */
    public get cropLeft(): StringValue | undefined { return this._g(':cropleft'); }
    public set cropLeft(v: StringValue | undefined) { this._s(':cropleft', v); }
    /** Image Top Crop. Serialized as `:croptop` */
    public get cropTop(): StringValue | undefined { return this._g(':croptop'); }
    public set cropTop(v: StringValue | undefined) { this._s(':croptop', v); }
    /** Image Right Crop. Serialized as `:cropright` */
    public get cropRight(): StringValue | undefined { return this._g(':cropright'); }
    public set cropRight(v: StringValue | undefined) { this._s(':cropright', v); }
    /** Image Bottom Crop. Serialized as `:cropbottom` */
    public get cropBottom(): StringValue | undefined { return this._g(':cropbottom'); }
    public set cropBottom(v: StringValue | undefined) { this._s(':cropbottom', v); }
    /** Image Intensity. Serialized as `:gain` */
    public get gain(): StringValue | undefined { return this._g(':gain'); }
    public set gain(v: StringValue | undefined) { this._s(':gain', v); }
    /** Image Brightness. Serialized as `:blacklevel` */
    public get blackLevel(): StringValue | undefined { return this._g(':blacklevel'); }
    public set blackLevel(v: StringValue | undefined) { this._s(':blacklevel', v); }
    /** Image Gamma Correction. Serialized as `:gamma` */
    public get gamma(): StringValue | undefined { return this._g(':gamma'); }
    public set gamma(v: StringValue | undefined) { this._s(':gamma', v); }
    /** Image Grayscale Toggle. Serialized as `:grayscale` */
    public get grayscale(): TrueFalseValue | undefined { return this._g(':grayscale'); }
    public set grayscale(v: TrueFalseValue | undefined) { this._s(':grayscale', v); }
    /** Image Bilevel Toggle. Serialized as `:bilevel` */
    public get biLevel(): TrueFalseValue | undefined { return this._g(':bilevel'); }
    public set biLevel(v: TrueFalseValue | undefined) { this._s(':bilevel', v); }
    /** Embossed Color. Serialized as `:embosscolor` */
    public get embossColor(): StringValue | undefined { return this._g(':embosscolor'); }
    public set embossColor(v: StringValue | undefined) { this._s(':embosscolor', v); }
    /** Black Recoloring Color. Serialized as `:recolortarget` */
    public get recolorTarget(): StringValue | undefined { return this._g(':recolortarget'); }
    public set recolorTarget(v: StringValue | undefined) { this._s(':recolortarget', v); }
    /** Image Data Title. Serialized as `o:title` */
    public get title(): StringValue | undefined { return this._g('o:title'); }
    public set title(v: StringValue | undefined) { this._s('o:title', v); }
    /** Detect Mouse Click. Serialized as `o:detectmouseclick` */
    public get detectMouseClick(): TrueFalseValue | undefined { return this._g('o:detectmouseclick'); }
    public set detectMouseClick(v: TrueFalseValue | undefined) { this._s('o:detectmouseclick', v); }
    /** Relationship to Part. Serialized as `o:relid` */
    public get relId(): StringValue | undefined { return this._g('o:relid'); }
    public set relId(v: StringValue | undefined) { this._s('o:relid', v); }
    /** Explicit Relationship to Image Data. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** Explicit Relationship to Alternate Image Data. Serialized as `r:pict` */
    public get picture(): StringValue | undefined { return this._g('r:pict'); }
    public set picture(v: StringValue | undefined) { this._s('r:pict', v); }
    /** Explicit Relationship to Hyperlink Target. Serialized as `r:href` */
    public get relHref(): StringValue | undefined { return this._g('r:href'); }
    public set relHref(v: StringValue | undefined) { this._s('r:href', v); }

}
/** Defines the TextPath Class. Serialized as `v:textpath` */
export class TextPath extends OxmlLeafElement {

    public static override _Q = 'v:textpath';
    public static override _A = [':id',':style',':on',':fitshape',':fitpath',':trim',':xscale',':string',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Text Path Toggle. Serialized as `:on` */
    public get on(): TrueFalseValue | undefined { return this._g(':on'); }
    public set on(v: TrueFalseValue | undefined) { this._s(':on', v); }
    /** Shape Fit Toggle. Serialized as `:fitshape` */
    public get fitShape(): TrueFalseValue | undefined { return this._g(':fitshape'); }
    public set fitShape(v: TrueFalseValue | undefined) { this._s(':fitshape', v); }
    /** Path Fit Toggle. Serialized as `:fitpath` */
    public get fitPath(): TrueFalseValue | undefined { return this._g(':fitpath'); }
    public set fitPath(v: TrueFalseValue | undefined) { this._s(':fitpath', v); }
    /** Text Path Trim Toggle. Serialized as `:trim` */
    public get trim(): TrueFalseValue | undefined { return this._g(':trim'); }
    public set trim(v: TrueFalseValue | undefined) { this._s(':trim', v); }
    /** Text X-Scaling. Serialized as `:xscale` */
    public get xScale(): TrueFalseValue | undefined { return this._g(':xscale'); }
    public set xScale(v: TrueFalseValue | undefined) { this._s(':xscale', v); }
    /** Text Path Text. Serialized as `:string` */
    public get string(): StringValue | undefined { return this._g(':string'); }
    public set string(v: StringValue | undefined) { this._s(':string', v); }

}
/** Defines the TextBox Class. Serialized as `v:textbox` */
export class TextBox extends OxmlCompositeElement<WTextBoxContent> {

    public static override _Q = 'v:textbox';
    public static override _A = [':id',':style',':inset','o:singleclick',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shape Styling Properties. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Text Box Inset. Serialized as `:inset` */
    public get inset(): StringValue | undefined { return this._g(':inset'); }
    public set inset(v: StringValue | undefined) { this._s(':inset', v); }
    /** Text Box Single-Click Selection Toggle. Serialized as `o:singleclick` */
    public get singleClick(): TrueFalseValue | undefined { return this._g('o:singleclick'); }
    public set singleClick(v: TrueFalseValue | undefined) { this._s('o:singleclick', v); }

}
/** Defines the Shadow Class. Serialized as `v:shadow` */
export class Shadow extends OxmlLeafElement {

    public static override _Q = 'v:shadow';
    public static override _A = [':id',':on',':type',':obscured',':color',':opacity',':offset',':color2',':offset2',':origin',':matrix',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Shadow Toggle. Serialized as `:on` */
    public get on(): TrueFalseValue | undefined { return this._g(':on'); }
    public set on(v: TrueFalseValue | undefined) { this._s(':on', v); }
    /** Shadow Type. Serialized as `:type` */
    public get type(): ShadowValues | undefined { return this._g(':type'); }
    public set type(v: ShadowValues | undefined) { this._s(':type', v); }
    /** Shadow Transparency. Serialized as `:obscured` */
    public get obscured(): TrueFalseValue | undefined { return this._g(':obscured'); }
    public set obscured(v: TrueFalseValue | undefined) { this._s(':obscured', v); }
    /** Shadow Primary Color. Serialized as `:color` */
    public get color(): StringValue | undefined { return this._g(':color'); }
    public set color(v: StringValue | undefined) { this._s(':color', v); }
    /** Shadow Opacity. Serialized as `:opacity` */
    public get opacity(): StringValue | undefined { return this._g(':opacity'); }
    public set opacity(v: StringValue | undefined) { this._s(':opacity', v); }
    /** Shadow Primary Offset. Serialized as `:offset` */
    public get offset(): StringValue | undefined { return this._g(':offset'); }
    public set offset(v: StringValue | undefined) { this._s(':offset', v); }
    /** Shadow Secondary Color. Serialized as `:color2` */
    public get color2(): StringValue | undefined { return this._g(':color2'); }
    public set color2(v: StringValue | undefined) { this._s(':color2', v); }
    /** Shadow Secondary Offset. Serialized as `:offset2` */
    public get offset2(): StringValue | undefined { return this._g(':offset2'); }
    public set offset2(v: StringValue | undefined) { this._s(':offset2', v); }
    /** Shadow Origin. Serialized as `:origin` */
    public get origin(): StringValue | undefined { return this._g(':origin'); }
    public set origin(v: StringValue | undefined) { this._s(':origin', v); }
    /** Shadow Perspective Matrix. Serialized as `:matrix` */
    public get matrix(): StringValue | undefined { return this._g(':matrix'); }
    public set matrix(v: StringValue | undefined) { this._s(':matrix', v); }

}
/** Defines the Stroke Class. Serialized as `v:stroke` */
export class Stroke extends OxmlCompositeElement<OLeftStroke | OTopStroke | ORightStroke | OBottomStroke | OColumnStroke> {

    public static override _Q = 'v:stroke';
    public static override _A = [':id',':on',':weight',':color',':opacity',':linestyle',':miterlimit',':joinstyle',':endcap',':dashstyle',':filltype',':src',':imageaspect',':imagesize',':imagealignshape',':color2',':startarrow',':startarrowwidth',':startarrowlength',':endarrow',':endarrowwidth',':endarrowlength','o:href','o:althref','o:title','o:forcedash','r:id',':insetpen',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Stroke Toggle. Serialized as `:on` */
    public get on(): TrueFalseValue | undefined { return this._g(':on'); }
    public set on(v: TrueFalseValue | undefined) { this._s(':on', v); }
    /** Stroke Weight. Serialized as `:weight` */
    public get weight(): StringValue | undefined { return this._g(':weight'); }
    public set weight(v: StringValue | undefined) { this._s(':weight', v); }
    /** Stroke Color. Serialized as `:color` */
    public get color(): StringValue | undefined { return this._g(':color'); }
    public set color(v: StringValue | undefined) { this._s(':color', v); }
    /** Stroke Opacity. Serialized as `:opacity` */
    public get opacity(): StringValue | undefined { return this._g(':opacity'); }
    public set opacity(v: StringValue | undefined) { this._s(':opacity', v); }
    /** Stroke Line Style. Serialized as `:linestyle` */
    public get lineStyle(): StrokeLineStyleValues | undefined { return this._g(':linestyle'); }
    public set lineStyle(v: StrokeLineStyleValues | undefined) { this._s(':linestyle', v); }
    /** Miter Joint Limit. Serialized as `:miterlimit` */
    public get miterlimit(): StringValue | undefined { return this._g(':miterlimit'); }
    public set miterlimit(v: StringValue | undefined) { this._s(':miterlimit', v); }
    /** Line End Join Style. Serialized as `:joinstyle` */
    public get joinStyle(): StrokeJoinStyleValues | undefined { return this._g(':joinstyle'); }
    public set joinStyle(v: StrokeJoinStyleValues | undefined) { this._s(':joinstyle', v); }
    /** Line End Cap. Serialized as `:endcap` */
    public get endCap(): StrokeEndCapValues | undefined { return this._g(':endcap'); }
    public set endCap(v: StrokeEndCapValues | undefined) { this._s(':endcap', v); }
    /** Stroke Dash Pattern. Serialized as `:dashstyle` */
    public get dashStyle(): StringValue | undefined { return this._g(':dashstyle'); }
    public set dashStyle(v: StringValue | undefined) { this._s(':dashstyle', v); }
    /** Stroke Image Style. Serialized as `:filltype` */
    public get fillType(): StrokeFillTypeValues | undefined { return this._g(':filltype'); }
    public set fillType(v: StrokeFillTypeValues | undefined) { this._s(':filltype', v); }
    /** Stroke Image Location. Serialized as `:src` */
    public get source(): StringValue | undefined { return this._g(':src'); }
    public set source(v: StringValue | undefined) { this._s(':src', v); }
    /** Stroke Image Aspect Ratio. Serialized as `:imageaspect` */
    public get imageAspect(): ImageAspectValues | undefined { return this._g(':imageaspect'); }
    public set imageAspect(v: ImageAspectValues | undefined) { this._s(':imageaspect', v); }
    /** Stroke Image Size. Serialized as `:imagesize` */
    public get imageSize(): StringValue | undefined { return this._g(':imagesize'); }
    public set imageSize(v: StringValue | undefined) { this._s(':imagesize', v); }
    /** Stoke Image Alignment. Serialized as `:imagealignshape` */
    public get imageAlignShape(): TrueFalseValue | undefined { return this._g(':imagealignshape'); }
    public set imageAlignShape(v: TrueFalseValue | undefined) { this._s(':imagealignshape', v); }
    /** Stroke Alternate Pattern Color. Serialized as `:color2` */
    public get color2(): StringValue | undefined { return this._g(':color2'); }
    public set color2(v: StringValue | undefined) { this._s(':color2', v); }
    /** Line Start Arrowhead. Serialized as `:startarrow` */
    public get startArrow(): StrokeArrowValues | undefined { return this._g(':startarrow'); }
    public set startArrow(v: StrokeArrowValues | undefined) { this._s(':startarrow', v); }
    /** Line Start Arrowhead Width. Serialized as `:startarrowwidth` */
    public get startArrowWidth(): StrokeArrowWidthValues | undefined { return this._g(':startarrowwidth'); }
    public set startArrowWidth(v: StrokeArrowWidthValues | undefined) { this._s(':startarrowwidth', v); }
    /** Line Start Arrowhead Length. Serialized as `:startarrowlength` */
    public get startArrowLength(): StrokeArrowLengthValues | undefined { return this._g(':startarrowlength'); }
    public set startArrowLength(v: StrokeArrowLengthValues | undefined) { this._s(':startarrowlength', v); }
    /** Line End Arrowhead. Serialized as `:endarrow` */
    public get endArrow(): StrokeArrowValues | undefined { return this._g(':endarrow'); }
    public set endArrow(v: StrokeArrowValues | undefined) { this._s(':endarrow', v); }
    /** Line End Arrowhead Width. Serialized as `:endarrowwidth` */
    public get endArrowWidth(): StrokeArrowWidthValues | undefined { return this._g(':endarrowwidth'); }
    public set endArrowWidth(v: StrokeArrowWidthValues | undefined) { this._s(':endarrowwidth', v); }
    /** Line End Arrowhead Length. Serialized as `:endarrowlength` */
    public get endArrowLength(): StrokeArrowLengthValues | undefined { return this._g(':endarrowlength'); }
    public set endArrowLength(v: StrokeArrowLengthValues | undefined) { this._s(':endarrowlength', v); }
    /** Original Image Reference. Serialized as `o:href` */
    public get href(): StringValue | undefined { return this._g('o:href'); }
    public set href(v: StringValue | undefined) { this._s('o:href', v); }
    /** Alternate Image Reference. Serialized as `o:althref` */
    public get alternateImageReference(): StringValue | undefined { return this._g('o:althref'); }
    public set alternateImageReference(v: StringValue | undefined) { this._s('o:althref', v); }
    /** Stroke Title. Serialized as `o:title` */
    public get title(): StringValue | undefined { return this._g('o:title'); }
    public set title(v: StringValue | undefined) { this._s('o:title', v); }
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    public get forceDash(): TrueFalseValue | undefined { return this._g('o:forcedash'); }
    public set forceDash(v: TrueFalseValue | undefined) { this._s('o:forcedash', v); }
    /** Relationship. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetpen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetpen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Returns OLeftStroke. */
    public get leftStroke(): OLeftStroke | undefined { return this._f(OLeftStroke); }
    /** Returns OTopStroke. */
    public get topStroke(): OTopStroke | undefined { return this._f(OTopStroke); }
    /** Returns ORightStroke. */
    public get rightStroke(): ORightStroke | undefined { return this._f(ORightStroke); }
    /** Returns OBottomStroke. */
    public get bottomStroke(): OBottomStroke | undefined { return this._f(OBottomStroke); }
    /** Returns OColumnStroke. */
    public get columnStroke(): OColumnStroke | undefined { return this._f(OColumnStroke); }

}
/** Defines the Fill Class. Serialized as `v:fill` */
export class Fill extends OxmlCompositeElement<OFillExtendedProperties> {

    public static override _Q = 'v:fill';
    public static override _A = [':id',':type',':on',':color',':opacity',':color2',':src','o:href','o:althref',':size',':origin',':position',':aspect',':colors',':angle',':alignshape',':focus',':focussize',':focusposition',':method','o:detectmouseclick','o:title','o:opacity2',':recolor',':rotate','r:id',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Fill Type. Serialized as `:type` */
    public get type(): FillTypeValues | undefined { return this._g(':type'); }
    public set type(v: FillTypeValues | undefined) { this._s(':type', v); }
    /** Fill Toggle. Serialized as `:on` */
    public get on(): TrueFalseValue | undefined { return this._g(':on'); }
    public set on(v: TrueFalseValue | undefined) { this._s(':on', v); }
    /** Primary Color. Serialized as `:color` */
    public get color(): StringValue | undefined { return this._g(':color'); }
    public set color(v: StringValue | undefined) { this._s(':color', v); }
    /** Primary Color Opacity. Serialized as `:opacity` */
    public get opacity(): StringValue | undefined { return this._g(':opacity'); }
    public set opacity(v: StringValue | undefined) { this._s(':opacity', v); }
    /** Secondary Color. Serialized as `:color2` */
    public get color2(): StringValue | undefined { return this._g(':color2'); }
    public set color2(v: StringValue | undefined) { this._s(':color2', v); }
    /** Fill Image Source. Serialized as `:src` */
    public get source(): StringValue | undefined { return this._g(':src'); }
    public set source(v: StringValue | undefined) { this._s(':src', v); }
    /** Hyperlink Target. Serialized as `o:href` */
    public get href(): StringValue | undefined { return this._g('o:href'); }
    public set href(v: StringValue | undefined) { this._s('o:href', v); }
    /** Alternate Image Reference Location. Serialized as `o:althref` */
    public get alternateImageReference(): StringValue | undefined { return this._g('o:althref'); }
    public set alternateImageReference(v: StringValue | undefined) { this._s('o:althref', v); }
    /** Fill Image Size. Serialized as `:size` */
    public get size(): StringValue | undefined { return this._g(':size'); }
    public set size(v: StringValue | undefined) { this._s(':size', v); }
    /** Fill Image Origin. Serialized as `:origin` */
    public get origin(): StringValue | undefined { return this._g(':origin'); }
    public set origin(v: StringValue | undefined) { this._s(':origin', v); }
    /** Fill Image Position. Serialized as `:position` */
    public get position(): StringValue | undefined { return this._g(':position'); }
    public set position(v: StringValue | undefined) { this._s(':position', v); }
    /** Image Aspect Ratio. Serialized as `:aspect` */
    public get aspect(): ImageAspectValues | undefined { return this._g(':aspect'); }
    public set aspect(v: ImageAspectValues | undefined) { this._s(':aspect', v); }
    /** Intermediate Colors. Serialized as `:colors` */
    public get colors(): StringValue | undefined { return this._g(':colors'); }
    public set colors(v: StringValue | undefined) { this._s(':colors', v); }
    /** Gradient Angle. Serialized as `:angle` */
    public get angle(): DecimalValue | undefined { return this._g(':angle'); }
    public set angle(v: DecimalValue | undefined) { this._s(':angle', v); }
    /** Align Image With Shape. Serialized as `:alignshape` */
    public get alignShape(): TrueFalseValue | undefined { return this._g(':alignshape'); }
    public set alignShape(v: TrueFalseValue | undefined) { this._s(':alignshape', v); }
    /** Gradient Center. Serialized as `:focus` */
    public get focus(): StringValue | undefined { return this._g(':focus'); }
    public set focus(v: StringValue | undefined) { this._s(':focus', v); }
    /** Radial Gradient Size. Serialized as `:focussize` */
    public get focusSize(): StringValue | undefined { return this._g(':focussize'); }
    public set focusSize(v: StringValue | undefined) { this._s(':focussize', v); }
    /** Radial Gradient Center. Serialized as `:focusposition` */
    public get focusPosition(): StringValue | undefined { return this._g(':focusposition'); }
    public set focusPosition(v: StringValue | undefined) { this._s(':focusposition', v); }
    /** Gradient Fill Method. Serialized as `:method` */
    public get method(): FillMethodValues | undefined { return this._g(':method'); }
    public set method(v: FillMethodValues | undefined) { this._s(':method', v); }
    /** Detect Mouse Click. Serialized as `o:detectmouseclick` */
    public get detectMouseClick(): TrueFalseValue | undefined { return this._g('o:detectmouseclick'); }
    public set detectMouseClick(v: TrueFalseValue | undefined) { this._s('o:detectmouseclick', v); }
    /** Title. Serialized as `o:title` */
    public get title(): StringValue | undefined { return this._g('o:title'); }
    public set title(v: StringValue | undefined) { this._s('o:title', v); }
    /** Secondary Color Opacity. Serialized as `o:opacity2` */
    public get opacity2(): StringValue | undefined { return this._g('o:opacity2'); }
    public set opacity2(v: StringValue | undefined) { this._s('o:opacity2', v); }
    /** Recolor Fill as Picture. Serialized as `:recolor` */
    public get recolor(): TrueFalseValue | undefined { return this._g(':recolor'); }
    public set recolor(v: TrueFalseValue | undefined) { this._s(':recolor', v); }
    /** Rotate Fill with Shape. Serialized as `:rotate` */
    public get rotate(): TrueFalseValue | undefined { return this._g(':rotate'); }
    public set rotate(v: TrueFalseValue | undefined) { this._s(':rotate', v); }
    /** Relationship to Part. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns OFillExtendedProperties. */
    public get fillExtendedProperties(): OFillExtendedProperties | undefined { return this._f(OFillExtendedProperties); }

}
/** Defines the ShapeHandles Class. Serialized as `v:handles` */
export class ShapeHandles extends OxmlCompositeElement<ShapeHandle> {

    public static override _Q = 'v:handles';

}
/** Defines the Formulas Class. Serialized as `v:formulas` */
export class Formulas extends OxmlCompositeElement<Formula> {

    public static override _Q = 'v:formulas';

}
/** Defines the Path Class. Serialized as `v:path` */
export class Path extends OxmlLeafElement {

    public static override _Q = 'v:path';
    public static override _A = [':id',':v',':limo',':textboxrect',':fillok',':strokeok',':shadowok',':arrowok',':gradientshapeok',':textpathok',':insetpenok','o:connecttype','o:connectlocs','o:connectangles','o:extrusionok',];
    /** Unique Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Path Definition. Serialized as `:v` */
    public get value(): StringValue | undefined { return this._g(':v'); }
    public set value(v: StringValue | undefined) { this._s(':v', v); }
    /** Limo Stretch Point. Serialized as `:limo` */
    public get limo(): StringValue | undefined { return this._g(':limo'); }
    public set limo(v: StringValue | undefined) { this._s(':limo', v); }
    /** Text Box Bounding Box. Serialized as `:textboxrect` */
    public get textboxRectangle(): StringValue | undefined { return this._g(':textboxrect'); }
    public set textboxRectangle(v: StringValue | undefined) { this._s(':textboxrect', v); }
    /** Shape Fill Toggle. Serialized as `:fillok` */
    public get allowFill(): TrueFalseValue | undefined { return this._g(':fillok'); }
    public set allowFill(v: TrueFalseValue | undefined) { this._s(':fillok', v); }
    /** Stroke Toggle. Serialized as `:strokeok` */
    public get allowStroke(): TrueFalseValue | undefined { return this._g(':strokeok'); }
    public set allowStroke(v: TrueFalseValue | undefined) { this._s(':strokeok', v); }
    /** Shadow Toggle. Serialized as `:shadowok` */
    public get allowShading(): TrueFalseValue | undefined { return this._g(':shadowok'); }
    public set allowShading(v: TrueFalseValue | undefined) { this._s(':shadowok', v); }
    /** Arrowhead Display Toggle. Serialized as `:arrowok` */
    public get showArrowhead(): TrueFalseValue | undefined { return this._g(':arrowok'); }
    public set showArrowhead(v: TrueFalseValue | undefined) { this._s(':arrowok', v); }
    /** Gradient Shape Toggle. Serialized as `:gradientshapeok` */
    public get allowGradientShape(): TrueFalseValue | undefined { return this._g(':gradientshapeok'); }
    public set allowGradientShape(v: TrueFalseValue | undefined) { this._s(':gradientshapeok', v); }
    /** Text Path Toggle. Serialized as `:textpathok` */
    public get allowTextPath(): TrueFalseValue | undefined { return this._g(':textpathok'); }
    public set allowTextPath(v: TrueFalseValue | undefined) { this._s(':textpathok', v); }
    /** Inset Stroke From Path Flag. Serialized as `:insetpenok` */
    public get allowInsetPen(): TrueFalseValue | undefined { return this._g(':insetpenok'); }
    public set allowInsetPen(v: TrueFalseValue | undefined) { this._s(':insetpenok', v); }
    /** Connection Point Type. Serialized as `o:connecttype` */
    public get connectionPointType(): ConnectValues | undefined { return this._g('o:connecttype'); }
    public set connectionPointType(v: ConnectValues | undefined) { this._s('o:connecttype', v); }
    /** Connection Points. Serialized as `o:connectlocs` */
    public get connectionPoints(): StringValue | undefined { return this._g('o:connectlocs'); }
    public set connectionPoints(v: StringValue | undefined) { this._s('o:connectlocs', v); }
    /** Connection Point Connect Angles. Serialized as `o:connectangles` */
    public get connectAngles(): StringValue | undefined { return this._g('o:connectangles'); }
    public set connectAngles(v: StringValue | undefined) { this._s('o:connectangles', v); }
    /** Extrusion Toggle. Serialized as `o:extrusionok` */
    public get allowExtrusion(): TrueFalseValue | undefined { return this._g('o:extrusionok'); }
    public set allowExtrusion(v: TrueFalseValue | undefined) { this._s('o:extrusionok', v); }

}

export function initVmlNamespace() {
    Formula._D = {
        ':eqn': new OxmlAttr(':eqn', OxmlType.StringValue),
    };
    ShapeHandle._D = {
        ':position': new OxmlAttr(':position', OxmlType.StringValue),
        ':polar': new OxmlAttr(':polar', OxmlType.StringValue),
        ':map': new OxmlAttr(':map', OxmlType.StringValue),
        ':invx': new OxmlAttr(':invx', OxmlType.TrueFalseBlankValue),
        ':invy': new OxmlAttr(':invy', OxmlType.TrueFalseBlankValue),
        ':switch': new OxmlAttr(':switch', OxmlType.TrueFalseBlankValue),
        ':xrange': new OxmlAttr(':xrange', OxmlType.StringValue),
        ':yrange': new OxmlAttr(':yrange', OxmlType.StringValue),
        ':radiusrange': new OxmlAttr(':radiusrange', OxmlType.StringValue),
    };
    RoundRectangle._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
    };
    RoundRectangle._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
        ':arcsize': new OxmlAttr(':arcsize', OxmlType.StringValue),
    };
    Rectangle._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
    };
    Rectangle._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':coordorigin': new OxmlAttr(':coordorigin', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
    };
    PolyLine._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
        'o:ink': OInk,
    };
    PolyLine._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':coordorigin': new OxmlAttr(':coordorigin', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
        ':points': new OxmlAttr(':points', OxmlType.StringValue),
    };
    Oval._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
    };
    Oval._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':coordorigin': new OxmlAttr(':coordorigin', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
    };
    Line._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
    };
    Line._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':coordorigin': new OxmlAttr(':coordorigin', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
        ':from': new OxmlAttr(':from', OxmlType.StringValue),
        ':to': new OxmlAttr(':to', OxmlType.StringValue),
    };
    ImageFile._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
    };
    ImageFile._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        ':src': new OxmlAttr(':src', OxmlType.StringValue),
        ':cropleft': new OxmlAttr(':cropleft', OxmlType.StringValue),
        ':croptop': new OxmlAttr(':croptop', OxmlType.StringValue),
        ':cropright': new OxmlAttr(':cropright', OxmlType.StringValue),
        ':cropbottom': new OxmlAttr(':cropbottom', OxmlType.StringValue),
        ':gain': new OxmlAttr(':gain', OxmlType.StringValue),
        ':blacklevel': new OxmlAttr(':blacklevel', OxmlType.StringValue),
        ':gamma': new OxmlAttr(':gamma', OxmlType.StringValue),
        ':grayscale': new OxmlAttr(':grayscale', OxmlType.TrueFalseValue),
        ':bilevel': new OxmlAttr(':bilevel', OxmlType.TrueFalseValue),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
    };
    Curve._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
    };
    Curve._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':coordorigin': new OxmlAttr(':coordorigin', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
        ':from': new OxmlAttr(':from', OxmlType.StringValue),
        ':control1': new OxmlAttr(':control1', OxmlType.StringValue),
        ':control2': new OxmlAttr(':control2', OxmlType.StringValue),
        ':to': new OxmlAttr(':to', OxmlType.StringValue),
    };
    Arc._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
    };
    Arc._D = {
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':coordorigin': new OxmlAttr(':coordorigin', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        ':startangle': new OxmlAttr(':startangle', OxmlType.DecimalValue),
        ':endangle': new OxmlAttr(':endangle', OxmlType.DecimalValue),
    };
    Background._C = {
        'v:fill': Fill,
    };
    Background._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':fill': new OxmlAttr(':fill', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:targetscreensize': new OxmlAttr('o:targetscreensize', OxmlType.EnumValue, ScreenSizeValuesArray),
    };
    Group._C = {
        'v:group': Group,
        'v:shape': Shape,
        'v:shapetype': Shapetype,
        'v:arc': Arc,
        'v:curve': Curve,
        'v:image': ImageFile,
        'v:line': Line,
        'v:oval': Oval,
        'v:polyline': PolyLine,
        'v:rect': Rectangle,
        'v:roundrect': RoundRectangle,
        'o:diagram': ODiagram,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'xvml:ClientData': XvmlClientData,
    };
    Group._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':coordorigin': new OxmlAttr(':coordorigin', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
        ':editas': new OxmlAttr(':editas', OxmlType.EnumValue, EditAsValuesArray),
        'o:tableproperties': new OxmlAttr('o:tableproperties', OxmlType.StringValue),
        'o:tablelimits': new OxmlAttr('o:tablelimits', OxmlType.StringValue),
    };
    Shapetype._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
        'o:complex': OComplex,
    };
    Shapetype._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':coordorigin': new OxmlAttr(':coordorigin', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        ':adj': new OxmlAttr(':adj', OxmlType.StringValue),
        ':path': new OxmlAttr(':path', OxmlType.StringValue),
        'o:master': new OxmlAttr('o:master', OxmlType.StringValue),
    };
    Shape._C = {
        'v:path': Path,
        'v:formulas': Formulas,
        'v:handles': ShapeHandles,
        'v:fill': Fill,
        'v:stroke': Stroke,
        'v:shadow': Shadow,
        'v:textbox': TextBox,
        'v:textpath': TextPath,
        'v:imagedata': ImageData,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:clippath': OClipPath,
        'o:signatureline': OSignatureLine,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'w10:bordertop': W10TopBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'xvml:ClientData': XvmlClientData,
        'pvml:textdata': PvmlTextData,
        'o:ink': OInk,
        'pvml:iscomment': PvmlInkAnnotationFlag,
    };
    Shape._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':class': new OxmlAttr(':class', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':alt': new OxmlAttr(':alt', OxmlType.StringValue),
        ':coordsize': new OxmlAttr(':coordsize', OxmlType.StringValue),
        ':coordorigin': new OxmlAttr(':coordorigin', OxmlType.StringValue),
        ':wrapcoords': new OxmlAttr(':wrapcoords', OxmlType.StringValue),
        ':print': new OxmlAttr(':print', OxmlType.TrueFalseValue),
        'o:spid': new OxmlAttr('o:spid', OxmlType.StringValue),
        'o:oned': new OxmlAttr('o:oned', OxmlType.TrueFalseValue),
        'o:regroupid': new OxmlAttr('o:regroupid', OxmlType.IntegerValue),
        'o:doubleclicknotify': new OxmlAttr('o:doubleclicknotify', OxmlType.TrueFalseValue),
        'o:button': new OxmlAttr('o:button', OxmlType.TrueFalseValue),
        'o:userhidden': new OxmlAttr('o:userhidden', OxmlType.TrueFalseValue),
        'o:bullet': new OxmlAttr('o:bullet', OxmlType.TrueFalseValue),
        'o:hr': new OxmlAttr('o:hr', OxmlType.TrueFalseValue),
        'o:hrstd': new OxmlAttr('o:hrstd', OxmlType.TrueFalseValue),
        'o:hrnoshade': new OxmlAttr('o:hrnoshade', OxmlType.TrueFalseValue),
        'o:hrpct': new OxmlAttr('o:hrpct', OxmlType.SingleValue),
        'o:hralign': new OxmlAttr('o:hralign', OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:userdrawn': new OxmlAttr('o:userdrawn', OxmlType.TrueFalseValue),
        'o:bordertopcolor': new OxmlAttr('o:bordertopcolor', OxmlType.StringValue),
        'o:borderleftcolor': new OxmlAttr('o:borderleftcolor', OxmlType.StringValue),
        'o:borderbottomcolor': new OxmlAttr('o:borderbottomcolor', OxmlType.StringValue),
        'o:borderrightcolor': new OxmlAttr('o:borderrightcolor', OxmlType.StringValue),
        'o:dgmlayout': new OxmlAttr('o:dgmlayout', OxmlType.IntegerValue),
        'o:dgmnodekind': new OxmlAttr('o:dgmnodekind', OxmlType.IntegerValue),
        'o:dgmlayoutmru': new OxmlAttr('o:dgmlayoutmru', OxmlType.IntegerValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
        ':filled': new OxmlAttr(':filled', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroked': new OxmlAttr(':stroked', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':strokeweight': new OxmlAttr(':strokeweight', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        'o:spt': new OxmlAttr('o:spt', OxmlType.Int32Value),
        'o:connectortype': new OxmlAttr('o:connectortype', OxmlType.EnumValue, ConnectorValuesArray),
        'o:bwmode': new OxmlAttr('o:bwmode', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwpure': new OxmlAttr('o:bwpure', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:bwnormal': new OxmlAttr('o:bwnormal', OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'o:oleicon': new OxmlAttr('o:oleicon', OxmlType.TrueFalseValue),
        'o:ole': new OxmlAttr('o:ole', OxmlType.TrueFalseBlankValue),
        'o:preferrelative': new OxmlAttr('o:preferrelative', OxmlType.TrueFalseValue),
        'o:cliptowrap': new OxmlAttr('o:cliptowrap', OxmlType.TrueFalseValue),
        'o:clip': new OxmlAttr('o:clip', OxmlType.TrueFalseValue),
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        ':adj': new OxmlAttr(':adj', OxmlType.StringValue),
        ':path': new OxmlAttr(':path', OxmlType.StringValue),
        'o:gfxdata': new OxmlAttr('o:gfxdata', OxmlType.Base64BinaryValue),
        ':equationxml': new OxmlAttr(':equationxml', OxmlType.StringValue),
    };
    ImageData._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':chromakey': new OxmlAttr(':chromakey', OxmlType.StringValue),
        ':cropleft': new OxmlAttr(':cropleft', OxmlType.StringValue),
        ':croptop': new OxmlAttr(':croptop', OxmlType.StringValue),
        ':cropright': new OxmlAttr(':cropright', OxmlType.StringValue),
        ':cropbottom': new OxmlAttr(':cropbottom', OxmlType.StringValue),
        ':gain': new OxmlAttr(':gain', OxmlType.StringValue),
        ':blacklevel': new OxmlAttr(':blacklevel', OxmlType.StringValue),
        ':gamma': new OxmlAttr(':gamma', OxmlType.StringValue),
        ':grayscale': new OxmlAttr(':grayscale', OxmlType.TrueFalseValue),
        ':bilevel': new OxmlAttr(':bilevel', OxmlType.TrueFalseValue),
        ':embosscolor': new OxmlAttr(':embosscolor', OxmlType.StringValue),
        ':recolortarget': new OxmlAttr(':recolortarget', OxmlType.StringValue),
        'o:title': new OxmlAttr('o:title', OxmlType.StringValue),
        'o:detectmouseclick': new OxmlAttr('o:detectmouseclick', OxmlType.TrueFalseValue),
        'o:relid': new OxmlAttr('o:relid', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        'r:pict': new OxmlAttr('r:pict', OxmlType.StringValue),
        'r:href': new OxmlAttr('r:href', OxmlType.StringValue),
    };
    TextPath._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':on': new OxmlAttr(':on', OxmlType.TrueFalseValue),
        ':fitshape': new OxmlAttr(':fitshape', OxmlType.TrueFalseValue),
        ':fitpath': new OxmlAttr(':fitpath', OxmlType.TrueFalseValue),
        ':trim': new OxmlAttr(':trim', OxmlType.TrueFalseValue),
        ':xscale': new OxmlAttr(':xscale', OxmlType.TrueFalseValue),
        ':string': new OxmlAttr(':string', OxmlType.StringValue),
    };
    TextBox._C = {
        'w:txbxContent': WTextBoxContent,
    };
    TextBox._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':inset': new OxmlAttr(':inset', OxmlType.StringValue),
        'o:singleclick': new OxmlAttr('o:singleclick', OxmlType.TrueFalseValue),
    };
    Shadow._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':on': new OxmlAttr(':on', OxmlType.TrueFalseValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ShadowValuesArray),
        ':obscured': new OxmlAttr(':obscured', OxmlType.TrueFalseValue),
        ':color': new OxmlAttr(':color', OxmlType.StringValue),
        ':opacity': new OxmlAttr(':opacity', OxmlType.StringValue),
        ':offset': new OxmlAttr(':offset', OxmlType.StringValue),
        ':color2': new OxmlAttr(':color2', OxmlType.StringValue),
        ':offset2': new OxmlAttr(':offset2', OxmlType.StringValue),
        ':origin': new OxmlAttr(':origin', OxmlType.StringValue),
        ':matrix': new OxmlAttr(':matrix', OxmlType.StringValue),
    };
    Stroke._C = {
        'o:left': OLeftStroke,
        'o:top': OTopStroke,
        'o:right': ORightStroke,
        'o:bottom': OBottomStroke,
        'o:column': OColumnStroke,
    };
    Stroke._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':on': new OxmlAttr(':on', OxmlType.TrueFalseValue),
        ':weight': new OxmlAttr(':weight', OxmlType.StringValue),
        ':color': new OxmlAttr(':color', OxmlType.StringValue),
        ':opacity': new OxmlAttr(':opacity', OxmlType.StringValue),
        ':linestyle': new OxmlAttr(':linestyle', OxmlType.EnumValue, StrokeLineStyleValuesArray),
        ':miterlimit': new OxmlAttr(':miterlimit', OxmlType.StringValue),
        ':joinstyle': new OxmlAttr(':joinstyle', OxmlType.EnumValue, StrokeJoinStyleValuesArray),
        ':endcap': new OxmlAttr(':endcap', OxmlType.EnumValue, StrokeEndCapValuesArray),
        ':dashstyle': new OxmlAttr(':dashstyle', OxmlType.StringValue),
        ':filltype': new OxmlAttr(':filltype', OxmlType.EnumValue, StrokeFillTypeValuesArray),
        ':src': new OxmlAttr(':src', OxmlType.StringValue),
        ':imageaspect': new OxmlAttr(':imageaspect', OxmlType.EnumValue, ImageAspectValuesArray),
        ':imagesize': new OxmlAttr(':imagesize', OxmlType.StringValue),
        ':imagealignshape': new OxmlAttr(':imagealignshape', OxmlType.TrueFalseValue),
        ':color2': new OxmlAttr(':color2', OxmlType.StringValue),
        ':startarrow': new OxmlAttr(':startarrow', OxmlType.EnumValue, StrokeArrowValuesArray),
        ':startarrowwidth': new OxmlAttr(':startarrowwidth', OxmlType.EnumValue, StrokeArrowWidthValuesArray),
        ':startarrowlength': new OxmlAttr(':startarrowlength', OxmlType.EnumValue, StrokeArrowLengthValuesArray),
        ':endarrow': new OxmlAttr(':endarrow', OxmlType.EnumValue, StrokeArrowValuesArray),
        ':endarrowwidth': new OxmlAttr(':endarrowwidth', OxmlType.EnumValue, StrokeArrowWidthValuesArray),
        ':endarrowlength': new OxmlAttr(':endarrowlength', OxmlType.EnumValue, StrokeArrowLengthValuesArray),
        'o:href': new OxmlAttr('o:href', OxmlType.StringValue),
        'o:althref': new OxmlAttr('o:althref', OxmlType.StringValue),
        'o:title': new OxmlAttr('o:title', OxmlType.StringValue),
        'o:forcedash': new OxmlAttr('o:forcedash', OxmlType.TrueFalseValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
    };
    Fill._C = {
        'o:fill': OFillExtendedProperties,
    };
    Fill._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, FillTypeValuesArray),
        ':on': new OxmlAttr(':on', OxmlType.TrueFalseValue),
        ':color': new OxmlAttr(':color', OxmlType.StringValue),
        ':opacity': new OxmlAttr(':opacity', OxmlType.StringValue),
        ':color2': new OxmlAttr(':color2', OxmlType.StringValue),
        ':src': new OxmlAttr(':src', OxmlType.StringValue),
        'o:href': new OxmlAttr('o:href', OxmlType.StringValue),
        'o:althref': new OxmlAttr('o:althref', OxmlType.StringValue),
        ':size': new OxmlAttr(':size', OxmlType.StringValue),
        ':origin': new OxmlAttr(':origin', OxmlType.StringValue),
        ':position': new OxmlAttr(':position', OxmlType.StringValue),
        ':aspect': new OxmlAttr(':aspect', OxmlType.EnumValue, ImageAspectValuesArray),
        ':colors': new OxmlAttr(':colors', OxmlType.StringValue),
        ':angle': new OxmlAttr(':angle', OxmlType.DecimalValue),
        ':alignshape': new OxmlAttr(':alignshape', OxmlType.TrueFalseValue),
        ':focus': new OxmlAttr(':focus', OxmlType.StringValue),
        ':focussize': new OxmlAttr(':focussize', OxmlType.StringValue),
        ':focusposition': new OxmlAttr(':focusposition', OxmlType.StringValue),
        ':method': new OxmlAttr(':method', OxmlType.EnumValue, FillMethodValuesArray),
        'o:detectmouseclick': new OxmlAttr('o:detectmouseclick', OxmlType.TrueFalseValue),
        'o:title': new OxmlAttr('o:title', OxmlType.StringValue),
        'o:opacity2': new OxmlAttr('o:opacity2', OxmlType.StringValue),
        ':recolor': new OxmlAttr(':recolor', OxmlType.TrueFalseValue),
        ':rotate': new OxmlAttr(':rotate', OxmlType.TrueFalseValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ShapeHandles._C = {
        'v:h': ShapeHandle,
    };
    Formulas._C = {
        'v:f': Formula,
    };
    Path._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':v': new OxmlAttr(':v', OxmlType.StringValue),
        ':limo': new OxmlAttr(':limo', OxmlType.StringValue),
        ':textboxrect': new OxmlAttr(':textboxrect', OxmlType.StringValue),
        ':fillok': new OxmlAttr(':fillok', OxmlType.TrueFalseValue),
        ':strokeok': new OxmlAttr(':strokeok', OxmlType.TrueFalseValue),
        ':shadowok': new OxmlAttr(':shadowok', OxmlType.TrueFalseValue),
        ':arrowok': new OxmlAttr(':arrowok', OxmlType.TrueFalseValue),
        ':gradientshapeok': new OxmlAttr(':gradientshapeok', OxmlType.TrueFalseValue),
        ':textpathok': new OxmlAttr(':textpathok', OxmlType.TrueFalseValue),
        ':insetpenok': new OxmlAttr(':insetpenok', OxmlType.TrueFalseValue),
        'o:connecttype': new OxmlAttr('o:connecttype', OxmlType.EnumValue, ConnectValuesArray),
        'o:connectlocs': new OxmlAttr('o:connectlocs', OxmlType.StringValue),
        'o:connectangles': new OxmlAttr('o:connectangles', OxmlType.StringValue),
        'o:extrusionok': new OxmlAttr('o:extrusionok', OxmlType.TrueFalseValue),
    };
    return {
        prefix: 'v',
        xmlns: 'urn:schemas-microsoft-com:vml',
    };
}
