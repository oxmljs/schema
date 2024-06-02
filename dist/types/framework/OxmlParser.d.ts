import { OxmlElement } from "./OxmlElement";
import { OxmlPartRootElement } from "./OxmlPartRootElement";
export declare function oxmlParse(xml: string, rootConstructor: new () => OxmlElement): OxmlPartRootElement;
