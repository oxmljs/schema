import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';


export enum ClipboardFormatValues {
    /** WMF. Serialized value: `PictOld` */
    PictureOld = 'PictOld',
    /** EMF. Serialized value: `Pict` */
    Picture = 'Pict',
    /** Bitmap. Serialized value: `Bitmap` */
    Bitmap = 'Bitmap',
    /** Printer Picture. Serialized value: `PictPrint` */
    PicturePrint = 'PictPrint',
    /** Screen Picture EMF. Serialized value: `PictScreen` */
    PictureScreen = 'PictScreen',
}

export const ClipboardFormatValuesArray = [
    ClipboardFormatValues.PictureOld,
    ClipboardFormatValues.Picture,
    ClipboardFormatValues.Bitmap,
    ClipboardFormatValues.PicturePrint,
    ClipboardFormatValues.PictureScreen,
] as const;

export enum ObjectValues {
    /** Pushbutton. Serialized value: `Button` */
    Button = 'Button',
    /** Checkbox. Serialized value: `Checkbox` */
    Checkbox = 'Checkbox',
    /** Dialog. Serialized value: `Dialog` */
    Dialog = 'Dialog',
    /** Dropdown Box. Serialized value: `Drop` */
    Drop = 'Drop',
    /** Editable Text Field. Serialized value: `Edit` */
    Edit = 'Edit',
    /** Group Box. Serialized value: `GBox` */
    GroupBox = 'GBox',
    /** Label. Serialized value: `Label` */
    Label = 'Label',
    /** Auditing Line. Serialized value: `LineA` */
    AuditingLine = 'LineA',
    /** List Box. Serialized value: `List` */
    List = 'List',
    /** Movie. Serialized value: `Movie` */
    Movie = 'Movie',
    /** Comment. Serialized value: `Note` */
    Note = 'Note',
    /** Image. Serialized value: `Pict` */
    Picture = 'Pict',
    /** Radio Button. Serialized value: `Radio` */
    Radio = 'Radio',
    /** Auditing Rectangle. Serialized value: `RectA` */
    AuditingRectangle = 'RectA',
    /** Scroll Bar. Serialized value: `Scroll` */
    Scroll = 'Scroll',
    /** Spin Button. Serialized value: `Spin` */
    Spin = 'Spin',
    /** Plain Shape. Serialized value: `Shape` */
    Shape = 'Shape',
    /** Group. Serialized value: `Group` */
    Group = 'Group',
    /** Plain Rectangle. Serialized value: `Rect` */
    Rectangle = 'Rect',
}

export const ObjectValuesArray = [
    ObjectValues.Button,
    ObjectValues.Checkbox,
    ObjectValues.Dialog,
    ObjectValues.Drop,
    ObjectValues.Edit,
    ObjectValues.GroupBox,
    ObjectValues.Label,
    ObjectValues.AuditingLine,
    ObjectValues.List,
    ObjectValues.Movie,
    ObjectValues.Note,
    ObjectValues.Picture,
    ObjectValues.Radio,
    ObjectValues.AuditingRectangle,
    ObjectValues.Scroll,
    ObjectValues.Spin,
    ObjectValues.Shape,
    ObjectValues.Group,
    ObjectValues.Rectangle,
] as const;

export enum BooleanEntryWithBlankValues {
    /** Logical True. Serialized value: `True` */
    True = 'True',
    /** Logical True. Serialized value: `t` */
    T = 't',
    /** Logical False. Serialized value: `False` */
    False = 'False',
    /** Logical False. Serialized value: `f` */
    F = 'f',
    /** Blank - Default Value. Serialized value: `` */
    Empty = '',
}

export const BooleanEntryWithBlankValuesArray = [
    BooleanEntryWithBlankValues.True,
    BooleanEntryWithBlankValues.T,
    BooleanEntryWithBlankValues.False,
    BooleanEntryWithBlankValues.F,
    BooleanEntryWithBlankValues.Empty,
] as const;

/** HTML Script Location. Serialized as `xvml:ScriptLocation` */
export class ScriptLocation extends OxmlLeafTextElement {

