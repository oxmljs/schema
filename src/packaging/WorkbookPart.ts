import { Workbook } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { CustomXmlPart } from './CustomXmlPart';
import { CalculationChainPart } from './CalculationChainPart';
import { CellMetadataPart } from './CellMetadataPart';
import { ConnectionsPart } from './ConnectionsPart';
import { CustomXmlMappingsPart } from './CustomXmlMappingsPart';
import { SharedStringTablePart } from './SharedStringTablePart';
import { WorkbookRevisionHeaderPart } from './WorkbookRevisionHeaderPart';
import { WorkbookUserDataPart } from './WorkbookUserDataPart';
import { WorkbookStylesPart } from './WorkbookStylesPart';
import { ThemePart } from './ThemePart';
import { ThumbnailPart } from './ThumbnailPart';
import { VolatileDependenciesPart } from './VolatileDependenciesPart';
import { ChartsheetPart } from './ChartsheetPart';
import { DialogsheetPart } from './DialogsheetPart';
import { ExternalWorkbookPart } from './ExternalWorkbookPart';
import { PivotTableCacheDefinitionPart } from './PivotTableCacheDefinitionPart';
import { WorksheetPart } from './WorksheetPart';
import { ExcelAttachedToolbarsPart } from './ExcelAttachedToolbarsPart';
import { VbaProjectPart } from './VbaProjectPart';
import { MacroSheetPart } from './MacroSheetPart';
import { InternationalMacroSheetPart } from './InternationalMacroSheetPart';
import { CustomDataPropertiesPart } from './CustomDataPropertiesPart';
import { SlicerCachePart } from './SlicerCachePart';
import { TimeLineCachePart } from './TimeLineCachePart';
import { WorkbookPersonPart } from './WorkbookPersonPart';
import { RdRichValuePart } from './RdRichValuePart';
import { RdRichValueStructurePart } from './RdRichValueStructurePart';
import { RdArrayPart } from './RdArrayPart';
import { RichStylesPart } from './RichStylesPart';
import { RdSupportingPropertyBagPart } from './RdSupportingPropertyBagPart';
import { RdSupportingPropertyBagStructurePart } from './RdSupportingPropertyBagStructurePart';
import { RdRichValueTypesPart } from './RdRichValueTypesPart';
import { RdRichValueWebImagePart } from './RdRichValueWebImagePart';

export class WorkbookPart extends OxmlPart<Workbook> {

    public static override _N = 'WorkbookPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument';
    public static override _C = '*';
    public static _P = 'xl';
    public static _T = 'workbook';
    public static override _E = Workbook;

    public get workbook() { return this._r; }
    public set workbook(root: Workbook | undefined) { this._r = root; }

    public get customXmlParts() { return this._m<CustomXmlPart>('CustomXmlPart'); }
    public get calculationChainPart() { return this._f<CalculationChainPart>('CalculationChainPart'); }
    public get cellMetadataPart() { return this._f<CellMetadataPart>('CellMetadataPart'); }
    public get connectionsPart() { return this._f<ConnectionsPart>('ConnectionsPart'); }
    public get customXmlMappingsPart() { return this._f<CustomXmlMappingsPart>('CustomXmlMappingsPart'); }
    public get sharedStringTablePart() { return this._f<SharedStringTablePart>('SharedStringTablePart'); }
    public get workbookRevisionHeaderPart() { return this._f<WorkbookRevisionHeaderPart>('WorkbookRevisionHeaderPart'); }
    public get workbookUserDataPart() { return this._f<WorkbookUserDataPart>('WorkbookUserDataPart'); }
    public get workbookStylesPart() { return this._f<WorkbookStylesPart>('WorkbookStylesPart'); }
    public get themePart() { return this._f<ThemePart>('ThemePart'); }
    public get thumbnailPart() { return this._f<ThumbnailPart>('ThumbnailPart'); }
    public get volatileDependenciesPart() { return this._f<VolatileDependenciesPart>('VolatileDependenciesPart'); }
    public get chartsheetParts() { return this._m<ChartsheetPart>('ChartsheetPart'); }
    public get dialogsheetParts() { return this._m<DialogsheetPart>('DialogsheetPart'); }
    public get externalWorkbookParts() { return this._m<ExternalWorkbookPart>('ExternalWorkbookPart'); }
    public get pivotTableCacheDefinitionParts() { return this._m<PivotTableCacheDefinitionPart>('PivotTableCacheDefinitionPart'); }
    public get worksheetParts() { return this._m<WorksheetPart>('WorksheetPart'); }
    public get excelAttachedToolbarsPart() { return this._f<ExcelAttachedToolbarsPart>('ExcelAttachedToolbarsPart'); }
    public get vbaProjectPart() { return this._f<VbaProjectPart>('VbaProjectPart'); }
    public get macroSheetParts() { return this._m<MacroSheetPart>('MacroSheetPart'); }
    public get internationalMacroSheetParts() { return this._m<InternationalMacroSheetPart>('InternationalMacroSheetPart'); }
    public get customDataPropertiesParts() { return this._m<CustomDataPropertiesPart>('CustomDataPropertiesPart'); }
    public get slicerCacheParts() { return this._m<SlicerCachePart>('SlicerCachePart'); }
    public get timeLineCacheParts() { return this._m<TimeLineCachePart>('TimeLineCachePart'); }
    public get workbookPersonParts() { return this._m<WorkbookPersonPart>('WorkbookPersonPart'); }
    public get rdRichValueParts() { return this._m<RdRichValuePart>('RdRichValuePart'); }
    public get cT_RdRichValueStructureParts() { return this._m<RdRichValueStructurePart>('RdRichValueStructurePart'); }
    public get rdArrayParts() { return this._m<RdArrayPart>('RdArrayPart'); }
    public get richStylesParts() { return this._m<RichStylesPart>('RichStylesPart'); }
    public get rdSupportingPropertyBagParts() { return this._m<RdSupportingPropertyBagPart>('RdSupportingPropertyBagPart'); }
    public get rdSupportingPropertyBagStructureParts() { return this._m<RdSupportingPropertyBagStructurePart>('RdSupportingPropertyBagStructurePart'); }
    public get rdRichValueTypesParts() { return this._m<RdRichValueTypesPart>('RdRichValueTypesPart'); }
    public get rdRichValueWebImagePart() { return this._f<RdRichValueWebImagePart>('RdRichValueWebImagePart'); }

}
