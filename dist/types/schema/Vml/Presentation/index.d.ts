import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
/** VML Diagram Text. Serialized as `pvml:textdata` */
export declare class TextData extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Text Reference. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Ink Annotation Flag. Serialized as `pvml:iscomment` */
export declare class InkAnnotationFlag extends OxmlLeafElement {
    static _Q: string;
}
export declare function initVmlPresentationNamespace(): {
    prefix: string;
    xmlns: string;
};
