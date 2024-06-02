import { Properties } from '../schema/CustomProperties';
import { OxmlPart } from '../framework/OxmlPart';
export declare class CustomFilePropertiesPart extends OxmlPart<Properties> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Properties;
    get custom(): Properties | undefined;
    set custom(root: Properties | undefined);
}
