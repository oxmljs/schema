import { Taskpanes } from '../schema/Office2013/WebExtentionPane';
import { OxmlPart } from '../framework/OxmlPart';
import { WebExtensionPart } from './WebExtensionPart';
export declare class WebExTaskpanesPart extends OxmlPart<Taskpanes> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _PW: string;
    static _PE: string;
    static _PP: string;
    static _T: string;
    static _E: typeof Taskpanes;
    get taskpanes(): Taskpanes | undefined;
    set taskpanes(root: Taskpanes | undefined);
    get webExtensionParts(): WebExtensionPart[];
}
