import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { Extension as XExtension } from '../../../Spreadsheet';


/** Defines the ExtensionList Class. Serialized as `xltc2:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'xltc2:extLst';

}
/** Defines the CommentHyperlink Class. Serialized as `xltc2:hyperlink` */
export class CommentHyperlink extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'xltc2:hyperlink';
    public static override _A = [':startIndex',':length',':url',];
    /** startIndex. Serialized as `:startIndex` */
    public get startIndex(): UInt32Value | undefined { return this._g(':startIndex'); }
    public set startIndex(v: UInt32Value | undefined) { this._s(':startIndex', v); }
    /** length. Serialized as `:length` */
    public get length(): UInt32Value | undefined { return this._g(':length'); }
    public set length(v: UInt32Value | undefined) { this._s(':length', v); }
    /** url. Serialized as `:url` */
    public get url(): StringValue | undefined { return this._g(':url'); }
    public set url(v: StringValue | undefined) { this._s(':url', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the XsdunsignedInt Class. Serialized as `xltc2:checksum` */
export class XsdunsignedInt extends OxmlLeafTextElement {

    public static override _Q = 'xltc2:checksum';

}

export function initOffice2021ExcelThreadedComments2Namespace() {
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    CommentHyperlink._C = {
        'xltc2:extLst': ExtensionList,
    };
    CommentHyperlink._D = {
        ':startIndex': new OxmlAttr(':startIndex', OxmlType.UInt32Value),
        ':length': new OxmlAttr(':length', OxmlType.UInt32Value),
        ':url': new OxmlAttr(':url', OxmlType.StringValue),
    };
    return {
        prefix: 'xltc2',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2020/threadedcomments2',
    };
}
