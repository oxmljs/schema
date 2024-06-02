import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { TrueFalseBlankValue } from '../../../framework/types/TrueFalseBlankValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { TrueFalseValue } from '../../../framework/types/TrueFalseValue';
import { DecimalValue } from '../../../framework/types/DecimalValue';
import { SingleValue } from '../../../framework/types/SingleValue';
import { IntegerValue } from '../../../framework/types/IntegerValue';
import { Base64BinaryValue } from '../../../framework/types/Base64BinaryValue';
import { ExtensionHandlingBehaviorValues, ExtensionHandlingBehaviorValuesArray } from '../../Vml';
import { StrokeLineStyleValues, StrokeLineStyleValuesArray } from '../../Vml';
import { StrokeJoinStyleValues, StrokeJoinStyleValuesArray } from '../../Vml';
import { StrokeEndCapValues, StrokeEndCapValuesArray } from '../../Vml';
import { FillTypeValues, FillTypeValuesArray } from '../../Vml';
import { ImageAspectValues, ImageAspectValuesArray } from '../../Vml';
import { StrokeArrowValues, StrokeArrowValuesArray } from '../../Vml';
import { StrokeArrowWidthValues, StrokeArrowWidthValuesArray } from '../../Vml';
import { StrokeArrowLengthValues, StrokeArrowLengthValuesArray } from '../../Vml';import { Fill as VFill } from '../../Vml';
import { ImageData as VImageData } from '../../Vml';
import { Stroke as VStroke } from '../../Vml';
import { TextBox as VTextBox } from '../../Vml';
import { Shadow as VShadow } from '../../Vml';


export enum AlignmentValues {
    /** Top Alignment. Serialized value: `top` */
    Top = 'top',
    /** Middle Alignment. Serialized value: `middle` */
    Middle = 'middle',
    /** Bottom Alignment. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** Left Alignment. Serialized value: `left` */
    Left = 'left',
    /** Center Alignment. Serialized value: `center` */
    Center = 'center',
    /** Right Alignment. Serialized value: `right` */
    Right = 'right',
}

export const AlignmentValuesArray = [
    AlignmentValues.Top,
    AlignmentValues.Middle,
    AlignmentValues.Bottom,
    AlignmentValues.Left,
    AlignmentValues.Center,
    AlignmentValues.Right,
] as const;

export enum ScreenSizeValues {
    /** 544x376 pixels. Serialized value: `544,376` */
    Sz544x376 = '544,376',
    /** 640x480 pixels. Serialized value: `640,480` */
    Sz640x480 = '640,480',
    /** 720x512 pixels. Serialized value: `720,512` */
    Sz720x512 = '720,512',
    /** 800x600 pixels. Serialized value: `800,600` */
    Sz800x600 = '800,600',
    /** 1024x768 pixels. Serialized value: `1024,768` */
    Sz1024x768 = '1024,768',
    /** 1152x862 pixels. Serialized value: `1152,862` */
    Sz1152x862 = '1152,862',
}

export const ScreenSizeValuesArray = [
    ScreenSizeValues.Sz544x376,
    ScreenSizeValues.Sz640x480,
    ScreenSizeValues.Sz720x512,
    ScreenSizeValues.Sz800x600,
    ScreenSizeValues.Sz1024x768,
    ScreenSizeValues.Sz1152x862,
] as const;

export enum InsetMarginValues {
    /** Automatic Margins. Serialized value: `auto` */
    Auto = 'auto',
    /** Custom Margins. Serialized value: `custom` */
    Custom = 'custom',
}

export const InsetMarginValuesArray = [
    InsetMarginValues.Auto,
    InsetMarginValues.Custom,
] as const;

export enum ColorModeValues {
    /** Use Shape Fill Color. Serialized value: `auto` */
    Auto = 'auto',
    /** Use Custom Color. Serialized value: `custom` */
    Custom = 'custom',
}

export const ColorModeValuesArray = [
    ColorModeValues.Auto,
    ColorModeValues.Custom,
] as const;

export enum ExtrusionValues {
    /** Perspective Projection. Serialized value: `perspective` */
    Perspective = 'perspective',
    /** Parallel Projection. Serialized value: `parallel` */
    Parallel = 'parallel',
}

export const ExtrusionValuesArray = [
    ExtrusionValues.Perspective,
    ExtrusionValues.Parallel,
] as const;

export enum ExtrusionRenderValues {
    /** Solid. Serialized value: `solid` */
    Solid = 'solid',
    /** Wireframe. Serialized value: `wireFrame` */
    WireFrame = 'wireFrame',
    /** Bounding Cube. Serialized value: `boundingCube` */
    BoundingCube = 'boundingCube',
}

export const ExtrusionRenderValuesArray = [
    ExtrusionRenderValues.Solid,
    ExtrusionRenderValues.WireFrame,
    ExtrusionRenderValues.BoundingCube,
] as const;

export enum ExtrusionPlaneValues {
    /** XY Plane. Serialized value: `XY` */
    XY = 'XY',
    /** ZX Plane. Serialized value: `ZX` */
    ZX = 'ZX',
    /** YZ Plane. Serialized value: `YZ` */
    YZ = 'YZ',
}

export const ExtrusionPlaneValuesArray = [
    ExtrusionPlaneValues.XY,
    ExtrusionPlaneValues.ZX,
    ExtrusionPlaneValues.YZ,
] as const;

export enum AngleValues {
    /** Any Angle. Serialized value: `any` */
    Any = 'any',
    /** 30 degrees. Serialized value: `30` */
    Degree30 = '30',
    /** 45 degrees. Serialized value: `45` */
    Degree45 = '45',
    /** 60 degrees. Serialized value: `60` */
    Degree60 = '60',
    /** 90 degrees. Serialized value: `90` */
    Degree90 = '90',
    /** Automatic Angle. Serialized value: `auto` */
    Auto = 'auto',
}

export const AngleValuesArray = [
    AngleValues.Any,
    AngleValues.Degree30,
    AngleValues.Degree45,
    AngleValues.Degree60,
    AngleValues.Degree90,
    AngleValues.Auto,
] as const;

export enum CalloutPlacementValues {
    /** Top placement. Serialized value: `top` */
    Top = 'top',
    /** Center placement. Serialized value: `center` */
    Center = 'center',
    /** Bottom placement. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** User-defined placement. Serialized value: `user` */
    User = 'user',
}

export const CalloutPlacementValuesArray = [
    CalloutPlacementValues.Top,
    CalloutPlacementValues.Center,
    CalloutPlacementValues.Bottom,
    CalloutPlacementValues.User,
] as const;

export enum ConnectorValues {
    /** No Connector. Serialized value: `none` */
    None = 'none',
    /** Straight Connector. Serialized value: `straight` */
    Straight = 'straight',
    /** Elbow Connector. Serialized value: `elbow` */
    Elbow = 'elbow',
    /** Curved Connector. Serialized value: `curved` */
    Curved = 'curved',
}

export const ConnectorValuesArray = [
    ConnectorValues.None,
    ConnectorValues.Straight,
    ConnectorValues.Elbow,
    ConnectorValues.Curved,
] as const;

export enum HorizontalRuleAlignmentValues {
    /** Left Alignment. Serialized value: `left` */
    Left = 'left',
    /** Right Alignment. Serialized value: `right` */
    Right = 'right',
    /** Center Alignment. Serialized value: `center` */
    Center = 'center',
}

export const HorizontalRuleAlignmentValuesArray = [
    HorizontalRuleAlignmentValues.Left,
    HorizontalRuleAlignmentValues.Right,
    HorizontalRuleAlignmentValues.Center,
] as const;

export enum ConnectValues {
    /** No. Serialized value: `none` */
    None = 'none',
    /** Four Connections. Serialized value: `rect` */
    Rectangle = 'rect',
    /** Edit Point Connections. Serialized value: `segments` */
    Segments = 'segments',
    /** Custom Connections. Serialized value: `custom` */
    Custom = 'custom',
}

export const ConnectValuesArray = [
    ConnectValues.None,
    ConnectValues.Rectangle,
    ConnectValues.Segments,
    ConnectValues.Custom,
] as const;

