import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';


export enum DataSourceValues {
    /** Article in a Periodical. Serialized value: `ArticleInAPeriodical` */
    ArticleInAPeriodical = 'ArticleInAPeriodical',
    /** Book. Serialized value: `Book` */
    Book = 'Book',
    /** Book Section. Serialized value: `BookSection` */
    BookSection = 'BookSection',
    /** Journal Article. Serialized value: `JournalArticle` */
    JournalArticle = 'JournalArticle',
    /** Conference Proceedings. Serialized value: `ConferenceProceedings` */
    ConferenceProceedings = 'ConferenceProceedings',
    /** Reporter. Serialized value: `Report` */
    Report = 'Report',
    /** Sound Recording. Serialized value: `SoundRecording` */
    SoundRecording = 'SoundRecording',
    /** Performance. Serialized value: `Performance` */
    Performance = 'Performance',
    /** Art. Serialized value: `Art` */
    Art = 'Art',
    /** Document from Internet Site. Serialized value: `DocumentFromInternetSite` */
    DocumentFromInternetSite = 'DocumentFromInternetSite',
    /** Internet Site. Serialized value: `InternetSite` */
    InternetSite = 'InternetSite',
    /** Film. Serialized value: `Film` */
    Film = 'Film',
    /** Interview. Serialized value: `Interview` */
    Interview = 'Interview',
    /** Patent. Serialized value: `Patent` */
    Patent = 'Patent',
    /** Electronic Source. Serialized value: `ElectronicSource` */
    ElectronicSource = 'ElectronicSource',
    /** Case. Serialized value: `Case` */
    Case = 'Case',
    /** Miscellaneous. Serialized value: `Misc` */
    Miscellaneous = 'Misc',
}

export const DataSourceValuesArray = [
    DataSourceValues.ArticleInAPeriodical,
    DataSourceValues.Book,
    DataSourceValues.BookSection,
    DataSourceValues.JournalArticle,
    DataSourceValues.ConferenceProceedings,
    DataSourceValues.Report,
    DataSourceValues.SoundRecording,
    DataSourceValues.Performance,
    DataSourceValues.Art,
    DataSourceValues.DocumentFromInternetSite,
    DataSourceValues.InternetSite,
    DataSourceValues.Film,
    DataSourceValues.Interview,
    DataSourceValues.Patent,
    DataSourceValues.ElectronicSource,
    DataSourceValues.Case,
    DataSourceValues.Miscellaneous,
] as const;

/** Source. Serialized as `b:Source` */
export class Source extends OxmlCompositeElement<AbbreviatedCaseNumber | AlbumTitle | AuthorList | BookTitle | Broadcaster | BroadcastTitle | CaseNumber | ChapterNumber | City | Comments | ConferenceName | CountryRegion | Court | Day | DayAccessed | Department | Distributor | Edition | GuidString | Institution | InternetSiteTitle | Issue | JournalName | LcId | Medium | Month | MonthAccessed | NumberVolumes | Pages | PatentNumber | PeriodicalTitle | ProductionCompany | PublicationTitle | Publisher | RecordingNumber | ReferenceOrder | Reporter | SourceType | ShortTitle | StandardNumber | StateProvince | Station | Tag | Theater | ThesisType | Title | PatentType | UrlString | Version | Volume | Year | YearAccessed> {

