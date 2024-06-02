import { Worksheet } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { SpreadsheetPrinterSettingsPart } from './SpreadsheetPrinterSettingsPart';
import { DrawingsPart } from './DrawingsPart';
import { VmlDrawingPart } from './VmlDrawingPart';
import { WorksheetCommentsPart } from './WorksheetCommentsPart';
import { PivotTablePart } from './PivotTablePart';
import { SingleCellTablePart } from './SingleCellTablePart';
import { TableDefinitionPart } from './TableDefinitionPart';
import { EmbeddedControlPersistencePart } from './EmbeddedControlPersistencePart';
import { ControlPropertiesPart } from './ControlPropertiesPart';
import { EmbeddedObjectPart } from './EmbeddedObjectPart';
import { EmbeddedPackagePart } from './EmbeddedPackagePart';
import { ImagePart } from './ImagePart';
import { CustomPropertyPart } from './CustomPropertyPart';
import { WorksheetSortMapPart } from './WorksheetSortMapPart';
import { QueryTablePart } from './QueryTablePart';
import { EmbeddedControlPersistenceBinaryDataPart } from './EmbeddedControlPersistenceBinaryDataPart';
import { SlicersPart } from './SlicersPart';
import { TimeLinePart } from './TimeLinePart';
import { WorksheetThreadedCommentsPart } from './WorksheetThreadedCommentsPart';
import { Model3DReferenceRelationshipPart } from './Model3DReferenceRelationshipPart';
import { NamedSheetViewsPart } from './NamedSheetViewsPart';

export class WorksheetPart extends OxmlPart<Worksheet> {

    public static override _N = 'WorksheetPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml';
    public static _P = 'worksheets';
    public static _T = 'sheet';
    public static override _E = Worksheet;

    public get sheet() { return this._r; }
    public set sheet(root: Worksheet | undefined) { this._r = root; }

    public get spreadsheetPrinterSettingsParts() { return this._m<SpreadsheetPrinterSettingsPart>('SpreadsheetPrinterSettingsPart'); }
    public get drawingsPart() { return this._f<DrawingsPart>('DrawingsPart'); }
    public get vmlDrawingParts() { return this._m<VmlDrawingPart>('VmlDrawingPart'); }
    public get worksheetCommentsPart() { return this._f<WorksheetCommentsPart>('WorksheetCommentsPart'); }
    public get pivotTableParts() { return this._m<PivotTablePart>('PivotTablePart'); }
    public get singleCellTablePart() { return this._f<SingleCellTablePart>('SingleCellTablePart'); }
    public get tableDefinitionParts() { return this._m<TableDefinitionPart>('TableDefinitionPart'); }
    public get embeddedControlPersistenceParts() { return this._m<EmbeddedControlPersistencePart>('EmbeddedControlPersistencePart'); }
    public get controlPropertiesParts() { return this._m<ControlPropertiesPart>('ControlPropertiesPart'); }
    public get embeddedObjectParts() { return this._m<EmbeddedObjectPart>('EmbeddedObjectPart'); }
    public get embeddedPackageParts() { return this._m<EmbeddedPackagePart>('EmbeddedPackagePart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }
    public get customPropertyParts() { return this._m<CustomPropertyPart>('CustomPropertyPart'); }
    public get worksheetSortMapPart() { return this._f<WorksheetSortMapPart>('WorksheetSortMapPart'); }
    public get queryTableParts() { return this._m<QueryTablePart>('QueryTablePart'); }
    public get embeddedControlPersistenceBinaryDataParts() { return this._m<EmbeddedControlPersistenceBinaryDataPart>('EmbeddedControlPersistenceBinaryDataPart'); }
    public get slicersParts() { return this._m<SlicersPart>('SlicersPart'); }
    public get timeLineParts() { return this._m<TimeLinePart>('TimeLinePart'); }
    public get worksheetThreadedCommentsParts() { return this._m<WorksheetThreadedCommentsPart>('WorksheetThreadedCommentsPart'); }
    public get model3DReferenceRelationshipParts() { return this._m<Model3DReferenceRelationshipPart>('Model3DReferenceRelationshipPart'); }
    public get namedSheetViewsParts() { return this._m<NamedSheetViewsPart>('NamedSheetViewsPart'); }

}
