import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
import { ListValue } from '../../../framework/types/ListValue';
import { Int32Value } from '../../../framework/types/Int32Value';
export declare enum KnownContextNodeTypeValues {
    /** undefined. Serialized value: `root` */
    Root = "root",
    /** undefined. Serialized value: `unclassifiedInk` */
    UnclassifiedInk = "unclassifiedInk",
    /** undefined. Serialized value: `writingRegion` */
    WritingRegion = "writingRegion",
    /** undefined. Serialized value: `analysisHint` */
    AnalysisHint = "analysisHint",
    /** undefined. Serialized value: `object` */
    Object = "object",
    /** undefined. Serialized value: `inkDrawing` */
    InkDrawing = "inkDrawing",
    /** undefined. Serialized value: `image` */
    Image = "image",
    /** undefined. Serialized value: `paragraph` */
    Paragraph = "paragraph",
    /** undefined. Serialized value: `line` */
    Line = "line",
    /** undefined. Serialized value: `inkBullet` */
    InkBullet = "inkBullet",
    /** undefined. Serialized value: `inkWord` */
    InkWord = "inkWord",
    /** undefined. Serialized value: `textWord` */
    TextWord = "textWord",
    /** undefined. Serialized value: `customRecognizer` */
    CustomRecognizer = "customRecognizer",
    /** undefined. Serialized value: `mathRegion` */
    MathRegion = "mathRegion",
    /** undefined. Serialized value: `mathEquation` */
    MathEquation = "mathEquation",
    /** undefined. Serialized value: `mathStruct` */
    MathStruct = "mathStruct",
    /** undefined. Serialized value: `mathSymbol` */
    MathSymbol = "mathSymbol",
    /** undefined. Serialized value: `mathIdentifier` */
    MathIdentifier = "mathIdentifier",
    /** undefined. Serialized value: `mathOperator` */
    MathOperator = "mathOperator",
    /** undefined. Serialized value: `mathNumber` */
    MathNumber = "mathNumber",
    /** undefined. Serialized value: `nonInkDrawing` */
    NonInkDrawing = "nonInkDrawing",
    /** undefined. Serialized value: `groupNode` */
    GroupNode = "groupNode",
    /** undefined. Serialized value: `mixedDrawing` */
    MixedDrawing = "mixedDrawing"
}
export declare const KnownContextNodeTypeValuesArray: readonly [KnownContextNodeTypeValues.Root, KnownContextNodeTypeValues.UnclassifiedInk, KnownContextNodeTypeValues.WritingRegion, KnownContextNodeTypeValues.AnalysisHint, KnownContextNodeTypeValues.Object, KnownContextNodeTypeValues.InkDrawing, KnownContextNodeTypeValues.Image, KnownContextNodeTypeValues.Paragraph, KnownContextNodeTypeValues.Line, KnownContextNodeTypeValues.InkBullet, KnownContextNodeTypeValues.InkWord, KnownContextNodeTypeValues.TextWord, KnownContextNodeTypeValues.CustomRecognizer, KnownContextNodeTypeValues.MathRegion, KnownContextNodeTypeValues.MathEquation, KnownContextNodeTypeValues.MathStruct, KnownContextNodeTypeValues.MathSymbol, KnownContextNodeTypeValues.MathIdentifier, KnownContextNodeTypeValues.MathOperator, KnownContextNodeTypeValues.MathNumber, KnownContextNodeTypeValues.NonInkDrawing, KnownContextNodeTypeValues.GroupNode, KnownContextNodeTypeValues.MixedDrawing];
export declare enum LinkDirectionValues {
    /** undefined. Serialized value: `to` */
    To = "to",
    /** undefined. Serialized value: `from` */
    From = "from",
    /** undefined. Serialized value: `with` */
    With = "with"
}
export declare const LinkDirectionValuesArray: readonly [LinkDirectionValues.To, LinkDirectionValues.From, LinkDirectionValues.With];
export declare enum KnownSemanticTypeValues {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `underline` */
    Underline = "underline",
    /** undefined. Serialized value: `strikethrough` */
    Strikethrough = "strikethrough",
    /** undefined. Serialized value: `highlight` */
    Highlight = "highlight",
    /** undefined. Serialized value: `scratchOut` */
    ScratchOut = "scratchOut",
    /** undefined. Serialized value: `verticalRange` */
    VerticalRange = "verticalRange",
    /** undefined. Serialized value: `callout` */
    Callout = "callout",
    /** undefined. Serialized value: `enclosure` */
    Enclosure = "enclosure",
    /** undefined. Serialized value: `comment` */
    Comment = "comment",
    /** undefined. Serialized value: `container` */
    Container = "container",
    /** undefined. Serialized value: `connector` */
    Connector = "connector"
}
export declare const KnownSemanticTypeValuesArray: readonly [KnownSemanticTypeValues.None, KnownSemanticTypeValues.Underline, KnownSemanticTypeValues.Strikethrough, KnownSemanticTypeValues.Highlight, KnownSemanticTypeValues.ScratchOut, KnownSemanticTypeValues.VerticalRange, KnownSemanticTypeValues.Callout, KnownSemanticTypeValues.Enclosure, KnownSemanticTypeValues.Comment, KnownSemanticTypeValues.Container, KnownSemanticTypeValues.Connector];
/** Defines the ContextLinkType Class. */
export declare abstract class ContextLinkType extends OxmlLeafElement {
    static _A: string[];
    /** direction. Serialized as `:direction` */
    get direction(): LinkDirectionValues | undefined;
    set direction(v: LinkDirectionValues | undefined);
    /** ref. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Defines the DestinationLink Class. Serialized as `msink:destinationLink` */
export declare class DestinationLink extends ContextLinkType {
    static _Q: string;
}
/** Defines the SourceLink Class. Serialized as `msink:sourceLink` */
export declare class SourceLink extends ContextLinkType {
    static _Q: string;
}
/** Defines the ContextNodeProperty Class. Serialized as `msink:property` */
export declare class ContextNodeProperty extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
}
/** Defines the ContextNode Class. Serialized as `msink:context` */
export declare class ContextNode extends OxmlCompositeElement<ContextNodeProperty | SourceLink | DestinationLink> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** rotatedBoundingBox. Serialized as `:rotatedBoundingBox` */
    get rotatedBoundingBox(): ListValue<StringValue> | undefined;
    set rotatedBoundingBox(v: ListValue<StringValue> | undefined);
    /** alignmentLevel. Serialized as `:alignmentLevel` */
    get alignmentLevel(): Int32Value | undefined;
    set alignmentLevel(v: Int32Value | undefined);
    /** contentType. Serialized as `:contentType` */
    get contentType(): Int32Value | undefined;
    set contentType(v: Int32Value | undefined);
    /** ascender. Serialized as `:ascender` */
    get ascender(): StringValue | undefined;
    set ascender(v: StringValue | undefined);
    /** descender. Serialized as `:descender` */
    get descender(): StringValue | undefined;
    set descender(v: StringValue | undefined);
    /** baseline. Serialized as `:baseline` */
    get baseline(): StringValue | undefined;
    set baseline(v: StringValue | undefined);
    /** midline. Serialized as `:midline` */
    get midline(): StringValue | undefined;
    set midline(v: StringValue | undefined);
    /** customRecognizerId. Serialized as `:customRecognizerId` */
    get customRecognizerId(): StringValue | undefined;
    set customRecognizerId(v: StringValue | undefined);
    /** mathML. Serialized as `:mathML` */
    get mathML(): StringValue | undefined;
    set mathML(v: StringValue | undefined);
    /** mathStruct. Serialized as `:mathStruct` */
    get mathStruct(): StringValue | undefined;
    set mathStruct(v: StringValue | undefined);
    /** mathSymbol. Serialized as `:mathSymbol` */
    get mathSymbol(): StringValue | undefined;
    set mathSymbol(v: StringValue | undefined);
    /** beginModifierType. Serialized as `:beginModifierType` */
    get beginModifierType(): StringValue | undefined;
    set beginModifierType(v: StringValue | undefined);
    /** endModifierType. Serialized as `:endModifierType` */
    get endModifierType(): StringValue | undefined;
    set endModifierType(v: StringValue | undefined);
    /** rotationAngle. Serialized as `:rotationAngle` */
    get rotationAngle(): Int32Value | undefined;
    set rotationAngle(v: Int32Value | undefined);
    /** hotPoints. Serialized as `:hotPoints` */
    get hotPoints(): ListValue<StringValue> | undefined;
    set hotPoints(v: ListValue<StringValue> | undefined);
    /** centroid. Serialized as `:centroid` */
    get centroid(): StringValue | undefined;
    set centroid(v: StringValue | undefined);
    /** semanticType. Serialized as `:semanticType` */
    get semanticType(): StringValue | undefined;
    set semanticType(v: StringValue | undefined);
    /** shapeName. Serialized as `:shapeName` */
    get shapeName(): StringValue | undefined;
    set shapeName(v: StringValue | undefined);
    /** shapeGeometry. Serialized as `:shapeGeometry` */
    get shapeGeometry(): ListValue<StringValue> | undefined;
    set shapeGeometry(v: ListValue<StringValue> | undefined);
}
export declare function initOffice2010InkNamespace(): {
    prefix: string;
    xmlns: string;
};