    public static override _Q = 'xvml:ScriptLocation';

}
/** HTML Script Language. Serialized as `xvml:ScriptLanguage` */
export class ScriptLanguage extends OxmlLeafTextElement {

    public static override _Q = 'xvml:ScriptLanguage';

}
/** Clipboard Format. Serialized as `xvml:CF` */
export class ClipboardFormat extends OxmlLeafTextElement {

    public static override _Q = 'xvml:CF';

}
/** Scroll Bar Width. Serialized as `xvml:Dx` */
export class ScrollBarWidth extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Dx';

}
/** Scroll Bar Page Increment. Serialized as `xvml:Page` */
export class ScrollBarPageIncrement extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Page';

}
/** Scroll Bar Increment. Serialized as `xvml:Inc` */
export class ScrollBarIncrement extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Inc';

}
/** Scroll Bar Maximum. Serialized as `xvml:Max` */
export class ScrollBarMax extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Max';

}
/** Scroll Bar Minimum. Serialized as `xvml:Min` */
export class ScrollBarMin extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Min';

}
/** Scroll bar position. Serialized as `xvml:Val` */
export class ScrollBarPosition extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Val';

}
/** Checked. Serialized as `xvml:Checked` */
export class Checked extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Checked';

}
/** Dropdown Maximum Lines. Serialized as `xvml:DropLines` */
export class DropLines extends OxmlLeafTextElement {

    public static override _Q = 'xvml:DropLines';

}
/** Selected Entry. Serialized as `xvml:Sel` */
export class SelectionEntry extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Sel';

}
/** Minimum Width. Serialized as `xvml:WidthMin` */
export class MinDropDownWidth extends OxmlLeafTextElement {

    public static override _Q = 'xvml:WidthMin';

}
/** Validation Type. Serialized as `xvml:VTEdit` */
export class InputValidationType extends OxmlLeafTextElement {

    public static override _Q = 'xvml:VTEdit';

}
/** Comment Column Target. Serialized as `xvml:Column` */
export class CommentColumnTarget extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Column';

}
/** Comment Row Target. Serialized as `xvml:Row` */
export class CommentRowTarget extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Row';

}
/** Secondary Keyboard Accelerator. Serialized as `xvml:Accel2` */
export class AcceleratorSecondary extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Accel2';

}
/** Primary Keyboard Accelerator. Serialized as `xvml:Accel` */
export class AcceleratorPrimary extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Accel';

}
/** Reference to Custom Function. Serialized as `xvml:FmlaMacro` */
export class FormulaMacro extends OxmlLeafTextElement {

    public static override _Q = 'xvml:FmlaMacro';

}
/** Text Formula. Serialized as `xvml:FmlaTxbx` */
export class FormulaTextBox extends OxmlLeafTextElement {

    public static override _Q = 'xvml:FmlaTxbx';

}
/** HTML Script Attributes. Serialized as `xvml:ScriptExtended` */
export class ScriptExtended extends OxmlLeafTextElement {

    public static override _Q = 'xvml:ScriptExtended';

}
/** HTML Script Text. Serialized as `xvml:ScriptText` */
export class ScriptText extends OxmlLeafTextElement {

    public static override _Q = 'xvml:ScriptText';

}
/** Linked Formula - Group Box. Serialized as `xvml:FmlaGroup` */
export class FormulaGroup extends OxmlLeafTextElement {

    public static override _Q = 'xvml:FmlaGroup';

}
/** Camera Source Range. Serialized as `xvml:FmlaPict` */
export class FormulaPicture extends OxmlLeafTextElement {

    public static override _Q = 'xvml:FmlaPict';

}
/** Linked Formula. Serialized as `xvml:FmlaLink` */
export class FormulaLink extends OxmlLeafTextElement {

    public static override _Q = 'xvml:FmlaLink';

}
/** Dropdown Style. Serialized as `xvml:DropStyle` */
export class DropStyle extends OxmlLeafTextElement {

    public static override _Q = 'xvml:DropStyle';

}
/** Non-linked List Item. Serialized as `xvml:ListItem` */
export class ListItem extends OxmlLeafTextElement {

