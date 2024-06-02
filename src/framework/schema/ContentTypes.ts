import { OxmlAttr } from '../OxmlAttr';
import { OxmlLeafElement } from '../OxmlLeafElement';
import { OxmlPartRootElement } from '../OxmlPartRootElement';
import { OxmlType } from '../OxmlType';
import { StringValue } from '../types/StringValue';


export class Default extends OxmlLeafElement {

    public static override _Q = 'Default';
    public static override _A = ['Extension', 'ContentType'];

    public static override _D = {
        'Extension': new OxmlAttr('Extension', OxmlType.StringValue),
        'ContentType': new OxmlAttr('ContentType', OxmlType.StringValue),
    };

    public get extension(): StringValue | undefined { return this._g('Extension'); }
    public set extension(v: StringValue | undefined) { this._s('Extension', v); }

    public get contentType(): StringValue | undefined { return this._g('ContentType'); }
    public set contentType(v: StringValue | undefined) { this._s('ContentType', v); }

}


export class Override extends OxmlLeafElement {

    public static override _Q = 'Override';
    public static override _A = ['PartName', 'ContentType'];

    public static override _D = {
        'PartName': new OxmlAttr('PartName', OxmlType.StringValue),
        'ContentType': new OxmlAttr('ContentType', OxmlType.StringValue),
    };

    public get partName(): StringValue | undefined { return this._g('PartName'); }
    public set partName(v: StringValue | undefined) { this._s('PartName', v); }

    public get contentType(): StringValue | undefined { return this._g('ContentType'); }
    public set contentType(v: StringValue | undefined) { this._s('ContentType', v); }

}

export class Types extends OxmlPartRootElement {

    public static override _Q = 'Types';
    public static override _C = {
        'Default': Default,
        'Override': Override,
    };

}
