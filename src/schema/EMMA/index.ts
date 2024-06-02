import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';
import { IntegerValue } from '../../framework/types/IntegerValue';
import { UInt64Value } from '../../framework/types/UInt64Value';
import { DecimalValue } from '../../framework/types/DecimalValue';
import { ListValue } from '../../framework/types/ListValue';
import { BooleanValue } from '../../framework/types/BooleanValue';
import { ContextNode as MsinkContextNode } from '../Office2010/Ink';


export enum EndPointRoleValues {
    /** undefined. Serialized value: `source` */
    Source = 'source',
    /** undefined. Serialized value: `sink` */
    Sink = 'sink',
    /** undefined. Serialized value: `reply-to` */
    Replyto = 'reply-to',
    /** undefined. Serialized value: `router` */
    Router = 'router',
}

export const EndPointRoleValuesArray = [
    EndPointRoleValues.Source,
    EndPointRoleValues.Sink,
    EndPointRoleValues.Replyto,
    EndPointRoleValues.Router,
] as const;

export enum MediumValues {
    /** undefined. Serialized value: `acoustic` */
    Acoustic = 'acoustic',
    /** undefined. Serialized value: `tactile` */
    Tactile = 'tactile',
    /** undefined. Serialized value: `visual` */
    Visual = 'visual',
}

export const MediumValuesArray = [
    MediumValues.Acoustic,
    MediumValues.Tactile,
    MediumValues.Visual,
] as const;

export enum AnchorPointValues {
    /** undefined. Serialized value: `start` */
    Start = 'start',
    /** undefined. Serialized value: `end` */
    End = 'end',
}

export const AnchorPointValuesArray = [
    AnchorPointValues.Start,
    AnchorPointValues.End,
] as const;

export enum DisjunctionTypeValues {
    /** undefined. Serialized value: `recognition` */
    Recognition = 'recognition',
    /** undefined. Serialized value: `understanding` */
    Understanding = 'understanding',
    /** undefined. Serialized value: `multi-device` */
    Multidevice = 'multi-device',
    /** undefined. Serialized value: `multi-process` */
    Multiprocess = 'multi-process',
}

export const DisjunctionTypeValuesArray = [
    DisjunctionTypeValues.Recognition,
    DisjunctionTypeValues.Understanding,
    DisjunctionTypeValues.Multidevice,
    DisjunctionTypeValues.Multiprocess,
] as const;

/** Defines the Emma Class. Serialized as `emma:emma` */
export class Emma extends OxmlCompositeElement<Derivation | Grammar | Model | EndPointInfo | Info | Interpretation | OneOf | Group | Sequence> {

    public static override _Q = 'emma:emma';
    public static override _A = [':version',];
    /** version. Serialized as `:version` */
    public get version(): StringValue | undefined { return this._g(':version'); }
    public set version(v: StringValue | undefined) { this._s(':version', v); }

}
/** Defines the Arc Class. Serialized as `emma:arc` */
export class Arc extends OxmlCompositeElement<Info> {

    public static override _Q = 'emma:arc';
    public static override _A = [':from',':to','emma:start','emma:end','emma:offset-to-start','emma:duration','emma:confidence','emma:cost','emma:lang','emma:medium','emma:mode','emma:source',];
    /** from. Serialized as `:from` */
    public get from(): IntegerValue | undefined { return this._g(':from'); }
    public set from(v: IntegerValue | undefined) { this._s(':from', v); }
    /** to. Serialized as `:to` */
    public get to(): IntegerValue | undefined { return this._g(':to'); }
    public set to(v: IntegerValue | undefined) { this._s(':to', v); }
    /** start. Serialized as `emma:start` */
    public get start(): UInt64Value | undefined { return this._g('emma:start'); }
    public set start(v: UInt64Value | undefined) { this._s('emma:start', v); }
    /** end. Serialized as `emma:end` */
    public get end(): UInt64Value | undefined { return this._g('emma:end'); }
    public set end(v: UInt64Value | undefined) { this._s('emma:end', v); }
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    public get offsetToStart(): IntegerValue | undefined { return this._g('emma:offset-to-start'); }
    public set offsetToStart(v: IntegerValue | undefined) { this._s('emma:offset-to-start', v); }
    /** duration. Serialized as `emma:duration` */
    public get duration(): IntegerValue | undefined { return this._g('emma:duration'); }
    public set duration(v: IntegerValue | undefined) { this._s('emma:duration', v); }
    /** confidence. Serialized as `emma:confidence` */
    public get confidence(): DecimalValue | undefined { return this._g('emma:confidence'); }
    public set confidence(v: DecimalValue | undefined) { this._s('emma:confidence', v); }
    /** cost. Serialized as `emma:cost` */
    public get cost(): DecimalValue | undefined { return this._g('emma:cost'); }
    public set cost(v: DecimalValue | undefined) { this._s('emma:cost', v); }
    /** lang. Serialized as `emma:lang` */
    public get language(): StringValue | undefined { return this._g('emma:lang'); }
    public set language(v: StringValue | undefined) { this._s('emma:lang', v); }
    /** medium. Serialized as `emma:medium` */
    public get medium(): MediumValues | undefined { return this._g('emma:medium'); }
    public set medium(v: MediumValues | undefined) { this._s('emma:medium', v); }
    /** mode. Serialized as `emma:mode` */
    public get mode(): ListValue<StringValue> | undefined { return this._g('emma:mode'); }
    public set mode(v: ListValue<StringValue> | undefined) { this._s('emma:mode', v); }
    /** source. Serialized as `emma:source` */
    public get source(): StringValue | undefined { return this._g('emma:source'); }
    public set source(v: StringValue | undefined) { this._s('emma:source', v); }

}
/** Defines the Node Class. Serialized as `emma:node` */
export class Node extends OxmlCompositeElement<Info> {

    public static override _Q = 'emma:node';
    public static override _A = [':node-number','emma:confidence','emma:cost',];
    /** node-number. Serialized as `:node-number` */
    public get nodeNumber(): IntegerValue | undefined { return this._g(':node-number'); }
    public set nodeNumber(v: IntegerValue | undefined) { this._s(':node-number', v); }
    /** confidence. Serialized as `emma:confidence` */
    public get confidence(): DecimalValue | undefined { return this._g('emma:confidence'); }
    public set confidence(v: DecimalValue | undefined) { this._s('emma:confidence', v); }
    /** cost. Serialized as `emma:cost` */
    public get cost(): DecimalValue | undefined { return this._g('emma:cost'); }
    public set cost(v: DecimalValue | undefined) { this._s('emma:cost', v); }

}
/** Defines the EndPoint Class. Serialized as `emma:endpoint` */
export class EndPoint extends OxmlCompositeElement {

