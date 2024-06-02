import { OxmlCompositeElement } from "./OxmlCompositeElement";
import { OxmlElement } from "./OxmlElement";
export declare enum OxmlStandaloneValues {
    No = "no",
    Yes = "yes"
}
export declare abstract class OxmlPartRootElement<TChild extends OxmlElement = OxmlElement> extends OxmlCompositeElement<TChild> {
    xmlVersion: string;
    xmlEncoding: string;
    xmlStandalone: OxmlStandaloneValues;
}
