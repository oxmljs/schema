import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../../framework/types/StringValue';
/** Defines the RichDataPivotCacheGuid Class. Serialized as `xprd:richInfo` */
export declare class RichDataPivotCacheGuid extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** pivotCacheGuid. Serialized as `:pivotCacheGuid` */
    get pivotCacheGuid(): StringValue | undefined;
    set pivotCacheGuid(v: StringValue | undefined);
}
export declare function initOfficeSpreadSheetMLY2022PivotRichDataNamespace(): {
    prefix: string;
    xmlns: string;
};
