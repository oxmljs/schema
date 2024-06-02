import { DatastoreItem } from '../schema/Office2010/Excel';
import { OxmlPart } from '../framework/OxmlPart';
import { CustomDataPart } from './CustomDataPart';

export class CustomDataPropertiesPart extends OxmlPart<DatastoreItem> {

    public static override _N = 'CustomDataPropertiesPart';
    public static override _R = 'http://schemas.microsoft.com/office/2007/relationships/customDataProps';
    public static override _C = 'application/vnd.ms-excel.customDataProperties+xml';
    public static _P = 'customData';
    public static _T = 'customDataProps';
    public static override _E = DatastoreItem;

    public get customDataProps() { return this._r; }
    public set customDataProps(root: DatastoreItem | undefined) { this._r = root; }

    public get customDataPart() { return this._f<CustomDataPart>('CustomDataPart'); }

}
