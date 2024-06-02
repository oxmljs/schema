import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { IntegerValue } from '../../../framework/types/IntegerValue';
import { TrueFalseValue } from '../../../framework/types/TrueFalseValue';
export declare enum BorderValues {
    /** No Border. Serialized value: `none` */
    None = "none",
    /** Single Line Border. Serialized value: `single` */
    Single = "single",
    /** Thick Line Border. Serialized value: `thick` */
    Thick = "thick",
    /** Double Line Border. Serialized value: `double` */
    Double = "double",
    /** Hairline Border. Serialized value: `hairline` */
    Hairline = "hairline",
    /** Dotted Border. Serialized value: `dot` */
    Dot = "dot",
    /** pecifies a line border consisting of a dashed line around the parent object.. Serialized value: `dash` */
    Dash = "dash",
    /** Dot Dash Border. Serialized value: `dotDash` */
    DotDash = "dotDash",
    /** Dash Dot Dot Border. Serialized value: `dashDotDot` */
    DashDotDot = "dashDotDot",
    /** Triple Line Border. Serialized value: `triple` */
    Triple = "triple",
    /** Thin Thick Small Gap Border. Serialized value: `thinThickSmall` */
    ThinThickSmall = "thinThickSmall",
    /** Small thick-thin lines border. Serialized value: `thickThinSmall` */
    ThickThinSmall = "thickThinSmall",
    /** Small thin-thick-thin Lines Border. Serialized value: `thickBetweenThinSmall` */
    ThickBetweenThinSmall = "thickBetweenThinSmall",
    /** Thin Thick Line Border. Serialized value: `thinThick` */
    ThinThick = "thinThick",
    /** Thick Thin Line Border. Serialized value: `thickThin` */
    ThickThin = "thickThin",
    /** Thin-thick-thin Border. Serialized value: `thickBetweenThin` */
    ThickBetweenThin = "thickBetweenThin",
    /** Thin Thick Large Gap Border. Serialized value: `thinThickLarge` */
    ThinThickLarge = "thinThickLarge",
    /** Thick Thin Large Gap Border. Serialized value: `thickThinLarge` */
    ThickThinLarge = "thickThinLarge",
    /** Large thin-thick-thin Border. Serialized value: `thickBetweenThinLarge` */
    ThickBetweenThinLarge = "thickBetweenThinLarge",
    /** Wavy Border. Serialized value: `wave` */
    Wave = "wave",
    /** Double Wavy Lines Border. Serialized value: `doubleWave` */
    DoubleWave = "doubleWave",
    /** Small Dash Border. Serialized value: `dashedSmall` */
    DashedSmall = "dashedSmall",
    /** Stroked Dash Dot Border. Serialized value: `dashDotStroked` */
    DashDotStroked = "dashDotStroked",
    /** 3D Embossed Border. Serialized value: `threeDEmboss` */
    ThreeDEmboss = "threeDEmboss",
    /** 3D Engraved Border. Serialized value: `threeDEngrave` */
    ThreeDEngrave = "threeDEngrave",
    /** Outset Border. Serialized value: `HTMLOutset` */
    HTMLOutset = "HTMLOutset",
    /** Inset Border. Serialized value: `HTMLInset` */
    HTMLInset = "HTMLInset"
}
export declare const BorderValuesArray: readonly [BorderValues.None, BorderValues.Single, BorderValues.Thick, BorderValues.Double, BorderValues.Hairline, BorderValues.Dot, BorderValues.Dash, BorderValues.DotDash, BorderValues.DashDotDot, BorderValues.Triple, BorderValues.ThinThickSmall, BorderValues.ThickThinSmall, BorderValues.ThickBetweenThinSmall, BorderValues.ThinThick, BorderValues.ThickThin, BorderValues.ThickBetweenThin, BorderValues.ThinThickLarge, BorderValues.ThickThinLarge, BorderValues.ThickBetweenThinLarge, BorderValues.Wave, BorderValues.DoubleWave, BorderValues.DashedSmall, BorderValues.DashDotStroked, BorderValues.ThreeDEmboss, BorderValues.ThreeDEngrave, BorderValues.HTMLOutset, BorderValues.HTMLInset];
export declare enum WrapValues {
    /** Top and bottom wrapping. Serialized value: `topAndBottom` */
    TopAndBottom = "topAndBottom",
    /** Square wrapping. Serialized value: `square` */
    Square = "square",
    /** No wrapping. Serialized value: `none` */
    None = "none",
    /** Tight wrapping. Serialized value: `tight` */
    Tight = "tight",
    /** Through wrapping. Serialized value: `through` */
    Through = "through"
}
export declare const WrapValuesArray: readonly [WrapValues.TopAndBottom, WrapValues.Square, WrapValues.None, WrapValues.Tight, WrapValues.Through];
export declare enum WrapSideValues {
    /** Both sides. Serialized value: `both` */
    Both = "both",
    /** Left side. Serialized value: `left` */
    Left = "left",
    /** Right side. Serialized value: `right` */
    Right = "right",
    /** Largest side. Serialized value: `largest` */
    Largest = "largest"
}
export declare const WrapSideValuesArray: readonly [WrapSideValues.Both, WrapSideValues.Left, WrapSideValues.Right, WrapSideValues.Largest];
export declare enum HorizontalAnchorValues {
    /** Margin. Serialized value: `margin` */
    Margin = "margin",
    /** Page. Serialized value: `page` */
    Page = "page",
    /** Text. Serialized value: `text` */
    Text = "text"
}
export declare const HorizontalAnchorValuesArray: readonly [HorizontalAnchorValues.Margin, HorizontalAnchorValues.Page, HorizontalAnchorValues.Text];
export declare enum VerticalAnchorValues {
    /** Margin. Serialized value: `margin` */
    Margin = "margin",
    /** Page. Serialized value: `page` */
    Page = "page",
    /** Text. Serialized value: `text` */
    Text = "text"
}
export declare const VerticalAnchorValuesArray: readonly [VerticalAnchorValues.Margin, VerticalAnchorValues.Page, VerticalAnchorValues.Text];
/** Anchor Location Is Locked. Serialized as `w10:anchorlock` */
export declare class AnchorLock extends OxmlLeafElement {
    static _Q: string;
}
/** Text Wrapping. Serialized as `w10:wrap` */
export declare class TextWrap extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Wrapping type. Serialized as `:type` */
    get type(): WrapValues | undefined;
    set type(v: WrapValues | undefined);
    /** Wrapping side. Serialized as `:side` */
    get side(): WrapSideValues | undefined;
    set side(v: WrapSideValues | undefined);
    /** Horizontal Positioning Base. Serialized as `:anchorx` */
    get anchorX(): HorizontalAnchorValues | undefined;
    set anchorX(v: HorizontalAnchorValues | undefined);
    /** Vertical Positioning Base. Serialized as `:anchory` */
    get anchorY(): VerticalAnchorValues | undefined;
    set anchorY(v: VerticalAnchorValues | undefined);
}
/** Defines the BorderType Class. */
export declare abstract class BorderType extends OxmlLeafElement {
    static _A: string[];
    /** Border Style. Serialized as `:type` */
    get type(): BorderValues | undefined;
    set type(v: BorderValues | undefined);
    /** Border Width. Serialized as `:width` */
    get width(): IntegerValue | undefined;
    set width(v: IntegerValue | undefined);
    /** Border shadow. Serialized as `:shadow` */
    get shadow(): TrueFalseValue | undefined;
    set shadow(v: TrueFalseValue | undefined);
}
/** Bottom Border. Serialized as `w10:borderbottom` */
export declare class BottomBorder extends BorderType {
    static _Q: string;
}
/** Right Border. Serialized as `w10:borderright` */
export declare class RightBorder extends BorderType {
    static _Q: string;
}
/** Left Border. Serialized as `w10:borderleft` */
export declare class LeftBorder extends BorderType {
    static _Q: string;
}
/** Top Border. Serialized as `w10:bordertop` */
export declare class TopBorder extends BorderType {
    static _Q: string;
}
export declare function initVmlWordprocessingNamespace(): {
    prefix: string;
    xmlns: string;
};
