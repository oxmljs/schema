import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { ListValue } from '../../../framework/types/ListValue';
import { Int32Value } from '../../../framework/types/Int32Value';


export enum KnownContextNodeTypeValues {
    /** undefined. Serialized value: `root` */
    Root = 'root',
    /** undefined. Serialized value: `unclassifiedInk` */
    UnclassifiedInk = 'unclassifiedInk',
    /** undefined. Serialized value: `writingRegion` */
    WritingRegion = 'writingRegion',
    /** undefined. Serialized value: `analysisHint` */
    AnalysisHint = 'analysisHint',
    /** undefined. Serialized value: `object` */
    Object = 'object',
    /** undefined. Serialized value: `inkDrawing` */
    InkDrawing = 'inkDrawing',
    /** undefined. Serialized value: `image` */
    Image = 'image',
    /** undefined. Serialized value: `paragraph` */
    Paragraph = 'paragraph',
    /** undefined. Serialized value: `line` */
    Line = 'line',
    /** undefined. Serialized value: `inkBullet` */
    InkBullet = 'inkBullet',
    /** undefined. Serialized value: `inkWord` */
    InkWord = 'inkWord',
    /** undefined. Serialized value: `textWord` */
    TextWord = 'textWord',
    /** undefined. Serialized value: `customRecognizer` */
    CustomRecognizer = 'customRecognizer',
    /** undefined. Serialized value: `mathRegion` */
    MathRegion = 'mathRegion',
    /** undefined. Serialized value: `mathEquation` */
    MathEquation = 'mathEquation',
    /** undefined. Serialized value: `mathStruct` */
    MathStruct = 'mathStruct',
    /** undefined. Serialized value: `mathSymbol` */
    MathSymbol = 'mathSymbol',
    /** undefined. Serialized value: `mathIdentifier` */
    MathIdentifier = 'mathIdentifier',
    /** undefined. Serialized value: `mathOperator` */
    MathOperator = 'mathOperator',
    /** undefined. Serialized value: `mathNumber` */
    MathNumber = 'mathNumber',
    /** undefined. Serialized value: `nonInkDrawing` */
    NonInkDrawing = 'nonInkDrawing',
    /** undefined. Serialized value: `groupNode` */
    GroupNode = 'groupNode',
    /** undefined. Serialized value: `mixedDrawing` */
    MixedDrawing = 'mixedDrawing',
}

export const KnownContextNodeTypeValuesArray = [
    KnownContextNodeTypeValues.Root,
    KnownContextNodeTypeValues.UnclassifiedInk,
    KnownContextNodeTypeValues.WritingRegion,
    KnownContextNodeTypeValues.AnalysisHint,
    KnownContextNodeTypeValues.Object,
    KnownContextNodeTypeValues.InkDrawing,
    KnownContextNodeTypeValues.Image,
    KnownContextNodeTypeValues.Paragraph,
    KnownContextNodeTypeValues.Line,
    KnownContextNodeTypeValues.InkBullet,
    KnownContextNodeTypeValues.InkWord,
    KnownContextNodeTypeValues.TextWord,
    KnownContextNodeTypeValues.CustomRecognizer,
    KnownContextNodeTypeValues.MathRegion,
    KnownContextNodeTypeValues.MathEquation,
    KnownContextNodeTypeValues.MathStruct,
    KnownContextNodeTypeValues.MathSymbol,
    KnownContextNodeTypeValues.MathIdentifier,
    KnownContextNodeTypeValues.MathOperator,
    KnownContextNodeTypeValues.MathNumber,
    KnownContextNodeTypeValues.NonInkDrawing,
    KnownContextNodeTypeValues.GroupNode,
    KnownContextNodeTypeValues.MixedDrawing,
] as const;

export enum LinkDirectionValues {
    /** undefined. Serialized value: `to` */
    To = 'to',
    /** undefined. Serialized value: `from` */
    From = 'from',
    /** undefined. Serialized value: `with` */
    With = 'with',
}

export const LinkDirectionValuesArray = [
    LinkDirectionValues.To,
    LinkDirectionValues.From,
    LinkDirectionValues.With,
] as const;

export enum KnownSemanticTypeValues {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `underline` */
    Underline = 'underline',
    /** undefined. Serialized value: `strikethrough` */
    Strikethrough = 'strikethrough',
    /** undefined. Serialized value: `highlight` */
    Highlight = 'highlight',
    /** undefined. Serialized value: `scratchOut` */
    ScratchOut = 'scratchOut',
    /** undefined. Serialized value: `verticalRange` */
    VerticalRange = 'verticalRange',
    /** undefined. Serialized value: `callout` */
    Callout = 'callout',
    /** undefined. Serialized value: `enclosure` */
    Enclosure = 'enclosure',
    /** undefined. Serialized value: `comment` */
    Comment = 'comment',
    /** undefined. Serialized value: `container` */
    Container = 'container',
    /** undefined. Serialized value: `connector` */
    Connector = 'connector',
}

