import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';


/** Defines the List Class. Serialized as `x12ac:list` */
export class List extends OxmlLeafTextElement {

    public static override _Q = 'x12ac:list';

}

export function initOffice2010ExcelAcNamespace() {
    return {
        prefix: 'x12ac',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2011/1/ac',
    };
}