export enum OleLinkValues {
    /** Other Image. Serialized value: `Picture` */
    Picture = 'Picture',
    /** Bitmap Image. Serialized value: `Bitmap` */
    Bitmap = 'Bitmap',
    /** Enhanced Metafile Image. Serialized value: `EnhancedMetaFile` */
    EnhancedMetaFile = 'EnhancedMetaFile',
}

export const OleLinkValuesArray = [
    OleLinkValues.Picture,
    OleLinkValues.Bitmap,
    OleLinkValues.EnhancedMetaFile,
] as const;

export enum OleValues {
    /** Embedded Object. Serialized value: `Embed` */
    Embed = 'Embed',
    /** Linked Object. Serialized value: `Link` */
    Link = 'Link',
}

export const OleValuesArray = [
    OleValues.Embed,
    OleValues.Link,
] as const;

export enum OleDrawAspectValues {
    /** Snapshot. Serialized value: `Content` */
    Content = 'Content',
    /** Icon. Serialized value: `Icon` */
    Icon = 'Icon',
}

export const OleDrawAspectValuesArray = [
    OleDrawAspectValues.Content,
    OleDrawAspectValues.Icon,
] as const;

export enum OleUpdateModeValues {
    /** Server Application Update. Serialized value: `Always` */
    Always = 'Always',
    /** User Update. Serialized value: `OnCall` */
    OnCall = 'OnCall',
}

export const OleUpdateModeValuesArray = [
    OleUpdateModeValues.Always,
    OleUpdateModeValues.OnCall,
] as const;

export enum FillValues {
    /** Centered Radial Gradient. Serialized value: `gradientCenter` */
    GradientCenter = 'gradientCenter',
    /** Solid Fill. Serialized value: `solid` */
    Solid = 'solid',
    /** Image Pattern. Serialized value: `pattern` */
    Pattern = 'pattern',
    /** Tiled Image. Serialized value: `tile` */
    Tile = 'tile',
    /** Stretch Image to Fit. Serialized value: `frame` */
    Frame = 'frame',
    /** Unscaled Gradient. Serialized value: `gradientUnscaled` */
    GradientUnscaled = 'gradientUnscaled',
    /** Radial Gradient. Serialized value: `gradientRadial` */
    GradientRadial = 'gradientRadial',
    /** Linear Gradient. Serialized value: `gradient` */
    Gradient = 'gradient',
    /** Use Background Fill. Serialized value: `background` */
    Background = 'background',
}

export const FillValuesArray = [
    FillValues.GradientCenter,
    FillValues.Solid,
    FillValues.Pattern,
    FillValues.Tile,
    FillValues.Frame,
    FillValues.GradientUnscaled,
    FillValues.GradientRadial,
    FillValues.Gradient,
    FillValues.Background,
] as const;

export enum RuleValues {
    /** Arc Rule. Serialized value: `arc` */
    Arc = 'arc',
    /** Callout Rule. Serialized value: `callout` */
    Callout = 'callout',
    /** Connector Rule. Serialized value: `connector` */
    Connector = 'connector',
}

export const RuleValuesArray = [
    RuleValues.Arc,
    RuleValues.Callout,
    RuleValues.Connector,
] as const;

export enum BlackAndWhiteModeValues {
    /** Color. Serialized value: `color` */
    Color = 'color',
    /** Automatic. Serialized value: `auto` */
    Auto = 'auto',
    /** Grayscale. Serialized value: `grayScale` */
    GrayScale = 'grayScale',
    /** Light grayscale. Serialized value: `lightGrayScale` */
    LightGrayScale = 'lightGrayScale',
    /** Inverse Grayscale. Serialized value: `inverseGray` */
    InverseGray = 'inverseGray',
    /** Gray Outlines. Serialized value: `grayOutline` */
    GrayOutline = 'grayOutline',
    /** Black And White. Serialized value: `highContrast` */
    HighContrast = 'highContrast',
    /** Black. Serialized value: `black` */
    Black = 'black',
    /** White. Serialized value: `white` */
    White = 'white',
    /** Do Not Show. Serialized value: `undrawn` */
    Undrawn = 'undrawn',
    /** Black Text And Lines. Serialized value: `blackTextAndLines` */
    BlackTextAndLines = 'blackTextAndLines',
}

export const BlackAndWhiteModeValuesArray = [
    BlackAndWhiteModeValues.Color,
    BlackAndWhiteModeValues.Auto,
    BlackAndWhiteModeValues.GrayScale,
    BlackAndWhiteModeValues.LightGrayScale,
    BlackAndWhiteModeValues.InverseGray,
    BlackAndWhiteModeValues.GrayOutline,
    BlackAndWhiteModeValues.HighContrast,
    BlackAndWhiteModeValues.Black,
    BlackAndWhiteModeValues.White,
    BlackAndWhiteModeValues.Undrawn,
    BlackAndWhiteModeValues.BlackTextAndLines,
] as const;

/** UI Default Colors. Serialized as `o:colormenu` */
export class ColorMenu extends OxmlLeafElement {

    public static override _Q = 'o:colormenu';
    public static override _A = ['v:ext',':strokecolor',':fillcolor',':shadowcolor',':extrusioncolor',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Default stroke color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Default fill color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Default shadow color. Serialized as `:shadowcolor` */
    public get shadowColor(): StringValue | undefined { return this._g(':shadowcolor'); }
    public set shadowColor(v: StringValue | undefined) { this._s(':shadowcolor', v); }
    /** Default extrusion color. Serialized as `:extrusioncolor` */
    public get extrusionColor(): StringValue | undefined { return this._g(':extrusioncolor'); }
    public set extrusionColor(v: StringValue | undefined) { this._s(':extrusioncolor', v); }

}
/** Most Recently Used Colors. Serialized as `o:colormru` */
export class ColorMostRecentlyUsed extends OxmlLeafElement {

    public static override _Q = 'o:colormru';
    public static override _A = ['v:ext',':colors',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Recent colors. Serialized as `:colors` */
    public get colors(): StringValue | undefined { return this._g(':colors'); }
    public set colors(v: StringValue | undefined) { this._s(':colors', v); }

}
/** Shape Reference. Serialized as `o:proxy` */
export class Proxy extends OxmlLeafElement {

    public static override _Q = 'o:proxy';
    public static override _A = [':start',':end',':idref',':connectloc',];
    /** Start Point Connection Flag. Serialized as `:start` */
    public get start(): TrueFalseBlankValue | undefined { return this._g(':start'); }
    public set start(v: TrueFalseBlankValue | undefined) { this._s(':start', v); }
    /** End Point Connection Flag. Serialized as `:end` */
    public get end(): TrueFalseBlankValue | undefined { return this._g(':end'); }
    public set end(v: TrueFalseBlankValue | undefined) { this._s(':end', v); }
    /** Proxy Shape Reference. Serialized as `:idref` */
    public get shapeReference(): StringValue | undefined { return this._g(':idref'); }
    public set shapeReference(v: StringValue | undefined) { this._s(':idref', v); }
    /** Connection Location. Serialized as `:connectloc` */
    public get connectionLocation(): Int32Value | undefined { return this._g(':connectloc'); }
    public set connectionLocation(v: Int32Value | undefined) { this._s(':connectloc', v); }

}
/** WordprocessingML Field Switches. Serialized as `o:FieldCodes` */
export class FieldCodes extends OxmlLeafTextElement {

    public static override _Q = 'o:FieldCodes';

}
/** Embedded Object Cannot Be Refreshed. Serialized as `o:LockedField` */
export class LockedField extends OxmlLeafTextElement {

    public static override _Q = 'o:LockedField';

}
/** Embedded Object Alternate Image Request. Serialized as `o:LinkType` */
export class LinkType extends OxmlLeafTextElement {

    public static override _Q = 'o:LinkType';

}
/** Diagram Relationship. Serialized as `o:rel` */
export class Relation extends OxmlLeafElement {

    public static override _Q = 'o:rel';
    public static override _A = ['v:ext',':idsrc',':iddest',':idcntr',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Diagram Relationship Source Shape. Serialized as `:idsrc` */
    public get sourceId(): StringValue | undefined { return this._g(':idsrc'); }
    public set sourceId(v: StringValue | undefined) { this._s(':idsrc', v); }
    /** Diagram Relationship Destination Shape. Serialized as `:iddest` */
    public get destinationId(): StringValue | undefined { return this._g(':iddest'); }
    public set destinationId(v: StringValue | undefined) { this._s(':iddest', v); }
    /** Diagram Relationship Center Shape. Serialized as `:idcntr` */
    public get centerShapeId(): StringValue | undefined { return this._g(':idcntr'); }
    public set centerShapeId(v: StringValue | undefined) { this._s(':idcntr', v); }

}
/** Diagram Relationship Table. Serialized as `o:relationtable` */
export class RelationTable extends OxmlCompositeElement<Relation> {

