import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { StringValue } from '../../framework/types/StringValue';
import { TrueFalseBlankValue } from '../../framework/types/TrueFalseBlankValue';
import { TrueFalseValue } from '../../framework/types/TrueFalseValue';
import { IntegerValue } from '../../framework/types/IntegerValue';
import { SingleValue } from '../../framework/types/SingleValue';
import { Int32Value } from '../../framework/types/Int32Value';
import { Base64BinaryValue } from '../../framework/types/Base64BinaryValue';
import { DecimalValue } from '../../framework/types/DecimalValue';
import { HorizontalRuleAlignmentValues } from '../Vml/Office';
import { InsetMarginValues } from '../Vml/Office';
import { ConnectorValues } from '../Vml/Office';
import { BlackAndWhiteModeValues } from '../Vml/Office';
import { ScreenSizeValues } from '../Vml/Office';
import { ConnectValues } from '../Vml/Office';
import { Skew as OSkew } from '../Vml/Office';
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
export declare enum ExtensionHandlingBehaviorValues {
    /** Not renderable. Serialized value: `view` */
    View = "view",
    /** Editable. Serialized value: `edit` */
    Edit = "edit",
    /** Renderable. Serialized value: `backwardCompatible` */
    BackwardCompatible = "backwardCompatible"
}
export declare const ExtensionHandlingBehaviorValuesArray: readonly [ExtensionHandlingBehaviorValues.View, ExtensionHandlingBehaviorValues.Edit, ExtensionHandlingBehaviorValues.BackwardCompatible];
export declare enum FillTypeValues {
    /** Solid Fill. Serialized value: `solid` */
    Solid = "solid",
    /** Linear Gradient. Serialized value: `gradient` */
    Gradient = "gradient",
    /** Radial Gradient. Serialized value: `gradientRadial` */
    GradientRadial = "gradientRadial",
    /** Tiled Image. Serialized value: `tile` */
    Tile = "tile",
    /** Image Pattern. Serialized value: `pattern` */
    Pattern = "pattern",
    /** Stretch Image to Fit. Serialized value: `frame` */
    Frame = "frame"
}
export declare const FillTypeValuesArray: readonly [FillTypeValues.Solid, FillTypeValues.Gradient, FillTypeValues.GradientRadial, FillTypeValues.Tile, FillTypeValues.Pattern, FillTypeValues.Frame];
export declare enum FillMethodValues {
    /** No Gradient Fill. Serialized value: `none` */
    None = "none",
    /** Linear Fill. Serialized value: `linear` */
    Linear = "linear",
    /** Sigma Fill. Serialized value: `sigma` */
    Sigma = "sigma",
    /** Application Default Fill. Serialized value: `any` */
    Any = "any",
    /** Linear Sigma Fill. Serialized value: `linear sigma` */
    Linearsigma = "linear sigma"
}
export declare const FillMethodValuesArray: readonly [FillMethodValues.None, FillMethodValues.Linear, FillMethodValues.Sigma, FillMethodValues.Any, FillMethodValues.Linearsigma];
export declare enum StrokeLineStyleValues {
    /** Single Line. Serialized value: `single` */
    Single = "single",
    /** Two Thin Lines. Serialized value: `thinThin` */
    ThinThin = "thinThin",
    /** Thin Line Outside Thick Line. Serialized value: `thinThick` */
    ThinThick = "thinThick",
    /** Thick Line Outside Thin Line. Serialized value: `thickThin` */
    ThickThin = "thickThin",
    /** Thck Line Between Thin Lines. Serialized value: `thickBetweenThin` */
    ThickBetweenThin = "thickBetweenThin"
}
export declare const StrokeLineStyleValuesArray: readonly [StrokeLineStyleValues.Single, StrokeLineStyleValues.ThinThin, StrokeLineStyleValues.ThinThick, StrokeLineStyleValues.ThickThin, StrokeLineStyleValues.ThickBetweenThin];
export declare enum StrokeJoinStyleValues {
    /** Round Joint. Serialized value: `round` */
    Round = "round",
    /** Bevel Joint. Serialized value: `bevel` */
    Bevel = "bevel",
    /** Miter Joint. Serialized value: `miter` */
    Miter = "miter"
}
export declare const StrokeJoinStyleValuesArray: readonly [StrokeJoinStyleValues.Round, StrokeJoinStyleValues.Bevel, StrokeJoinStyleValues.Miter];
export declare enum StrokeEndCapValues {
    /** Flat End. Serialized value: `flat` */
    Flat = "flat",
    /** Square End. Serialized value: `square` */
    Square = "square",
    /** Round End. Serialized value: `round` */
    Round = "round"
}
export declare const StrokeEndCapValuesArray: readonly [StrokeEndCapValues.Flat, StrokeEndCapValues.Square, StrokeEndCapValues.Round];
export declare enum StrokeArrowLengthValues {
    /** Short Arrowhead. Serialized value: `short` */
    Short = "short",
    /** Medium Arrowhead. Serialized value: `medium` */
    Medium = "medium",
    /** Long Arrowhead. Serialized value: `long` */
    Long = "long"
}
export declare const StrokeArrowLengthValuesArray: readonly [StrokeArrowLengthValues.Short, StrokeArrowLengthValues.Medium, StrokeArrowLengthValues.Long];
export declare enum StrokeArrowWidthValues {
    /** Narrow Arrowhead. Serialized value: `narrow` */
    Narrow = "narrow",
    /** Medium Arrowhead. Serialized value: `medium` */
    Medium = "medium",
    /** Wide Arrowhead. Serialized value: `wide` */
    Wide = "wide"
}
export declare const StrokeArrowWidthValuesArray: readonly [StrokeArrowWidthValues.Narrow, StrokeArrowWidthValues.Medium, StrokeArrowWidthValues.Wide];
export declare enum StrokeArrowValues {
    /** No Arrowhead. Serialized value: `none` */
    None = "none",
    /** Block Arrowhead. Serialized value: `block` */
    Block = "block",
    /** Classic Arrowhead. Serialized value: `classic` */
    Classic = "classic",
    /** Oval Arrowhead. Serialized value: `oval` */
    Oval = "oval",
    /** Diamond Arrowhead. Serialized value: `diamond` */
    Diamond = "diamond",
    /** Open Arrowhead. Serialized value: `open` */
    Open = "open"
}
export declare const StrokeArrowValuesArray: readonly [StrokeArrowValues.None, StrokeArrowValues.Block, StrokeArrowValues.Classic, StrokeArrowValues.Oval, StrokeArrowValues.Diamond, StrokeArrowValues.Open];
export declare enum ImageAspectValues {
    /** Ignore Aspect Ratio. Serialized value: `ignore` */
    Ignore = "ignore",
    /** At Most. Serialized value: `atMost` */
    AtMost = "atMost",
    /** At Least. Serialized value: `atLeast` */
    AtLeast = "atLeast"
}
export declare const ImageAspectValuesArray: readonly [ImageAspectValues.Ignore, ImageAspectValues.AtMost, ImageAspectValues.AtLeast];
export declare enum EditAsValues {
    /** Shape Canvas. Serialized value: `canvas` */
    Canvas = "canvas",
    /** Organization Chart Diagram. Serialized value: `orgchart` */
    OrganizationChart = "orgchart",
    /** Radial Diagram. Serialized value: `radial` */
    Radial = "radial",
    /** Cycle Diagram. Serialized value: `cycle` */
    Cycle = "cycle",
    /** Pyramid Diagram. Serialized value: `stacked` */
    Stacked = "stacked",
    /** Venn Diagram. Serialized value: `venn` */
    Venn = "venn",
    /** Bullseye Diagram. Serialized value: `bullseye` */
    Bullseye = "bullseye"
}
export declare const EditAsValuesArray: readonly [EditAsValues.Canvas, EditAsValues.OrganizationChart, EditAsValues.Radial, EditAsValues.Cycle, EditAsValues.Stacked, EditAsValues.Venn, EditAsValues.Bullseye];
export declare enum ShadowValues {
    /** Single Shadow. Serialized value: `single` */
    Single = "single",
    /** Double Shadow. Serialized value: `double` */
    Double = "double",
    /** Embossed Shadow. Serialized value: `emboss` */
    Emboss = "emboss",
    /** Perspective Shadow. Serialized value: `perspective` */
    Perspective = "perspective",
    /** undefined. Serialized value: `shapeRelative` */
    ShapeRelative = "shapeRelative",
    /** undefined. Serialized value: `drawingRelative` */
    DrawingRelative = "drawingRelative"
}
export declare const ShadowValuesArray: readonly [ShadowValues.Single, ShadowValues.Double, ShadowValues.Emboss, ShadowValues.Perspective, ShadowValues.ShapeRelative, ShadowValues.DrawingRelative];
export declare enum StrokeFillTypeValues {
    /** undefined. Serialized value: `solid` */
    Solid = "solid",
    /** undefined. Serialized value: `tile` */
    Tile = "tile",
    /** undefined. Serialized value: `pattern` */
    Pattern = "pattern",
    /** undefined. Serialized value: `frame` */
    Frame = "frame"
}
export declare const StrokeFillTypeValuesArray: readonly [StrokeFillTypeValues.Solid, StrokeFillTypeValues.Tile, StrokeFillTypeValues.Pattern, StrokeFillTypeValues.Frame];
/** Single Formula. Serialized as `v:f` */
export declare class Formula extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Equation. Serialized as `:eqn` */
    get equation(): StringValue | undefined;
    set equation(v: StringValue | undefined);
}
/** Shape Handle. Serialized as `v:h` */
export declare class ShapeHandle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Handle Position. Serialized as `:position` */
    get position(): StringValue | undefined;
    set position(v: StringValue | undefined);
    /** Handle Polar Center. Serialized as `:polar` */
    get polar(): StringValue | undefined;
    set polar(v: StringValue | undefined);
    /** Handle Coordinate Mapping. Serialized as `:map` */
    get map(): StringValue | undefined;
    set map(v: StringValue | undefined);
    /** Invert Handle's X Position. Serialized as `:invx` */
    get invertX(): TrueFalseBlankValue | undefined;
    set invertX(v: TrueFalseBlankValue | undefined);
    /** Invert Handle's Y Position. Serialized as `:invy` */
    get invertY(): TrueFalseBlankValue | undefined;
    set invertY(v: TrueFalseBlankValue | undefined);
    /** Handle Inversion Toggle. Serialized as `:switch` */
    get switch(): TrueFalseBlankValue | undefined;
    set switch(v: TrueFalseBlankValue | undefined);
    /** Handle X Position Range. Serialized as `:xrange` */
    get xRange(): StringValue | undefined;
    set xRange(v: StringValue | undefined);
    /** Handle Y Position Range. Serialized as `:yrange` */
    get yRange(): StringValue | undefined;
    set yRange(v: StringValue | undefined);
    /** Handle Polar Radius Range. Serialized as `:radiusrange` */
    get radiusRange(): StringValue | undefined;
    set radiusRange(v: StringValue | undefined);
}
/** Rounded Rectangle. Serialized as `v:roundrect` */
export declare class RoundRectangle extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** style. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** href. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** class. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** alt. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** coordsize. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** wrapcoords. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** print. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get gfxdata(): Base64BinaryValue | undefined;
    set gfxdata(v: Base64BinaryValue | undefined);
    /** Rounded Corner Arc Size. Serialized as `:arcsize` */
    get arcSize(): StringValue | undefined;
    set arcSize(v: StringValue | undefined);
}
/** Rectangle. Serialized as `v:rect` */
export declare class Rectangle extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Hyperlink Display Target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** CSS Reference. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** Shape Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Alternate Text. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** Coordinate Space Size. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    get coordinateOrigin(): StringValue | undefined;
    set coordinateOrigin(v: StringValue | undefined);
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** Print Toggle. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get gfxdata(): Base64BinaryValue | undefined;
    set gfxdata(v: Base64BinaryValue | undefined);
}
/** Multiple Path Line. Serialized as `v:polyline` */
export declare class PolyLine extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData | OInk> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Hyperlink Display Target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** CSS Reference. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** Shape Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Alternate Text. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** Coordinate Space Size. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    get coordinateOrigin(): StringValue | undefined;
    set coordinateOrigin(v: StringValue | undefined);
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** Print Toggle. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get gfxdata(): Base64BinaryValue | undefined;
    set gfxdata(v: Base64BinaryValue | undefined);
    /** Points for Compound Line. Serialized as `:points` */
    get points(): StringValue | undefined;
    set points(v: StringValue | undefined);
}
/** Oval. Serialized as `v:oval` */
export declare class Oval extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Hyperlink Display Target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** CSS Reference. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** Shape Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Alternate Text. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** Coordinate Space Size. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    get coordinateOrigin(): StringValue | undefined;
    set coordinateOrigin(v: StringValue | undefined);
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** Print Toggle. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get gfxdata(): Base64BinaryValue | undefined;
    set gfxdata(v: Base64BinaryValue | undefined);
}
/** Line. Serialized as `v:line` */
export declare class Line extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Hyperlink Display Target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** CSS Reference. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** Shape Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Alternate Text. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** Coordinate Space Size. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    get coordinateOrigin(): StringValue | undefined;
    set coordinateOrigin(v: StringValue | undefined);
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** Print Toggle. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get gfxdata(): Base64BinaryValue | undefined;
    set gfxdata(v: Base64BinaryValue | undefined);
    /** Line Start. Serialized as `:from` */
    get from(): StringValue | undefined;
    set from(v: StringValue | undefined);
    /** Line End Point. Serialized as `:to` */
    get to(): StringValue | undefined;
    set to(v: StringValue | undefined);
}
/** Image File. Serialized as `v:image` */
export declare class ImageFile extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** style. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** href. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** class. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** alt. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** coordsize. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** wrapcoords. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** print. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Image Source. Serialized as `:src` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** Image Left Crop. Serialized as `:cropleft` */
    get cropLeft(): StringValue | undefined;
    set cropLeft(v: StringValue | undefined);
    /** Image Top Crop. Serialized as `:croptop` */
    get cropTop(): StringValue | undefined;
    set cropTop(v: StringValue | undefined);
    /** Image Right Crop. Serialized as `:cropright` */
    get cropRight(): StringValue | undefined;
    set cropRight(v: StringValue | undefined);
    /** Image Bottom Crop. Serialized as `:cropbottom` */
    get cropBottom(): StringValue | undefined;
    set cropBottom(v: StringValue | undefined);
    /** Image Intensity. Serialized as `:gain` */
    get gain(): StringValue | undefined;
    set gain(v: StringValue | undefined);
    /** Image Brightness. Serialized as `:blacklevel` */
    get blackLevel(): StringValue | undefined;
    set blackLevel(v: StringValue | undefined);
    /** Image Gamma Correction. Serialized as `:gamma` */
    get gamma(): StringValue | undefined;
    set gamma(v: StringValue | undefined);
    /** Image Grayscale Toggle. Serialized as `:grayscale` */
    get grayScale(): TrueFalseValue | undefined;
    set grayScale(v: TrueFalseValue | undefined);
    /** Image Bilevel Toggle. Serialized as `:bilevel` */
    get biLevel(): TrueFalseValue | undefined;
    set biLevel(v: TrueFalseValue | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get gfxdata(): Base64BinaryValue | undefined;
    set gfxdata(v: Base64BinaryValue | undefined);
}
/** Bezier Curve. Serialized as `v:curve` */
export declare class Curve extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Hyperlink Display Target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** CSS Reference. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** Shape Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Alternate Text. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** Coordinate Space Size. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    get coordinateOrigin(): StringValue | undefined;
    set coordinateOrigin(v: StringValue | undefined);
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** Print Toggle. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get gfxdata(): Base64BinaryValue | undefined;
    set gfxdata(v: Base64BinaryValue | undefined);
    /** Curve Starting Point. Serialized as `:from` */
    get from(): StringValue | undefined;
    set from(v: StringValue | undefined);
    /** First Curve Control Point. Serialized as `:control1` */
    get control1(): StringValue | undefined;
    set control1(v: StringValue | undefined);
    /** Second Curve Control Point. Serialized as `:control2` */
    get control2(): StringValue | undefined;
    set control2(v: StringValue | undefined);
    /** Curve Ending Point. Serialized as `:to` */
    get to(): StringValue | undefined;
    set to(v: StringValue | undefined);
}
/** Arc Segment. Serialized as `v:arc` */
export declare class Arc extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData> {
    static _Q: string;
    static _A: string[];
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get gfxdata(): Base64BinaryValue | undefined;
    set gfxdata(v: Base64BinaryValue | undefined);
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Hyperlink Display Target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** Shape Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Alternate Text. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** Coordinate Space Size. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    get coordinateOrigin(): StringValue | undefined;
    set coordinateOrigin(v: StringValue | undefined);
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    get wrapcoords(): StringValue | undefined;
    set wrapcoords(v: StringValue | undefined);
    /** Print Toggle. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Starting Angle. Serialized as `:startangle` */
    get startAngle(): DecimalValue | undefined;
    set startAngle(v: DecimalValue | undefined);
    /** Ending Angle. Serialized as `:endangle` */
    get endAngle(): DecimalValue | undefined;
    set endAngle(v: DecimalValue | undefined);
}
/** Document Background. Serialized as `v:background` */
export declare class Background extends OxmlCompositeElement<Fill> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Fill Toggle. Serialized as `:fill` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillcolor(): StringValue | undefined;
    set fillcolor(v: StringValue | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Target Screen Size. Serialized as `o:targetscreensize` */
    get targetScreenSize(): ScreenSizeValues | undefined;
    set targetScreenSize(v: ScreenSizeValues | undefined);
    /** Returns Fill. */
    get fill(): Fill | undefined;
}
/** Shape Group. Serialized as `v:group` */
export declare class Group extends OxmlCompositeElement<Group | Shape | Shapetype | Arc | Curve | ImageFile | Line | Oval | PolyLine | Rectangle | RoundRectangle | ODiagram | OLock | OClipPath | W10TextWrap | W10AnchorLock | XvmlClientData> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Hyperlink Display Target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** CSS Reference. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** Shape Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Alternate Text. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** Coordinate Space Size. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    get coordinateOrigin(): StringValue | undefined;
    set coordinateOrigin(v: StringValue | undefined);
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** Print Toggle. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** spid. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** oned. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** regroupid. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** doubleclicknotify. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** button. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** userhidden. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** hr. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** hrstd. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** hrnoshade. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** hrpct. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** hralign. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** allowincell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** allowoverlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** userdrawn. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** dgmlayout. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** dgmnodekind. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** dgmlayoutmru. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** insetmode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get gfxdata(): Base64BinaryValue | undefined;
    set gfxdata(v: Base64BinaryValue | undefined);
    /** Group Diagram Type. Serialized as `:editas` */
    get editAs(): EditAsValues | undefined;
    set editAs(v: EditAsValues | undefined);
    /** Table Properties. Serialized as `o:tableproperties` */
    get tableProperties(): StringValue | undefined;
    set tableProperties(v: StringValue | undefined);
    /** Table Row Height Limits. Serialized as `o:tablelimits` */
    get tableLimits(): StringValue | undefined;
    set tableLimits(v: StringValue | undefined);
}
/** Shape Template. Serialized as `v:shapetype` */
export declare class Shapetype extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData | OComplex> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Hyperlink Display Target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** CSS Reference. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** Shape Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Alternate Text. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** Coordinate Space Size. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    get coordinateOrigin(): StringValue | undefined;
    set coordinateOrigin(v: StringValue | undefined);
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** Print Toggle. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Adjustment Parameters. Serialized as `:adj` */
    get adjustment(): StringValue | undefined;
    set adjustment(v: StringValue | undefined);
    /** Edge Path. Serialized as `:path` */
    get edgePath(): StringValue | undefined;
    set edgePath(v: StringValue | undefined);
    /** Master Element Toggle. Serialized as `o:master` */
    get master(): StringValue | undefined;
    set master(v: StringValue | undefined);
}
/** Shape Definition. Serialized as `v:shape` */
export declare class Shape extends OxmlCompositeElement<Path | Formulas | ShapeHandles | Fill | Stroke | Shadow | TextBox | TextPath | ImageData | OSkew | OExtrusion | OCallout | OLock | OClipPath | OSignatureLine | W10TextWrap | W10AnchorLock | W10TopBorder | W10BottomBorder | W10LeftBorder | W10RightBorder | XvmlClientData | PvmlTextData | OInk | PvmlInkAnnotationFlag> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Hyperlink Display Target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** CSS Reference. Serialized as `:class` */
    get class(): StringValue | undefined;
    set class(v: StringValue | undefined);
    /** Shape Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Alternate Text. Serialized as `:alt` */
    get alternate(): StringValue | undefined;
    set alternate(v: StringValue | undefined);
    /** Coordinate Space Size. Serialized as `:coordsize` */
    get coordinateSize(): StringValue | undefined;
    set coordinateSize(v: StringValue | undefined);
    /** Coordinate Space Origin. Serialized as `:coordorigin` */
    get coordinateOrigin(): StringValue | undefined;
    set coordinateOrigin(v: StringValue | undefined);
    /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
    get wrapCoordinates(): StringValue | undefined;
    set wrapCoordinates(v: StringValue | undefined);
    /** Print Toggle. Serialized as `:print` */
    get print(): TrueFalseValue | undefined;
    set print(v: TrueFalseValue | undefined);
    /** Optional String. Serialized as `o:spid` */
    get optionalString(): StringValue | undefined;
    set optionalString(v: StringValue | undefined);
    /** Shape Handle Toggle. Serialized as `o:oned` */
    get oned(): TrueFalseValue | undefined;
    set oned(v: TrueFalseValue | undefined);
    /** Regroup ID. Serialized as `o:regroupid` */
    get regroupId(): IntegerValue | undefined;
    set regroupId(v: IntegerValue | undefined);
    /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
    get doubleClickNotify(): TrueFalseValue | undefined;
    set doubleClickNotify(v: TrueFalseValue | undefined);
    /** Button Behavior Toggle. Serialized as `o:button` */
    get button(): TrueFalseValue | undefined;
    set button(v: TrueFalseValue | undefined);
    /** Hide Script Anchors. Serialized as `o:userhidden` */
    get userHidden(): TrueFalseValue | undefined;
    set userHidden(v: TrueFalseValue | undefined);
    /** Graphical Bullet. Serialized as `o:bullet` */
    get bullet(): TrueFalseValue | undefined;
    set bullet(v: TrueFalseValue | undefined);
    /** Horizontal Rule Toggle. Serialized as `o:hr` */
    get horizontal(): TrueFalseValue | undefined;
    set horizontal(v: TrueFalseValue | undefined);
    /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
    get horizontalStandard(): TrueFalseValue | undefined;
    set horizontalStandard(v: TrueFalseValue | undefined);
    /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
    get horizontalNoShade(): TrueFalseValue | undefined;
    set horizontalNoShade(v: TrueFalseValue | undefined);
    /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
    get horizontalPercentage(): SingleValue | undefined;
    set horizontalPercentage(v: SingleValue | undefined);
    /** Horizontal Rule Alignment. Serialized as `o:hralign` */
    get horizontalAlignment(): HorizontalRuleAlignmentValues | undefined;
    set horizontalAlignment(v: HorizontalRuleAlignmentValues | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** Exists In Master Slide. Serialized as `o:userdrawn` */
    get userDrawn(): TrueFalseValue | undefined;
    set userDrawn(v: TrueFalseValue | undefined);
    /** Border Top Color. Serialized as `o:bordertopcolor` */
    get borderTopColor(): StringValue | undefined;
    set borderTopColor(v: StringValue | undefined);
    /** Border Left Color. Serialized as `o:borderleftcolor` */
    get borderLeftColor(): StringValue | undefined;
    set borderLeftColor(v: StringValue | undefined);
    /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
    get borderBottomColor(): StringValue | undefined;
    set borderBottomColor(v: StringValue | undefined);
    /** Border Right Color. Serialized as `o:borderrightcolor` */
    get borderRightColor(): StringValue | undefined;
    set borderRightColor(v: StringValue | undefined);
    /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
    get diagramLayout(): IntegerValue | undefined;
    set diagramLayout(v: IntegerValue | undefined);
    /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
    get diagramNodeKind(): IntegerValue | undefined;
    set diagramNodeKind(v: IntegerValue | undefined);
    /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
    get diagramLayoutMostRecentUsed(): IntegerValue | undefined;
    set diagramLayoutMostRecentUsed(v: IntegerValue | undefined);
    /** Text Inset Mode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Shape Fill Toggle. Serialized as `:filled` */
    get filled(): TrueFalseValue | undefined;
    set filled(v: TrueFalseValue | undefined);
    /** Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroked` */
    get stroked(): TrueFalseValue | undefined;
    set stroked(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Shape Stroke Weight. Serialized as `:strokeweight` */
    get strokeWeight(): StringValue | undefined;
    set strokeWeight(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Optional Number. Serialized as `o:spt` */
    get optionalNumber(): Int32Value | undefined;
    set optionalNumber(v: Int32Value | undefined);
    /** Shape Connector Type. Serialized as `o:connectortype` */
    get connectorType(): ConnectorValues | undefined;
    set connectorType(v: ConnectorValues | undefined);
    /** Black-and-White Mode. Serialized as `o:bwmode` */
    get blackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
    get pureBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set pureBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
    get normalBlackWhiteMode(): BlackAndWhiteModeValues | undefined;
    set normalBlackWhiteMode(v: BlackAndWhiteModeValues | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
    get oleIcon(): TrueFalseValue | undefined;
    set oleIcon(v: TrueFalseValue | undefined);
    /** Embedded Object Toggle. Serialized as `o:ole` */
    get ole(): TrueFalseBlankValue | undefined;
    set ole(v: TrueFalseBlankValue | undefined);
    /** Relative Resize Toggle. Serialized as `o:preferrelative` */
    get preferRelative(): TrueFalseValue | undefined;
    set preferRelative(v: TrueFalseValue | undefined);
    /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
    get clipToWrap(): TrueFalseValue | undefined;
    set clipToWrap(v: TrueFalseValue | undefined);
    /** Clipping Toggle. Serialized as `o:clip` */
    get clip(): TrueFalseValue | undefined;
    set clip(v: TrueFalseValue | undefined);
    /** Shape Type Reference. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** Adjustment Parameters. Serialized as `:adj` */
    get adjustment(): StringValue | undefined;
    set adjustment(v: StringValue | undefined);
    /** Edge Path. Serialized as `:path` */
    get edgePath(): StringValue | undefined;
    set edgePath(v: StringValue | undefined);
    /** Encoded Package. Serialized as `o:gfxdata` */
    get encodedPackage(): Base64BinaryValue | undefined;
    set encodedPackage(v: Base64BinaryValue | undefined);
    /** Storage for Alternate Math Content. Serialized as `:equationxml` */
    get equationXml(): StringValue | undefined;
    set equationXml(v: StringValue | undefined);
}
/** Defines the ImageData Class. Serialized as `v:imagedata` */
export declare class ImageData extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Image Transparency Color. Serialized as `:chromakey` */
    get chromAKey(): StringValue | undefined;
    set chromAKey(v: StringValue | undefined);
    /** Image Left Crop. Serialized as `:cropleft` */
    get cropLeft(): StringValue | undefined;
    set cropLeft(v: StringValue | undefined);
    /** Image Top Crop. Serialized as `:croptop` */
    get cropTop(): StringValue | undefined;
    set cropTop(v: StringValue | undefined);
    /** Image Right Crop. Serialized as `:cropright` */
    get cropRight(): StringValue | undefined;
    set cropRight(v: StringValue | undefined);
    /** Image Bottom Crop. Serialized as `:cropbottom` */
    get cropBottom(): StringValue | undefined;
    set cropBottom(v: StringValue | undefined);
    /** Image Intensity. Serialized as `:gain` */
    get gain(): StringValue | undefined;
    set gain(v: StringValue | undefined);
    /** Image Brightness. Serialized as `:blacklevel` */
    get blackLevel(): StringValue | undefined;
    set blackLevel(v: StringValue | undefined);
    /** Image Gamma Correction. Serialized as `:gamma` */
    get gamma(): StringValue | undefined;
    set gamma(v: StringValue | undefined);
    /** Image Grayscale Toggle. Serialized as `:grayscale` */
    get grayscale(): TrueFalseValue | undefined;
    set grayscale(v: TrueFalseValue | undefined);
    /** Image Bilevel Toggle. Serialized as `:bilevel` */
    get biLevel(): TrueFalseValue | undefined;
    set biLevel(v: TrueFalseValue | undefined);
    /** Embossed Color. Serialized as `:embosscolor` */
    get embossColor(): StringValue | undefined;
    set embossColor(v: StringValue | undefined);
    /** Black Recoloring Color. Serialized as `:recolortarget` */
    get recolorTarget(): StringValue | undefined;
    set recolorTarget(v: StringValue | undefined);
    /** Image Data Title. Serialized as `o:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Detect Mouse Click. Serialized as `o:detectmouseclick` */
    get detectMouseClick(): TrueFalseValue | undefined;
    set detectMouseClick(v: TrueFalseValue | undefined);
    /** Relationship to Part. Serialized as `o:relid` */
    get relId(): StringValue | undefined;
    set relId(v: StringValue | undefined);
    /** Explicit Relationship to Image Data. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** Explicit Relationship to Alternate Image Data. Serialized as `r:pict` */
    get picture(): StringValue | undefined;
    set picture(v: StringValue | undefined);
    /** Explicit Relationship to Hyperlink Target. Serialized as `r:href` */
    get relHref(): StringValue | undefined;
    set relHref(v: StringValue | undefined);
}
/** Defines the TextPath Class. Serialized as `v:textpath` */
export declare class TextPath extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Text Path Toggle. Serialized as `:on` */
    get on(): TrueFalseValue | undefined;
    set on(v: TrueFalseValue | undefined);
    /** Shape Fit Toggle. Serialized as `:fitshape` */
    get fitShape(): TrueFalseValue | undefined;
    set fitShape(v: TrueFalseValue | undefined);
    /** Path Fit Toggle. Serialized as `:fitpath` */
    get fitPath(): TrueFalseValue | undefined;
    set fitPath(v: TrueFalseValue | undefined);
    /** Text Path Trim Toggle. Serialized as `:trim` */
    get trim(): TrueFalseValue | undefined;
    set trim(v: TrueFalseValue | undefined);
    /** Text X-Scaling. Serialized as `:xscale` */
    get xScale(): TrueFalseValue | undefined;
    set xScale(v: TrueFalseValue | undefined);
    /** Text Path Text. Serialized as `:string` */
    get string(): StringValue | undefined;
    set string(v: StringValue | undefined);
}
/** Defines the TextBox Class. Serialized as `v:textbox` */
export declare class TextBox extends OxmlCompositeElement<WTextBoxContent> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shape Styling Properties. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Text Box Inset. Serialized as `:inset` */
    get inset(): StringValue | undefined;
    set inset(v: StringValue | undefined);
    /** Text Box Single-Click Selection Toggle. Serialized as `o:singleclick` */
    get singleClick(): TrueFalseValue | undefined;
    set singleClick(v: TrueFalseValue | undefined);
}
/** Defines the Shadow Class. Serialized as `v:shadow` */
export declare class Shadow extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Shadow Toggle. Serialized as `:on` */
    get on(): TrueFalseValue | undefined;
    set on(v: TrueFalseValue | undefined);
    /** Shadow Type. Serialized as `:type` */
    get type(): ShadowValues | undefined;
    set type(v: ShadowValues | undefined);
    /** Shadow Transparency. Serialized as `:obscured` */
    get obscured(): TrueFalseValue | undefined;
    set obscured(v: TrueFalseValue | undefined);
    /** Shadow Primary Color. Serialized as `:color` */
    get color(): StringValue | undefined;
    set color(v: StringValue | undefined);
    /** Shadow Opacity. Serialized as `:opacity` */
    get opacity(): StringValue | undefined;
    set opacity(v: StringValue | undefined);
    /** Shadow Primary Offset. Serialized as `:offset` */
    get offset(): StringValue | undefined;
    set offset(v: StringValue | undefined);
    /** Shadow Secondary Color. Serialized as `:color2` */
    get color2(): StringValue | undefined;
    set color2(v: StringValue | undefined);
    /** Shadow Secondary Offset. Serialized as `:offset2` */
    get offset2(): StringValue | undefined;
    set offset2(v: StringValue | undefined);
    /** Shadow Origin. Serialized as `:origin` */
    get origin(): StringValue | undefined;
    set origin(v: StringValue | undefined);
    /** Shadow Perspective Matrix. Serialized as `:matrix` */
    get matrix(): StringValue | undefined;
    set matrix(v: StringValue | undefined);
}
/** Defines the Stroke Class. Serialized as `v:stroke` */
export declare class Stroke extends OxmlCompositeElement<OLeftStroke | OTopStroke | ORightStroke | OBottomStroke | OColumnStroke> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Stroke Toggle. Serialized as `:on` */
    get on(): TrueFalseValue | undefined;
    set on(v: TrueFalseValue | undefined);
    /** Stroke Weight. Serialized as `:weight` */
    get weight(): StringValue | undefined;
    set weight(v: StringValue | undefined);
    /** Stroke Color. Serialized as `:color` */
    get color(): StringValue | undefined;
    set color(v: StringValue | undefined);
    /** Stroke Opacity. Serialized as `:opacity` */
    get opacity(): StringValue | undefined;
    set opacity(v: StringValue | undefined);
    /** Stroke Line Style. Serialized as `:linestyle` */
    get lineStyle(): StrokeLineStyleValues | undefined;
    set lineStyle(v: StrokeLineStyleValues | undefined);
    /** Miter Joint Limit. Serialized as `:miterlimit` */
    get miterlimit(): StringValue | undefined;
    set miterlimit(v: StringValue | undefined);
    /** Line End Join Style. Serialized as `:joinstyle` */
    get joinStyle(): StrokeJoinStyleValues | undefined;
    set joinStyle(v: StrokeJoinStyleValues | undefined);
    /** Line End Cap. Serialized as `:endcap` */
    get endCap(): StrokeEndCapValues | undefined;
    set endCap(v: StrokeEndCapValues | undefined);
    /** Stroke Dash Pattern. Serialized as `:dashstyle` */
    get dashStyle(): StringValue | undefined;
    set dashStyle(v: StringValue | undefined);
    /** Stroke Image Style. Serialized as `:filltype` */
    get fillType(): StrokeFillTypeValues | undefined;
    set fillType(v: StrokeFillTypeValues | undefined);
    /** Stroke Image Location. Serialized as `:src` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** Stroke Image Aspect Ratio. Serialized as `:imageaspect` */
    get imageAspect(): ImageAspectValues | undefined;
    set imageAspect(v: ImageAspectValues | undefined);
    /** Stroke Image Size. Serialized as `:imagesize` */
    get imageSize(): StringValue | undefined;
    set imageSize(v: StringValue | undefined);
    /** Stoke Image Alignment. Serialized as `:imagealignshape` */
    get imageAlignShape(): TrueFalseValue | undefined;
    set imageAlignShape(v: TrueFalseValue | undefined);
    /** Stroke Alternate Pattern Color. Serialized as `:color2` */
    get color2(): StringValue | undefined;
    set color2(v: StringValue | undefined);
    /** Line Start Arrowhead. Serialized as `:startarrow` */
    get startArrow(): StrokeArrowValues | undefined;
    set startArrow(v: StrokeArrowValues | undefined);
    /** Line Start Arrowhead Width. Serialized as `:startarrowwidth` */
    get startArrowWidth(): StrokeArrowWidthValues | undefined;
    set startArrowWidth(v: StrokeArrowWidthValues | undefined);
    /** Line Start Arrowhead Length. Serialized as `:startarrowlength` */
    get startArrowLength(): StrokeArrowLengthValues | undefined;
    set startArrowLength(v: StrokeArrowLengthValues | undefined);
    /** Line End Arrowhead. Serialized as `:endarrow` */
    get endArrow(): StrokeArrowValues | undefined;
    set endArrow(v: StrokeArrowValues | undefined);
    /** Line End Arrowhead Width. Serialized as `:endarrowwidth` */
    get endArrowWidth(): StrokeArrowWidthValues | undefined;
    set endArrowWidth(v: StrokeArrowWidthValues | undefined);
    /** Line End Arrowhead Length. Serialized as `:endarrowlength` */
    get endArrowLength(): StrokeArrowLengthValues | undefined;
    set endArrowLength(v: StrokeArrowLengthValues | undefined);
    /** Original Image Reference. Serialized as `o:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Alternate Image Reference. Serialized as `o:althref` */
    get alternateImageReference(): StringValue | undefined;
    set alternateImageReference(v: StringValue | undefined);
    /** Stroke Title. Serialized as `o:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Force Dashed Outline. Serialized as `o:forcedash` */
    get forceDash(): TrueFalseValue | undefined;
    set forceDash(v: TrueFalseValue | undefined);
    /** Relationship. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetpen(): TrueFalseValue | undefined;
    set insetpen(v: TrueFalseValue | undefined);
    /** Returns OLeftStroke. */
    get leftStroke(): OLeftStroke | undefined;
    /** Returns OTopStroke. */
    get topStroke(): OTopStroke | undefined;
    /** Returns ORightStroke. */
    get rightStroke(): ORightStroke | undefined;
    /** Returns OBottomStroke. */
    get bottomStroke(): OBottomStroke | undefined;
    /** Returns OColumnStroke. */
    get columnStroke(): OColumnStroke | undefined;
}
/** Defines the Fill Class. Serialized as `v:fill` */
export declare class Fill extends OxmlCompositeElement<OFillExtendedProperties> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Fill Type. Serialized as `:type` */
    get type(): FillTypeValues | undefined;
    set type(v: FillTypeValues | undefined);
    /** Fill Toggle. Serialized as `:on` */
    get on(): TrueFalseValue | undefined;
    set on(v: TrueFalseValue | undefined);
    /** Primary Color. Serialized as `:color` */
    get color(): StringValue | undefined;
    set color(v: StringValue | undefined);
    /** Primary Color Opacity. Serialized as `:opacity` */
    get opacity(): StringValue | undefined;
    set opacity(v: StringValue | undefined);
    /** Secondary Color. Serialized as `:color2` */
    get color2(): StringValue | undefined;
    set color2(v: StringValue | undefined);
    /** Fill Image Source. Serialized as `:src` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `o:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Alternate Image Reference Location. Serialized as `o:althref` */
    get alternateImageReference(): StringValue | undefined;
    set alternateImageReference(v: StringValue | undefined);
    /** Fill Image Size. Serialized as `:size` */
    get size(): StringValue | undefined;
    set size(v: StringValue | undefined);
    /** Fill Image Origin. Serialized as `:origin` */
    get origin(): StringValue | undefined;
    set origin(v: StringValue | undefined);
    /** Fill Image Position. Serialized as `:position` */
    get position(): StringValue | undefined;
    set position(v: StringValue | undefined);
    /** Image Aspect Ratio. Serialized as `:aspect` */
    get aspect(): ImageAspectValues | undefined;
    set aspect(v: ImageAspectValues | undefined);
    /** Intermediate Colors. Serialized as `:colors` */
    get colors(): StringValue | undefined;
    set colors(v: StringValue | undefined);
    /** Gradient Angle. Serialized as `:angle` */
    get angle(): DecimalValue | undefined;
    set angle(v: DecimalValue | undefined);
    /** Align Image With Shape. Serialized as `:alignshape` */
    get alignShape(): TrueFalseValue | undefined;
    set alignShape(v: TrueFalseValue | undefined);
    /** Gradient Center. Serialized as `:focus` */
    get focus(): StringValue | undefined;
    set focus(v: StringValue | undefined);
    /** Radial Gradient Size. Serialized as `:focussize` */
    get focusSize(): StringValue | undefined;
    set focusSize(v: StringValue | undefined);
    /** Radial Gradient Center. Serialized as `:focusposition` */
    get focusPosition(): StringValue | undefined;
    set focusPosition(v: StringValue | undefined);
    /** Gradient Fill Method. Serialized as `:method` */
    get method(): FillMethodValues | undefined;
    set method(v: FillMethodValues | undefined);
    /** Detect Mouse Click. Serialized as `o:detectmouseclick` */
    get detectMouseClick(): TrueFalseValue | undefined;
    set detectMouseClick(v: TrueFalseValue | undefined);
    /** Title. Serialized as `o:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Secondary Color Opacity. Serialized as `o:opacity2` */
    get opacity2(): StringValue | undefined;
    set opacity2(v: StringValue | undefined);
    /** Recolor Fill as Picture. Serialized as `:recolor` */
    get recolor(): TrueFalseValue | undefined;
    set recolor(v: TrueFalseValue | undefined);
    /** Rotate Fill with Shape. Serialized as `:rotate` */
    get rotate(): TrueFalseValue | undefined;
    set rotate(v: TrueFalseValue | undefined);
    /** Relationship to Part. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** Returns OFillExtendedProperties. */
    get fillExtendedProperties(): OFillExtendedProperties | undefined;
}
/** Defines the ShapeHandles Class. Serialized as `v:handles` */
export declare class ShapeHandles extends OxmlCompositeElement<ShapeHandle> {
    static _Q: string;
}
/** Defines the Formulas Class. Serialized as `v:formulas` */
export declare class Formulas extends OxmlCompositeElement<Formula> {
    static _Q: string;
}
/** Defines the Path Class. Serialized as `v:path` */
export declare class Path extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Path Definition. Serialized as `:v` */
    get value(): StringValue | undefined;
    set value(v: StringValue | undefined);
    /** Limo Stretch Point. Serialized as `:limo` */
    get limo(): StringValue | undefined;
    set limo(v: StringValue | undefined);
    /** Text Box Bounding Box. Serialized as `:textboxrect` */
    get textboxRectangle(): StringValue | undefined;
    set textboxRectangle(v: StringValue | undefined);
    /** Shape Fill Toggle. Serialized as `:fillok` */
    get allowFill(): TrueFalseValue | undefined;
    set allowFill(v: TrueFalseValue | undefined);
    /** Stroke Toggle. Serialized as `:strokeok` */
    get allowStroke(): TrueFalseValue | undefined;
    set allowStroke(v: TrueFalseValue | undefined);
    /** Shadow Toggle. Serialized as `:shadowok` */
    get allowShading(): TrueFalseValue | undefined;
    set allowShading(v: TrueFalseValue | undefined);
    /** Arrowhead Display Toggle. Serialized as `:arrowok` */
    get showArrowhead(): TrueFalseValue | undefined;
    set showArrowhead(v: TrueFalseValue | undefined);
    /** Gradient Shape Toggle. Serialized as `:gradientshapeok` */
    get allowGradientShape(): TrueFalseValue | undefined;
    set allowGradientShape(v: TrueFalseValue | undefined);
    /** Text Path Toggle. Serialized as `:textpathok` */
    get allowTextPath(): TrueFalseValue | undefined;
    set allowTextPath(v: TrueFalseValue | undefined);
    /** Inset Stroke From Path Flag. Serialized as `:insetpenok` */
    get allowInsetPen(): TrueFalseValue | undefined;
    set allowInsetPen(v: TrueFalseValue | undefined);
    /** Connection Point Type. Serialized as `o:connecttype` */
    get connectionPointType(): ConnectValues | undefined;
    set connectionPointType(v: ConnectValues | undefined);
    /** Connection Points. Serialized as `o:connectlocs` */
    get connectionPoints(): StringValue | undefined;
    set connectionPoints(v: StringValue | undefined);
    /** Connection Point Connect Angles. Serialized as `o:connectangles` */
    get connectAngles(): StringValue | undefined;
    set connectAngles(v: StringValue | undefined);
    /** Extrusion Toggle. Serialized as `o:extrusionok` */
    get allowExtrusion(): TrueFalseValue | undefined;
    set allowExtrusion(v: TrueFalseValue | undefined);
}
export declare function initVmlNamespace(): {
    prefix: string;
    xmlns: string;
};
