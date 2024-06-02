import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';


/** Defines the OpenXmlIdentifierElement Class. */
export abstract class OpenXmlIdentifierElement extends OxmlLeafElement {

    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Defines the ColIdIdentifier Class. Serialized as `a16:colId` */
export class ColIdIdentifier extends OpenXmlIdentifierElement {

    public static override _Q = 'a16:colId';

}
/** Defines the RowIdIdentifier Class. Serialized as `a16:rowId` */
export class RowIdIdentifier extends OpenXmlIdentifierElement {

    public static override _Q = 'a16:rowId';

}
/** Defines the ConnectableReferences Class. Serialized as `a16:cxnDERefs` */
export class ConnectableReferences extends OxmlLeafElement {

    public static override _Q = 'a16:cxnDERefs';
    public static override _A = [':st',':end',];
    /** st. Serialized as `:st` */
    public get st(): StringValue | undefined { return this._g(':st'); }
    public set st(v: StringValue | undefined) { this._s(':st', v); }
    /** end. Serialized as `:end` */
    public get end(): StringValue | undefined { return this._g(':end'); }
    public set end(v: StringValue | undefined) { this._s(':end', v); }

}
/** Defines the PredecessorDrawingElementReference Class. Serialized as `a16:predDERef` */
export class PredecessorDrawingElementReference extends OxmlLeafElement {

    public static override _Q = 'a16:predDERef';
    public static override _A = [':pred',];
    /** pred. Serialized as `:pred` */
    public get pred(): StringValue | undefined { return this._g(':pred'); }
    public set pred(v: StringValue | undefined) { this._s(':pred', v); }

}
/** Defines the CreationId Class. Serialized as `a16:creationId` */
export class CreationId extends OxmlLeafElement {

    public static override _Q = 'a16:creationId';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}

export function initOffice2016DrawingNamespace() {
    OpenXmlIdentifierElement._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    ConnectableReferences._D = {
        ':st': new OxmlAttr(':st', OxmlType.StringValue),
        ':end': new OxmlAttr(':end', OxmlType.StringValue),
    };
    PredecessorDrawingElementReference._D = {
        ':pred': new OxmlAttr(':pred', OxmlType.StringValue),
    };
    CreationId._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    return {
        prefix: 'a16',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2014/main',
    };
}
