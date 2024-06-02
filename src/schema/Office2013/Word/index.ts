import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
import { OnOffValue } from '../../../framework/types/OnOffValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { ThemeColorValues, ThemeColorValuesArray } from '../../Wordprocessing';

export enum SdtAppearance {
    /** undefined. Serialized value: `boundingBox` */
    BoundingBox = 'boundingBox',
    /** undefined. Serialized value: `tags` */
    Tags = 'tags',
    /** undefined. Serialized value: `hidden` */
    Hidden = 'hidden',
}

export const SdtAppearanceArray = [
    SdtAppearance.BoundingBox,
    SdtAppearance.Tags,
    SdtAppearance.Hidden,
] as const;

/** Defines the SectionTitle Class. Serialized as `w15:sectionTitle` */
export class SectionTitle extends OxmlLeafElement {

    public static override _Q = 'w15:sectionTitle';
    public static override _A = ['w:val',];
    /** String Value. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Defines the PresenceInfo Class. Serialized as `w15:presenceInfo` */
export class PresenceInfo extends OxmlLeafElement {

    public static override _Q = 'w15:presenceInfo';
    public static override _A = ['w15:providerId','w15:userId',];
    /** providerId. Serialized as `w15:providerId` */
    public get providerId(): StringValue | undefined { return this._g('w15:providerId'); }
    public set providerId(v: StringValue | undefined) { this._s('w15:providerId', v); }
    /** userId. Serialized as `w15:userId` */
    public get userId(): StringValue | undefined { return this._g('w15:userId'); }
    public set userId(v: StringValue | undefined) { this._s('w15:userId', v); }

}
/** Defines the Person Class. Serialized as `w15:person` */
export class Person extends OxmlCompositeElement<PresenceInfo> {

    public static override _Q = 'w15:person';
    public static override _A = ['w15:author',];
    /** author. Serialized as `w15:author` */
    public get author(): StringValue | undefined { return this._g('w15:author'); }
    public set author(v: StringValue | undefined) { this._s('w15:author', v); }
    /** Returns PresenceInfo. */
    public get presenceInfo(): PresenceInfo | undefined { return this._f(PresenceInfo); }

}
/** Defines the CommentEx Class. Serialized as `w15:commentEx` */
export class CommentEx extends OxmlLeafElement {

    public static override _Q = 'w15:commentEx';
    public static override _A = ['w15:paraId','w15:paraIdParent','w15:done',];
    /** paraId. Serialized as `w15:paraId` */
    public get paraId(): HexBinaryValue | undefined { return this._g('w15:paraId'); }
    public set paraId(v: HexBinaryValue | undefined) { this._s('w15:paraId', v); }
    /** paraIdParent. Serialized as `w15:paraIdParent` */
    public get paraIdParent(): HexBinaryValue | undefined { return this._g('w15:paraIdParent'); }
    public set paraIdParent(v: HexBinaryValue | undefined) { this._s('w15:paraIdParent', v); }
    /** done. Serialized as `w15:done` */
    public get done(): OnOffValue | undefined { return this._g('w15:done'); }
    public set done(v: OnOffValue | undefined) { this._s('w15:done', v); }

}
/** Defines the FootnoteColumns Class. Serialized as `w15:footnoteColumns` */
export class FootnoteColumns extends OxmlLeafElement {

    public static override _Q = 'w15:footnoteColumns';
    public static override _A = ['w:val',];
    /** Decimal Number Value. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Defines the PersistentDocumentId Class. Serialized as `w15:docId` */
export class PersistentDocumentId extends OxmlLeafElement {

    public static override _Q = 'w15:docId';
    public static override _A = ['w15:val',];
    /** val. Serialized as `w15:val` */
    public get val(): StringValue | undefined { return this._g('w15:val'); }
    public set val(v: StringValue | undefined) { this._s('w15:val', v); }

}
/** Defines the OnOffType Class. */
export abstract class OnOffType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** On/Off Value. Serialized as `w:val` */
    public get val(): OnOffValue | undefined { return this._g('w:val'); }
    public set val(v: OnOffValue | undefined) { this._s('w:val', v); }

}
/** Defines the DoNotAllowInsertDeleteSection Class. Serialized as `w15:doNotAllowInsertDeleteSection` */
export class DoNotAllowInsertDeleteSection extends OnOffType {

    public static override _Q = 'w15:doNotAllowInsertDeleteSection';

}
/** Defines the WebExtensionCreated Class. Serialized as `w15:webExtensionCreated` */
export class WebExtensionCreated extends OnOffType {

    public static override _Q = 'w15:webExtensionCreated';

}
/** Defines the WebExtensionLinked Class. Serialized as `w15:webExtensionLinked` */
export class WebExtensionLinked extends OnOffType {

    public static override _Q = 'w15:webExtensionLinked';

}
/** Defines the DefaultCollapsed Class. Serialized as `w15:collapsed` */
export class DefaultCollapsed extends OnOffType {

    public static override _Q = 'w15:collapsed';

}
/** Defines the ChartTrackingRefBased Class. Serialized as `w15:chartTrackingRefBased` */
export class ChartTrackingRefBased extends OnOffType {

    public static override _Q = 'w15:chartTrackingRefBased';

}
/** Defines the SdtRepeatedSectionItem Class. Serialized as `w15:repeatingSectionItem` */
export class SdtRepeatedSectionItem extends OxmlLeafElement {

    public static override _Q = 'w15:repeatingSectionItem';

}
/** Defines the SdtRepeatedSection Class. Serialized as `w15:repeatingSection` */
export class SdtRepeatedSection extends OxmlCompositeElement<SectionTitle | DoNotAllowInsertDeleteSection> {

