import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
/** Defines the AbsolutePath Class. Serialized as `x15ac:absPath` */
export declare class AbsolutePath extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** url. Serialized as `:url` */
    get url(): StringValue | undefined;
    set url(v: StringValue | undefined);
}
export declare function initOffice2013ExcelAcNamespace(): {
    prefix: string;
    xmlns: string;
};
