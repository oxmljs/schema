import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { VbaDataPart } from './VbaDataPart';
export declare class VbaProjectPart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get vbaProject(): OxmlElement | undefined;
    set vbaProject(root: OxmlElement | undefined);
    get vbaDataPart(): VbaDataPart | undefined;
}
