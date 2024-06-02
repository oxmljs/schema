import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';


/** Defines the CompatibilityShape Class. Serialized as `com14:compatSp` */
export class CompatibilityShape extends OxmlLeafElement {

    public static override _Q = 'com14:compatSp';
    public static override _A = [':spid',];
    /** spid. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }

}

export function initOffice2010DrawingLegacyCompatibilityNamespace() {
    CompatibilityShape._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
    };
    return {
        prefix: 'com14',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2010/compatibility',
    };
}
