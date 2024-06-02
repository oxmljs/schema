import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { SheetProperties as XSheetProperties } from '../../Spreadsheet';
import { SheetDimension as XSheetDimension } from '../../Spreadsheet';
import { SheetViews as XSheetViews } from '../../Spreadsheet';
import { SheetFormatProperties as XSheetFormatProperties } from '../../Spreadsheet';
import { Columns as XColumns } from '../../Spreadsheet';
import { SheetData as XSheetData } from '../../Spreadsheet';
import { SheetProtection as XSheetProtection } from '../../Spreadsheet';
import { AutoFilter as XAutoFilter } from '../../Spreadsheet';
import { SortState as XSortState } from '../../Spreadsheet';
import { DataConsolidate as XDataConsolidate } from '../../Spreadsheet';
import { CustomSheetViews as XCustomSheetViews } from '../../Spreadsheet';
import { PhoneticProperties as XPhoneticProperties } from '../../Spreadsheet';
import { ConditionalFormatting as XConditionalFormatting } from '../../Spreadsheet';
import { PrintOptions as XPrintOptions } from '../../Spreadsheet';
import { PageMargins as XPageMargins } from '../../Spreadsheet';
import { PageSetup as XPageSetup } from '../../Spreadsheet';
import { HeaderFooter as XHeaderFooter } from '../../Spreadsheet';
import { RowBreaks as XRowBreaks } from '../../Spreadsheet';
import { ColumnBreaks as XColumnBreaks } from '../../Spreadsheet';
import { CustomProperties as XCustomProperties } from '../../Spreadsheet';
import { Drawing as XDrawing } from '../../Spreadsheet';
import { LegacyDrawing as XLegacyDrawing } from '../../Spreadsheet';
import { LegacyDrawingHeaderFooter as XLegacyDrawingHeaderFooter } from '../../Spreadsheet';
import { Picture as XPicture } from '../../Spreadsheet';
import { OleObjects as XOleObjects } from '../../Spreadsheet';
import { DrawingHeaderFooter as XDrawingHeaderFooter } from '../../Spreadsheet';
import { ExtensionList as XExtensionList } from '../../Spreadsheet';
/** Defines the SortMapItemType Class. */
export declare abstract class SortMapItemType extends OxmlLeafElement {
    static _A: string[];
    /** New Value. Serialized as `:newVal` */
    get newVal(): UInt32Value | undefined;
    set newVal(v: UInt32Value | undefined);
    /** Old Value. Serialized as `:oldVal` */
    get oldVal(): UInt32Value | undefined;
    set oldVal(v: UInt32Value | undefined);
}
/** Column. Serialized as `xne:col` */
export declare class ColumnSortMapItem extends SortMapItemType {
    static _Q: string;
}
/** Row. Serialized as `xne:row` */
export declare class RowSortMapItem extends SortMapItemType {
    static _Q: string;
}
/** Column Sort Map. Serialized as `xne:colSortMap` */
export declare class ColumnSortMap extends OxmlCompositeElement<ColumnSortMapItem> {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get ref(): StringValue | undefined;
    set ref(v: StringValue | undefined);
    /** Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Row Sort Map. Serialized as `xne:rowSortMap` */
export declare class RowSortMap extends OxmlCompositeElement<RowSortMapItem> {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get ref(): StringValue | undefined;
    set ref(v: StringValue | undefined);
    /** Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the Formula Class. Serialized as `xne:f` */
export declare class Formula extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the ReferenceSequence Class. Serialized as `xne:sqref` */
export declare class ReferenceSequence extends OxmlLeafTextElement {
    static _Q: string;
}
/** Worksheet Sort Map. Serialized as `xne:worksheetSortMap` */
export declare class WorksheetSortMap extends OxmlPartRootElement<RowSortMap | ColumnSortMap> {
    static _Q: string;
    /** Row Sort Map. */
    get rowSortMap(): RowSortMap | undefined;
    /** Column Sort Map. */
    get columnSortMap(): ColumnSortMap | undefined;
}
/** Defines the Macrosheet Class. Serialized as `xne:macrosheet` */
export declare class Macrosheet extends OxmlPartRootElement<XSheetProperties | XSheetDimension | XSheetViews | XSheetFormatProperties | XColumns | XSheetData | XSheetProtection | XAutoFilter | XSortState | XDataConsolidate | XCustomSheetViews | XPhoneticProperties | XConditionalFormatting | XPrintOptions | XPageMargins | XPageSetup | XHeaderFooter | XRowBreaks | XColumnBreaks | XCustomProperties | XDrawing | XLegacyDrawing | XLegacyDrawingHeaderFooter | XPicture | XOleObjects | XDrawingHeaderFooter | XExtensionList> {
    static _Q: string;
    /** Sheet Properties. */
    get sheetProperties(): XSheetProperties | undefined;
    /** Macro Sheet Dimensions. */
    get sheetDimension(): XSheetDimension | undefined;
    /** Macro Sheet Views. */
    get sheetViews(): XSheetViews | undefined;
    /** Sheet Format Properties. */
    get sheetFormatProperties(): XSheetFormatProperties | undefined;
}
export declare function initOfficeExcelNamespace(): {
    prefix: string;
    xmlns: string;
};
