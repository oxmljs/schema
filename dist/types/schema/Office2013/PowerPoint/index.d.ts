import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { DirectionValues } from '../../Presentation';
import { Extension as PExtension } from '../../Presentation';
import { RgbColorModelPercentage as ARgbColorModelPercentage } from '../../Drawing';
import { RgbColorModelHex as ARgbColorModelHex } from '../../Drawing';
import { HslColor as AHslColor } from '../../Drawing';
import { SystemColor as ASystemColor } from '../../Drawing';
import { SchemeColor as ASchemeColor } from '../../Drawing';
import { PresetColor as APresetColor } from '../../Drawing';
/** Defines the ExtendedGuide Class. Serialized as `p15:guide` */
export declare class ExtendedGuide extends OxmlCompositeElement<ColorType | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** orient. Serialized as `:orient` */
    get orientation(): DirectionValues | undefined;
    set orientation(v: DirectionValues | undefined);
    /** pos. Serialized as `:pos` */
    get position(): Int32Value | undefined;
    set position(v: Int32Value | undefined);
    /** userDrawn. Serialized as `:userDrawn` */
    get isUserDrawn(): BooleanValue | undefined;
    set isUserDrawn(v: BooleanValue | undefined);
    /** Returns ColorType. */
    get colorType(): ColorType | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ExtensionList Class. Serialized as `p15:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<PExtension> {
    static _Q: string;
}
/** Defines the ColorType Class. Serialized as `p15:clr` */
export declare class ColorType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    static _Q: string;
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): ARgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): AHslColor | undefined;
    /** System Color. */
    get systemColor(): ASystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): ASchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): APresetColor | undefined;
}
/** Defines the ParentCommentIdentifier Class. Serialized as `p15:parentCm` */
export declare class ParentCommentIdentifier extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** authorId. Serialized as `:authorId` */
    get authorId(): UInt32Value | undefined;
    set authorId(v: UInt32Value | undefined);
    /** idx. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
}
/** Defines the ChartTrackingReferenceBased Class. Serialized as `p15:chartTrackingRefBased` */
export declare class ChartTrackingReferenceBased extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the ExtendedGuideList Class. */
export declare abstract class ExtendedGuideList extends OxmlCompositeElement<ExtendedGuide | ExtensionList> {
}
/** Defines the NotesGuideList Class. Serialized as `p15:notesGuideLst` */
export declare class NotesGuideList extends ExtendedGuideList {
    static _Q: string;
}
/** Defines the SlideGuideList Class. Serialized as `p15:sldGuideLst` */
export declare class SlideGuideList extends ExtendedGuideList {
    static _Q: string;
}
/** Defines the ThreadingInfo Class. Serialized as `p15:threadingInfo` */
export declare class ThreadingInfo extends OxmlCompositeElement<ParentCommentIdentifier> {
    static _Q: string;
    static _A: string[];
    /** timeZoneBias. Serialized as `:timeZoneBias` */
    get timeZoneBias(): Int32Value | undefined;
    set timeZoneBias(v: Int32Value | undefined);
    /** Returns ParentCommentIdentifier. */
    get parentCommentIdentifier(): ParentCommentIdentifier | undefined;
}
/** Defines the PresenceInfo Class. Serialized as `p15:presenceInfo` */
export declare class PresenceInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** userId. Serialized as `:userId` */
    get userId(): StringValue | undefined;
    set userId(v: StringValue | undefined);
    /** providerId. Serialized as `:providerId` */
    get providerId(): StringValue | undefined;
    set providerId(v: StringValue | undefined);
}
/** Defines the PresetTransition Class. Serialized as `p15:prstTrans` */
export declare class PresetTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** prst. Serialized as `:prst` */
    get preset(): StringValue | undefined;
    set preset(v: StringValue | undefined);
    /** invX. Serialized as `:invX` */
    get invX(): BooleanValue | undefined;
    set invX(v: BooleanValue | undefined);
    /** invY. Serialized as `:invY` */
    get invY(): BooleanValue | undefined;
    set invY(v: BooleanValue | undefined);
}
export declare function initOffice2013PowerPointNamespace(): {
    prefix: string;
    xmlns: string;
};
