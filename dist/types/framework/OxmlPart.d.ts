import { OxmlElement } from "./OxmlElement";
import { OxmlPartContainer } from "./OxmlPartContainer";
import { OxmlPartRootElement } from "./OxmlPartRootElement";
export declare abstract class OxmlPart<Root extends OxmlPartRootElement = any> extends OxmlPartContainer {
    static _R: string;
    static _N: string;
    static _C: string;
    static _E?: new () => OxmlElement;
    protected _r?: Root;
    load(): Promise<void>;
}
