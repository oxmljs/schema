import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
/** Defines the PivotTableDefinition16 Class. Serialized as `xpdl:pivotTableDefinition16` */
export declare class PivotTableDefinition16 extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** EnabledSubtotalsDefault. Serialized as `:EnabledSubtotalsDefault` */
    get EnabledSubtotalsDefault(): BooleanValue | undefined;
    set EnabledSubtotalsDefault(v: BooleanValue | undefined);
    /** SubtotalsOnTopDefault. Serialized as `:SubtotalsOnTopDefault` */
    get SubtotalsOnTopDefault(): BooleanValue | undefined;
    set SubtotalsOnTopDefault(v: BooleanValue | undefined);
    /** InsertBlankRowDefault. Serialized as `:InsertBlankRowDefault` */
    get InsertBlankRowDefault(): BooleanValue | undefined;
    set InsertBlankRowDefault(v: BooleanValue | undefined);
}
export declare function initOffice2019ExcelPivotDefaultLayoutNamespace(): {
    prefix: string;
    xmlns: string;
};
