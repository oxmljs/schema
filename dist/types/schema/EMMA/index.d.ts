import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { StringValue } from '../../framework/types/StringValue';
import { IntegerValue } from '../../framework/types/IntegerValue';
import { UInt64Value } from '../../framework/types/UInt64Value';
import { DecimalValue } from '../../framework/types/DecimalValue';
import { ListValue } from '../../framework/types/ListValue';
import { BooleanValue } from '../../framework/types/BooleanValue';
import { ContextNode as MsinkContextNode } from '../Office2010/Ink';
export declare enum EndPointRoleValues {
    /** undefined. Serialized value: `source` */
    Source = "source",
    /** undefined. Serialized value: `sink` */
    Sink = "sink",
    /** undefined. Serialized value: `reply-to` */
    Replyto = "reply-to",
    /** undefined. Serialized value: `router` */
    Router = "router"
}
export declare const EndPointRoleValuesArray: readonly [EndPointRoleValues.Source, EndPointRoleValues.Sink, EndPointRoleValues.Replyto, EndPointRoleValues.Router];
export declare enum MediumValues {
    /** undefined. Serialized value: `acoustic` */
    Acoustic = "acoustic",
    /** undefined. Serialized value: `tactile` */
    Tactile = "tactile",
    /** undefined. Serialized value: `visual` */
    Visual = "visual"
}
export declare const MediumValuesArray: readonly [MediumValues.Acoustic, MediumValues.Tactile, MediumValues.Visual];
export declare enum AnchorPointValues {
    /** undefined. Serialized value: `start` */
    Start = "start",
    /** undefined. Serialized value: `end` */
    End = "end"
}
export declare const AnchorPointValuesArray: readonly [AnchorPointValues.Start, AnchorPointValues.End];
export declare enum DisjunctionTypeValues {
    /** undefined. Serialized value: `recognition` */
    Recognition = "recognition",
    /** undefined. Serialized value: `understanding` */
    Understanding = "understanding",
    /** undefined. Serialized value: `multi-device` */
    Multidevice = "multi-device",
    /** undefined. Serialized value: `multi-process` */
    Multiprocess = "multi-process"
}
export declare const DisjunctionTypeValuesArray: readonly [DisjunctionTypeValues.Recognition, DisjunctionTypeValues.Understanding, DisjunctionTypeValues.Multidevice, DisjunctionTypeValues.Multiprocess];
/** Defines the Emma Class. Serialized as `emma:emma` */
export declare class Emma extends OxmlCompositeElement<Derivation | Grammar | Model | EndPointInfo | Info | Interpretation | OneOf | Group | Sequence> {
    static _Q: string;
    static _A: string[];
    /** version. Serialized as `:version` */
    get version(): StringValue | undefined;
    set version(v: StringValue | undefined);
}
/** Defines the Arc Class. Serialized as `emma:arc` */
export declare class Arc extends OxmlCompositeElement<Info> {
    static _Q: string;
    static _A: string[];
    /** from. Serialized as `:from` */
    get from(): IntegerValue | undefined;
    set from(v: IntegerValue | undefined);
    /** to. Serialized as `:to` */
    get to(): IntegerValue | undefined;
    set to(v: IntegerValue | undefined);
    /** start. Serialized as `emma:start` */
    get start(): UInt64Value | undefined;
    set start(v: UInt64Value | undefined);
    /** end. Serialized as `emma:end` */
    get end(): UInt64Value | undefined;
    set end(v: UInt64Value | undefined);
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    get offsetToStart(): IntegerValue | undefined;
    set offsetToStart(v: IntegerValue | undefined);
    /** duration. Serialized as `emma:duration` */
    get duration(): IntegerValue | undefined;
    set duration(v: IntegerValue | undefined);
    /** confidence. Serialized as `emma:confidence` */
    get confidence(): DecimalValue | undefined;
    set confidence(v: DecimalValue | undefined);
    /** cost. Serialized as `emma:cost` */
    get cost(): DecimalValue | undefined;
    set cost(v: DecimalValue | undefined);
    /** lang. Serialized as `emma:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** medium. Serialized as `emma:medium` */
    get medium(): MediumValues | undefined;
    set medium(v: MediumValues | undefined);
    /** mode. Serialized as `emma:mode` */
    get mode(): ListValue<StringValue> | undefined;
    set mode(v: ListValue<StringValue> | undefined);
    /** source. Serialized as `emma:source` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
}
/** Defines the Node Class. Serialized as `emma:node` */
export declare class Node extends OxmlCompositeElement<Info> {
    static _Q: string;
    static _A: string[];
    /** node-number. Serialized as `:node-number` */
    get nodeNumber(): IntegerValue | undefined;
    set nodeNumber(v: IntegerValue | undefined);
    /** confidence. Serialized as `emma:confidence` */
    get confidence(): DecimalValue | undefined;
    set confidence(v: DecimalValue | undefined);
    /** cost. Serialized as `emma:cost` */
    get cost(): DecimalValue | undefined;
    set cost(v: DecimalValue | undefined);
}
/** Defines the EndPoint Class. Serialized as `emma:endpoint` */
export declare class EndPoint extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** endpoint-role. Serialized as `emma:endpoint-role` */
    get endpointRole(): EndPointRoleValues | undefined;
    set endpointRole(v: EndPointRoleValues | undefined);
    /** endpoint-address. Serialized as `emma:endpoint-address` */
    get endPointAddress(): StringValue | undefined;
    set endPointAddress(v: StringValue | undefined);
    /** message-id. Serialized as `emma:message-id` */
    get messageId(): StringValue | undefined;
    set messageId(v: StringValue | undefined);
    /** port-num. Serialized as `emma:port-num` */
    get portNumber(): IntegerValue | undefined;
    set portNumber(v: IntegerValue | undefined);
    /** port-type. Serialized as `emma:port-type` */
    get portType(): StringValue | undefined;
    set portType(v: StringValue | undefined);
    /** endpoint-pair-ref. Serialized as `emma:endpoint-pair-ref` */
    get endpointPairRef(): StringValue | undefined;
    set endpointPairRef(v: StringValue | undefined);
    /** service-name. Serialized as `emma:service-name` */
    get serviceName(): StringValue | undefined;
    set serviceName(v: StringValue | undefined);
    /** media-type. Serialized as `emma:media-type` */
    get mediaType(): StringValue | undefined;
    set mediaType(v: StringValue | undefined);
    /** medium. Serialized as `emma:medium` */
    get medium(): MediumValues | undefined;
    set medium(v: MediumValues | undefined);
    /** mode. Serialized as `emma:mode` */
    get mode(): ListValue<StringValue> | undefined;
    set mode(v: ListValue<StringValue> | undefined);
}
/** Defines the EndPointInfo Class. Serialized as `emma:endpoint-info` */
export declare class EndPointInfo extends OxmlCompositeElement<EndPoint> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the Model Class. Serialized as `emma:model` */
export declare class Model extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** ref. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Defines the Grammar Class. Serialized as `emma:grammar` */
export declare class Grammar extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** ref. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Defines the Derivation Class. Serialized as `emma:derivation` */
export declare class Derivation extends OxmlCompositeElement<Interpretation | OneOf | Sequence | Group> {
    static _Q: string;
}
/** Defines the GroupInfo Class. Serialized as `emma:group-info` */
export declare class GroupInfo extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** ref. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Defines the Sequence Class. Serialized as `emma:sequence` */
export declare class Sequence extends OxmlCompositeElement<DerivedFrom | Info | Interpretation | OneOf | Group | Sequence> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** tokens. Serialized as `emma:tokens` */
    get tokens(): StringValue | undefined;
    set tokens(v: StringValue | undefined);
    /** process. Serialized as `emma:process` */
    get process(): StringValue | undefined;
    set process(v: StringValue | undefined);
    /** lang. Serialized as `emma:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** signal. Serialized as `emma:signal` */
    get signal(): StringValue | undefined;
    set signal(v: StringValue | undefined);
    /** signal-size. Serialized as `emma:signal-size` */
    get signalSize(): IntegerValue | undefined;
    set signalSize(v: IntegerValue | undefined);
    /** media-type. Serialized as `emma:media-type` */
    get mediaType(): StringValue | undefined;
    set mediaType(v: StringValue | undefined);
    /** confidence. Serialized as `emma:confidence` */
    get confidence(): DecimalValue | undefined;
    set confidence(v: DecimalValue | undefined);
    /** source. Serialized as `emma:source` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** start. Serialized as `emma:start` */
    get start(): UInt64Value | undefined;
    set start(v: UInt64Value | undefined);
    /** end. Serialized as `emma:end` */
    get end(): UInt64Value | undefined;
    set end(v: UInt64Value | undefined);
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    get timeReference(): StringValue | undefined;
    set timeReference(v: StringValue | undefined);
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    get timeReferenceAnchorPoint(): AnchorPointValues | undefined;
    set timeReferenceAnchorPoint(v: AnchorPointValues | undefined);
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    get offsetToStart(): IntegerValue | undefined;
    set offsetToStart(v: IntegerValue | undefined);
    /** duration. Serialized as `emma:duration` */
    get duration(): IntegerValue | undefined;
    set duration(v: IntegerValue | undefined);
    /** medium. Serialized as `emma:medium` */
    get medium(): MediumValues | undefined;
    set medium(v: MediumValues | undefined);
    /** mode. Serialized as `emma:mode` */
    get mode(): ListValue<StringValue> | undefined;
    set mode(v: ListValue<StringValue> | undefined);
    /** function. Serialized as `emma:function` */
    get function(): StringValue | undefined;
    set function(v: StringValue | undefined);
    /** verbal. Serialized as `emma:verbal` */
    get verbal(): BooleanValue | undefined;
    set verbal(v: BooleanValue | undefined);
    /** cost. Serialized as `emma:cost` */
    get cost(): DecimalValue | undefined;
    set cost(v: DecimalValue | undefined);
    /** grammar-ref. Serialized as `emma:grammar-ref` */
    get grammarRef(): StringValue | undefined;
    set grammarRef(v: StringValue | undefined);
    /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
    get endpointInfoRef(): StringValue | undefined;
    set endpointInfoRef(v: StringValue | undefined);
    /** model-ref. Serialized as `emma:model-ref` */
    get modelRef(): StringValue | undefined;
    set modelRef(v: StringValue | undefined);
    /** dialog-turn. Serialized as `emma:dialog-turn` */
    get dialogTurn(): StringValue | undefined;
    set dialogTurn(v: StringValue | undefined);
}
/** Defines the Group Class. Serialized as `emma:group` */
export declare class Group extends OxmlCompositeElement<DerivedFrom | GroupInfo | Info | Interpretation | OneOf | Group | Sequence> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** tokens. Serialized as `emma:tokens` */
    get tokens(): StringValue | undefined;
    set tokens(v: StringValue | undefined);
    /** process. Serialized as `emma:process` */
    get process(): StringValue | undefined;
    set process(v: StringValue | undefined);
    /** lang. Serialized as `emma:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** signal. Serialized as `emma:signal` */
    get signal(): StringValue | undefined;
    set signal(v: StringValue | undefined);
    /** signal-size. Serialized as `emma:signal-size` */
    get signalSize(): IntegerValue | undefined;
    set signalSize(v: IntegerValue | undefined);
    /** media-type. Serialized as `emma:media-type` */
    get mediaType(): StringValue | undefined;
    set mediaType(v: StringValue | undefined);
    /** confidence. Serialized as `emma:confidence` */
    get confidence(): DecimalValue | undefined;
    set confidence(v: DecimalValue | undefined);
    /** source. Serialized as `emma:source` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** start. Serialized as `emma:start` */
    get start(): UInt64Value | undefined;
    set start(v: UInt64Value | undefined);
    /** end. Serialized as `emma:end` */
    get end(): UInt64Value | undefined;
    set end(v: UInt64Value | undefined);
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    get timeReference(): StringValue | undefined;
    set timeReference(v: StringValue | undefined);
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    get timeReferenceAnchorPoint(): AnchorPointValues | undefined;
    set timeReferenceAnchorPoint(v: AnchorPointValues | undefined);
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    get offsetToStart(): IntegerValue | undefined;
    set offsetToStart(v: IntegerValue | undefined);
    /** duration. Serialized as `emma:duration` */
    get duration(): IntegerValue | undefined;
    set duration(v: IntegerValue | undefined);
    /** medium. Serialized as `emma:medium` */
    get medium(): MediumValues | undefined;
    set medium(v: MediumValues | undefined);
    /** mode. Serialized as `emma:mode` */
    get mode(): ListValue<StringValue> | undefined;
    set mode(v: ListValue<StringValue> | undefined);
    /** function. Serialized as `emma:function` */
    get function(): StringValue | undefined;
    set function(v: StringValue | undefined);
    /** verbal. Serialized as `emma:verbal` */
    get verbal(): BooleanValue | undefined;
    set verbal(v: BooleanValue | undefined);
    /** cost. Serialized as `emma:cost` */
    get cost(): DecimalValue | undefined;
    set cost(v: DecimalValue | undefined);
    /** grammar-ref. Serialized as `emma:grammar-ref` */
    get grammarRef(): StringValue | undefined;
    set grammarRef(v: StringValue | undefined);
    /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
    get endpointInfoRef(): StringValue | undefined;
    set endpointInfoRef(v: StringValue | undefined);
    /** model-ref. Serialized as `emma:model-ref` */
    get modelRef(): StringValue | undefined;
    set modelRef(v: StringValue | undefined);
    /** dialog-turn. Serialized as `emma:dialog-turn` */
    get dialogTurn(): StringValue | undefined;
    set dialogTurn(v: StringValue | undefined);
}
/** Defines the OneOf Class. Serialized as `emma:one-of` */
export declare class OneOf extends OxmlCompositeElement<DerivedFrom | Info | Interpretation | OneOf | Group | Sequence> {
    static _Q: string;
    static _A: string[];
    /** disjunction-type. Serialized as `:disjunction-type` */
    get disjunctionType(): DisjunctionTypeValues | undefined;
    set disjunctionType(v: DisjunctionTypeValues | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** tokens. Serialized as `emma:tokens` */
    get tokens(): StringValue | undefined;
    set tokens(v: StringValue | undefined);
    /** process. Serialized as `emma:process` */
    get process(): StringValue | undefined;
    set process(v: StringValue | undefined);
    /** lang. Serialized as `emma:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** signal. Serialized as `emma:signal` */
    get signal(): StringValue | undefined;
    set signal(v: StringValue | undefined);
    /** signal-size. Serialized as `emma:signal-size` */
    get signalSize(): IntegerValue | undefined;
    set signalSize(v: IntegerValue | undefined);
    /** media-type. Serialized as `emma:media-type` */
    get mediaType(): StringValue | undefined;
    set mediaType(v: StringValue | undefined);
    /** confidence. Serialized as `emma:confidence` */
    get confidence(): DecimalValue | undefined;
    set confidence(v: DecimalValue | undefined);
    /** source. Serialized as `emma:source` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** start. Serialized as `emma:start` */
    get start(): UInt64Value | undefined;
    set start(v: UInt64Value | undefined);
    /** end. Serialized as `emma:end` */
    get end(): UInt64Value | undefined;
    set end(v: UInt64Value | undefined);
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    get timeReference(): StringValue | undefined;
    set timeReference(v: StringValue | undefined);
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    get timeReferenceAnchorPoint(): AnchorPointValues | undefined;
    set timeReferenceAnchorPoint(v: AnchorPointValues | undefined);
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    get offsetToStart(): IntegerValue | undefined;
    set offsetToStart(v: IntegerValue | undefined);
    /** duration. Serialized as `emma:duration` */
    get duration(): IntegerValue | undefined;
    set duration(v: IntegerValue | undefined);
    /** medium. Serialized as `emma:medium` */
    get medium(): MediumValues | undefined;
    set medium(v: MediumValues | undefined);
    /** mode. Serialized as `emma:mode` */
    get mode(): ListValue<StringValue> | undefined;
    set mode(v: ListValue<StringValue> | undefined);
    /** function. Serialized as `emma:function` */
    get function(): StringValue | undefined;
    set function(v: StringValue | undefined);
    /** verbal. Serialized as `emma:verbal` */
    get verbal(): BooleanValue | undefined;
    set verbal(v: BooleanValue | undefined);
    /** cost. Serialized as `emma:cost` */
    get cost(): DecimalValue | undefined;
    set cost(v: DecimalValue | undefined);
    /** grammar-ref. Serialized as `emma:grammar-ref` */
    get grammarRef(): StringValue | undefined;
    set grammarRef(v: StringValue | undefined);
    /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
    get endpointInfoRef(): StringValue | undefined;
    set endpointInfoRef(v: StringValue | undefined);
    /** model-ref. Serialized as `emma:model-ref` */
    get modelRef(): StringValue | undefined;
    set modelRef(v: StringValue | undefined);
    /** dialog-turn. Serialized as `emma:dialog-turn` */
    get dialogTurn(): StringValue | undefined;
    set dialogTurn(v: StringValue | undefined);
}
/** Defines the Interpretation Class. Serialized as `emma:interpretation` */
export declare class Interpretation extends OxmlCompositeElement<DerivedFrom | Info | Lattice | Literal | MsinkContextNode> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** tokens. Serialized as `emma:tokens` */
    get tokens(): StringValue | undefined;
    set tokens(v: StringValue | undefined);
    /** process. Serialized as `emma:process` */
    get process(): StringValue | undefined;
    set process(v: StringValue | undefined);
    /** lang. Serialized as `emma:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** signal. Serialized as `emma:signal` */
    get signal(): StringValue | undefined;
    set signal(v: StringValue | undefined);
    /** signal-size. Serialized as `emma:signal-size` */
    get signalSize(): IntegerValue | undefined;
    set signalSize(v: IntegerValue | undefined);
    /** media-type. Serialized as `emma:media-type` */
    get mediaType(): StringValue | undefined;
    set mediaType(v: StringValue | undefined);
    /** confidence. Serialized as `emma:confidence` */
    get confidence(): DecimalValue | undefined;
    set confidence(v: DecimalValue | undefined);
    /** source. Serialized as `emma:source` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** start. Serialized as `emma:start` */
    get start(): UInt64Value | undefined;
    set start(v: UInt64Value | undefined);
    /** end. Serialized as `emma:end` */
    get end(): UInt64Value | undefined;
    set end(v: UInt64Value | undefined);
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    get timeReference(): StringValue | undefined;
    set timeReference(v: StringValue | undefined);
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    get timeReferenceAnchorPoint(): AnchorPointValues | undefined;
    set timeReferenceAnchorPoint(v: AnchorPointValues | undefined);
    /** offset-to-start. Serialized as `emma:offset-to-start` */
    get offsetToStart(): IntegerValue | undefined;
    set offsetToStart(v: IntegerValue | undefined);
    /** duration. Serialized as `emma:duration` */
    get duration(): IntegerValue | undefined;
    set duration(v: IntegerValue | undefined);
    /** medium. Serialized as `emma:medium` */
    get medium(): MediumValues | undefined;
    set medium(v: MediumValues | undefined);
    /** mode. Serialized as `emma:mode` */
    get mode(): ListValue<StringValue> | undefined;
    set mode(v: ListValue<StringValue> | undefined);
    /** function. Serialized as `emma:function` */
    get function(): StringValue | undefined;
    set function(v: StringValue | undefined);
    /** verbal. Serialized as `emma:verbal` */
    get verbal(): BooleanValue | undefined;
    set verbal(v: BooleanValue | undefined);
    /** cost. Serialized as `emma:cost` */
    get cost(): DecimalValue | undefined;
    set cost(v: DecimalValue | undefined);
    /** grammar-ref. Serialized as `emma:grammar-ref` */
    get grammarRef(): StringValue | undefined;
    set grammarRef(v: StringValue | undefined);
    /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
    get endpointInfoRef(): StringValue | undefined;
    set endpointInfoRef(v: StringValue | undefined);
    /** model-ref. Serialized as `emma:model-ref` */
    get modelRef(): StringValue | undefined;
    set modelRef(v: StringValue | undefined);
    /** dialog-turn. Serialized as `emma:dialog-turn` */
    get dialogTurn(): StringValue | undefined;
    set dialogTurn(v: StringValue | undefined);
    /** no-input. Serialized as `emma:no-input` */
    get noInput(): BooleanValue | undefined;
    set noInput(v: BooleanValue | undefined);
    /** uninterpreted. Serialized as `emma:uninterpreted` */
    get uninterpreted(): BooleanValue | undefined;
    set uninterpreted(v: BooleanValue | undefined);
}
/** Defines the Literal Class. Serialized as `emma:literal` */
export declare class Literal extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the Lattice Class. Serialized as `emma:lattice` */
export declare class Lattice extends OxmlCompositeElement<Arc | Node> {
    static _Q: string;
    static _A: string[];
    /** initial. Serialized as `:initial` */
    get initial(): IntegerValue | undefined;
    set initial(v: IntegerValue | undefined);
    /** final. Serialized as `:final` */
    get final(): ListValue<DecimalValue> | undefined;
    set final(v: ListValue<DecimalValue> | undefined);
    /** time-ref-uri. Serialized as `emma:time-ref-uri` */
    get timeReference(): StringValue | undefined;
    set timeReference(v: StringValue | undefined);
    /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
    get timeReferenceAnchorPoint(): AnchorPointValues | undefined;
    set timeReferenceAnchorPoint(v: AnchorPointValues | undefined);
}
/** Defines the Info Class. Serialized as `emma:info` */
export declare class Info extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the DerivedFrom Class. Serialized as `emma:derived-from` */
export declare class DerivedFrom extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** resource. Serialized as `:resource` */
    get resource(): StringValue | undefined;
    set resource(v: StringValue | undefined);
    /** composite. Serialized as `:composite` */
    get composite(): BooleanValue | undefined;
    set composite(v: BooleanValue | undefined);
}
export declare function initEMMANamespace(): {
    prefix: string;
    xmlns: string;
};
