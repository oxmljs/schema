import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { StringValue } from '../../../framework/types/StringValue';
import { TrueFalseBlankValue } from '../../../framework/types/TrueFalseBlankValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { TrueFalseValue } from '../../../framework/types/TrueFalseValue';
import { DecimalValue } from '../../../framework/types/DecimalValue';
import { SingleValue } from '../../../framework/types/SingleValue';
import { IntegerValue } from '../../../framework/types/IntegerValue';
import { Base64BinaryValue } from '../../../framework/types/Base64BinaryValue';
import { ExtensionHandlingBehaviorValues } from '../../Vml';
import { StrokeLineStyleValues } from '../../Vml';
import { StrokeJoinStyleValues } from '../../Vml';
import { StrokeEndCapValues } from '../../Vml';
import { FillTypeValues } from '../../Vml';
import { ImageAspectValues } from '../../Vml';
import { StrokeArrowValues } from '../../Vml';
import { StrokeArrowWidthValues } from '../../Vml';
import { StrokeArrowLengthValues } from '../../Vml';
import { Fill as VFill } from '../../Vml';
import { ImageData as VImageData } from '../../Vml';
import { Stroke as VStroke } from '../../Vml';
import { TextBox as VTextBox } from '../../Vml';
import { Shadow as VShadow } from '../../Vml';
export declare enum AlignmentValues {
    /** Top Alignment. Serialized value: `top` */
    Top = "top",
    /** Middle Alignment. Serialized value: `middle` */
    Middle = "middle",
    /** Bottom Alignment. Serialized value: `bottom` */
    Bottom = "bottom",
    /** Left Alignment. Serialized value: `left` */
    Left = "left",
    /** Center Alignment. Serialized value: `center` */
    Center = "center",
    /** Right Alignment. Serialized value: `right` */
    Right = "right"
}
export declare const AlignmentValuesArray: readonly [AlignmentValues.Top, AlignmentValues.Middle, AlignmentValues.Bottom, AlignmentValues.Left, AlignmentValues.Center, AlignmentValues.Right];
export declare enum ScreenSizeValues {
    /** 544x376 pixels. Serialized value: `544,376` */
    Sz544x376 = "544,376",
    /** 640x480 pixels. Serialized value: `640,480` */
    Sz640x480 = "640,480",
    /** 720x512 pixels. Serialized value: `720,512` */
    Sz720x512 = "720,512",
    /** 800x600 pixels. Serialized value: `800,600` */
    Sz800x600 = "800,600",
    /** 1024x768 pixels. Serialized value: `1024,768` */
    Sz1024x768 = "1024,768",
    /** 1152x862 pixels. Serialized value: `1152,862` */
    Sz1152x862 = "1152,862"
}
export declare const ScreenSizeValuesArray: readonly [ScreenSizeValues.Sz544x376, ScreenSizeValues.Sz640x480, ScreenSizeValues.Sz720x512, ScreenSizeValues.Sz800x600, ScreenSizeValues.Sz1024x768, ScreenSizeValues.Sz1152x862];
export declare enum InsetMarginValues {
    /** Automatic Margins. Serialized value: `auto` */
    Auto = "auto",
    /** Custom Margins. Serialized value: `custom` */
    Custom = "custom"
}
export declare const InsetMarginValuesArray: readonly [InsetMarginValues.Auto, InsetMarginValues.Custom];
export declare enum ColorModeValues {
    /** Use Shape Fill Color. Serialized value: `auto` */
    Auto = "auto",
    /** Use Custom Color. Serialized value: `custom` */
    Custom = "custom"
}
export declare const ColorModeValuesArray: readonly [ColorModeValues.Auto, ColorModeValues.Custom];
export declare enum ExtrusionValues {
    /** Perspective Projection. Serialized value: `perspective` */
    Perspective = "perspective",
    /** Parallel Projection. Serialized value: `parallel` */
    Parallel = "parallel"
}
export declare const ExtrusionValuesArray: readonly [ExtrusionValues.Perspective, ExtrusionValues.Parallel];
export declare enum ExtrusionRenderValues {
    /** Solid. Serialized value: `solid` */
    Solid = "solid",
    /** Wireframe. Serialized value: `wireFrame` */
    WireFrame = "wireFrame",
    /** Bounding Cube. Serialized value: `boundingCube` */
    BoundingCube = "boundingCube"
}
export declare const ExtrusionRenderValuesArray: readonly [ExtrusionRenderValues.Solid, ExtrusionRenderValues.WireFrame, ExtrusionRenderValues.BoundingCube];
export declare enum ExtrusionPlaneValues {
    /** XY Plane. Serialized value: `XY` */
    XY = "XY",
    /** ZX Plane. Serialized value: `ZX` */
    ZX = "ZX",
    /** YZ Plane. Serialized value: `YZ` */
    YZ = "YZ"
}
export declare const ExtrusionPlaneValuesArray: readonly [ExtrusionPlaneValues.XY, ExtrusionPlaneValues.ZX, ExtrusionPlaneValues.YZ];
export declare enum AngleValues {
    /** Any Angle. Serialized value: `any` */
    Any = "any",
    /** 30 degrees. Serialized value: `30` */
    Degree30 = "30",
    /** 45 degrees. Serialized value: `45` */
    Degree45 = "45",
    /** 60 degrees. Serialized value: `60` */
    Degree60 = "60",
    /** 90 degrees. Serialized value: `90` */
    Degree90 = "90",
    /** Automatic Angle. Serialized value: `auto` */
    Auto = "auto"
}
export declare const AngleValuesArray: readonly [AngleValues.Any, AngleValues.Degree30, AngleValues.Degree45, AngleValues.Degree60, AngleValues.Degree90, AngleValues.Auto];
export declare enum CalloutPlacementValues {
    /** Top placement. Serialized value: `top` */
    Top = "top",
    /** Center placement. Serialized value: `center` */
    Center = "center",
    /** Bottom placement. Serialized value: `bottom` */
    Bottom = "bottom",
    /** User-defined placement. Serialized value: `user` */
    User = "user"
}
export declare const CalloutPlacementValuesArray: readonly [CalloutPlacementValues.Top, CalloutPlacementValues.Center, CalloutPlacementValues.Bottom, CalloutPlacementValues.User];
export declare enum ConnectorValues {
    /** No Connector. Serialized value: `none` */
    None = "none",
    /** Straight Connector. Serialized value: `straight` */
    Straight = "straight",
    /** Elbow Connector. Serialized value: `elbow` */
    Elbow = "elbow",
    /** Curved Connector. Serialized value: `curved` */
    Curved = "curved"
}
export declare const ConnectorValuesArray: readonly [ConnectorValues.None, ConnectorValues.Straight, ConnectorValues.Elbow, ConnectorValues.Curved];
export declare enum HorizontalRuleAlignmentValues {
    /** Left Alignment. Serialized value: `left` */
    Left = "left",
    /** Right Alignment. Serialized value: `right` */
    Right = "right",
    /** Center Alignment. Serialized value: `center` */
    Center = "center"
}
export declare const HorizontalRuleAlignmentValuesArray: readonly [HorizontalRuleAlignmentValues.Left, HorizontalRuleAlignmentValues.Right, HorizontalRuleAlignmentValues.Center];
export declare enum ConnectValues {
    /** No. Serialized value: `none` */
    None = "none",
    /** Four Connections. Serialized value: `rect` */
    Rectangle = "rect",
    /** Edit Point Connections. Serialized value: `segments` */
    Segments = "segments",
    /** Custom Connections. Serialized value: `custom` */
    Custom = "custom"
}
export declare const ConnectValuesArray: readonly [ConnectValues.None, ConnectValues.Rectangle, ConnectValues.Segments, ConnectValues.Custom];
export declare enum OleLinkValues {
    /** Other Image. Serialized value: `Picture` */
    Picture = "Picture",
    /** Bitmap Image. Serialized value: `Bitmap` */
    Bitmap = "Bitmap",
    /** Enhanced Metafile Image. Serialized value: `EnhancedMetaFile` */
    EnhancedMetaFile = "EnhancedMetaFile"
}
export declare const OleLinkValuesArray: readonly [OleLinkValues.Picture, OleLinkValues.Bitmap, OleLinkValues.EnhancedMetaFile];
export declare enum OleValues {
    /** Embedded Object. Serialized value: `Embed` */
    Embed = "Embed",
    /** Linked Object. Serialized value: `Link` */
    Link = "Link"
}
export declare const OleValuesArray: readonly [OleValues.Embed, OleValues.Link];
export declare enum OleDrawAspectValues {
    /** Snapshot. Serialized value: `Content` */
    Content = "Content",
    /** Icon. Serialized value: `Icon` */
    Icon = "Icon"
}
export declare const OleDrawAspectValuesArray: readonly [OleDrawAspectValues.Content, OleDrawAspectValues.Icon];
export declare enum OleUpdateModeValues {
    /** Server Application Update. Serialized value: `Always` */
    Always = "Always",
    /** User Update. Serialized value: `OnCall` */
    OnCall = "OnCall"
}
export declare const OleUpdateModeValuesArray: readonly [OleUpdateModeValues.Always, OleUpdateModeValues.OnCall];
export declare enum FillValues {
    /** Centered Radial Gradient. Serialized value: `gradientCenter` */
    GradientCenter = "gradientCenter",
    /** Solid Fill. Serialized value: `solid` */
    Solid = "solid",
    /** Image Pattern. Serialized value: `pattern` */
    Pattern = "pattern",
    /** Tiled Image. Serialized value: `tile` */
    Tile = "tile",
    /** Stretch Image to Fit. Serialized value: `frame` */
    Frame = "frame",
    /** Unscaled Gradient. Serialized value: `gradientUnscaled` */
    GradientUnscaled = "gradientUnscaled",
    /** Radial Gradient. Serialized value: `gradientRadial` */
    GradientRadial = "gradientRadial",
    /** Linear Gradient. Serialized value: `gradient` */
    Gradient = "gradient",
    /** Use Background Fill. Serialized value: `background` */
    Background = "background"
}
export declare const FillValuesArray: readonly [FillValues.GradientCenter, FillValues.Solid, FillValues.Pattern, FillValues.Tile, FillValues.Frame, FillValues.GradientUnscaled, FillValues.GradientRadial, FillValues.Gradient, FillValues.Background];
export declare enum RuleValues {
    /** Arc Rule. Serialized value: `arc` */
    Arc = "arc",
    /** Callout Rule. Serialized value: `callout` */
    Callout = "callout",
    /** Connector Rule. Serialized value: `connector` */
    Connector = "connector"
}
export declare const RuleValuesArray: readonly [RuleValues.Arc, RuleValues.Callout, RuleValues.Connector];
export declare enum BlackAndWhiteModeValues {
    /** Color. Serialized value: `color` */
    Color = "color",
    /** Automatic. Serialized value: `auto` */
    Auto = "auto",
    /** Grayscale. Serialized value: `grayScale` */
    GrayScale = "grayScale",
    /** Light grayscale. Serialized value: `lightGrayScale` */
    LightGrayScale = "lightGrayScale",
    /** Inverse Grayscale. Serialized value: `inverseGray` */
    InverseGray = "inverseGray",
    /** Gray Outlines. Serialized value: `grayOutline` */
    GrayOutline = "grayOutline",
    /** Black And White. Serialized value: `highContrast` */
    HighContrast = "highContrast",
    /** Black. Serialized value: `black` */
    Black = "black",
    /** White. Serialized value: `white` */
    White = "white",
    /** Do Not Show. Serialized value: `undrawn` */
    Undrawn = "undrawn",
    /** Black Text And Lines. Serialized value: `blackTextAndLines` */
    BlackTextAndLines = "blackTextAndLines"
}
export declare const BlackAndWhiteModeValuesArray: readonly [BlackAndWhiteModeValues.Color, BlackAndWhiteModeValues.Auto, BlackAndWhiteModeValues.GrayScale, BlackAndWhiteModeValues.LightGrayScale, BlackAndWhiteModeValues.InverseGray, BlackAndWhiteModeValues.GrayOutline, BlackAndWhiteModeValues.HighContrast, BlackAndWhiteModeValues.Black, BlackAndWhiteModeValues.White, BlackAndWhiteModeValues.Undrawn, BlackAndWhiteModeValues.BlackTextAndLines];
/** UI Default Colors. Serialized as `o:colormenu` */
export declare class ColorMenu extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Default stroke color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Default fill color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Default shadow color. Serialized as `:shadowcolor` */
    get shadowColor(): StringValue | undefined;
    set shadowColor(v: StringValue | undefined);
    /** Default extrusion color. Serialized as `:extrusioncolor` */
    get extrusionColor(): StringValue | undefined;
    set extrusionColor(v: StringValue | undefined);
}
/** Most Recently Used Colors. Serialized as `o:colormru` */
export declare class ColorMostRecentlyUsed extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Recent colors. Serialized as `:colors` */
    get colors(): StringValue | undefined;
    set colors(v: StringValue | undefined);
}
/** Shape Reference. Serialized as `o:proxy` */
export declare class Proxy extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Start Point Connection Flag. Serialized as `:start` */
    get start(): TrueFalseBlankValue | undefined;
    set start(v: TrueFalseBlankValue | undefined);
    /** End Point Connection Flag. Serialized as `:end` */
    get end(): TrueFalseBlankValue | undefined;
    set end(v: TrueFalseBlankValue | undefined);
    /** Proxy Shape Reference. Serialized as `:idref` */
    get shapeReference(): StringValue | undefined;
    set shapeReference(v: StringValue | undefined);
    /** Connection Location. Serialized as `:connectloc` */
    get connectionLocation(): Int32Value | undefined;
    set connectionLocation(v: Int32Value | undefined);
}
/** WordprocessingML Field Switches. Serialized as `o:FieldCodes` */
export declare class FieldCodes extends OxmlLeafTextElement {
    static _Q: string;
}
/** Embedded Object Cannot Be Refreshed. Serialized as `o:LockedField` */
export declare class LockedField extends OxmlLeafTextElement {
    static _Q: string;
}
/** Embedded Object Alternate Image Request. Serialized as `o:LinkType` */
export declare class LinkType extends OxmlLeafTextElement {
    static _Q: string;
}
/** Diagram Relationship. Serialized as `o:rel` */
export declare class Relation extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Diagram Relationship Source Shape. Serialized as `:idsrc` */
    get sourceId(): StringValue | undefined;
    set sourceId(v: StringValue | undefined);
    /** Diagram Relationship Destination Shape. Serialized as `:iddest` */
    get destinationId(): StringValue | undefined;
    set destinationId(v: StringValue | undefined);
    /** Diagram Relationship Center Shape. Serialized as `:idcntr` */
    get centerShapeId(): StringValue | undefined;
    set centerShapeId(v: StringValue | undefined);
}
/** Diagram Relationship Table. Serialized as `o:relationtable` */
export declare class RelationTable extends OxmlCompositeElement<Relation> {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
}
/** Rule. Serialized as `o:r` */
export declare class Rule extends OxmlCompositeElement<Proxy> {
    static _Q: string;
    static _A: string[];
    /** Rule ID. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Rule Type. Serialized as `:type` */
    get type(): RuleValues | undefined;
    set type(v: RuleValues | undefined);
    /** Alignment Rule Type. Serialized as `:how` */
    get how(): AlignmentValues | undefined;
    set how(v: AlignmentValues | undefined);
    /** Rule Shape Reference. Serialized as `:idref` */
    get shapeReference(): StringValue | undefined;
    set shapeReference(v: StringValue | undefined);
}
/** Regroup Entry. Serialized as `o:entry` */
export declare class Entry extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** New Group ID. Serialized as `:new` */
    get new(): Int32Value | undefined;
    set new(v: Int32Value | undefined);
    /** Old Group ID. Serialized as `:old` */
    get old(): Int32Value | undefined;
    set old(v: Int32Value | undefined);
}
/** Rule Set. Serialized as `o:rules` */
export declare class Rules extends OxmlCompositeElement<Rule> {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
}
/** Shape Grouping History. Serialized as `o:regrouptable` */
export declare class RegroupTable extends OxmlCompositeElement<Entry> {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
}
/** Shape ID Map. Serialized as `o:idmap` */
export declare class ShapeIdMap extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Shape IDs. Serialized as `:data` */
    get data(): StringValue | undefined;
    set data(v: StringValue | undefined);
}
/** Shape Fill Extended Properties. Serialized as `o:fill` */
export declare class FillExtendedProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Fill Type. Serialized as `:type` */
    get type(): FillValues | undefined;
    set type(v: FillValues | undefined);
}
/** Shape Clipping Path. Serialized as `o:clippath` */
export declare class ClipPath extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Path Definition. Serialized as `o:v` */
    get value(): StringValue | undefined;
    set value(v: StringValue | undefined);
}
/** Defines the StrokeChildType Class. */
export declare abstract class StrokeChildType extends OxmlLeafElement {
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Stroke Toggle. Serialized as `:on` */
    get on(): TrueFalseValue | undefined;
    set on(v: TrueFalseValue | undefined);
    /** Stroke Weight. Serialized as `:weight` */
    get weight(): StringValue | undefined;
    set weight(v: StringValue | undefined);
    /** Stroke Color. Serialized as `:color` */
    get color(): StringValue | undefined;
    set color(v: StringValue | undefined);
    /** Stroke Alternate Pattern Color. Serialized as `:color2` */
    get color2(): StringValue | undefined;
    set color2(v: StringValue | undefined);
    /** Stroke Opacity. Serialized as `:opacity` */
    get opacity(): StringValue | undefined;
    set opacity(v: StringValue | undefined);
    /** Stroke Line Style. Serialized as `:linestyle` */
    get lineStyle(): StrokeLineStyleValues | undefined;
    set lineStyle(v: StrokeLineStyleValues | undefined);
    /** Miter Joint Limit. Serialized as `:miterlimit` */
    get miterLimit(): DecimalValue | undefined;
    set miterLimit(v: DecimalValue | undefined);
    /** Line End Join Style). Serialized as `:joinstyle` */
    get joinStyle(): StrokeJoinStyleValues | undefined;
    set joinStyle(v: StrokeJoinStyleValues | undefined);
    /** Line End Cap. Serialized as `:endcap` */
    get endCap(): StrokeEndCapValues | undefined;
    set endCap(v: StrokeEndCapValues | undefined);
    /** Stroke Dash Pattern. Serialized as `:dashstyle` */
    get dashStyle(): StringValue | undefined;
    set dashStyle(v: StringValue | undefined);
    /** Inset Border From Path. Serialized as `:insetpen` */
    get insetPen(): TrueFalseValue | undefined;
    set insetPen(v: TrueFalseValue | undefined);
    /** Stroke Image Style. Serialized as `:filltype` */
    get fillType(): FillTypeValues | undefined;
    set fillType(v: FillTypeValues | undefined);
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
}
/** Text Box Interior Stroke. Serialized as `o:column` */
export declare class ColumnStroke extends StrokeChildType {
    static _Q: string;
}
/** Text Box Bottom Stroke. Serialized as `o:bottom` */
export declare class BottomStroke extends StrokeChildType {
    static _Q: string;
}
/** Text Box Right Stroke. Serialized as `o:right` */
export declare class RightStroke extends StrokeChildType {
    static _Q: string;
}
/** Text Box Top Stroke. Serialized as `o:top` */
export declare class TopStroke extends StrokeChildType {
    static _Q: string;
}
/** Text Box Left Stroke. Serialized as `o:left` */
export declare class LeftStroke extends StrokeChildType {
    static _Q: string;
}
/** Complex. Serialized as `o:complex` */
export declare class Complex extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
}
/** Embedded OLE Object. Serialized as `o:OLEObject` */
export declare class OleObject extends OxmlCompositeElement<LinkType | LockedField | FieldCodes> {
    static _Q: string;
    static _A: string[];
    /** OLE Object Type. Serialized as `:Type` */
    get type(): OleValues | undefined;
    set type(v: OleValues | undefined);
    /** OLE Object Application. Serialized as `:ProgID` */
    get progId(): StringValue | undefined;
    set progId(v: StringValue | undefined);
    /** OLE Object Shape. Serialized as `:ShapeID` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** OLE Object Representation. Serialized as `:DrawAspect` */
    get drawAspect(): OleDrawAspectValues | undefined;
    set drawAspect(v: OleDrawAspectValues | undefined);
    /** OLE Object Unique ID. Serialized as `:ObjectID` */
    get objectId(): StringValue | undefined;
    set objectId(v: StringValue | undefined);
    /** Relationship. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** OLE Update Mode. Serialized as `:UpdateMode` */
    get updateMode(): OleUpdateModeValues | undefined;
    set updateMode(v: OleUpdateModeValues | undefined);
    /** Embedded Object Alternate Image Request. */
    get linkType(): LinkType | undefined;
    /** Embedded Object Cannot Be Refreshed. */
    get lockedField(): LockedField | undefined;
    /** WordprocessingML Field Switches. */
    get fieldCodes(): FieldCodes | undefined;
}
/** Defines the Lock Class. Serialized as `o:lock` */
export declare class Lock extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Position Lock. Serialized as `:position` */
    get position(): TrueFalseValue | undefined;
    set position(v: TrueFalseValue | undefined);
    /** Selection Lock. Serialized as `:selection` */
    get selection(): TrueFalseValue | undefined;
    set selection(v: TrueFalseValue | undefined);
    /** Grouping Lock. Serialized as `:grouping` */
    get grouping(): TrueFalseValue | undefined;
    set grouping(v: TrueFalseValue | undefined);
    /** Ungrouping Lock. Serialized as `:ungrouping` */
    get ungrouping(): TrueFalseValue | undefined;
    set ungrouping(v: TrueFalseValue | undefined);
    /** Rotation Lock. Serialized as `:rotation` */
    get rotation(): TrueFalseValue | undefined;
    set rotation(v: TrueFalseValue | undefined);
    /** Cropping Lock. Serialized as `:cropping` */
    get cropping(): TrueFalseValue | undefined;
    set cropping(v: TrueFalseValue | undefined);
    /** Vertices Lock. Serialized as `:verticies` */
    get verticies(): TrueFalseValue | undefined;
    set verticies(v: TrueFalseValue | undefined);
    /** Handles Lock. Serialized as `:adjusthandles` */
    get adjustHandles(): TrueFalseValue | undefined;
    set adjustHandles(v: TrueFalseValue | undefined);
    /** Text Lock. Serialized as `:text` */
    get textLock(): TrueFalseValue | undefined;
    set textLock(v: TrueFalseValue | undefined);
    /** Aspect Ratio Lock. Serialized as `:aspectratio` */
    get aspectRatio(): TrueFalseValue | undefined;
    set aspectRatio(v: TrueFalseValue | undefined);
    /** AutoShape Type Lock. Serialized as `:shapetype` */
    get shapeType(): TrueFalseValue | undefined;
    set shapeType(v: TrueFalseValue | undefined);
}
/** Defines the Callout Class. Serialized as `o:callout` */
export declare class Callout extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Callout toggle. Serialized as `:on` */
    get on(): TrueFalseValue | undefined;
    set on(v: TrueFalseValue | undefined);
    /** Callout type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** Callout gap. Serialized as `:gap` */
    get gap(): StringValue | undefined;
    set gap(v: StringValue | undefined);
    /** Callout angle. Serialized as `:angle` */
    get angle(): AngleValues | undefined;
    set angle(v: AngleValues | undefined);
    /** Callout automatic drop toggle. Serialized as `:dropauto` */
    get dropAuto(): TrueFalseValue | undefined;
    set dropAuto(v: TrueFalseValue | undefined);
    /** Callout drop position. Serialized as `:drop` */
    get drop(): StringValue | undefined;
    set drop(v: StringValue | undefined);
    /** Callout drop distance. Serialized as `:distance` */
    get distance(): StringValue | undefined;
    set distance(v: StringValue | undefined);
    /** Callout length toggle. Serialized as `:lengthspecified` */
    get lengthSpecified(): TrueFalseValue | undefined;
    set lengthSpecified(v: TrueFalseValue | undefined);
    /** Callout length. Serialized as `:length` */
    get length(): StringValue | undefined;
    set length(v: StringValue | undefined);
    /** Callout accent bar toggle. Serialized as `:accentbar` */
    get accentBar(): TrueFalseValue | undefined;
    set accentBar(v: TrueFalseValue | undefined);
    /** Callout text border toggle. Serialized as `:textborder` */
    get textBorder(): TrueFalseValue | undefined;
    set textBorder(v: TrueFalseValue | undefined);
    /** Callout flip x. Serialized as `:minusx` */
    get minusX(): TrueFalseValue | undefined;
    set minusX(v: TrueFalseValue | undefined);
    /** Callout flip y. Serialized as `:minusy` */
    get minusY(): TrueFalseValue | undefined;
    set minusY(v: TrueFalseValue | undefined);
}
/** 3D Extrusion. Serialized as `o:extrusion` */
export declare class Extrusion extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Extrusion Toggle. Serialized as `:on` */
    get on(): TrueFalseValue | undefined;
    set on(v: TrueFalseValue | undefined);
    /** Extrusion Type. Serialized as `:type` */
    get type(): ExtrusionValues | undefined;
    set type(v: ExtrusionValues | undefined);
    /** Extrusion Render Mode. Serialized as `:render` */
    get render(): ExtrusionRenderValues | undefined;
    set render(v: ExtrusionRenderValues | undefined);
    /** Extrusion Viewpoint Origin. Serialized as `:viewpointorigin` */
    get viewpointOrigin(): StringValue | undefined;
    set viewpointOrigin(v: StringValue | undefined);
    /** Extrusion Viewpoint. Serialized as `:viewpoint` */
    get viewpoint(): StringValue | undefined;
    set viewpoint(v: StringValue | undefined);
    /** Extrusion Skew Angle. Serialized as `:skewangle` */
    get skewAngle(): SingleValue | undefined;
    set skewAngle(v: SingleValue | undefined);
    /** Extrusion Skew. Serialized as `:skewamt` */
    get skewAmount(): StringValue | undefined;
    set skewAmount(v: StringValue | undefined);
    /** Forward Extrusion. Serialized as `:foredepth` */
    get forceDepth(): StringValue | undefined;
    set forceDepth(v: StringValue | undefined);
    /** Backward Extrusion Depth. Serialized as `:backdepth` */
    get backDepth(): StringValue | undefined;
    set backDepth(v: StringValue | undefined);
    /** Rotation Axis. Serialized as `:orientation` */
    get orientation(): StringValue | undefined;
    set orientation(v: StringValue | undefined);
    /** Rotation Around Axis. Serialized as `:orientationangle` */
    get orientationAngle(): SingleValue | undefined;
    set orientationAngle(v: SingleValue | undefined);
    /** Rotation Toggle. Serialized as `:lockrotationcenter` */
    get lockRotationCenter(): TrueFalseValue | undefined;
    set lockRotationCenter(v: TrueFalseValue | undefined);
    /** Center of Rotation Toggle. Serialized as `:autorotationcenter` */
    get autoRotationCenter(): TrueFalseValue | undefined;
    set autoRotationCenter(v: TrueFalseValue | undefined);
    /** Rotation Center. Serialized as `:rotationcenter` */
    get rotationCenter(): StringValue | undefined;
    set rotationCenter(v: StringValue | undefined);
    /** X-Y Rotation Angle. Serialized as `:rotationangle` */
    get rotationAngle(): StringValue | undefined;
    set rotationAngle(v: StringValue | undefined);
    /** Extrusion Color. Serialized as `:color` */
    get color(): StringValue | undefined;
    set color(v: StringValue | undefined);
    /** Shininess. Serialized as `:shininess` */
    get shininess(): SingleValue | undefined;
    set shininess(v: SingleValue | undefined);
    /** Specularity. Serialized as `:specularity` */
    get specularity(): StringValue | undefined;
    set specularity(v: StringValue | undefined);
    /** Diffuse Reflection. Serialized as `:diffusity` */
    get diffusity(): StringValue | undefined;
    set diffusity(v: StringValue | undefined);
    /** Metallic Surface Toggle. Serialized as `:metal` */
    get metal(): TrueFalseValue | undefined;
    set metal(v: TrueFalseValue | undefined);
    /** Simulated Bevel. Serialized as `:edge` */
    get edge(): StringValue | undefined;
    set edge(v: StringValue | undefined);
    /** Faceting Quality. Serialized as `:facet` */
    get facet(): StringValue | undefined;
    set facet(v: StringValue | undefined);
    /** Shape Face Lighting Toggle. Serialized as `:lightface` */
    get lightFace(): TrueFalseValue | undefined;
    set lightFace(v: TrueFalseValue | undefined);
    /** Brightness. Serialized as `:brightness` */
    get brightness(): StringValue | undefined;
    set brightness(v: StringValue | undefined);
    /** Primary Light Position. Serialized as `:lightposition` */
    get lightPosition(): StringValue | undefined;
    set lightPosition(v: StringValue | undefined);
    /** Primary Light Intensity. Serialized as `:lightlevel` */
    get lightLevel(): StringValue | undefined;
    set lightLevel(v: StringValue | undefined);
    /** Primary Light Harshness Toggle. Serialized as `:lightharsh` */
    get lightHarsh(): TrueFalseValue | undefined;
    set lightHarsh(v: TrueFalseValue | undefined);
    /** Secondary Light Position. Serialized as `:lightposition2` */
    get lightPosition2(): StringValue | undefined;
    set lightPosition2(v: StringValue | undefined);
    /** Secondary Light Intensity. Serialized as `:lightlevel2` */
    get lightLevel2(): StringValue | undefined;
    set lightLevel2(v: StringValue | undefined);
    /** Secondary Light Harshness Toggle. Serialized as `:lightharsh2` */
    get lightHarsh2(): TrueFalseValue | undefined;
    set lightHarsh2(v: TrueFalseValue | undefined);
}
/** Skew Transform. Serialized as `o:skew` */
export declare class Skew extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Skew ID. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Skew Toggle. Serialized as `:on` */
    get on(): TrueFalseValue | undefined;
    set on(v: TrueFalseValue | undefined);
    /** Skew Offset. Serialized as `:offset` */
    get offset(): StringValue | undefined;
    set offset(v: StringValue | undefined);
    /** Skew Origin. Serialized as `:origin` */
    get origin(): StringValue | undefined;
    set origin(v: StringValue | undefined);
    /** Skew Perspective Matrix. Serialized as `:matrix` */
    get matrix(): StringValue | undefined;
    set matrix(v: StringValue | undefined);
}
/** VML Diagram. Serialized as `o:diagram` */
export declare class Diagram extends OxmlCompositeElement<RelationTable> {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Diagram Style Options. Serialized as `:dgmstyle` */
    get style(): IntegerValue | undefined;
    set style(v: IntegerValue | undefined);
    /** Diagram Automatic Format. Serialized as `:autoformat` */
    get autoFormat(): TrueFalseValue | undefined;
    set autoFormat(v: TrueFalseValue | undefined);
    /** Diagram Reverse Direction. Serialized as `:reverse` */
    get reverse(): TrueFalseValue | undefined;
    set reverse(v: TrueFalseValue | undefined);
    /** Diagram Automatic Layout. Serialized as `:autolayout` */
    get autoLayout(): TrueFalseValue | undefined;
    set autoLayout(v: TrueFalseValue | undefined);
    /** Diagram Layout X Scale. Serialized as `:dgmscalex` */
    get scaleX(): IntegerValue | undefined;
    set scaleX(v: IntegerValue | undefined);
    /** Diagram Layout Y Scale. Serialized as `:dgmscaley` */
    get scaleY(): IntegerValue | undefined;
    set scaleY(v: IntegerValue | undefined);
    /** Diagram Font Size. Serialized as `:dgmfontsize` */
    get fontSize(): IntegerValue | undefined;
    set fontSize(v: IntegerValue | undefined);
    /** Diagram Layout Extents. Serialized as `:constrainbounds` */
    get constrainBounds(): StringValue | undefined;
    set constrainBounds(v: StringValue | undefined);
    /** Diagram Base Font Size. Serialized as `:dgmbasetextscale` */
    get baseTextScale(): IntegerValue | undefined;
    set baseTextScale(v: IntegerValue | undefined);
    /** Diagram Relationship Table. */
    get relationTable(): RelationTable | undefined;
}
/** Ink. Serialized as `o:ink` */
export declare class Ink extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Ink Data. Serialized as `:i` */
    get inkData(): Base64BinaryValue | undefined;
    set inkData(v: Base64BinaryValue | undefined);
    /** Annotation Flag. Serialized as `:annotation` */
    get annotationFlag(): TrueFalseValue | undefined;
    set annotationFlag(v: TrueFalseValue | undefined);
}
/** Digital Signature Line. Serialized as `o:signatureline` */
export declare class SignatureLine extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Signature Line Flag. Serialized as `:issignatureline` */
    get isSignatureLine(): TrueFalseValue | undefined;
    set isSignatureLine(v: TrueFalseValue | undefined);
    /** Unique ID. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Signature Provider ID. Serialized as `:provid` */
    get providerId(): StringValue | undefined;
    set providerId(v: StringValue | undefined);
    /** Use Signing Instructions Flag. Serialized as `:signinginstructionsset` */
    get signingInstructionsSet(): TrueFalseValue | undefined;
    set signingInstructionsSet(v: TrueFalseValue | undefined);
    /** User-specified Comments Flag. Serialized as `:allowcomments` */
    get allowComments(): TrueFalseValue | undefined;
    set allowComments(v: TrueFalseValue | undefined);
    /** Show Signed Date Flag. Serialized as `:showsigndate` */
    get showSignDate(): TrueFalseValue | undefined;
    set showSignDate(v: TrueFalseValue | undefined);
    /** Suggested Signer Line 1. Serialized as `o:suggestedsigner` */
    get suggestedSigner(): StringValue | undefined;
    set suggestedSigner(v: StringValue | undefined);
    /** Suggested Signer Line 2. Serialized as `o:suggestedsigner2` */
    get suggestedSigner2(): StringValue | undefined;
    set suggestedSigner2(v: StringValue | undefined);
    /** Suggested Signer E-mail Address. Serialized as `o:suggestedsigneremail` */
    get suggestedSignerEmail(): StringValue | undefined;
    set suggestedSignerEmail(v: StringValue | undefined);
    /** Instructions for Signing. Serialized as `:signinginstructions` */
    get signingInstructions(): StringValue | undefined;
    set signingInstructions(v: StringValue | undefined);
    /** Additional Signature Information. Serialized as `:addlxml` */
    get additionalXml(): StringValue | undefined;
    set additionalXml(v: StringValue | undefined);
    /** Signature Provider Download URL. Serialized as `:sigprovurl` */
    get signatureProviderUrl(): StringValue | undefined;
    set signatureProviderUrl(v: StringValue | undefined);
}
/** Shape Layout Properties. Serialized as `o:shapelayout` */
export declare class ShapeLayout extends OxmlCompositeElement<ShapeIdMap | RegroupTable | Rules> {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Shape ID Map. */
    get shapeIdMap(): ShapeIdMap | undefined;
    /** Shape Grouping History. */
    get regroupTable(): RegroupTable | undefined;
    /** Rule Set. */
    get rules(): Rules | undefined;
}
/** New Shape Defaults. Serialized as `o:shapedefaults` */
export declare class ShapeDefaults extends OxmlCompositeElement<VFill | VImageData | VStroke | VTextBox | VShadow | Skew | Extrusion | Callout | Lock | ColorMostRecentlyUsed | ColorMenu> {
    static _Q: string;
    static _A: string[];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    get extension(): ExtensionHandlingBehaviorValues | undefined;
    set extension(v: ExtensionHandlingBehaviorValues | undefined);
    /** Shape ID Optional Storage. Serialized as `:spidmax` */
    get maxShapeId(): IntegerValue | undefined;
    set maxShapeId(v: IntegerValue | undefined);
    /** style. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Shape Fill Toggle. Serialized as `:fill` */
    get beFilled(): TrueFalseValue | undefined;
    set beFilled(v: TrueFalseValue | undefined);
    /** Default Fill Color. Serialized as `:fillcolor` */
    get fillColor(): StringValue | undefined;
    set fillColor(v: StringValue | undefined);
    /** Shape Stroke Toggle. Serialized as `:stroke` */
    get isStroke(): TrueFalseValue | undefined;
    set isStroke(v: TrueFalseValue | undefined);
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    get strokeColor(): StringValue | undefined;
    set strokeColor(v: StringValue | undefined);
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    get allowInCell(): TrueFalseValue | undefined;
    set allowInCell(v: TrueFalseValue | undefined);
    /** allowoverlap. Serialized as `o:allowoverlap` */
    get allowOverlap(): TrueFalseValue | undefined;
    set allowOverlap(v: TrueFalseValue | undefined);
    /** insetmode. Serialized as `o:insetmode` */
    get insetMode(): InsetMarginValues | undefined;
    set insetMode(v: InsetMarginValues | undefined);
    /** Returns VFill. */
    get fill(): VFill | undefined;
    /** Returns VImageData. */
    get imageData(): VImageData | undefined;
    /** Returns VStroke. */
    get stroke(): VStroke | undefined;
    /** Returns VTextBox. */
    get textBox(): VTextBox | undefined;
    /** Returns VShadow. */
    get shadow(): VShadow | undefined;
    /** Returns Skew. */
    get skew(): Skew | undefined;
    /** Returns Extrusion. */
    get extrusion(): Extrusion | undefined;
    /** Callout. */
    get callout(): Callout | undefined;
    /** Shape Protections. */
    get lock(): Lock | undefined;
    /** Most Recently Used Colors. */
    get colorMostRecentlyUsed(): ColorMostRecentlyUsed | undefined;
    /** UI Default Colors. */
    get colorMenu(): ColorMenu | undefined;
}
export declare function initVmlOfficeNamespace(): {
    prefix: string;
    xmlns: string;
};
