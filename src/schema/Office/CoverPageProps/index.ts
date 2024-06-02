import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';


/** Defines the CompanyEmailAddress Class. Serialized as `cppr:CompanyEmail` */
export class CompanyEmailAddress extends OxmlLeafTextElement {

    public static override _Q = 'cppr:CompanyEmail';

}
/** Defines the CompanyFaxNumber Class. Serialized as `cppr:CompanyFax` */
export class CompanyFaxNumber extends OxmlLeafTextElement {

    public static override _Q = 'cppr:CompanyFax';

}
/** Defines the CompanyPhoneNumber Class. Serialized as `cppr:CompanyPhone` */
export class CompanyPhoneNumber extends OxmlLeafTextElement {

    public static override _Q = 'cppr:CompanyPhone';

}
/** Defines the CompanyAddress Class. Serialized as `cppr:CompanyAddress` */
export class CompanyAddress extends OxmlLeafTextElement {

    public static override _Q = 'cppr:CompanyAddress';

}
/** Defines the DocumentAbstract Class. Serialized as `cppr:Abstract` */
export class DocumentAbstract extends OxmlLeafTextElement {

    public static override _Q = 'cppr:Abstract';

}
/** Defines the PublishDate Class. Serialized as `cppr:PublishDate` */
export class PublishDate extends OxmlLeafTextElement {

    public static override _Q = 'cppr:PublishDate';

}
/** Defines the CoverPageProperties Class. Serialized as `cppr:CoverPageProperties` */
export class CoverPageProperties extends OxmlCompositeElement<PublishDate | DocumentAbstract | CompanyAddress | CompanyPhoneNumber | CompanyFaxNumber | CompanyEmailAddress> {

    public static override _Q = 'cppr:CoverPageProperties';
    /** Returns PublishDate. */
    public get publishDate(): PublishDate | undefined { return this._f(PublishDate); }
    /** Returns DocumentAbstract. */
    public get documentAbstract(): DocumentAbstract | undefined { return this._f(DocumentAbstract); }
    /** Returns CompanyAddress. */
    public get companyAddress(): CompanyAddress | undefined { return this._f(CompanyAddress); }
    /** Returns CompanyPhoneNumber. */
    public get companyPhoneNumber(): CompanyPhoneNumber | undefined { return this._f(CompanyPhoneNumber); }
    /** Returns CompanyFaxNumber. */
    public get companyFaxNumber(): CompanyFaxNumber | undefined { return this._f(CompanyFaxNumber); }
    /** Returns CompanyEmailAddress. */
    public get companyEmailAddress(): CompanyEmailAddress | undefined { return this._f(CompanyEmailAddress); }

}

export function initOfficeCoverPagePropsNamespace() {
    CoverPageProperties._C = {
        'cppr:PublishDate': PublishDate,
        'cppr:Abstract': DocumentAbstract,
        'cppr:CompanyAddress': CompanyAddress,
        'cppr:CompanyPhone': CompanyPhoneNumber,
        'cppr:CompanyFax': CompanyFaxNumber,
        'cppr:CompanyEmail': CompanyEmailAddress,
    };
    return {
        prefix: 'cppr',
        xmlns: 'http://schemas.microsoft.com/office/2006/coverPageProps',
    };
}