    public static override _Q = 'xvml:ListItem';

}
/** Callback Type. Serialized as `xvml:LCT` */
export class ListBoxCallbackType extends OxmlLeafTextElement {

    public static override _Q = 'xvml:LCT';

}
/** Multiple Selections. Serialized as `xvml:MultiSel` */
export class MultiSelections extends OxmlLeafTextElement {

    public static override _Q = 'xvml:MultiSel';

}
/** Selection Type. Serialized as `xvml:SelType` */
export class SelectionType extends OxmlLeafTextElement {

    public static override _Q = 'xvml:SelType';

}
/** List Items Source Range. Serialized as `xvml:FmlaRange` */
export class FormulaRange extends OxmlLeafTextElement {

    public static override _Q = 'xvml:FmlaRange';

}
/** Vertical Text Alignment. Serialized as `xvml:TextVAlign` */
export class VerticalTextAlignment extends OxmlLeafTextElement {

    public static override _Q = 'xvml:TextVAlign';

}
/** Horizontal Text Alignment. Serialized as `xvml:TextHAlign` */
export class HorizontalTextAlignment extends OxmlLeafTextElement {

    public static override _Q = 'xvml:TextHAlign';

}
/** Anchor. Serialized as `xvml:Anchor` */
export class Anchor extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Anchor';

}
/** UI Object Toggle. Serialized as `xvml:UIObj` */
export class UIObject extends OxmlLeafTextElement {

    public static override _Q = 'xvml:UIObj';

}
/** Dynamic Data Exchange. Serialized as `xvml:DDE` */
export class DdeObject extends OxmlLeafTextElement {

    public static override _Q = 'xvml:DDE';

}
/** Font AutoScale. Serialized as `xvml:AutoScale` */
export class AutoScaleFont extends OxmlLeafTextElement {

    public static override _Q = 'xvml:AutoScale';

}
/** Recalculation Toggle. Serialized as `xvml:RecalcAlways` */
export class RecalculateAlways extends OxmlLeafTextElement {

    public static override _Q = 'xvml:RecalcAlways';

}
/** Camera Tool. Serialized as `xvml:Camera` */
export class CameraObject extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Camera';

}
/** ActiveX Control. Serialized as `xvml:MapOCX` */
export class MapOcxControl extends OxmlLeafTextElement {

    public static override _Q = 'xvml:MapOCX';

}
/** Scroll Bar Orientation. Serialized as `xvml:Horiz` */
export class HorizontalScrollBar extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Horiz';

}
/** First Radio Button. Serialized as `xvml:FirstButton` */
export class FirstButton extends OxmlLeafTextElement {

    public static override _Q = 'xvml:FirstButton';

}
/** Disable 3D. Serialized as `xvml:NoThreeD` */
export class Disable3D extends OxmlLeafTextElement {

    public static override _Q = 'xvml:NoThreeD';

}
/** Dropdown Color Toggle. Serialized as `xvml:Colored` */
export class Colored extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Colored';

}
/** Disable 3D. Serialized as `xvml:NoThreeD2` */
export class Disable3DForListBoxAndDropDown extends OxmlLeafTextElement {

    public static override _Q = 'xvml:NoThreeD2';

}
/** Valid ID. Serialized as `xvml:ValidIds` */
export class ValidIds extends OxmlLeafTextElement {

    public static override _Q = 'xvml:ValidIds';

}
/** Vertical Scroll. Serialized as `xvml:VScroll` */
export class VerticalScrollBar extends OxmlLeafTextElement {

    public static override _Q = 'xvml:VScroll';

}
/** Multi-line. Serialized as `xvml:MultiLine` */
export class MultiLine extends OxmlLeafTextElement {

    public static override _Q = 'xvml:MultiLine';

}
/** Comment's Column is Hidden. Serialized as `xvml:ColHidden` */
export class ColumnHidden extends OxmlLeafTextElement {

    public static override _Q = 'xvml:ColHidden';

}
/** Comment's Row is Hidden. Serialized as `xvml:RowHidden` */
export class RowHidden extends OxmlLeafTextElement {

