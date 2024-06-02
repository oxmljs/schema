import { Stylesheet } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class WorkbookStylesPart extends OxmlPart<Stylesheet> {

    public static override _N = 'WorkbookStylesPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml';
    public static _P = '.';
    public static _T = 'styles';
    public static override _E = Stylesheet;

    public get styles() { return this._r; }
    public set styles(root: Stylesheet | undefined) { this._r = root; }


}
