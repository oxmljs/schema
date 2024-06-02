import { ColorsDefinition } from '../schema/Drawing/Diagrams';
import { OxmlPart } from '../framework/OxmlPart';
export declare class DiagramColorsPart extends OxmlPart<ColorsDefinition> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ColorsDefinition;
    get colors(): ColorsDefinition | undefined;
    set colors(root: ColorsDefinition | undefined);
}
