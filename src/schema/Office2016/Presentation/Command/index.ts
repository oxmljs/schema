import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { UInt32Value } from '../../../../framework/types/UInt32Value';


/** Defines the SlideMoniker Class. Serialized as `pc:sldMk` */
export class SlideMoniker extends OxmlLeafElement {

    public static override _Q = 'pc:sldMk';
    public static override _A = [':cId',':sldId',];
    /** cId. Serialized as `:cId` */
    public get cId(): UInt32Value | undefined { return this._g(':cId'); }
    public set cId(v: UInt32Value | undefined) { this._s(':cId', v); }
    /** sldId. Serialized as `:sldId` */
    public get sldId(): UInt32Value | undefined { return this._g(':sldId'); }
    public set sldId(v: UInt32Value | undefined) { this._s(':sldId', v); }

}
/** Defines the DocumentMoniker Class. Serialized as `pc:docMk` */
export class DocumentMoniker extends OxmlLeafElement {

    public static override _Q = 'pc:docMk';

}
/** Defines the CustomXmlPartMonikerList Class. Serialized as `pc:cXmlMkLst` */
export class CustomXmlPartMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:cXmlMkLst';

}
/** Defines the DesignerTagMonikerList Class. Serialized as `pc:designTagMkLst` */
export class DesignerTagMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:designTagMkLst';

}
/** Defines the SectionLinkObjMonikerList Class. Serialized as `pc:sectionLnkObjMkLst` */
export class SectionLinkObjMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:sectionLnkObjMkLst';

}
/** Defines the SummaryZoomMonikerList Class. Serialized as `pc:tocMkLst` */
export class SummaryZoomMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:tocMkLst';

}
/** Defines the OsfTaskPaneAppMonikerList Class. Serialized as `pc:tkAppMkLst` */
export class OsfTaskPaneAppMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:tkAppMkLst';

}
/** Defines the OpenXmlAnimationEffectMonikerListElement Class. */
export abstract class OpenXmlAnimationEffectMonikerListElement extends OxmlCompositeElement {


}
/** Defines the AnimEffectParentMkLstAnimationEffectMonikerList Class. Serialized as `pc:animEffectParentMkLst` */
export class AnimEffectParentMkLstAnimationEffectMonikerList extends OpenXmlAnimationEffectMonikerListElement {

    public static override _Q = 'pc:animEffectParentMkLst';

}
/** Defines the AnimEffectMkLstAnimationEffectMonikerList Class. Serialized as `pc:animEffectMkLst` */
export class AnimEffectMkLstAnimationEffectMonikerList extends OpenXmlAnimationEffectMonikerListElement {

    public static override _Q = 'pc:animEffectMkLst';

}
/** Defines the HandoutMonikerList Class. Serialized as `pc:handoutMkLst` */
export class HandoutMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:handoutMkLst';

}
/** Defines the NotesMasterMonikerList Class. Serialized as `pc:notesMasterMkLst` */
export class NotesMasterMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:notesMasterMkLst';

}
/** Defines the NotesTextMonikerList Class. Serialized as `pc:notesTxtMkLst` */
export class NotesTextMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:notesTxtMkLst';

}
/** Defines the NotesMonikerList Class. Serialized as `pc:notesMkLst` */
export class NotesMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:notesMkLst';

}
/** Defines the SlidePosMonikerList Class. Serialized as `pc:sldPosMkLst` */
export class SlidePosMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:sldPosMkLst';

}
/** Defines the SlideMonikerList Class. Serialized as `pc:sldMkLst` */
export class SlideMonikerList extends OxmlCompositeElement<DocumentMoniker | SlideMoniker> {

    public static override _Q = 'pc:sldMkLst';
    /** Returns DocumentMoniker. */
    public get documentMoniker(): DocumentMoniker | undefined { return this._f(DocumentMoniker); }
    /** Returns SlideMoniker. */
    public get slideMoniker(): SlideMoniker | undefined { return this._f(SlideMoniker); }

}
/** Defines the MainMasterMonikerList Class. Serialized as `pc:sldMasterMkLst` */
export class MainMasterMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:sldMasterMkLst';

}
/** Defines the SlideLayoutMonikerList Class. Serialized as `pc:sldLayoutMkLst` */
export class SlideLayoutMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:sldLayoutMkLst';

}
/** Defines the SlideBaseMonikerList Class. Serialized as `pc:sldBaseMkLst` */
export class SlideBaseMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:sldBaseMkLst';

}
/** Defines the SectionMonikerList Class. Serialized as `pc:sectionMkLst` */
export class SectionMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:sectionMkLst';

}
/** Defines the DocumentMonikerList Class. Serialized as `pc:docMkLst` */
export class DocumentMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:docMkLst';

}
/** Defines the CustomShowMonikerList Class. Serialized as `pc:custShowMkLst` */
export class CustomShowMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:custShowMkLst';

}
/** Defines the StringTagMonikerList Class. Serialized as `pc:tagMkLst` */
export class StringTagMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:tagMkLst';

}
/** Defines the CommentMonikerList Class. Serialized as `pc:cmMkLst` */
export class CommentMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:cmMkLst';

}
/** Defines the CommentAuthorMonikerList Class. Serialized as `pc:cmAuthorMkLst` */
export class CommentAuthorMonikerList extends OxmlCompositeElement {

    public static override _Q = 'pc:cmAuthorMkLst';

}

export function initOffice2016PresentationCommandNamespace() {
    SlideMoniker._D = {
        ':cId': new OxmlAttr(':cId', OxmlType.UInt32Value),
        ':sldId': new OxmlAttr(':sldId', OxmlType.UInt32Value),
    };
    SlideMonikerList._C = {
        'pc:docMk': DocumentMoniker,
        'pc:sldMk': SlideMoniker,
    };
    return {
        prefix: 'pc',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2013/main/command',
    };
}
