import { DataModelRoot } from '../schema/Drawing/Diagrams';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';
import { SlidePart } from './SlidePart';
import { WorksheetPart } from './WorksheetPart';
export declare class DiagramDataPart extends OxmlPart<DataModelRoot> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof DataModelRoot;
    get data(): DataModelRoot | undefined;
    set data(root: DataModelRoot | undefined);
    get imageParts(): ImagePart[];
    get slideParts(): SlidePart[];
    get worksheetParts(): WorksheetPart[];
}
