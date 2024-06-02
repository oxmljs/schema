import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
/** Defines the SlideMoniker Class. Serialized as `pc:sldMk` */
export declare class SlideMoniker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** cId. Serialized as `:cId` */
    get cId(): UInt32Value | undefined;
    set cId(v: UInt32Value | undefined);
    /** sldId. Serialized as `:sldId` */
    get sldId(): UInt32Value | undefined;
    set sldId(v: UInt32Value | undefined);
}
/** Defines the DocumentMoniker Class. Serialized as `pc:docMk` */
export declare class DocumentMoniker extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the CustomXmlPartMonikerList Class. Serialized as `pc:cXmlMkLst` */
export declare class CustomXmlPartMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the DesignerTagMonikerList Class. Serialized as `pc:designTagMkLst` */
export declare class DesignerTagMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the SectionLinkObjMonikerList Class. Serialized as `pc:sectionLnkObjMkLst` */
export declare class SectionLinkObjMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the SummaryZoomMonikerList Class. Serialized as `pc:tocMkLst` */
export declare class SummaryZoomMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the OsfTaskPaneAppMonikerList Class. Serialized as `pc:tkAppMkLst` */
export declare class OsfTaskPaneAppMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the OpenXmlAnimationEffectMonikerListElement Class. */
export declare abstract class OpenXmlAnimationEffectMonikerListElement extends OxmlCompositeElement {
}
/** Defines the AnimEffectParentMkLstAnimationEffectMonikerList Class. Serialized as `pc:animEffectParentMkLst` */
export declare class AnimEffectParentMkLstAnimationEffectMonikerList extends OpenXmlAnimationEffectMonikerListElement {
    static _Q: string;
}
/** Defines the AnimEffectMkLstAnimationEffectMonikerList Class. Serialized as `pc:animEffectMkLst` */
export declare class AnimEffectMkLstAnimationEffectMonikerList extends OpenXmlAnimationEffectMonikerListElement {
    static _Q: string;
}
/** Defines the HandoutMonikerList Class. Serialized as `pc:handoutMkLst` */
export declare class HandoutMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the NotesMasterMonikerList Class. Serialized as `pc:notesMasterMkLst` */
export declare class NotesMasterMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the NotesTextMonikerList Class. Serialized as `pc:notesTxtMkLst` */
export declare class NotesTextMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the NotesMonikerList Class. Serialized as `pc:notesMkLst` */
export declare class NotesMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the SlidePosMonikerList Class. Serialized as `pc:sldPosMkLst` */
export declare class SlidePosMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the SlideMonikerList Class. Serialized as `pc:sldMkLst` */
export declare class SlideMonikerList extends OxmlCompositeElement<DocumentMoniker | SlideMoniker> {
    static _Q: string;
    /** Returns DocumentMoniker. */
    get documentMoniker(): DocumentMoniker | undefined;
    /** Returns SlideMoniker. */
    get slideMoniker(): SlideMoniker | undefined;
}
/** Defines the MainMasterMonikerList Class. Serialized as `pc:sldMasterMkLst` */
export declare class MainMasterMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the SlideLayoutMonikerList Class. Serialized as `pc:sldLayoutMkLst` */
export declare class SlideLayoutMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the SlideBaseMonikerList Class. Serialized as `pc:sldBaseMkLst` */
export declare class SlideBaseMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the SectionMonikerList Class. Serialized as `pc:sectionMkLst` */
export declare class SectionMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the DocumentMonikerList Class. Serialized as `pc:docMkLst` */
export declare class DocumentMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the CustomShowMonikerList Class. Serialized as `pc:custShowMkLst` */
export declare class CustomShowMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the StringTagMonikerList Class. Serialized as `pc:tagMkLst` */
export declare class StringTagMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the CommentMonikerList Class. Serialized as `pc:cmMkLst` */
export declare class CommentMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the CommentAuthorMonikerList Class. Serialized as `pc:cmAuthorMkLst` */
export declare class CommentAuthorMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
export declare function initOffice2016PresentationCommandNamespace(): {
    prefix: string;
    xmlns: string;
};
