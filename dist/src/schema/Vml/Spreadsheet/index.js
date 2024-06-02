import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
var ClipboardFormatValues = /* @__PURE__ */ ((ClipboardFormatValues2) => {
  ClipboardFormatValues2["PictureOld"] = "PictOld";
  ClipboardFormatValues2["Picture"] = "Pict";
  ClipboardFormatValues2["Bitmap"] = "Bitmap";
  ClipboardFormatValues2["PicturePrint"] = "PictPrint";
  ClipboardFormatValues2["PictureScreen"] = "PictScreen";
  return ClipboardFormatValues2;
})(ClipboardFormatValues || {});
const ClipboardFormatValuesArray = [
  "PictOld" /* PictureOld */,
  "Pict" /* Picture */,
  "Bitmap" /* Bitmap */,
  "PictPrint" /* PicturePrint */,
  "PictScreen" /* PictureScreen */
];
var ObjectValues = /* @__PURE__ */ ((ObjectValues2) => {
  ObjectValues2["Button"] = "Button";
  ObjectValues2["Checkbox"] = "Checkbox";
  ObjectValues2["Dialog"] = "Dialog";
  ObjectValues2["Drop"] = "Drop";
  ObjectValues2["Edit"] = "Edit";
  ObjectValues2["GroupBox"] = "GBox";
  ObjectValues2["Label"] = "Label";
  ObjectValues2["AuditingLine"] = "LineA";
  ObjectValues2["List"] = "List";
  ObjectValues2["Movie"] = "Movie";
  ObjectValues2["Note"] = "Note";
  ObjectValues2["Picture"] = "Pict";
  ObjectValues2["Radio"] = "Radio";
  ObjectValues2["AuditingRectangle"] = "RectA";
  ObjectValues2["Scroll"] = "Scroll";
  ObjectValues2["Spin"] = "Spin";
  ObjectValues2["Shape"] = "Shape";
  ObjectValues2["Group"] = "Group";
  ObjectValues2["Rectangle"] = "Rect";
  return ObjectValues2;
})(ObjectValues || {});
const ObjectValuesArray = [
  "Button" /* Button */,
  "Checkbox" /* Checkbox */,
  "Dialog" /* Dialog */,
  "Drop" /* Drop */,
  "Edit" /* Edit */,
  "GBox" /* GroupBox */,
  "Label" /* Label */,
  "LineA" /* AuditingLine */,
  "List" /* List */,
  "Movie" /* Movie */,
  "Note" /* Note */,
  "Pict" /* Picture */,
  "Radio" /* Radio */,
  "RectA" /* AuditingRectangle */,
  "Scroll" /* Scroll */,
  "Spin" /* Spin */,
  "Shape" /* Shape */,
  "Group" /* Group */,
  "Rect" /* Rectangle */
];
var BooleanEntryWithBlankValues = /* @__PURE__ */ ((BooleanEntryWithBlankValues2) => {
  BooleanEntryWithBlankValues2["True"] = "True";
  BooleanEntryWithBlankValues2["T"] = "t";
  BooleanEntryWithBlankValues2["False"] = "False";
  BooleanEntryWithBlankValues2["F"] = "f";
  BooleanEntryWithBlankValues2["Empty"] = "";
  return BooleanEntryWithBlankValues2;
})(BooleanEntryWithBlankValues || {});
const BooleanEntryWithBlankValuesArray = [
  "True" /* True */,
  "t" /* T */,
  "False" /* False */,
  "f" /* F */,
  "" /* Empty */
];
class ScriptLocation extends OxmlLeafTextElement {
  static _Q = "xvml:ScriptLocation";
}
class ScriptLanguage extends OxmlLeafTextElement {
  static _Q = "xvml:ScriptLanguage";
}
class ClipboardFormat extends OxmlLeafTextElement {
  static _Q = "xvml:CF";
}
class ScrollBarWidth extends OxmlLeafTextElement {
  static _Q = "xvml:Dx";
}
class ScrollBarPageIncrement extends OxmlLeafTextElement {
  static _Q = "xvml:Page";
}
class ScrollBarIncrement extends OxmlLeafTextElement {
  static _Q = "xvml:Inc";
}
class ScrollBarMax extends OxmlLeafTextElement {
  static _Q = "xvml:Max";
}
class ScrollBarMin extends OxmlLeafTextElement {
  static _Q = "xvml:Min";
}
class ScrollBarPosition extends OxmlLeafTextElement {
  static _Q = "xvml:Val";
}
class Checked extends OxmlLeafTextElement {
  static _Q = "xvml:Checked";
}
class DropLines extends OxmlLeafTextElement {
  static _Q = "xvml:DropLines";
}
class SelectionEntry extends OxmlLeafTextElement {
  static _Q = "xvml:Sel";
}
class MinDropDownWidth extends OxmlLeafTextElement {
  static _Q = "xvml:WidthMin";
}
class InputValidationType extends OxmlLeafTextElement {
  static _Q = "xvml:VTEdit";
}
class CommentColumnTarget extends OxmlLeafTextElement {
  static _Q = "xvml:Column";
}
class CommentRowTarget extends OxmlLeafTextElement {
  static _Q = "xvml:Row";
}
class AcceleratorSecondary extends OxmlLeafTextElement {
  static _Q = "xvml:Accel2";
}
class AcceleratorPrimary extends OxmlLeafTextElement {
  static _Q = "xvml:Accel";
}
class FormulaMacro extends OxmlLeafTextElement {
  static _Q = "xvml:FmlaMacro";
}
class FormulaTextBox extends OxmlLeafTextElement {
  static _Q = "xvml:FmlaTxbx";
}
class ScriptExtended extends OxmlLeafTextElement {
  static _Q = "xvml:ScriptExtended";
}
class ScriptText extends OxmlLeafTextElement {
  static _Q = "xvml:ScriptText";
}
class FormulaGroup extends OxmlLeafTextElement {
  static _Q = "xvml:FmlaGroup";
}
class FormulaPicture extends OxmlLeafTextElement {
  static _Q = "xvml:FmlaPict";
}
class FormulaLink extends OxmlLeafTextElement {
  static _Q = "xvml:FmlaLink";
}
class DropStyle extends OxmlLeafTextElement {
  static _Q = "xvml:DropStyle";
}
class ListItem extends OxmlLeafTextElement {
  static _Q = "xvml:ListItem";
}
class ListBoxCallbackType extends OxmlLeafTextElement {
  static _Q = "xvml:LCT";
}
class MultiSelections extends OxmlLeafTextElement {
  static _Q = "xvml:MultiSel";
}
class SelectionType extends OxmlLeafTextElement {
  static _Q = "xvml:SelType";
}
class FormulaRange extends OxmlLeafTextElement {
  static _Q = "xvml:FmlaRange";
}
class VerticalTextAlignment extends OxmlLeafTextElement {
  static _Q = "xvml:TextVAlign";
}
class HorizontalTextAlignment extends OxmlLeafTextElement {
  static _Q = "xvml:TextHAlign";
}
class Anchor extends OxmlLeafTextElement {
  static _Q = "xvml:Anchor";
}
class UIObject extends OxmlLeafTextElement {
  static _Q = "xvml:UIObj";
}
class DdeObject extends OxmlLeafTextElement {
  static _Q = "xvml:DDE";
}
class AutoScaleFont extends OxmlLeafTextElement {
  static _Q = "xvml:AutoScale";
}
class RecalculateAlways extends OxmlLeafTextElement {
  static _Q = "xvml:RecalcAlways";
}
class CameraObject extends OxmlLeafTextElement {
  static _Q = "xvml:Camera";
}
class MapOcxControl extends OxmlLeafTextElement {
  static _Q = "xvml:MapOCX";
}
class HorizontalScrollBar extends OxmlLeafTextElement {
  static _Q = "xvml:Horiz";
}
class FirstButton extends OxmlLeafTextElement {
  static _Q = "xvml:FirstButton";
}
class Disable3D extends OxmlLeafTextElement {
  static _Q = "xvml:NoThreeD";
}
class Colored extends OxmlLeafTextElement {
  static _Q = "xvml:Colored";
}
class Disable3DForListBoxAndDropDown extends OxmlLeafTextElement {
  static _Q = "xvml:NoThreeD2";
}
class ValidIds extends OxmlLeafTextElement {
  static _Q = "xvml:ValidIds";
}
class VerticalScrollBar extends OxmlLeafTextElement {
  static _Q = "xvml:VScroll";
}
class MultiLine extends OxmlLeafTextElement {
  static _Q = "xvml:MultiLine";
}
class ColumnHidden extends OxmlLeafTextElement {
  static _Q = "xvml:ColHidden";
}
class RowHidden extends OxmlLeafTextElement {
  static _Q = "xvml:RowHidden";
}
class Visible extends OxmlLeafTextElement {
  static _Q = "xvml:Visible";
}
class DismissButton extends OxmlLeafTextElement {
  static _Q = "xvml:Dismiss";
}
class CancelButton extends OxmlLeafTextElement {
  static _Q = "xvml:Cancel";
}
class HelpButton extends OxmlLeafTextElement {
  static _Q = "xvml:Help";
}
class DefaultButton extends OxmlLeafTextElement {
  static _Q = "xvml:Default";
}
class SecretEdit extends OxmlLeafTextElement {
  static _Q = "xvml:SecretEdit";
}
class JustifyLastLine extends OxmlLeafTextElement {
  static _Q = "xvml:JustLastX";
}
class LockText extends OxmlLeafTextElement {
  static _Q = "xvml:LockText";
}
class AutoSizePicture extends OxmlLeafTextElement {
  static _Q = "xvml:AutoPict";
}
class AutoLine extends OxmlLeafTextElement {
  static _Q = "xvml:AutoLine";
}
class AutoFill extends OxmlLeafTextElement {
  static _Q = "xvml:AutoFill";
}
class Disabled extends OxmlLeafTextElement {
  static _Q = "xvml:Disabled";
}
class PrintObject extends OxmlLeafTextElement {
  static _Q = "xvml:PrintObject";
}
class DefaultSize extends OxmlLeafTextElement {
  static _Q = "xvml:DefaultSize";
}
class Locked extends OxmlLeafTextElement {
  static _Q = "xvml:Locked";
}
class ResizeWithCells extends OxmlLeafTextElement {
  static _Q = "xvml:SizeWithCells";
}
class MoveWithCells extends OxmlLeafTextElement {
  static _Q = "xvml:MoveWithCells";
}
class ClientData extends OxmlCompositeElement {
  static _Q = "xvml:ClientData";
  static _A = [":ObjectType"];
  /** Object type. Serialized as `:ObjectType` */
  get objectType() {
    return this._g(":ObjectType");
  }
  set objectType(v) {
    this._s(":ObjectType", v);
  }
}
function initVmlSpreadsheetNamespace() {
  ClientData._C = {
    "xvml:MoveWithCells": MoveWithCells,
    "xvml:SizeWithCells": ResizeWithCells,
    "xvml:Anchor": Anchor,
    "xvml:Locked": Locked,
    "xvml:DefaultSize": DefaultSize,
    "xvml:PrintObject": PrintObject,
    "xvml:Disabled": Disabled,
    "xvml:AutoFill": AutoFill,
    "xvml:AutoLine": AutoLine,
    "xvml:AutoPict": AutoSizePicture,
    "xvml:FmlaMacro": FormulaMacro,
    "xvml:TextHAlign": HorizontalTextAlignment,
    "xvml:TextVAlign": VerticalTextAlignment,
    "xvml:LockText": LockText,
    "xvml:JustLastX": JustifyLastLine,
    "xvml:SecretEdit": SecretEdit,
    "xvml:Default": DefaultButton,
    "xvml:Help": HelpButton,
    "xvml:Cancel": CancelButton,
    "xvml:Dismiss": DismissButton,
    "xvml:Accel": AcceleratorPrimary,
    "xvml:Accel2": AcceleratorSecondary,
    "xvml:Row": CommentRowTarget,
    "xvml:Column": CommentColumnTarget,
    "xvml:Visible": Visible,
    "xvml:RowHidden": RowHidden,
    "xvml:ColHidden": ColumnHidden,
    "xvml:VTEdit": InputValidationType,
    "xvml:MultiLine": MultiLine,
    "xvml:VScroll": VerticalScrollBar,
    "xvml:ValidIds": ValidIds,
    "xvml:FmlaRange": FormulaRange,
    "xvml:WidthMin": MinDropDownWidth,
    "xvml:Sel": SelectionEntry,
    "xvml:NoThreeD2": Disable3DForListBoxAndDropDown,
    "xvml:SelType": SelectionType,
    "xvml:MultiSel": MultiSelections,
    "xvml:LCT": ListBoxCallbackType,
    "xvml:ListItem": ListItem,
    "xvml:DropStyle": DropStyle,
    "xvml:Colored": Colored,
    "xvml:DropLines": DropLines,
    "xvml:Checked": Checked,
    "xvml:FmlaLink": FormulaLink,
    "xvml:FmlaPict": FormulaPicture,
    "xvml:NoThreeD": Disable3D,
    "xvml:FirstButton": FirstButton,
    "xvml:FmlaGroup": FormulaGroup,
    "xvml:Val": ScrollBarPosition,
    "xvml:Min": ScrollBarMin,
    "xvml:Max": ScrollBarMax,
    "xvml:Inc": ScrollBarIncrement,
    "xvml:Page": ScrollBarPageIncrement,
    "xvml:Horiz": HorizontalScrollBar,
    "xvml:Dx": ScrollBarWidth,
    "xvml:MapOCX": MapOcxControl,
    "xvml:CF": ClipboardFormat,
    "xvml:Camera": CameraObject,
    "xvml:RecalcAlways": RecalculateAlways,
    "xvml:AutoScale": AutoScaleFont,
    "xvml:DDE": DdeObject,
    "xvml:UIObj": UIObject,
    "xvml:ScriptText": ScriptText,
    "xvml:ScriptExtended": ScriptExtended,
    "xvml:ScriptLanguage": ScriptLanguage,
    "xvml:ScriptLocation": ScriptLocation,
    "xvml:FmlaTxbx": FormulaTextBox
  };
  ClientData._D = {
    ":ObjectType": new OxmlAttr(":ObjectType", OxmlType.EnumValue, ObjectValuesArray)
  };
  return {
    prefix: "xvml",
    xmlns: "urn:schemas-microsoft-com:office:excel"
  };
}
export {
  AcceleratorPrimary,
  AcceleratorSecondary,
  Anchor,
  AutoFill,
  AutoLine,
  AutoScaleFont,
  AutoSizePicture,
  BooleanEntryWithBlankValues,
  BooleanEntryWithBlankValuesArray,
  CameraObject,
  CancelButton,
  Checked,
  ClientData,
  ClipboardFormat,
  ClipboardFormatValues,
  ClipboardFormatValuesArray,
  Colored,
  ColumnHidden,
  CommentColumnTarget,
  CommentRowTarget,
  DdeObject,
  DefaultButton,
  DefaultSize,
  Disable3D,
  Disable3DForListBoxAndDropDown,
  Disabled,
  DismissButton,
  DropLines,
  DropStyle,
  FirstButton,
  FormulaGroup,
  FormulaLink,
  FormulaMacro,
  FormulaPicture,
  FormulaRange,
  FormulaTextBox,
  HelpButton,
  HorizontalScrollBar,
  HorizontalTextAlignment,
  InputValidationType,
  JustifyLastLine,
  ListBoxCallbackType,
  ListItem,
  LockText,
  Locked,
  MapOcxControl,
  MinDropDownWidth,
  MoveWithCells,
  MultiLine,
  MultiSelections,
  ObjectValues,
  ObjectValuesArray,
  PrintObject,
  RecalculateAlways,
  ResizeWithCells,
  RowHidden,
  ScriptExtended,
  ScriptLanguage,
  ScriptLocation,
  ScriptText,
  ScrollBarIncrement,
  ScrollBarMax,
  ScrollBarMin,
  ScrollBarPageIncrement,
  ScrollBarPosition,
  ScrollBarWidth,
  SecretEdit,
  SelectionEntry,
  SelectionType,
  UIObject,
  ValidIds,
  VerticalScrollBar,
  VerticalTextAlignment,
  Visible,
  initVmlSpreadsheetNamespace
};
