import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { Extension as XExtension } from '../../../Spreadsheet';
/** Defines the ExtensionList Class. Serialized as `xltc2:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the CommentHyperlink Class. Serialized as `xltc2:hyperlink` */
export declare class CommentHyperlink extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** startIndex. Serialized as `:startIndex` */
    get startIndex(): UInt32Value | undefined;
    set startIndex(v: UInt32Value | undefined);
    /** length. Serialized as `:length` */
    get length(): UInt32Value | undefined;
    set length(v: UInt32Value | undefined);
    /** url. Serialized as `:url` */
    get url(): StringValue | undefined;
    set url(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the XsdunsignedInt Class. Serialized as `xltc2:checksum` */
export declare class XsdunsignedInt extends OxmlLeafTextElement {
    static _Q: string;
}
export declare function initOffice2021ExcelThreadedComments2Namespace(): {
    prefix: string;
    xmlns: string;
};
