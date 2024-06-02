import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class SlideMoniker extends OxmlLeafElement {
  static _Q = "pc:sldMk";
  static _A = [":cId", ":sldId"];
  /** cId. Serialized as `:cId` */
  get cId() {
    return this._g(":cId");
  }
  set cId(v) {
    this._s(":cId", v);
  }
  /** sldId. Serialized as `:sldId` */
  get sldId() {
    return this._g(":sldId");
  }
  set sldId(v) {
    this._s(":sldId", v);
  }
}
class DocumentMoniker extends OxmlLeafElement {
  static _Q = "pc:docMk";
}
class CustomXmlPartMonikerList extends OxmlCompositeElement {
  static _Q = "pc:cXmlMkLst";
}
class DesignerTagMonikerList extends OxmlCompositeElement {
  static _Q = "pc:designTagMkLst";
}
class SectionLinkObjMonikerList extends OxmlCompositeElement {
  static _Q = "pc:sectionLnkObjMkLst";
}
class SummaryZoomMonikerList extends OxmlCompositeElement {
  static _Q = "pc:tocMkLst";
}
class OsfTaskPaneAppMonikerList extends OxmlCompositeElement {
  static _Q = "pc:tkAppMkLst";
}
class OpenXmlAnimationEffectMonikerListElement extends OxmlCompositeElement {
}
class AnimEffectParentMkLstAnimationEffectMonikerList extends OpenXmlAnimationEffectMonikerListElement {
  static _Q = "pc:animEffectParentMkLst";
}
class AnimEffectMkLstAnimationEffectMonikerList extends OpenXmlAnimationEffectMonikerListElement {
  static _Q = "pc:animEffectMkLst";
}
class HandoutMonikerList extends OxmlCompositeElement {
  static _Q = "pc:handoutMkLst";
}
class NotesMasterMonikerList extends OxmlCompositeElement {
  static _Q = "pc:notesMasterMkLst";
}
class NotesTextMonikerList extends OxmlCompositeElement {
  static _Q = "pc:notesTxtMkLst";
}
class NotesMonikerList extends OxmlCompositeElement {
  static _Q = "pc:notesMkLst";
}
class SlidePosMonikerList extends OxmlCompositeElement {
  static _Q = "pc:sldPosMkLst";
}
class SlideMonikerList extends OxmlCompositeElement {
  static _Q = "pc:sldMkLst";
  /** Returns DocumentMoniker. */
  get documentMoniker() {
    return this._f(DocumentMoniker);
  }
  /** Returns SlideMoniker. */
  get slideMoniker() {
    return this._f(SlideMoniker);
  }
}
class MainMasterMonikerList extends OxmlCompositeElement {
  static _Q = "pc:sldMasterMkLst";
}
class SlideLayoutMonikerList extends OxmlCompositeElement {
  static _Q = "pc:sldLayoutMkLst";
}
class SlideBaseMonikerList extends OxmlCompositeElement {
  static _Q = "pc:sldBaseMkLst";
}
class SectionMonikerList extends OxmlCompositeElement {
  static _Q = "pc:sectionMkLst";
}
class DocumentMonikerList extends OxmlCompositeElement {
  static _Q = "pc:docMkLst";
}
class CustomShowMonikerList extends OxmlCompositeElement {
  static _Q = "pc:custShowMkLst";
}
class StringTagMonikerList extends OxmlCompositeElement {
  static _Q = "pc:tagMkLst";
}
class CommentMonikerList extends OxmlCompositeElement {
  static _Q = "pc:cmMkLst";
}
class CommentAuthorMonikerList extends OxmlCompositeElement {
  static _Q = "pc:cmAuthorMkLst";
}
function initOffice2016PresentationCommandNamespace() {
  SlideMoniker._D = {
    ":cId": new OxmlAttr(":cId", OxmlType.UInt32Value),
    ":sldId": new OxmlAttr(":sldId", OxmlType.UInt32Value)
  };
  SlideMonikerList._C = {
    "pc:docMk": DocumentMoniker,
    "pc:sldMk": SlideMoniker
  };
  return {
    prefix: "pc",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2013/main/command"
  };
}
export {
  AnimEffectMkLstAnimationEffectMonikerList,
  AnimEffectParentMkLstAnimationEffectMonikerList,
  CommentAuthorMonikerList,
  CommentMonikerList,
  CustomShowMonikerList,
  CustomXmlPartMonikerList,
  DesignerTagMonikerList,
  DocumentMoniker,
  DocumentMonikerList,
  HandoutMonikerList,
  MainMasterMonikerList,
  NotesMasterMonikerList,
  NotesMonikerList,
  NotesTextMonikerList,
  OpenXmlAnimationEffectMonikerListElement,
  OsfTaskPaneAppMonikerList,
  SectionLinkObjMonikerList,
  SectionMonikerList,
  SlideBaseMonikerList,
  SlideLayoutMonikerList,
  SlideMoniker,
  SlideMonikerList,
  SlidePosMonikerList,
  StringTagMonikerList,
  SummaryZoomMonikerList,
  initOffice2016PresentationCommandNamespace
};