    public static override _Q = 'b:Source';
    /** Abbreviated Case Number. */
    public get abbreviatedCaseNumber(): AbbreviatedCaseNumber | undefined { return this._f(AbbreviatedCaseNumber); }
    /** Album Title. */
    public get albumTitle(): AlbumTitle | undefined { return this._f(AlbumTitle); }
    /** Contributors List. */
    public get authorList(): AuthorList | undefined { return this._f(AuthorList); }
    /** Book Title. */
    public get bookTitle(): BookTitle | undefined { return this._f(BookTitle); }
    /** Broadcaster. */
    public get broadcaster(): Broadcaster | undefined { return this._f(Broadcaster); }
    /** Broadcast Title. */
    public get broadcastTitle(): BroadcastTitle | undefined { return this._f(BroadcastTitle); }
    /** Case Number. */
    public get caseNumber(): CaseNumber | undefined { return this._f(CaseNumber); }
    /** Chapter Number. */
    public get chapterNumber(): ChapterNumber | undefined { return this._f(ChapterNumber); }
    /** City. */
    public get city(): City | undefined { return this._f(City); }
    /** Comments. */
    public get comments(): Comments | undefined { return this._f(Comments); }
    /** Conference or Proceedings Name. */
    public get conferenceName(): ConferenceName | undefined { return this._f(ConferenceName); }
    /** Country or Region. */
    public get countryRegion(): CountryRegion | undefined { return this._f(CountryRegion); }
    /** Court. */
    public get court(): Court | undefined { return this._f(Court); }
    /** Day. */
    public get day(): Day | undefined { return this._f(Day); }
    /** Day Accessed. */
    public get dayAccessed(): DayAccessed | undefined { return this._f(DayAccessed); }
    /** Department. */
    public get department(): Department | undefined { return this._f(Department); }
    /** Distributor. */
    public get distributor(): Distributor | undefined { return this._f(Distributor); }
    /** Editor. */
    public get edition(): Edition | undefined { return this._f(Edition); }
    /** GUID. */
    public get guidString(): GuidString | undefined { return this._f(GuidString); }
    /** Institution. */
    public get institution(): Institution | undefined { return this._f(Institution); }
    /** Internet Site Title. */
    public get internetSiteTitle(): InternetSiteTitle | undefined { return this._f(InternetSiteTitle); }
    /** Issue. */
    public get issue(): Issue | undefined { return this._f(Issue); }
    /** Journal Name. */
    public get journalName(): JournalName | undefined { return this._f(JournalName); }
    /** Locale ID. */
    public get lcId(): LcId | undefined { return this._f(LcId); }
    /** Medium. */
    public get medium(): Medium | undefined { return this._f(Medium); }
    /** Month. */
    public get month(): Month | undefined { return this._f(Month); }
    /** Month Accessed. */
    public get monthAccessed(): MonthAccessed | undefined { return this._f(MonthAccessed); }
    /** Number of Volumes. */
    public get numberVolumes(): NumberVolumes | undefined { return this._f(NumberVolumes); }
    /** Pages. */
    public get pages(): Pages | undefined { return this._f(Pages); }
    /** Patent Number. */
    public get patentNumber(): PatentNumber | undefined { return this._f(PatentNumber); }
    /** Periodical Title. */
    public get periodicalTitle(): PeriodicalTitle | undefined { return this._f(PeriodicalTitle); }
    /** Production Company. */
    public get productionCompany(): ProductionCompany | undefined { return this._f(ProductionCompany); }
    /** Publication Title. */
    public get publicationTitle(): PublicationTitle | undefined { return this._f(PublicationTitle); }
    /** Publisher. */
    public get publisher(): Publisher | undefined { return this._f(Publisher); }
    /** Recording Number. */
    public get recordingNumber(): RecordingNumber | undefined { return this._f(RecordingNumber); }
    /** Reference Order. */
    public get referenceOrder(): ReferenceOrder | undefined { return this._f(ReferenceOrder); }
    /** Reporter. */
    public get reporter(): Reporter | undefined { return this._f(Reporter); }
    /** Source Type. */
    public get sourceType(): SourceType | undefined { return this._f(SourceType); }
    /** Short Title. */
    public get shortTitle(): ShortTitle | undefined { return this._f(ShortTitle); }
    /** Standard Number. */
    public get standardNumber(): StandardNumber | undefined { return this._f(StandardNumber); }
    /** State or Province. */
    public get stateProvince(): StateProvince | undefined { return this._f(StateProvince); }
    /** Station. */
    public get station(): Station | undefined { return this._f(Station); }
    /** Tag. */
    public get tag(): Tag | undefined { return this._f(Tag); }
    /** Theater. */
    public get theater(): Theater | undefined { return this._f(Theater); }
    /** Thesis Type. */
    public get thesisType(): ThesisType | undefined { return this._f(ThesisType); }
    /** Title. */
    public get title(): Title | undefined { return this._f(Title); }
    /** Type. */
    public get patentType(): PatentType | undefined { return this._f(PatentType); }
    /** URL. */
    public get urlString(): UrlString | undefined { return this._f(UrlString); }
    /** Version. */
    public get version(): Version | undefined { return this._f(Version); }
    /** Volume. */
    public get volume(): Volume | undefined { return this._f(Volume); }
    /** Year. */
    public get year(): Year | undefined { return this._f(Year); }
    /** Year Accessed. */
    public get yearAccessed(): YearAccessed | undefined { return this._f(YearAccessed); }

}
/** Source Type. Serialized as `b:SourceType` */
export class SourceType extends OxmlLeafTextElement {

