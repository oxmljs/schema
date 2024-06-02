import { OxmlElement } from "./OxmlElement";

export abstract class OxmlCompositeElement<TChild extends OxmlElement = OxmlElement> extends OxmlElement {

    public static _C: { [q: string]: new (q?: string) => OxmlElement } = {};

    public addChild(c: TChild) {
        this._c.push(c);
    }

    private _c: TChild[] = [];

    public get children() {
        return this._c as readonly TChild[];
    }

    protected _f<T extends OxmlElement>(type: new () => T): T | undefined {
        const children = this._c;
        const childrenLength = children.length;
        for (let i = 0; i < childrenLength; ++i) {
            const child = children[i];
            if (child instanceof type) return child;
        }
        return undefined;
    }

}
