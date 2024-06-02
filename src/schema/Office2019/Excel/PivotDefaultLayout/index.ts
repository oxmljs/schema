import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BooleanValue } from '../../../../framework/types/BooleanValue';


/** Defines the PivotTableDefinition16 Class. Serialized as `xpdl:pivotTableDefinition16` */
export class PivotTableDefinition16 extends OxmlLeafElement {

    public static override _Q = 'xpdl:pivotTableDefinition16';
    public static override _A = [':EnabledSubtotalsDefault',':SubtotalsOnTopDefault',':InsertBlankRowDefault',];
    /** EnabledSubtotalsDefault. Serialized as `:EnabledSubtotalsDefault` */
    public get EnabledSubtotalsDefault(): BooleanValue | undefined { return this._g(':EnabledSubtotalsDefault'); }
    public set EnabledSubtotalsDefault(v: BooleanValue | undefined) { this._s(':EnabledSubtotalsDefault', v); }
    /** SubtotalsOnTopDefault. Serialized as `:SubtotalsOnTopDefault` */
    public get SubtotalsOnTopDefault(): BooleanValue | undefined { return this._g(':SubtotalsOnTopDefault'); }
    public set SubtotalsOnTopDefault(v: BooleanValue | undefined) { this._s(':SubtotalsOnTopDefault', v); }
    /** InsertBlankRowDefault. Serialized as `:InsertBlankRowDefault` */
    public get InsertBlankRowDefault(): BooleanValue | undefined { return this._g(':InsertBlankRowDefault'); }
    public set InsertBlankRowDefault(v: BooleanValue | undefined) { this._s(':InsertBlankRowDefault', v); }

}

export function initOffice2019ExcelPivotDefaultLayoutNamespace() {
    PivotTableDefinition16._D = {
        ':EnabledSubtotalsDefault': new OxmlAttr(':EnabledSubtotalsDefault', OxmlType.BooleanValue),
        ':SubtotalsOnTopDefault': new OxmlAttr(':SubtotalsOnTopDefault', OxmlType.BooleanValue),
        ':InsertBlankRowDefault': new OxmlAttr(':InsertBlankRowDefault', OxmlType.BooleanValue),
    };
    return {
        prefix: 'xpdl',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2016/pivotdefaultlayout',
    };
}
