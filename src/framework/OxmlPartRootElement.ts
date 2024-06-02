import { OxmlCompositeElement } from "./OxmlCompositeElement";
import { OxmlElement } from "./OxmlElement";

export enum OxmlStandaloneValues {
    No = 'no',
    Yes = 'yes',
}

export abstract class OxmlPartRootElement<TChild extends OxmlElement = OxmlElement> extends OxmlCompositeElement<TChild> {
    public xmlVersion = '1.0';
    public xmlEncoding = 'utf-8';
    public xmlStandalone = OxmlStandaloneValues.Yes;
}