export const KnownSemanticTypeValuesArray = [
    KnownSemanticTypeValues.None,
    KnownSemanticTypeValues.Underline,
    KnownSemanticTypeValues.Strikethrough,
    KnownSemanticTypeValues.Highlight,
    KnownSemanticTypeValues.ScratchOut,
    KnownSemanticTypeValues.VerticalRange,
    KnownSemanticTypeValues.Callout,
    KnownSemanticTypeValues.Enclosure,
    KnownSemanticTypeValues.Comment,
    KnownSemanticTypeValues.Container,
    KnownSemanticTypeValues.Connector,
] as const;

/** Defines the ContextLinkType Class. */
export abstract class ContextLinkType extends OxmlLeafElement {

    public static override _A = [':direction',':ref',];
    /** direction. Serialized as `:direction` */
    public get direction(): LinkDirectionValues | undefined { return this._g(':direction'); }
    public set direction(v: LinkDirectionValues | undefined) { this._s(':direction', v); }
    /** ref. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Defines the DestinationLink Class. Serialized as `msink:destinationLink` */
export class DestinationLink extends ContextLinkType {

    public static override _Q = 'msink:destinationLink';

}
/** Defines the SourceLink Class. Serialized as `msink:sourceLink` */
export class SourceLink extends ContextLinkType {

    public static override _Q = 'msink:sourceLink';

}
/** Defines the ContextNodeProperty Class. Serialized as `msink:property` */
export class ContextNodeProperty extends OxmlLeafTextElement {

    public static override _Q = 'msink:property';
    public static override _A = [':type',];
    /** type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }

}
/** Defines the ContextNode Class. Serialized as `msink:context` */
export class ContextNode extends OxmlCompositeElement<ContextNodeProperty | SourceLink | DestinationLink> {

