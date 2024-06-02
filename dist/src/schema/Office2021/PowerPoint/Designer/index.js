import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as PExtension } from "../../../Presentation";
class ExtensionList extends OxmlCompositeElement {
  static _Q = "p202:extLst";
}
class DesignerTag extends OxmlLeafElement {
  static _Q = "p202:designTag";
  static _A = [":name", ":val"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class DesignerDrawingProps extends OxmlCompositeElement {
  static _Q = "p202:designPr";
  static _A = [":edtDesignElem"];
  /** edtDesignElem. Serialized as `:edtDesignElem` */
  get edtDesignElem() {
    return this._g(":edtDesignElem");
  }
  set edtDesignElem(v) {
    this._s(":edtDesignElem", v);
  }
  /** Returns DesignerTagList. */
  get designerTagList() {
    return this._f(DesignerTagList);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class DesignerTagList extends OxmlCompositeElement {
  static _Q = "p202:designTagLst";
}
function initOffice2021PowerPointDesignerNamespace() {
  ExtensionList._C = {
    "p:ext": PExtension
  };
  DesignerTag._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  DesignerDrawingProps._C = {
    "p202:designTagLst": DesignerTagList,
    "p202:extLst": ExtensionList
  };
  DesignerDrawingProps._D = {
    ":edtDesignElem": new OxmlAttr(":edtDesignElem", OxmlType.BooleanValue)
  };
  DesignerTagList._C = {
    "p202:designTag": DesignerTag
  };
  return {
    prefix: "p202",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2020/02/main"
  };
}
export {
  DesignerDrawingProps,
  DesignerTag,
  DesignerTagList,
  ExtensionList,
  initOffice2021PowerPointDesignerNamespace
};
