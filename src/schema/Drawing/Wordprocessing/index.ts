import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
import { GraphicFrameLocks as AGraphicFrameLocks } from '../../Drawing';
import { ExtensionList as AExtensionList } from '../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../Drawing';
import { PercentagePositionVerticalOffset as Wp14PercentagePositionVerticalOffset } from '../../Office2010/Word/Drawing';
import { PercentagePositionHeightOffset as Wp14PercentagePositionHeightOffset } from '../../Office2010/Word/Drawing';
import { Graphic as AGraphic } from '../../Drawing';
import { RelativeWidth as Wp14RelativeWidth } from '../../Office2010/Word/Drawing';
import { RelativeHeight as Wp14RelativeHeight } from '../../Office2010/Word/Drawing';


export enum WrapTextValues {
    /** Both Sides. Serialized value: `bothSides` */
    BothSides = 'bothSides',
    /** Left Side Only. Serialized value: `left` */
    Left = 'left',
    /** Right Side Only. Serialized value: `right` */
    Right = 'right',
    /** Largest Side Only. Serialized value: `largest` */
    Largest = 'largest',
}

export const WrapTextValuesArray = [
    WrapTextValues.BothSides,
    WrapTextValues.Left,
    WrapTextValues.Right,
    WrapTextValues.Largest,
] as const;

export enum HorizontalAlignmentValues {
    /** Left Alignment. Serialized value: `left` */
    Left = 'left',
    /** Right Alignment. Serialized value: `right` */
    Right = 'right',
    /** Center Alignment. Serialized value: `center` */
    Center = 'center',
    /** Inside. Serialized value: `inside` */
    Inside = 'inside',
    /** Outside. Serialized value: `outside` */
    Outside = 'outside',
}

export const HorizontalAlignmentValuesArray = [
    HorizontalAlignmentValues.Left,
    HorizontalAlignmentValues.Right,
    HorizontalAlignmentValues.Center,
    HorizontalAlignmentValues.Inside,
    HorizontalAlignmentValues.Outside,
] as const;

export enum HorizontalRelativePositionValues {
    /** Page Margin. Serialized value: `margin` */
    Margin = 'margin',
    /** Page Edge. Serialized value: `page` */
    Page = 'page',
    /** Column. Serialized value: `column` */
    Column = 'column',
    /** Character. Serialized value: `character` */
    Character = 'character',
    /** Left Margin. Serialized value: `leftMargin` */
    LeftMargin = 'leftMargin',
    /** Right Margin. Serialized value: `rightMargin` */
    RightMargin = 'rightMargin',
    /** Inside Margin. Serialized value: `insideMargin` */
    InsideMargin = 'insideMargin',
    /** Outside Margin. Serialized value: `outsideMargin` */
    OutsideMargin = 'outsideMargin',
}

export const HorizontalRelativePositionValuesArray = [
    HorizontalRelativePositionValues.Margin,
    HorizontalRelativePositionValues.Page,
    HorizontalRelativePositionValues.Column,
    HorizontalRelativePositionValues.Character,
    HorizontalRelativePositionValues.LeftMargin,
    HorizontalRelativePositionValues.RightMargin,
    HorizontalRelativePositionValues.InsideMargin,
    HorizontalRelativePositionValues.OutsideMargin,
] as const;

export enum VerticalAlignmentValues {
    /** Top. Serialized value: `top` */
    Top = 'top',
    /** Bottom. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** Center Alignment. Serialized value: `center` */
    Center = 'center',
    /** Inside. Serialized value: `inside` */
    Inside = 'inside',
    /** Outside. Serialized value: `outside` */
    Outside = 'outside',
}

export const VerticalAlignmentValuesArray = [
    VerticalAlignmentValues.Top,
    VerticalAlignmentValues.Bottom,
    VerticalAlignmentValues.Center,
    VerticalAlignmentValues.Inside,
    VerticalAlignmentValues.Outside,
] as const;

