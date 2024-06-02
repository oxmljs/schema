import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';


export enum SizeRelativeHorizontallyValues {
    /** undefined. Serialized value: `margin` */
    Margin = 'margin',
    /** undefined. Serialized value: `page` */
    Page = 'page',
    /** undefined. Serialized value: `leftMargin` */
    LeftMargin = 'leftMargin',
    /** undefined. Serialized value: `rightMargin` */
    RightMargin = 'rightMargin',
    /** undefined. Serialized value: `insideMargin` */
    InsideMargin = 'insideMargin',
    /** undefined. Serialized value: `outsideMargin` */
    OutsideMargin = 'outsideMargin',
}

export const SizeRelativeHorizontallyValuesArray = [
    SizeRelativeHorizontallyValues.Margin,
    SizeRelativeHorizontallyValues.Page,
    SizeRelativeHorizontallyValues.LeftMargin,
    SizeRelativeHorizontallyValues.RightMargin,
    SizeRelativeHorizontallyValues.InsideMargin,
    SizeRelativeHorizontallyValues.OutsideMargin,
] as const;

export enum SizeRelativeVerticallyValues {
    /** undefined. Serialized value: `margin` */
    Margin = 'margin',
    /** undefined. Serialized value: `page` */
    Page = 'page',
    /** undefined. Serialized value: `topMargin` */
    TopMargin = 'topMargin',
    /** undefined. Serialized value: `bottomMargin` */
    BottomMargin = 'bottomMargin',
    /** undefined. Serialized value: `insideMargin` */
    InsideMargin = 'insideMargin',
    /** undefined. Serialized value: `outsideMargin` */
    OutsideMargin = 'outsideMargin',
}

export const SizeRelativeVerticallyValuesArray = [
    SizeRelativeVerticallyValues.Margin,
    SizeRelativeVerticallyValues.Page,
    SizeRelativeVerticallyValues.TopMargin,
    SizeRelativeVerticallyValues.BottomMargin,
    SizeRelativeVerticallyValues.InsideMargin,
    SizeRelativeVerticallyValues.OutsideMargin,
] as const;

/** Defines the PercentageHeight Class. Serialized as `wp14:pctHeight` */
export class PercentageHeight extends OxmlLeafTextElement {

    public static override _Q = 'wp14:pctHeight';

}
/** Defines the PercentageWidth Class. Serialized as `wp14:pctWidth` */
export class PercentageWidth extends OxmlLeafTextElement {

    public static override _Q = 'wp14:pctWidth';

}
/** Defines the RelativeHeight Class. Serialized as `wp14:sizeRelV` */
export class RelativeHeight extends OxmlCompositeElement<PercentageHeight> {

    public static override _Q = 'wp14:sizeRelV';
    public static override _A = [':relativeFrom',];
    /** relativeFrom. Serialized as `:relativeFrom` */
    public get relativeFrom(): SizeRelativeVerticallyValues | undefined { return this._g(':relativeFrom'); }
    public set relativeFrom(v: SizeRelativeVerticallyValues | undefined) { this._s(':relativeFrom', v); }
    /** Returns PercentageHeight. */
    public get percentageHeight(): PercentageHeight | undefined { return this._f(PercentageHeight); }

}
/** Defines the RelativeWidth Class. Serialized as `wp14:sizeRelH` */
export class RelativeWidth extends OxmlCompositeElement<PercentageWidth> {

    public static override _Q = 'wp14:sizeRelH';
    public static override _A = [':relativeFrom',];
    /** relativeFrom. Serialized as `:relativeFrom` */
    public get objectId(): SizeRelativeHorizontallyValues | undefined { return this._g(':relativeFrom'); }
    public set objectId(v: SizeRelativeHorizontallyValues | undefined) { this._s(':relativeFrom', v); }
    /** Returns PercentageWidth. */
    public get percentageWidth(): PercentageWidth | undefined { return this._f(PercentageWidth); }

}
/** Defines the PercentagePositionVerticalOffset Class. Serialized as `wp14:pctPosVOffset` */
export class PercentagePositionVerticalOffset extends OxmlLeafTextElement {

    public static override _Q = 'wp14:pctPosVOffset';

}
/** Defines the PercentagePositionHeightOffset Class. Serialized as `wp14:pctPosHOffset` */
export class PercentagePositionHeightOffset extends OxmlLeafTextElement {

    public static override _Q = 'wp14:pctPosHOffset';

}

export function initOffice2010WordDrawingNamespace() {
    RelativeHeight._C = {
        'wp14:pctHeight': PercentageHeight,
    };
    RelativeHeight._D = {
        ':relativeFrom': new OxmlAttr(':relativeFrom', OxmlType.EnumValue, SizeRelativeVerticallyValuesArray),
    };
    RelativeWidth._C = {
        'wp14:pctWidth': PercentageWidth,
    };
    RelativeWidth._D = {
        ':relativeFrom': new OxmlAttr(':relativeFrom', OxmlType.EnumValue, SizeRelativeHorizontallyValuesArray),
    };
    return {
        prefix: 'wp14',
        xmlns: 'http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing',
    };
}
