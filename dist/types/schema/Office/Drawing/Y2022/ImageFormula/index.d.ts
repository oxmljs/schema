import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../../framework/types/StringValue';
/** Defines the ImageFormula Class. Serialized as `aif:imageFormula` */
export declare class ImageFormula extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** formula. Serialized as `:formula` */
    get formula(): StringValue | undefined;
    set formula(v: StringValue | undefined);
}
export declare function initOfficeDrawingY2022ImageFormulaNamespace(): {
    prefix: string;
    xmlns: string;
};