export enum VerticalRelativePositionValues {
    /** Page Margin. Serialized value: `margin` */
    Margin = 'margin',
    /** Page Edge. Serialized value: `page` */
    Page = 'page',
    /** Paragraph. Serialized value: `paragraph` */
    Paragraph = 'paragraph',
    /** Line. Serialized value: `line` */
    Line = 'line',
    /** Top Margin. Serialized value: `topMargin` */
    TopMargin = 'topMargin',
    /** Bottom Margin. Serialized value: `bottomMargin` */
    BottomMargin = 'bottomMargin',
    /** Inside Margin. Serialized value: `insideMargin` */
    InsideMargin = 'insideMargin',
    /** Outside Margin. Serialized value: `outsideMargin` */
    OutsideMargin = 'outsideMargin',
}

export const VerticalRelativePositionValuesArray = [
    VerticalRelativePositionValues.Margin,
    VerticalRelativePositionValues.Page,
    VerticalRelativePositionValues.Paragraph,
    VerticalRelativePositionValues.Line,
    VerticalRelativePositionValues.TopMargin,
    VerticalRelativePositionValues.BottomMargin,
    VerticalRelativePositionValues.InsideMargin,
    VerticalRelativePositionValues.OutsideMargin,
] as const;

/** Relative Horizontal Alignment. Serialized as `wp:align` */
export class HorizontalAlignment extends OxmlLeafTextElement {

    public static override _Q = 'wp:align';

}
/** Defines the PositionOffset Class. Serialized as `wp:posOffset` */
export class PositionOffset extends OxmlLeafTextElement {

    public static override _Q = 'wp:posOffset';

}
/** Relative Vertical Alignment. Serialized as `wp:align` */
export class VerticalAlignment extends OxmlLeafTextElement {

    public static override _Q = 'wp:align';

}
/** Defines the NonVisualGraphicFrameDrawingProperties Class. Serialized as `wp:cNvGraphicFramePr` */
export class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {

