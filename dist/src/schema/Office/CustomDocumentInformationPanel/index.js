import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
class CustomPropertyEditor extends OxmlCompositeElement {
  static _Q = "cdip:customPropertyEditor";
  /** Returns PropertyEditorNamespace. */
  get propertyEditorNamespace() {
    return this._f(PropertyEditorNamespace);
  }
  /** Returns XsnFileLocation. */
  get xsnFileLocation() {
    return this._f(XsnFileLocation);
  }
}
class ShowOnOpen extends OxmlLeafTextElement {
  static _Q = "cdip:showOnOpen";
}
class XsnFileLocation extends OxmlLeafTextElement {
  static _Q = "cdip:XSNLocation";
}
class DefaultPropertyEditorNamespace extends OxmlLeafTextElement {
  static _Q = "cdip:defaultPropertyEditorNamespace";
}
class PropertyEditorNamespace extends OxmlLeafTextElement {
  static _Q = "cdip:XMLNamespace";
}
class CustomPropertyEditors extends OxmlCompositeElement {
  static _Q = "cdip:customPropertyEditors";
  /** Returns ShowOnOpen. */
  get showOnOpen() {
    return this._f(ShowOnOpen);
  }
  /** Returns DefaultPropertyEditorNamespace. */
  get defaultPropertyEditorNamespace() {
    return this._f(DefaultPropertyEditorNamespace);
  }
}
function initOfficeCustomDocumentInformationPanelNamespace() {
  CustomPropertyEditor._C = {
    "cdip:XMLNamespace": PropertyEditorNamespace,
    "cdip:XSNLocation": XsnFileLocation
  };
  CustomPropertyEditors._C = {
    "cdip:showOnOpen": ShowOnOpen,
    "cdip:defaultPropertyEditorNamespace": DefaultPropertyEditorNamespace,
    "cdip:customPropertyEditor": CustomPropertyEditor
  };
  return {
    prefix: "cdip",
    xmlns: "http://schemas.microsoft.com/office/2006/customDocumentInformationPanel"
  };
}
export {
  CustomPropertyEditor,
  CustomPropertyEditors,
  DefaultPropertyEditorNamespace,
  PropertyEditorNamespace,
  ShowOnOpen,
  XsnFileLocation,
  initOfficeCustomDocumentInformationPanelNamespace
};
