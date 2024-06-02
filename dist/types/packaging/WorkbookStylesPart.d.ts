import { Stylesheet } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WorkbookStylesPart extends OxmlPart<Stylesheet> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Stylesheet;
    get styles(): Stylesheet | undefined;
    set styles(root: Stylesheet | undefined);
}
