import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';


/** Defines the WebVideoProperty Class. Serialized as `wp15:webVideoPr` */
export class WebVideoProperty extends OxmlLeafElement {

    public static override _Q = 'wp15:webVideoPr';
    public static override _A = [':embeddedHtml',':h',':w',];
    /** embeddedHtml. Serialized as `:embeddedHtml` */
    public get embeddedHtml(): StringValue | undefined { return this._g(':embeddedHtml'); }
    public set embeddedHtml(v: StringValue | undefined) { this._s(':embeddedHtml', v); }
    /** h. Serialized as `:h` */
    public get height(): UInt32Value | undefined { return this._g(':h'); }
    public set height(v: UInt32Value | undefined) { this._s(':h', v); }
    /** w. Serialized as `:w` */
    public get width(): UInt32Value | undefined { return this._g(':w'); }
    public set width(v: UInt32Value | undefined) { this._s(':w', v); }

}

export function initOffice2013WordDrawingNamespace() {
    WebVideoProperty._D = {
        ':embeddedHtml': new OxmlAttr(':embeddedHtml', OxmlType.StringValue),
        ':h': new OxmlAttr(':h', OxmlType.UInt32Value),
        ':w': new OxmlAttr(':w', OxmlType.UInt32Value),
    };
    return {
        prefix: 'wp15',
        xmlns: 'http://schemas.microsoft.com/office/word/2012/wordprocessingDrawing',
    };
}
