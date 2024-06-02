import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { VTBlob as VtVTBlob } from "../VariantTypes";
import { VTVector as VtVTVector } from "../VariantTypes";
class DigitalSignature extends OxmlCompositeElement {
  static _Q = "ap:DigSig";
  /** Binary Blob. */
  get vTBlob() {
    return this._f(VtVTBlob);
  }
}
class TitlesOfParts extends OxmlCompositeElement {
  static _Q = "ap:TitlesOfParts";
  /** Vector. */
  get vTVector() {
    return this._f(VtVTVector);
  }
}
class VectorVariantType extends OxmlCompositeElement {
  /** Vector. */
  get vTVector() {
    return this._f(VtVTVector);
  }
}
class HyperlinkList extends VectorVariantType {
  static _Q = "ap:HLinks";
}
class HeadingPairs extends VectorVariantType {
  static _Q = "ap:HeadingPairs";
}
class HyperlinksChanged extends OxmlLeafTextElement {
  static _Q = "ap:HyperlinksChanged";
}
class SharedDocument extends OxmlLeafTextElement {
  static _Q = "ap:SharedDoc";
}
class LinksUpToDate extends OxmlLeafTextElement {
  static _Q = "ap:LinksUpToDate";
}
class ScaleCrop extends OxmlLeafTextElement {
  static _Q = "ap:ScaleCrop";
}
class DocumentSecurity extends OxmlLeafTextElement {
  static _Q = "ap:DocSecurity";
}
class CharactersWithSpaces extends OxmlLeafTextElement {
  static _Q = "ap:CharactersWithSpaces";
}
class MultimediaClips extends OxmlLeafTextElement {
  static _Q = "ap:MMClips";
}
class HiddenSlides extends OxmlLeafTextElement {
  static _Q = "ap:HiddenSlides";
}
class TotalTime extends OxmlLeafTextElement {
  static _Q = "ap:TotalTime";
}
class Notes extends OxmlLeafTextElement {
  static _Q = "ap:Notes";
}
class Slides extends OxmlLeafTextElement {
  static _Q = "ap:Slides";
}
class Paragraphs extends OxmlLeafTextElement {
  static _Q = "ap:Paragraphs";
}
class Lines extends OxmlLeafTextElement {
  static _Q = "ap:Lines";
}
class Characters extends OxmlLeafTextElement {
  static _Q = "ap:Characters";
}
class Words extends OxmlLeafTextElement {
  static _Q = "ap:Words";
}
class Pages extends OxmlLeafTextElement {
  static _Q = "ap:Pages";
}
class ApplicationVersion extends OxmlLeafTextElement {
  static _Q = "ap:AppVersion";
}
class Application extends OxmlLeafTextElement {
  static _Q = "ap:Application";
}
class HyperlinkBase extends OxmlLeafTextElement {
  static _Q = "ap:HyperlinkBase";
}
class PresentationFormat extends OxmlLeafTextElement {
  static _Q = "ap:PresentationFormat";
}
class Company extends OxmlLeafTextElement {
  static _Q = "ap:Company";
}
class Manager extends OxmlLeafTextElement {
  static _Q = "ap:Manager";
}
class Template extends OxmlLeafTextElement {
  static _Q = "ap:Template";
}
class Properties extends OxmlPartRootElement {
  static _Q = "ap:Properties";
  /** Name of Document Template. */
  get template() {
    return this._f(Template);
  }
  /** Name of Manager. */
  get manager() {
    return this._f(Manager);
  }
  /** Name of Company. */
  get company() {
    return this._f(Company);
  }
  /** Total Number of Pages. */
  get pages() {
    return this._f(Pages);
  }
  /** Word Count. */
  get words() {
    return this._f(Words);
  }
  /** Total Number of Characters. */
  get characters() {
    return this._f(Characters);
  }
  /** Intended Format of Presentation. */
  get presentationFormat() {
    return this._f(PresentationFormat);
  }
  /** Number of Lines. */
  get lines() {
    return this._f(Lines);
  }
  /** Total Number of Paragraphs. */
  get paragraphs() {
    return this._f(Paragraphs);
  }
  /** Slides Metadata Element. */
  get slides() {
    return this._f(Slides);
  }
  /** Number of Slides Containing Notes. */
  get notes() {
    return this._f(Notes);
  }
  /** Total Edit Time Metadata Element. */
  get totalTime() {
    return this._f(TotalTime);
  }
  /** Number of Hidden Slides. */
  get hiddenSlides() {
    return this._f(HiddenSlides);
  }
  /** Total Number of Multimedia Clips. */
  get multimediaClips() {
    return this._f(MultimediaClips);
  }
  /** Thumbnail Display Mode. */
  get scaleCrop() {
    return this._f(ScaleCrop);
  }
  /** Heading Pairs. */
  get headingPairs() {
    return this._f(HeadingPairs);
  }
  /** Part Titles. */
  get titlesOfParts() {
    return this._f(TitlesOfParts);
  }
  /** Links Up-to-Date. */
  get linksUpToDate() {
    return this._f(LinksUpToDate);
  }
  /** Number of Characters (With Spaces). */
  get charactersWithSpaces() {
    return this._f(CharactersWithSpaces);
  }
  /** Shared Document. */
  get sharedDocument() {
    return this._f(SharedDocument);
  }
  /** Relative Hyperlink Base. */
  get hyperlinkBase() {
    return this._f(HyperlinkBase);
  }
  /** Hyperlink List. */
  get hyperlinkList() {
    return this._f(HyperlinkList);
  }
  /** Hyperlinks Changed. */
  get hyperlinksChanged() {
    return this._f(HyperlinksChanged);
  }
  /** Digital Signature. */
  get digitalSignature() {
    return this._f(DigitalSignature);
  }
  /** Application Name. */
  get application() {
    return this._f(Application);
  }
  /** Application Version. */
  get applicationVersion() {
    return this._f(ApplicationVersion);
  }
  /** Document Security. */
  get documentSecurity() {
    return this._f(DocumentSecurity);
  }
}
function initExtendedPropertiesNamespace() {
  DigitalSignature._C = {
    "vt:blob": VtVTBlob
  };
  TitlesOfParts._C = {
    "vt:vector": VtVTVector
  };
  VectorVariantType._C = {
    "vt:vector": VtVTVector
  };
  HyperlinkList._C = {
    "vt:vector": VtVTVector
  };
  HeadingPairs._C = {
    "vt:vector": VtVTVector
  };
  Properties._C = {
    "ap:Template": Template,
    "ap:Manager": Manager,
    "ap:Company": Company,
    "ap:Pages": Pages,
    "ap:Words": Words,
    "ap:Characters": Characters,
    "ap:PresentationFormat": PresentationFormat,
    "ap:Lines": Lines,
    "ap:Paragraphs": Paragraphs,
    "ap:Slides": Slides,
    "ap:Notes": Notes,
    "ap:TotalTime": TotalTime,
    "ap:HiddenSlides": HiddenSlides,
    "ap:MMClips": MultimediaClips,
    "ap:ScaleCrop": ScaleCrop,
    "ap:HeadingPairs": HeadingPairs,
    "ap:TitlesOfParts": TitlesOfParts,
    "ap:LinksUpToDate": LinksUpToDate,
    "ap:CharactersWithSpaces": CharactersWithSpaces,
    "ap:SharedDoc": SharedDocument,
    "ap:HyperlinkBase": HyperlinkBase,
    "ap:HLinks": HyperlinkList,
    "ap:HyperlinksChanged": HyperlinksChanged,
    "ap:DigSig": DigitalSignature,
    "ap:Application": Application,
    "ap:AppVersion": ApplicationVersion,
    "ap:DocSecurity": DocumentSecurity
  };
  return {
    prefix: "ap",
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
  };
}
export {
  Application,
  ApplicationVersion,
  Characters,
  CharactersWithSpaces,
  Company,
  DigitalSignature,
  DocumentSecurity,
  HeadingPairs,
  HiddenSlides,
  HyperlinkBase,
  HyperlinkList,
  HyperlinksChanged,
  Lines,
  LinksUpToDate,
  Manager,
  MultimediaClips,
  Notes,
  Pages,
  Paragraphs,
  PresentationFormat,
  Properties,
  ScaleCrop,
  SharedDocument,
  Slides,
  Template,
  TitlesOfParts,
  TotalTime,
  VectorVariantType,
  Words,
  initExtendedPropertiesNamespace
};
