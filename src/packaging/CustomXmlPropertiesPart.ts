import { DataStoreItem } from '../schema/CustomXmlDataProperties';
import { OxmlPart } from '../framework/OxmlPart';

export class CustomXmlPropertiesPart extends OxmlPart<DataStoreItem> {

    public static override _N = 'CustomXmlPropertiesPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps';
    public static override _C = 'application/vnd.openxmlformats-officedocument.customXmlProperties+xml';
    public static _P = '.';
    public static _T = 'itemProps';
    public static override _E = DataStoreItem;

    public get itemProps() { return this._r; }
    public set itemProps(root: DataStoreItem | undefined) { this._r = root; }


}