    public static override _Q = 'o:relationtable';
    public static override _A = ['v:ext',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }

}
/** Rule. Serialized as `o:r` */
export class Rule extends OxmlCompositeElement<Proxy> {

    public static override _Q = 'o:r';
    public static override _A = [':id',':type',':how',':idref',];
    /** Rule ID. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Rule Type. Serialized as `:type` */
    public get type(): RuleValues | undefined { return this._g(':type'); }
    public set type(v: RuleValues | undefined) { this._s(':type', v); }
    /** Alignment Rule Type. Serialized as `:how` */
    public get how(): AlignmentValues | undefined { return this._g(':how'); }
    public set how(v: AlignmentValues | undefined) { this._s(':how', v); }
    /** Rule Shape Reference. Serialized as `:idref` */
    public get shapeReference(): StringValue | undefined { return this._g(':idref'); }
    public set shapeReference(v: StringValue | undefined) { this._s(':idref', v); }

}
/** Regroup Entry. Serialized as `o:entry` */
export class Entry extends OxmlLeafElement {

    public static override _Q = 'o:entry';
    public static override _A = [':new',':old',];
    /** New Group ID. Serialized as `:new` */
    public get new(): Int32Value | undefined { return this._g(':new'); }
    public set new(v: Int32Value | undefined) { this._s(':new', v); }
    /** Old Group ID. Serialized as `:old` */
    public get old(): Int32Value | undefined { return this._g(':old'); }
    public set old(v: Int32Value | undefined) { this._s(':old', v); }

}
/** Rule Set. Serialized as `o:rules` */
export class Rules extends OxmlCompositeElement<Rule> {

    public static override _Q = 'o:rules';
    public static override _A = ['v:ext',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }

}
/** Shape Grouping History. Serialized as `o:regrouptable` */
export class RegroupTable extends OxmlCompositeElement<Entry> {

    public static override _Q = 'o:regrouptable';
    public static override _A = ['v:ext',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }

}
/** Shape ID Map. Serialized as `o:idmap` */
export class ShapeIdMap extends OxmlLeafElement {

    public static override _Q = 'o:idmap';
    public static override _A = ['v:ext',':data',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Shape IDs. Serialized as `:data` */
    public get data(): StringValue | undefined { return this._g(':data'); }
    public set data(v: StringValue | undefined) { this._s(':data', v); }

}
/** Shape Fill Extended Properties. Serialized as `o:fill` */
export class FillExtendedProperties extends OxmlLeafElement {

    public static override _Q = 'o:fill';
    public static override _A = ['v:ext',':type',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Fill Type. Serialized as `:type` */
    public get type(): FillValues | undefined { return this._g(':type'); }
    public set type(v: FillValues | undefined) { this._s(':type', v); }

}
/** Shape Clipping Path. Serialized as `o:clippath` */
export class ClipPath extends OxmlLeafElement {

    public static override _Q = 'o:clippath';
    public static override _A = ['o:v',];
    /** Path Definition. Serialized as `o:v` */
    public get value(): StringValue | undefined { return this._g('o:v'); }
    public set value(v: StringValue | undefined) { this._s('o:v', v); }

}
/** Defines the StrokeChildType Class. */
export abstract class StrokeChildType extends OxmlLeafElement {

    public static override _A = ['v:ext',':on',':weight',':color',':color2',':opacity',':linestyle',':miterlimit',':joinstyle',':endcap',':dashstyle',':insetpen',':filltype',':src',':imageaspect',':imagesize',':imagealignshape',':startarrow',':startarrowwidth',':startarrowlength',':endarrow',':endarrowwidth',':endarrowlength','o:href','o:althref','o:title','o:forcedash',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Stroke Toggle. Serialized as `:on` */
    public get on(): TrueFalseValue | undefined { return this._g(':on'); }
    public set on(v: TrueFalseValue | undefined) { this._s(':on', v); }
    /** Stroke Weight. Serialized as `:weight` */
    public get weight(): StringValue | undefined { return this._g(':weight'); }
    public set weight(v: StringValue | undefined) { this._s(':weight', v); }
    /** Stroke Color. Serialized as `:color` */
    public get color(): StringValue | undefined { return this._g(':color'); }
    public set color(v: StringValue | undefined) { this._s(':color', v); }
    /** Stroke Alternate Pattern Color. Serialized as `:color2` */
    public get color2(): StringValue | undefined { return this._g(':color2'); }
    public set color2(v: StringValue | undefined) { this._s(':color2', v); }
    /** Stroke Opacity. Serialized as `:opacity` */
    public get opacity(): StringValue | undefined { return this._g(':opacity'); }
    public set opacity(v: StringValue | undefined) { this._s(':opacity', v); }
    /** Stroke Line Style. Serialized as `:linestyle` */
    public get lineStyle(): StrokeLineStyleValues | undefined { return this._g(':linestyle'); }
    public set lineStyle(v: StrokeLineStyleValues | undefined) { this._s(':linestyle', v); }
    /** Miter Joint Limit. Serialized as `:miterlimit` */
    public get miterLimit(): DecimalValue | undefined { return this._g(':miterlimit'); }
    public set miterLimit(v: DecimalValue | undefined) { this._s(':miterlimit', v); }
    /** Line End Join Style). Serialized as `:joinstyle` */
    public get joinStyle(): StrokeJoinStyleValues | undefined { return this._g(':joinstyle'); }
    public set joinStyle(v: StrokeJoinStyleValues | undefined) { this._s(':joinstyle', v); }
    /** Line End Cap. Serialized as `:endcap` */
    public get endCap(): StrokeEndCapValues | undefined { return this._g(':endcap'); }
    public set endCap(v: StrokeEndCapValues | undefined) { this._s(':endcap', v); }
    /** Stroke Dash Pattern. Serialized as `:dashstyle` */
    public get dashStyle(): StringValue | undefined { return this._g(':dashstyle'); }
    public set dashStyle(v: StringValue | undefined) { this._s(':dashstyle', v); }
    /** Inset Border From Path. Serialized as `:insetpen` */
    public get insetPen(): TrueFalseValue | undefined { return this._g(':insetpen'); }
    public set insetPen(v: TrueFalseValue | undefined) { this._s(':insetpen', v); }
    /** Stroke Image Style. Serialized as `:filltype` */
    public get fillType(): FillTypeValues | undefined { return this._g(':filltype'); }
    public set fillType(v: FillTypeValues | undefined) { this._s(':filltype', v); }
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

}
/** Text Box Interior Stroke. Serialized as `o:column` */
export class ColumnStroke extends StrokeChildType {

    public static override _Q = 'o:column';

}
/** Text Box Bottom Stroke. Serialized as `o:bottom` */
export class BottomStroke extends StrokeChildType {

    public static override _Q = 'o:bottom';

}
/** Text Box Right Stroke. Serialized as `o:right` */
export class RightStroke extends StrokeChildType {

    public static override _Q = 'o:right';

}
/** Text Box Top Stroke. Serialized as `o:top` */
export class TopStroke extends StrokeChildType {

    public static override _Q = 'o:top';

}
/** Text Box Left Stroke. Serialized as `o:left` */
export class LeftStroke extends StrokeChildType {

    public static override _Q = 'o:left';

}
/** Complex. Serialized as `o:complex` */
export class Complex extends OxmlLeafElement {

    public static override _Q = 'o:complex';
    public static override _A = ['v:ext',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }

}
/** Embedded OLE Object. Serialized as `o:OLEObject` */
export class OleObject extends OxmlCompositeElement<LinkType | LockedField | FieldCodes> {

