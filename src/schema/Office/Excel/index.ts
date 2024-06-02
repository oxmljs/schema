import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
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
export abstract class SortMapItemType extends OxmlLeafElement {

    public static override _A = [':newVal',':oldVal',];
    /** New Value. Serialized as `:newVal` */
    public get newVal(): UInt32Value | undefined { return this._g(':newVal'); }
    public set newVal(v: UInt32Value | undefined) { this._s(':newVal', v); }
    /** Old Value. Serialized as `:oldVal` */
    public get oldVal(): UInt32Value | undefined { return this._g(':oldVal'); }
    public set oldVal(v: UInt32Value | undefined) { this._s(':oldVal', v); }

}
/** Column. Serialized as `xne:col` */
export class ColumnSortMapItem extends SortMapItemType {

    public static override _Q = 'xne:col';

}
/** Row. Serialized as `xne:row` */
export class RowSortMapItem extends SortMapItemType {

    public static override _Q = 'xne:row';

}
/** Column Sort Map. Serialized as `xne:colSortMap` */
export class ColumnSortMap extends OxmlCompositeElement<ColumnSortMapItem> {

    public static override _Q = 'xne:colSortMap';
    public static override _A = [':ref',':count',];
    /** Reference. Serialized as `:ref` */
    public get ref(): StringValue | undefined { return this._g(':ref'); }
    public set ref(v: StringValue | undefined) { this._s(':ref', v); }
    /** Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Row Sort Map. Serialized as `xne:rowSortMap` */
export class RowSortMap extends OxmlCompositeElement<RowSortMapItem> {

    public static override _Q = 'xne:rowSortMap';
    public static override _A = [':ref',':count',];
    /** Reference. Serialized as `:ref` */
    public get ref(): StringValue | undefined { return this._g(':ref'); }
    public set ref(v: StringValue | undefined) { this._s(':ref', v); }
    /** Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the Formula Class. Serialized as `xne:f` */
export class Formula extends OxmlLeafTextElement {

    public static override _Q = 'xne:f';

}
/** Defines the ReferenceSequence Class. Serialized as `xne:sqref` */
export class ReferenceSequence extends OxmlLeafTextElement {

    public static override _Q = 'xne:sqref';

}
/** Worksheet Sort Map. Serialized as `xne:worksheetSortMap` */
export class WorksheetSortMap extends OxmlPartRootElement<RowSortMap | ColumnSortMap> {

    public static override _Q = 'xne:worksheetSortMap';
    /** Row Sort Map. */
    public get rowSortMap(): RowSortMap | undefined { return this._f(RowSortMap); }
    /** Column Sort Map. */
    public get columnSortMap(): ColumnSortMap | undefined { return this._f(ColumnSortMap); }

}
/** Defines the Macrosheet Class. Serialized as `xne:macrosheet` */
export class Macrosheet extends OxmlPartRootElement<XSheetProperties | XSheetDimension | XSheetViews | XSheetFormatProperties | XColumns | XSheetData | XSheetProtection | XAutoFilter | XSortState | XDataConsolidate | XCustomSheetViews | XPhoneticProperties | XConditionalFormatting | XPrintOptions | XPageMargins | XPageSetup | XHeaderFooter | XRowBreaks | XColumnBreaks | XCustomProperties | XDrawing | XLegacyDrawing | XLegacyDrawingHeaderFooter | XPicture | XOleObjects | XDrawingHeaderFooter | XExtensionList> {

    public static override _Q = 'xne:macrosheet';
    /** Sheet Properties. */
    public get sheetProperties(): XSheetProperties | undefined { return this._f(XSheetProperties); }
    /** Macro Sheet Dimensions. */
    public get sheetDimension(): XSheetDimension | undefined { return this._f(XSheetDimension); }
    /** Macro Sheet Views. */
    public get sheetViews(): XSheetViews | undefined { return this._f(XSheetViews); }
    /** Sheet Format Properties. */
    public get sheetFormatProperties(): XSheetFormatProperties | undefined { return this._f(XSheetFormatProperties); }

}

export function initOfficeExcelNamespace() {
    SortMapItemType._D = {
        ':newVal': new OxmlAttr(':newVal', OxmlType.UInt32Value),
        ':oldVal': new OxmlAttr(':oldVal', OxmlType.UInt32Value),
    };
    ColumnSortMap._C = {
        'xne:col': ColumnSortMapItem,
    };
    ColumnSortMap._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    RowSortMap._C = {
        'xne:row': RowSortMapItem,
    };
    RowSortMap._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    WorksheetSortMap._C = {
        'xne:rowSortMap': RowSortMap,
        'xne:colSortMap': ColumnSortMap,
    };
    Macrosheet._C = {
        'x:sheetPr': XSheetProperties,
        'x:dimension': XSheetDimension,
        'x:sheetViews': XSheetViews,
        'x:sheetFormatPr': XSheetFormatProperties,
        'x:cols': XColumns,
        'x:sheetData': XSheetData,
        'x:sheetProtection': XSheetProtection,
        'x:autoFilter': XAutoFilter,
        'x:sortState': XSortState,
        'x:dataConsolidate': XDataConsolidate,
        'x:customSheetViews': XCustomSheetViews,
        'x:phoneticPr': XPhoneticProperties,
        'x:conditionalFormatting': XConditionalFormatting,
        'x:printOptions': XPrintOptions,
        'x:pageMargins': XPageMargins,
        'x:pageSetup': XPageSetup,
        'x:headerFooter': XHeaderFooter,
        'x:rowBreaks': XRowBreaks,
        'x:colBreaks': XColumnBreaks,
        'x:customProperties': XCustomProperties,
        'x:drawing': XDrawing,
        'x:legacyDrawing': XLegacyDrawing,
        'x:legacyDrawingHF': XLegacyDrawingHeaderFooter,
        'x:picture': XPicture,
        'x:oleObjects': XOleObjects,
        'x:drawingHF': XDrawingHeaderFooter,
        'x:extLst': XExtensionList,
    };
    return {
        prefix: 'xne',
        xmlns: 'http://schemas.microsoft.com/office/excel/2006/main',
    };
}