    public static override _Q = 'xvml:RowHidden';

}
/** Comment Visibility Toggle. Serialized as `xvml:Visible` */
export class Visible extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Visible';

}
/** Dismiss Button. Serialized as `xvml:Dismiss` */
export class DismissButton extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Dismiss';

}
/** Cancel Button. Serialized as `xvml:Cancel` */
export class CancelButton extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Cancel';

}
/** Help Button. Serialized as `xvml:Help` */
export class HelpButton extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Help';

}
/** Default Button. Serialized as `xvml:Default` */
export class DefaultButton extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Default';

}
/** Password Edit. Serialized as `xvml:SecretEdit` */
export class SecretEdit extends OxmlLeafTextElement {

    public static override _Q = 'xvml:SecretEdit';

}
/** East Asia Alignment Toggle. Serialized as `xvml:JustLastX` */
export class JustifyLastLine extends OxmlLeafTextElement {

    public static override _Q = 'xvml:JustLastX';

}
/** Text Lock. Serialized as `xvml:LockText` */
export class LockText extends OxmlLeafTextElement {

    public static override _Q = 'xvml:LockText';

}
/** Automatically Size. Serialized as `xvml:AutoPict` */
export class AutoSizePicture extends OxmlLeafTextElement {

    public static override _Q = 'xvml:AutoPict';

}
/** AutoLine. Serialized as `xvml:AutoLine` */
export class AutoLine extends OxmlLeafTextElement {

    public static override _Q = 'xvml:AutoLine';

}
/** AutoFill. Serialized as `xvml:AutoFill` */
export class AutoFill extends OxmlLeafTextElement {

    public static override _Q = 'xvml:AutoFill';

}
/** Macro Disable Toggle. Serialized as `xvml:Disabled` */
export class Disabled extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Disabled';

}
/** Print Toggle. Serialized as `xvml:PrintObject` */
export class PrintObject extends OxmlLeafTextElement {

    public static override _Q = 'xvml:PrintObject';

}
/** Default Size Toggle. Serialized as `xvml:DefaultSize` */
export class DefaultSize extends OxmlLeafTextElement {

    public static override _Q = 'xvml:DefaultSize';

}
/** Lock Toggle. Serialized as `xvml:Locked` */
export class Locked extends OxmlLeafTextElement {

    public static override _Q = 'xvml:Locked';

}
/** Resize with Cells. Serialized as `xvml:SizeWithCells` */
export class ResizeWithCells extends OxmlLeafTextElement {

    public static override _Q = 'xvml:SizeWithCells';

}
/** Move with Cells. Serialized as `xvml:MoveWithCells` */
export class MoveWithCells extends OxmlLeafTextElement {

    public static override _Q = 'xvml:MoveWithCells';

}
/** Attached Object Data. Serialized as `xvml:ClientData` */
export class ClientData extends OxmlCompositeElement<MoveWithCells | ResizeWithCells | Anchor | Locked | DefaultSize | PrintObject | Disabled | AutoFill | AutoLine | AutoSizePicture | FormulaMacro | HorizontalTextAlignment | VerticalTextAlignment | LockText | JustifyLastLine | SecretEdit | DefaultButton | HelpButton | CancelButton | DismissButton | AcceleratorPrimary | AcceleratorSecondary | CommentRowTarget | CommentColumnTarget | Visible | RowHidden | ColumnHidden | InputValidationType | MultiLine | VerticalScrollBar | ValidIds | FormulaRange | MinDropDownWidth | SelectionEntry | Disable3DForListBoxAndDropDown | SelectionType | MultiSelections | ListBoxCallbackType | ListItem | DropStyle | Colored | DropLines | Checked | FormulaLink | FormulaPicture | Disable3D | FirstButton | FormulaGroup | ScrollBarPosition | ScrollBarMin | ScrollBarMax | ScrollBarIncrement | ScrollBarPageIncrement | HorizontalScrollBar | ScrollBarWidth | MapOcxControl | ClipboardFormat | CameraObject | RecalculateAlways | AutoScaleFont | DdeObject | UIObject | ScriptText | ScriptExtended | ScriptLanguage | ScriptLocation | FormulaTextBox> {