    public static override _Q = 'msink:context';
    public static override _A = [':id',':type',':rotatedBoundingBox',':alignmentLevel',':contentType',':ascender',':descender',':baseline',':midline',':customRecognizerId',':mathML',':mathStruct',':mathSymbol',':beginModifierType',':endModifierType',':rotationAngle',':hotPoints',':centroid',':semanticType',':shapeName',':shapeGeometry',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** rotatedBoundingBox. Serialized as `:rotatedBoundingBox` */
    public get rotatedBoundingBox(): ListValue<StringValue> | undefined { return this._g(':rotatedBoundingBox'); }
    public set rotatedBoundingBox(v: ListValue<StringValue> | undefined) { this._s(':rotatedBoundingBox', v); }
    /** alignmentLevel. Serialized as `:alignmentLevel` */
    public get alignmentLevel(): Int32Value | undefined { return this._g(':alignmentLevel'); }
    public set alignmentLevel(v: Int32Value | undefined) { this._s(':alignmentLevel', v); }
    /** contentType. Serialized as `:contentType` */
    public get contentType(): Int32Value | undefined { return this._g(':contentType'); }
    public set contentType(v: Int32Value | undefined) { this._s(':contentType', v); }
    /** ascender. Serialized as `:ascender` */
    public get ascender(): StringValue | undefined { return this._g(':ascender'); }
    public set ascender(v: StringValue | undefined) { this._s(':ascender', v); }
    /** descender. Serialized as `:descender` */
    public get descender(): StringValue | undefined { return this._g(':descender'); }
    public set descender(v: StringValue | undefined) { this._s(':descender', v); }
    /** baseline. Serialized as `:baseline` */
    public get baseline(): StringValue | undefined { return this._g(':baseline'); }
    public set baseline(v: StringValue | undefined) { this._s(':baseline', v); }
    /** midline. Serialized as `:midline` */
    public get midline(): StringValue | undefined { return this._g(':midline'); }
    public set midline(v: StringValue | undefined) { this._s(':midline', v); }
    /** customRecognizerId. Serialized as `:customRecognizerId` */
    public get customRecognizerId(): StringValue | undefined { return this._g(':customRecognizerId'); }
    public set customRecognizerId(v: StringValue | undefined) { this._s(':customRecognizerId', v); }
    /** mathML. Serialized as `:mathML` */
    public get mathML(): StringValue | undefined { return this._g(':mathML'); }
    public set mathML(v: StringValue | undefined) { this._s(':mathML', v); }
    /** mathStruct. Serialized as `:mathStruct` */
    public get mathStruct(): StringValue | undefined { return this._g(':mathStruct'); }
    public set mathStruct(v: StringValue | undefined) { this._s(':mathStruct', v); }
    /** mathSymbol. Serialized as `:mathSymbol` */
    public get mathSymbol(): StringValue | undefined { return this._g(':mathSymbol'); }
    public set mathSymbol(v: StringValue | undefined) { this._s(':mathSymbol', v); }
    /** beginModifierType. Serialized as `:beginModifierType` */
    public get beginModifierType(): StringValue | undefined { return this._g(':beginModifierType'); }
    public set beginModifierType(v: StringValue | undefined) { this._s(':beginModifierType', v); }
    /** endModifierType. Serialized as `:endModifierType` */
    public get endModifierType(): StringValue | undefined { return this._g(':endModifierType'); }
    public set endModifierType(v: StringValue | undefined) { this._s(':endModifierType', v); }
    /** rotationAngle. Serialized as `:rotationAngle` */
    public get rotationAngle(): Int32Value | undefined { return this._g(':rotationAngle'); }
    public set rotationAngle(v: Int32Value | undefined) { this._s(':rotationAngle', v); }
    /** hotPoints. Serialized as `:hotPoints` */
    public get hotPoints(): ListValue<StringValue> | undefined { return this._g(':hotPoints'); }
    public set hotPoints(v: ListValue<StringValue> | undefined) { this._s(':hotPoints', v); }
    /** centroid. Serialized as `:centroid` */
    public get centroid(): StringValue | undefined { return this._g(':centroid'); }
    public set centroid(v: StringValue | undefined) { this._s(':centroid', v); }
    /** semanticType. Serialized as `:semanticType` */
    public get semanticType(): StringValue | undefined { return this._g(':semanticType'); }
    public set semanticType(v: StringValue | undefined) { this._s(':semanticType', v); }
    /** shapeName. Serialized as `:shapeName` */
    public get shapeName(): StringValue | undefined { return this._g(':shapeName'); }
    public set shapeName(v: StringValue | undefined) { this._s(':shapeName', v); }
    /** shapeGeometry. Serialized as `:shapeGeometry` */
    public get shapeGeometry(): ListValue<StringValue> | undefined { return this._g(':shapeGeometry'); }
    public set shapeGeometry(v: ListValue<StringValue> | undefined) { this._s(':shapeGeometry', v); }

}

export function initOffice2010InkNamespace() {
    ContextLinkType._D = {
        ':direction': new OxmlAttr(':direction', OxmlType.EnumValue, LinkDirectionValuesArray),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    ContextNodeProperty._D = {
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
    };
    ContextNode._C = {
        'msink:property': ContextNodeProperty,
        'msink:sourceLink': SourceLink,
        'msink:destinationLink': DestinationLink,
    };
    ContextNode._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        ':rotatedBoundingBox': new OxmlAttr(':rotatedBoundingBox', OxmlType.ListValue),
        ':alignmentLevel': new OxmlAttr(':alignmentLevel', OxmlType.Int32Value),
        ':contentType': new OxmlAttr(':contentType', OxmlType.Int32Value),
        ':ascender': new OxmlAttr(':ascender', OxmlType.StringValue),
        ':descender': new OxmlAttr(':descender', OxmlType.StringValue),
        ':baseline': new OxmlAttr(':baseline', OxmlType.StringValue),
        ':midline': new OxmlAttr(':midline', OxmlType.StringValue),
        ':customRecognizerId': new OxmlAttr(':customRecognizerId', OxmlType.StringValue),
        ':mathML': new OxmlAttr(':mathML', OxmlType.StringValue),
        ':mathStruct': new OxmlAttr(':mathStruct', OxmlType.StringValue),
        ':mathSymbol': new OxmlAttr(':mathSymbol', OxmlType.StringValue),
        ':beginModifierType': new OxmlAttr(':beginModifierType', OxmlType.StringValue),
        ':endModifierType': new OxmlAttr(':endModifierType', OxmlType.StringValue),
        ':rotationAngle': new OxmlAttr(':rotationAngle', OxmlType.Int32Value),
        ':hotPoints': new OxmlAttr(':hotPoints', OxmlType.ListValue),
        ':centroid': new OxmlAttr(':centroid', OxmlType.StringValue),
        ':semanticType': new OxmlAttr(':semanticType', OxmlType.StringValue),
        ':shapeName': new OxmlAttr(':shapeName', OxmlType.StringValue),
        ':shapeGeometry': new OxmlAttr(':shapeGeometry', OxmlType.ListValue),
    };
    return {
        prefix: 'msink',
        xmlns: 'http://schemas.microsoft.com/ink/2010/main',
    };
}
