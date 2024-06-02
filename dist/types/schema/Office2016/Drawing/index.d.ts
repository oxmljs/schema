import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
/** Defines the OpenXmlIdentifierElement Class. */
export declare abstract class OpenXmlIdentifierElement extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the ColIdIdentifier Class. Serialized as `a16:colId` */
export declare class ColIdIdentifier extends OpenXmlIdentifierElement {
    static _Q: string;
}
/** Defines the RowIdIdentifier Class. Serialized as `a16:rowId` */
export declare class RowIdIdentifier extends OpenXmlIdentifierElement {
    static _Q: string;
}
/** Defines the ConnectableReferences Class. Serialized as `a16:cxnDERefs` */
export declare class ConnectableReferences extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** st. Serialized as `:st` */
    get st(): StringValue | undefined;
    set st(v: StringValue | undefined);
    /** end. Serialized as `:end` */
    get end(): StringValue | undefined;
    set end(v: StringValue | undefined);
}
/** Defines the PredecessorDrawingElementReference Class. Serialized as `a16:predDERef` */
export declare class PredecessorDrawingElementReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** pred. Serialized as `:pred` */
    get pred(): StringValue | undefined;
    set pred(v: StringValue | undefined);
}
/** Defines the CreationId Class. Serialized as `a16:creationId` */
export declare class CreationId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
export declare function initOffice2016DrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
