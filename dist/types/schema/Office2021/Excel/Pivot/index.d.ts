import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { ByteValue } from '../../../../framework/types/ByteValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
/** Defines the DataFieldFutureData Class. Serialized as `xxpim:dataFieldFutureData` */
export declare class DataFieldFutureData extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** version. Serialized as `:version` */
    get version(): ByteValue | undefined;
    set version(v: ByteValue | undefined);
    /** sourceField. Serialized as `:sourceField` */
    get sourceField(): UInt32Value | undefined;
    set sourceField(v: UInt32Value | undefined);
}
/** Defines the Ignorable Class. Serialized as `xxpim:ignorableAfterVersion` */
export declare class Ignorable extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** version. Serialized as `:version` */
    get version(): ByteValue | undefined;
    set version(v: ByteValue | undefined);
}
/** Defines the Xsdboolean Class. Serialized as `xxpim:implicitMeasureSupport` */
export declare class Xsdboolean extends OxmlLeafTextElement {
    static _Q: string;
}
export declare function initOffice2021ExcelPivotNamespace(): {
    prefix: string;
    xmlns: string;
};