    public static override _Q = 'b:SourceType';

}
/** Contributors List. Serialized as `b:Author` */
export class AuthorList extends OxmlCompositeElement<Artist | Author | BookAuthor | Compiler | Composer | Conductor | Counsel | Director | Editor | Interviewee | Interviewer | Inventor | Performer | ProducerName | Translator | Writer> {

    public static override _Q = 'b:Author';
    /** Artist. */
    public get artist(): Artist | undefined { return this._f(Artist); }
    /** Author. */
    public get author(): Author | undefined { return this._f(Author); }
    /** Book Author. */
    public get bookAuthor(): BookAuthor | undefined { return this._f(BookAuthor); }
    /** Compiler. */
    public get compiler(): Compiler | undefined { return this._f(Compiler); }
    /** Composer. */
    public get composer(): Composer | undefined { return this._f(Composer); }
    /** Conductor. */
    public get conductor(): Conductor | undefined { return this._f(Conductor); }
    /** Counsel. */
    public get counsel(): Counsel | undefined { return this._f(Counsel); }
    /** Director. */
    public get director(): Director | undefined { return this._f(Director); }
    /** Editor. */
    public get editor(): Editor | undefined { return this._f(Editor); }
    /** Interviewee. */
    public get interviewee(): Interviewee | undefined { return this._f(Interviewee); }
    /** Interviewer. */
    public get interviewer(): Interviewer | undefined { return this._f(Interviewer); }
    /** Inventor. */
    public get inventor(): Inventor | undefined { return this._f(Inventor); }
    /** Performer. */
    public get performer(): Performer | undefined { return this._f(Performer); }
    /** Producer Name. */
    public get producerName(): ProducerName | undefined { return this._f(ProducerName); }
    /** Translator. */
    public get translator(): Translator | undefined { return this._f(Translator); }
    /** Writer. */
    public get writer(): Writer | undefined { return this._f(Writer); }

}
/** Defines the NameOrCorporateType Class. */
export abstract class NameOrCorporateType extends OxmlCompositeElement<NameList | Corporate> {

    /** Returns NameList. */
    public get nameList(): NameList | undefined { return this._f(NameList); }
    /** Corporate Author. */
    public get corporate(): Corporate | undefined { return this._f(Corporate); }

}
/** Performer. Serialized as `b:Performer` */
export class Performer extends NameOrCorporateType {

    public static override _Q = 'b:Performer';

}
/** Author. Serialized as `b:Author` */
export class Author extends NameOrCorporateType {

    public static override _Q = 'b:Author';

}
/** Defines the NameType Class. */
export abstract class NameType extends OxmlCompositeElement<NameList> {

    /** Name List. */
    public get nameList(): NameList | undefined { return this._f(NameList); }

}
/** Writer. Serialized as `b:Writer` */
export class Writer extends NameType {

    public static override _Q = 'b:Writer';

}
/** Translator. Serialized as `b:Translator` */
export class Translator extends NameType {

    public static override _Q = 'b:Translator';

}
/** Producer Name. Serialized as `b:ProducerName` */
export class ProducerName extends NameType {

    public static override _Q = 'b:ProducerName';

}
/** Inventor. Serialized as `b:Inventor` */
export class Inventor extends NameType {

