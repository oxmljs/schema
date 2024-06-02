import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
/** Defines the PictureAttributionSourceURL Class. Serialized as `a1611:picAttrSrcUrl` */
export declare class PictureAttributionSourceURL extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
export declare function initOffice2019Drawinga1611Namespace(): {
    prefix: string;
    xmlns: string;
};
