import { Taskpanes } from '../schema/Office2013/WebExtentionPane';
import { OxmlPart } from '../framework/OxmlPart';
import { WebExtensionPart } from './WebExtensionPart';

export class WebExTaskpanesPart extends OxmlPart<Taskpanes> {

    public static override _N = 'WebExTaskpanesPart';
    public static override _R = 'http://schemas.microsoft.com/office/2011/relationships/webextensiontaskpanes';
    public static override _C = 'application/vnd.ms-office.webextensiontaskpanes+xml';
    public static _P = '../webextensions';
    public static _PW = 'word/webextensions';
    public static _PE = 'xl/webextensions';
    public static _PP = 'ppt/webextensions';
    public static _T = 'taskpanes';
    public static override _E = Taskpanes;

    public get taskpanes() { return this._r; }
    public set taskpanes(root: Taskpanes | undefined) { this._r = root; }

    public get webExtensionParts() { return this._m<WebExtensionPart>('WebExtensionPart'); }

}
