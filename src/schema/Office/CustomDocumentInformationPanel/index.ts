import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';


/** Defines the CustomPropertyEditor Class. Serialized as `cdip:customPropertyEditor` */
export class CustomPropertyEditor extends OxmlCompositeElement<PropertyEditorNamespace | XsnFileLocation> {

    public static override _Q = 'cdip:customPropertyEditor';
    /** Returns PropertyEditorNamespace. */
    public get propertyEditorNamespace(): PropertyEditorNamespace | undefined { return this._f(PropertyEditorNamespace); }
    /** Returns XsnFileLocation. */
    public get xsnFileLocation(): XsnFileLocation | undefined { return this._f(XsnFileLocation); }

}
/** Defines the ShowOnOpen Class. Serialized as `cdip:showOnOpen` */
export class ShowOnOpen extends OxmlLeafTextElement {

    public static override _Q = 'cdip:showOnOpen';

}
/** Defines the XsnFileLocation Class. Serialized as `cdip:XSNLocation` */
export class XsnFileLocation extends OxmlLeafTextElement {

    public static override _Q = 'cdip:XSNLocation';

}
/** Defines the DefaultPropertyEditorNamespace Class. Serialized as `cdip:defaultPropertyEditorNamespace` */
export class DefaultPropertyEditorNamespace extends OxmlLeafTextElement {

    public static override _Q = 'cdip:defaultPropertyEditorNamespace';

}
/** Defines the PropertyEditorNamespace Class. Serialized as `cdip:XMLNamespace` */
export class PropertyEditorNamespace extends OxmlLeafTextElement {

    public static override _Q = 'cdip:XMLNamespace';

}
/** Defines the CustomPropertyEditors Class. Serialized as `cdip:customPropertyEditors` */
export class CustomPropertyEditors extends OxmlCompositeElement<ShowOnOpen | DefaultPropertyEditorNamespace | CustomPropertyEditor> {

    public static override _Q = 'cdip:customPropertyEditors';
    /** Returns ShowOnOpen. */
    public get showOnOpen(): ShowOnOpen | undefined { return this._f(ShowOnOpen); }
    /** Returns DefaultPropertyEditorNamespace. */
    public get defaultPropertyEditorNamespace(): DefaultPropertyEditorNamespace | undefined { return this._f(DefaultPropertyEditorNamespace); }

}

export function initOfficeCustomDocumentInformationPanelNamespace() {
    CustomPropertyEditor._C = {
        'cdip:XMLNamespace': PropertyEditorNamespace,
        'cdip:XSNLocation': XsnFileLocation,
    };
    CustomPropertyEditors._C = {
        'cdip:showOnOpen': ShowOnOpen,
        'cdip:defaultPropertyEditorNamespace': DefaultPropertyEditorNamespace,
        'cdip:customPropertyEditor': CustomPropertyEditor,
    };
    return {
        prefix: 'cdip',
        xmlns: 'http://schemas.microsoft.com/office/2006/customDocumentInformationPanel',
    };
}
