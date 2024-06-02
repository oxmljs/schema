import { OxmlPackage } from "./OxmlPackage";
import { oxmlParse } from "./OxmlParser";
import { OxmlPart } from "./OxmlPart";
import { Relationship, Relationships } from "./schema/Relationships";

export class OxmlPartContainer {

    public static registry: { [k: string]: new (pkg: OxmlPackage) => OxmlPart } = {};

    public uri = '';
    private readonly children: OxmlPart<any>[] = [];
    private readonly relationships: Relationship[] = [];

    protected readonly _pkg: boolean = false;

    constructor(protected readonly pkg: OxmlPackage) {
        if (!pkg) {
            this.pkg = this as any as OxmlPackage;
        }
    }

    public addPart<T extends OxmlPart<any>>(type: new (pkg: OxmlPackage) => T): T {
        return this._a<T>(type);
    }

    protected _f<T extends OxmlPart<any>>(rel: string): T | undefined {
        const children = this.children;
        const childrenLength = children.length;
        for (let i = 0; i < childrenLength; ++i) {
            const child = children[i];
            const ctr = child.constructor as typeof OxmlPart;
            if (ctr._N === rel) return child as T;
        }
        return undefined;
    }

    protected _m<T extends OxmlPart<any>>(rel: string): T[] {
        const children = this.children;
        const childrenLength = children.length;
        const result = [];
        for (let i = 0; i < childrenLength; ++i) {
            const child = children[i];
            const ctr = child.constructor as typeof OxmlPart;
            if (ctr._N === rel) result.push(child as T);
        }
        return result;
    }

    protected _a<T extends OxmlPart<any>>(type: new (pkg: OxmlPackage) => T): T {
        const part = new type(this.pkg);
        this.children.push(part);
        return part;
    }

    protected async load() {
        if (!this.uri && this.pkg !== this as any) return;
        const uriParts = this.uri.split('/');
        const fileName = uriParts.pop() || '';
        uriParts.push('_rels');
        uriParts.push(fileName + '.rels');
        const relsUri = uriParts.join('/');
        const xml = await this.pkg.getContents(relsUri);
        if (!xml) return;
        const relationships = oxmlParse(xml as string, Relationships) as Relationships;

        await Promise.all(relationships.children.map(rel => {
            if (!(rel instanceof Relationship)) return;
            this.relationships.push(rel);
            if (!rel.type || !rel.target) return;
            const parts = this.uri.split('/');
            parts.pop();
            parts.push(rel.target);
            const uri = parts.join('/');
            const ct = this.pkg.getContentType(uri);
            if (!ct) return;
            const partConstructor = OxmlPartContainer.registry[rel.type + '|' + ct]
                || OxmlPartContainer.registry[rel.type + '|*'];
            if (!partConstructor) return;
            const part = this._a(partConstructor);
            part.uri = uri;
            return part.load();
        }));
    }

}
