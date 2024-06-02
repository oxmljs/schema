import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { IntegerValue } from '../../../framework/types/IntegerValue';
import { TrueFalseValue } from '../../../framework/types/TrueFalseValue';


export enum BorderValues {
    /** No Border. Serialized value: `none` */
    None = 'none',
    /** Single Line Border. Serialized value: `single` */
    Single = 'single',
    /** Thick Line Border. Serialized value: `thick` */
    Thick = 'thick',
    /** Double Line Border. Serialized value: `double` */
    Double = 'double',
    /** Hairline Border. Serialized value: `hairline` */
    Hairline = 'hairline',
    /** Dotted Border. Serialized value: `dot` */
    Dot = 'dot',
    /** pecifies a line border consisting of a dashed line around the parent object.. Serialized value: `dash` */
    Dash = 'dash',
    /** Dot Dash Border. Serialized value: `dotDash` */
    DotDash = 'dotDash',
    /** Dash Dot Dot Border. Serialized value: `dashDotDot` */
    DashDotDot = 'dashDotDot',
    /** Triple Line Border. Serialized value: `triple` */
    Triple = 'triple',
    /** Thin Thick Small Gap Border. Serialized value: `thinThickSmall` */
    ThinThickSmall = 'thinThickSmall',
    /** Small thick-thin lines border. Serialized value: `thickThinSmall` */
    ThickThinSmall = 'thickThinSmall',
    /** Small thin-thick-thin Lines Border. Serialized value: `thickBetweenThinSmall` */
    ThickBetweenThinSmall = 'thickBetweenThinSmall',
    /** Thin Thick Line Border. Serialized value: `thinThick` */
    ThinThick = 'thinThick',
    /** Thick Thin Line Border. Serialized value: `thickThin` */
    ThickThin = 'thickThin',
    /** Thin-thick-thin Border. Serialized value: `thickBetweenThin` */
    ThickBetweenThin = 'thickBetweenThin',
    /** Thin Thick Large Gap Border. Serialized value: `thinThickLarge` */
    ThinThickLarge = 'thinThickLarge',
    /** Thick Thin Large Gap Border. Serialized value: `thickThinLarge` */
    ThickThinLarge = 'thickThinLarge',
    /** Large thin-thick-thin Border. Serialized value: `thickBetweenThinLarge` */
    ThickBetweenThinLarge = 'thickBetweenThinLarge',
    /** Wavy Border. Serialized value: `wave` */
    Wave = 'wave',
    /** Double Wavy Lines Border. Serialized value: `doubleWave` */
    DoubleWave = 'doubleWave',
    /** Small Dash Border. Serialized value: `dashedSmall` */
    DashedSmall = 'dashedSmall',
    /** Stroked Dash Dot Border. Serialized value: `dashDotStroked` */
    DashDotStroked = 'dashDotStroked',
    /** 3D Embossed Border. Serialized value: `threeDEmboss` */
    ThreeDEmboss = 'threeDEmboss',
    /** 3D Engraved Border. Serialized value: `threeDEngrave` */
    ThreeDEngrave = 'threeDEngrave',
    /** Outset Border. Serialized value: `HTMLOutset` */
    HTMLOutset = 'HTMLOutset',
    /** Inset Border. Serialized value: `HTMLInset` */
    HTMLInset = 'HTMLInset',
}

export const BorderValuesArray = [
    BorderValues.None,
    BorderValues.Single,
    BorderValues.Thick,
    BorderValues.Double,
    BorderValues.Hairline,
    BorderValues.Dot,
    BorderValues.Dash,
    BorderValues.DotDash,
    BorderValues.DashDotDot,
    BorderValues.Triple,
    BorderValues.ThinThickSmall,
    BorderValues.ThickThinSmall,
    BorderValues.ThickBetweenThinSmall,
    BorderValues.ThinThick,
    BorderValues.ThickThin,
    BorderValues.ThickBetweenThin,
    BorderValues.ThinThickLarge,
    BorderValues.ThickThinLarge,
    BorderValues.ThickBetweenThinLarge,
    BorderValues.Wave,
    BorderValues.DoubleWave,
    BorderValues.DashedSmall,
    BorderValues.DashDotStroked,
    BorderValues.ThreeDEmboss,
    BorderValues.ThreeDEngrave,
    BorderValues.HTMLOutset,
    BorderValues.HTMLInset,
] as const;

export enum WrapValues {
    /** Top and bottom wrapping. Serialized value: `topAndBottom` */
    TopAndBottom = 'topAndBottom',
    /** Square wrapping. Serialized value: `square` */
    Square = 'square',
    /** No wrapping. Serialized value: `none` */
    None = 'none',
    /** Tight wrapping. Serialized value: `tight` */
    Tight = 'tight',
    /** Through wrapping. Serialized value: `through` */
    Through = 'through',
}

export const WrapValuesArray = [
    WrapValues.TopAndBottom,
    WrapValues.Square,
    WrapValues.None,
    WrapValues.Tight,
    WrapValues.Through,
] as const;

