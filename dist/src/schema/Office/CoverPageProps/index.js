import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
class CompanyEmailAddress extends OxmlLeafTextElement {
  static _Q = "cppr:CompanyEmail";
}
class CompanyFaxNumber extends OxmlLeafTextElement {
  static _Q = "cppr:CompanyFax";
}
class CompanyPhoneNumber extends OxmlLeafTextElement {
  static _Q = "cppr:CompanyPhone";
}
class CompanyAddress extends OxmlLeafTextElement {
  static _Q = "cppr:CompanyAddress";
}
class DocumentAbstract extends OxmlLeafTextElement {
  static _Q = "cppr:Abstract";
}
class PublishDate extends OxmlLeafTextElement {
  static _Q = "cppr:PublishDate";
}
class CoverPageProperties extends OxmlCompositeElement {
  static _Q = "cppr:CoverPageProperties";
  /** Returns PublishDate. */
  get publishDate() {
    return this._f(PublishDate);
  }
  /** Returns DocumentAbstract. */
  get documentAbstract() {
    return this._f(DocumentAbstract);
  }
  /** Returns CompanyAddress. */
  get companyAddress() {
    return this._f(CompanyAddress);
  }
  /** Returns CompanyPhoneNumber. */
  get companyPhoneNumber() {
    return this._f(CompanyPhoneNumber);
  }
  /** Returns CompanyFaxNumber. */
  get companyFaxNumber() {
    return this._f(CompanyFaxNumber);
  }
  /** Returns CompanyEmailAddress. */
  get companyEmailAddress() {
    return this._f(CompanyEmailAddress);
  }
}
function initOfficeCoverPagePropsNamespace() {
  CoverPageProperties._C = {
    "cppr:PublishDate": PublishDate,
    "cppr:Abstract": DocumentAbstract,
    "cppr:CompanyAddress": CompanyAddress,
    "cppr:CompanyPhone": CompanyPhoneNumber,
    "cppr:CompanyFax": CompanyFaxNumber,
    "cppr:CompanyEmail": CompanyEmailAddress
  };
  return {
    prefix: "cppr",
    xmlns: "http://schemas.microsoft.com/office/2006/coverPageProps"
  };
}
export {
  CompanyAddress,
  CompanyEmailAddress,
  CompanyFaxNumber,
  CompanyPhoneNumber,
  CoverPageProperties,
  DocumentAbstract,
  PublishDate,
  initOfficeCoverPagePropsNamespace
};
