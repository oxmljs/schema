import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { VTBlob as VtVTBlob } from '../VariantTypes';
import { VTVector as VtVTVector } from '../VariantTypes';


/** Digital Signature. Serialized as `ap:DigSig` */
export class DigitalSignature extends OxmlCompositeElement<VtVTBlob> {

    public static override _Q = 'ap:DigSig';
    /** Binary Blob. */
    public get vTBlob(): VtVTBlob | undefined { return this._f(VtVTBlob); }

}
/** Part Titles. Serialized as `ap:TitlesOfParts` */
export class TitlesOfParts extends OxmlCompositeElement<VtVTVector> {

    public static override _Q = 'ap:TitlesOfParts';
    /** Vector. */
    public get vTVector(): VtVTVector | undefined { return this._f(VtVTVector); }

}
/** Defines the VectorVariantType Class. */
export abstract class VectorVariantType extends OxmlCompositeElement<VtVTVector> {

    /** Vector. */
    public get vTVector(): VtVTVector | undefined { return this._f(VtVTVector); }

}
/** Hyperlink List. Serialized as `ap:HLinks` */
export class HyperlinkList extends VectorVariantType {

    public static override _Q = 'ap:HLinks';

}
/** Heading Pairs. Serialized as `ap:HeadingPairs` */
export class HeadingPairs extends VectorVariantType {

    public static override _Q = 'ap:HeadingPairs';

}
/** Hyperlinks Changed. Serialized as `ap:HyperlinksChanged` */
export class HyperlinksChanged extends OxmlLeafTextElement {

    public static override _Q = 'ap:HyperlinksChanged';

}
/** Shared Document. Serialized as `ap:SharedDoc` */
export class SharedDocument extends OxmlLeafTextElement {

    public static override _Q = 'ap:SharedDoc';

}
/** Links Up-to-Date. Serialized as `ap:LinksUpToDate` */
export class LinksUpToDate extends OxmlLeafTextElement {

    public static override _Q = 'ap:LinksUpToDate';

}
/** Thumbnail Display Mode. Serialized as `ap:ScaleCrop` */
export class ScaleCrop extends OxmlLeafTextElement {

    public static override _Q = 'ap:ScaleCrop';

}
/** Document Security. Serialized as `ap:DocSecurity` */
export class DocumentSecurity extends OxmlLeafTextElement {

    public static override _Q = 'ap:DocSecurity';

}
/** Number of Characters (With Spaces). Serialized as `ap:CharactersWithSpaces` */
export class CharactersWithSpaces extends OxmlLeafTextElement {

    public static override _Q = 'ap:CharactersWithSpaces';

}
/** Total Number of Multimedia Clips. Serialized as `ap:MMClips` */
export class MultimediaClips extends OxmlLeafTextElement {

    public static override _Q = 'ap:MMClips';

}
/** Number of Hidden Slides. Serialized as `ap:HiddenSlides` */
export class HiddenSlides extends OxmlLeafTextElement {

    public static override _Q = 'ap:HiddenSlides';

}
/** Total Edit Time Metadata Element. Serialized as `ap:TotalTime` */
export class TotalTime extends OxmlLeafTextElement {

    public static override _Q = 'ap:TotalTime';

}
/** Number of Slides Containing Notes. Serialized as `ap:Notes` */
export class Notes extends OxmlLeafTextElement {

    public static override _Q = 'ap:Notes';

}
/** Slides Metadata Element. Serialized as `ap:Slides` */
export class Slides extends OxmlLeafTextElement {

    public static override _Q = 'ap:Slides';

}
/** Total Number of Paragraphs. Serialized as `ap:Paragraphs` */
export class Paragraphs extends OxmlLeafTextElement {

    public static override _Q = 'ap:Paragraphs';

}
/** Number of Lines. Serialized as `ap:Lines` */
export class Lines extends OxmlLeafTextElement {

    public static override _Q = 'ap:Lines';

}
/** Total Number of Characters. Serialized as `ap:Characters` */
export class Characters extends OxmlLeafTextElement {

    public static override _Q = 'ap:Characters';

}
/** Word Count. Serialized as `ap:Words` */
export class Words extends OxmlLeafTextElement {

    public static override _Q = 'ap:Words';

}
/** Total Number of Pages. Serialized as `ap:Pages` */
export class Pages extends OxmlLeafTextElement {

    public static override _Q = 'ap:Pages';

}
/** Application Version. Serialized as `ap:AppVersion` */
export class ApplicationVersion extends OxmlLeafTextElement {

    public static override _Q = 'ap:AppVersion';

}
/** Application Name. Serialized as `ap:Application` */
export class Application extends OxmlLeafTextElement {

    public static override _Q = 'ap:Application';

}
/** Relative Hyperlink Base. Serialized as `ap:HyperlinkBase` */
export class HyperlinkBase extends OxmlLeafTextElement {

    public static override _Q = 'ap:HyperlinkBase';

}
/** Intended Format of Presentation. Serialized as `ap:PresentationFormat` */
export class PresentationFormat extends OxmlLeafTextElement {

    public static override _Q = 'ap:PresentationFormat';

}
/** Name of Company. Serialized as `ap:Company` */
export class Company extends OxmlLeafTextElement {

    public static override _Q = 'ap:Company';

}
/** Name of Manager. Serialized as `ap:Manager` */
export class Manager extends OxmlLeafTextElement {

    public static override _Q = 'ap:Manager';

}
/** Name of Document Template. Serialized as `ap:Template` */
export class Template extends OxmlLeafTextElement {