    public static override _Q = 'b:Inventor';

}
/** Interviewer. Serialized as `b:Interviewer` */
export class Interviewer extends NameType {

    public static override _Q = 'b:Interviewer';

}
/** Interviewee. Serialized as `b:Interviewee` */
export class Interviewee extends NameType {

    public static override _Q = 'b:Interviewee';

}
/** Editor. Serialized as `b:Editor` */
export class Editor extends NameType {

    public static override _Q = 'b:Editor';

}
/** Director. Serialized as `b:Director` */
export class Director extends NameType {

    public static override _Q = 'b:Director';

}
/** Counsel. Serialized as `b:Counsel` */
export class Counsel extends NameType {

    public static override _Q = 'b:Counsel';

}
/** Conductor. Serialized as `b:Conductor` */
export class Conductor extends NameType {

    public static override _Q = 'b:Conductor';

}
/** Composer. Serialized as `b:Composer` */
export class Composer extends NameType {

    public static override _Q = 'b:Composer';

}
/** Compiler. Serialized as `b:Compiler` */
export class Compiler extends NameType {

    public static override _Q = 'b:Compiler';

}
/** Book Author. Serialized as `b:BookAuthor` */
export class BookAuthor extends NameType {

    public static override _Q = 'b:BookAuthor';

}
/** Artist. Serialized as `b:Artist` */
export class Artist extends NameType {

    public static override _Q = 'b:Artist';

}
/** Name List. Serialized as `b:NameList` */
export class NameList extends OxmlCompositeElement<Person> {

    public static override _Q = 'b:NameList';

}
/** Year Accessed. Serialized as `b:YearAccessed` */
export class YearAccessed extends OxmlLeafTextElement {

    public static override _Q = 'b:YearAccessed';

}
/** Year. Serialized as `b:Year` */
export class Year extends OxmlLeafTextElement {

    public static override _Q = 'b:Year';

}
/** Volume. Serialized as `b:Volume` */
export class Volume extends OxmlLeafTextElement {

    public static override _Q = 'b:Volume';

}
/** Version. Serialized as `b:Version` */
export class Version extends OxmlLeafTextElement {

    public static override _Q = 'b:Version';

}
/** URL. Serialized as `b:URL` */
export class UrlString extends OxmlLeafTextElement {

    public static override _Q = 'b:URL';

}
/** Type. Serialized as `b:Type` */
export class PatentType extends OxmlLeafTextElement {

    public static override _Q = 'b:Type';

}
/** Title. Serialized as `b:Title` */
export class Title extends OxmlLeafTextElement {

    public static override _Q = 'b:Title';

}
/** Thesis Type. Serialized as `b:ThesisType` */
export class ThesisType extends OxmlLeafTextElement {

    public static override _Q = 'b:ThesisType';

}
/** Theater. Serialized as `b:Theater` */
export class Theater extends OxmlLeafTextElement {

    public static override _Q = 'b:Theater';

}
/** Tag. Serialized as `b:Tag` */
export class Tag extends OxmlLeafTextElement {

    public static override _Q = 'b:Tag';

}
/** Station. Serialized as `b:Station` */
export class Station extends OxmlLeafTextElement {

    public static override _Q = 'b:Station';

}
/** State or Province. Serialized as `b:StateProvince` */
export class StateProvince extends OxmlLeafTextElement {

    public static override _Q = 'b:StateProvince';

}
/** Standard Number. Serialized as `b:StandardNumber` */
export class StandardNumber extends OxmlLeafTextElement {

    public static override _Q = 'b:StandardNumber';

}
/** Short Title. Serialized as `b:ShortTitle` */
export class ShortTitle extends OxmlLeafTextElement {

    public static override _Q = 'b:ShortTitle';

}
/** Reporter. Serialized as `b:Reporter` */
export class Reporter extends OxmlLeafTextElement {

    public static override _Q = 'b:Reporter';

}
/** Reference Order. Serialized as `b:RefOrder` */
export class ReferenceOrder extends OxmlLeafTextElement {

    public static override _Q = 'b:RefOrder';

}
/** Recording Number. Serialized as `b:RecordingNumber` */
export class RecordingNumber extends OxmlLeafTextElement {

