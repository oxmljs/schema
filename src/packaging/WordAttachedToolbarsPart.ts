import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class WordAttachedToolbarsPart extends OxmlPart {

    public static override _N = 'WordAttachedToolbarsPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/attachedToolbars';
    public static override _C = 'application/vnd.ms-word.attachedToolbars';
    public static _P = '.';
    public static _T = 'attachedToolbars';
    public get attachedToolbars() { return this._r; }
    public set attachedToolbars(root: OxmlElement | undefined) { this._r = root; }


}
