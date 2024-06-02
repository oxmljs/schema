import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
/** Defines the CustomPropertyEditor Class. Serialized as `cdip:customPropertyEditor` */
export declare class CustomPropertyEditor extends OxmlCompositeElement<PropertyEditorNamespace | XsnFileLocation> {
    static _Q: string;
    /** Returns PropertyEditorNamespace. */
    get propertyEditorNamespace(): PropertyEditorNamespace | undefined;
    /** Returns XsnFileLocation. */
    get xsnFileLocation(): XsnFileLocation | undefined;
}
/** Defines the ShowOnOpen Class. Serialized as `cdip:showOnOpen` */
export declare class ShowOnOpen extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the XsnFileLocation Class. Serialized as `cdip:XSNLocation` */
export declare class XsnFileLocation extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the DefaultPropertyEditorNamespace Class. Serialized as `cdip:defaultPropertyEditorNamespace` */
export declare class DefaultPropertyEditorNamespace extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the PropertyEditorNamespace Class. Serialized as `cdip:XMLNamespace` */
export declare class PropertyEditorNamespace extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the CustomPropertyEditors Class. Serialized as `cdip:customPropertyEditors` */
export declare class CustomPropertyEditors extends OxmlCompositeElement<ShowOnOpen | DefaultPropertyEditorNamespace | CustomPropertyEditor> {
    static _Q: string;
    /** Returns ShowOnOpen. */
    get showOnOpen(): ShowOnOpen | undefined;
    /** Returns DefaultPropertyEditorNamespace. */
    get defaultPropertyEditorNamespace(): DefaultPropertyEditorNamespace | undefined;
}
export declare function initOfficeCustomDocumentInformationPanelNamespace(): {
    prefix: string;
    xmlns: string;
};
