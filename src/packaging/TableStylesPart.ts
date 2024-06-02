import { TableStyleList } from '../schema/Drawing';
import { OxmlPart } from '../framework/OxmlPart';

export class TableStylesPart extends OxmlPart<TableStyleList> {

    public static override _N = 'TableStylesPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles';
    public static override _C = 'application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml';
    public static _P = '.';
    public static _T = 'tableStyles';
    public static override _E = TableStyleList;

    public get tableStyles() { return this._r; }
    public set tableStyles(root: TableStyleList | undefined) { this._r = root; }


}
