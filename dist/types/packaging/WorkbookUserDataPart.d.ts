import { Users } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WorkbookUserDataPart extends OxmlPart<Users> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Users;
    get userNames(): Users | undefined;
    set userNames(root: Users | undefined);
}
