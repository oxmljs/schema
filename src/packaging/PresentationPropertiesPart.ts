import { PresentationProperties } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';

export class PresentationPropertiesPart extends OxmlPart<PresentationProperties> {

    public static override _N = 'PresentationPropertiesPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps';
    public static override _C = 'application/vnd.openxmlformats-officedocument.presentationml.presProps+xml';
    public static _P = '.';
    public static _T = 'presProps';
    public static override _E = PresentationProperties;

    public get presProps() { return this._r; }
    public set presProps(root: PresentationProperties | undefined) { this._r = root; }


}
