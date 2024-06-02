import { OxmlAttr } from "./OxmlAttr";
export declare abstract class OxmlElement {
    static _Q: string;
    static _A: readonly string[];
    static _D: {
        readonly [k: string]: OxmlAttr;
    };
    private _a;
    private _q;
    constructor(q?: string);
    getAttr(a: string): any;
    delAttr(a: string): void;
    setAttr(a: string, v: any): void;
    parseAttr(a: string, v: string | undefined): void;
    protected _g(a: string): any;
    protected _s(a: string, v: any): void;
    get qualifiedName(): string;
    validate(): boolean;
}
