import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
/** Defines the SVGBlip Class. Serialized as `asvg:svgBlip` */
export declare class SVGBlip extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    get embed(): StringValue | undefined;
    set embed(v: StringValue | undefined);
    /** Linked Picture Reference. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
}
export declare function initOffice2019DrawingSVGNamespace(): {
    prefix: string;
    xmlns: string;
};
