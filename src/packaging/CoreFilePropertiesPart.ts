import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class CoreFilePropertiesPart extends OxmlPart {

    public static override _N = 'CoreFilePropertiesPart';
    public static override _R = 'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties';
    public static override _C = 'application/vnd.openxmlformats-package.core-properties+xml';
    public static _P = 'docProps';
    public static _T = 'core';
    public get core() { return this._r; }
    public set core(root: OxmlElement | undefined) { this._r = root; }


}
