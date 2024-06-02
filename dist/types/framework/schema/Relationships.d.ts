import { OxmlAttr } from '../OxmlAttr';
import { OxmlLeafElement } from '../OxmlLeafElement';
import { OxmlPartRootElement } from '../OxmlPartRootElement';
import { StringValue } from '../types/StringValue';
export declare enum RelationshipTypeValues {
    OfficeDocument = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
    CoreProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
    ExtendedProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
    CustomProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
    Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail",
    Styles = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
    FontTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable",
    WebSettings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings",
    Settings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings",
    Theme = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
    Chart = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
    Image = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
    Hyperlink = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
    Comments = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
    VMLDrawing = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
    EmbeddedPackage = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/embeddedPackage",
    Slide = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide",
    SlideLayout = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout",
    SlideMaster = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster",
    NotesSlide = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide",
    NotesMaster = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster",
    HandoutMaster = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/handoutMaster",
    SlideShow = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps",
    Workbook = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/workbook",
    Worksheet = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    SharedStringTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
    CalculationChain = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain",
    PivotTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotTable"
}
/**
 * The TargetMode enumeration is used to interpret the "base" uri for the PackageRelationship
 * target Uri. Possible values - 0: "Internal" - target points to a part within
 * the package PackageRelationship target uri must be relative. 1: "External" -
 * target points to an external resource. The resource can be relative to the package
 * entity or an absolute URI
 */
export declare enum RelationshipTargetMode {
    /**
     * TargetMode is "Internal". PackageRelationship target points to a part within
     * the package PackageRelationship target uri must be relative.
     */
    Internal = "Internal",
    /**
     * TargetMode is "External". PackageRelationship target points to an external resource.
     * PackageRelationship target uri can be relative or absolute. The resource can
     * be relative to the package entity or an absolute URI.
     */
    External = "External"
}
export declare const RelationshipTargetModeArray: RelationshipTargetMode[];
export declare class Relationship extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    static _D: {
        Id: OxmlAttr;
        Type: OxmlAttr;
        Target: OxmlAttr;
        TargetMode: OxmlAttr;
    };
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    get type(): RelationshipTypeValues | undefined;
    set type(v: RelationshipTypeValues | undefined);
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    get targetMode(): RelationshipTargetMode | undefined;
    set targetMode(v: RelationshipTargetMode | undefined);
}
export declare class Relationships extends OxmlPartRootElement {
    static _Q: string;
    static _C: {
        Relationship: typeof Relationship;
    };
}