    public static override _Q = 'b:RecordingNumber';

}
/** Publisher. Serialized as `b:Publisher` */
export class Publisher extends OxmlLeafTextElement {

    public static override _Q = 'b:Publisher';

}
/** Publication Title. Serialized as `b:PublicationTitle` */
export class PublicationTitle extends OxmlLeafTextElement {

    public static override _Q = 'b:PublicationTitle';

}
/** Production Company. Serialized as `b:ProductionCompany` */
export class ProductionCompany extends OxmlLeafTextElement {

    public static override _Q = 'b:ProductionCompany';

}
/** Periodical Title. Serialized as `b:PeriodicalTitle` */
export class PeriodicalTitle extends OxmlLeafTextElement {

    public static override _Q = 'b:PeriodicalTitle';

}
/** Patent Number. Serialized as `b:PatentNumber` */
export class PatentNumber extends OxmlLeafTextElement {

    public static override _Q = 'b:PatentNumber';

}
/** Pages. Serialized as `b:Pages` */
export class Pages extends OxmlLeafTextElement {

    public static override _Q = 'b:Pages';

}
/** Number of Volumes. Serialized as `b:NumberVolumes` */
export class NumberVolumes extends OxmlLeafTextElement {

    public static override _Q = 'b:NumberVolumes';

}
/** Month Accessed. Serialized as `b:MonthAccessed` */
export class MonthAccessed extends OxmlLeafTextElement {

    public static override _Q = 'b:MonthAccessed';

}
/** Month. Serialized as `b:Month` */
export class Month extends OxmlLeafTextElement {

    public static override _Q = 'b:Month';

}
/** Medium. Serialized as `b:Medium` */
export class Medium extends OxmlLeafTextElement {

    public static override _Q = 'b:Medium';

}
/** Locale ID. Serialized as `b:LCID` */
export class LcId extends OxmlLeafTextElement {

    public static override _Q = 'b:LCID';

}
/** Journal Name. Serialized as `b:JournalName` */
export class JournalName extends OxmlLeafTextElement {

    public static override _Q = 'b:JournalName';

}
/** Issue. Serialized as `b:Issue` */
export class Issue extends OxmlLeafTextElement {

    public static override _Q = 'b:Issue';

}
/** Internet Site Title. Serialized as `b:InternetSiteTitle` */
export class InternetSiteTitle extends OxmlLeafTextElement {

    public static override _Q = 'b:InternetSiteTitle';

}
/** Institution. Serialized as `b:Institution` */
export class Institution extends OxmlLeafTextElement {

    public static override _Q = 'b:Institution';

}
/** GUID. Serialized as `b:Guid` */
export class GuidString extends OxmlLeafTextElement {

    public static override _Q = 'b:Guid';

}
/** Editor. Serialized as `b:Edition` */
export class Edition extends OxmlLeafTextElement {

    public static override _Q = 'b:Edition';

}
/** Distributor. Serialized as `b:Distributor` */
export class Distributor extends OxmlLeafTextElement {

    public static override _Q = 'b:Distributor';

}
/** Department. Serialized as `b:Department` */
export class Department extends OxmlLeafTextElement {

    public static override _Q = 'b:Department';

}
/** Day Accessed. Serialized as `b:DayAccessed` */
export class DayAccessed extends OxmlLeafTextElement {

    public static override _Q = 'b:DayAccessed';

}
/** Day. Serialized as `b:Day` */
export class Day extends OxmlLeafTextElement {

    public static override _Q = 'b:Day';

}
/** Court. Serialized as `b:Court` */
export class Court extends OxmlLeafTextElement {

    public static override _Q = 'b:Court';

}
/** Country or Region. Serialized as `b:CountryRegion` */
export class CountryRegion extends OxmlLeafTextElement {

    public static override _Q = 'b:CountryRegion';

}
/** Conference or Proceedings Name. Serialized as `b:ConferenceName` */
export class ConferenceName extends OxmlLeafTextElement {