    public static override _Q = 'wp:cNvGraphicFramePr';
    /** Graphic Frame Locks. */
    public get graphicFrameLocks(): AGraphicFrameLocks | undefined { return this._f(AGraphicFrameLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Drawing Object Non-Visual Properties. Serialized as `wp:docPr` */
export class DocProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'wp:docPr';
    public static override _A = [':id',':name',':descr',':hidden',':title',];
    /** Application defined unique identifier.. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Description of the drawing element.. Serialized as `:descr` */
    public get description(): StringValue | undefined { return this._g(':descr'); }
    public set description(v: StringValue | undefined) { this._s(':descr', v); }
    /** Flag determining to show or hide this element.. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Hyperlink associated with clicking or selecting the element.. */
    public get hyperlinkOnClick(): AHyperlinkOnClick | undefined { return this._f(AHyperlinkOnClick); }
    /** Hyperlink associated with hovering over the element.. */
    public get hyperlinkOnHover(): AHyperlinkOnHover | undefined { return this._f(AHyperlinkOnHover); }
    /** Future extension. */
    public get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined { return this._f(ANonVisualDrawingPropertiesExtensionList); }

}
/** Inline Drawing Object Extents. Serialized as `wp:extent` */
export class Extent extends OxmlLeafElement {

    public static override _Q = 'wp:extent';
    public static override _A = [':cx',':cy',];
    /** Extent Length. Serialized as `:cx` */
    public get cx(): Int64Value | undefined { return this._g(':cx'); }
    public set cx(v: Int64Value | undefined) { this._s(':cx', v); }
    /** Extent Width. Serialized as `:cy` */
    public get cy(): Int64Value | undefined { return this._g(':cy'); }
    public set cy(v: Int64Value | undefined) { this._s(':cy', v); }

}
/** Vertical Positioning. Serialized as `wp:positionV` */
export class VerticalPosition extends OxmlCompositeElement<VerticalAlignment | PositionOffset | Wp14PercentagePositionVerticalOffset> {

    public static override _Q = 'wp:positionV';
    public static override _A = [':relativeFrom',];
    /** Vertical Position Relative Base. Serialized as `:relativeFrom` */
    public get relativeFrom(): VerticalRelativePositionValues | undefined { return this._g(':relativeFrom'); }
    public set relativeFrom(v: VerticalRelativePositionValues | undefined) { this._s(':relativeFrom', v); }
    /** Relative Vertical Alignment. */
    public get verticalAlignment(): VerticalAlignment | undefined { return this._f(VerticalAlignment); }
    /** Returns PositionOffset. */
    public get positionOffset(): PositionOffset | undefined { return this._f(PositionOffset); }
    /** Returns Wp14PercentagePositionVerticalOffset. */
    public get percentagePositionVerticalOffset(): Wp14PercentagePositionVerticalOffset | undefined { return this._f(Wp14PercentagePositionVerticalOffset); }

}
/** Horizontal Positioning. Serialized as `wp:positionH` */
export class HorizontalPosition extends OxmlCompositeElement<HorizontalAlignment | PositionOffset | Wp14PercentagePositionHeightOffset> {

    public static override _Q = 'wp:positionH';
    public static override _A = [':relativeFrom',];
    /** Horizontal Position Relative Base. Serialized as `:relativeFrom` */
    public get relativeFrom(): HorizontalRelativePositionValues | undefined { return this._g(':relativeFrom'); }
    public set relativeFrom(v: HorizontalRelativePositionValues | undefined) { this._s(':relativeFrom', v); }
    /** Relative Horizontal Alignment. */
    public get horizontalAlignment(): HorizontalAlignment | undefined { return this._f(HorizontalAlignment); }
    /** Absolute Position Offset. */
    public get positionOffset(): PositionOffset | undefined { return this._f(PositionOffset); }
    /** Returns Wp14PercentagePositionHeightOffset. */
    public get percentagePositionHeightOffset(): Wp14PercentagePositionHeightOffset | undefined { return this._f(Wp14PercentagePositionHeightOffset); }

}
/** Tight Wrapping Extents Polygon. Serialized as `wp:wrapPolygon` */
export class WrapPolygon extends OxmlCompositeElement<StartPoint | LineTo> {

    public static override _Q = 'wp:wrapPolygon';
    public static override _A = [':edited',];
    /** Wrapping Points Modified. Serialized as `:edited` */
    public get edited(): BooleanValue | undefined { return this._g(':edited'); }
    public set edited(v: BooleanValue | undefined) { this._s(':edited', v); }
    /** Wrapping Polygon Start. */
    public get startPoint(): StartPoint | undefined { return this._f(StartPoint); }

}
/** Object Extents Including Effects. Serialized as `wp:effectExtent` */
export class EffectExtent extends OxmlLeafElement {

    public static override _Q = 'wp:effectExtent';
    public static override _A = [':l',':t',':r',':b',];
    /** Additional Extent on Left Edge. Serialized as `:l` */
    public get leftEdge(): Int64Value | undefined { return this._g(':l'); }
    public set leftEdge(v: Int64Value | undefined) { this._s(':l', v); }
    /** Additional Extent on Top Edge. Serialized as `:t` */
    public get topEdge(): Int64Value | undefined { return this._g(':t'); }
    public set topEdge(v: Int64Value | undefined) { this._s(':t', v); }
    /** Additional Extent on Right Edge. Serialized as `:r` */
    public get rightEdge(): Int64Value | undefined { return this._g(':r'); }
    public set rightEdge(v: Int64Value | undefined) { this._s(':r', v); }
    /** Additional Extent on Bottom Edge. Serialized as `:b` */
    public get bottomEdge(): Int64Value | undefined { return this._g(':b'); }
    public set bottomEdge(v: Int64Value | undefined) { this._s(':b', v); }

}
/** Defines the Point2DType Class. */
export abstract class Point2DType extends OxmlLeafElement {

    public static override _A = [':x',':y',];
    /** X-Axis Coordinate. Serialized as `:x` */
    public get x(): Int64Value | undefined { return this._g(':x'); }
    public set x(v: Int64Value | undefined) { this._s(':x', v); }
    /** Y-Axis Coordinate. Serialized as `:y` */
    public get y(): Int64Value | undefined { return this._g(':y'); }
    public set y(v: Int64Value | undefined) { this._s(':y', v); }

}
/** Simple Positioning Coordinates. Serialized as `wp:simplePos` */
export class SimplePosition extends Point2DType {

    public static override _Q = 'wp:simplePos';

}
/** Wrapping Polygon Line End Position. Serialized as `wp:lineTo` */
export class LineTo extends Point2DType {

    public static override _Q = 'wp:lineTo';

}
/** Wrapping Polygon Start. Serialized as `wp:start` */
export class StartPoint extends Point2DType {

    public static override _Q = 'wp:start';

}
/** Anchor for Floating DrawingML Object. Serialized as `wp:anchor` */
export class Anchor extends OxmlCompositeElement<SimplePosition | HorizontalPosition | VerticalPosition | Extent | EffectExtent | WrapNone | WrapSquare | WrapTight | WrapThrough | WrapTopBottom | DocProperties | NonVisualGraphicFrameDrawingProperties | AGraphic | Wp14RelativeWidth | Wp14RelativeHeight> {

    public static override _Q = 'wp:anchor';
    public static override _A = [':distT',':distB',':distL',':distR',':simplePos',':relativeHeight',':behindDoc',':locked',':layoutInCell',':hidden',':allowOverlap','wp14:editId','wp14:anchorId',];
    /** Distance From Text on Top Edge. Serialized as `:distT` */
    public get distanceFromTop(): UInt32Value | undefined { return this._g(':distT'); }
    public set distanceFromTop(v: UInt32Value | undefined) { this._s(':distT', v); }
    /** Distance From Text on Bottom Edge. Serialized as `:distB` */
    public get distanceFromBottom(): UInt32Value | undefined { return this._g(':distB'); }
    public set distanceFromBottom(v: UInt32Value | undefined) { this._s(':distB', v); }
    /** Distance From Text on Left Edge. Serialized as `:distL` */
    public get distanceFromLeft(): UInt32Value | undefined { return this._g(':distL'); }
    public set distanceFromLeft(v: UInt32Value | undefined) { this._s(':distL', v); }
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    public get distanceFromRight(): UInt32Value | undefined { return this._g(':distR'); }
    public set distanceFromRight(v: UInt32Value | undefined) { this._s(':distR', v); }
    /** Page Positioning. Serialized as `:simplePos` */
    public get simplePos(): BooleanValue | undefined { return this._g(':simplePos'); }
    public set simplePos(v: BooleanValue | undefined) { this._s(':simplePos', v); }
    /** Relative Z-Ordering Position. Serialized as `:relativeHeight` */
    public get relativeHeight(): UInt32Value | undefined { return this._g(':relativeHeight'); }
    public set relativeHeight(v: UInt32Value | undefined) { this._s(':relativeHeight', v); }
    /** Display Behind Document Text. Serialized as `:behindDoc` */
    public get behindDoc(): BooleanValue | undefined { return this._g(':behindDoc'); }
    public set behindDoc(v: BooleanValue | undefined) { this._s(':behindDoc', v); }
    /** Lock Anchor. Serialized as `:locked` */
    public get locked(): BooleanValue | undefined { return this._g(':locked'); }
    public set locked(v: BooleanValue | undefined) { this._s(':locked', v); }
    /** Layout In Table Cell. Serialized as `:layoutInCell` */
    public get layoutInCell(): BooleanValue | undefined { return this._g(':layoutInCell'); }
    public set layoutInCell(v: BooleanValue | undefined) { this._s(':layoutInCell', v); }
    /** Hidden. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Allow Objects to Overlap. Serialized as `:allowOverlap` */
    public get allowOverlap(): BooleanValue | undefined { return this._g(':allowOverlap'); }
    public set allowOverlap(v: BooleanValue | undefined) { this._s(':allowOverlap', v); }
    /** editId. Serialized as `wp14:editId` */
    public get editId(): HexBinaryValue | undefined { return this._g('wp14:editId'); }
    public set editId(v: HexBinaryValue | undefined) { this._s('wp14:editId', v); }
    /** anchorId. Serialized as `wp14:anchorId` */
    public get anchorId(): HexBinaryValue | undefined { return this._g('wp14:anchorId'); }
    public set anchorId(v: HexBinaryValue | undefined) { this._s('wp14:anchorId', v); }
    /** Simple Positioning Coordinates. */
    public get simplePosition(): SimplePosition | undefined { return this._f(SimplePosition); }
    /** Horizontal Positioning. */
    public get horizontalPosition(): HorizontalPosition | undefined { return this._f(HorizontalPosition); }
    /** Vertical Positioning. */
    public get verticalPosition(): VerticalPosition | undefined { return this._f(VerticalPosition); }
    /** Inline Drawing Object Extents. */
    public get extent(): Extent | undefined { return this._f(Extent); }
    /** Returns EffectExtent. */
    public get effectExtent(): EffectExtent | undefined { return this._f(EffectExtent); }

}
/** Inline DrawingML Object. Serialized as `wp:inline` */
export class Inline extends OxmlCompositeElement<Extent | EffectExtent | DocProperties | NonVisualGraphicFrameDrawingProperties | AGraphic> {

    public static override _Q = 'wp:inline';
    public static override _A = [':distT',':distB',':distL',':distR','wp14:anchorId','wp14:editId',];
    /** Distance From Text on Top Edge. Serialized as `:distT` */
    public get distanceFromTop(): UInt32Value | undefined { return this._g(':distT'); }
    public set distanceFromTop(v: UInt32Value | undefined) { this._s(':distT', v); }
    /** Distance From Text on Bottom Edge. Serialized as `:distB` */
    public get distanceFromBottom(): UInt32Value | undefined { return this._g(':distB'); }
    public set distanceFromBottom(v: UInt32Value | undefined) { this._s(':distB', v); }
    /** Distance From Text on Left Edge. Serialized as `:distL` */
    public get distanceFromLeft(): UInt32Value | undefined { return this._g(':distL'); }
    public set distanceFromLeft(v: UInt32Value | undefined) { this._s(':distL', v); }
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    public get distanceFromRight(): UInt32Value | undefined { return this._g(':distR'); }
    public set distanceFromRight(v: UInt32Value | undefined) { this._s(':distR', v); }
    /** anchorId. Serialized as `wp14:anchorId` */
    public get anchorId(): HexBinaryValue | undefined { return this._g('wp14:anchorId'); }
    public set anchorId(v: HexBinaryValue | undefined) { this._s('wp14:anchorId', v); }
    /** editId. Serialized as `wp14:editId` */
    public get editId(): HexBinaryValue | undefined { return this._g('wp14:editId'); }
    public set editId(v: HexBinaryValue | undefined) { this._s('wp14:editId', v); }
    /** Drawing Object Size. */
    public get extent(): Extent | undefined { return this._f(Extent); }
    /** Inline Wrapping Extent. */
    public get effectExtent(): EffectExtent | undefined { return this._f(EffectExtent); }
    /** Drawing Object Non-Visual Properties. */
    public get docProperties(): DocProperties | undefined { return this._f(DocProperties); }
    /** Common DrawingML Non-Visual Properties. */
    public get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined { return this._f(NonVisualGraphicFrameDrawingProperties); }
    /** Returns AGraphic. */
    public get graphic(): AGraphic | undefined { return this._f(AGraphic); }

}
/** Top and Bottom Wrapping. Serialized as `wp:wrapTopAndBottom` */
export class WrapTopBottom extends OxmlCompositeElement<EffectExtent> {

    public static override _Q = 'wp:wrapTopAndBottom';
    public static override _A = [':distT',':distB',];
    /** Distance From Text on Top Edge. Serialized as `:distT` */
    public get distanceFromTop(): UInt32Value | undefined { return this._g(':distT'); }
    public set distanceFromTop(v: UInt32Value | undefined) { this._s(':distT', v); }
    /** Distance From Text on Bottom Edge. Serialized as `:distB` */
    public get distanceFromBottom(): UInt32Value | undefined { return this._g(':distB'); }
    public set distanceFromBottom(v: UInt32Value | undefined) { this._s(':distB', v); }
    /** Wrapping Boundaries. */
    public get effectExtent(): EffectExtent | undefined { return this._f(EffectExtent); }

}
/** Through Wrapping. Serialized as `wp:wrapThrough` */
export class WrapThrough extends OxmlCompositeElement<WrapPolygon> {

    public static override _Q = 'wp:wrapThrough';
    public static override _A = [':wrapText',':distL',':distR',];
    /** Text Wrapping Location. Serialized as `:wrapText` */
    public get wrapText(): WrapTextValues | undefined { return this._g(':wrapText'); }
    public set wrapText(v: WrapTextValues | undefined) { this._s(':wrapText', v); }
    /** Distance From Text on Left Edge. Serialized as `:distL` */
    public get distanceFromLeft(): UInt32Value | undefined { return this._g(':distL'); }
    public set distanceFromLeft(v: UInt32Value | undefined) { this._s(':distL', v); }
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    public get distanceFromRight(): UInt32Value | undefined { return this._g(':distR'); }
    public set distanceFromRight(v: UInt32Value | undefined) { this._s(':distR', v); }
    /** Wrapping Polygon. */
    public get wrapPolygon(): WrapPolygon | undefined { return this._f(WrapPolygon); }

}
/** Tight Wrapping. Serialized as `wp:wrapTight` */
export class WrapTight extends OxmlCompositeElement<WrapPolygon> {

    public static override _Q = 'wp:wrapTight';
    public static override _A = [':wrapText',':distL',':distR',];
    /** Text Wrapping Location. Serialized as `:wrapText` */
    public get wrapText(): WrapTextValues | undefined { return this._g(':wrapText'); }
    public set wrapText(v: WrapTextValues | undefined) { this._s(':wrapText', v); }
    /** Distance From Test on Left Edge. Serialized as `:distL` */
    public get distanceFromLeft(): UInt32Value | undefined { return this._g(':distL'); }
    public set distanceFromLeft(v: UInt32Value | undefined) { this._s(':distL', v); }
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    public get distanceFromRight(): UInt32Value | undefined { return this._g(':distR'); }
    public set distanceFromRight(v: UInt32Value | undefined) { this._s(':distR', v); }
    /** Tight Wrapping Extents Polygon. */
    public get wrapPolygon(): WrapPolygon | undefined { return this._f(WrapPolygon); }

}
/** Square Wrapping. Serialized as `wp:wrapSquare` */
export class WrapSquare extends OxmlCompositeElement<EffectExtent> {

    public static override _Q = 'wp:wrapSquare';
    public static override _A = [':wrapText',':distT',':distB',':distL',':distR',];
    /** Text Wrapping Location. Serialized as `:wrapText` */
    public get wrapText(): WrapTextValues | undefined { return this._g(':wrapText'); }
    public set wrapText(v: WrapTextValues | undefined) { this._s(':wrapText', v); }
    /** Distance From Text (Top). Serialized as `:distT` */
    public get distanceFromTop(): UInt32Value | undefined { return this._g(':distT'); }
    public set distanceFromTop(v: UInt32Value | undefined) { this._s(':distT', v); }
    /** Distance From Text on Bottom Edge. Serialized as `:distB` */
    public get distanceFromBottom(): UInt32Value | undefined { return this._g(':distB'); }
    public set distanceFromBottom(v: UInt32Value | undefined) { this._s(':distB', v); }
    /** Distance From Text on Left Edge. Serialized as `:distL` */
    public get distanceFromLeft(): UInt32Value | undefined { return this._g(':distL'); }
    public set distanceFromLeft(v: UInt32Value | undefined) { this._s(':distL', v); }
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    public get distanceFromRight(): UInt32Value | undefined { return this._g(':distR'); }
    public set distanceFromRight(v: UInt32Value | undefined) { this._s(':distR', v); }
    /** Object Extents Including Effects. */
    public get effectExtent(): EffectExtent | undefined { return this._f(EffectExtent); }

}
/** No Text Wrapping. Serialized as `wp:wrapNone` */
export class WrapNone extends OxmlLeafElement {

    public static override _Q = 'wp:wrapNone';

}

export function initDrawingWordprocessingNamespace() {
    NonVisualGraphicFrameDrawingProperties._C = {
        'a:graphicFrameLocks': AGraphicFrameLocks,
        'a:extLst': AExtensionList,
    };
    DocProperties._C = {
        'a:hlinkClick': AHyperlinkOnClick,
        'a:hlinkHover': AHyperlinkOnHover,
        'a:extLst': ANonVisualDrawingPropertiesExtensionList,
    };
    DocProperties._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':descr': new OxmlAttr(':descr', OxmlType.StringValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
    };
    Extent._D = {
        ':cx': new OxmlAttr(':cx', OxmlType.Int64Value),
        ':cy': new OxmlAttr(':cy', OxmlType.Int64Value),
    };
    VerticalPosition._C = {
        'wp:align': VerticalAlignment,
        'wp:posOffset': PositionOffset,
        'wp14:pctPosVOffset': Wp14PercentagePositionVerticalOffset,
    };
    VerticalPosition._D = {
        ':relativeFrom': new OxmlAttr(':relativeFrom', OxmlType.EnumValue, VerticalRelativePositionValuesArray),
    };
    HorizontalPosition._C = {
        'wp:align': HorizontalAlignment,
        'wp:posOffset': PositionOffset,
        'wp14:pctPosHOffset': Wp14PercentagePositionHeightOffset,
    };
    HorizontalPosition._D = {
        ':relativeFrom': new OxmlAttr(':relativeFrom', OxmlType.EnumValue, HorizontalRelativePositionValuesArray),
    };
    WrapPolygon._C = {
        'wp:start': StartPoint,
        'wp:lineTo': LineTo,
    };
    WrapPolygon._D = {
        ':edited': new OxmlAttr(':edited', OxmlType.BooleanValue),
    };
    EffectExtent._D = {
        ':l': new OxmlAttr(':l', OxmlType.Int64Value),
        ':t': new OxmlAttr(':t', OxmlType.Int64Value),
        ':r': new OxmlAttr(':r', OxmlType.Int64Value),
        ':b': new OxmlAttr(':b', OxmlType.Int64Value),
    };
    Point2DType._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
    };
    Anchor._C = {
        'wp:simplePos': SimplePosition,
        'wp:positionH': HorizontalPosition,
        'wp:positionV': VerticalPosition,
        'wp:extent': Extent,
        'wp:effectExtent': EffectExtent,
        'wp:wrapNone': WrapNone,
        'wp:wrapSquare': WrapSquare,
        'wp:wrapTight': WrapTight,
        'wp:wrapThrough': WrapThrough,
        'wp:wrapTopAndBottom': WrapTopBottom,
        'wp:docPr': DocProperties,
        'wp:cNvGraphicFramePr': NonVisualGraphicFrameDrawingProperties,
        'a:graphic': AGraphic,
        'wp14:sizeRelH': Wp14RelativeWidth,
        'wp14:sizeRelV': Wp14RelativeHeight,
    };
    Anchor._D = {
        ':distT': new OxmlAttr(':distT', OxmlType.UInt32Value),
        ':distB': new OxmlAttr(':distB', OxmlType.UInt32Value),
        ':distL': new OxmlAttr(':distL', OxmlType.UInt32Value),
        ':distR': new OxmlAttr(':distR', OxmlType.UInt32Value),
        ':simplePos': new OxmlAttr(':simplePos', OxmlType.BooleanValue),
        ':relativeHeight': new OxmlAttr(':relativeHeight', OxmlType.UInt32Value),
        ':behindDoc': new OxmlAttr(':behindDoc', OxmlType.BooleanValue),
        ':locked': new OxmlAttr(':locked', OxmlType.BooleanValue),
        ':layoutInCell': new OxmlAttr(':layoutInCell', OxmlType.BooleanValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':allowOverlap': new OxmlAttr(':allowOverlap', OxmlType.BooleanValue),
        'wp14:editId': new OxmlAttr('wp14:editId', OxmlType.HexBinaryValue),
        'wp14:anchorId': new OxmlAttr('wp14:anchorId', OxmlType.HexBinaryValue),
    };
    Inline._C = {
        'wp:extent': Extent,
        'wp:effectExtent': EffectExtent,
        'wp:docPr': DocProperties,
        'wp:cNvGraphicFramePr': NonVisualGraphicFrameDrawingProperties,
        'a:graphic': AGraphic,
    };
    Inline._D = {
        ':distT': new OxmlAttr(':distT', OxmlType.UInt32Value),
        ':distB': new OxmlAttr(':distB', OxmlType.UInt32Value),
        ':distL': new OxmlAttr(':distL', OxmlType.UInt32Value),
        ':distR': new OxmlAttr(':distR', OxmlType.UInt32Value),
        'wp14:anchorId': new OxmlAttr('wp14:anchorId', OxmlType.HexBinaryValue),
        'wp14:editId': new OxmlAttr('wp14:editId', OxmlType.HexBinaryValue),
    };
    WrapTopBottom._C = {
        'wp:effectExtent': EffectExtent,
    };
    WrapTopBottom._D = {
        ':distT': new OxmlAttr(':distT', OxmlType.UInt32Value),
        ':distB': new OxmlAttr(':distB', OxmlType.UInt32Value),
    };
    WrapThrough._C = {
        'wp:wrapPolygon': WrapPolygon,
    };
    WrapThrough._D = {
        ':wrapText': new OxmlAttr(':wrapText', OxmlType.EnumValue, WrapTextValuesArray),
        ':distL': new OxmlAttr(':distL', OxmlType.UInt32Value),
        ':distR': new OxmlAttr(':distR', OxmlType.UInt32Value),
    };
    WrapTight._C = {
        'wp:wrapPolygon': WrapPolygon,
    };
    WrapTight._D = {
        ':wrapText': new OxmlAttr(':wrapText', OxmlType.EnumValue, WrapTextValuesArray),
        ':distL': new OxmlAttr(':distL', OxmlType.UInt32Value),
        ':distR': new OxmlAttr(':distR', OxmlType.UInt32Value),
    };
    WrapSquare._C = {
        'wp:effectExtent': EffectExtent,
    };
    WrapSquare._D = {
        ':wrapText': new OxmlAttr(':wrapText', OxmlType.EnumValue, WrapTextValuesArray),
        ':distT': new OxmlAttr(':distT', OxmlType.UInt32Value),
        ':distB': new OxmlAttr(':distB', OxmlType.UInt32Value),
        ':distL': new OxmlAttr(':distL', OxmlType.UInt32Value),
        ':distR': new OxmlAttr(':distR', OxmlType.UInt32Value),
    };
    return {
        prefix: 'wp',
        xmlns: 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    };
}
