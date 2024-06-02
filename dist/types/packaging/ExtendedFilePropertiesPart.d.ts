import { Properties } from '../schema/ExtendedProperties';
import { OxmlPart } from '../framework/OxmlPart';
export declare class ExtendedFilePropertiesPart extends OxmlPart<Properties> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Properties;
    get app(): Properties | undefined;
    set app(root: Properties | undefined);
}