    public static override _Q = 'o:OLEObject';
    public static override _A = [':Type',':ProgID',':ShapeID',':DrawAspect',':ObjectID','r:id',':UpdateMode',];
    /** OLE Object Type. Serialized as `:Type` */
    public get type(): OleValues | undefined { return this._g(':Type'); }
    public set type(v: OleValues | undefined) { this._s(':Type', v); }
    /** OLE Object Application. Serialized as `:ProgID` */
    public get progId(): StringValue | undefined { return this._g(':ProgID'); }
    public set progId(v: StringValue | undefined) { this._s(':ProgID', v); }
    /** OLE Object Shape. Serialized as `:ShapeID` */
    public get shapeId(): StringValue | undefined { return this._g(':ShapeID'); }
    public set shapeId(v: StringValue | undefined) { this._s(':ShapeID', v); }
    /** OLE Object Representation. Serialized as `:DrawAspect` */
    public get drawAspect(): OleDrawAspectValues | undefined { return this._g(':DrawAspect'); }
    public set drawAspect(v: OleDrawAspectValues | undefined) { this._s(':DrawAspect', v); }
    /** OLE Object Unique ID. Serialized as `:ObjectID` */
    public get objectId(): StringValue | undefined { return this._g(':ObjectID'); }
    public set objectId(v: StringValue | undefined) { this._s(':ObjectID', v); }
    /** Relationship. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** OLE Update Mode. Serialized as `:UpdateMode` */
    public get updateMode(): OleUpdateModeValues | undefined { return this._g(':UpdateMode'); }
    public set updateMode(v: OleUpdateModeValues | undefined) { this._s(':UpdateMode', v); }
    /** Embedded Object Alternate Image Request. */
    public get linkType(): LinkType | undefined { return this._f(LinkType); }
    /** Embedded Object Cannot Be Refreshed. */
    public get lockedField(): LockedField | undefined { return this._f(LockedField); }
    /** WordprocessingML Field Switches. */
    public get fieldCodes(): FieldCodes | undefined { return this._f(FieldCodes); }

}
/** Defines the Lock Class. Serialized as `o:lock` */
export class Lock extends OxmlLeafElement {

    public static override _Q = 'o:lock';
    public static override _A = ['v:ext',':position',':selection',':grouping',':ungrouping',':rotation',':cropping',':verticies',':adjusthandles',':text',':aspectratio',':shapetype',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Position Lock. Serialized as `:position` */
    public get position(): TrueFalseValue | undefined { return this._g(':position'); }
    public set position(v: TrueFalseValue | undefined) { this._s(':position', v); }
    /** Selection Lock. Serialized as `:selection` */
    public get selection(): TrueFalseValue | undefined { return this._g(':selection'); }
    public set selection(v: TrueFalseValue | undefined) { this._s(':selection', v); }
    /** Grouping Lock. Serialized as `:grouping` */
    public get grouping(): TrueFalseValue | undefined { return this._g(':grouping'); }
    public set grouping(v: TrueFalseValue | undefined) { this._s(':grouping', v); }
    /** Ungrouping Lock. Serialized as `:ungrouping` */
    public get ungrouping(): TrueFalseValue | undefined { return this._g(':ungrouping'); }
    public set ungrouping(v: TrueFalseValue | undefined) { this._s(':ungrouping', v); }
    /** Rotation Lock. Serialized as `:rotation` */
    public get rotation(): TrueFalseValue | undefined { return this._g(':rotation'); }
    public set rotation(v: TrueFalseValue | undefined) { this._s(':rotation', v); }
    /** Cropping Lock. Serialized as `:cropping` */
    public get cropping(): TrueFalseValue | undefined { return this._g(':cropping'); }
    public set cropping(v: TrueFalseValue | undefined) { this._s(':cropping', v); }
    /** Vertices Lock. Serialized as `:verticies` */
    public get verticies(): TrueFalseValue | undefined { return this._g(':verticies'); }
    public set verticies(v: TrueFalseValue | undefined) { this._s(':verticies', v); }
    /** Handles Lock. Serialized as `:adjusthandles` */
    public get adjustHandles(): TrueFalseValue | undefined { return this._g(':adjusthandles'); }
    public set adjustHandles(v: TrueFalseValue | undefined) { this._s(':adjusthandles', v); }
    /** Text Lock. Serialized as `:text` */
    public get textLock(): TrueFalseValue | undefined { return this._g(':text'); }
    public set textLock(v: TrueFalseValue | undefined) { this._s(':text', v); }
    /** Aspect Ratio Lock. Serialized as `:aspectratio` */
    public get aspectRatio(): TrueFalseValue | undefined { return this._g(':aspectratio'); }
    public set aspectRatio(v: TrueFalseValue | undefined) { this._s(':aspectratio', v); }
    /** AutoShape Type Lock. Serialized as `:shapetype` */
    public get shapeType(): TrueFalseValue | undefined { return this._g(':shapetype'); }
    public set shapeType(v: TrueFalseValue | undefined) { this._s(':shapetype', v); }

}
/** Defines the Callout Class. Serialized as `o:callout` */
export class Callout extends OxmlLeafElement {

    public static override _Q = 'o:callout';
    public static override _A = ['v:ext',':on',':type',':gap',':angle',':dropauto',':drop',':distance',':lengthspecified',':length',':accentbar',':textborder',':minusx',':minusy',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Callout toggle. Serialized as `:on` */
    public get on(): TrueFalseValue | undefined { return this._g(':on'); }
    public set on(v: TrueFalseValue | undefined) { this._s(':on', v); }
    /** Callout type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** Callout gap. Serialized as `:gap` */
    public get gap(): StringValue | undefined { return this._g(':gap'); }
    public set gap(v: StringValue | undefined) { this._s(':gap', v); }
    /** Callout angle. Serialized as `:angle` */
    public get angle(): AngleValues | undefined { return this._g(':angle'); }
    public set angle(v: AngleValues | undefined) { this._s(':angle', v); }
    /** Callout automatic drop toggle. Serialized as `:dropauto` */
    public get dropAuto(): TrueFalseValue | undefined { return this._g(':dropauto'); }
    public set dropAuto(v: TrueFalseValue | undefined) { this._s(':dropauto', v); }
    /** Callout drop position. Serialized as `:drop` */
    public get drop(): StringValue | undefined { return this._g(':drop'); }
    public set drop(v: StringValue | undefined) { this._s(':drop', v); }
    /** Callout drop distance. Serialized as `:distance` */
    public get distance(): StringValue | undefined { return this._g(':distance'); }
    public set distance(v: StringValue | undefined) { this._s(':distance', v); }
    /** Callout length toggle. Serialized as `:lengthspecified` */
    public get lengthSpecified(): TrueFalseValue | undefined { return this._g(':lengthspecified'); }
    public set lengthSpecified(v: TrueFalseValue | undefined) { this._s(':lengthspecified', v); }
    /** Callout length. Serialized as `:length` */
    public get length(): StringValue | undefined { return this._g(':length'); }
    public set length(v: StringValue | undefined) { this._s(':length', v); }
    /** Callout accent bar toggle. Serialized as `:accentbar` */
    public get accentBar(): TrueFalseValue | undefined { return this._g(':accentbar'); }
    public set accentBar(v: TrueFalseValue | undefined) { this._s(':accentbar', v); }
    /** Callout text border toggle. Serialized as `:textborder` */
    public get textBorder(): TrueFalseValue | undefined { return this._g(':textborder'); }
    public set textBorder(v: TrueFalseValue | undefined) { this._s(':textborder', v); }
    /** Callout flip x. Serialized as `:minusx` */
    public get minusX(): TrueFalseValue | undefined { return this._g(':minusx'); }
    public set minusX(v: TrueFalseValue | undefined) { this._s(':minusx', v); }
    /** Callout flip y. Serialized as `:minusy` */
    public get minusY(): TrueFalseValue | undefined { return this._g(':minusy'); }
    public set minusY(v: TrueFalseValue | undefined) { this._s(':minusy', v); }

}
/** 3D Extrusion. Serialized as `o:extrusion` */
export class Extrusion extends OxmlLeafElement {