    public static override _Q = 'b:ConferenceName';

}
/** Comments. Serialized as `b:Comments` */
export class Comments extends OxmlLeafTextElement {

    public static override _Q = 'b:Comments';

}
/** City. Serialized as `b:City` */
export class City extends OxmlLeafTextElement {

    public static override _Q = 'b:City';

}
/** Chapter Number. Serialized as `b:ChapterNumber` */
export class ChapterNumber extends OxmlLeafTextElement {

    public static override _Q = 'b:ChapterNumber';

}
/** Case Number. Serialized as `b:CaseNumber` */
export class CaseNumber extends OxmlLeafTextElement {

    public static override _Q = 'b:CaseNumber';

}
/** Broadcast Title. Serialized as `b:BroadcastTitle` */
export class BroadcastTitle extends OxmlLeafTextElement {

    public static override _Q = 'b:BroadcastTitle';

}
/** Broadcaster. Serialized as `b:Broadcaster` */
export class Broadcaster extends OxmlLeafTextElement {

    public static override _Q = 'b:Broadcaster';

}
/** Book Title. Serialized as `b:BookTitle` */
export class BookTitle extends OxmlLeafTextElement {

    public static override _Q = 'b:BookTitle';

}
/** Album Title. Serialized as `b:AlbumTitle` */
export class AlbumTitle extends OxmlLeafTextElement {

    public static override _Q = 'b:AlbumTitle';

}
/** Abbreviated Case Number. Serialized as `b:AbbreviatedCaseNumber` */
export class AbbreviatedCaseNumber extends OxmlLeafTextElement {

    public static override _Q = 'b:AbbreviatedCaseNumber';

}
/** Corporate Author. Serialized as `b:Corporate` */
export class Corporate extends OxmlLeafTextElement {

    public static override _Q = 'b:Corporate';

}
/** Person's Middle, or Other, Name. Serialized as `b:Middle` */
export class Middle extends OxmlLeafTextElement {

    public static override _Q = 'b:Middle';

}
/** Person's First, or Given, Name. Serialized as `b:First` */
export class First extends OxmlLeafTextElement {

    public static override _Q = 'b:First';

}
/** Person's Last, or Family, Name. Serialized as `b:Last` */
export class Last extends OxmlLeafTextElement {

    public static override _Q = 'b:Last';

}
/** Person. Serialized as `b:Person` */
export class Person extends OxmlCompositeElement<Last | First | Middle> {

    public static override _Q = 'b:Person';

}
/** Sources. Serialized as `b:Sources` */
export class Sources extends OxmlPartRootElement<Source> {

    public static override _Q = 'b:Sources';
    public static override _A = [':SelectedStyle',':StyleName',':URI',];
    /** Selected Style. Serialized as `:SelectedStyle` */
    public get selectedStyle(): StringValue | undefined { return this._g(':SelectedStyle'); }
    public set selectedStyle(v: StringValue | undefined) { this._s(':SelectedStyle', v); }
    /** Documentation Style Name. Serialized as `:StyleName` */
    public get styleName(): StringValue | undefined { return this._g(':StyleName'); }
    public set styleName(v: StringValue | undefined) { this._s(':StyleName', v); }
    /** Uniform Resource Identifier. Serialized as `:URI` */
    public get uri(): StringValue | undefined { return this._g(':URI'); }
    public set uri(v: StringValue | undefined) { this._s(':URI', v); }

}

