import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
/** Defines the WebVideoProperty Class. Serialized as `wp15:webVideoPr` */
export declare class WebVideoProperty extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** embeddedHtml. Serialized as `:embeddedHtml` */
    get embeddedHtml(): StringValue | undefined;
    set embeddedHtml(v: StringValue | undefined);
    /** h. Serialized as `:h` */
    get height(): UInt32Value | undefined;
    set height(v: UInt32Value | undefined);
    /** w. Serialized as `:w` */
    get width(): UInt32Value | undefined;
    set width(v: UInt32Value | undefined);
}
export declare function initOffice2013WordDrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