export enum WrapSideValues {
    /** Both sides. Serialized value: `both` */
    Both = 'both',
    /** Left side. Serialized value: `left` */
    Left = 'left',
    /** Right side. Serialized value: `right` */
    Right = 'right',
    /** Largest side. Serialized value: `largest` */
    Largest = 'largest',
}

export const WrapSideValuesArray = [
    WrapSideValues.Both,
    WrapSideValues.Left,
    WrapSideValues.Right,
    WrapSideValues.Largest,
] as const;

export enum HorizontalAnchorValues {
    /** Margin. Serialized value: `margin` */
    Margin = 'margin',
    /** Page. Serialized value: `page` */
    Page = 'page',
    /** Text. Serialized value: `text` */
    Text = 'text',
}

export const HorizontalAnchorValuesArray = [
    HorizontalAnchorValues.Margin,
    HorizontalAnchorValues.Page,
    HorizontalAnchorValues.Text,
] as const;

export enum VerticalAnchorValues {
    /** Margin. Serialized value: `margin` */
    Margin = 'margin',
    /** Page. Serialized value: `page` */
    Page = 'page',
    /** Text. Serialized value: `text` */
    Text = 'text',
}

export const VerticalAnchorValuesArray = [
    VerticalAnchorValues.Margin,
    VerticalAnchorValues.Page,
    VerticalAnchorValues.Text,
] as const;

/** Anchor Location Is Locked. Serialized as `w10:anchorlock` */
export class AnchorLock extends OxmlLeafElement {

    public static override _Q = 'w10:anchorlock';

}
/** Text Wrapping. Serialized as `w10:wrap` */
export class TextWrap extends OxmlLeafElement {

    public static override _Q = 'w10:wrap';
    public static override _A = [':type',':side',':anchorx',':anchory',];
    /** Wrapping type. Serialized as `:type` */
    public get type(): WrapValues | undefined { return this._g(':type'); }
    public set type(v: WrapValues | undefined) { this._s(':type', v); }
    /** Wrapping side. Serialized as `:side` */
    public get side(): WrapSideValues | undefined { return this._g(':side'); }
    public set side(v: WrapSideValues | undefined) { this._s(':side', v); }
    /** Horizontal Positioning Base. Serialized as `:anchorx` */
    public get anchorX(): HorizontalAnchorValues | undefined { return this._g(':anchorx'); }
    public set anchorX(v: HorizontalAnchorValues | undefined) { this._s(':anchorx', v); }
    /** Vertical Positioning Base. Serialized as `:anchory` */
    public get anchorY(): VerticalAnchorValues | undefined { return this._g(':anchory'); }
    public set anchorY(v: VerticalAnchorValues | undefined) { this._s(':anchory', v); }

}
/** Defines the BorderType Class. */
export abstract class BorderType extends OxmlLeafElement {

    public static override _A = [':type',':width',':shadow',];
    /** Border Style. Serialized as `:type` */
    public get type(): BorderValues | undefined { return this._g(':type'); }
    public set type(v: BorderValues | undefined) { this._s(':type', v); }
    /** Border Width. Serialized as `:width` */
    public get width(): IntegerValue | undefined { return this._g(':width'); }
    public set width(v: IntegerValue | undefined) { this._s(':width', v); }
    /** Border shadow. Serialized as `:shadow` */
    public get shadow(): TrueFalseValue | undefined { return this._g(':shadow'); }
    public set shadow(v: TrueFalseValue | undefined) { this._s(':shadow', v); }

}
/** Bottom Border. Serialized as `w10:borderbottom` */
export class BottomBorder extends BorderType {

    public static override _Q = 'w10:borderbottom';

}
/** Right Border. Serialized as `w10:borderright` */
export class RightBorder extends BorderType {

    public static override _Q = 'w10:borderright';

}
/** Left Border. Serialized as `w10:borderleft` */
export class LeftBorder extends BorderType {

    public static override _Q = 'w10:borderleft';

}
/** Top Border. Serialized as `w10:bordertop` */
export class TopBorder extends BorderType {

    public static override _Q = 'w10:bordertop';

}

export function initVmlWordprocessingNamespace() {
    TextWrap._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, WrapValuesArray),
        ':side': new OxmlAttr(':side', OxmlType.EnumValue, WrapSideValuesArray),
        ':anchorx': new OxmlAttr(':anchorx', OxmlType.EnumValue, HorizontalAnchorValuesArray),
        ':anchory': new OxmlAttr(':anchory', OxmlType.EnumValue, VerticalAnchorValuesArray),
    };
    BorderType._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, BorderValuesArray),
        ':width': new OxmlAttr(':width', OxmlType.IntegerValue),
        ':shadow': new OxmlAttr(':shadow', OxmlType.TrueFalseValue),
    };
    return {
        prefix: 'w10',
        xmlns: 'urn:schemas-microsoft-com:office:word',
    };
}
