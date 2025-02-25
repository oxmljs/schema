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
export declare class WorkbookPart extends OxmlPart<Workbook> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Workbook;
    get workbook(): Workbook | undefined;
    set workbook(root: Workbook | undefined);
    get customXmlParts(): CustomXmlPart[];
    get calculationChainPart(): CalculationChainPart | undefined;
    get cellMetadataPart(): CellMetadataPart | undefined;
    get connectionsPart(): ConnectionsPart | undefined;
    get customXmlMappingsPart(): CustomXmlMappingsPart | undefined;
    get sharedStringTablePart(): SharedStringTablePart | undefined;
    get workbookRevisionHeaderPart(): WorkbookRevisionHeaderPart | undefined;
    get workbookUserDataPart(): WorkbookUserDataPart | undefined;
    get workbookStylesPart(): WorkbookStylesPart | undefined;
    get themePart(): ThemePart | undefined;
    get thumbnailPart(): ThumbnailPart | undefined;
    get volatileDependenciesPart(): VolatileDependenciesPart | undefined;
    get chartsheetParts(): ChartsheetPart[];
    get dialogsheetParts(): DialogsheetPart[];
    get externalWorkbookParts(): ExternalWorkbookPart[];
    get pivotTableCacheDefinitionParts(): PivotTableCacheDefinitionPart[];
    get worksheetParts(): WorksheetPart[];
    get excelAttachedToolbarsPart(): ExcelAttachedToolbarsPart | undefined;
    get vbaProjectPart(): VbaProjectPart | undefined;
    get macroSheetParts(): MacroSheetPart[];
    get internationalMacroSheetParts(): InternationalMacroSheetPart[];
    get customDataPropertiesParts(): CustomDataPropertiesPart[];
    get slicerCacheParts(): SlicerCachePart[];
    get timeLineCacheParts(): TimeLineCachePart[];
    get workbookPersonParts(): WorkbookPersonPart[];
    get rdRichValueParts(): RdRichValuePart[];
    get cT_RdRichValueStructureParts(): RdRichValueStructurePart[];
    get rdArrayParts(): RdArrayPart[];
    get richStylesParts(): RichStylesPart[];
    get rdSupportingPropertyBagParts(): RdSupportingPropertyBagPart[];
    get rdSupportingPropertyBagStructureParts(): RdSupportingPropertyBagStructurePart[];
    get rdRichValueTypesParts(): RdRichValueTypesPart[];
    get rdRichValueWebImagePart(): RdRichValueWebImagePart | undefined;
}
