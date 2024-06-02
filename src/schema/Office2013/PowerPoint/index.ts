import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { DirectionValues, DirectionValuesArray } from '../../Presentation';import { Extension as PExtension } from '../../Presentation';
import { RgbColorModelPercentage as ARgbColorModelPercentage } from '../../Drawing';
import { RgbColorModelHex as ARgbColorModelHex } from '../../Drawing';
import { HslColor as AHslColor } from '../../Drawing';
import { SystemColor as ASystemColor } from '../../Drawing';
import { SchemeColor as ASchemeColor } from '../../Drawing';
import { PresetColor as APresetColor } from '../../Drawing';


/** Defines the ExtendedGuide Class. Serialized as `p15:guide` */
export class ExtendedGuide extends OxmlCompositeElement<ColorType | ExtensionList> {

    public static override _Q = 'p15:guide';
    public static override _A = [':id',':name',':orient',':pos',':userDrawn',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** orient. Serialized as `:orient` */
    public get orientation(): DirectionValues | undefined { return this._g(':orient'); }
    public set orientation(v: DirectionValues | undefined) { this._s(':orient', v); }
    /** pos. Serialized as `:pos` */
    public get position(): Int32Value | undefined { return this._g(':pos'); }
    public set position(v: Int32Value | undefined) { this._s(':pos', v); }
    /** userDrawn. Serialized as `:userDrawn` */
    public get isUserDrawn(): BooleanValue | undefined { return this._g(':userDrawn'); }
    public set isUserDrawn(v: BooleanValue | undefined) { this._s(':userDrawn', v); }
    /** Returns ColorType. */
    public get colorType(): ColorType | undefined { return this._f(ColorType); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ExtensionList Class. Serialized as `p15:extLst` */
export class ExtensionList extends OxmlCompositeElement<PExtension> {

    public static override _Q = 'p15:extLst';

}
/** Defines the ColorType Class. Serialized as `p15:clr` */
export class ColorType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    public static override _Q = 'p15:clr';
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined { return this._f(ARgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): ARgbColorModelHex | undefined { return this._f(ARgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): AHslColor | undefined { return this._f(AHslColor); }
    /** System Color. */
    public get systemColor(): ASystemColor | undefined { return this._f(ASystemColor); }
    /** Scheme Color. */
    public get schemeColor(): ASchemeColor | undefined { return this._f(ASchemeColor); }
    /** Preset Color. */
    public get presetColor(): APresetColor | undefined { return this._f(APresetColor); }

}
/** Defines the ParentCommentIdentifier Class. Serialized as `p15:parentCm` */
export class ParentCommentIdentifier extends OxmlLeafElement {

    public static override _Q = 'p15:parentCm';
    public static override _A = [':authorId',':idx',];
    /** authorId. Serialized as `:authorId` */
    public get authorId(): UInt32Value | undefined { return this._g(':authorId'); }
    public set authorId(v: UInt32Value | undefined) { this._s(':authorId', v); }
    /** idx. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }

}
/** Defines the ChartTrackingReferenceBased Class. Serialized as `p15:chartTrackingRefBased` */
export class ChartTrackingReferenceBased extends OxmlLeafElement {

    public static override _Q = 'p15:chartTrackingRefBased';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the ExtendedGuideList Class. */
export abstract class ExtendedGuideList extends OxmlCompositeElement<ExtendedGuide | ExtensionList> {


}
/** Defines the NotesGuideList Class. Serialized as `p15:notesGuideLst` */
export class NotesGuideList extends ExtendedGuideList {

    public static override _Q = 'p15:notesGuideLst';

}
/** Defines the SlideGuideList Class. Serialized as `p15:sldGuideLst` */
export class SlideGuideList extends ExtendedGuideList {

    public static override _Q = 'p15:sldGuideLst';

}
/** Defines the ThreadingInfo Class. Serialized as `p15:threadingInfo` */
export class ThreadingInfo extends OxmlCompositeElement<ParentCommentIdentifier> {

    public static override _Q = 'p15:threadingInfo';
    public static override _A = [':timeZoneBias',];
    /** timeZoneBias. Serialized as `:timeZoneBias` */
    public get timeZoneBias(): Int32Value | undefined { return this._g(':timeZoneBias'); }
    public set timeZoneBias(v: Int32Value | undefined) { this._s(':timeZoneBias', v); }
    /** Returns ParentCommentIdentifier. */
    public get parentCommentIdentifier(): ParentCommentIdentifier | undefined { return this._f(ParentCommentIdentifier); }

}
/** Defines the PresenceInfo Class. Serialized as `p15:presenceInfo` */
export class PresenceInfo extends OxmlLeafElement {

    public static override _Q = 'p15:presenceInfo';
    public static override _A = [':userId',':providerId',];
    /** userId. Serialized as `:userId` */
    public get userId(): StringValue | undefined { return this._g(':userId'); }
    public set userId(v: StringValue | undefined) { this._s(':userId', v); }
    /** providerId. Serialized as `:providerId` */
    public get providerId(): StringValue | undefined { return this._g(':providerId'); }
    public set providerId(v: StringValue | undefined) { this._s(':providerId', v); }

}
/** Defines the PresetTransition Class. Serialized as `p15:prstTrans` */
export class PresetTransition extends OxmlLeafElement {

    public static override _Q = 'p15:prstTrans';
    public static override _A = [':prst',':invX',':invY',];
    /** prst. Serialized as `:prst` */
    public get preset(): StringValue | undefined { return this._g(':prst'); }
    public set preset(v: StringValue | undefined) { this._s(':prst', v); }
    /** invX. Serialized as `:invX` */
    public get invX(): BooleanValue | undefined { return this._g(':invX'); }
    public set invX(v: BooleanValue | undefined) { this._s(':invX', v); }
    /** invY. Serialized as `:invY` */
    public get invY(): BooleanValue | undefined { return this._g(':invY'); }
    public set invY(v: BooleanValue | undefined) { this._s(':invY', v); }

}

export function initOffice2013PowerPointNamespace() {
    ExtendedGuide._C = {
        'p15:clr': ColorType,
        'p15:extLst': ExtensionList,
    };
    ExtendedGuide._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':orient': new OxmlAttr(':orient', OxmlType.EnumValue, DirectionValuesArray),
        ':pos': new OxmlAttr(':pos', OxmlType.Int32Value),
        ':userDrawn': new OxmlAttr(':userDrawn', OxmlType.BooleanValue),
    };
    ExtensionList._C = {
        'p:ext': PExtension,
    };
    ColorType._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    ParentCommentIdentifier._D = {
        ':authorId': new OxmlAttr(':authorId', OxmlType.UInt32Value),
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    ChartTrackingReferenceBased._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    ExtendedGuideList._C = {
        'p15:guide': ExtendedGuide,
        'p15:extLst': ExtensionList,
    };
    NotesGuideList._C = {
        'p15:guide': ExtendedGuide,
        'p15:extLst': ExtensionList,
    };
    SlideGuideList._C = {
        'p15:guide': ExtendedGuide,
        'p15:extLst': ExtensionList,
    };
    ThreadingInfo._C = {
        'p15:parentCm': ParentCommentIdentifier,
    };
    ThreadingInfo._D = {
        ':timeZoneBias': new OxmlAttr(':timeZoneBias', OxmlType.Int32Value),
    };
    PresenceInfo._D = {
        ':userId': new OxmlAttr(':userId', OxmlType.StringValue),
        ':providerId': new OxmlAttr(':providerId', OxmlType.StringValue),
    };
    PresetTransition._D = {
        ':prst': new OxmlAttr(':prst', OxmlType.StringValue),
        ':invX': new OxmlAttr(':invX', OxmlType.BooleanValue),
        ':invY': new OxmlAttr(':invY', OxmlType.BooleanValue),
    };
    return {
        prefix: 'p15',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2012/main',
    };
}