    public static override _Q = 'emma:endpoint';
    public static override _A = [':id','emma:endpoint-role','emma:endpoint-address','emma:message-id','emma:port-num','emma:port-type','emma:endpoint-pair-ref','emma:service-name','emma:media-type','emma:medium','emma:mode',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** endpoint-role. Serialized as `emma:endpoint-role` */
    public get endpointRole(): EndPointRoleValues | undefined { return this._g('emma:endpoint-role'); }
    public set endpointRole(v: EndPointRoleValues | undefined) { this._s('emma:endpoint-role', v); }
    /** endpoint-address. Serialized as `emma:endpoint-address` */
    public get endPointAddress(): StringValue | undefined { return this._g('emma:endpoint-address'); }
    public set endPointAddress(v: StringValue | undefined) { this._s('emma:endpoint-address', v); }
    /** message-id. Serialized as `emma:message-id` */
    public get messageId(): StringValue | undefined { return this._g('emma:message-id'); }
    public set messageId(v: StringValue | undefined) { this._s('emma:message-id', v); }
    /** port-num. Serialized as `emma:port-num` */
    public get portNumber(): IntegerValue | undefined { return this._g('emma:port-num'); }
    public set portNumber(v: IntegerValue | undefined) { this._s('emma:port-num', v); }
    /** port-type. Serialized as `emma:port-type` */
    public get portType(): StringValue | undefined { return this._g('emma:port-type'); }
    public set portType(v: StringValue | undefined) { this._s('emma:port-type', v); }
    /** endpoint-pair-ref. Serialized as `emma:endpoint-pair-ref` */
    public get endpointPairRef(): StringValue | undefined { return this._g('emma:endpoint-pair-ref'); }
    public set endpointPairRef(v: StringValue | undefined) { this._s('emma:endpoint-pair-ref', v); }
    /** service-name. Serialized as `emma:service-name` */
    public get serviceName(): StringValue | undefined { return this._g('emma:service-name'); }
    public set serviceName(v: StringValue | undefined) { this._s('emma:service-name', v); }
    /** media-type. Serialized as `emma:media-type` */
    public get mediaType(): StringValue | undefined { return this._g('emma:media-type'); }
    public set mediaType(v: StringValue | undefined) { this._s('emma:media-type', v); }
    /** medium. Serialized as `emma:medium` */
    public get medium(): MediumValues | undefined { return this._g('emma:medium'); }
    public set medium(v: MediumValues | undefined) { this._s('emma:medium', v); }
    /** mode. Serialized as `emma:mode` */
    public get mode(): ListValue<StringValue> | undefined { return this._g('emma:mode'); }
    public set mode(v: ListValue<StringValue> | undefined) { this._s('emma:mode', v); }

}
/** Defines the EndPointInfo Class. Serialized as `emma:endpoint-info` */
export class EndPointInfo extends OxmlCompositeElement<EndPoint> {

    public static override _Q = 'emma:endpoint-info';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the Model Class. Serialized as `emma:model` */
export class Model extends OxmlCompositeElement {

