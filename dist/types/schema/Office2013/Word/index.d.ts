import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
import { OnOffValue } from '../../../framework/types/OnOffValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { ThemeColorValues } from '../../Wordprocessing';
export declare enum SdtAppearance {
    /** undefined. Serialized value: `boundingBox` */
    BoundingBox = "boundingBox",
    /** undefined. Serialized value: `tags` */
    Tags = "tags",
    /** undefined. Serialized value: `hidden` */
    Hidden = "hidden"
}
export declare const SdtAppearanceArray: readonly [SdtAppearance.BoundingBox, SdtAppearance.Tags, SdtAppearance.Hidden];
/** Defines the SectionTitle Class. Serialized as `w15:sectionTitle` */
export declare class SectionTitle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** String Value. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the PresenceInfo Class. Serialized as `w15:presenceInfo` */
export declare class PresenceInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** providerId. Serialized as `w15:providerId` */
    get providerId(): StringValue | undefined;
    set providerId(v: StringValue | undefined);
    /** userId. Serialized as `w15:userId` */
    get userId(): StringValue | undefined;
    set userId(v: StringValue | undefined);
}
/** Defines the Person Class. Serialized as `w15:person` */
export declare class Person extends OxmlCompositeElement<PresenceInfo> {
    static _Q: string;
    static _A: string[];
    /** author. Serialized as `w15:author` */
    get author(): StringValue | undefined;
    set author(v: StringValue | undefined);
    /** Returns PresenceInfo. */
    get presenceInfo(): PresenceInfo | undefined;
}
/** Defines the CommentEx Class. Serialized as `w15:commentEx` */
export declare class CommentEx extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** paraId. Serialized as `w15:paraId` */
    get paraId(): HexBinaryValue | undefined;
    set paraId(v: HexBinaryValue | undefined);
    /** paraIdParent. Serialized as `w15:paraIdParent` */
    get paraIdParent(): HexBinaryValue | undefined;
    set paraIdParent(v: HexBinaryValue | undefined);
    /** done. Serialized as `w15:done` */
    get done(): OnOffValue | undefined;
    set done(v: OnOffValue | undefined);
}
/** Defines the FootnoteColumns Class. Serialized as `w15:footnoteColumns` */
export declare class FootnoteColumns extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Decimal Number Value. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the PersistentDocumentId Class. Serialized as `w15:docId` */
export declare class PersistentDocumentId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w15:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the OnOffType Class. */
export declare abstract class OnOffType extends OxmlLeafElement {
    static _A: string[];
    /** On/Off Value. Serialized as `w:val` */
    get val(): OnOffValue | undefined;
    set val(v: OnOffValue | undefined);
}
/** Defines the DoNotAllowInsertDeleteSection Class. Serialized as `w15:doNotAllowInsertDeleteSection` */
export declare class DoNotAllowInsertDeleteSection extends OnOffType {
    static _Q: string;
}
/** Defines the WebExtensionCreated Class. Serialized as `w15:webExtensionCreated` */
export declare class WebExtensionCreated extends OnOffType {
    static _Q: string;
}
/** Defines the WebExtensionLinked Class. Serialized as `w15:webExtensionLinked` */
export declare class WebExtensionLinked extends OnOffType {
    static _Q: string;
}
/** Defines the DefaultCollapsed Class. Serialized as `w15:collapsed` */
export declare class DefaultCollapsed extends OnOffType {
    static _Q: string;
}
/** Defines the ChartTrackingRefBased Class. Serialized as `w15:chartTrackingRefBased` */
export declare class ChartTrackingRefBased extends OnOffType {
    static _Q: string;
}
/** Defines the SdtRepeatedSectionItem Class. Serialized as `w15:repeatingSectionItem` */
export declare class SdtRepeatedSectionItem extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the SdtRepeatedSection Class. Serialized as `w15:repeatingSection` */
export declare class SdtRepeatedSection extends OxmlCompositeElement<SectionTitle | DoNotAllowInsertDeleteSection> {
    static _Q: string;
    /** Returns SectionTitle. */
    get sectionTitle(): SectionTitle | undefined;
    /** Returns DoNotAllowInsertDeleteSection. */
    get doNotAllowInsertDeleteSection(): DoNotAllowInsertDeleteSection | undefined;
}
/** Defines the People Class. Serialized as `w15:people` */
export declare class People extends OxmlPartRootElement<Person> {
    static _Q: string;
}
/** Defines the CommentsEx Class. Serialized as `w15:commentsEx` */
export declare class CommentsEx extends OxmlPartRootElement<CommentEx> {
    static _Q: string;
}
/** Defines the Appearance Class. Serialized as `w15:appearance` */
export declare class Appearance extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w15:val` */
    get val(): SdtAppearance | undefined;
    set val(v: SdtAppearance | undefined);
}
/** Defines the DataBinding Class. Serialized as `w15:dataBinding` */
export declare class DataBinding extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** XML Namespace Prefix Mappings. Serialized as `w:prefixMappings` */
    get prefixMappings(): StringValue | undefined;
    set prefixMappings(v: StringValue | undefined);
    /** XPath. Serialized as `w:xpath` */
    get xPath(): StringValue | undefined;
    set xPath(v: StringValue | undefined);
    /** Custom XML Data Storage ID. Serialized as `w:storeItemID` */
    get storeItemId(): StringValue | undefined;
    set storeItemId(v: StringValue | undefined);
}
/** Defines the Color Class. Serialized as `w15:color` */
export declare class Color extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Run Content Color. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Run Content Theme Color. Serialized as `w:themeColor` */
    get themeColor(): ThemeColorValues | undefined;
    set themeColor(v: ThemeColorValues | undefined);
    /** Run Content Theme Color Tint. Serialized as `w:themeTint` */
    get themeTint(): StringValue | undefined;
    set themeTint(v: StringValue | undefined);
    /** Run Content Theme Color Shade. Serialized as `w:themeShade` */
    get themeShade(): StringValue | undefined;
    set themeShade(v: StringValue | undefined);
}
export declare function initOffice2013WordNamespace(): {
    prefix: string;
    xmlns: string;
};
