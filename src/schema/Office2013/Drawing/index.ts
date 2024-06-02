import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../Drawing';

export enum TargetScreenSize {
    /** undefined. Serialized value: `544x376` */
    Sz544x376 = '544x376',
    /** undefined. Serialized value: `640x480` */
    Sz640x480 = '640x480',
    /** undefined. Serialized value: `720x512` */
    Sz720x512 = '720x512',
    /** undefined. Serialized value: `800x600` */
    Sz800x600 = '800x600',
    /** undefined. Serialized value: `1024x768` */
    Sz1024x768 = '1024x768',
    /** undefined. Serialized value: `1152x882` */
    Sz1152x882 = '1152x882',
    /** undefined. Serialized value: `1152x900` */
    Sz1152x900 = '1152x900',
    /** undefined. Serialized value: `1280x1024` */
    Sz1280x1024 = '1280x1024',
    /** undefined. Serialized value: `1600x1200` */
    Sz1600x1200 = '1600x1200',
    /** undefined. Serialized value: `1800x1440` */
    Sz1800x1440 = '1800x1440',
    /** undefined. Serialized value: `1920x1200` */
    Sz1920x1200 = '1920x1200',
}

export const TargetScreenSizeArray = [
    TargetScreenSize.Sz544x376,
    TargetScreenSize.Sz640x480,
    TargetScreenSize.Sz720x512,
    TargetScreenSize.Sz800x600,
    TargetScreenSize.Sz1024x768,
    TargetScreenSize.Sz1152x882,
    TargetScreenSize.Sz1152x900,
    TargetScreenSize.Sz1280x1024,
    TargetScreenSize.Sz1600x1200,
    TargetScreenSize.Sz1800x1440,
    TargetScreenSize.Sz1920x1200,
] as const;

/** Defines the SignatureLine Class. Serialized as `a15:signatureLine` */
export class SignatureLine extends OxmlLeafElement {

