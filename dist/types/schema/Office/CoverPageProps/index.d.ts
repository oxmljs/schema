import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
/** Defines the CompanyEmailAddress Class. Serialized as `cppr:CompanyEmail` */
export declare class CompanyEmailAddress extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the CompanyFaxNumber Class. Serialized as `cppr:CompanyFax` */
export declare class CompanyFaxNumber extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the CompanyPhoneNumber Class. Serialized as `cppr:CompanyPhone` */
export declare class CompanyPhoneNumber extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the CompanyAddress Class. Serialized as `cppr:CompanyAddress` */
export declare class CompanyAddress extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the DocumentAbstract Class. Serialized as `cppr:Abstract` */
export declare class DocumentAbstract extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the PublishDate Class. Serialized as `cppr:PublishDate` */
export declare class PublishDate extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the CoverPageProperties Class. Serialized as `cppr:CoverPageProperties` */
export declare class CoverPageProperties extends OxmlCompositeElement<PublishDate | DocumentAbstract | CompanyAddress | CompanyPhoneNumber | CompanyFaxNumber | CompanyEmailAddress> {
    static _Q: string;
    /** Returns PublishDate. */
    get publishDate(): PublishDate | undefined;
    /** Returns DocumentAbstract. */
    get documentAbstract(): DocumentAbstract | undefined;
    /** Returns CompanyAddress. */
    get companyAddress(): CompanyAddress | undefined;
    /** Returns CompanyPhoneNumber. */
    get companyPhoneNumber(): CompanyPhoneNumber | undefined;
    /** Returns CompanyFaxNumber. */
    get companyFaxNumber(): CompanyFaxNumber | undefined;
    /** Returns CompanyEmailAddress. */
    get companyEmailAddress(): CompanyEmailAddress | undefined;
}
export declare function initOfficeCoverPagePropsNamespace(): {
    prefix: string;
    xmlns: string;
};
