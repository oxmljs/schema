import { OxmlAttr } from "../OxmlAttr";
import { OxmlLeafElement } from "../OxmlLeafElement";
import { OxmlPartRootElement } from "../OxmlPartRootElement";
import { OxmlType } from "../OxmlType";
var RelationshipTypeValues = /* @__PURE__ */ ((RelationshipTypeValues2) => {
  RelationshipTypeValues2["OfficeDocument"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";
  RelationshipTypeValues2["CoreProperties"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
  RelationshipTypeValues2["ExtendedProperties"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
  RelationshipTypeValues2["CustomProperties"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties";
  RelationshipTypeValues2["Thumbnail"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail";
  RelationshipTypeValues2["Styles"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
  RelationshipTypeValues2["FontTable"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable";
  RelationshipTypeValues2["WebSettings"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings";
  RelationshipTypeValues2["Settings"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings";
  RelationshipTypeValues2["Theme"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
  RelationshipTypeValues2["Chart"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart";
  RelationshipTypeValues2["Image"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
  RelationshipTypeValues2["Hyperlink"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink";
  RelationshipTypeValues2["Comments"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
  RelationshipTypeValues2["VMLDrawing"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing";
  RelationshipTypeValues2["EmbeddedPackage"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/embeddedPackage";
  RelationshipTypeValues2["Slide"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide";
  RelationshipTypeValues2["SlideLayout"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout";
  RelationshipTypeValues2["SlideMaster"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster";
  RelationshipTypeValues2["NotesSlide"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide";
  RelationshipTypeValues2["NotesMaster"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster";
  RelationshipTypeValues2["HandoutMaster"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/handoutMaster";
  RelationshipTypeValues2["SlideShow"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps";
  RelationshipTypeValues2["Workbook"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/workbook";
  RelationshipTypeValues2["Worksheet"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet";
  RelationshipTypeValues2["SharedStringTable"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
  RelationshipTypeValues2["CalculationChain"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain";
  RelationshipTypeValues2["PivotTable"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotTable";
  return RelationshipTypeValues2;
})(RelationshipTypeValues || {});
var RelationshipTargetMode = /* @__PURE__ */ ((RelationshipTargetMode2) => {
  RelationshipTargetMode2["Internal"] = "Internal";
  RelationshipTargetMode2["External"] = "External";
  return RelationshipTargetMode2;
})(RelationshipTargetMode || {});
const RelationshipTargetModeArray = ["Internal" /* Internal */, "External" /* External */];
class Relationship extends OxmlLeafElement {
  static _Q = "Relationship";
  static _A = ["Id", "Type", "Target", "TargetMode"];
  static _D = {
    "Id": new OxmlAttr("Id", OxmlType.StringValue),
    "Type": new OxmlAttr("Type", OxmlType.StringValue),
    "Target": new OxmlAttr("Target", OxmlType.StringValue),
    "TargetMode": new OxmlAttr("TargetMode", OxmlType.EnumValue, RelationshipTargetModeArray)
  };
  get id() {
    return this._g("Id");
  }
  set id(v) {
    this._s("Id", v);
  }
  get type() {
    return this._g("Type");
  }
  set type(v) {
    this._s("Type", v);
  }
  get target() {
    return this._g("Target");
  }
  set target(v) {
    this._s("Target", v);
  }
  get targetMode() {
    return this._g("TargetMode");
  }
  set targetMode(v) {
    this._s("TargetMode", v);
  }
}
class Relationships extends OxmlPartRootElement {
  static _Q = "Relationships";
  static _C = {
    "Relationship": Relationship
  };
}
export {
  Relationship,
  RelationshipTargetMode,
  RelationshipTargetModeArray,
  RelationshipTypeValues,
  Relationships
};