export function initBibliographyNamespace() {
    Source._C = {
        'b:AbbreviatedCaseNumber': AbbreviatedCaseNumber,
        'b:AlbumTitle': AlbumTitle,
        'b:Author': AuthorList,
        'b:BookTitle': BookTitle,
        'b:Broadcaster': Broadcaster,
        'b:BroadcastTitle': BroadcastTitle,
        'b:CaseNumber': CaseNumber,
        'b:ChapterNumber': ChapterNumber,
        'b:City': City,
        'b:Comments': Comments,
        'b:ConferenceName': ConferenceName,
        'b:CountryRegion': CountryRegion,
        'b:Court': Court,
        'b:Day': Day,
        'b:DayAccessed': DayAccessed,
        'b:Department': Department,
        'b:Distributor': Distributor,
        'b:Edition': Edition,
        'b:Guid': GuidString,
        'b:Institution': Institution,
        'b:InternetSiteTitle': InternetSiteTitle,
        'b:Issue': Issue,
        'b:JournalName': JournalName,
        'b:LCID': LcId,
        'b:Medium': Medium,
        'b:Month': Month,
        'b:MonthAccessed': MonthAccessed,
        'b:NumberVolumes': NumberVolumes,
        'b:Pages': Pages,
        'b:PatentNumber': PatentNumber,
        'b:PeriodicalTitle': PeriodicalTitle,
        'b:ProductionCompany': ProductionCompany,
        'b:PublicationTitle': PublicationTitle,
        'b:Publisher': Publisher,
        'b:RecordingNumber': RecordingNumber,
        'b:RefOrder': ReferenceOrder,
        'b:Reporter': Reporter,
        'b:SourceType': SourceType,
        'b:ShortTitle': ShortTitle,
        'b:StandardNumber': StandardNumber,
        'b:StateProvince': StateProvince,
        'b:Station': Station,
        'b:Tag': Tag,
        'b:Theater': Theater,
        'b:ThesisType': ThesisType,
        'b:Title': Title,
        'b:Type': PatentType,
        'b:URL': UrlString,
        'b:Version': Version,
        'b:Volume': Volume,
        'b:Year': Year,
        'b:YearAccessed': YearAccessed,
    };
    AuthorList._C = {
        'b:Artist': Artist,
        'b:Author': Author,
        'b:BookAuthor': BookAuthor,
        'b:Compiler': Compiler,
        'b:Composer': Composer,
        'b:Conductor': Conductor,
        'b:Counsel': Counsel,
        'b:Director': Director,
        'b:Editor': Editor,
        'b:Interviewee': Interviewee,
        'b:Interviewer': Interviewer,
        'b:Inventor': Inventor,
        'b:Performer': Performer,
        'b:ProducerName': ProducerName,
        'b:Translator': Translator,
        'b:Writer': Writer,
    };
    NameOrCorporateType._C = {
        'b:NameList': NameList,
        'b:Corporate': Corporate,
    };
    Performer._C = {
        'b:NameList': NameList,
        'b:Corporate': Corporate,
    };
    Author._C = {
        'b:NameList': NameList,
        'b:Corporate': Corporate,
    };
    NameType._C = {
        'b:NameList': NameList,
    };
    Writer._C = {
        'b:NameList': NameList,
    };
    Translator._C = {
        'b:NameList': NameList,
    };
    ProducerName._C = {
        'b:NameList': NameList,
    };
    Inventor._C = {
        'b:NameList': NameList,
    };
    Interviewer._C = {
        'b:NameList': NameList,
    };
    Interviewee._C = {
        'b:NameList': NameList,
    };
    Editor._C = {
        'b:NameList': NameList,
    };
    Director._C = {
        'b:NameList': NameList,
    };
    Counsel._C = {
        'b:NameList': NameList,
    };
    Conductor._C = {
        'b:NameList': NameList,
    };
    Composer._C = {
        'b:NameList': NameList,
    };
    Compiler._C = {
        'b:NameList': NameList,
    };
    BookAuthor._C = {
        'b:NameList': NameList,
    };
    Artist._C = {
        'b:NameList': NameList,
    };
    NameList._C = {
        'b:Person': Person,
    };
    Person._C = {
        'b:Last': Last,
        'b:First': First,
        'b:Middle': Middle,
    };
    Sources._C = {
        'b:Source': Source,
    };
    Sources._D = {
        ':SelectedStyle': new OxmlAttr(':SelectedStyle', OxmlType.StringValue),
        ':StyleName': new OxmlAttr(':StyleName', OxmlType.StringValue),
        ':URI': new OxmlAttr(':URI', OxmlType.StringValue),
    };
    return {
        prefix: 'b',
        xmlns: 'http://schemas.openxmlformats.org/officeDocument/2006/bibliography',
    };
}
