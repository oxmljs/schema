import { ExternalLink } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class ExternalWorkbookPart extends OxmlPart<ExternalLink> {

    public static override _N = 'ExternalWorkbookPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml';
    public static _P = 'externalReferences';
    public static _T = 'externalReference';
    public static override _E = ExternalLink;

    public get externalReference() { return this._r; }
    public set externalReference(root: ExternalLink | undefined) { this._r = root; }


}
