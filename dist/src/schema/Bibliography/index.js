import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
var DataSourceValues = /* @__PURE__ */ ((DataSourceValues2) => {
  DataSourceValues2["ArticleInAPeriodical"] = "ArticleInAPeriodical";
  DataSourceValues2["Book"] = "Book";
  DataSourceValues2["BookSection"] = "BookSection";
  DataSourceValues2["JournalArticle"] = "JournalArticle";
  DataSourceValues2["ConferenceProceedings"] = "ConferenceProceedings";
  DataSourceValues2["Report"] = "Report";
  DataSourceValues2["SoundRecording"] = "SoundRecording";
  DataSourceValues2["Performance"] = "Performance";
  DataSourceValues2["Art"] = "Art";
  DataSourceValues2["DocumentFromInternetSite"] = "DocumentFromInternetSite";
  DataSourceValues2["InternetSite"] = "InternetSite";
  DataSourceValues2["Film"] = "Film";
  DataSourceValues2["Interview"] = "Interview";
  DataSourceValues2["Patent"] = "Patent";
  DataSourceValues2["ElectronicSource"] = "ElectronicSource";
  DataSourceValues2["Case"] = "Case";
  DataSourceValues2["Miscellaneous"] = "Misc";
  return DataSourceValues2;
})(DataSourceValues || {});
const DataSourceValuesArray = [
  "ArticleInAPeriodical" /* ArticleInAPeriodical */,
  "Book" /* Book */,
  "BookSection" /* BookSection */,
  "JournalArticle" /* JournalArticle */,
  "ConferenceProceedings" /* ConferenceProceedings */,
  "Report" /* Report */,
  "SoundRecording" /* SoundRecording */,
  "Performance" /* Performance */,
  "Art" /* Art */,
  "DocumentFromInternetSite" /* DocumentFromInternetSite */,
  "InternetSite" /* InternetSite */,
  "Film" /* Film */,
  "Interview" /* Interview */,
  "Patent" /* Patent */,
  "ElectronicSource" /* ElectronicSource */,
  "Case" /* Case */,
  "Misc" /* Miscellaneous */
];
class Source extends OxmlCompositeElement {
  static _Q = "b:Source";
  /** Abbreviated Case Number. */
  get abbreviatedCaseNumber() {
    return this._f(AbbreviatedCaseNumber);
  }
  /** Album Title. */
  get albumTitle() {
    return this._f(AlbumTitle);
  }
  /** Contributors List. */
  get authorList() {
    return this._f(AuthorList);
  }
  /** Book Title. */
  get bookTitle() {
    return this._f(BookTitle);
  }
  /** Broadcaster. */
  get broadcaster() {
    return this._f(Broadcaster);
  }
  /** Broadcast Title. */
  get broadcastTitle() {
    return this._f(BroadcastTitle);
  }
  /** Case Number. */
  get caseNumber() {
    return this._f(CaseNumber);
  }
  /** Chapter Number. */
  get chapterNumber() {
    return this._f(ChapterNumber);
  }
  /** City. */
  get city() {
    return this._f(City);
  }
  /** Comments. */
  get comments() {
    return this._f(Comments);
  }
  /** Conference or Proceedings Name. */
  get conferenceName() {
    return this._f(ConferenceName);
  }
  /** Country or Region. */
  get countryRegion() {
    return this._f(CountryRegion);
  }
  /** Court. */
  get court() {
    return this._f(Court);
  }
  /** Day. */
  get day() {
    return this._f(Day);
  }
  /** Day Accessed. */
  get dayAccessed() {
    return this._f(DayAccessed);
  }
  /** Department. */
  get department() {
    return this._f(Department);
  }
  /** Distributor. */
  get distributor() {
    return this._f(Distributor);
  }
  /** Editor. */
  get edition() {
    return this._f(Edition);
  }
  /** GUID. */
  get guidString() {
    return this._f(GuidString);
  }
  /** Institution. */
  get institution() {
    return this._f(Institution);
  }
  /** Internet Site Title. */
  get internetSiteTitle() {
    return this._f(InternetSiteTitle);
  }
  /** Issue. */
  get issue() {
    return this._f(Issue);
  }
  /** Journal Name. */
  get journalName() {
    return this._f(JournalName);
  }
  /** Locale ID. */
  get lcId() {
    return this._f(LcId);
  }
  /** Medium. */
  get medium() {
    return this._f(Medium);
  }
  /** Month. */
  get month() {
    return this._f(Month);
  }
  /** Month Accessed. */
  get monthAccessed() {
    return this._f(MonthAccessed);
  }
  /** Number of Volumes. */
  get numberVolumes() {
    return this._f(NumberVolumes);
  }
  /** Pages. */
  get pages() {
    return this._f(Pages);
  }
  /** Patent Number. */
  get patentNumber() {
    return this._f(PatentNumber);
  }
  /** Periodical Title. */
  get periodicalTitle() {
    return this._f(PeriodicalTitle);
  }
  /** Production Company. */
  get productionCompany() {
    return this._f(ProductionCompany);
  }
  /** Publication Title. */
  get publicationTitle() {
    return this._f(PublicationTitle);
  }
  /** Publisher. */
  get publisher() {
    return this._f(Publisher);
  }
  /** Recording Number. */
  get recordingNumber() {
    return this._f(RecordingNumber);
  }
  /** Reference Order. */
  get referenceOrder() {
    return this._f(ReferenceOrder);
  }
  /** Reporter. */
  get reporter() {
    return this._f(Reporter);
  }
  /** Source Type. */
  get sourceType() {
    return this._f(SourceType);
  }
  /** Short Title. */
  get shortTitle() {
    return this._f(ShortTitle);
  }
  /** Standard Number. */
  get standardNumber() {
    return this._f(StandardNumber);
  }
  /** State or Province. */
  get stateProvince() {
    return this._f(StateProvince);
  }
  /** Station. */
  get station() {
    return this._f(Station);
  }
  /** Tag. */
  get tag() {
    return this._f(Tag);
  }
  /** Theater. */
  get theater() {
    return this._f(Theater);
  }
  /** Thesis Type. */
  get thesisType() {
    return this._f(ThesisType);
  }
  /** Title. */
  get title() {
    return this._f(Title);
  }
  /** Type. */
  get patentType() {
    return this._f(PatentType);
  }
  /** URL. */
  get urlString() {
    return this._f(UrlString);
  }
  /** Version. */
  get version() {
    return this._f(Version);
  }
  /** Volume. */
  get volume() {
    return this._f(Volume);
  }
  /** Year. */
  get year() {
    return this._f(Year);
  }
  /** Year Accessed. */
  get yearAccessed() {
    return this._f(YearAccessed);
  }
}
class SourceType extends OxmlLeafTextElement {
  static _Q = "b:SourceType";
}
class AuthorList extends OxmlCompositeElement {
  static _Q = "b:Author";
  /** Artist. */
  get artist() {
    return this._f(Artist);
  }
  /** Author. */
  get author() {
    return this._f(Author);
  }
  /** Book Author. */
  get bookAuthor() {
    return this._f(BookAuthor);
  }
  /** Compiler. */
  get compiler() {
    return this._f(Compiler);
  }
  /** Composer. */
  get composer() {
    return this._f(Composer);
  }
  /** Conductor. */
  get conductor() {
    return this._f(Conductor);
  }
  /** Counsel. */
  get counsel() {
    return this._f(Counsel);
  }
  /** Director. */
  get director() {
    return this._f(Director);
  }
  /** Editor. */
  get editor() {
    return this._f(Editor);
  }
  /** Interviewee. */
  get interviewee() {
    return this._f(Interviewee);
  }
  /** Interviewer. */
  get interviewer() {
    return this._f(Interviewer);
  }
  /** Inventor. */
  get inventor() {
    return this._f(Inventor);
  }
  /** Performer. */
  get performer() {
    return this._f(Performer);
  }
  /** Producer Name. */
  get producerName() {
    return this._f(ProducerName);
  }
  /** Translator. */
  get translator() {
    return this._f(Translator);
  }
  /** Writer. */
  get writer() {
    return this._f(Writer);
  }
}
class NameOrCorporateType extends OxmlCompositeElement {
  /** Returns NameList. */
  get nameList() {
    return this._f(NameList);
  }
  /** Corporate Author. */
  get corporate() {
    return this._f(Corporate);
  }
}
class Performer extends NameOrCorporateType {
  static _Q = "b:Performer";
}
class Author extends NameOrCorporateType {
  static _Q = "b:Author";
}
class NameType extends OxmlCompositeElement {
  /** Name List. */
  get nameList() {
    return this._f(NameList);
  }
}
class Writer extends NameType {
  static _Q = "b:Writer";
}
class Translator extends NameType {
  static _Q = "b:Translator";
}
class ProducerName extends NameType {
  static _Q = "b:ProducerName";
}
class Inventor extends NameType {
  static _Q = "b:Inventor";
}
class Interviewer extends NameType {
  static _Q = "b:Interviewer";
}
class Interviewee extends NameType {
  static _Q = "b:Interviewee";
}
class Editor extends NameType {
  static _Q = "b:Editor";
}
class Director extends NameType {
  static _Q = "b:Director";
}
class Counsel extends NameType {
  static _Q = "b:Counsel";
}
class Conductor extends NameType {
  static _Q = "b:Conductor";
}
class Composer extends NameType {
  static _Q = "b:Composer";
}
class Compiler extends NameType {
  static _Q = "b:Compiler";
}
class BookAuthor extends NameType {
  static _Q = "b:BookAuthor";
}
class Artist extends NameType {
  static _Q = "b:Artist";
}
class NameList extends OxmlCompositeElement {
  static _Q = "b:NameList";
}
class YearAccessed extends OxmlLeafTextElement {
  static _Q = "b:YearAccessed";
}
class Year extends OxmlLeafTextElement {
  static _Q = "b:Year";
}
class Volume extends OxmlLeafTextElement {
  static _Q = "b:Volume";
}
class Version extends OxmlLeafTextElement {
  static _Q = "b:Version";
}
class UrlString extends OxmlLeafTextElement {
  static _Q = "b:URL";
}
class PatentType extends OxmlLeafTextElement {
  static _Q = "b:Type";
}
class Title extends OxmlLeafTextElement {
  static _Q = "b:Title";
}
class ThesisType extends OxmlLeafTextElement {
  static _Q = "b:ThesisType";
}
class Theater extends OxmlLeafTextElement {
  static _Q = "b:Theater";
}
class Tag extends OxmlLeafTextElement {
  static _Q = "b:Tag";
}
class Station extends OxmlLeafTextElement {
  static _Q = "b:Station";
}
class StateProvince extends OxmlLeafTextElement {
  static _Q = "b:StateProvince";
}
class StandardNumber extends OxmlLeafTextElement {
  static _Q = "b:StandardNumber";
}
class ShortTitle extends OxmlLeafTextElement {
  static _Q = "b:ShortTitle";
}
class Reporter extends OxmlLeafTextElement {
  static _Q = "b:Reporter";
}
class ReferenceOrder extends OxmlLeafTextElement {
  static _Q = "b:RefOrder";
}
class RecordingNumber extends OxmlLeafTextElement {
  static _Q = "b:RecordingNumber";
}
class Publisher extends OxmlLeafTextElement {
  static _Q = "b:Publisher";
}
class PublicationTitle extends OxmlLeafTextElement {
  static _Q = "b:PublicationTitle";
}
class ProductionCompany extends OxmlLeafTextElement {
  static _Q = "b:ProductionCompany";
}
class PeriodicalTitle extends OxmlLeafTextElement {
  static _Q = "b:PeriodicalTitle";
}
class PatentNumber extends OxmlLeafTextElement {
  static _Q = "b:PatentNumber";
}
class Pages extends OxmlLeafTextElement {
  static _Q = "b:Pages";
}
class NumberVolumes extends OxmlLeafTextElement {
  static _Q = "b:NumberVolumes";
}
class MonthAccessed extends OxmlLeafTextElement {
  static _Q = "b:MonthAccessed";
}
class Month extends OxmlLeafTextElement {
  static _Q = "b:Month";
}
class Medium extends OxmlLeafTextElement {
  static _Q = "b:Medium";
}
class LcId extends OxmlLeafTextElement {
  static _Q = "b:LCID";
}
class JournalName extends OxmlLeafTextElement {
  static _Q = "b:JournalName";
}
class Issue extends OxmlLeafTextElement {
  static _Q = "b:Issue";
}
class InternetSiteTitle extends OxmlLeafTextElement {
  static _Q = "b:InternetSiteTitle";
}
class Institution extends OxmlLeafTextElement {
  static _Q = "b:Institution";
}
class GuidString extends OxmlLeafTextElement {
  static _Q = "b:Guid";
}
class Edition extends OxmlLeafTextElement {
  static _Q = "b:Edition";
}
class Distributor extends OxmlLeafTextElement {
  static _Q = "b:Distributor";
}
class Department extends OxmlLeafTextElement {
  static _Q = "b:Department";
}
class DayAccessed extends OxmlLeafTextElement {
  static _Q = "b:DayAccessed";
}
class Day extends OxmlLeafTextElement {
  static _Q = "b:Day";
}
class Court extends OxmlLeafTextElement {
  static _Q = "b:Court";
}
class CountryRegion extends OxmlLeafTextElement {
  static _Q = "b:CountryRegion";
}
class ConferenceName extends OxmlLeafTextElement {
  static _Q = "b:ConferenceName";
}
class Comments extends OxmlLeafTextElement {
  static _Q = "b:Comments";
}
class City extends OxmlLeafTextElement {
  static _Q = "b:City";
}
class ChapterNumber extends OxmlLeafTextElement {
  static _Q = "b:ChapterNumber";
}
class CaseNumber extends OxmlLeafTextElement {
  static _Q = "b:CaseNumber";
}
class BroadcastTitle extends OxmlLeafTextElement {
  static _Q = "b:BroadcastTitle";
}
class Broadcaster extends OxmlLeafTextElement {
  static _Q = "b:Broadcaster";
}
class BookTitle extends OxmlLeafTextElement {
  static _Q = "b:BookTitle";
}
class AlbumTitle extends OxmlLeafTextElement {
  static _Q = "b:AlbumTitle";
}
class AbbreviatedCaseNumber extends OxmlLeafTextElement {
  static _Q = "b:AbbreviatedCaseNumber";
}
class Corporate extends OxmlLeafTextElement {
  static _Q = "b:Corporate";
}
class Middle extends OxmlLeafTextElement {
  static _Q = "b:Middle";
}
class First extends OxmlLeafTextElement {
  static _Q = "b:First";
}
class Last extends OxmlLeafTextElement {
  static _Q = "b:Last";
}
class Person extends OxmlCompositeElement {
  static _Q = "b:Person";
}
class Sources extends OxmlPartRootElement {
  static _Q = "b:Sources";
  static _A = [":SelectedStyle", ":StyleName", ":URI"];
  /** Selected Style. Serialized as `:SelectedStyle` */
  get selectedStyle() {
    return this._g(":SelectedStyle");
  }
  set selectedStyle(v) {
    this._s(":SelectedStyle", v);
  }
  /** Documentation Style Name. Serialized as `:StyleName` */
  get styleName() {
    return this._g(":StyleName");
  }
  set styleName(v) {
    this._s(":StyleName", v);
  }
  /** Uniform Resource Identifier. Serialized as `:URI` */
  get uri() {
    return this._g(":URI");
  }
  set uri(v) {
    this._s(":URI", v);
  }
}
function initBibliographyNamespace() {
  Source._C = {
    "b:AbbreviatedCaseNumber": AbbreviatedCaseNumber,
    "b:AlbumTitle": AlbumTitle,
    "b:Author": AuthorList,
    "b:BookTitle": BookTitle,
    "b:Broadcaster": Broadcaster,
    "b:BroadcastTitle": BroadcastTitle,
    "b:CaseNumber": CaseNumber,
    "b:ChapterNumber": ChapterNumber,
    "b:City": City,
    "b:Comments": Comments,
    "b:ConferenceName": ConferenceName,
    "b:CountryRegion": CountryRegion,
    "b:Court": Court,
    "b:Day": Day,
    "b:DayAccessed": DayAccessed,
    "b:Department": Department,
    "b:Distributor": Distributor,
    "b:Edition": Edition,
    "b:Guid": GuidString,
    "b:Institution": Institution,
    "b:InternetSiteTitle": InternetSiteTitle,
    "b:Issue": Issue,
    "b:JournalName": JournalName,
    "b:LCID": LcId,
    "b:Medium": Medium,
    "b:Month": Month,
    "b:MonthAccessed": MonthAccessed,
    "b:NumberVolumes": NumberVolumes,
    "b:Pages": Pages,
    "b:PatentNumber": PatentNumber,
    "b:PeriodicalTitle": PeriodicalTitle,
    "b:ProductionCompany": ProductionCompany,
    "b:PublicationTitle": PublicationTitle,
    "b:Publisher": Publisher,
    "b:RecordingNumber": RecordingNumber,
    "b:RefOrder": ReferenceOrder,
    "b:Reporter": Reporter,
    "b:SourceType": SourceType,
    "b:ShortTitle": ShortTitle,
    "b:StandardNumber": StandardNumber,
    "b:StateProvince": StateProvince,
    "b:Station": Station,
    "b:Tag": Tag,
    "b:Theater": Theater,
    "b:ThesisType": ThesisType,
    "b:Title": Title,
    "b:Type": PatentType,
    "b:URL": UrlString,
    "b:Version": Version,
    "b:Volume": Volume,
    "b:Year": Year,
    "b:YearAccessed": YearAccessed
  };
  AuthorList._C = {
    "b:Artist": Artist,
    "b:Author": Author,
    "b:BookAuthor": BookAuthor,
    "b:Compiler": Compiler,
    "b:Composer": Composer,
    "b:Conductor": Conductor,
    "b:Counsel": Counsel,
    "b:Director": Director,
    "b:Editor": Editor,
    "b:Interviewee": Interviewee,
    "b:Interviewer": Interviewer,
    "b:Inventor": Inventor,
    "b:Performer": Performer,
    "b:ProducerName": ProducerName,
    "b:Translator": Translator,
    "b:Writer": Writer
  };
  NameOrCorporateType._C = {
    "b:NameList": NameList,
    "b:Corporate": Corporate
  };
  Performer._C = {
    "b:NameList": NameList,
    "b:Corporate": Corporate
  };
  Author._C = {
    "b:NameList": NameList,
    "b:Corporate": Corporate
  };
  NameType._C = {
    "b:NameList": NameList
  };
  Writer._C = {
    "b:NameList": NameList
  };
  Translator._C = {
    "b:NameList": NameList
  };
  ProducerName._C = {
    "b:NameList": NameList
  };
  Inventor._C = {
    "b:NameList": NameList
  };
  Interviewer._C = {
    "b:NameList": NameList
  };
  Interviewee._C = {
    "b:NameList": NameList
  };
  Editor._C = {
    "b:NameList": NameList
  };
  Director._C = {
    "b:NameList": NameList
  };
  Counsel._C = {
    "b:NameList": NameList
  };
  Conductor._C = {
    "b:NameList": NameList
  };
  Composer._C = {
    "b:NameList": NameList
  };
  Compiler._C = {
    "b:NameList": NameList
  };
  BookAuthor._C = {
    "b:NameList": NameList
  };
  Artist._C = {
    "b:NameList": NameList
  };
  NameList._C = {
    "b:Person": Person
  };
  Person._C = {
    "b:Last": Last,
    "b:First": First,
    "b:Middle": Middle
  };
  Sources._C = {
    "b:Source": Source
  };
  Sources._D = {
    ":SelectedStyle": new OxmlAttr(":SelectedStyle", OxmlType.StringValue),
    ":StyleName": new OxmlAttr(":StyleName", OxmlType.StringValue),
    ":URI": new OxmlAttr(":URI", OxmlType.StringValue)
  };
  return {
    prefix: "b",
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/bibliography"
  };
}
export {
  AbbreviatedCaseNumber,
  AlbumTitle,
  Artist,
  Author,
  AuthorList,
  BookAuthor,
  BookTitle,
  BroadcastTitle,
  Broadcaster,
  CaseNumber,
  ChapterNumber,
  City,
  Comments,
  Compiler,
  Composer,
  Conductor,
  ConferenceName,
  Corporate,
  Counsel,
  CountryRegion,
  Court,
  DataSourceValues,
  DataSourceValuesArray,
  Day,
  DayAccessed,
  Department,
  Director,
  Distributor,
  Edition,
  Editor,
  First,
  GuidString,
  Institution,
  InternetSiteTitle,
  Interviewee,
  Interviewer,
  Inventor,
  Issue,
  JournalName,
  Last,
  LcId,
  Medium,
  Middle,
  Month,
  MonthAccessed,
  NameList,
  NameOrCorporateType,
  NameType,
  NumberVolumes,
  Pages,
  PatentNumber,
  PatentType,
  Performer,
  PeriodicalTitle,
  Person,
  ProducerName,
  ProductionCompany,
  PublicationTitle,
  Publisher,
  RecordingNumber,
  ReferenceOrder,
  Reporter,
  ShortTitle,
  Source,
  SourceType,
  Sources,
  StandardNumber,
  StateProvince,
  Station,
  Tag,
  Theater,
  ThesisType,
  Title,
  Translator,
  UrlString,
  Version,
  Volume,
  Writer,
  Year,
  YearAccessed,
  initBibliographyNamespace
};
