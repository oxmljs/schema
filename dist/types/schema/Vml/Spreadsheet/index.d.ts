import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
export declare enum ClipboardFormatValues {
    /** WMF. Serialized value: `PictOld` */
    PictureOld = "PictOld",
    /** EMF. Serialized value: `Pict` */
    Picture = "Pict",
    /** Bitmap. Serialized value: `Bitmap` */
    Bitmap = "Bitmap",
    /** Printer Picture. Serialized value: `PictPrint` */
    PicturePrint = "PictPrint",
    /** Screen Picture EMF. Serialized value: `PictScreen` */
    PictureScreen = "PictScreen"
}
export declare const ClipboardFormatValuesArray: readonly [ClipboardFormatValues.PictureOld, ClipboardFormatValues.Picture, ClipboardFormatValues.Bitmap, ClipboardFormatValues.PicturePrint, ClipboardFormatValues.PictureScreen];
export declare enum ObjectValues {
    /** Pushbutton. Serialized value: `Button` */
    Button = "Button",
    /** Checkbox. Serialized value: `Checkbox` */
    Checkbox = "Checkbox",
    /** Dialog. Serialized value: `Dialog` */
    Dialog = "Dialog",
    /** Dropdown Box. Serialized value: `Drop` */
    Drop = "Drop",
    /** Editable Text Field. Serialized value: `Edit` */
    Edit = "Edit",
    /** Group Box. Serialized value: `GBox` */
    GroupBox = "GBox",
    /** Label. Serialized value: `Label` */
    Label = "Label",
    /** Auditing Line. Serialized value: `LineA` */
    AuditingLine = "LineA",
    /** List Box. Serialized value: `List` */
    List = "List",
    /** Movie. Serialized value: `Movie` */
    Movie = "Movie",
    /** Comment. Serialized value: `Note` */
    Note = "Note",
    /** Image. Serialized value: `Pict` */
    Picture = "Pict",
    /** Radio Button. Serialized value: `Radio` */
    Radio = "Radio",
    /** Auditing Rectangle. Serialized value: `RectA` */
    AuditingRectangle = "RectA",
    /** Scroll Bar. Serialized value: `Scroll` */
    Scroll = "Scroll",
    /** Spin Button. Serialized value: `Spin` */
    Spin = "Spin",
    /** Plain Shape. Serialized value: `Shape` */
    Shape = "Shape",
    /** Group. Serialized value: `Group` */
    Group = "Group",
    /** Plain Rectangle. Serialized value: `Rect` */
    Rectangle = "Rect"
}
export declare const ObjectValuesArray: readonly [ObjectValues.Button, ObjectValues.Checkbox, ObjectValues.Dialog, ObjectValues.Drop, ObjectValues.Edit, ObjectValues.GroupBox, ObjectValues.Label, ObjectValues.AuditingLine, ObjectValues.List, ObjectValues.Movie, ObjectValues.Note, ObjectValues.Picture, ObjectValues.Radio, ObjectValues.AuditingRectangle, ObjectValues.Scroll, ObjectValues.Spin, ObjectValues.Shape, ObjectValues.Group, ObjectValues.Rectangle];
export declare enum BooleanEntryWithBlankValues {
    /** Logical True. Serialized value: `True` */
    True = "True",
    /** Logical True. Serialized value: `t` */
    T = "t",
    /** Logical False. Serialized value: `False` */
    False = "False",
    /** Logical False. Serialized value: `f` */
    F = "f",
    /** Blank - Default Value. Serialized value: `` */
    Empty = ""
}
export declare const BooleanEntryWithBlankValuesArray: readonly [BooleanEntryWithBlankValues.True, BooleanEntryWithBlankValues.T, BooleanEntryWithBlankValues.False, BooleanEntryWithBlankValues.F, BooleanEntryWithBlankValues.Empty];
/** HTML Script Location. Serialized as `xvml:ScriptLocation` */
export declare class ScriptLocation extends OxmlLeafTextElement {
    static _Q: string;
}
/** HTML Script Language. Serialized as `xvml:ScriptLanguage` */
export declare class ScriptLanguage extends OxmlLeafTextElement {
    static _Q: string;
}
/** Clipboard Format. Serialized as `xvml:CF` */
export declare class ClipboardFormat extends OxmlLeafTextElement {
    static _Q: string;
}
/** Scroll Bar Width. Serialized as `xvml:Dx` */
export declare class ScrollBarWidth extends OxmlLeafTextElement {
    static _Q: string;
}
/** Scroll Bar Page Increment. Serialized as `xvml:Page` */
export declare class ScrollBarPageIncrement extends OxmlLeafTextElement {
    static _Q: string;
}
/** Scroll Bar Increment. Serialized as `xvml:Inc` */
export declare class ScrollBarIncrement extends OxmlLeafTextElement {
    static _Q: string;
}
/** Scroll Bar Maximum. Serialized as `xvml:Max` */
export declare class ScrollBarMax extends OxmlLeafTextElement {
    static _Q: string;
}
/** Scroll Bar Minimum. Serialized as `xvml:Min` */
export declare class ScrollBarMin extends OxmlLeafTextElement {
    static _Q: string;
}
/** Scroll bar position. Serialized as `xvml:Val` */
export declare class ScrollBarPosition extends OxmlLeafTextElement {
    static _Q: string;
}
/** Checked. Serialized as `xvml:Checked` */
export declare class Checked extends OxmlLeafTextElement {
    static _Q: string;
}
/** Dropdown Maximum Lines. Serialized as `xvml:DropLines` */
export declare class DropLines extends OxmlLeafTextElement {
    static _Q: string;
}
/** Selected Entry. Serialized as `xvml:Sel` */
export declare class SelectionEntry extends OxmlLeafTextElement {
    static _Q: string;
}
/** Minimum Width. Serialized as `xvml:WidthMin` */
export declare class MinDropDownWidth extends OxmlLeafTextElement {
    static _Q: string;
}
/** Validation Type. Serialized as `xvml:VTEdit` */
export declare class InputValidationType extends OxmlLeafTextElement {
    static _Q: string;
}
/** Comment Column Target. Serialized as `xvml:Column` */
export declare class CommentColumnTarget extends OxmlLeafTextElement {
    static _Q: string;
}
/** Comment Row Target. Serialized as `xvml:Row` */
export declare class CommentRowTarget extends OxmlLeafTextElement {
    static _Q: string;
}
/** Secondary Keyboard Accelerator. Serialized as `xvml:Accel2` */
export declare class AcceleratorSecondary extends OxmlLeafTextElement {
    static _Q: string;
}
/** Primary Keyboard Accelerator. Serialized as `xvml:Accel` */
export declare class AcceleratorPrimary extends OxmlLeafTextElement {
    static _Q: string;
}
/** Reference to Custom Function. Serialized as `xvml:FmlaMacro` */
export declare class FormulaMacro extends OxmlLeafTextElement {
    static _Q: string;
}
/** Text Formula. Serialized as `xvml:FmlaTxbx` */
export declare class FormulaTextBox extends OxmlLeafTextElement {
    static _Q: string;
}
/** HTML Script Attributes. Serialized as `xvml:ScriptExtended` */
export declare class ScriptExtended extends OxmlLeafTextElement {
    static _Q: string;
}
/** HTML Script Text. Serialized as `xvml:ScriptText` */
export declare class ScriptText extends OxmlLeafTextElement {
    static _Q: string;
}
/** Linked Formula - Group Box. Serialized as `xvml:FmlaGroup` */
export declare class FormulaGroup extends OxmlLeafTextElement {
    static _Q: string;
}
/** Camera Source Range. Serialized as `xvml:FmlaPict` */
export declare class FormulaPicture extends OxmlLeafTextElement {
    static _Q: string;
}
/** Linked Formula. Serialized as `xvml:FmlaLink` */
export declare class FormulaLink extends OxmlLeafTextElement {
    static _Q: string;
}
/** Dropdown Style. Serialized as `xvml:DropStyle` */
export declare class DropStyle extends OxmlLeafTextElement {
    static _Q: string;
}
/** Non-linked List Item. Serialized as `xvml:ListItem` */
export declare class ListItem extends OxmlLeafTextElement {
    static _Q: string;
}
/** Callback Type. Serialized as `xvml:LCT` */
export declare class ListBoxCallbackType extends OxmlLeafTextElement {
    static _Q: string;
}
/** Multiple Selections. Serialized as `xvml:MultiSel` */
export declare class MultiSelections extends OxmlLeafTextElement {
    static _Q: string;
}
/** Selection Type. Serialized as `xvml:SelType` */
export declare class SelectionType extends OxmlLeafTextElement {
    static _Q: string;
}
/** List Items Source Range. Serialized as `xvml:FmlaRange` */
export declare class FormulaRange extends OxmlLeafTextElement {
    static _Q: string;
}
/** Vertical Text Alignment. Serialized as `xvml:TextVAlign` */
export declare class VerticalTextAlignment extends OxmlLeafTextElement {
    static _Q: string;
}
/** Horizontal Text Alignment. Serialized as `xvml:TextHAlign` */
export declare class HorizontalTextAlignment extends OxmlLeafTextElement {
    static _Q: string;
}
/** Anchor. Serialized as `xvml:Anchor` */
export declare class Anchor extends OxmlLeafTextElement {
    static _Q: string;
}
/** UI Object Toggle. Serialized as `xvml:UIObj` */
export declare class UIObject extends OxmlLeafTextElement {
    static _Q: string;
}
/** Dynamic Data Exchange. Serialized as `xvml:DDE` */
export declare class DdeObject extends OxmlLeafTextElement {
    static _Q: string;
}
/** Font AutoScale. Serialized as `xvml:AutoScale` */
export declare class AutoScaleFont extends OxmlLeafTextElement {
    static _Q: string;
}
/** Recalculation Toggle. Serialized as `xvml:RecalcAlways` */
export declare class RecalculateAlways extends OxmlLeafTextElement {
    static _Q: string;
}
/** Camera Tool. Serialized as `xvml:Camera` */
export declare class CameraObject extends OxmlLeafTextElement {
    static _Q: string;
}
/** ActiveX Control. Serialized as `xvml:MapOCX` */
export declare class MapOcxControl extends OxmlLeafTextElement {
    static _Q: string;
}
/** Scroll Bar Orientation. Serialized as `xvml:Horiz` */
export declare class HorizontalScrollBar extends OxmlLeafTextElement {
    static _Q: string;
}
/** First Radio Button. Serialized as `xvml:FirstButton` */
export declare class FirstButton extends OxmlLeafTextElement {
    static _Q: string;
}
/** Disable 3D. Serialized as `xvml:NoThreeD` */
export declare class Disable3D extends OxmlLeafTextElement {
    static _Q: string;
}
/** Dropdown Color Toggle. Serialized as `xvml:Colored` */
export declare class Colored extends OxmlLeafTextElement {
    static _Q: string;
}
/** Disable 3D. Serialized as `xvml:NoThreeD2` */
export declare class Disable3DForListBoxAndDropDown extends OxmlLeafTextElement {
    static _Q: string;
}
/** Valid ID. Serialized as `xvml:ValidIds` */
export declare class ValidIds extends OxmlLeafTextElement {
    static _Q: string;
}
/** Vertical Scroll. Serialized as `xvml:VScroll` */
export declare class VerticalScrollBar extends OxmlLeafTextElement {
    static _Q: string;
}
/** Multi-line. Serialized as `xvml:MultiLine` */
export declare class MultiLine extends OxmlLeafTextElement {
    static _Q: string;
}
/** Comment's Column is Hidden. Serialized as `xvml:ColHidden` */
export declare class ColumnHidden extends OxmlLeafTextElement {
    static _Q: string;
}
/** Comment's Row is Hidden. Serialized as `xvml:RowHidden` */
export declare class RowHidden extends OxmlLeafTextElement {
    static _Q: string;
}
/** Comment Visibility Toggle. Serialized as `xvml:Visible` */
export declare class Visible extends OxmlLeafTextElement {
    static _Q: string;
}
/** Dismiss Button. Serialized as `xvml:Dismiss` */
export declare class DismissButton extends OxmlLeafTextElement {
    static _Q: string;
}
/** Cancel Button. Serialized as `xvml:Cancel` */
export declare class CancelButton extends OxmlLeafTextElement {
    static _Q: string;
}
/** Help Button. Serialized as `xvml:Help` */
export declare class HelpButton extends OxmlLeafTextElement {
    static _Q: string;
}
/** Default Button. Serialized as `xvml:Default` */
export declare class DefaultButton extends OxmlLeafTextElement {
    static _Q: string;
}
/** Password Edit. Serialized as `xvml:SecretEdit` */
export declare class SecretEdit extends OxmlLeafTextElement {
    static _Q: string;
}
/** East Asia Alignment Toggle. Serialized as `xvml:JustLastX` */
export declare class JustifyLastLine extends OxmlLeafTextElement {
    static _Q: string;
}
/** Text Lock. Serialized as `xvml:LockText` */
export declare class LockText extends OxmlLeafTextElement {
    static _Q: string;
}
/** Automatically Size. Serialized as `xvml:AutoPict` */
export declare class AutoSizePicture extends OxmlLeafTextElement {
    static _Q: string;
}
/** AutoLine. Serialized as `xvml:AutoLine` */
export declare class AutoLine extends OxmlLeafTextElement {
    static _Q: string;
}
/** AutoFill. Serialized as `xvml:AutoFill` */
export declare class AutoFill extends OxmlLeafTextElement {
    static _Q: string;
}
/** Macro Disable Toggle. Serialized as `xvml:Disabled` */
export declare class Disabled extends OxmlLeafTextElement {
    static _Q: string;
}
/** Print Toggle. Serialized as `xvml:PrintObject` */
export declare class PrintObject extends OxmlLeafTextElement {
    static _Q: string;
}
/** Default Size Toggle. Serialized as `xvml:DefaultSize` */
export declare class DefaultSize extends OxmlLeafTextElement {
    static _Q: string;
}
/** Lock Toggle. Serialized as `xvml:Locked` */
export declare class Locked extends OxmlLeafTextElement {
    static _Q: string;
}
/** Resize with Cells. Serialized as `xvml:SizeWithCells` */
export declare class ResizeWithCells extends OxmlLeafTextElement {
    static _Q: string;
}
/** Move with Cells. Serialized as `xvml:MoveWithCells` */
export declare class MoveWithCells extends OxmlLeafTextElement {
    static _Q: string;
}
/** Attached Object Data. Serialized as `xvml:ClientData` */
export declare class ClientData extends OxmlCompositeElement<MoveWithCells | ResizeWithCells | Anchor | Locked | DefaultSize | PrintObject | Disabled | AutoFill | AutoLine | AutoSizePicture | FormulaMacro | HorizontalTextAlignment | VerticalTextAlignment | LockText | JustifyLastLine | SecretEdit | DefaultButton | HelpButton | CancelButton | DismissButton | AcceleratorPrimary | AcceleratorSecondary | CommentRowTarget | CommentColumnTarget | Visible | RowHidden | ColumnHidden | InputValidationType | MultiLine | VerticalScrollBar | ValidIds | FormulaRange | MinDropDownWidth | SelectionEntry | Disable3DForListBoxAndDropDown | SelectionType | MultiSelections | ListBoxCallbackType | ListItem | DropStyle | Colored | DropLines | Checked | FormulaLink | FormulaPicture | Disable3D | FirstButton | FormulaGroup | ScrollBarPosition | ScrollBarMin | ScrollBarMax | ScrollBarIncrement | ScrollBarPageIncrement | HorizontalScrollBar | ScrollBarWidth | MapOcxControl | ClipboardFormat | CameraObject | RecalculateAlways | AutoScaleFont | DdeObject | UIObject | ScriptText | ScriptExtended | ScriptLanguage | ScriptLocation | FormulaTextBox> {
    static _Q: string;
    static _A: string[];
    /** Object type. Serialized as `:ObjectType` */
    get objectType(): ObjectValues | undefined;
    set objectType(v: ObjectValues | undefined);
}
export declare function initVmlSpreadsheetNamespace(): {
    prefix: string;
    xmlns: string;
};
