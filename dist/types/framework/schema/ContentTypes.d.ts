import { OxmlAttr } from '../OxmlAttr';
import { OxmlLeafElement } from '../OxmlLeafElement';
import { OxmlPartRootElement } from '../OxmlPartRootElement';
import { StringValue } from '../types/StringValue';
export declare class Default extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    static _D: {
        Extension: OxmlAttr;
        ContentType: OxmlAttr;
    };
    get extension(): StringValue | undefined;
    set extension(v: StringValue | undefined);
    get contentType(): StringValue | undefined;
    set contentType(v: StringValue | undefined);
}
export declare class Override extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    static _D: {
        PartName: OxmlAttr;
        ContentType: OxmlAttr;
    };
    get partName(): StringValue | undefined;
    set partName(v: StringValue | undefined);
    get contentType(): StringValue | undefined;
    set contentType(v: StringValue | undefined);
}
export declare class Types extends OxmlPartRootElement {
    static _Q: string;
    static _C: {
        Default: typeof Default;
        Override: typeof Override;
    };
}
