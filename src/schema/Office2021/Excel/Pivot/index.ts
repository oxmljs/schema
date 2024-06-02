import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { ByteValue } from '../../../../framework/types/ByteValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';


/** Defines the DataFieldFutureData Class. Serialized as `xxpim:dataFieldFutureData` */
export class DataFieldFutureData extends OxmlLeafElement {

    public static override _Q = 'xxpim:dataFieldFutureData';
    public static override _A = [':version',':sourceField',];
    /** version. Serialized as `:version` */
    public get version(): ByteValue | undefined { return this._g(':version'); }
    public set version(v: ByteValue | undefined) { this._s(':version', v); }
    /** sourceField. Serialized as `:sourceField` */
    public get sourceField(): UInt32Value | undefined { return this._g(':sourceField'); }
    public set sourceField(v: UInt32Value | undefined) { this._s(':sourceField', v); }

}
/** Defines the Ignorable Class. Serialized as `xxpim:ignorableAfterVersion` */
export class Ignorable extends OxmlLeafElement {

    public static override _Q = 'xxpim:ignorableAfterVersion';
    public static override _A = [':version',];
    /** version. Serialized as `:version` */
    public get version(): ByteValue | undefined { return this._g(':version'); }
    public set version(v: ByteValue | undefined) { this._s(':version', v); }

}
/** Defines the Xsdboolean Class. Serialized as `xxpim:implicitMeasureSupport` */
export class Xsdboolean extends OxmlLeafTextElement {

    public static override _Q = 'xxpim:implicitMeasureSupport';

}

export function initOffice2021ExcelPivotNamespace() {
    DataFieldFutureData._D = {
        ':version': new OxmlAttr(':version', OxmlType.ByteValue),
        ':sourceField': new OxmlAttr(':sourceField', OxmlType.UInt32Value),
    };
    Ignorable._D = {
        ':version': new OxmlAttr(':version', OxmlType.ByteValue),
    };
    return {
        prefix: 'xxpim',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2020/pivotNov2020',
    };
}