    public static override _Q = 'o:extrusion';
    public static override _A = ['v:ext',':on',':type',':render',':viewpointorigin',':viewpoint',':skewangle',':skewamt',':foredepth',':backdepth',':orientation',':orientationangle',':lockrotationcenter',':autorotationcenter',':rotationcenter',':rotationangle',':color',':shininess',':specularity',':diffusity',':metal',':edge',':facet',':lightface',':brightness',':lightposition',':lightlevel',':lightharsh',':lightposition2',':lightlevel2',':lightharsh2',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Extrusion Toggle. Serialized as `:on` */
    public get on(): TrueFalseValue | undefined { return this._g(':on'); }
    public set on(v: TrueFalseValue | undefined) { this._s(':on', v); }
    /** Extrusion Type. Serialized as `:type` */
    public get type(): ExtrusionValues | undefined { return this._g(':type'); }
    public set type(v: ExtrusionValues | undefined) { this._s(':type', v); }
    /** Extrusion Render Mode. Serialized as `:render` */
    public get render(): ExtrusionRenderValues | undefined { return this._g(':render'); }
    public set render(v: ExtrusionRenderValues | undefined) { this._s(':render', v); }
    /** Extrusion Viewpoint Origin. Serialized as `:viewpointorigin` */
    public get viewpointOrigin(): StringValue | undefined { return this._g(':viewpointorigin'); }
    public set viewpointOrigin(v: StringValue | undefined) { this._s(':viewpointorigin', v); }
    /** Extrusion Viewpoint. Serialized as `:viewpoint` */
    public get viewpoint(): StringValue | undefined { return this._g(':viewpoint'); }
    public set viewpoint(v: StringValue | undefined) { this._s(':viewpoint', v); }
    /** Extrusion Skew Angle. Serialized as `:skewangle` */
    public get skewAngle(): SingleValue | undefined { return this._g(':skewangle'); }
    public set skewAngle(v: SingleValue | undefined) { this._s(':skewangle', v); }
    /** Extrusion Skew. Serialized as `:skewamt` */
    public get skewAmount(): StringValue | undefined { return this._g(':skewamt'); }
    public set skewAmount(v: StringValue | undefined) { this._s(':skewamt', v); }
    /** Forward Extrusion. Serialized as `:foredepth` */
    public get forceDepth(): StringValue | undefined { return this._g(':foredepth'); }
    public set forceDepth(v: StringValue | undefined) { this._s(':foredepth', v); }
    /** Backward Extrusion Depth. Serialized as `:backdepth` */
    public get backDepth(): StringValue | undefined { return this._g(':backdepth'); }
    public set backDepth(v: StringValue | undefined) { this._s(':backdepth', v); }
    /** Rotation Axis. Serialized as `:orientation` */
    public get orientation(): StringValue | undefined { return this._g(':orientation'); }
    public set orientation(v: StringValue | undefined) { this._s(':orientation', v); }
    /** Rotation Around Axis. Serialized as `:orientationangle` */
    public get orientationAngle(): SingleValue | undefined { return this._g(':orientationangle'); }
    public set orientationAngle(v: SingleValue | undefined) { this._s(':orientationangle', v); }
    /** Rotation Toggle. Serialized as `:lockrotationcenter` */
    public get lockRotationCenter(): TrueFalseValue | undefined { return this._g(':lockrotationcenter'); }
    public set lockRotationCenter(v: TrueFalseValue | undefined) { this._s(':lockrotationcenter', v); }
    /** Center of Rotation Toggle. Serialized as `:autorotationcenter` */
    public get autoRotationCenter(): TrueFalseValue | undefined { return this._g(':autorotationcenter'); }
    public set autoRotationCenter(v: TrueFalseValue | undefined) { this._s(':autorotationcenter', v); }
    /** Rotation Center. Serialized as `:rotationcenter` */
    public get rotationCenter(): StringValue | undefined { return this._g(':rotationcenter'); }
    public set rotationCenter(v: StringValue | undefined) { this._s(':rotationcenter', v); }
    /** X-Y Rotation Angle. Serialized as `:rotationangle` */
    public get rotationAngle(): StringValue | undefined { return this._g(':rotationangle'); }
    public set rotationAngle(v: StringValue | undefined) { this._s(':rotationangle', v); }
    /** Extrusion Color. Serialized as `:color` */
    public get color(): StringValue | undefined { return this._g(':color'); }
    public set color(v: StringValue | undefined) { this._s(':color', v); }
    /** Shininess. Serialized as `:shininess` */
    public get shininess(): SingleValue | undefined { return this._g(':shininess'); }
    public set shininess(v: SingleValue | undefined) { this._s(':shininess', v); }
    /** Specularity. Serialized as `:specularity` */
    public get specularity(): StringValue | undefined { return this._g(':specularity'); }
    public set specularity(v: StringValue | undefined) { this._s(':specularity', v); }
    /** Diffuse Reflection. Serialized as `:diffusity` */
    public get diffusity(): StringValue | undefined { return this._g(':diffusity'); }
    public set diffusity(v: StringValue | undefined) { this._s(':diffusity', v); }
    /** Metallic Surface Toggle. Serialized as `:metal` */
    public get metal(): TrueFalseValue | undefined { return this._g(':metal'); }
    public set metal(v: TrueFalseValue | undefined) { this._s(':metal', v); }
    /** Simulated Bevel. Serialized as `:edge` */
    public get edge(): StringValue | undefined { return this._g(':edge'); }
    public set edge(v: StringValue | undefined) { this._s(':edge', v); }
    /** Faceting Quality. Serialized as `:facet` */
    public get facet(): StringValue | undefined { return this._g(':facet'); }
    public set facet(v: StringValue | undefined) { this._s(':facet', v); }
    /** Shape Face Lighting Toggle. Serialized as `:lightface` */
    public get lightFace(): TrueFalseValue | undefined { return this._g(':lightface'); }
    public set lightFace(v: TrueFalseValue | undefined) { this._s(':lightface', v); }
    /** Brightness. Serialized as `:brightness` */
    public get brightness(): StringValue | undefined { return this._g(':brightness'); }
    public set brightness(v: StringValue | undefined) { this._s(':brightness', v); }
    /** Primary Light Position. Serialized as `:lightposition` */
    public get lightPosition(): StringValue | undefined { return this._g(':lightposition'); }
    public set lightPosition(v: StringValue | undefined) { this._s(':lightposition', v); }
    /** Primary Light Intensity. Serialized as `:lightlevel` */
    public get lightLevel(): StringValue | undefined { return this._g(':lightlevel'); }
    public set lightLevel(v: StringValue | undefined) { this._s(':lightlevel', v); }
    /** Primary Light Harshness Toggle. Serialized as `:lightharsh` */
    public get lightHarsh(): TrueFalseValue | undefined { return this._g(':lightharsh'); }
    public set lightHarsh(v: TrueFalseValue | undefined) { this._s(':lightharsh', v); }
    /** Secondary Light Position. Serialized as `:lightposition2` */
    public get lightPosition2(): StringValue | undefined { return this._g(':lightposition2'); }
    public set lightPosition2(v: StringValue | undefined) { this._s(':lightposition2', v); }
    /** Secondary Light Intensity. Serialized as `:lightlevel2` */
    public get lightLevel2(): StringValue | undefined { return this._g(':lightlevel2'); }
    public set lightLevel2(v: StringValue | undefined) { this._s(':lightlevel2', v); }
    /** Secondary Light Harshness Toggle. Serialized as `:lightharsh2` */
    public get lightHarsh2(): TrueFalseValue | undefined { return this._g(':lightharsh2'); }
    public set lightHarsh2(v: TrueFalseValue | undefined) { this._s(':lightharsh2', v); }

}
/** Skew Transform. Serialized as `o:skew` */
export class Skew extends OxmlLeafElement {

    public static override _Q = 'o:skew';
    public static override _A = ['v:ext',':id',':on',':offset',':origin',':matrix',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Skew ID. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Skew Toggle. Serialized as `:on` */
    public get on(): TrueFalseValue | undefined { return this._g(':on'); }
    public set on(v: TrueFalseValue | undefined) { this._s(':on', v); }
    /** Skew Offset. Serialized as `:offset` */
    public get offset(): StringValue | undefined { return this._g(':offset'); }
    public set offset(v: StringValue | undefined) { this._s(':offset', v); }
    /** Skew Origin. Serialized as `:origin` */
    public get origin(): StringValue | undefined { return this._g(':origin'); }
    public set origin(v: StringValue | undefined) { this._s(':origin', v); }
    /** Skew Perspective Matrix. Serialized as `:matrix` */
    public get matrix(): StringValue | undefined { return this._g(':matrix'); }
    public set matrix(v: StringValue | undefined) { this._s(':matrix', v); }

}
/** VML Diagram. Serialized as `o:diagram` */
export class Diagram extends OxmlCompositeElement<RelationTable> {

