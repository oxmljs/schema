import { DataStoreItem } from '../schema/CustomXmlDataProperties';
import { OxmlPart } from '../framework/OxmlPart';
export declare class CustomXmlPropertiesPart extends OxmlPart<DataStoreItem> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof DataStoreItem;
    get itemProps(): DataStoreItem | undefined;
    set itemProps(root: DataStoreItem | undefined);
}
