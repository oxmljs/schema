import { ExternalLink } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class ExternalWorkbookPart extends OxmlPart<ExternalLink> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ExternalLink;
    get externalReference(): ExternalLink | undefined;
    set externalReference(root: ExternalLink | undefined);
}