    public static override _Q = 'a15:signatureLine';
    public static override _A = [':isSignatureLine',':id',':provId',':signingInstructionsSet',':allowComments',':showSignDate',':suggestedSigner',':suggestedSigner2',':suggestedSignerEmail',':signingInstructions',':addlXml',':sigProvUrl',];
    /** isSignatureLine. Serialized as `:isSignatureLine` */
    public get isSignatureLine(): BooleanValue | undefined { return this._g(':isSignatureLine'); }
    public set isSignatureLine(v: BooleanValue | undefined) { this._s(':isSignatureLine', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** provId. Serialized as `:provId` */
    public get providerId(): StringValue | undefined { return this._g(':provId'); }
    public set providerId(v: StringValue | undefined) { this._s(':provId', v); }
    /** signingInstructionsSet. Serialized as `:signingInstructionsSet` */
    public get signingInstructionsSet(): BooleanValue | undefined { return this._g(':signingInstructionsSet'); }
    public set signingInstructionsSet(v: BooleanValue | undefined) { this._s(':signingInstructionsSet', v); }
    /** allowComments. Serialized as `:allowComments` */
    public get allowComments(): BooleanValue | undefined { return this._g(':allowComments'); }
    public set allowComments(v: BooleanValue | undefined) { this._s(':allowComments', v); }
    /** showSignDate. Serialized as `:showSignDate` */
    public get showSignDate(): BooleanValue | undefined { return this._g(':showSignDate'); }
    public set showSignDate(v: BooleanValue | undefined) { this._s(':showSignDate', v); }
    /** suggestedSigner. Serialized as `:suggestedSigner` */
    public get suggestedSigner(): StringValue | undefined { return this._g(':suggestedSigner'); }
    public set suggestedSigner(v: StringValue | undefined) { this._s(':suggestedSigner', v); }
    /** suggestedSigner2. Serialized as `:suggestedSigner2` */
    public get suggestedSigner2(): StringValue | undefined { return this._g(':suggestedSigner2'); }
    public set suggestedSigner2(v: StringValue | undefined) { this._s(':suggestedSigner2', v); }
    /** suggestedSignerEmail. Serialized as `:suggestedSignerEmail` */
    public get suggestedSignerEmail(): StringValue | undefined { return this._g(':suggestedSignerEmail'); }
    public set suggestedSignerEmail(v: StringValue | undefined) { this._s(':suggestedSignerEmail', v); }
    /** signingInstructions. Serialized as `:signingInstructions` */
    public get signingInstructions(): StringValue | undefined { return this._g(':signingInstructions'); }
    public set signingInstructions(v: StringValue | undefined) { this._s(':signingInstructions', v); }
    /** addlXml. Serialized as `:addlXml` */
    public get additionalXml(): StringValue | undefined { return this._g(':addlXml'); }
    public set additionalXml(v: StringValue | undefined) { this._s(':addlXml', v); }
    /** sigProvUrl. Serialized as `:sigProvUrl` */
    public get signatureProviderUrl(): StringValue | undefined { return this._g(':sigProvUrl'); }
    public set signatureProviderUrl(v: StringValue | undefined) { this._s(':sigProvUrl', v); }

}
/** Defines the ObjectProperties Class. Serialized as `a15:objectPr` */
export class ObjectProperties extends OxmlLeafElement {

    public static override _Q = 'a15:objectPr';
    public static override _A = [':objectId',':isActiveX',':linkType',];
    /** objectId. Serialized as `:objectId` */
    public get id(): StringValue | undefined { return this._g(':objectId'); }
    public set id(v: StringValue | undefined) { this._s(':objectId', v); }
    /** isActiveX. Serialized as `:isActiveX` */
    public get isActiveX(): BooleanValue | undefined { return this._g(':isActiveX'); }
    public set isActiveX(v: BooleanValue | undefined) { this._s(':isActiveX', v); }
    /** linkType. Serialized as `:linkType` */
    public get linkType(): StringValue | undefined { return this._g(':linkType'); }
    public set linkType(v: StringValue | undefined) { this._s(':linkType', v); }

}
/** Defines the NonVisualGroupProperties Class. Serialized as `a15:nonVisualGroupProps` */
export class NonVisualGroupProperties extends OxmlLeafElement {

    public static override _Q = 'a15:nonVisualGroupProps';
    public static override _A = [':isLegacyGroup',];
    /** isLegacyGroup. Serialized as `:isLegacyGroup` */
    public get isLegacyGroup(): BooleanValue | undefined { return this._g(':isLegacyGroup'); }
    public set isLegacyGroup(v: BooleanValue | undefined) { this._s(':isLegacyGroup', v); }

}
/** Defines the BackgroundProperties Class. Serialized as `a15:backgroundPr` */
export class BackgroundProperties extends OxmlLeafElement {

    public static override _Q = 'a15:backgroundPr';
    public static override _A = [':bwMode',':bwPure',':bwNormal',':targetScreenSize',];
    /** bwMode. Serialized as `:bwMode` */
    public get mode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set mode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** bwPure. Serialized as `:bwPure` */
    public get pure(): BlackWhiteModeValues | undefined { return this._g(':bwPure'); }
    public set pure(v: BlackWhiteModeValues | undefined) { this._s(':bwPure', v); }
    /** bwNormal. Serialized as `:bwNormal` */
    public get normal(): BlackWhiteModeValues | undefined { return this._g(':bwNormal'); }
    public set normal(v: BlackWhiteModeValues | undefined) { this._s(':bwNormal', v); }
    /** targetScreenSize. Serialized as `:targetScreenSize` */
    public get targetScreenSize(): TargetScreenSize | undefined { return this._g(':targetScreenSize'); }
    public set targetScreenSize(v: TargetScreenSize | undefined) { this._s(':targetScreenSize', v); }

}

export function initOffice2013DrawingNamespace() {
    SignatureLine._D = {
        ':isSignatureLine': new OxmlAttr(':isSignatureLine', OxmlType.BooleanValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':provId': new OxmlAttr(':provId', OxmlType.StringValue),
        ':signingInstructionsSet': new OxmlAttr(':signingInstructionsSet', OxmlType.BooleanValue),
        ':allowComments': new OxmlAttr(':allowComments', OxmlType.BooleanValue),
        ':showSignDate': new OxmlAttr(':showSignDate', OxmlType.BooleanValue),
        ':suggestedSigner': new OxmlAttr(':suggestedSigner', OxmlType.StringValue),
        ':suggestedSigner2': new OxmlAttr(':suggestedSigner2', OxmlType.StringValue),
        ':suggestedSignerEmail': new OxmlAttr(':suggestedSignerEmail', OxmlType.StringValue),
        ':signingInstructions': new OxmlAttr(':signingInstructions', OxmlType.StringValue),
        ':addlXml': new OxmlAttr(':addlXml', OxmlType.StringValue),
        ':sigProvUrl': new OxmlAttr(':sigProvUrl', OxmlType.StringValue),
    };
    ObjectProperties._D = {
        ':objectId': new OxmlAttr(':objectId', OxmlType.StringValue),
        ':isActiveX': new OxmlAttr(':isActiveX', OxmlType.BooleanValue),
        ':linkType': new OxmlAttr(':linkType', OxmlType.StringValue),
    };
    NonVisualGroupProperties._D = {
        ':isLegacyGroup': new OxmlAttr(':isLegacyGroup', OxmlType.BooleanValue),
    };
    BackgroundProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
        ':bwPure': new OxmlAttr(':bwPure', OxmlType.EnumValue, BlackWhiteModeValuesArray),
        ':bwNormal': new OxmlAttr(':bwNormal', OxmlType.EnumValue, BlackWhiteModeValuesArray),
        ':targetScreenSize': new OxmlAttr(':targetScreenSize', OxmlType.EnumValue, TargetScreenSizeArray),
    };
    return {
        prefix: 'a15',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2012/main',
    };
}
