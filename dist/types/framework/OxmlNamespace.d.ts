import { OxmlElement } from './OxmlElement';
export interface OxmlNamespace {
    name: string;
    prefix: string;
    xmlns: string;
    elements: {
        [k: string]: new () => OxmlElement;
    };
}