    public static override _Q = 'o:diagram';
    public static override _A = ['v:ext',':dgmstyle',':autoformat',':reverse',':autolayout',':dgmscalex',':dgmscaley',':dgmfontsize',':constrainbounds',':dgmbasetextscale',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Diagram Style Options. Serialized as `:dgmstyle` */
    public get style(): IntegerValue | undefined { return this._g(':dgmstyle'); }
    public set style(v: IntegerValue | undefined) { this._s(':dgmstyle', v); }
    /** Diagram Automatic Format. Serialized as `:autoformat` */
    public get autoFormat(): TrueFalseValue | undefined { return this._g(':autoformat'); }
    public set autoFormat(v: TrueFalseValue | undefined) { this._s(':autoformat', v); }
    /** Diagram Reverse Direction. Serialized as `:reverse` */
    public get reverse(): TrueFalseValue | undefined { return this._g(':reverse'); }
    public set reverse(v: TrueFalseValue | undefined) { this._s(':reverse', v); }
    /** Diagram Automatic Layout. Serialized as `:autolayout` */
    public get autoLayout(): TrueFalseValue | undefined { return this._g(':autolayout'); }
    public set autoLayout(v: TrueFalseValue | undefined) { this._s(':autolayout', v); }
    /** Diagram Layout X Scale. Serialized as `:dgmscalex` */
    public get scaleX(): IntegerValue | undefined { return this._g(':dgmscalex'); }
    public set scaleX(v: IntegerValue | undefined) { this._s(':dgmscalex', v); }
    /** Diagram Layout Y Scale. Serialized as `:dgmscaley` */
    public get scaleY(): IntegerValue | undefined { return this._g(':dgmscaley'); }
    public set scaleY(v: IntegerValue | undefined) { this._s(':dgmscaley', v); }
    /** Diagram Font Size. Serialized as `:dgmfontsize` */
    public get fontSize(): IntegerValue | undefined { return this._g(':dgmfontsize'); }
    public set fontSize(v: IntegerValue | undefined) { this._s(':dgmfontsize', v); }
    /** Diagram Layout Extents. Serialized as `:constrainbounds` */
    public get constrainBounds(): StringValue | undefined { return this._g(':constrainbounds'); }
    public set constrainBounds(v: StringValue | undefined) { this._s(':constrainbounds', v); }
    /** Diagram Base Font Size. Serialized as `:dgmbasetextscale` */
    public get baseTextScale(): IntegerValue | undefined { return this._g(':dgmbasetextscale'); }
    public set baseTextScale(v: IntegerValue | undefined) { this._s(':dgmbasetextscale', v); }
    /** Diagram Relationship Table. */
    public get relationTable(): RelationTable | undefined { return this._f(RelationTable); }

}
/** Ink. Serialized as `o:ink` */
export class Ink extends OxmlLeafElement {

    public static override _Q = 'o:ink';
    public static override _A = [':i',':annotation',];
    /** Ink Data. Serialized as `:i` */
    public get inkData(): Base64BinaryValue | undefined { return this._g(':i'); }
    public set inkData(v: Base64BinaryValue | undefined) { this._s(':i', v); }
    /** Annotation Flag. Serialized as `:annotation` */
    public get annotationFlag(): TrueFalseValue | undefined { return this._g(':annotation'); }
    public set annotationFlag(v: TrueFalseValue | undefined) { this._s(':annotation', v); }

}
/** Digital Signature Line. Serialized as `o:signatureline` */
export class SignatureLine extends OxmlLeafElement {

    public static override _Q = 'o:signatureline';
    public static override _A = ['v:ext',':issignatureline',':id',':provid',':signinginstructionsset',':allowcomments',':showsigndate','o:suggestedsigner','o:suggestedsigner2','o:suggestedsigneremail',':signinginstructions',':addlxml',':sigprovurl',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Signature Line Flag. Serialized as `:issignatureline` */
    public get isSignatureLine(): TrueFalseValue | undefined { return this._g(':issignatureline'); }
    public set isSignatureLine(v: TrueFalseValue | undefined) { this._s(':issignatureline', v); }
    /** Unique ID. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Signature Provider ID. Serialized as `:provid` */
    public get providerId(): StringValue | undefined { return this._g(':provid'); }
    public set providerId(v: StringValue | undefined) { this._s(':provid', v); }
    /** Use Signing Instructions Flag. Serialized as `:signinginstructionsset` */
    public get signingInstructionsSet(): TrueFalseValue | undefined { return this._g(':signinginstructionsset'); }
    public set signingInstructionsSet(v: TrueFalseValue | undefined) { this._s(':signinginstructionsset', v); }
    /** User-specified Comments Flag. Serialized as `:allowcomments` */
    public get allowComments(): TrueFalseValue | undefined { return this._g(':allowcomments'); }
    public set allowComments(v: TrueFalseValue | undefined) { this._s(':allowcomments', v); }
    /** Show Signed Date Flag. Serialized as `:showsigndate` */
    public get showSignDate(): TrueFalseValue | undefined { return this._g(':showsigndate'); }
    public set showSignDate(v: TrueFalseValue | undefined) { this._s(':showsigndate', v); }
    /** Suggested Signer Line 1. Serialized as `o:suggestedsigner` */
    public get suggestedSigner(): StringValue | undefined { return this._g('o:suggestedsigner'); }
    public set suggestedSigner(v: StringValue | undefined) { this._s('o:suggestedsigner', v); }
    /** Suggested Signer Line 2. Serialized as `o:suggestedsigner2` */
    public get suggestedSigner2(): StringValue | undefined { return this._g('o:suggestedsigner2'); }
    public set suggestedSigner2(v: StringValue | undefined) { this._s('o:suggestedsigner2', v); }
    /** Suggested Signer E-mail Address. Serialized as `o:suggestedsigneremail` */
    public get suggestedSignerEmail(): StringValue | undefined { return this._g('o:suggestedsigneremail'); }
    public set suggestedSignerEmail(v: StringValue | undefined) { this._s('o:suggestedsigneremail', v); }
    /** Instructions for Signing. Serialized as `:signinginstructions` */
    public get signingInstructions(): StringValue | undefined { return this._g(':signinginstructions'); }
    public set signingInstructions(v: StringValue | undefined) { this._s(':signinginstructions', v); }
    /** Additional Signature Information. Serialized as `:addlxml` */
    public get additionalXml(): StringValue | undefined { return this._g(':addlxml'); }
    public set additionalXml(v: StringValue | undefined) { this._s(':addlxml', v); }
    /** Signature Provider Download URL. Serialized as `:sigprovurl` */
    public get signatureProviderUrl(): StringValue | undefined { return this._g(':sigprovurl'); }
    public set signatureProviderUrl(v: StringValue | undefined) { this._s(':sigprovurl', v); }

}
/** Shape Layout Properties. Serialized as `o:shapelayout` */
export class ShapeLayout extends OxmlCompositeElement<ShapeIdMap | RegroupTable | Rules> {

    public static override _Q = 'o:shapelayout';
    public static override _A = ['v:ext',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Shape ID Map. */
    public get shapeIdMap(): ShapeIdMap | undefined { return this._f(ShapeIdMap); }
    /** Shape Grouping History. */
    public get regroupTable(): RegroupTable | undefined { return this._f(RegroupTable); }
    /** Rule Set. */
    public get rules(): Rules | undefined { return this._f(Rules); }

}
/** New Shape Defaults. Serialized as `o:shapedefaults` */
export class ShapeDefaults extends OxmlCompositeElement<VFill | VImageData | VStroke | VTextBox | VShadow | Skew | Extrusion | Callout | Lock | ColorMostRecentlyUsed | ColorMenu> {

