import { Tasks } from "../schema/Office2021/DocumentTasks";
import { OxmlPart } from "../framework/OxmlPart";
class DocumentTasksPart extends OxmlPart {
  static _N = "DocumentTasksPart";
  static _R = "http://schemas.microsoft.com/office/2019/05/relationships/documenttasks";
  static _C = "application/vnd.ms-office.documenttasks+xml";
  static _P = ".";
  static _T = "tasks";
  static _E = Tasks;
  get tasks() {
    return this._r;
  }
  set tasks(root) {
    this._r = root;
  }
}
export {
  DocumentTasksPart
};
