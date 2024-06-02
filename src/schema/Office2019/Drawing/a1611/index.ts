import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';


/** Defines the PictureAttributionSourceURL Class. Serialized as `a1611:picAttrSrcUrl` */
export class PictureAttributionSourceURL extends OxmlLeafElement {

    public static override _Q = 'a1611:picAttrSrcUrl';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}

export function initOffice2019Drawinga1611Namespace() {
    PictureAttributionSourceURL._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    return {
        prefix: 'a1611',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2016/11/main',
    };
}