    public static override _Q = 'xvml:ClientData';
    public static override _A = [':ObjectType',];
    /** Object type. Serialized as `:ObjectType` */
    public get objectType(): ObjectValues | undefined { return this._g(':ObjectType'); }
    public set objectType(v: ObjectValues | undefined) { this._s(':ObjectType', v); }

}

export function initVmlSpreadsheetNamespace() {
    ClientData._C = {
        'xvml:MoveWithCells': MoveWithCells,
        'xvml:SizeWithCells': ResizeWithCells,
        'xvml:Anchor': Anchor,
        'xvml:Locked': Locked,
        'xvml:DefaultSize': DefaultSize,
        'xvml:PrintObject': PrintObject,
        'xvml:Disabled': Disabled,
        'xvml:AutoFill': AutoFill,
        'xvml:AutoLine': AutoLine,
        'xvml:AutoPict': AutoSizePicture,
        'xvml:FmlaMacro': FormulaMacro,
        'xvml:TextHAlign': HorizontalTextAlignment,
        'xvml:TextVAlign': VerticalTextAlignment,
        'xvml:LockText': LockText,
        'xvml:JustLastX': JustifyLastLine,
        'xvml:SecretEdit': SecretEdit,
        'xvml:Default': DefaultButton,
        'xvml:Help': HelpButton,
        'xvml:Cancel': CancelButton,
        'xvml:Dismiss': DismissButton,
        'xvml:Accel': AcceleratorPrimary,
        'xvml:Accel2': AcceleratorSecondary,
        'xvml:Row': CommentRowTarget,
        'xvml:Column': CommentColumnTarget,
        'xvml:Visible': Visible,
        'xvml:RowHidden': RowHidden,
        'xvml:ColHidden': ColumnHidden,
        'xvml:VTEdit': InputValidationType,
        'xvml:MultiLine': MultiLine,
        'xvml:VScroll': VerticalScrollBar,
        'xvml:ValidIds': ValidIds,
        'xvml:FmlaRange': FormulaRange,
        'xvml:WidthMin': MinDropDownWidth,
        'xvml:Sel': SelectionEntry,
        'xvml:NoThreeD2': Disable3DForListBoxAndDropDown,
        'xvml:SelType': SelectionType,
        'xvml:MultiSel': MultiSelections,
        'xvml:LCT': ListBoxCallbackType,
        'xvml:ListItem': ListItem,
        'xvml:DropStyle': DropStyle,
        'xvml:Colored': Colored,
        'xvml:DropLines': DropLines,
        'xvml:Checked': Checked,
        'xvml:FmlaLink': FormulaLink,
        'xvml:FmlaPict': FormulaPicture,
        'xvml:NoThreeD': Disable3D,
        'xvml:FirstButton': FirstButton,
        'xvml:FmlaGroup': FormulaGroup,
        'xvml:Val': ScrollBarPosition,
        'xvml:Min': ScrollBarMin,
        'xvml:Max': ScrollBarMax,
        'xvml:Inc': ScrollBarIncrement,
        'xvml:Page': ScrollBarPageIncrement,
        'xvml:Horiz': HorizontalScrollBar,
        'xvml:Dx': ScrollBarWidth,
        'xvml:MapOCX': MapOcxControl,
        'xvml:CF': ClipboardFormat,
        'xvml:Camera': CameraObject,
        'xvml:RecalcAlways': RecalculateAlways,
        'xvml:AutoScale': AutoScaleFont,
        'xvml:DDE': DdeObject,
        'xvml:UIObj': UIObject,
        'xvml:ScriptText': ScriptText,
        'xvml:ScriptExtended': ScriptExtended,
        'xvml:ScriptLanguage': ScriptLanguage,
        'xvml:ScriptLocation': ScriptLocation,
        'xvml:FmlaTxbx': FormulaTextBox,
    };
    ClientData._D = {
        ':ObjectType': new OxmlAttr(':ObjectType', OxmlType.EnumValue, ObjectValuesArray),
    };
    return {
        prefix: 'xvml',
        xmlns: 'urn:schemas-microsoft-com:office:excel',
    };
}