    public static override _Q = 'emma:model';
    public static override _A = [':id',':ref',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** ref. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Defines the Grammar Class. Serialized as `emma:grammar` */
export class Grammar extends OxmlLeafElement {

    public static override _Q = 'emma:grammar';
    public static override _A = [':id',':ref',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** ref. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Defines the Derivation Class. Serialized as `emma:derivation` */
export class Derivation extends OxmlCompositeElement<Interpretation | OneOf | Sequence | Group> {

    public static override _Q = 'emma:derivation';

}
/** Defines the GroupInfo Class. Serialized as `emma:group-info` */
export class GroupInfo extends OxmlCompositeElement {

    public static override _Q = 'emma:group-info';
    public static override _A = [':ref',];
    /** ref. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Defines the Sequence Class. Serialized as `emma:sequence` */
export class Sequence extends OxmlCompositeElement<DerivedFrom | Info | Interpretation | OneOf | Group | Sequence> {

    public static override _Q = 'emma:sequence';
    public static override _A = [':id','emma:tokens','emma:process','emma:lang','emma:signal','emma:signal-size','emma:media-type','emma:confidence','emma:source','emma:start','emma:end','emma:time-ref-uri','emma:time-ref-anchor-point','emma:offset-to-start','emma:duration','emma:medium','emma:mode','emma:function','emma:verbal','emma:cost','emma:grammar-ref','emma:endpoint-info-ref','emma:model-ref','emma:dialog-turn',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** tokens. Serialized as `emma:tokens` */
    public get tokens(): StringValue | undefined { return this._g('emma:tokens'); }
    public set tokens(v: StringValue | undefined) { this._s('emma:tokens', v); }
    /** process. Serialized as `emma:process` */
    public get process(): StringValue | undefined { return this._g('emma:process'); }
    public set process(v: StringValue | undefined) { this._s('emma:process', v); }
    /** lang. Serialized as `emma:lang` */
    public get language(): StringValue | undefined { return this._g('emma:lang'); }
    public set language(v: StringValue | undefined) { this._s('emma:lang', v); }
    /** signal. Serialized as `emma:signal` */
    public get signal(): StringValue | undefined { return this._g('emma:signal'); }
    public set signal(v: StringValue | undefined) { this._s('emma:signal', v); }
    /** signal-size. Serialized as `emma:signal-size` */
    public get signalSize(): IntegerValue | undefined { return this._g('emma:signal-size'); }
    public set signalSize(v: IntegerValue | undefined) { this._s('emma:signal-size', v); }
    /** media-type. Serialized as `emma:media-type` */
    public get mediaType(): StringValue | undefined { return this._g('emma:media-type'); }
    public set mediaType(v: StringValue | undefined) { this._s('emma:media-type', v); }
    /** confidence. Serialized as `emma:confidence` */
    public get confidence(): DecimalValue | undefined { return this._g('emma:confidence'); }
    public set confidence(v: DecimalValue | undefined) { this._s('emma:confidence', v); }
    /** source. Serialized as `emma:source` */
    public get source(): StringValue | undefined { return this._g('emma:source'); }
    public set source(v: StringValue | undefined) { this._s('emma:source', v); }
    /** start. Serialized as `emma:start` */
    public get start(): UInt64Value | undefined { return this._g('emma:start'); }
    public set start(v: UInt64Value | undefined) { this._s('emma:start', v); }
    /** end. Serialized as `emma:end` */
    public get end(): UInt64Value | undefined { return this._g('emma:end'); }
    public set end(v: UInt64Value | undefined) { this._s('emma:end', v); }
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    public get timeReference(): StringValue | undefined { return this._g('emma:time-ref-uri'); }
    public set timeReference(v: StringValue | undefined) { this._s('emma:time-ref-uri', v); }
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    public get timeReferenceAnchorPoint(): AnchorPointValues | undefined { return this._g('emma:time-ref-anchor-point'); }
    public set timeReferenceAnchorPoint(v: AnchorPointValues | undefined) { this._s('emma:time-ref-anchor-point', v); }
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    public get offsetToStart(): IntegerValue | undefined { return this._g('emma:offset-to-start'); }
    public set offsetToStart(v: IntegerValue | undefined) { this._s('emma:offset-to-start', v); }
    /** duration. Serialized as `emma:duration` */
    public get duration(): IntegerValue | undefined { return this._g('emma:duration'); }
    public set duration(v: IntegerValue | undefined) { this._s('emma:duration', v); }
    /** medium. Serialized as `emma:medium` */
    public get medium(): MediumValues | undefined { return this._g('emma:medium'); }
    public set medium(v: MediumValues | undefined) { this._s('emma:medium', v); }
    /** mode. Serialized as `emma:mode` */
    public get mode(): ListValue<StringValue> | undefined { return this._g('emma:mode'); }
    public set mode(v: ListValue<StringValue> | undefined) { this._s('emma:mode', v); }
    /** function. Serialized as `emma:function` */
    public get function(): StringValue | undefined { return this._g('emma:function'); }
    public set function(v: StringValue | undefined) { this._s('emma:function', v); }
    /** verbal. Serialized as `emma:verbal` */
    public get verbal(): BooleanValue | undefined { return this._g('emma:verbal'); }
    public set verbal(v: BooleanValue | undefined) { this._s('emma:verbal', v); }
    /** cost. Serialized as `emma:cost` */
    public get cost(): DecimalValue | undefined { return this._g('emma:cost'); }
    public set cost(v: DecimalValue | undefined) { this._s('emma:cost', v); }
    /** grammar-ref. Serialized as `emma:grammar-ref` */
    public get grammarRef(): StringValue | undefined { return this._g('emma:grammar-ref'); }
    public set grammarRef(v: StringValue | undefined) { this._s('emma:grammar-ref', v); }
    /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
    public get endpointInfoRef(): StringValue | undefined { return this._g('emma:endpoint-info-ref'); }
    public set endpointInfoRef(v: StringValue | undefined) { this._s('emma:endpoint-info-ref', v); }
    /** model-ref. Serialized as `emma:model-ref` */
    public get modelRef(): StringValue | undefined { return this._g('emma:model-ref'); }
    public set modelRef(v: StringValue | undefined) { this._s('emma:model-ref', v); }
    /** dialog-turn. Serialized as `emma:dialog-turn` */
    public get dialogTurn(): StringValue | undefined { return this._g('emma:dialog-turn'); }
    public set dialogTurn(v: StringValue | undefined) { this._s('emma:dialog-turn', v); }

}
/** Defines the Group Class. Serialized as `emma:group` */
export class Group extends OxmlCompositeElement<DerivedFrom | GroupInfo | Info | Interpretation | OneOf | Group | Sequence> {

    public static override _Q = 'emma:group';
    public static override _A = [':id','emma:tokens','emma:process','emma:lang','emma:signal','emma:signal-size','emma:media-type','emma:confidence','emma:source','emma:start','emma:end','emma:time-ref-uri','emma:time-ref-anchor-point','emma:offset-to-start','emma:duration','emma:medium','emma:mode','emma:function','emma:verbal','emma:cost','emma:grammar-ref','emma:endpoint-info-ref','emma:model-ref','emma:dialog-turn',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** tokens. Serialized as `emma:tokens` */
    public get tokens(): StringValue | undefined { return this._g('emma:tokens'); }
    public set tokens(v: StringValue | undefined) { this._s('emma:tokens', v); }
    /** process. Serialized as `emma:process` */
    public get process(): StringValue | undefined { return this._g('emma:process'); }
    public set process(v: StringValue | undefined) { this._s('emma:process', v); }
    /** lang. Serialized as `emma:lang` */
    public get language(): StringValue | undefined { return this._g('emma:lang'); }
    public set language(v: StringValue | undefined) { this._s('emma:lang', v); }
    /** signal. Serialized as `emma:signal` */
    public get signal(): StringValue | undefined { return this._g('emma:signal'); }
    public set signal(v: StringValue | undefined) { this._s('emma:signal', v); }
    /** signal-size. Serialized as `emma:signal-size` */
    public get signalSize(): IntegerValue | undefined { return this._g('emma:signal-size'); }
    public set signalSize(v: IntegerValue | undefined) { this._s('emma:signal-size', v); }
    /** media-type. Serialized as `emma:media-type` */
    public get mediaType(): StringValue | undefined { return this._g('emma:media-type'); }
    public set mediaType(v: StringValue | undefined) { this._s('emma:media-type', v); }
    /** confidence. Serialized as `emma:confidence` */
    public get confidence(): DecimalValue | undefined { return this._g('emma:confidence'); }
    public set confidence(v: DecimalValue | undefined) { this._s('emma:confidence', v); }
    /** source. Serialized as `emma:source` */
    public get source(): StringValue | undefined { return this._g('emma:source'); }
    public set source(v: StringValue | undefined) { this._s('emma:source', v); }
    /** start. Serialized as `emma:start` */
    public get start(): UInt64Value | undefined { return this._g('emma:start'); }
    public set start(v: UInt64Value | undefined) { this._s('emma:start', v); }
    /** end. Serialized as `emma:end` */
    public get end(): UInt64Value | undefined { return this._g('emma:end'); }
    public set end(v: UInt64Value | undefined) { this._s('emma:end', v); }
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    public get timeReference(): StringValue | undefined { return this._g('emma:time-ref-uri'); }
    public set timeReference(v: StringValue | undefined) { this._s('emma:time-ref-uri', v); }
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    public get timeReferenceAnchorPoint(): AnchorPointValues | undefined { return this._g('emma:time-ref-anchor-point'); }
    public set timeReferenceAnchorPoint(v: AnchorPointValues | undefined) { this._s('emma:time-ref-anchor-point', v); }
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    public get offsetToStart(): IntegerValue | undefined { return this._g('emma:offset-to-start'); }
    public set offsetToStart(v: IntegerValue | undefined) { this._s('emma:offset-to-start', v); }
    /** duration. Serialized as `emma:duration` */
    public get duration(): IntegerValue | undefined { return this._g('emma:duration'); }
    public set duration(v: IntegerValue | undefined) { this._s('emma:duration', v); }
    /** medium. Serialized as `emma:medium` */
    public get medium(): MediumValues | undefined { return this._g('emma:medium'); }
    public set medium(v: MediumValues | undefined) { this._s('emma:medium', v); }
    /** mode. Serialized as `emma:mode` */
    public get mode(): ListValue<StringValue> | undefined { return this._g('emma:mode'); }
    public set mode(v: ListValue<StringValue> | undefined) { this._s('emma:mode', v); }
    /** function. Serialized as `emma:function` */
    public get function(): StringValue | undefined { return this._g('emma:function'); }
    public set function(v: StringValue | undefined) { this._s('emma:function', v); }
    /** verbal. Serialized as `emma:verbal` */
    public get verbal(): BooleanValue | undefined { return this._g('emma:verbal'); }
    public set verbal(v: BooleanValue | undefined) { this._s('emma:verbal', v); }
    /** cost. Serialized as `emma:cost` */
    public get cost(): DecimalValue | undefined { return this._g('emma:cost'); }
    public set cost(v: DecimalValue | undefined) { this._s('emma:cost', v); }
    /** grammar-ref. Serialized as `emma:grammar-ref` */
    public get grammarRef(): StringValue | undefined { return this._g('emma:grammar-ref'); }
    public set grammarRef(v: StringValue | undefined) { this._s('emma:grammar-ref', v); }
    /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
    public get endpointInfoRef(): StringValue | undefined { return this._g('emma:endpoint-info-ref'); }
    public set endpointInfoRef(v: StringValue | undefined) { this._s('emma:endpoint-info-ref', v); }
    /** model-ref. Serialized as `emma:model-ref` */
    public get modelRef(): StringValue | undefined { return this._g('emma:model-ref'); }
    public set modelRef(v: StringValue | undefined) { this._s('emma:model-ref', v); }
    /** dialog-turn. Serialized as `emma:dialog-turn` */
    public get dialogTurn(): StringValue | undefined { return this._g('emma:dialog-turn'); }
    public set dialogTurn(v: StringValue | undefined) { this._s('emma:dialog-turn', v); }

}
/** Defines the OneOf Class. Serialized as `emma:one-of` */
export class OneOf extends OxmlCompositeElement<DerivedFrom | Info | Interpretation | OneOf | Group | Sequence> {

    public static override _Q = 'emma:one-of';
    public static override _A = [':disjunction-type',':id','emma:tokens','emma:process','emma:lang','emma:signal','emma:signal-size','emma:media-type','emma:confidence','emma:source','emma:start','emma:end','emma:time-ref-uri','emma:time-ref-anchor-point','emma:offset-to-start','emma:duration','emma:medium','emma:mode','emma:function','emma:verbal','emma:cost','emma:grammar-ref','emma:endpoint-info-ref','emma:model-ref','emma:dialog-turn',];
    /** disjunction-type. Serialized as `:disjunction-type` */
    public get disjunctionType(): DisjunctionTypeValues | undefined { return this._g(':disjunction-type'); }
    public set disjunctionType(v: DisjunctionTypeValues | undefined) { this._s(':disjunction-type', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** tokens. Serialized as `emma:tokens` */
    public get tokens(): StringValue | undefined { return this._g('emma:tokens'); }
    public set tokens(v: StringValue | undefined) { this._s('emma:tokens', v); }
    /** process. Serialized as `emma:process` */
    public get process(): StringValue | undefined { return this._g('emma:process'); }
    public set process(v: StringValue | undefined) { this._s('emma:process', v); }
    /** lang. Serialized as `emma:lang` */
    public get language(): StringValue | undefined { return this._g('emma:lang'); }
    public set language(v: StringValue | undefined) { this._s('emma:lang', v); }
    /** signal. Serialized as `emma:signal` */
    public get signal(): StringValue | undefined { return this._g('emma:signal'); }
    public set signal(v: StringValue | undefined) { this._s('emma:signal', v); }
    /** signal-size. Serialized as `emma:signal-size` */
    public get signalSize(): IntegerValue | undefined { return this._g('emma:signal-size'); }
    public set signalSize(v: IntegerValue | undefined) { this._s('emma:signal-size', v); }
    /** media-type. Serialized as `emma:media-type` */
    public get mediaType(): StringValue | undefined { return this._g('emma:media-type'); }
    public set mediaType(v: StringValue | undefined) { this._s('emma:media-type', v); }
    /** confidence. Serialized as `emma:confidence` */
    public get confidence(): DecimalValue | undefined { return this._g('emma:confidence'); }
    public set confidence(v: DecimalValue | undefined) { this._s('emma:confidence', v); }
    /** source. Serialized as `emma:source` */
    public get source(): StringValue | undefined { return this._g('emma:source'); }
    public set source(v: StringValue | undefined) { this._s('emma:source', v); }
    /** start. Serialized as `emma:start` */
    public get start(): UInt64Value | undefined { return this._g('emma:start'); }
    public set start(v: UInt64Value | undefined) { this._s('emma:start', v); }
    /** end. Serialized as `emma:end` */
    public get end(): UInt64Value | undefined { return this._g('emma:end'); }
    public set end(v: UInt64Value | undefined) { this._s('emma:end', v); }
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    public get timeReference(): StringValue | undefined { return this._g('emma:time-ref-uri'); }
    public set timeReference(v: StringValue | undefined) { this._s('emma:time-ref-uri', v); }
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    public get timeReferenceAnchorPoint(): AnchorPointValues | undefined { return this._g('emma:time-ref-anchor-point'); }
    public set timeReferenceAnchorPoint(v: AnchorPointValues | undefined) { this._s('emma:time-ref-anchor-point', v); }
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    public get offsetToStart(): IntegerValue | undefined { return this._g('emma:offset-to-start'); }
    public set offsetToStart(v: IntegerValue | undefined) { this._s('emma:offset-to-start', v); }
    /** duration. Serialized as `emma:duration` */
    public get duration(): IntegerValue | undefined { return this._g('emma:duration'); }
    public set duration(v: IntegerValue | undefined) { this._s('emma:duration', v); }
    /** medium. Serialized as `emma:medium` */
    public get medium(): MediumValues | undefined { return this._g('emma:medium'); }
    public set medium(v: MediumValues | undefined) { this._s('emma:medium', v); }
    /** mode. Serialized as `emma:mode` */
    public get mode(): ListValue<StringValue> | undefined { return this._g('emma:mode'); }
    public set mode(v: ListValue<StringValue> | undefined) { this._s('emma:mode', v); }
    /** function. Serialized as `emma:function` */
    public get function(): StringValue | undefined { return this._g('emma:function'); }
    public set function(v: StringValue | undefined) { this._s('emma:function', v); }
    /** verbal. Serialized as `emma:verbal` */
    public get verbal(): BooleanValue | undefined { return this._g('emma:verbal'); }
    public set verbal(v: BooleanValue | undefined) { this._s('emma:verbal', v); }
    /** cost. Serialized as `emma:cost` */
    public get cost(): DecimalValue | undefined { return this._g('emma:cost'); }
    public set cost(v: DecimalValue | undefined) { this._s('emma:cost', v); }
    /** grammar-ref. Serialized as `emma:grammar-ref` */
    public get grammarRef(): StringValue | undefined { return this._g('emma:grammar-ref'); }
    public set grammarRef(v: StringValue | undefined) { this._s('emma:grammar-ref', v); }
    /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
    public get endpointInfoRef(): StringValue | undefined { return this._g('emma:endpoint-info-ref'); }
    public set endpointInfoRef(v: StringValue | undefined) { this._s('emma:endpoint-info-ref', v); }
    /** model-ref. Serialized as `emma:model-ref` */
    public get modelRef(): StringValue | undefined { return this._g('emma:model-ref'); }
    public set modelRef(v: StringValue | undefined) { this._s('emma:model-ref', v); }
    /** dialog-turn. Serialized as `emma:dialog-turn` */
    public get dialogTurn(): StringValue | undefined { return this._g('emma:dialog-turn'); }
    public set dialogTurn(v: StringValue | undefined) { this._s('emma:dialog-turn', v); }

}
/** Defines the Interpretation Class. Serialized as `emma:interpretation` */
export class Interpretation extends OxmlCompositeElement<DerivedFrom | Info | Lattice | Literal | MsinkContextNode> {

    public static override _Q = 'emma:interpretation';
    public static override _A = [':id','emma:tokens','emma:process','emma:lang','emma:signal','emma:signal-size','emma:media-type','emma:confidence','emma:source','emma:start','emma:end','emma:time-ref-uri','emma:time-ref-anchor-point','emma:offset-to-start','emma:duration','emma:medium','emma:mode','emma:function','emma:verbal','emma:cost','emma:grammar-ref','emma:endpoint-info-ref','emma:model-ref','emma:dialog-turn','emma:no-input','emma:uninterpreted',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** tokens. Serialized as `emma:tokens` */
    public get tokens(): StringValue | undefined { return this._g('emma:tokens'); }
    public set tokens(v: StringValue | undefined) { this._s('emma:tokens', v); }
    /** process. Serialized as `emma:process` */
    public get process(): StringValue | undefined { return this._g('emma:process'); }
    public set process(v: StringValue | undefined) { this._s('emma:process', v); }
    /** lang. Serialized as `emma:lang` */
    public get language(): StringValue | undefined { return this._g('emma:lang'); }
    public set language(v: StringValue | undefined) { this._s('emma:lang', v); }
    /** signal. Serialized as `emma:signal` */
    public get signal(): StringValue | undefined { return this._g('emma:signal'); }
    public set signal(v: StringValue | undefined) { this._s('emma:signal', v); }
    /** signal-size. Serialized as `emma:signal-size` */
    public get signalSize(): IntegerValue | undefined { return this._g('emma:signal-size'); }
    public set signalSize(v: IntegerValue | undefined) { this._s('emma:signal-size', v); }
    /** media-type. Serialized as `emma:media-type` */
    public get mediaType(): StringValue | undefined { return this._g('emma:media-type'); }
    public set mediaType(v: StringValue | undefined) { this._s('emma:media-type', v); }
    /** confidence. Serialized as `emma:confidence` */
    public get confidence(): DecimalValue | undefined { return this._g('emma:confidence'); }
    public set confidence(v: DecimalValue | undefined) { this._s('emma:confidence', v); }
    /** source. Serialized as `emma:source` */
    public get source(): StringValue | undefined { return this._g('emma:source'); }
    public set source(v: StringValue | undefined) { this._s('emma:source', v); }
    /** start. Serialized as `emma:start` */
    public get start(): UInt64Value | undefined { return this._g('emma:start'); }
    public set start(v: UInt64Value | undefined) { this._s('emma:start', v); }
    /** end. Serialized as `emma:end` */
    public get end(): UInt64Value | undefined { return this._g('emma:end'); }
    public set end(v: UInt64Value | undefined) { this._s('emma:end', v); }
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    public get timeReference(): StringValue | undefined { return this._g('emma:time-ref-uri'); }
    public set timeReference(v: StringValue | undefined) { this._s('emma:time-ref-uri', v); }
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    public get timeReferenceAnchorPoint(): AnchorPointValues | undefined { return this._g('emma:time-ref-anchor-point'); }
    public set timeReferenceAnchorPoint(v: AnchorPointValues | undefined) { this._s('emma:time-ref-anchor-point', v); }
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    public get offsetToStart(): IntegerValue | undefined { return this._g('emma:offset-to-start'); }
    public set offsetToStart(v: IntegerValue | undefined) { this._s('emma:offset-to-start', v); }
    /** duration. Serialized as `emma:duration` */
    public get duration(): IntegerValue | undefined { return this._g('emma:duration'); }
    public set duration(v: IntegerValue | undefined) { this._s('emma:duration', v); }
    /** medium. Serialized as `emma:medium` */
    public get medium(): MediumValues | undefined { return this._g('emma:medium'); }
    public set medium(v: MediumValues | undefined) { this._s('emma:medium', v); }
    /** mode. Serialized as `emma:mode` */
    public get mode(): ListValue<StringValue> | undefined { return this._g('emma:mode'); }
    public set mode(v: ListValue<StringValue> | undefined) { this._s('emma:mode', v); }
    /** function. Serialized as `emma:function` */
    public get function(): StringValue | undefined { return this._g('emma:function'); }
    public set function(v: StringValue | undefined) { this._s('emma:function', v); }
    /** verbal. Serialized as `emma:verbal` */
    public get verbal(): BooleanValue | undefined { return this._g('emma:verbal'); }
    public set verbal(v: BooleanValue | undefined) { this._s('emma:verbal', v); }
    /** cost. Serialized as `emma:cost` */
    public get cost(): DecimalValue | undefined { return this._g('emma:cost'); }
    public set cost(v: DecimalValue | undefined) { this._s('emma:cost', v); }
    /** grammar-ref. Serialized as `emma:grammar-ref` */
    public get grammarRef(): StringValue | undefined { return this._g('emma:grammar-ref'); }
    public set grammarRef(v: StringValue | undefined) { this._s('emma:grammar-ref', v); }
    /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
    public get endpointInfoRef(): StringValue | undefined { return this._g('emma:endpoint-info-ref'); }
    public set endpointInfoRef(v: StringValue | undefined) { this._s('emma:endpoint-info-ref', v); }
    /** model-ref. Serialized as `emma:model-ref` */
    public get modelRef(): StringValue | undefined { return this._g('emma:model-ref'); }
    public set modelRef(v: StringValue | undefined) { this._s('emma:model-ref', v); }
    /** dialog-turn. Serialized as `emma:dialog-turn` */
    public get dialogTurn(): StringValue | undefined { return this._g('emma:dialog-turn'); }
    public set dialogTurn(v: StringValue | undefined) { this._s('emma:dialog-turn', v); }
    /** no-input. Serialized as `emma:no-input` */
    public get noInput(): BooleanValue | undefined { return this._g('emma:no-input'); }
    public set noInput(v: BooleanValue | undefined) { this._s('emma:no-input', v); }
    /** uninterpreted. Serialized as `emma:uninterpreted` */
    public get uninterpreted(): BooleanValue | undefined { return this._g('emma:uninterpreted'); }
    public set uninterpreted(v: BooleanValue | undefined) { this._s('emma:uninterpreted', v); }

}
/** Defines the Literal Class. Serialized as `emma:literal` */
export class Literal extends OxmlLeafTextElement {

    public static override _Q = 'emma:literal';

}
/** Defines the Lattice Class. Serialized as `emma:lattice` */
export class Lattice extends OxmlCompositeElement<Arc | Node> {

    public static override _Q = 'emma:lattice';
    public static override _A = [':initial',':final','emma:time-ref-uri','emma:time-ref-anchor-point',];
    /** initial. Serialized as `:initial` */
    public get initial(): IntegerValue | undefined { return this._g(':initial'); }
    public set initial(v: IntegerValue | undefined) { this._s(':initial', v); }
    /** final. Serialized as `:final` */
    public get final(): ListValue<DecimalValue> | undefined { return this._g(':final'); }
    public set final(v: ListValue<DecimalValue> | undefined) { this._s(':final', v); }
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    public get timeReference(): StringValue | undefined { return this._g('emma:time-ref-uri'); }
    public set timeReference(v: StringValue | undefined) { this._s('emma:time-ref-uri', v); }
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    public get timeReferenceAnchorPoint(): AnchorPointValues | undefined { return this._g('emma:time-ref-anchor-point'); }
    public set timeReferenceAnchorPoint(v: AnchorPointValues | undefined) { this._s('emma:time-ref-anchor-point', v); }

}
/** Defines the Info Class. Serialized as `emma:info` */
export class Info extends OxmlCompositeElement {

    public static override _Q = 'emma:info';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the DerivedFrom Class. Serialized as `emma:derived-from` */
export class DerivedFrom extends OxmlLeafElement {

    public static override _Q = 'emma:derived-from';
    public static override _A = [':resource',':composite',];
    /** resource. Serialized as `:resource` */
    public get resource(): StringValue | undefined { return this._g(':resource'); }
    public set resource(v: StringValue | undefined) { this._s(':resource', v); }
    /** composite. Serialized as `:composite` */
    public get composite(): BooleanValue | undefined { return this._g(':composite'); }
    public set composite(v: BooleanValue | undefined) { this._s(':composite', v); }

}

export function initEMMANamespace() {
    Emma._C = {
        'emma:derivation': Derivation,
        'emma:grammar': Grammar,
        'emma:model': Model,
        'emma:endpoint-info': EndPointInfo,
        'emma:info': Info,
        'emma:interpretation': Interpretation,
        'emma:one-of': OneOf,
        'emma:group': Group,
        'emma:sequence': Sequence,
    };
    Emma._D = {
        ':version': new OxmlAttr(':version', OxmlType.StringValue),
    };
    Arc._C = {
        'emma:info': Info,
    };
    Arc._D = {
        ':from': new OxmlAttr(':from', OxmlType.IntegerValue),
        ':to': new OxmlAttr(':to', OxmlType.IntegerValue),
        'emma:start': new OxmlAttr('emma:start', OxmlType.UInt64Value),
        'emma:end': new OxmlAttr('emma:end', OxmlType.UInt64Value),
        'emma:offset-to-start': new OxmlAttr('emma:offset-to-start', OxmlType.IntegerValue),
        'emma:duration': new OxmlAttr('emma:duration', OxmlType.IntegerValue),
        'emma:confidence': new OxmlAttr('emma:confidence', OxmlType.DecimalValue),
        'emma:cost': new OxmlAttr('emma:cost', OxmlType.DecimalValue),
        'emma:lang': new OxmlAttr('emma:lang', OxmlType.StringValue),
        'emma:medium': new OxmlAttr('emma:medium', OxmlType.EnumValue, MediumValuesArray),
        'emma:mode': new OxmlAttr('emma:mode', OxmlType.ListValue),
        'emma:source': new OxmlAttr('emma:source', OxmlType.StringValue),
    };
    Node._C = {
        'emma:info': Info,
    };
    Node._D = {
        ':node-number': new OxmlAttr(':node-number', OxmlType.IntegerValue),
        'emma:confidence': new OxmlAttr('emma:confidence', OxmlType.DecimalValue),
        'emma:cost': new OxmlAttr('emma:cost', OxmlType.DecimalValue),
    };
    EndPoint._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        'emma:endpoint-role': new OxmlAttr('emma:endpoint-role', OxmlType.EnumValue, EndPointRoleValuesArray),
        'emma:endpoint-address': new OxmlAttr('emma:endpoint-address', OxmlType.StringValue),
        'emma:message-id': new OxmlAttr('emma:message-id', OxmlType.StringValue),
        'emma:port-num': new OxmlAttr('emma:port-num', OxmlType.IntegerValue),
        'emma:port-type': new OxmlAttr('emma:port-type', OxmlType.StringValue),
        'emma:endpoint-pair-ref': new OxmlAttr('emma:endpoint-pair-ref', OxmlType.StringValue),
        'emma:service-name': new OxmlAttr('emma:service-name', OxmlType.StringValue),
        'emma:media-type': new OxmlAttr('emma:media-type', OxmlType.StringValue),
        'emma:medium': new OxmlAttr('emma:medium', OxmlType.EnumValue, MediumValuesArray),
        'emma:mode': new OxmlAttr('emma:mode', OxmlType.ListValue),
    };
    EndPointInfo._C = {
        'emma:endpoint': EndPoint,
    };
    EndPointInfo._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    Model._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    Grammar._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    Derivation._C = {
        'emma:interpretation': Interpretation,
        'emma:one-of': OneOf,
        'emma:sequence': Sequence,
        'emma:group': Group,
    };
    GroupInfo._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    Sequence._C = {
        'emma:derived-from': DerivedFrom,
        'emma:info': Info,
        'emma:interpretation': Interpretation,
        'emma:one-of': OneOf,
        'emma:group': Group,
        'emma:sequence': Sequence,
    };
    Sequence._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        'emma:tokens': new OxmlAttr('emma:tokens', OxmlType.StringValue),
        'emma:process': new OxmlAttr('emma:process', OxmlType.StringValue),
        'emma:lang': new OxmlAttr('emma:lang', OxmlType.StringValue),
        'emma:signal': new OxmlAttr('emma:signal', OxmlType.StringValue),
        'emma:signal-size': new OxmlAttr('emma:signal-size', OxmlType.IntegerValue),
        'emma:media-type': new OxmlAttr('emma:media-type', OxmlType.StringValue),
        'emma:confidence': new OxmlAttr('emma:confidence', OxmlType.DecimalValue),
        'emma:source': new OxmlAttr('emma:source', OxmlType.StringValue),
        'emma:start': new OxmlAttr('emma:start', OxmlType.UInt64Value),
        'emma:end': new OxmlAttr('emma:end', OxmlType.UInt64Value),
        'emma:time-ref-uri': new OxmlAttr('emma:time-ref-uri', OxmlType.StringValue),
        'emma:time-ref-anchor-point': new OxmlAttr('emma:time-ref-anchor-point', OxmlType.EnumValue, AnchorPointValuesArray),
        'emma:offset-to-start': new OxmlAttr('emma:offset-to-start', OxmlType.IntegerValue),
        'emma:duration': new OxmlAttr('emma:duration', OxmlType.IntegerValue),
        'emma:medium': new OxmlAttr('emma:medium', OxmlType.EnumValue, MediumValuesArray),
        'emma:mode': new OxmlAttr('emma:mode', OxmlType.ListValue),
        'emma:function': new OxmlAttr('emma:function', OxmlType.StringValue),
        'emma:verbal': new OxmlAttr('emma:verbal', OxmlType.BooleanValue),
        'emma:cost': new OxmlAttr('emma:cost', OxmlType.DecimalValue),
        'emma:grammar-ref': new OxmlAttr('emma:grammar-ref', OxmlType.StringValue),
        'emma:endpoint-info-ref': new OxmlAttr('emma:endpoint-info-ref', OxmlType.StringValue),
        'emma:model-ref': new OxmlAttr('emma:model-ref', OxmlType.StringValue),
        'emma:dialog-turn': new OxmlAttr('emma:dialog-turn', OxmlType.StringValue),
    };
    Group._C = {
        'emma:derived-from': DerivedFrom,
        'emma:group-info': GroupInfo,
        'emma:info': Info,
        'emma:interpretation': Interpretation,
        'emma:one-of': OneOf,
        'emma:group': Group,
        'emma:sequence': Sequence,
    };
    Group._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        'emma:tokens': new OxmlAttr('emma:tokens', OxmlType.StringValue),
        'emma:process': new OxmlAttr('emma:process', OxmlType.StringValue),
        'emma:lang': new OxmlAttr('emma:lang', OxmlType.StringValue),
        'emma:signal': new OxmlAttr('emma:signal', OxmlType.StringValue),
        'emma:signal-size': new OxmlAttr('emma:signal-size', OxmlType.IntegerValue),
        'emma:media-type': new OxmlAttr('emma:media-type', OxmlType.StringValue),
        'emma:confidence': new OxmlAttr('emma:confidence', OxmlType.DecimalValue),
        'emma:source': new OxmlAttr('emma:source', OxmlType.StringValue),
        'emma:start': new OxmlAttr('emma:start', OxmlType.UInt64Value),
        'emma:end': new OxmlAttr('emma:end', OxmlType.UInt64Value),
        'emma:time-ref-uri': new OxmlAttr('emma:time-ref-uri', OxmlType.StringValue),
        'emma:time-ref-anchor-point': new OxmlAttr('emma:time-ref-anchor-point', OxmlType.EnumValue, AnchorPointValuesArray),
        'emma:offset-to-start': new OxmlAttr('emma:offset-to-start', OxmlType.IntegerValue),
        'emma:duration': new OxmlAttr('emma:duration', OxmlType.IntegerValue),
        'emma:medium': new OxmlAttr('emma:medium', OxmlType.EnumValue, MediumValuesArray),
        'emma:mode': new OxmlAttr('emma:mode', OxmlType.ListValue),
        'emma:function': new OxmlAttr('emma:function', OxmlType.StringValue),
        'emma:verbal': new OxmlAttr('emma:verbal', OxmlType.BooleanValue),
        'emma:cost': new OxmlAttr('emma:cost', OxmlType.DecimalValue),
        'emma:grammar-ref': new OxmlAttr('emma:grammar-ref', OxmlType.StringValue),
        'emma:endpoint-info-ref': new OxmlAttr('emma:endpoint-info-ref', OxmlType.StringValue),
        'emma:model-ref': new OxmlAttr('emma:model-ref', OxmlType.StringValue),
        'emma:dialog-turn': new OxmlAttr('emma:dialog-turn', OxmlType.StringValue),
    };
    OneOf._C = {
        'emma:derived-from': DerivedFrom,
        'emma:info': Info,
        'emma:interpretation': Interpretation,
        'emma:one-of': OneOf,
        'emma:group': Group,
        'emma:sequence': Sequence,
    };
    OneOf._D = {
        ':disjunction-type': new OxmlAttr(':disjunction-type', OxmlType.EnumValue, DisjunctionTypeValuesArray),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        'emma:tokens': new OxmlAttr('emma:tokens', OxmlType.StringValue),
        'emma:process': new OxmlAttr('emma:process', OxmlType.StringValue),
        'emma:lang': new OxmlAttr('emma:lang', OxmlType.StringValue),
        'emma:signal': new OxmlAttr('emma:signal', OxmlType.StringValue),
        'emma:signal-size': new OxmlAttr('emma:signal-size', OxmlType.IntegerValue),
        'emma:media-type': new OxmlAttr('emma:media-type', OxmlType.StringValue),
        'emma:confidence': new OxmlAttr('emma:confidence', OxmlType.DecimalValue),
        'emma:source': new OxmlAttr('emma:source', OxmlType.StringValue),
        'emma:start': new OxmlAttr('emma:start', OxmlType.UInt64Value),
        'emma:end': new OxmlAttr('emma:end', OxmlType.UInt64Value),
        'emma:time-ref-uri': new OxmlAttr('emma:time-ref-uri', OxmlType.StringValue),
        'emma:time-ref-anchor-point': new OxmlAttr('emma:time-ref-anchor-point', OxmlType.EnumValue, AnchorPointValuesArray),
        'emma:offset-to-start': new OxmlAttr('emma:offset-to-start', OxmlType.IntegerValue),
        'emma:duration': new OxmlAttr('emma:duration', OxmlType.IntegerValue),
        'emma:medium': new OxmlAttr('emma:medium', OxmlType.EnumValue, MediumValuesArray),
        'emma:mode': new OxmlAttr('emma:mode', OxmlType.ListValue),
        'emma:function': new OxmlAttr('emma:function', OxmlType.StringValue),
        'emma:verbal': new OxmlAttr('emma:verbal', OxmlType.BooleanValue),
        'emma:cost': new OxmlAttr('emma:cost', OxmlType.DecimalValue),
        'emma:grammar-ref': new OxmlAttr('emma:grammar-ref', OxmlType.StringValue),
        'emma:endpoint-info-ref': new OxmlAttr('emma:endpoint-info-ref', OxmlType.StringValue),
        'emma:model-ref': new OxmlAttr('emma:model-ref', OxmlType.StringValue),
        'emma:dialog-turn': new OxmlAttr('emma:dialog-turn', OxmlType.StringValue),
    };
    Interpretation._C = {
        'emma:derived-from': DerivedFrom,
        'emma:info': Info,
        'emma:lattice': Lattice,
        'emma:literal': Literal,
        'msink:context': MsinkContextNode,
    };
    Interpretation._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        'emma:tokens': new OxmlAttr('emma:tokens', OxmlType.StringValue),
        'emma:process': new OxmlAttr('emma:process', OxmlType.StringValue),
        'emma:lang': new OxmlAttr('emma:lang', OxmlType.StringValue),
        'emma:signal': new OxmlAttr('emma:signal', OxmlType.StringValue),
        'emma:signal-size': new OxmlAttr('emma:signal-size', OxmlType.IntegerValue),
        'emma:media-type': new OxmlAttr('emma:media-type', OxmlType.StringValue),
        'emma:confidence': new OxmlAttr('emma:confidence', OxmlType.DecimalValue),
        'emma:source': new OxmlAttr('emma:source', OxmlType.StringValue),
        'emma:start': new OxmlAttr('emma:start', OxmlType.UInt64Value),
        'emma:end': new OxmlAttr('emma:end', OxmlType.UInt64Value),
        'emma:time-ref-uri': new OxmlAttr('emma:time-ref-uri', OxmlType.StringValue),
        'emma:time-ref-anchor-point': new OxmlAttr('emma:time-ref-anchor-point', OxmlType.EnumValue, AnchorPointValuesArray),
        'emma:offset-to-start': new OxmlAttr('emma:offset-to-start', OxmlType.IntegerValue),
        'emma:duration': new OxmlAttr('emma:duration', OxmlType.IntegerValue),
        'emma:medium': new OxmlAttr('emma:medium', OxmlType.EnumValue, MediumValuesArray),
        'emma:mode': new OxmlAttr('emma:mode', OxmlType.ListValue),
        'emma:function': new OxmlAttr('emma:function', OxmlType.StringValue),
        'emma:verbal': new OxmlAttr('emma:verbal', OxmlType.BooleanValue),
        'emma:cost': new OxmlAttr('emma:cost', OxmlType.DecimalValue),
        'emma:grammar-ref': new OxmlAttr('emma:grammar-ref', OxmlType.StringValue),
        'emma:endpoint-info-ref': new OxmlAttr('emma:endpoint-info-ref', OxmlType.StringValue),
        'emma:model-ref': new OxmlAttr('emma:model-ref', OxmlType.StringValue),
        'emma:dialog-turn': new OxmlAttr('emma:dialog-turn', OxmlType.StringValue),
        'emma:no-input': new OxmlAttr('emma:no-input', OxmlType.BooleanValue),
        'emma:uninterpreted': new OxmlAttr('emma:uninterpreted', OxmlType.BooleanValue),
    };
    Lattice._C = {
        'emma:arc': Arc,
        'emma:node': Node,
    };
    Lattice._D = {
        ':initial': new OxmlAttr(':initial', OxmlType.IntegerValue),
        ':final': new OxmlAttr(':final', OxmlType.ListValue),
        'emma:time-ref-uri': new OxmlAttr('emma:time-ref-uri', OxmlType.StringValue),
        'emma:time-ref-anchor-point': new OxmlAttr('emma:time-ref-anchor-point', OxmlType.EnumValue, AnchorPointValuesArray),
    };
    Info._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    DerivedFrom._D = {
        ':resource': new OxmlAttr(':resource', OxmlType.StringValue),
        ':composite': new OxmlAttr(':composite', OxmlType.BooleanValue),
    };
    return {
        prefix: 'emma',
        xmlns: 'http://www.w3.org/2003/04/emma',
    };
}
