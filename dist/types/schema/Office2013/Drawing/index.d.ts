import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { BlackWhiteModeValues } from '../../Drawing';
export declare enum TargetScreenSize {
    /** undefined. Serialized value: `544x376` */
    Sz544x376 = "544x376",
    /** undefined. Serialized value: `640x480` */
    Sz640x480 = "640x480",
    /** undefined. Serialized value: `720x512` */
    Sz720x512 = "720x512",
    /** undefined. Serialized value: `800x600` */
    Sz800x600 = "800x600",
    /** undefined. Serialized value: `1024x768` */
    Sz1024x768 = "1024x768",
    /** undefined. Serialized value: `1152x882` */
    Sz1152x882 = "1152x882",
    /** undefined. Serialized value: `1152x900` */
    Sz1152x900 = "1152x900",
    /** undefined. Serialized value: `1280x1024` */
    Sz1280x1024 = "1280x1024",
    /** undefined. Serialized value: `1600x1200` */
    Sz1600x1200 = "1600x1200",
    /** undefined. Serialized value: `1800x1440` */
    Sz1800x1440 = "1800x1440",
    /** undefined. Serialized value: `1920x1200` */
    Sz1920x1200 = "1920x1200"
}
export declare const TargetScreenSizeArray: readonly [TargetScreenSize.Sz544x376, TargetScreenSize.Sz640x480, TargetScreenSize.Sz720x512, TargetScreenSize.Sz800x600, TargetScreenSize.Sz1024x768, TargetScreenSize.Sz1152x882, TargetScreenSize.Sz1152x900, TargetScreenSize.Sz1280x1024, TargetScreenSize.Sz1600x1200, TargetScreenSize.Sz1800x1440, TargetScreenSize.Sz1920x1200];
/** Defines the SignatureLine Class. Serialized as `a15:signatureLine` */
export declare class SignatureLine extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** isSignatureLine. Serialized as `:isSignatureLine` */
    get isSignatureLine(): BooleanValue | undefined;
    set isSignatureLine(v: BooleanValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** provId. Serialized as `:provId` */
    get providerId(): StringValue | undefined;
    set providerId(v: StringValue | undefined);
    /** signingInstructionsSet. Serialized as `:signingInstructionsSet` */
    get signingInstructionsSet(): BooleanValue | undefined;
    set signingInstructionsSet(v: BooleanValue | undefined);
    /** allowComments. Serialized as `:allowComments` */
    get allowComments(): BooleanValue | undefined;
    set allowComments(v: BooleanValue | undefined);
    /** showSignDate. Serialized as `:showSignDate` */
    get showSignDate(): BooleanValue | undefined;
    set showSignDate(v: BooleanValue | undefined);
    /** suggestedSigner. Serialized as `:suggestedSigner` */
    get suggestedSigner(): StringValue | undefined;
    set suggestedSigner(v: StringValue | undefined);
    /** suggestedSigner2. Serialized as `:suggestedSigner2` */
    get suggestedSigner2(): StringValue | undefined;
    set suggestedSigner2(v: StringValue | undefined);
    /** suggestedSignerEmail. Serialized as `:suggestedSignerEmail` */
    get suggestedSignerEmail(): StringValue | undefined;
    set suggestedSignerEmail(v: StringValue | undefined);
    /** signingInstructions. Serialized as `:signingInstructions` */
    get signingInstructions(): StringValue | undefined;
    set signingInstructions(v: StringValue | undefined);
    /** addlXml. Serialized as `:addlXml` */
    get additionalXml(): StringValue | undefined;
    set additionalXml(v: StringValue | undefined);
    /** sigProvUrl. Serialized as `:sigProvUrl` */
    get signatureProviderUrl(): StringValue | undefined;
    set signatureProviderUrl(v: StringValue | undefined);
}
/** Defines the ObjectProperties Class. Serialized as `a15:objectPr` */
export declare class ObjectProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** objectId. Serialized as `:objectId` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** isActiveX. Serialized as `:isActiveX` */
    get isActiveX(): BooleanValue | undefined;
    set isActiveX(v: BooleanValue | undefined);
    /** linkType. Serialized as `:linkType` */
    get linkType(): StringValue | undefined;
    set linkType(v: StringValue | undefined);
}
/** Defines the NonVisualGroupProperties Class. Serialized as `a15:nonVisualGroupProps` */
export declare class NonVisualGroupProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** isLegacyGroup. Serialized as `:isLegacyGroup` */
    get isLegacyGroup(): BooleanValue | undefined;
    set isLegacyGroup(v: BooleanValue | undefined);
}
/** Defines the BackgroundProperties Class. Serialized as `a15:backgroundPr` */
export declare class BackgroundProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** bwMode. Serialized as `:bwMode` */
    get mode(): BlackWhiteModeValues | undefined;
    set mode(v: BlackWhiteModeValues | undefined);
    /** bwPure. Serialized as `:bwPure` */
    get pure(): BlackWhiteModeValues | undefined;
    set pure(v: BlackWhiteModeValues | undefined);
    /** bwNormal. Serialized as `:bwNormal` */
    get normal(): BlackWhiteModeValues | undefined;
    set normal(v: BlackWhiteModeValues | undefined);
    /** targetScreenSize. Serialized as `:targetScreenSize` */
    get targetScreenSize(): TargetScreenSize | undefined;
    set targetScreenSize(v: TargetScreenSize | undefined);
}
export declare function initOffice2013DrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
