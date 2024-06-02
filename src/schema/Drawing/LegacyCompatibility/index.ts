import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';


/** Legacy Drawing Object. Serialized as `comp:legacyDrawing` */
export class LegacyDrawing extends OxmlLeafElement {

    public static override _Q = 'comp:legacyDrawing';
    public static override _A = [':spid',];
    /** Shape ID. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }

}

export function initDrawingLegacyCompatibilityNamespace() {
    LegacyDrawing._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
    };
    return {
        prefix: 'comp',
        xmlns: 'http://schemas.openxmlformats.org/drawingml/2006/compatibility',
    };
}
