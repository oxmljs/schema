import { Users } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class WorkbookUserDataPart extends OxmlPart<Users> {

    public static override _N = 'WorkbookUserDataPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/usernames';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml';
    public static _P = 'revisions';
    public static _T = 'userNames';
    public static override _E = Users;

    public get userNames() { return this._r; }
    public set userNames(root: Users | undefined) { this._r = root; }


}
