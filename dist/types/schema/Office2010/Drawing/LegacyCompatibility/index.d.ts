import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
/** Defines the CompatibilityShape Class. Serialized as `com14:compatSp` */
export declare class CompatibilityShape extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** spid. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
}
export declare function initOffice2010DrawingLegacyCompatibilityNamespace(): {
    prefix: string;
    xmlns: string;
};
