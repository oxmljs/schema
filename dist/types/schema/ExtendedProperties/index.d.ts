import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { VTBlob as VtVTBlob } from '../VariantTypes';
import { VTVector as VtVTVector } from '../VariantTypes';
/** Digital Signature. Serialized as `ap:DigSig` */
export declare class DigitalSignature extends OxmlCompositeElement<VtVTBlob> {
    static _Q: string;
    /** Binary Blob. */
    get vTBlob(): VtVTBlob | undefined;
}
/** Part Titles. Serialized as `ap:TitlesOfParts` */
export declare class TitlesOfParts extends OxmlCompositeElement<VtVTVector> {
    static _Q: string;
    /** Vector. */
    get vTVector(): VtVTVector | undefined;
}
/** Defines the VectorVariantType Class. */
export declare abstract class VectorVariantType extends OxmlCompositeElement<VtVTVector> {
    /** Vector. */
    get vTVector(): VtVTVector | undefined;
}
/** Hyperlink List. Serialized as `ap:HLinks` */
export declare class HyperlinkList extends VectorVariantType {
    static _Q: string;
}
/** Heading Pairs. Serialized as `ap:HeadingPairs` */
export declare class HeadingPairs extends VectorVariantType {
    static _Q: string;
}
/** Hyperlinks Changed. Serialized as `ap:HyperlinksChanged` */
export declare class HyperlinksChanged extends OxmlLeafTextElement {
    static _Q: string;
}
/** Shared Document. Serialized as `ap:SharedDoc` */
export declare class SharedDocument extends OxmlLeafTextElement {
    static _Q: string;
}
/** Links Up-to-Date. Serialized as `ap:LinksUpToDate` */
export declare class LinksUpToDate extends OxmlLeafTextElement {
    static _Q: string;
}
/** Thumbnail Display Mode. Serialized as `ap:ScaleCrop` */
export declare class ScaleCrop extends OxmlLeafTextElement {
    static _Q: string;
}
/** Document Security. Serialized as `ap:DocSecurity` */
export declare class DocumentSecurity extends OxmlLeafTextElement {
    static _Q: string;
}
/** Number of Characters (With Spaces). Serialized as `ap:CharactersWithSpaces` */
export declare class CharactersWithSpaces extends OxmlLeafTextElement {
    static _Q: string;
}
/** Total Number of Multimedia Clips. Serialized as `ap:MMClips` */
export declare class MultimediaClips extends OxmlLeafTextElement {
    static _Q: string;
}
/** Number of Hidden Slides. Serialized as `ap:HiddenSlides` */
export declare class HiddenSlides extends OxmlLeafTextElement {
    static _Q: string;
}
/** Total Edit Time Metadata Element. Serialized as `ap:TotalTime` */
export declare class TotalTime extends OxmlLeafTextElement {
    static _Q: string;
}
/** Number of Slides Containing Notes. Serialized as `ap:Notes` */
export declare class Notes extends OxmlLeafTextElement {
    static _Q: string;
}
/** Slides Metadata Element. Serialized as `ap:Slides` */
export declare class Slides extends OxmlLeafTextElement {
    static _Q: string;
}
/** Total Number of Paragraphs. Serialized as `ap:Paragraphs` */
export declare class Paragraphs extends OxmlLeafTextElement {
    static _Q: string;
}
/** Number of Lines. Serialized as `ap:Lines` */
export declare class Lines extends OxmlLeafTextElement {
    static _Q: string;
}
/** Total Number of Characters. Serialized as `ap:Characters` */
export declare class Characters extends OxmlLeafTextElement {
    static _Q: string;
}
/** Word Count. Serialized as `ap:Words` */
export declare class Words extends OxmlLeafTextElement {
    static _Q: string;
}
/** Total Number of Pages. Serialized as `ap:Pages` */
export declare class Pages extends OxmlLeafTextElement {
    static _Q: string;
}
/** Application Version. Serialized as `ap:AppVersion` */
export declare class ApplicationVersion extends OxmlLeafTextElement {
    static _Q: string;
}
/** Application Name. Serialized as `ap:Application` */
export declare class Application extends OxmlLeafTextElement {
    static _Q: string;
}
/** Relative Hyperlink Base. Serialized as `ap:HyperlinkBase` */
export declare class HyperlinkBase extends OxmlLeafTextElement {
    static _Q: string;
}
/** Intended Format of Presentation. Serialized as `ap:PresentationFormat` */
export declare class PresentationFormat extends OxmlLeafTextElement {
    static _Q: string;
}
/** Name of Company. Serialized as `ap:Company` */
export declare class Company extends OxmlLeafTextElement {
    static _Q: string;
}
/** Name of Manager. Serialized as `ap:Manager` */
export declare class Manager extends OxmlLeafTextElement {
    static _Q: string;
}
/** Name of Document Template. Serialized as `ap:Template` */
export declare class Template extends OxmlLeafTextElement {
    static _Q: string;
}
/** Application Specific File Properties. Serialized as `ap:Properties` */
export declare class Properties extends OxmlPartRootElement<Template | Manager | Company | Pages | Words | Characters | PresentationFormat | Lines | Paragraphs | Slides | Notes | TotalTime | HiddenSlides | MultimediaClips | ScaleCrop | HeadingPairs | TitlesOfParts | LinksUpToDate | CharactersWithSpaces | SharedDocument | HyperlinkBase | HyperlinkList | HyperlinksChanged | DigitalSignature | Application | ApplicationVersion | DocumentSecurity> {
    static _Q: string;
    /** Name of Document Template. */
    get template(): Template | undefined;
    /** Name of Manager. */
    get manager(): Manager | undefined;
    /** Name of Company. */
    get company(): Company | undefined;
    /** Total Number of Pages. */
    get pages(): Pages | undefined;
    /** Word Count. */
    get words(): Words | undefined;
    /** Total Number of Characters. */
    get characters(): Characters | undefined;
    /** Intended Format of Presentation. */
    get presentationFormat(): PresentationFormat | undefined;
    /** Number of Lines. */
    get lines(): Lines | undefined;
    /** Total Number of Paragraphs. */
    get paragraphs(): Paragraphs | undefined;
    /** Slides Metadata Element. */
    get slides(): Slides | undefined;
    /** Number of Slides Containing Notes. */
    get notes(): Notes | undefined;
    /** Total Edit Time Metadata Element. */
    get totalTime(): TotalTime | undefined;
    /** Number of Hidden Slides. */
    get hiddenSlides(): HiddenSlides | undefined;
    /** Total Number of Multimedia Clips. */
    get multimediaClips(): MultimediaClips | undefined;
    /** Thumbnail Display Mode. */
    get scaleCrop(): ScaleCrop | undefined;
    /** Heading Pairs. */
    get headingPairs(): HeadingPairs | undefined;
    /** Part Titles. */
    get titlesOfParts(): TitlesOfParts | undefined;
    /** Links Up-to-Date. */
    get linksUpToDate(): LinksUpToDate | undefined;
    /** Number of Characters (With Spaces). */
    get charactersWithSpaces(): CharactersWithSpaces | undefined;
    /** Shared Document. */
    get sharedDocument(): SharedDocument | undefined;
    /** Relative Hyperlink Base. */
    get hyperlinkBase(): HyperlinkBase | undefined;
    /** Hyperlink List. */
    get hyperlinkList(): HyperlinkList | undefined;
    /** Hyperlinks Changed. */
    get hyperlinksChanged(): HyperlinksChanged | undefined;
    /** Digital Signature. */
    get digitalSignature(): DigitalSignature | undefined;
    /** Application Name. */
    get application(): Application | undefined;
    /** Application Version. */
    get applicationVersion(): ApplicationVersion | undefined;
    /** Document Security. */
    get documentSecurity(): DocumentSecurity | undefined;
}
export declare function initExtendedPropertiesNamespace(): {
    prefix: string;
    xmlns: string;
};
