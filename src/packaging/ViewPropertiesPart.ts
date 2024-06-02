import { ViewProperties } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';
import { SlidePart } from './SlidePart';

export class ViewPropertiesPart extends OxmlPart<ViewProperties> {

    public static override _N = 'ViewPropertiesPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps';
    public static override _C = 'application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml';
    public static _P = '.';
    public static _T = 'viewProps';
    public static override _E = ViewProperties;

    public get viewProps() { return this._r; }
    public set viewProps(root: ViewProperties | undefined) { this._r = root; }

    public get slideParts() { return this._m<SlidePart>('SlidePart'); }

}
