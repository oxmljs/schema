import { LayoutDefinition } from '../schema/Drawing/Diagrams';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';
export declare class DiagramLayoutDefinitionPart extends OxmlPart<LayoutDefinition> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof LayoutDefinition;
    get layout(): LayoutDefinition | undefined;
    set layout(root: LayoutDefinition | undefined);
    get imageParts(): ImagePart[];
}
