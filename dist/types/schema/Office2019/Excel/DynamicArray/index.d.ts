import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Extension as XExtension } from '../../../Spreadsheet';
/** Defines the ExtensionList Class. Serialized as `xda:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the DynamicArrayProperties Class. Serialized as `xda:dynamicArrayProperties` */
export declare class DynamicArrayProperties extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** fDynamic. Serialized as `:fDynamic` */
    get fDynamic(): BooleanValue | undefined;
    set fDynamic(v: BooleanValue | undefined);
    /** fCollapsed. Serialized as `:fCollapsed` */
    get fCollapsed(): BooleanValue | undefined;
    set fCollapsed(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
export declare function initOffice2019ExcelDynamicArrayNamespace(): {
    prefix: string;
    xmlns: string;
};
