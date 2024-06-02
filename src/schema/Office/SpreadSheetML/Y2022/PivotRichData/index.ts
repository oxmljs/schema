import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../../framework/OxmlType';
import { StringValue } from '../../../../../framework/types/StringValue';


/** Defines the RichDataPivotCacheGuid Class. Serialized as `xprd:richInfo` */
export class RichDataPivotCacheGuid extends OxmlLeafElement {

    public static override _Q = 'xprd:richInfo';
    public static override _A = [':pivotCacheGuid',];
    /** pivotCacheGuid. Serialized as `:pivotCacheGuid` */
    public get pivotCacheGuid(): StringValue | undefined { return this._g(':pivotCacheGuid'); }
    public set pivotCacheGuid(v: StringValue | undefined) { this._s(':pivotCacheGuid', v); }

}

export function initOfficeSpreadSheetMLY2022PivotRichDataNamespace() {
    RichDataPivotCacheGuid._D = {
        ':pivotCacheGuid': new OxmlAttr(':pivotCacheGuid', OxmlType.StringValue),
    };
    return {
        prefix: 'xprd',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2022/pivotRichData',
    };
}
