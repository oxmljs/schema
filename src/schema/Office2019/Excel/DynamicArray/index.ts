import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Extension as XExtension } from '../../../Spreadsheet';


/** Defines the ExtensionList Class. Serialized as `xda:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'xda:extLst';

}
/** Defines the DynamicArrayProperties Class. Serialized as `xda:dynamicArrayProperties` */
export class DynamicArrayProperties extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'xda:dynamicArrayProperties';
    public static override _A = [':fDynamic',':fCollapsed',];
    /** fDynamic. Serialized as `:fDynamic` */
    public get fDynamic(): BooleanValue | undefined { return this._g(':fDynamic'); }
    public set fDynamic(v: BooleanValue | undefined) { this._s(':fDynamic', v); }
    /** fCollapsed. Serialized as `:fCollapsed` */
    public get fCollapsed(): BooleanValue | undefined { return this._g(':fCollapsed'); }
    public set fCollapsed(v: BooleanValue | undefined) { this._s(':fCollapsed', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}

export function initOffice2019ExcelDynamicArrayNamespace() {
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    DynamicArrayProperties._C = {
        'xda:extLst': ExtensionList,
    };
    DynamicArrayProperties._D = {
        ':fDynamic': new OxmlAttr(':fDynamic', OxmlType.BooleanValue),
        ':fCollapsed': new OxmlAttr(':fCollapsed', OxmlType.BooleanValue),
    };
    return {
        prefix: 'xda',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray',
    };
}
