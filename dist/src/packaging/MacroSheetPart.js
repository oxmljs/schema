import { Macrosheet } from "../schema/Office/Excel";
import { OxmlPart } from "../framework/OxmlPart";
class MacroSheetPart extends OxmlPart {
  static _N = "MacroSheetPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet";
  static _C = "application/vnd.ms-excel.macrosheet+xml";
  static _P = "macrosheets";
  static _T = "sheet";
  static _E = Macrosheet;
  get sheet() {
    return this._r;
  }
  set sheet(root) {
    this._r = root;
  }
  get spreadsheetPrinterSettingsParts() {
    return this._m("SpreadsheetPrinterSettingsPart");
  }
  get drawingsPart() {
    return this._f("DrawingsPart");
  }
  get vmlDrawingParts() {
    return this._m("VmlDrawingPart");
  }
  get worksheetCommentsPart() {
    return this._f("WorksheetCommentsPart");
  }
  get customPropertyParts() {
    return this._m("CustomPropertyPart");
  }
  get embeddedObjectParts() {
    return this._m("EmbeddedObjectPart");
  }
  get embeddedPackageParts() {
    return this._m("EmbeddedPackagePart");
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  MacroSheetPart
};
