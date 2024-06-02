import { MapInfo } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class CustomXmlMappingsPart extends OxmlPart<MapInfo> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof MapInfo;
    get xmlMaps(): MapInfo | undefined;
    set xmlMaps(root: MapInfo | undefined);
}
