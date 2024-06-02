import { SlideSyncProperties } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';
export declare class SlideSyncDataPart extends OxmlPart<SlideSyncProperties> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof SlideSyncProperties;
    get slideUpdateInfo(): SlideSyncProperties | undefined;
    set slideUpdateInfo(root: SlideSyncProperties | undefined);
}
