import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../../framework/OxmlType';
import { StringValue } from '../../../../../framework/types/StringValue';


/** Defines the ImageFormula Class. Serialized as `aif:imageFormula` */
export class ImageFormula extends OxmlLeafElement {

    public static override _Q = 'aif:imageFormula';
    public static override _A = [':formula',];
    /** formula. Serialized as `:formula` */
    public get formula(): StringValue | undefined { return this._g(':formula'); }
    public set formula(v: StringValue | undefined) { this._s(':formula', v); }

}

export function initOfficeDrawingY2022ImageFormulaNamespace() {
    ImageFormula._D = {
        ':formula': new OxmlAttr(':formula', OxmlType.StringValue),
    };
    return {
        prefix: 'aif',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2022/imageformula',
    };
}
