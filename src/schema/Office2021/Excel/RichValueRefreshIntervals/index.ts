import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { StringValue } from '../../../../framework/types/StringValue';


/** Defines the RichValueRefreshInterval Class. Serialized as `xlrvr:refreshInterval` */
export class RichValueRefreshInterval extends OxmlLeafElement {

    public static override _Q = 'xlrvr:refreshInterval';
    public static override _A = [':resourceIdInt',':resourceIdStr',':interval',];
    /** resourceIdInt. Serialized as `:resourceIdInt` */
    public get resourceIdInt(): Int32Value | undefined { return this._g(':resourceIdInt'); }
    public set resourceIdInt(v: Int32Value | undefined) { this._s(':resourceIdInt', v); }
    /** resourceIdStr. Serialized as `:resourceIdStr` */
    public get resourceIdStr(): StringValue | undefined { return this._g(':resourceIdStr'); }
    public set resourceIdStr(v: StringValue | undefined) { this._s(':resourceIdStr', v); }
    /** interval. Serialized as `:interval` */
    public get interval(): Int32Value | undefined { return this._g(':interval'); }
    public set interval(v: Int32Value | undefined) { this._s(':interval', v); }

}
/** Defines the RichValueRefreshIntervals Class. Serialized as `xlrvr:refreshIntervals` */
export class RichValueRefreshIntervals extends OxmlCompositeElement<RichValueRefreshInterval> {

    public static override _Q = 'xlrvr:refreshIntervals';

}

export function initOffice2021ExcelRichValueRefreshIntervalsNamespace() {
    RichValueRefreshInterval._D = {
        ':resourceIdInt': new OxmlAttr(':resourceIdInt', OxmlType.Int32Value),
        ':resourceIdStr': new OxmlAttr(':resourceIdStr', OxmlType.StringValue),
        ':interval': new OxmlAttr(':interval', OxmlType.Int32Value),
    };
    RichValueRefreshIntervals._C = {
        'xlrvr:refreshInterval': RichValueRefreshInterval,
    };
    return {
        prefix: 'xlrvr',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2020/richvaluerefresh',
    };
}