    public static override _Q = 'ap:Template';

}
/** Application Specific File Properties. Serialized as `ap:Properties` */
export class Properties extends OxmlPartRootElement<Template | Manager | Company | Pages | Words | Characters | PresentationFormat | Lines | Paragraphs | Slides | Notes | TotalTime | HiddenSlides | MultimediaClips | ScaleCrop | HeadingPairs | TitlesOfParts | LinksUpToDate | CharactersWithSpaces | SharedDocument | HyperlinkBase | HyperlinkList | HyperlinksChanged | DigitalSignature | Application | ApplicationVersion | DocumentSecurity> {

    public static override _Q = 'ap:Properties';
    /** Name of Document Template. */
    public get template(): Template | undefined { return this._f(Template); }
    /** Name of Manager. */
    public get manager(): Manager | undefined { return this._f(Manager); }
    /** Name of Company. */
    public get company(): Company | undefined { return this._f(Company); }
    /** Total Number of Pages. */
    public get pages(): Pages | undefined { return this._f(Pages); }
    /** Word Count. */
    public get words(): Words | undefined { return this._f(Words); }
    /** Total Number of Characters. */
    public get characters(): Characters | undefined { return this._f(Characters); }
    /** Intended Format of Presentation. */
    public get presentationFormat(): PresentationFormat | undefined { return this._f(PresentationFormat); }
    /** Number of Lines. */
    public get lines(): Lines | undefined { return this._f(Lines); }
    /** Total Number of Paragraphs. */
    public get paragraphs(): Paragraphs | undefined { return this._f(Paragraphs); }
    /** Slides Metadata Element. */
    public get slides(): Slides | undefined { return this._f(Slides); }
    /** Number of Slides Containing Notes. */
    public get notes(): Notes | undefined { return this._f(Notes); }
    /** Total Edit Time Metadata Element. */
    public get totalTime(): TotalTime | undefined { return this._f(TotalTime); }
    /** Number of Hidden Slides. */
    public get hiddenSlides(): HiddenSlides | undefined { return this._f(HiddenSlides); }
    /** Total Number of Multimedia Clips. */
    public get multimediaClips(): MultimediaClips | undefined { return this._f(MultimediaClips); }
    /** Thumbnail Display Mode. */
    public get scaleCrop(): ScaleCrop | undefined { return this._f(ScaleCrop); }
    /** Heading Pairs. */
    public get headingPairs(): HeadingPairs | undefined { return this._f(HeadingPairs); }
    /** Part Titles. */
    public get titlesOfParts(): TitlesOfParts | undefined { return this._f(TitlesOfParts); }
    /** Links Up-to-Date. */
    public get linksUpToDate(): LinksUpToDate | undefined { return this._f(LinksUpToDate); }
    /** Number of Characters (With Spaces). */
    public get charactersWithSpaces(): CharactersWithSpaces | undefined { return this._f(CharactersWithSpaces); }
    /** Shared Document. */
    public get sharedDocument(): SharedDocument | undefined { return this._f(SharedDocument); }
    /** Relative Hyperlink Base. */
    public get hyperlinkBase(): HyperlinkBase | undefined { return this._f(HyperlinkBase); }
    /** Hyperlink List. */
    public get hyperlinkList(): HyperlinkList | undefined { return this._f(HyperlinkList); }
    /** Hyperlinks Changed. */
    public get hyperlinksChanged(): HyperlinksChanged | undefined { return this._f(HyperlinksChanged); }
    /** Digital Signature. */
    public get digitalSignature(): DigitalSignature | undefined { return this._f(DigitalSignature); }
    /** Application Name. */
    public get application(): Application | undefined { return this._f(Application); }
    /** Application Version. */
    public get applicationVersion(): ApplicationVersion | undefined { return this._f(ApplicationVersion); }
    /** Document Security. */
    public get documentSecurity(): DocumentSecurity | undefined { return this._f(DocumentSecurity); }

}

export function initExtendedPropertiesNamespace() {
    DigitalSignature._C = {
        'vt:blob': VtVTBlob,
    };
    TitlesOfParts._C = {
        'vt:vector': VtVTVector,
    };
    VectorVariantType._C = {
        'vt:vector': VtVTVector,
    };
    HyperlinkList._C = {
        'vt:vector': VtVTVector,
    };
    HeadingPairs._C = {
        'vt:vector': VtVTVector,
    };
    Properties._C = {
        'ap:Template': Template,
        'ap:Manager': Manager,
        'ap:Company': Company,
        'ap:Pages': Pages,
        'ap:Words': Words,
        'ap:Characters': Characters,
        'ap:PresentationFormat': PresentationFormat,
        'ap:Lines': Lines,
        'ap:Paragraphs': Paragraphs,
        'ap:Slides': Slides,
        'ap:Notes': Notes,
        'ap:TotalTime': TotalTime,
        'ap:HiddenSlides': HiddenSlides,
        'ap:MMClips': MultimediaClips,
        'ap:ScaleCrop': ScaleCrop,
        'ap:HeadingPairs': HeadingPairs,
        'ap:TitlesOfParts': TitlesOfParts,
        'ap:LinksUpToDate': LinksUpToDate,
        'ap:CharactersWithSpaces': CharactersWithSpaces,
        'ap:SharedDoc': SharedDocument,
        'ap:HyperlinkBase': HyperlinkBase,
        'ap:HLinks': HyperlinkList,
        'ap:HyperlinksChanged': HyperlinksChanged,
        'ap:DigSig': DigitalSignature,
        'ap:Application': Application,
        'ap:AppVersion': ApplicationVersion,
        'ap:DocSecurity': DocumentSecurity,
    };
    return {
        prefix: 'ap',
        xmlns: 'http://schemas.openxmlformats.org/officeDocument/2006/extended-properties',
    };
}
