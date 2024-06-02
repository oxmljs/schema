import { DatastoreItem } from '../schema/Office2010/Excel';
import { OxmlPart } from '../framework/OxmlPart';
import { CustomDataPart } from './CustomDataPart';
export declare class CustomDataPropertiesPart extends OxmlPart<DatastoreItem> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof DatastoreItem;
    get customDataProps(): DatastoreItem | undefined;
    set customDataProps(root: DatastoreItem | undefined);
    get customDataPart(): CustomDataPart | undefined;
}
