import { OxmlType } from "./OxmlType";
/**
 * Represents an Open XML attribute.
 */
export declare class OxmlAttr {
    readonly q: string;
    readonly t: OxmlType;
    readonly e?: readonly string[] | undefined;
    /**
     * @param q Attribute's qualified name (like `w:pPr`)
     * @param t Attribute's data type
     * @param e Attribute's enum values
     */
    constructor(q: string, t: OxmlType, e?: readonly string[] | undefined);
}
