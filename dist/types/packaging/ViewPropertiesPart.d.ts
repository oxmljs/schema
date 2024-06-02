import { ViewProperties } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';
import { SlidePart } from './SlidePart';
export declare class ViewPropertiesPart extends OxmlPart<ViewProperties> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ViewProperties;
    get viewProps(): ViewProperties | undefined;
    set viewProps(root: ViewProperties | undefined);
    get slideParts(): SlidePart[];
}
