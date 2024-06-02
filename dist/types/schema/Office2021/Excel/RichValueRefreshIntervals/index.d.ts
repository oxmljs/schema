import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { StringValue } from '../../../../framework/types/StringValue';
/** Defines the RichValueRefreshInterval Class. Serialized as `xlrvr:refreshInterval` */
export declare class RichValueRefreshInterval extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** resourceIdInt. Serialized as `:resourceIdInt` */
    get resourceIdInt(): Int32Value | undefined;
    set resourceIdInt(v: Int32Value | undefined);
    /** resourceIdStr. Serialized as `:resourceIdStr` */
    get resourceIdStr(): StringValue | undefined;
    set resourceIdStr(v: StringValue | undefined);
    /** interval. Serialized as `:interval` */
    get interval(): Int32Value | undefined;
    set interval(v: Int32Value | undefined);
}
/** Defines the RichValueRefreshIntervals Class. Serialized as `xlrvr:refreshIntervals` */
export declare class RichValueRefreshIntervals extends OxmlCompositeElement<RichValueRefreshInterval> {
    static _Q: string;
}
export declare function initOffice2021ExcelRichValueRefreshIntervalsNamespace(): {
    prefix: string;
    xmlns: string;
};
