import { OxmlAttr } from "./OxmlAttr";

export abstract class OxmlElement {

    /** Qualified Tag Name */
    public static _Q = '';

    /** Available Attributes Names Array */
    public static _A: readonly string[] = [] as const;

    /** Available Attributes Instances */
    public static _D: { readonly [attr_name: string]: OxmlAttr } = {} as const;

    /** Attributes Dictionary */
    private _a: { [attr_name: string]: any } = {};

    /** Qualified Tag Name */
    private _q: string;

    constructor(q?: string) {
        this._q = q || (this.constructor as typeof OxmlElement)._Q;
    }

    public getAttr(a: string) { return this._a[a]; }
    public delAttr(a: string) { delete this._a[a]; }
    public setAttr(a: string, v: any) { this._a[a] = v; }

    public parseAttr(a: string, v: string | undefined) {
        this._a[a] = v;
    }

    /** Get Attribute Value */
    protected _g(a: string) { return this._a[a]; }

    /** Set Attribute Value */
    protected _s(a: string, v: any) { this._a[a] = v; }

    public get qualifiedName() { return this._q; }

    public validate() {
        //const attrs = (this.constructor as typeof OxmlElement)._A;
        return true;
    }

}


