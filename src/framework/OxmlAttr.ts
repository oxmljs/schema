import { OxmlType } from "./OxmlType";

/**
 * Represents an Open XML attribute.
 */
export class OxmlAttr {

    /**
     * @param q Attribute's qualified name (like `w:pPr`)
     * @param t Attribute's data type
     * @param e Attribute's enum values
     */
    constructor(public readonly q: string, public readonly t: OxmlType, public readonly e?: readonly string[]) { }

}