    public static override _Q = 'w15:repeatingSection';
    /** Returns SectionTitle. */
    public get sectionTitle(): SectionTitle | undefined { return this._f(SectionTitle); }
    /** Returns DoNotAllowInsertDeleteSection. */
    public get doNotAllowInsertDeleteSection(): DoNotAllowInsertDeleteSection | undefined { return this._f(DoNotAllowInsertDeleteSection); }

}
/** Defines the People Class. Serialized as `w15:people` */
export class People extends OxmlPartRootElement<Person> {

    public static override _Q = 'w15:people';

}
/** Defines the CommentsEx Class. Serialized as `w15:commentsEx` */
export class CommentsEx extends OxmlPartRootElement<CommentEx> {

    public static override _Q = 'w15:commentsEx';

}
/** Defines the Appearance Class. Serialized as `w15:appearance` */
export class Appearance extends OxmlLeafElement {

    public static override _Q = 'w15:appearance';
    public static override _A = ['w15:val',];
    /** val. Serialized as `w15:val` */
    public get val(): SdtAppearance | undefined { return this._g('w15:val'); }
    public set val(v: SdtAppearance | undefined) { this._s('w15:val', v); }

}
/** Defines the DataBinding Class. Serialized as `w15:dataBinding` */
export class DataBinding extends OxmlLeafElement {

    public static override _Q = 'w15:dataBinding';
    public static override _A = ['w:prefixMappings','w:xpath','w:storeItemID',];
    /** XML Namespace Prefix Mappings. Serialized as `w:prefixMappings` */
    public get prefixMappings(): StringValue | undefined { return this._g('w:prefixMappings'); }
    public set prefixMappings(v: StringValue | undefined) { this._s('w:prefixMappings', v); }
    /** XPath. Serialized as `w:xpath` */
    public get xPath(): StringValue | undefined { return this._g('w:xpath'); }
    public set xPath(v: StringValue | undefined) { this._s('w:xpath', v); }
    /** Custom XML Data Storage ID. Serialized as `w:storeItemID` */
    public get storeItemId(): StringValue | undefined { return this._g('w:storeItemID'); }
    public set storeItemId(v: StringValue | undefined) { this._s('w:storeItemID', v); }

}
/** Defines the Color Class. Serialized as `w15:color` */
export class Color extends OxmlLeafElement {

    public static override _Q = 'w15:color';
    public static override _A = ['w:val','w:themeColor','w:themeTint','w:themeShade',];
    /** Run Content Color. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }
    /** Run Content Theme Color. Serialized as `w:themeColor` */
    public get themeColor(): ThemeColorValues | undefined { return this._g('w:themeColor'); }
    public set themeColor(v: ThemeColorValues | undefined) { this._s('w:themeColor', v); }
    /** Run Content Theme Color Tint. Serialized as `w:themeTint` */
    public get themeTint(): StringValue | undefined { return this._g('w:themeTint'); }
    public set themeTint(v: StringValue | undefined) { this._s('w:themeTint', v); }
    /** Run Content Theme Color Shade. Serialized as `w:themeShade` */
    public get themeShade(): StringValue | undefined { return this._g('w:themeShade'); }
    public set themeShade(v: StringValue | undefined) { this._s('w:themeShade', v); }

}

export function initOffice2013WordNamespace() {
    SectionTitle._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    PresenceInfo._D = {
        'w15:providerId': new OxmlAttr('w15:providerId', OxmlType.StringValue),
        'w15:userId': new OxmlAttr('w15:userId', OxmlType.StringValue),
    };
    Person._C = {
        'w15:presenceInfo': PresenceInfo,
    };
    Person._D = {
        'w15:author': new OxmlAttr('w15:author', OxmlType.StringValue),
    };
    CommentEx._D = {
        'w15:paraId': new OxmlAttr('w15:paraId', OxmlType.HexBinaryValue),
        'w15:paraIdParent': new OxmlAttr('w15:paraIdParent', OxmlType.HexBinaryValue),
        'w15:done': new OxmlAttr('w15:done', OxmlType.OnOffValue),
    };
    FootnoteColumns._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    PersistentDocumentId._D = {
        'w15:val': new OxmlAttr('w15:val', OxmlType.StringValue),
    };
    OnOffType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.OnOffValue),
    };
    SdtRepeatedSection._C = {
        'w15:sectionTitle': SectionTitle,
        'w15:doNotAllowInsertDeleteSection': DoNotAllowInsertDeleteSection,
    };
    People._C = {
        'w15:person': Person,
    };
    CommentsEx._C = {
        'w15:commentEx': CommentEx,
    };
    Appearance._D = {
        'w15:val': new OxmlAttr('w15:val', OxmlType.EnumValue, SdtAppearanceArray),
    };
    DataBinding._D = {
        'w:prefixMappings': new OxmlAttr('w:prefixMappings', OxmlType.StringValue),
        'w:xpath': new OxmlAttr('w:xpath', OxmlType.StringValue),
        'w:storeItemID': new OxmlAttr('w:storeItemID', OxmlType.StringValue),
    };
    Color._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
        'w:themeColor': new OxmlAttr('w:themeColor', OxmlType.EnumValue, ThemeColorValuesArray),
        'w:themeTint': new OxmlAttr('w:themeTint', OxmlType.StringValue),
        'w:themeShade': new OxmlAttr('w:themeShade', OxmlType.StringValue),
    };
    return {
        prefix: 'w15',
        xmlns: 'http://schemas.microsoft.com/office/word/2012/wordml',
    };
}
