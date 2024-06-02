import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
export declare enum SizeRelativeHorizontallyValues {
    /** undefined. Serialized value: `margin` */
    Margin = "margin",
    /** undefined. Serialized value: `page` */
    Page = "page",
    /** undefined. Serialized value: `leftMargin` */
    LeftMargin = "leftMargin",
    /** undefined. Serialized value: `rightMargin` */
    RightMargin = "rightMargin",
    /** undefined. Serialized value: `insideMargin` */
    InsideMargin = "insideMargin",
    /** undefined. Serialized value: `outsideMargin` */
    OutsideMargin = "outsideMargin"
}
export declare const SizeRelativeHorizontallyValuesArray: readonly [SizeRelativeHorizontallyValues.Margin, SizeRelativeHorizontallyValues.Page, SizeRelativeHorizontallyValues.LeftMargin, SizeRelativeHorizontallyValues.RightMargin, SizeRelativeHorizontallyValues.InsideMargin, SizeRelativeHorizontallyValues.OutsideMargin];
export declare enum SizeRelativeVerticallyValues {
    /** undefined. Serialized value: `margin` */
    Margin = "margin",
    /** undefined. Serialized value: `page` */
    Page = "page",
    /** undefined. Serialized value: `topMargin` */
    TopMargin = "topMargin",
    /** undefined. Serialized value: `bottomMargin` */
    BottomMargin = "bottomMargin",
    /** undefined. Serialized value: `insideMargin` */
    InsideMargin = "insideMargin",
    /** undefined. Serialized value: `outsideMargin` */
    OutsideMargin = "outsideMargin"
}
export declare const SizeRelativeVerticallyValuesArray: readonly [SizeRelativeVerticallyValues.Margin, SizeRelativeVerticallyValues.Page, SizeRelativeVerticallyValues.TopMargin, SizeRelativeVerticallyValues.BottomMargin, SizeRelativeVerticallyValues.InsideMargin, SizeRelativeVerticallyValues.OutsideMargin];
/** Defines the PercentageHeight Class. Serialized as `wp14:pctHeight` */
export declare class PercentageHeight extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the PercentageWidth Class. Serialized as `wp14:pctWidth` */
export declare class PercentageWidth extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the RelativeHeight Class. Serialized as `wp14:sizeRelV` */
export declare class RelativeHeight extends OxmlCompositeElement<PercentageHeight> {
    static _Q: string;
    static _A: string[];
    /** relativeFrom. Serialized as `:relativeFrom` */
    get relativeFrom(): SizeRelativeVerticallyValues | undefined;
    set relativeFrom(v: SizeRelativeVerticallyValues | undefined);
    /** Returns PercentageHeight. */
    get percentageHeight(): PercentageHeight | undefined;
}
/** Defines the RelativeWidth Class. Serialized as `wp14:sizeRelH` */
export declare class RelativeWidth extends OxmlCompositeElement<PercentageWidth> {
    static _Q: string;
    static _A: string[];
    /** relativeFrom. Serialized as `:relativeFrom` */
    get objectId(): SizeRelativeHorizontallyValues | undefined;
    set objectId(v: SizeRelativeHorizontallyValues | undefined);
    /** Returns PercentageWidth. */
    get percentageWidth(): PercentageWidth | undefined;
}
/** Defines the PercentagePositionVerticalOffset Class. Serialized as `wp14:pctPosVOffset` */
export declare class PercentagePositionVerticalOffset extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the PercentagePositionHeightOffset Class. Serialized as `wp14:pctPosHOffset` */
export declare class PercentagePositionHeightOffset extends OxmlLeafTextElement {
    static _Q: string;
}
export declare function initOffice2010WordDrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
