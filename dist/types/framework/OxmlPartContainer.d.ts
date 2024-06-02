import { OxmlPackage } from "./OxmlPackage";
import { OxmlPart } from "./OxmlPart";
export declare class OxmlPartContainer {
    protected readonly pkg: OxmlPackage;
    static registry: {
        [k: string]: new (pkg: OxmlPackage) => OxmlPart;
    };
    uri: string;
    private readonly children;
    private readonly relationships;
    protected readonly _pkg: boolean;
    constructor(pkg: OxmlPackage);
    addPart<T extends OxmlPart<any>>(type: new (pkg: OxmlPackage) => T): T;
    protected _f<T extends OxmlPart<any>>(rel: string): T | undefined;
    protected _m<T extends OxmlPart<any>>(rel: string): T[];
    protected _a<T extends OxmlPart<any>>(type: new (pkg: OxmlPackage) => T): T;
    protected load(): Promise<void>;
}
