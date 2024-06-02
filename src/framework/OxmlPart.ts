
import { OxmlElement } from "./OxmlElement";
import { oxmlParse } from "./OxmlParser";
import { OxmlPartContainer } from "./OxmlPartContainer";
import { OxmlPartRootElement } from "./OxmlPartRootElement";

export abstract class OxmlPart<Root extends OxmlPartRootElement = any> extends OxmlPartContainer {

    public static _R = '';
    public static _N = '';
    public static _C = '';
    public static _E?: new () => OxmlElement;

    protected _r?: Root;

    public override async load() {
        await super.load();
        const rootElementTag = (this.constructor as typeof OxmlPart)._E;
        if (!rootElementTag) return;
        const xml = await this.pkg.getContents(this.uri, 'string') as string;
        if (!xml) throw new Error('content_miss');
        this._r = oxmlParse(xml, rootElementTag) as Root;
    }

}
