import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';


/** VML Diagram Text. Serialized as `pvml:textdata` */
export class TextData extends OxmlLeafElement {

    public static override _Q = 'pvml:textdata';
    public static override _A = [':id',];
    /** Text Reference. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Ink Annotation Flag. Serialized as `pvml:iscomment` */
export class InkAnnotationFlag extends OxmlLeafElement {

    public static override _Q = 'pvml:iscomment';

}

export function initVmlPresentationNamespace() {
    TextData._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    return {
        prefix: 'pvml',
        xmlns: 'urn:schemas-microsoft-com:office:powerpoint',
    };
}
