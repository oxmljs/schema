import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
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
export declare enum WrapTextValues {
    /** Both Sides. Serialized value: `bothSides` */
    BothSides = "bothSides",
    /** Left Side Only. Serialized value: `left` */
    Left = "left",
    /** Right Side Only. Serialized value: `right` */
    Right = "right",
    /** Largest Side Only. Serialized value: `largest` */
    Largest = "largest"
}
export declare const WrapTextValuesArray: readonly [WrapTextValues.BothSides, WrapTextValues.Left, WrapTextValues.Right, WrapTextValues.Largest];
export declare enum HorizontalAlignmentValues {
    /** Left Alignment. Serialized value: `left` */
    Left = "left",
    /** Right Alignment. Serialized value: `right` */
    Right = "right",
    /** Center Alignment. Serialized value: `center` */
    Center = "center",
    /** Inside. Serialized value: `inside` */
    Inside = "inside",
    /** Outside. Serialized value: `outside` */
    Outside = "outside"
}
export declare const HorizontalAlignmentValuesArray: readonly [HorizontalAlignmentValues.Left, HorizontalAlignmentValues.Right, HorizontalAlignmentValues.Center, HorizontalAlignmentValues.Inside, HorizontalAlignmentValues.Outside];
export declare enum HorizontalRelativePositionValues {
    /** Page Margin. Serialized value: `margin` */
    Margin = "margin",
    /** Page Edge. Serialized value: `page` */
    Page = "page",
    /** Column. Serialized value: `column` */
    Column = "column",
    /** Character. Serialized value: `character` */
    Character = "character",
    /** Left Margin. Serialized value: `leftMargin` */
    LeftMargin = "leftMargin",
    /** Right Margin. Serialized value: `rightMargin` */
    RightMargin = "rightMargin",
    /** Inside Margin. Serialized value: `insideMargin` */
    InsideMargin = "insideMargin",
    /** Outside Margin. Serialized value: `outsideMargin` */
    OutsideMargin = "outsideMargin"
}
export declare const HorizontalRelativePositionValuesArray: readonly [HorizontalRelativePositionValues.Margin, HorizontalRelativePositionValues.Page, HorizontalRelativePositionValues.Column, HorizontalRelativePositionValues.Character, HorizontalRelativePositionValues.LeftMargin, HorizontalRelativePositionValues.RightMargin, HorizontalRelativePositionValues.InsideMargin, HorizontalRelativePositionValues.OutsideMargin];
export declare enum VerticalAlignmentValues {
    /** Top. Serialized value: `top` */
    Top = "top",
    /** Bottom. Serialized value: `bottom` */
    Bottom = "bottom",
    /** Center Alignment. Serialized value: `center` */
    Center = "center",
    /** Inside. Serialized value: `inside` */
    Inside = "inside",
    /** Outside. Serialized value: `outside` */
    Outside = "outside"
}
export declare const VerticalAlignmentValuesArray: readonly [VerticalAlignmentValues.Top, VerticalAlignmentValues.Bottom, VerticalAlignmentValues.Center, VerticalAlignmentValues.Inside, VerticalAlignmentValues.Outside];
export declare enum VerticalRelativePositionValues {
    /** Page Margin. Serialized value: `margin` */
    Margin = "margin",
    /** Page Edge. Serialized value: `page` */
    Page = "page",
    /** Paragraph. Serialized value: `paragraph` */
    Paragraph = "paragraph",
    /** Line. Serialized value: `line` */
    Line = "line",
    /** Top Margin. Serialized value: `topMargin` */
    TopMargin = "topMargin",
    /** Bottom Margin. Serialized value: `bottomMargin` */
    BottomMargin = "bottomMargin",
    /** Inside Margin. Serialized value: `insideMargin` */
    InsideMargin = "insideMargin",
    /** Outside Margin. Serialized value: `outsideMargin` */
    OutsideMargin = "outsideMargin"
}
export declare const VerticalRelativePositionValuesArray: readonly [VerticalRelativePositionValues.Margin, VerticalRelativePositionValues.Page, VerticalRelativePositionValues.Paragraph, VerticalRelativePositionValues.Line, VerticalRelativePositionValues.TopMargin, VerticalRelativePositionValues.BottomMargin, VerticalRelativePositionValues.InsideMargin, VerticalRelativePositionValues.OutsideMargin];
/** Relative Horizontal Alignment. Serialized as `wp:align` */
export declare class HorizontalAlignment extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the PositionOffset Class. Serialized as `wp:posOffset` */
export declare class PositionOffset extends OxmlLeafTextElement {
    static _Q: string;
}
/** Relative Vertical Alignment. Serialized as `wp:align` */
export declare class VerticalAlignment extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the NonVisualGraphicFrameDrawingProperties Class. Serialized as `wp:cNvGraphicFramePr` */
export declare class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {
    static _Q: string;
    /** Graphic Frame Locks. */
    get graphicFrameLocks(): AGraphicFrameLocks | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Drawing Object Non-Visual Properties. Serialized as `wp:docPr` */
export declare class DocProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Application defined unique identifier.. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Description of the drawing element.. Serialized as `:descr` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** Flag determining to show or hide this element.. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Hyperlink associated with clicking or selecting the element.. */
    get hyperlinkOnClick(): AHyperlinkOnClick | undefined;
    /** Hyperlink associated with hovering over the element.. */
    get hyperlinkOnHover(): AHyperlinkOnHover | undefined;
    /** Future extension. */
    get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined;
}
/** Inline Drawing Object Extents. Serialized as `wp:extent` */
export declare class Extent extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Extent Length. Serialized as `:cx` */
    get cx(): Int64Value | undefined;
    set cx(v: Int64Value | undefined);
    /** Extent Width. Serialized as `:cy` */
    get cy(): Int64Value | undefined;
    set cy(v: Int64Value | undefined);
}
/** Vertical Positioning. Serialized as `wp:positionV` */
export declare class VerticalPosition extends OxmlCompositeElement<VerticalAlignment | PositionOffset | Wp14PercentagePositionVerticalOffset> {
    static _Q: string;
    static _A: string[];
    /** Vertical Position Relative Base. Serialized as `:relativeFrom` */
    get relativeFrom(): VerticalRelativePositionValues | undefined;
    set relativeFrom(v: VerticalRelativePositionValues | undefined);
    /** Relative Vertical Alignment. */
    get verticalAlignment(): VerticalAlignment | undefined;
    /** Returns PositionOffset. */
    get positionOffset(): PositionOffset | undefined;
    /** Returns Wp14PercentagePositionVerticalOffset. */
    get percentagePositionVerticalOffset(): Wp14PercentagePositionVerticalOffset | undefined;
}
/** Horizontal Positioning. Serialized as `wp:positionH` */
export declare class HorizontalPosition extends OxmlCompositeElement<HorizontalAlignment | PositionOffset | Wp14PercentagePositionHeightOffset> {
    static _Q: string;
    static _A: string[];
    /** Horizontal Position Relative Base. Serialized as `:relativeFrom` */
    get relativeFrom(): HorizontalRelativePositionValues | undefined;
    set relativeFrom(v: HorizontalRelativePositionValues | undefined);
    /** Relative Horizontal Alignment. */
    get horizontalAlignment(): HorizontalAlignment | undefined;
    /** Absolute Position Offset. */
    get positionOffset(): PositionOffset | undefined;
    /** Returns Wp14PercentagePositionHeightOffset. */
    get percentagePositionHeightOffset(): Wp14PercentagePositionHeightOffset | undefined;
}
/** Tight Wrapping Extents Polygon. Serialized as `wp:wrapPolygon` */
export declare class WrapPolygon extends OxmlCompositeElement<StartPoint | LineTo> {
    static _Q: string;
    static _A: string[];
    /** Wrapping Points Modified. Serialized as `:edited` */
    get edited(): BooleanValue | undefined;
    set edited(v: BooleanValue | undefined);
    /** Wrapping Polygon Start. */
    get startPoint(): StartPoint | undefined;
}
/** Object Extents Including Effects. Serialized as `wp:effectExtent` */
export declare class EffectExtent extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Additional Extent on Left Edge. Serialized as `:l` */
    get leftEdge(): Int64Value | undefined;
    set leftEdge(v: Int64Value | undefined);
    /** Additional Extent on Top Edge. Serialized as `:t` */
    get topEdge(): Int64Value | undefined;
    set topEdge(v: Int64Value | undefined);
    /** Additional Extent on Right Edge. Serialized as `:r` */
    get rightEdge(): Int64Value | undefined;
    set rightEdge(v: Int64Value | undefined);
    /** Additional Extent on Bottom Edge. Serialized as `:b` */
    get bottomEdge(): Int64Value | undefined;
    set bottomEdge(v: Int64Value | undefined);
}
/** Defines the Point2DType Class. */
export declare abstract class Point2DType extends OxmlLeafElement {
    static _A: string[];
    /** X-Axis Coordinate. Serialized as `:x` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** Y-Axis Coordinate. Serialized as `:y` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
}
/** Simple Positioning Coordinates. Serialized as `wp:simplePos` */
export declare class SimplePosition extends Point2DType {
    static _Q: string;
}
/** Wrapping Polygon Line End Position. Serialized as `wp:lineTo` */
export declare class LineTo extends Point2DType {
    static _Q: string;
}
/** Wrapping Polygon Start. Serialized as `wp:start` */
export declare class StartPoint extends Point2DType {
    static _Q: string;
}
/** Anchor for Floating DrawingML Object. Serialized as `wp:anchor` */
export declare class Anchor extends OxmlCompositeElement<SimplePosition | HorizontalPosition | VerticalPosition | Extent | EffectExtent | WrapNone | WrapSquare | WrapTight | WrapThrough | WrapTopBottom | DocProperties | NonVisualGraphicFrameDrawingProperties | AGraphic | Wp14RelativeWidth | Wp14RelativeHeight> {
    static _Q: string;
    static _A: string[];
    /** Distance From Text on Top Edge. Serialized as `:distT` */
    get distanceFromTop(): UInt32Value | undefined;
    set distanceFromTop(v: UInt32Value | undefined);
    /** Distance From Text on Bottom Edge. Serialized as `:distB` */
    get distanceFromBottom(): UInt32Value | undefined;
    set distanceFromBottom(v: UInt32Value | undefined);
    /** Distance From Text on Left Edge. Serialized as `:distL` */
    get distanceFromLeft(): UInt32Value | undefined;
    set distanceFromLeft(v: UInt32Value | undefined);
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    get distanceFromRight(): UInt32Value | undefined;
    set distanceFromRight(v: UInt32Value | undefined);
    /** Page Positioning. Serialized as `:simplePos` */
    get simplePos(): BooleanValue | undefined;
    set simplePos(v: BooleanValue | undefined);
    /** Relative Z-Ordering Position. Serialized as `:relativeHeight` */
    get relativeHeight(): UInt32Value | undefined;
    set relativeHeight(v: UInt32Value | undefined);
    /** Display Behind Document Text. Serialized as `:behindDoc` */
    get behindDoc(): BooleanValue | undefined;
    set behindDoc(v: BooleanValue | undefined);
    /** Lock Anchor. Serialized as `:locked` */
    get locked(): BooleanValue | undefined;
    set locked(v: BooleanValue | undefined);
    /** Layout In Table Cell. Serialized as `:layoutInCell` */
    get layoutInCell(): BooleanValue | undefined;
    set layoutInCell(v: BooleanValue | undefined);
    /** Hidden. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Allow Objects to Overlap. Serialized as `:allowOverlap` */
    get allowOverlap(): BooleanValue | undefined;
    set allowOverlap(v: BooleanValue | undefined);
    /** editId. Serialized as `wp14:editId` */
    get editId(): HexBinaryValue | undefined;
    set editId(v: HexBinaryValue | undefined);
    /** anchorId. Serialized as `wp14:anchorId` */
    get anchorId(): HexBinaryValue | undefined;
    set anchorId(v: HexBinaryValue | undefined);
    /** Simple Positioning Coordinates. */
    get simplePosition(): SimplePosition | undefined;
    /** Horizontal Positioning. */
    get horizontalPosition(): HorizontalPosition | undefined;
    /** Vertical Positioning. */
    get verticalPosition(): VerticalPosition | undefined;
    /** Inline Drawing Object Extents. */
    get extent(): Extent | undefined;
    /** Returns EffectExtent. */
    get effectExtent(): EffectExtent | undefined;
}
/** Inline DrawingML Object. Serialized as `wp:inline` */
export declare class Inline extends OxmlCompositeElement<Extent | EffectExtent | DocProperties | NonVisualGraphicFrameDrawingProperties | AGraphic> {
    static _Q: string;
    static _A: string[];
    /** Distance From Text on Top Edge. Serialized as `:distT` */
    get distanceFromTop(): UInt32Value | undefined;
    set distanceFromTop(v: UInt32Value | undefined);
    /** Distance From Text on Bottom Edge. Serialized as `:distB` */
    get distanceFromBottom(): UInt32Value | undefined;
    set distanceFromBottom(v: UInt32Value | undefined);
    /** Distance From Text on Left Edge. Serialized as `:distL` */
    get distanceFromLeft(): UInt32Value | undefined;
    set distanceFromLeft(v: UInt32Value | undefined);
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    get distanceFromRight(): UInt32Value | undefined;
    set distanceFromRight(v: UInt32Value | undefined);
    /** anchorId. Serialized as `wp14:anchorId` */
    get anchorId(): HexBinaryValue | undefined;
    set anchorId(v: HexBinaryValue | undefined);
    /** editId. Serialized as `wp14:editId` */
    get editId(): HexBinaryValue | undefined;
    set editId(v: HexBinaryValue | undefined);
    /** Drawing Object Size. */
    get extent(): Extent | undefined;
    /** Inline Wrapping Extent. */
    get effectExtent(): EffectExtent | undefined;
    /** Drawing Object Non-Visual Properties. */
    get docProperties(): DocProperties | undefined;
    /** Common DrawingML Non-Visual Properties. */
    get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined;
    /** Returns AGraphic. */
    get graphic(): AGraphic | undefined;
}
/** Top and Bottom Wrapping. Serialized as `wp:wrapTopAndBottom` */
export declare class WrapTopBottom extends OxmlCompositeElement<EffectExtent> {
    static _Q: string;
    static _A: string[];
    /** Distance From Text on Top Edge. Serialized as `:distT` */
    get distanceFromTop(): UInt32Value | undefined;
    set distanceFromTop(v: UInt32Value | undefined);
    /** Distance From Text on Bottom Edge. Serialized as `:distB` */
    get distanceFromBottom(): UInt32Value | undefined;
    set distanceFromBottom(v: UInt32Value | undefined);
    /** Wrapping Boundaries. */
    get effectExtent(): EffectExtent | undefined;
}
/** Through Wrapping. Serialized as `wp:wrapThrough` */
export declare class WrapThrough extends OxmlCompositeElement<WrapPolygon> {
    static _Q: string;
    static _A: string[];
    /** Text Wrapping Location. Serialized as `:wrapText` */
    get wrapText(): WrapTextValues | undefined;
    set wrapText(v: WrapTextValues | undefined);
    /** Distance From Text on Left Edge. Serialized as `:distL` */
    get distanceFromLeft(): UInt32Value | undefined;
    set distanceFromLeft(v: UInt32Value | undefined);
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    get distanceFromRight(): UInt32Value | undefined;
    set distanceFromRight(v: UInt32Value | undefined);
    /** Wrapping Polygon. */
    get wrapPolygon(): WrapPolygon | undefined;
}
/** Tight Wrapping. Serialized as `wp:wrapTight` */
export declare class WrapTight extends OxmlCompositeElement<WrapPolygon> {
    static _Q: string;
    static _A: string[];
    /** Text Wrapping Location. Serialized as `:wrapText` */
    get wrapText(): WrapTextValues | undefined;
    set wrapText(v: WrapTextValues | undefined);
    /** Distance From Test on Left Edge. Serialized as `:distL` */
    get distanceFromLeft(): UInt32Value | undefined;
    set distanceFromLeft(v: UInt32Value | undefined);
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    get distanceFromRight(): UInt32Value | undefined;
    set distanceFromRight(v: UInt32Value | undefined);
    /** Tight Wrapping Extents Polygon. */
    get wrapPolygon(): WrapPolygon | undefined;
}
/** Square Wrapping. Serialized as `wp:wrapSquare` */
export declare class WrapSquare extends OxmlCompositeElement<EffectExtent> {
    static _Q: string;
    static _A: string[];
    /** Text Wrapping Location. Serialized as `:wrapText` */
    get wrapText(): WrapTextValues | undefined;
    set wrapText(v: WrapTextValues | undefined);
    /** Distance From Text (Top). Serialized as `:distT` */
    get distanceFromTop(): UInt32Value | undefined;
    set distanceFromTop(v: UInt32Value | undefined);
    /** Distance From Text on Bottom Edge. Serialized as `:distB` */
    get distanceFromBottom(): UInt32Value | undefined;
    set distanceFromBottom(v: UInt32Value | undefined);
    /** Distance From Text on Left Edge. Serialized as `:distL` */
    get distanceFromLeft(): UInt32Value | undefined;
    set distanceFromLeft(v: UInt32Value | undefined);
    /** Distance From Text on Right Edge. Serialized as `:distR` */
    get distanceFromRight(): UInt32Value | undefined;
    set distanceFromRight(v: UInt32Value | undefined);
    /** Object Extents Including Effects. */
    get effectExtent(): EffectExtent | undefined;
}
/** No Text Wrapping. Serialized as `wp:wrapNone` */
export declare class WrapNone extends OxmlLeafElement {
    static _Q: string;
}
export declare function initDrawingWordprocessingNamespace(): {
    prefix: string;
    xmlns: string;
};
