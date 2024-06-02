import { StyleDefinition } from '../schema/Drawing/Diagrams';
import { OxmlPart } from '../framework/OxmlPart';
export declare class DiagramStylePart extends OxmlPart<StyleDefinition> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof StyleDefinition;
    get quickStyle(): StyleDefinition | undefined;
    set quickStyle(root: StyleDefinition | undefined);
}
