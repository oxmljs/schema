import { PersonList } from "../schema/Office2019/Excel/ThreadedComments";
import { OxmlPart } from "../framework/OxmlPart";
class WorkbookPersonPart extends OxmlPart {
  static _N = "WorkbookPersonPart";
  static _R = "http://schemas.microsoft.com/office/2017/10/relationships/person";
  static _C = "application/vnd.ms-excel.person+xml";
  static _P = "persons";
  static _T = "person";
  static _E = PersonList;
  get person() {
    return this._r;
  }
  set person(root) {
    this._r = root;
  }
}
export {
  WorkbookPersonPart
};
