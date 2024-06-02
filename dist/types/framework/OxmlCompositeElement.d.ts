import { OxmlElement } from "./OxmlElement";
export declare abstract class OxmlCompositeElement<TChild extends OxmlElement = OxmlElement> extends OxmlElement {
    static _C: {
        [q: string]: new (q?: string) => OxmlElement;
    };
    addChild(c: TChild): void;
    private _c;
    get children(): readonly TChild[];
    protected _f<T extends OxmlElement>(type: new () => T): T | undefined;
}
