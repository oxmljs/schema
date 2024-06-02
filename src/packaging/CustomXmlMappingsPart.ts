import { MapInfo } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class CustomXmlMappingsPart extends OxmlPart<MapInfo> {

    public static override _N = 'CustomXmlMappingsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/xmlMaps';
    public static override _C = 'application/xml';
    public static _P = '.';
    public static _T = 'xmlMaps';
    public static override _E = MapInfo;

    public get xmlMaps() { return this._r; }
    public set xmlMaps(root: MapInfo | undefined) { this._r = root; }


}
