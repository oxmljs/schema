import { TagList } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';

export class UserDefinedTagsPart extends OxmlPart<TagList> {

    public static override _N = 'UserDefinedTagsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/tags';
    public static override _C = 'application/vnd.openxmlformats-officedocument.presentationml.tags+xml';
    public static _P = 'tags';
    public static _T = 'tag';
    public static override _E = TagList;

    public get tag() { return this._r; }
    public set tag(root: TagList | undefined) { this._r = root; }


}
