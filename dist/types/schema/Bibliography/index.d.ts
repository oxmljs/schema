import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { StringValue } from '../../framework/types/StringValue';
export declare enum DataSourceValues {
    /** Article in a Periodical. Serialized value: `ArticleInAPeriodical` */
    ArticleInAPeriodical = "ArticleInAPeriodical",
    /** Book. Serialized value: `Book` */
    Book = "Book",
    /** Book Section. Serialized value: `BookSection` */
    BookSection = "BookSection",
    /** Journal Article. Serialized value: `JournalArticle` */
    JournalArticle = "JournalArticle",
    /** Conference Proceedings. Serialized value: `ConferenceProceedings` */
    ConferenceProceedings = "ConferenceProceedings",
    /** Reporter. Serialized value: `Report` */
    Report = "Report",
    /** Sound Recording. Serialized value: `SoundRecording` */
    SoundRecording = "SoundRecording",
    /** Performance. Serialized value: `Performance` */
    Performance = "Performance",
    /** Art. Serialized value: `Art` */
    Art = "Art",
    /** Document from Internet Site. Serialized value: `DocumentFromInternetSite` */
    DocumentFromInternetSite = "DocumentFromInternetSite",
    /** Internet Site. Serialized value: `InternetSite` */
    InternetSite = "InternetSite",
    /** Film. Serialized value: `Film` */
    Film = "Film",
    /** Interview. Serialized value: `Interview` */
    Interview = "Interview",
    /** Patent. Serialized value: `Patent` */
    Patent = "Patent",
    /** Electronic Source. Serialized value: `ElectronicSource` */
    ElectronicSource = "ElectronicSource",
    /** Case. Serialized value: `Case` */
    Case = "Case",
    /** Miscellaneous. Serialized value: `Misc` */
    Miscellaneous = "Misc"
}
export declare const DataSourceValuesArray: readonly [DataSourceValues.ArticleInAPeriodical, DataSourceValues.Book, DataSourceValues.BookSection, DataSourceValues.JournalArticle, DataSourceValues.ConferenceProceedings, DataSourceValues.Report, DataSourceValues.SoundRecording, DataSourceValues.Performance, DataSourceValues.Art, DataSourceValues.DocumentFromInternetSite, DataSourceValues.InternetSite, DataSourceValues.Film, DataSourceValues.Interview, DataSourceValues.Patent, DataSourceValues.ElectronicSource, DataSourceValues.Case, DataSourceValues.Miscellaneous];
/** Source. Serialized as `b:Source` */
export declare class Source extends OxmlCompositeElement<AbbreviatedCaseNumber | AlbumTitle | AuthorList | BookTitle | Broadcaster | BroadcastTitle | CaseNumber | ChapterNumber | City | Comments | ConferenceName | CountryRegion | Court | Day | DayAccessed | Department | Distributor | Edition | GuidString | Institution | InternetSiteTitle | Issue | JournalName | LcId | Medium | Month | MonthAccessed | NumberVolumes | Pages | PatentNumber | PeriodicalTitle | ProductionCompany | PublicationTitle | Publisher | RecordingNumber | ReferenceOrder | Reporter | SourceType | ShortTitle | StandardNumber | StateProvince | Station | Tag | Theater | ThesisType | Title | PatentType | UrlString | Version | Volume | Year | YearAccessed> {
    static _Q: string;
    /** Abbreviated Case Number. */
    get abbreviatedCaseNumber(): AbbreviatedCaseNumber | undefined;
    /** Album Title. */
    get albumTitle(): AlbumTitle | undefined;
    /** Contributors List. */
    get authorList(): AuthorList | undefined;
    /** Book Title. */
    get bookTitle(): BookTitle | undefined;
    /** Broadcaster. */
    get broadcaster(): Broadcaster | undefined;
    /** Broadcast Title. */
    get broadcastTitle(): BroadcastTitle | undefined;
    /** Case Number. */
    get caseNumber(): CaseNumber | undefined;
    /** Chapter Number. */
    get chapterNumber(): ChapterNumber | undefined;
    /** City. */
    get city(): City | undefined;
    /** Comments. */
    get comments(): Comments | undefined;
    /** Conference or Proceedings Name. */
    get conferenceName(): ConferenceName | undefined;
    /** Country or Region. */
    get countryRegion(): CountryRegion | undefined;
    /** Court. */
    get court(): Court | undefined;
    /** Day. */
    get day(): Day | undefined;
    /** Day Accessed. */
    get dayAccessed(): DayAccessed | undefined;
    /** Department. */
    get department(): Department | undefined;
    /** Distributor. */
    get distributor(): Distributor | undefined;
    /** Editor. */
    get edition(): Edition | undefined;
    /** GUID. */
    get guidString(): GuidString | undefined;
    /** Institution. */
    get institution(): Institution | undefined;
    /** Internet Site Title. */
    get internetSiteTitle(): InternetSiteTitle | undefined;
    /** Issue. */
    get issue(): Issue | undefined;
    /** Journal Name. */
    get journalName(): JournalName | undefined;
    /** Locale ID. */
    get lcId(): LcId | undefined;
    /** Medium. */
    get medium(): Medium | undefined;
    /** Month. */
    get month(): Month | undefined;
    /** Month Accessed. */
    get monthAccessed(): MonthAccessed | undefined;
    /** Number of Volumes. */
    get numberVolumes(): NumberVolumes | undefined;
    /** Pages. */
    get pages(): Pages | undefined;
    /** Patent Number. */
    get patentNumber(): PatentNumber | undefined;
    /** Periodical Title. */
    get periodicalTitle(): PeriodicalTitle | undefined;
    /** Production Company. */
    get productionCompany(): ProductionCompany | undefined;
    /** Publication Title. */
    get publicationTitle(): PublicationTitle | undefined;
    /** Publisher. */
    get publisher(): Publisher | undefined;
    /** Recording Number. */
    get recordingNumber(): RecordingNumber | undefined;
    /** Reference Order. */
    get referenceOrder(): ReferenceOrder | undefined;
    /** Reporter. */
    get reporter(): Reporter | undefined;
    /** Source Type. */
    get sourceType(): SourceType | undefined;
    /** Short Title. */
    get shortTitle(): ShortTitle | undefined;
    /** Standard Number. */
    get standardNumber(): StandardNumber | undefined;
    /** State or Province. */
    get stateProvince(): StateProvince | undefined;
    /** Station. */
    get station(): Station | undefined;
    /** Tag. */
    get tag(): Tag | undefined;
    /** Theater. */
    get theater(): Theater | undefined;
    /** Thesis Type. */
    get thesisType(): ThesisType | undefined;
    /** Title. */
    get title(): Title | undefined;
    /** Type. */
    get patentType(): PatentType | undefined;
    /** URL. */
    get urlString(): UrlString | undefined;
    /** Version. */
    get version(): Version | undefined;
    /** Volume. */
    get volume(): Volume | undefined;
    /** Year. */
    get year(): Year | undefined;
    /** Year Accessed. */
    get yearAccessed(): YearAccessed | undefined;
}
/** Source Type. Serialized as `b:SourceType` */
export declare class SourceType extends OxmlLeafTextElement {
    static _Q: string;
}
/** Contributors List. Serialized as `b:Author` */
export declare class AuthorList extends OxmlCompositeElement<Artist | Author | BookAuthor | Compiler | Composer | Conductor | Counsel | Director | Editor | Interviewee | Interviewer | Inventor | Performer | ProducerName | Translator | Writer> {
    static _Q: string;
    /** Artist. */
    get artist(): Artist | undefined;
    /** Author. */
    get author(): Author | undefined;
    /** Book Author. */
    get bookAuthor(): BookAuthor | undefined;
    /** Compiler. */
    get compiler(): Compiler | undefined;
    /** Composer. */
    get composer(): Composer | undefined;
    /** Conductor. */
    get conductor(): Conductor | undefined;
    /** Counsel. */
    get counsel(): Counsel | undefined;
    /** Director. */
    get director(): Director | undefined;
    /** Editor. */
    get editor(): Editor | undefined;
    /** Interviewee. */
    get interviewee(): Interviewee | undefined;
    /** Interviewer. */
    get interviewer(): Interviewer | undefined;
    /** Inventor. */
    get inventor(): Inventor | undefined;
    /** Performer. */
    get performer(): Performer | undefined;
    /** Producer Name. */
    get producerName(): ProducerName | undefined;
    /** Translator. */
    get translator(): Translator | undefined;
    /** Writer. */
    get writer(): Writer | undefined;
}
/** Defines the NameOrCorporateType Class. */
export declare abstract class NameOrCorporateType extends OxmlCompositeElement<NameList | Corporate> {
    /** Returns NameList. */
    get nameList(): NameList | undefined;
    /** Corporate Author. */
    get corporate(): Corporate | undefined;
}
/** Performer. Serialized as `b:Performer` */
export declare class Performer extends NameOrCorporateType {
    static _Q: string;
}
/** Author. Serialized as `b:Author` */
export declare class Author extends NameOrCorporateType {
    static _Q: string;
}
/** Defines the NameType Class. */
export declare abstract class NameType extends OxmlCompositeElement<NameList> {
    /** Name List. */
    get nameList(): NameList | undefined;
}
/** Writer. Serialized as `b:Writer` */
export declare class Writer extends NameType {
    static _Q: string;
}
/** Translator. Serialized as `b:Translator` */
export declare class Translator extends NameType {
    static _Q: string;
}
/** Producer Name. Serialized as `b:ProducerName` */
export declare class ProducerName extends NameType {
    static _Q: string;
}
/** Inventor. Serialized as `b:Inventor` */
export declare class Inventor extends NameType {
    static _Q: string;
}
/** Interviewer. Serialized as `b:Interviewer` */
export declare class Interviewer extends NameType {
    static _Q: string;
}
/** Interviewee. Serialized as `b:Interviewee` */
export declare class Interviewee extends NameType {
    static _Q: string;
}
/** Editor. Serialized as `b:Editor` */
export declare class Editor extends NameType {
    static _Q: string;
}
/** Director. Serialized as `b:Director` */
export declare class Director extends NameType {
    static _Q: string;
}
/** Counsel. Serialized as `b:Counsel` */
export declare class Counsel extends NameType {
    static _Q: string;
}
/** Conductor. Serialized as `b:Conductor` */
export declare class Conductor extends NameType {
    static _Q: string;
}
/** Composer. Serialized as `b:Composer` */
export declare class Composer extends NameType {
    static _Q: string;
}
/** Compiler. Serialized as `b:Compiler` */
export declare class Compiler extends NameType {
    static _Q: string;
}
/** Book Author. Serialized as `b:BookAuthor` */
export declare class BookAuthor extends NameType {
    static _Q: string;
}
/** Artist. Serialized as `b:Artist` */
export declare class Artist extends NameType {
    static _Q: string;
}
/** Name List. Serialized as `b:NameList` */
export declare class NameList extends OxmlCompositeElement<Person> {
    static _Q: string;
}
/** Year Accessed. Serialized as `b:YearAccessed` */
export declare class YearAccessed extends OxmlLeafTextElement {
    static _Q: string;
}
/** Year. Serialized as `b:Year` */
export declare class Year extends OxmlLeafTextElement {
    static _Q: string;
}
/** Volume. Serialized as `b:Volume` */
export declare class Volume extends OxmlLeafTextElement {
    static _Q: string;
}
/** Version. Serialized as `b:Version` */
export declare class Version extends OxmlLeafTextElement {
    static _Q: string;
}
/** URL. Serialized as `b:URL` */
export declare class UrlString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Type. Serialized as `b:Type` */
export declare class PatentType extends OxmlLeafTextElement {
    static _Q: string;
}
/** Title. Serialized as `b:Title` */
export declare class Title extends OxmlLeafTextElement {
    static _Q: string;
}
/** Thesis Type. Serialized as `b:ThesisType` */
export declare class ThesisType extends OxmlLeafTextElement {
    static _Q: string;
}
/** Theater. Serialized as `b:Theater` */
export declare class Theater extends OxmlLeafTextElement {
    static _Q: string;
}
/** Tag. Serialized as `b:Tag` */
export declare class Tag extends OxmlLeafTextElement {
    static _Q: string;
}
/** Station. Serialized as `b:Station` */
export declare class Station extends OxmlLeafTextElement {
    static _Q: string;
}
/** State or Province. Serialized as `b:StateProvince` */
export declare class StateProvince extends OxmlLeafTextElement {
    static _Q: string;
}
/** Standard Number. Serialized as `b:StandardNumber` */
export declare class StandardNumber extends OxmlLeafTextElement {
    static _Q: string;
}
/** Short Title. Serialized as `b:ShortTitle` */
export declare class ShortTitle extends OxmlLeafTextElement {
    static _Q: string;
}
/** Reporter. Serialized as `b:Reporter` */
export declare class Reporter extends OxmlLeafTextElement {
    static _Q: string;
}
/** Reference Order. Serialized as `b:RefOrder` */
export declare class ReferenceOrder extends OxmlLeafTextElement {
    static _Q: string;
}
/** Recording Number. Serialized as `b:RecordingNumber` */
export declare class RecordingNumber extends OxmlLeafTextElement {
    static _Q: string;
}
/** Publisher. Serialized as `b:Publisher` */
export declare class Publisher extends OxmlLeafTextElement {
    static _Q: string;
}
/** Publication Title. Serialized as `b:PublicationTitle` */
export declare class PublicationTitle extends OxmlLeafTextElement {
    static _Q: string;
}
/** Production Company. Serialized as `b:ProductionCompany` */
export declare class ProductionCompany extends OxmlLeafTextElement {
    static _Q: string;
}
/** Periodical Title. Serialized as `b:PeriodicalTitle` */
export declare class PeriodicalTitle extends OxmlLeafTextElement {
    static _Q: string;
}
/** Patent Number. Serialized as `b:PatentNumber` */
export declare class PatentNumber extends OxmlLeafTextElement {
    static _Q: string;
}
/** Pages. Serialized as `b:Pages` */
export declare class Pages extends OxmlLeafTextElement {
    static _Q: string;
}
/** Number of Volumes. Serialized as `b:NumberVolumes` */
export declare class NumberVolumes extends OxmlLeafTextElement {
    static _Q: string;
}
/** Month Accessed. Serialized as `b:MonthAccessed` */
export declare class MonthAccessed extends OxmlLeafTextElement {
    static _Q: string;
}
/** Month. Serialized as `b:Month` */
export declare class Month extends OxmlLeafTextElement {
    static _Q: string;
}
/** Medium. Serialized as `b:Medium` */
export declare class Medium extends OxmlLeafTextElement {
    static _Q: string;
}
/** Locale ID. Serialized as `b:LCID` */
export declare class LcId extends OxmlLeafTextElement {
    static _Q: string;
}
/** Journal Name. Serialized as `b:JournalName` */
export declare class JournalName extends OxmlLeafTextElement {
    static _Q: string;
}
/** Issue. Serialized as `b:Issue` */
export declare class Issue extends OxmlLeafTextElement {
    static _Q: string;
}
/** Internet Site Title. Serialized as `b:InternetSiteTitle` */
export declare class InternetSiteTitle extends OxmlLeafTextElement {
    static _Q: string;
}
/** Institution. Serialized as `b:Institution` */
export declare class Institution extends OxmlLeafTextElement {
    static _Q: string;
}
/** GUID. Serialized as `b:Guid` */
export declare class GuidString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Editor. Serialized as `b:Edition` */
export declare class Edition extends OxmlLeafTextElement {
    static _Q: string;
}
/** Distributor. Serialized as `b:Distributor` */
export declare class Distributor extends OxmlLeafTextElement {
    static _Q: string;
}
/** Department. Serialized as `b:Department` */
export declare class Department extends OxmlLeafTextElement {
    static _Q: string;
}
/** Day Accessed. Serialized as `b:DayAccessed` */
export declare class DayAccessed extends OxmlLeafTextElement {
    static _Q: string;
}
/** Day. Serialized as `b:Day` */
export declare class Day extends OxmlLeafTextElement {
    static _Q: string;
}
/** Court. Serialized as `b:Court` */
export declare class Court extends OxmlLeafTextElement {
    static _Q: string;
}
/** Country or Region. Serialized as `b:CountryRegion` */
export declare class CountryRegion extends OxmlLeafTextElement {
    static _Q: string;
}
/** Conference or Proceedings Name. Serialized as `b:ConferenceName` */
export declare class ConferenceName extends OxmlLeafTextElement {
    static _Q: string;
}
/** Comments. Serialized as `b:Comments` */
export declare class Comments extends OxmlLeafTextElement {
    static _Q: string;
}
/** City. Serialized as `b:City` */
export declare class City extends OxmlLeafTextElement {
    static _Q: string;
}
/** Chapter Number. Serialized as `b:ChapterNumber` */
export declare class ChapterNumber extends OxmlLeafTextElement {
    static _Q: string;
}
/** Case Number. Serialized as `b:CaseNumber` */
export declare class CaseNumber extends OxmlLeafTextElement {
    static _Q: string;
}
/** Broadcast Title. Serialized as `b:BroadcastTitle` */
export declare class BroadcastTitle extends OxmlLeafTextElement {
    static _Q: string;
}
/** Broadcaster. Serialized as `b:Broadcaster` */
export declare class Broadcaster extends OxmlLeafTextElement {
    static _Q: string;
}
/** Book Title. Serialized as `b:BookTitle` */
export declare class BookTitle extends OxmlLeafTextElement {
    static _Q: string;
}
/** Album Title. Serialized as `b:AlbumTitle` */
export declare class AlbumTitle extends OxmlLeafTextElement {
    static _Q: string;
}
/** Abbreviated Case Number. Serialized as `b:AbbreviatedCaseNumber` */
export declare class AbbreviatedCaseNumber extends OxmlLeafTextElement {
    static _Q: string;
}
/** Corporate Author. Serialized as `b:Corporate` */
export declare class Corporate extends OxmlLeafTextElement {
    static _Q: string;
}
/** Person's Middle, or Other, Name. Serialized as `b:Middle` */
export declare class Middle extends OxmlLeafTextElement {
    static _Q: string;
}
/** Person's First, or Given, Name. Serialized as `b:First` */
export declare class First extends OxmlLeafTextElement {
    static _Q: string;
}
/** Person's Last, or Family, Name. Serialized as `b:Last` */
export declare class Last extends OxmlLeafTextElement {
    static _Q: string;
}
/** Person. Serialized as `b:Person` */
export declare class Person extends OxmlCompositeElement<Last | First | Middle> {
    static _Q: string;
}
/** Sources. Serialized as `b:Sources` */
export declare class Sources extends OxmlPartRootElement<Source> {
    static _Q: string;
    static _A: string[];
    /** Selected Style. Serialized as `:SelectedStyle` */
    get selectedStyle(): StringValue | undefined;
    set selectedStyle(v: StringValue | undefined);
    /** Documentation Style Name. Serialized as `:StyleName` */
    get styleName(): StringValue | undefined;
    set styleName(v: StringValue | undefined);
    /** Uniform Resource Identifier. Serialized as `:URI` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
export declare function initBibliographyNamespace(): {
    prefix: string;
    xmlns: string;
};