    public static override _Q = 'o:shapedefaults';
    public static override _A = ['v:ext',':spidmax',':style',':fill',':fillcolor',':stroke',':strokecolor','o:allowincell','o:allowoverlap','o:insetmode',];
    /** VML Extension Handling Behavior. Serialized as `v:ext` */
    public get extension(): ExtensionHandlingBehaviorValues | undefined { return this._g('v:ext'); }
    public set extension(v: ExtensionHandlingBehaviorValues | undefined) { this._s('v:ext', v); }
    /** Shape ID Optional Storage. Serialized as `:spidmax` */
    public get maxShapeId(): IntegerValue | undefined { return this._g(':spidmax'); }
    public set maxShapeId(v: IntegerValue | undefined) { this._s(':spidmax', v); }
    /** style. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Shape Fill Toggle. Serialized as `:fill` */
    public get beFilled(): TrueFalseValue | undefined { return this._g(':fill'); }
    public set beFilled(v: TrueFalseValue | undefined) { this._s(':fill', v); }
    /** Default Fill Color. Serialized as `:fillcolor` */
    public get fillColor(): StringValue | undefined { return this._g(':fillcolor'); }
    public set fillColor(v: StringValue | undefined) { this._s(':fillcolor', v); }
    /** Shape Stroke Toggle. Serialized as `:stroke` */
    public get isStroke(): TrueFalseValue | undefined { return this._g(':stroke'); }
    public set isStroke(v: TrueFalseValue | undefined) { this._s(':stroke', v); }
    /** Shape Stroke Color. Serialized as `:strokecolor` */
    public get strokeColor(): StringValue | undefined { return this._g(':strokecolor'); }
    public set strokeColor(v: StringValue | undefined) { this._s(':strokecolor', v); }
    /** Allow in Table Cell. Serialized as `o:allowincell` */
    public get allowInCell(): TrueFalseValue | undefined { return this._g('o:allowincell'); }
    public set allowInCell(v: TrueFalseValue | undefined) { this._s('o:allowincell', v); }
    /** allowoverlap. Serialized as `o:allowoverlap` */
    public get allowOverlap(): TrueFalseValue | undefined { return this._g('o:allowoverlap'); }
    public set allowOverlap(v: TrueFalseValue | undefined) { this._s('o:allowoverlap', v); }
    /** insetmode. Serialized as `o:insetmode` */
    public get insetMode(): InsetMarginValues | undefined { return this._g('o:insetmode'); }
    public set insetMode(v: InsetMarginValues | undefined) { this._s('o:insetmode', v); }
    /** Returns VFill. */
    public get fill(): VFill | undefined { return this._f(VFill); }
    /** Returns VImageData. */
    public get imageData(): VImageData | undefined { return this._f(VImageData); }
    /** Returns VStroke. */
    public get stroke(): VStroke | undefined { return this._f(VStroke); }
    /** Returns VTextBox. */
    public get textBox(): VTextBox | undefined { return this._f(VTextBox); }
    /** Returns VShadow. */
    public get shadow(): VShadow | undefined { return this._f(VShadow); }
    /** Returns Skew. */
    public get skew(): Skew | undefined { return this._f(Skew); }
    /** Returns Extrusion. */
    public get extrusion(): Extrusion | undefined { return this._f(Extrusion); }
    /** Callout. */
    public get callout(): Callout | undefined { return this._f(Callout); }
    /** Shape Protections. */
    public get lock(): Lock | undefined { return this._f(Lock); }
    /** Most Recently Used Colors. */
    public get colorMostRecentlyUsed(): ColorMostRecentlyUsed | undefined { return this._f(ColorMostRecentlyUsed); }
    /** UI Default Colors. */
    public get colorMenu(): ColorMenu | undefined { return this._f(ColorMenu); }

}

export function initVmlOfficeNamespace() {
    ColorMenu._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':shadowcolor': new OxmlAttr(':shadowcolor', OxmlType.StringValue),
        ':extrusioncolor': new OxmlAttr(':extrusioncolor', OxmlType.StringValue),
    };
    ColorMostRecentlyUsed._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':colors': new OxmlAttr(':colors', OxmlType.StringValue),
    };
    Proxy._D = {
        ':start': new OxmlAttr(':start', OxmlType.TrueFalseBlankValue),
        ':end': new OxmlAttr(':end', OxmlType.TrueFalseBlankValue),
        ':idref': new OxmlAttr(':idref', OxmlType.StringValue),
        ':connectloc': new OxmlAttr(':connectloc', OxmlType.Int32Value),
    };
    Relation._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':idsrc': new OxmlAttr(':idsrc', OxmlType.StringValue),
        ':iddest': new OxmlAttr(':iddest', OxmlType.StringValue),
        ':idcntr': new OxmlAttr(':idcntr', OxmlType.StringValue),
    };
    RelationTable._C = {
        'o:rel': Relation,
    };
    RelationTable._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    };
    Rule._C = {
        'o:proxy': Proxy,
    };
    Rule._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, RuleValuesArray),
        ':how': new OxmlAttr(':how', OxmlType.EnumValue, AlignmentValuesArray),
        ':idref': new OxmlAttr(':idref', OxmlType.StringValue),
    };
    Entry._D = {
        ':new': new OxmlAttr(':new', OxmlType.Int32Value),
        ':old': new OxmlAttr(':old', OxmlType.Int32Value),
    };
    Rules._C = {
        'o:r': Rule,
    };
    Rules._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    };
    RegroupTable._C = {
        'o:entry': Entry,
    };
    RegroupTable._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    };
    ShapeIdMap._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':data': new OxmlAttr(':data', OxmlType.StringValue),
    };
    FillExtendedProperties._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, FillValuesArray),
    };
    ClipPath._D = {
        'o:v': new OxmlAttr('o:v', OxmlType.StringValue),
    };
    StrokeChildType._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':on': new OxmlAttr(':on', OxmlType.TrueFalseValue),
        ':weight': new OxmlAttr(':weight', OxmlType.StringValue),
        ':color': new OxmlAttr(':color', OxmlType.StringValue),
        ':color2': new OxmlAttr(':color2', OxmlType.StringValue),
        ':opacity': new OxmlAttr(':opacity', OxmlType.StringValue),
        ':linestyle': new OxmlAttr(':linestyle', OxmlType.EnumValue, StrokeLineStyleValuesArray),
        ':miterlimit': new OxmlAttr(':miterlimit', OxmlType.DecimalValue),
        ':joinstyle': new OxmlAttr(':joinstyle', OxmlType.EnumValue, StrokeJoinStyleValuesArray),
        ':endcap': new OxmlAttr(':endcap', OxmlType.EnumValue, StrokeEndCapValuesArray),
        ':dashstyle': new OxmlAttr(':dashstyle', OxmlType.StringValue),
        ':insetpen': new OxmlAttr(':insetpen', OxmlType.TrueFalseValue),
        ':filltype': new OxmlAttr(':filltype', OxmlType.EnumValue, FillTypeValuesArray),
        ':src': new OxmlAttr(':src', OxmlType.StringValue),
        ':imageaspect': new OxmlAttr(':imageaspect', OxmlType.EnumValue, ImageAspectValuesArray),
        ':imagesize': new OxmlAttr(':imagesize', OxmlType.StringValue),
        ':imagealignshape': new OxmlAttr(':imagealignshape', OxmlType.TrueFalseValue),
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
    };
    Complex._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    };
    OleObject._C = {
        'o:LinkType': LinkType,
        'o:LockedField': LockedField,
        'o:FieldCodes': FieldCodes,
    };
    OleObject._D = {
        ':Type': new OxmlAttr(':Type', OxmlType.EnumValue, OleValuesArray),
        ':ProgID': new OxmlAttr(':ProgID', OxmlType.StringValue),
        ':ShapeID': new OxmlAttr(':ShapeID', OxmlType.StringValue),
        ':DrawAspect': new OxmlAttr(':DrawAspect', OxmlType.EnumValue, OleDrawAspectValuesArray),
        ':ObjectID': new OxmlAttr(':ObjectID', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':UpdateMode': new OxmlAttr(':UpdateMode', OxmlType.EnumValue, OleUpdateModeValuesArray),
    };
    Lock._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':position': new OxmlAttr(':position', OxmlType.TrueFalseValue),
        ':selection': new OxmlAttr(':selection', OxmlType.TrueFalseValue),
        ':grouping': new OxmlAttr(':grouping', OxmlType.TrueFalseValue),
        ':ungrouping': new OxmlAttr(':ungrouping', OxmlType.TrueFalseValue),
        ':rotation': new OxmlAttr(':rotation', OxmlType.TrueFalseValue),
        ':cropping': new OxmlAttr(':cropping', OxmlType.TrueFalseValue),
        ':verticies': new OxmlAttr(':verticies', OxmlType.TrueFalseValue),
        ':adjusthandles': new OxmlAttr(':adjusthandles', OxmlType.TrueFalseValue),
        ':text': new OxmlAttr(':text', OxmlType.TrueFalseValue),
        ':aspectratio': new OxmlAttr(':aspectratio', OxmlType.TrueFalseValue),
        ':shapetype': new OxmlAttr(':shapetype', OxmlType.TrueFalseValue),
    };
    Callout._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':on': new OxmlAttr(':on', OxmlType.TrueFalseValue),
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        ':gap': new OxmlAttr(':gap', OxmlType.StringValue),
        ':angle': new OxmlAttr(':angle', OxmlType.EnumValue, AngleValuesArray),
        ':dropauto': new OxmlAttr(':dropauto', OxmlType.TrueFalseValue),
        ':drop': new OxmlAttr(':drop', OxmlType.StringValue),
        ':distance': new OxmlAttr(':distance', OxmlType.StringValue),
        ':lengthspecified': new OxmlAttr(':lengthspecified', OxmlType.TrueFalseValue),
        ':length': new OxmlAttr(':length', OxmlType.StringValue),
        ':accentbar': new OxmlAttr(':accentbar', OxmlType.TrueFalseValue),
        ':textborder': new OxmlAttr(':textborder', OxmlType.TrueFalseValue),
        ':minusx': new OxmlAttr(':minusx', OxmlType.TrueFalseValue),
        ':minusy': new OxmlAttr(':minusy', OxmlType.TrueFalseValue),
    };
    Extrusion._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':on': new OxmlAttr(':on', OxmlType.TrueFalseValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ExtrusionValuesArray),
        ':render': new OxmlAttr(':render', OxmlType.EnumValue, ExtrusionRenderValuesArray),
        ':viewpointorigin': new OxmlAttr(':viewpointorigin', OxmlType.StringValue),
        ':viewpoint': new OxmlAttr(':viewpoint', OxmlType.StringValue),
        ':skewangle': new OxmlAttr(':skewangle', OxmlType.SingleValue),
        ':skewamt': new OxmlAttr(':skewamt', OxmlType.StringValue),
        ':foredepth': new OxmlAttr(':foredepth', OxmlType.StringValue),
        ':backdepth': new OxmlAttr(':backdepth', OxmlType.StringValue),
        ':orientation': new OxmlAttr(':orientation', OxmlType.StringValue),
        ':orientationangle': new OxmlAttr(':orientationangle', OxmlType.SingleValue),
        ':lockrotationcenter': new OxmlAttr(':lockrotationcenter', OxmlType.TrueFalseValue),
        ':autorotationcenter': new OxmlAttr(':autorotationcenter', OxmlType.TrueFalseValue),
        ':rotationcenter': new OxmlAttr(':rotationcenter', OxmlType.StringValue),
        ':rotationangle': new OxmlAttr(':rotationangle', OxmlType.StringValue),
        ':color': new OxmlAttr(':color', OxmlType.StringValue),
        ':shininess': new OxmlAttr(':shininess', OxmlType.SingleValue),
        ':specularity': new OxmlAttr(':specularity', OxmlType.StringValue),
        ':diffusity': new OxmlAttr(':diffusity', OxmlType.StringValue),
        ':metal': new OxmlAttr(':metal', OxmlType.TrueFalseValue),
        ':edge': new OxmlAttr(':edge', OxmlType.StringValue),
        ':facet': new OxmlAttr(':facet', OxmlType.StringValue),
        ':lightface': new OxmlAttr(':lightface', OxmlType.TrueFalseValue),
        ':brightness': new OxmlAttr(':brightness', OxmlType.StringValue),
        ':lightposition': new OxmlAttr(':lightposition', OxmlType.StringValue),
        ':lightlevel': new OxmlAttr(':lightlevel', OxmlType.StringValue),
        ':lightharsh': new OxmlAttr(':lightharsh', OxmlType.TrueFalseValue),
        ':lightposition2': new OxmlAttr(':lightposition2', OxmlType.StringValue),
        ':lightlevel2': new OxmlAttr(':lightlevel2', OxmlType.StringValue),
        ':lightharsh2': new OxmlAttr(':lightharsh2', OxmlType.TrueFalseValue),
    };
    Skew._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':on': new OxmlAttr(':on', OxmlType.TrueFalseValue),
        ':offset': new OxmlAttr(':offset', OxmlType.StringValue),
        ':origin': new OxmlAttr(':origin', OxmlType.StringValue),
        ':matrix': new OxmlAttr(':matrix', OxmlType.StringValue),
    };
    Diagram._C = {
        'o:relationtable': RelationTable,
    };
    Diagram._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':dgmstyle': new OxmlAttr(':dgmstyle', OxmlType.IntegerValue),
        ':autoformat': new OxmlAttr(':autoformat', OxmlType.TrueFalseValue),
        ':reverse': new OxmlAttr(':reverse', OxmlType.TrueFalseValue),
        ':autolayout': new OxmlAttr(':autolayout', OxmlType.TrueFalseValue),
        ':dgmscalex': new OxmlAttr(':dgmscalex', OxmlType.IntegerValue),
        ':dgmscaley': new OxmlAttr(':dgmscaley', OxmlType.IntegerValue),
        ':dgmfontsize': new OxmlAttr(':dgmfontsize', OxmlType.IntegerValue),
        ':constrainbounds': new OxmlAttr(':constrainbounds', OxmlType.StringValue),
        ':dgmbasetextscale': new OxmlAttr(':dgmbasetextscale', OxmlType.IntegerValue),
    };
    Ink._D = {
        ':i': new OxmlAttr(':i', OxmlType.Base64BinaryValue),
        ':annotation': new OxmlAttr(':annotation', OxmlType.TrueFalseValue),
    };
    SignatureLine._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':issignatureline': new OxmlAttr(':issignatureline', OxmlType.TrueFalseValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':provid': new OxmlAttr(':provid', OxmlType.StringValue),
        ':signinginstructionsset': new OxmlAttr(':signinginstructionsset', OxmlType.TrueFalseValue),
        ':allowcomments': new OxmlAttr(':allowcomments', OxmlType.TrueFalseValue),
        ':showsigndate': new OxmlAttr(':showsigndate', OxmlType.TrueFalseValue),
        'o:suggestedsigner': new OxmlAttr('o:suggestedsigner', OxmlType.StringValue),
        'o:suggestedsigner2': new OxmlAttr('o:suggestedsigner2', OxmlType.StringValue),
        'o:suggestedsigneremail': new OxmlAttr('o:suggestedsigneremail', OxmlType.StringValue),
        ':signinginstructions': new OxmlAttr(':signinginstructions', OxmlType.StringValue),
        ':addlxml': new OxmlAttr(':addlxml', OxmlType.StringValue),
        ':sigprovurl': new OxmlAttr(':sigprovurl', OxmlType.StringValue),
    };
    ShapeLayout._C = {
        'o:idmap': ShapeIdMap,
        'o:regrouptable': RegroupTable,
        'o:rules': Rules,
    };
    ShapeLayout._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    };
    ShapeDefaults._C = {
        'v:fill': VFill,
        'v:imagedata': VImageData,
        'v:stroke': VStroke,
        'v:textbox': VTextBox,
        'v:shadow': VShadow,
        'o:skew': Skew,
        'o:extrusion': Extrusion,
        'o:callout': Callout,
        'o:lock': Lock,
        'o:colormru': ColorMostRecentlyUsed,
        'o:colormenu': ColorMenu,
    };
    ShapeDefaults._D = {
        'v:ext': new OxmlAttr('v:ext', OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
        ':spidmax': new OxmlAttr(':spidmax', OxmlType.IntegerValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':fill': new OxmlAttr(':fill', OxmlType.TrueFalseValue),
        ':fillcolor': new OxmlAttr(':fillcolor', OxmlType.StringValue),
        ':stroke': new OxmlAttr(':stroke', OxmlType.TrueFalseValue),
        ':strokecolor': new OxmlAttr(':strokecolor', OxmlType.StringValue),
        'o:allowincell': new OxmlAttr('o:allowincell', OxmlType.TrueFalseValue),
        'o:allowoverlap': new OxmlAttr('o:allowoverlap', OxmlType.TrueFalseValue),
        'o:insetmode': new OxmlAttr('o:insetmode', OxmlType.EnumValue, InsetMarginValuesArray),
    };
    return {
        prefix: 'o',
        xmlns: 'urn:schemas-microsoft-com:office:office',
    };
}
