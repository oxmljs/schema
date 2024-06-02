import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
/** Legacy Drawing Object. Serialized as `comp:legacyDrawing` */
export declare class LegacyDrawing extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Shape ID. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
}
export declare function initDrawingLegacyCompatibilityNamespace(): {
    prefix: string;
    xmlns: string;
};
