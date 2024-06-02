import { SlideSyncProperties } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';

export class SlideSyncDataPart extends OxmlPart<SlideSyncProperties> {

    public static override _N = 'SlideSyncDataPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideUpdateInfo';
    public static override _C = 'application/vnd.openxmlformats-officedocument.presentationml.slideUpdateInfo+xml';
    public static _P = 'slideUpdateInfo';
    public static _T = 'slideUpdateInfo';
    public static override _E = SlideSyncProperties;

    public get slideUpdateInfo() { return this._r; }
    public set slideUpdateInfo(root: SlideSyncProperties | undefined) { this._r = root; }


}
