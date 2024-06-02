import { TagList } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';
export declare class UserDefinedTagsPart extends OxmlPart<TagList> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof TagList;
    get tag(): TagList | undefined;
    set tag(root: TagList | undefined);
}
