import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
import { ContextNode as MsinkContextNode } from "../Office2010/Ink";
var EndPointRoleValues = /* @__PURE__ */ ((EndPointRoleValues2) => {
  EndPointRoleValues2["Source"] = "source";
  EndPointRoleValues2["Sink"] = "sink";
  EndPointRoleValues2["Replyto"] = "reply-to";
  EndPointRoleValues2["Router"] = "router";
  return EndPointRoleValues2;
})(EndPointRoleValues || {});
const EndPointRoleValuesArray = [
  "source" /* Source */,
  "sink" /* Sink */,
  "reply-to" /* Replyto */,
  "router" /* Router */
];
var MediumValues = /* @__PURE__ */ ((MediumValues2) => {
  MediumValues2["Acoustic"] = "acoustic";
  MediumValues2["Tactile"] = "tactile";
  MediumValues2["Visual"] = "visual";
  return MediumValues2;
})(MediumValues || {});
const MediumValuesArray = [
  "acoustic" /* Acoustic */,
  "tactile" /* Tactile */,
  "visual" /* Visual */
];
var AnchorPointValues = /* @__PURE__ */ ((AnchorPointValues2) => {
  AnchorPointValues2["Start"] = "start";
  AnchorPointValues2["End"] = "end";
  return AnchorPointValues2;
})(AnchorPointValues || {});
const AnchorPointValuesArray = [
  "start" /* Start */,
  "end" /* End */
];
var DisjunctionTypeValues = /* @__PURE__ */ ((DisjunctionTypeValues2) => {
  DisjunctionTypeValues2["Recognition"] = "recognition";
  DisjunctionTypeValues2["Understanding"] = "understanding";
  DisjunctionTypeValues2["Multidevice"] = "multi-device";
  DisjunctionTypeValues2["Multiprocess"] = "multi-process";
  return DisjunctionTypeValues2;
})(DisjunctionTypeValues || {});
const DisjunctionTypeValuesArray = [
  "recognition" /* Recognition */,
  "understanding" /* Understanding */,
  "multi-device" /* Multidevice */,
  "multi-process" /* Multiprocess */
];
class Emma extends OxmlCompositeElement {
  static _Q = "emma:emma";
  static _A = [":version"];
  /** version. Serialized as `:version` */
  get version() {
    return this._g(":version");
  }
  set version(v) {
    this._s(":version", v);
  }
}
class Arc extends OxmlCompositeElement {
  static _Q = "emma:arc";
  static _A = [":from", ":to", "emma:start", "emma:end", "emma:offset-to-start", "emma:duration", "emma:confidence", "emma:cost", "emma:lang", "emma:medium", "emma:mode", "emma:source"];
  /** from. Serialized as `:from` */
  get from() {
    return this._g(":from");
  }
  set from(v) {
    this._s(":from", v);
  }
  /** to. Serialized as `:to` */
  get to() {
    return this._g(":to");
  }
  set to(v) {
    this._s(":to", v);
  }
  /** start. Serialized as `emma:start` */
  get start() {
    return this._g("emma:start");
  }
  set start(v) {
    this._s("emma:start", v);
  }
  /** end. Serialized as `emma:end` */
  get end() {
    return this._g("emma:end");
  }
  set end(v) {
    this._s("emma:end", v);
  }
  /** offset-to-start. Serialized as `emma:offset-to-start` */
  get offsetToStart() {
    return this._g("emma:offset-to-start");
  }
  set offsetToStart(v) {
    this._s("emma:offset-to-start", v);
  }
  /** duration. Serialized as `emma:duration` */
  get duration() {
    return this._g("emma:duration");
  }
  set duration(v) {
    this._s("emma:duration", v);
  }
  /** confidence. Serialized as `emma:confidence` */
  get confidence() {
    return this._g("emma:confidence");
  }
  set confidence(v) {
    this._s("emma:confidence", v);
  }
  /** cost. Serialized as `emma:cost` */
  get cost() {
    return this._g("emma:cost");
  }
  set cost(v) {
    this._s("emma:cost", v);
  }
  /** lang. Serialized as `emma:lang` */
  get language() {
    return this._g("emma:lang");
  }
  set language(v) {
    this._s("emma:lang", v);
  }
  /** medium. Serialized as `emma:medium` */
  get medium() {
    return this._g("emma:medium");
  }
  set medium(v) {
    this._s("emma:medium", v);
  }
  /** mode. Serialized as `emma:mode` */
  get mode() {
    return this._g("emma:mode");
  }
  set mode(v) {
    this._s("emma:mode", v);
  }
  /** source. Serialized as `emma:source` */
  get source() {
    return this._g("emma:source");
  }
  set source(v) {
    this._s("emma:source", v);
  }
}
class Node extends OxmlCompositeElement {
  static _Q = "emma:node";
  static _A = [":node-number", "emma:confidence", "emma:cost"];
  /** node-number. Serialized as `:node-number` */
  get nodeNumber() {
    return this._g(":node-number");
  }
  set nodeNumber(v) {
    this._s(":node-number", v);
  }
  /** confidence. Serialized as `emma:confidence` */
  get confidence() {
    return this._g("emma:confidence");
  }
  set confidence(v) {
    this._s("emma:confidence", v);
  }
  /** cost. Serialized as `emma:cost` */
  get cost() {
    return this._g("emma:cost");
  }
  set cost(v) {
    this._s("emma:cost", v);
  }
}
class EndPoint extends OxmlCompositeElement {
  static _Q = "emma:endpoint";
  static _A = [":id", "emma:endpoint-role", "emma:endpoint-address", "emma:message-id", "emma:port-num", "emma:port-type", "emma:endpoint-pair-ref", "emma:service-name", "emma:media-type", "emma:medium", "emma:mode"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** endpoint-role. Serialized as `emma:endpoint-role` */
  get endpointRole() {
    return this._g("emma:endpoint-role");
  }
  set endpointRole(v) {
    this._s("emma:endpoint-role", v);
  }
  /** endpoint-address. Serialized as `emma:endpoint-address` */
  get endPointAddress() {
    return this._g("emma:endpoint-address");
  }
  set endPointAddress(v) {
    this._s("emma:endpoint-address", v);
  }
  /** message-id. Serialized as `emma:message-id` */
  get messageId() {
    return this._g("emma:message-id");
  }
  set messageId(v) {
    this._s("emma:message-id", v);
  }
  /** port-num. Serialized as `emma:port-num` */
  get portNumber() {
    return this._g("emma:port-num");
  }
  set portNumber(v) {
    this._s("emma:port-num", v);
  }
  /** port-type. Serialized as `emma:port-type` */
  get portType() {
    return this._g("emma:port-type");
  }
  set portType(v) {
    this._s("emma:port-type", v);
  }
  /** endpoint-pair-ref. Serialized as `emma:endpoint-pair-ref` */
  get endpointPairRef() {
    return this._g("emma:endpoint-pair-ref");
  }
  set endpointPairRef(v) {
    this._s("emma:endpoint-pair-ref", v);
  }
  /** service-name. Serialized as `emma:service-name` */
  get serviceName() {
    return this._g("emma:service-name");
  }
  set serviceName(v) {
    this._s("emma:service-name", v);
  }
  /** media-type. Serialized as `emma:media-type` */
  get mediaType() {
    return this._g("emma:media-type");
  }
  set mediaType(v) {
    this._s("emma:media-type", v);
  }
  /** medium. Serialized as `emma:medium` */
  get medium() {
    return this._g("emma:medium");
  }
  set medium(v) {
    this._s("emma:medium", v);
  }
  /** mode. Serialized as `emma:mode` */
  get mode() {
    return this._g("emma:mode");
  }
  set mode(v) {
    this._s("emma:mode", v);
  }
}
class EndPointInfo extends OxmlCompositeElement {
  static _Q = "emma:endpoint-info";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class Model extends OxmlCompositeElement {
  static _Q = "emma:model";
  static _A = [":id", ":ref"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** ref. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class Grammar extends OxmlLeafElement {
  static _Q = "emma:grammar";
  static _A = [":id", ":ref"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** ref. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class Derivation extends OxmlCompositeElement {
  static _Q = "emma:derivation";
}
class GroupInfo extends OxmlCompositeElement {
  static _Q = "emma:group-info";
  static _A = [":ref"];
  /** ref. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class Sequence extends OxmlCompositeElement {
  static _Q = "emma:sequence";
  static _A = [":id", "emma:tokens", "emma:process", "emma:lang", "emma:signal", "emma:signal-size", "emma:media-type", "emma:confidence", "emma:source", "emma:start", "emma:end", "emma:time-ref-uri", "emma:time-ref-anchor-point", "emma:offset-to-start", "emma:duration", "emma:medium", "emma:mode", "emma:function", "emma:verbal", "emma:cost", "emma:grammar-ref", "emma:endpoint-info-ref", "emma:model-ref", "emma:dialog-turn"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** tokens. Serialized as `emma:tokens` */
  get tokens() {
    return this._g("emma:tokens");
  }
  set tokens(v) {
    this._s("emma:tokens", v);
  }
  /** process. Serialized as `emma:process` */
  get process() {
    return this._g("emma:process");
  }
  set process(v) {
    this._s("emma:process", v);
  }
  /** lang. Serialized as `emma:lang` */
  get language() {
    return this._g("emma:lang");
  }
  set language(v) {
    this._s("emma:lang", v);
  }
  /** signal. Serialized as `emma:signal` */
  get signal() {
    return this._g("emma:signal");
  }
  set signal(v) {
    this._s("emma:signal", v);
  }
  /** signal-size. Serialized as `emma:signal-size` */
  get signalSize() {
    return this._g("emma:signal-size");
  }
  set signalSize(v) {
    this._s("emma:signal-size", v);
  }
  /** media-type. Serialized as `emma:media-type` */
  get mediaType() {
    return this._g("emma:media-type");
  }
  set mediaType(v) {
    this._s("emma:media-type", v);
  }
  /** confidence. Serialized as `emma:confidence` */
  get confidence() {
    return this._g("emma:confidence");
  }
  set confidence(v) {
    this._s("emma:confidence", v);
  }
  /** source. Serialized as `emma:source` */
  get source() {
    return this._g("emma:source");
  }
  set source(v) {
    this._s("emma:source", v);
  }
  /** start. Serialized as `emma:start` */
  get start() {
    return this._g("emma:start");
  }
  set start(v) {
    this._s("emma:start", v);
  }
  /** end. Serialized as `emma:end` */
  get end() {
    return this._g("emma:end");
  }
  set end(v) {
    this._s("emma:end", v);
  }
  /** time-ref-uri. Serialized as `emma:time-ref-uri` */
  get timeReference() {
    return this._g("emma:time-ref-uri");
  }
  set timeReference(v) {
    this._s("emma:time-ref-uri", v);
  }
  /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
  get timeReferenceAnchorPoint() {
    return this._g("emma:time-ref-anchor-point");
  }
  set timeReferenceAnchorPoint(v) {
    this._s("emma:time-ref-anchor-point", v);
  }
  /** offset-to-start. Serialized as `emma:offset-to-start` */
  get offsetToStart() {
    return this._g("emma:offset-to-start");
  }
  set offsetToStart(v) {
    this._s("emma:offset-to-start", v);
  }
  /** duration. Serialized as `emma:duration` */
  get duration() {
    return this._g("emma:duration");
  }
  set duration(v) {
    this._s("emma:duration", v);
  }
  /** medium. Serialized as `emma:medium` */
  get medium() {
    return this._g("emma:medium");
  }
  set medium(v) {
    this._s("emma:medium", v);
  }
  /** mode. Serialized as `emma:mode` */
  get mode() {
    return this._g("emma:mode");
  }
  set mode(v) {
    this._s("emma:mode", v);
  }
  /** function. Serialized as `emma:function` */
  get function() {
    return this._g("emma:function");
  }
  set function(v) {
    this._s("emma:function", v);
  }
  /** verbal. Serialized as `emma:verbal` */
  get verbal() {
    return this._g("emma:verbal");
  }
  set verbal(v) {
    this._s("emma:verbal", v);
  }
  /** cost. Serialized as `emma:cost` */
  get cost() {
    return this._g("emma:cost");
  }
  set cost(v) {
    this._s("emma:cost", v);
  }
  /** grammar-ref. Serialized as `emma:grammar-ref` */
  get grammarRef() {
    return this._g("emma:grammar-ref");
  }
  set grammarRef(v) {
    this._s("emma:grammar-ref", v);
  }
  /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
  get endpointInfoRef() {
    return this._g("emma:endpoint-info-ref");
  }
  set endpointInfoRef(v) {
    this._s("emma:endpoint-info-ref", v);
  }
  /** model-ref. Serialized as `emma:model-ref` */
  get modelRef() {
    return this._g("emma:model-ref");
  }
  set modelRef(v) {
    this._s("emma:model-ref", v);
  }
  /** dialog-turn. Serialized as `emma:dialog-turn` */
  get dialogTurn() {
    return this._g("emma:dialog-turn");
  }
  set dialogTurn(v) {
    this._s("emma:dialog-turn", v);
  }
}
class Group extends OxmlCompositeElement {
  static _Q = "emma:group";
  static _A = [":id", "emma:tokens", "emma:process", "emma:lang", "emma:signal", "emma:signal-size", "emma:media-type", "emma:confidence", "emma:source", "emma:start", "emma:end", "emma:time-ref-uri", "emma:time-ref-anchor-point", "emma:offset-to-start", "emma:duration", "emma:medium", "emma:mode", "emma:function", "emma:verbal", "emma:cost", "emma:grammar-ref", "emma:endpoint-info-ref", "emma:model-ref", "emma:dialog-turn"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** tokens. Serialized as `emma:tokens` */
  get tokens() {
    return this._g("emma:tokens");
  }
  set tokens(v) {
    this._s("emma:tokens", v);
  }
  /** process. Serialized as `emma:process` */
  get process() {
    return this._g("emma:process");
  }
  set process(v) {
    this._s("emma:process", v);
  }
  /** lang. Serialized as `emma:lang` */
  get language() {
    return this._g("emma:lang");
  }
  set language(v) {
    this._s("emma:lang", v);
  }
  /** signal. Serialized as `emma:signal` */
  get signal() {
    return this._g("emma:signal");
  }
  set signal(v) {
    this._s("emma:signal", v);
  }
  /** signal-size. Serialized as `emma:signal-size` */
  get signalSize() {
    return this._g("emma:signal-size");
  }
  set signalSize(v) {
    this._s("emma:signal-size", v);
  }
  /** media-type. Serialized as `emma:media-type` */
  get mediaType() {
    return this._g("emma:media-type");
  }
  set mediaType(v) {
    this._s("emma:media-type", v);
  }
  /** confidence. Serialized as `emma:confidence` */
  get confidence() {
    return this._g("emma:confidence");
  }
  set confidence(v) {
    this._s("emma:confidence", v);
  }
  /** source. Serialized as `emma:source` */
  get source() {
    return this._g("emma:source");
  }
  set source(v) {
    this._s("emma:source", v);
  }
  /** start. Serialized as `emma:start` */
  get start() {
    return this._g("emma:start");
  }
  set start(v) {
    this._s("emma:start", v);
  }
  /** end. Serialized as `emma:end` */
  get end() {
    return this._g("emma:end");
  }
  set end(v) {
    this._s("emma:end", v);
  }
  /** time-ref-uri. Serialized as `emma:time-ref-uri` */
  get timeReference() {
    return this._g("emma:time-ref-uri");
  }
  set timeReference(v) {
    this._s("emma:time-ref-uri", v);
  }
  /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
  get timeReferenceAnchorPoint() {
    return this._g("emma:time-ref-anchor-point");
  }
  set timeReferenceAnchorPoint(v) {
    this._s("emma:time-ref-anchor-point", v);
  }
  /** offset-to-start. Serialized as `emma:offset-to-start` */
  get offsetToStart() {
    return this._g("emma:offset-to-start");
  }
  set offsetToStart(v) {
    this._s("emma:offset-to-start", v);
  }
  /** duration. Serialized as `emma:duration` */
  get duration() {
    return this._g("emma:duration");
  }
  set duration(v) {
    this._s("emma:duration", v);
  }
  /** medium. Serialized as `emma:medium` */
  get medium() {
    return this._g("emma:medium");
  }
  set medium(v) {
    this._s("emma:medium", v);
  }
  /** mode. Serialized as `emma:mode` */
  get mode() {
    return this._g("emma:mode");
  }
  set mode(v) {
    this._s("emma:mode", v);
  }
  /** function. Serialized as `emma:function` */
  get function() {
    return this._g("emma:function");
  }
  set function(v) {
    this._s("emma:function", v);
  }
  /** verbal. Serialized as `emma:verbal` */
  get verbal() {
    return this._g("emma:verbal");
  }
  set verbal(v) {
    this._s("emma:verbal", v);
  }
  /** cost. Serialized as `emma:cost` */
  get cost() {
    return this._g("emma:cost");
  }
  set cost(v) {
    this._s("emma:cost", v);
  }
  /** grammar-ref. Serialized as `emma:grammar-ref` */
  get grammarRef() {
    return this._g("emma:grammar-ref");
  }
  set grammarRef(v) {
    this._s("emma:grammar-ref", v);
  }
  /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
  get endpointInfoRef() {
    return this._g("emma:endpoint-info-ref");
  }
  set endpointInfoRef(v) {
    this._s("emma:endpoint-info-ref", v);
  }
  /** model-ref. Serialized as `emma:model-ref` */
  get modelRef() {
    return this._g("emma:model-ref");
  }
  set modelRef(v) {
    this._s("emma:model-ref", v);
  }
  /** dialog-turn. Serialized as `emma:dialog-turn` */
  get dialogTurn() {
    return this._g("emma:dialog-turn");
  }
  set dialogTurn(v) {
    this._s("emma:dialog-turn", v);
  }
}
class OneOf extends OxmlCompositeElement {
  static _Q = "emma:one-of";
  static _A = [":disjunction-type", ":id", "emma:tokens", "emma:process", "emma:lang", "emma:signal", "emma:signal-size", "emma:media-type", "emma:confidence", "emma:source", "emma:start", "emma:end", "emma:time-ref-uri", "emma:time-ref-anchor-point", "emma:offset-to-start", "emma:duration", "emma:medium", "emma:mode", "emma:function", "emma:verbal", "emma:cost", "emma:grammar-ref", "emma:endpoint-info-ref", "emma:model-ref", "emma:dialog-turn"];
  /** disjunction-type. Serialized as `:disjunction-type` */
  get disjunctionType() {
    return this._g(":disjunction-type");
  }
  set disjunctionType(v) {
    this._s(":disjunction-type", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** tokens. Serialized as `emma:tokens` */
  get tokens() {
    return this._g("emma:tokens");
  }
  set tokens(v) {
    this._s("emma:tokens", v);
  }
  /** process. Serialized as `emma:process` */
  get process() {
    return this._g("emma:process");
  }
  set process(v) {
    this._s("emma:process", v);
  }
  /** lang. Serialized as `emma:lang` */
  get language() {
    return this._g("emma:lang");
  }
  set language(v) {
    this._s("emma:lang", v);
  }
  /** signal. Serialized as `emma:signal` */
  get signal() {
    return this._g("emma:signal");
  }
  set signal(v) {
    this._s("emma:signal", v);
  }
  /** signal-size. Serialized as `emma:signal-size` */
  get signalSize() {
    return this._g("emma:signal-size");
  }
  set signalSize(v) {
    this._s("emma:signal-size", v);
  }
  /** media-type. Serialized as `emma:media-type` */
  get mediaType() {
    return this._g("emma:media-type");
  }
  set mediaType(v) {
    this._s("emma:media-type", v);
  }
  /** confidence. Serialized as `emma:confidence` */
  get confidence() {
    return this._g("emma:confidence");
  }
  set confidence(v) {
    this._s("emma:confidence", v);
  }
  /** source. Serialized as `emma:source` */
  get source() {
    return this._g("emma:source");
  }
  set source(v) {
    this._s("emma:source", v);
  }
  /** start. Serialized as `emma:start` */
  get start() {
    return this._g("emma:start");
  }
  set start(v) {
    this._s("emma:start", v);
  }
  /** end. Serialized as `emma:end` */
  get end() {
    return this._g("emma:end");
  }
  set end(v) {
    this._s("emma:end", v);
  }
  /** time-ref-uri. Serialized as `emma:time-ref-uri` */
  get timeReference() {
    return this._g("emma:time-ref-uri");
  }
  set timeReference(v) {
    this._s("emma:time-ref-uri", v);
  }
  /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
  get timeReferenceAnchorPoint() {
    return this._g("emma:time-ref-anchor-point");
  }
  set timeReferenceAnchorPoint(v) {
    this._s("emma:time-ref-anchor-point", v);
  }
  /** offset-to-start. Serialized as `emma:offset-to-start` */
  get offsetToStart() {
    return this._g("emma:offset-to-start");
  }
  set offsetToStart(v) {
    this._s("emma:offset-to-start", v);
  }
  /** duration. Serialized as `emma:duration` */
  get duration() {
    return this._g("emma:duration");
  }
  set duration(v) {
    this._s("emma:duration", v);
  }
  /** medium. Serialized as `emma:medium` */
  get medium() {
    return this._g("emma:medium");
  }
  set medium(v) {
    this._s("emma:medium", v);
  }
  /** mode. Serialized as `emma:mode` */
  get mode() {
    return this._g("emma:mode");
  }
  set mode(v) {
    this._s("emma:mode", v);
  }
  /** function. Serialized as `emma:function` */
  get function() {
    return this._g("emma:function");
  }
  set function(v) {
    this._s("emma:function", v);
  }
  /** verbal. Serialized as `emma:verbal` */
  get verbal() {
    return this._g("emma:verbal");
  }
  set verbal(v) {
    this._s("emma:verbal", v);
  }
  /** cost. Serialized as `emma:cost` */
  get cost() {
    return this._g("emma:cost");
  }
  set cost(v) {
    this._s("emma:cost", v);
  }
  /** grammar-ref. Serialized as `emma:grammar-ref` */
  get grammarRef() {
    return this._g("emma:grammar-ref");
  }
  set grammarRef(v) {
    this._s("emma:grammar-ref", v);
  }
  /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
  get endpointInfoRef() {
    return this._g("emma:endpoint-info-ref");
  }
  set endpointInfoRef(v) {
    this._s("emma:endpoint-info-ref", v);
  }
  /** model-ref. Serialized as `emma:model-ref` */
  get modelRef() {
    return this._g("emma:model-ref");
  }
  set modelRef(v) {
    this._s("emma:model-ref", v);
  }
  /** dialog-turn. Serialized as `emma:dialog-turn` */
  get dialogTurn() {
    return this._g("emma:dialog-turn");
  }
  set dialogTurn(v) {
    this._s("emma:dialog-turn", v);
  }
}
class Interpretation extends OxmlCompositeElement {
  static _Q = "emma:interpretation";
  static _A = [":id", "emma:tokens", "emma:process", "emma:lang", "emma:signal", "emma:signal-size", "emma:media-type", "emma:confidence", "emma:source", "emma:start", "emma:end", "emma:time-ref-uri", "emma:time-ref-anchor-point", "emma:offset-to-start", "emma:duration", "emma:medium", "emma:mode", "emma:function", "emma:verbal", "emma:cost", "emma:grammar-ref", "emma:endpoint-info-ref", "emma:model-ref", "emma:dialog-turn", "emma:no-input", "emma:uninterpreted"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** tokens. Serialized as `emma:tokens` */
  get tokens() {
    return this._g("emma:tokens");
  }
  set tokens(v) {
    this._s("emma:tokens", v);
  }
  /** process. Serialized as `emma:process` */
  get process() {
    return this._g("emma:process");
  }
  set process(v) {
    this._s("emma:process", v);
  }
  /** lang. Serialized as `emma:lang` */
  get language() {
    return this._g("emma:lang");
  }
  set language(v) {
    this._s("emma:lang", v);
  }
  /** signal. Serialized as `emma:signal` */
  get signal() {
    return this._g("emma:signal");
  }
  set signal(v) {
    this._s("emma:signal", v);
  }
  /** signal-size. Serialized as `emma:signal-size` */
  get signalSize() {
    return this._g("emma:signal-size");
  }
  set signalSize(v) {
    this._s("emma:signal-size", v);
  }
  /** media-type. Serialized as `emma:media-type` */
  get mediaType() {
    return this._g("emma:media-type");
  }
  set mediaType(v) {
    this._s("emma:media-type", v);
  }
  /** confidence. Serialized as `emma:confidence` */
  get confidence() {
    return this._g("emma:confidence");
  }
  set confidence(v) {
    this._s("emma:confidence", v);
  }
  /** source. Serialized as `emma:source` */
  get source() {
    return this._g("emma:source");
  }
  set source(v) {
    this._s("emma:source", v);
  }
  /** start. Serialized as `emma:start` */
  get start() {
    return this._g("emma:start");
  }
  set start(v) {
    this._s("emma:start", v);
  }
  /** end. Serialized as `emma:end` */
  get end() {
    return this._g("emma:end");
  }
  set end(v) {
    this._s("emma:end", v);
  }
  /** time-ref-uri. Serialized as `emma:time-ref-uri` */
  get timeReference() {
    return this._g("emma:time-ref-uri");
  }
  set timeReference(v) {
    this._s("emma:time-ref-uri", v);
  }
  /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
  get timeReferenceAnchorPoint() {
    return this._g("emma:time-ref-anchor-point");
  }
  set timeReferenceAnchorPoint(v) {
    this._s("emma:time-ref-anchor-point", v);
  }
  /** offset-to-start. Serialized as `emma:offset-to-start` */
  get offsetToStart() {
    return this._g("emma:offset-to-start");
  }
  set offsetToStart(v) {
    this._s("emma:offset-to-start", v);
  }
  /** duration. Serialized as `emma:duration` */
  get duration() {
    return this._g("emma:duration");
  }
  set duration(v) {
    this._s("emma:duration", v);
  }
  /** medium. Serialized as `emma:medium` */
  get medium() {
    return this._g("emma:medium");
  }
  set medium(v) {
    this._s("emma:medium", v);
  }
  /** mode. Serialized as `emma:mode` */
  get mode() {
    return this._g("emma:mode");
  }
  set mode(v) {
    this._s("emma:mode", v);
  }
  /** function. Serialized as `emma:function` */
  get function() {
    return this._g("emma:function");
  }
  set function(v) {
    this._s("emma:function", v);
  }
  /** verbal. Serialized as `emma:verbal` */
  get verbal() {
    return this._g("emma:verbal");
  }
  set verbal(v) {
    this._s("emma:verbal", v);
  }
  /** cost. Serialized as `emma:cost` */
  get cost() {
    return this._g("emma:cost");
  }
  set cost(v) {
    this._s("emma:cost", v);
  }
  /** grammar-ref. Serialized as `emma:grammar-ref` */
  get grammarRef() {
    return this._g("emma:grammar-ref");
  }
  set grammarRef(v) {
    this._s("emma:grammar-ref", v);
  }
  /** endpoint-info-ref. Serialized as `emma:endpoint-info-ref` */
  get endpointInfoRef() {
    return this._g("emma:endpoint-info-ref");
  }
  set endpointInfoRef(v) {
    this._s("emma:endpoint-info-ref", v);
  }
  /** model-ref. Serialized as `emma:model-ref` */
  get modelRef() {
    return this._g("emma:model-ref");
  }
  set modelRef(v) {
    this._s("emma:model-ref", v);
  }
  /** dialog-turn. Serialized as `emma:dialog-turn` */
  get dialogTurn() {
    return this._g("emma:dialog-turn");
  }
  set dialogTurn(v) {
    this._s("emma:dialog-turn", v);
  }
  /** no-input. Serialized as `emma:no-input` */
  get noInput() {
    return this._g("emma:no-input");
  }
  set noInput(v) {
    this._s("emma:no-input", v);
  }
  /** uninterpreted. Serialized as `emma:uninterpreted` */
  get uninterpreted() {
    return this._g("emma:uninterpreted");
  }
  set uninterpreted(v) {
    this._s("emma:uninterpreted", v);
  }
}
class Literal extends OxmlLeafTextElement {
  static _Q = "emma:literal";
}
class Lattice extends OxmlCompositeElement {
  static _Q = "emma:lattice";
  static _A = [":initial", ":final", "emma:time-ref-uri", "emma:time-ref-anchor-point"];
  /** initial. Serialized as `:initial` */
  get initial() {
    return this._g(":initial");
  }
  set initial(v) {
    this._s(":initial", v);
  }
  /** final. Serialized as `:final` */
  get final() {
    return this._g(":final");
  }
  set final(v) {
    this._s(":final", v);
  }
  /** time-ref-uri. Serialized as `emma:time-ref-uri` */
  get timeReference() {
    return this._g("emma:time-ref-uri");
  }
  set timeReference(v) {
    this._s("emma:time-ref-uri", v);
  }
  /** time-ref-anchor-point. Serialized as `emma:time-ref-anchor-point` */
  get timeReferenceAnchorPoint() {
    return this._g("emma:time-ref-anchor-point");
  }
  set timeReferenceAnchorPoint(v) {
    this._s("emma:time-ref-anchor-point", v);
  }
}
class Info extends OxmlCompositeElement {
  static _Q = "emma:info";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class DerivedFrom extends OxmlLeafElement {
  static _Q = "emma:derived-from";
  static _A = [":resource", ":composite"];
  /** resource. Serialized as `:resource` */
  get resource() {
    return this._g(":resource");
  }
  set resource(v) {
    this._s(":resource", v);
  }
  /** composite. Serialized as `:composite` */
  get composite() {
    return this._g(":composite");
  }
  set composite(v) {
    this._s(":composite", v);
  }
}
function initEMMANamespace() {
  Emma._C = {
    "emma:derivation": Derivation,
    "emma:grammar": Grammar,
    "emma:model": Model,
    "emma:endpoint-info": EndPointInfo,
    "emma:info": Info,
    "emma:interpretation": Interpretation,
    "emma:one-of": OneOf,
    "emma:group": Group,
    "emma:sequence": Sequence
  };
  Emma._D = {
    ":version": new OxmlAttr(":version", OxmlType.StringValue)
  };
  Arc._C = {
    "emma:info": Info
  };
  Arc._D = {
    ":from": new OxmlAttr(":from", OxmlType.IntegerValue),
    ":to": new OxmlAttr(":to", OxmlType.IntegerValue),
    "emma:start": new OxmlAttr("emma:start", OxmlType.UInt64Value),
    "emma:end": new OxmlAttr("emma:end", OxmlType.UInt64Value),
    "emma:offset-to-start": new OxmlAttr("emma:offset-to-start", OxmlType.IntegerValue),
    "emma:duration": new OxmlAttr("emma:duration", OxmlType.IntegerValue),
    "emma:confidence": new OxmlAttr("emma:confidence", OxmlType.DecimalValue),
    "emma:cost": new OxmlAttr("emma:cost", OxmlType.DecimalValue),
    "emma:lang": new OxmlAttr("emma:lang", OxmlType.StringValue),
    "emma:medium": new OxmlAttr("emma:medium", OxmlType.EnumValue, MediumValuesArray),
    "emma:mode": new OxmlAttr("emma:mode", OxmlType.ListValue),
    "emma:source": new OxmlAttr("emma:source", OxmlType.StringValue)
  };
  Node._C = {
    "emma:info": Info
  };
  Node._D = {
    ":node-number": new OxmlAttr(":node-number", OxmlType.IntegerValue),
    "emma:confidence": new OxmlAttr("emma:confidence", OxmlType.DecimalValue),
    "emma:cost": new OxmlAttr("emma:cost", OxmlType.DecimalValue)
  };
  EndPoint._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    "emma:endpoint-role": new OxmlAttr("emma:endpoint-role", OxmlType.EnumValue, EndPointRoleValuesArray),
    "emma:endpoint-address": new OxmlAttr("emma:endpoint-address", OxmlType.StringValue),
    "emma:message-id": new OxmlAttr("emma:message-id", OxmlType.StringValue),
    "emma:port-num": new OxmlAttr("emma:port-num", OxmlType.IntegerValue),
    "emma:port-type": new OxmlAttr("emma:port-type", OxmlType.StringValue),
    "emma:endpoint-pair-ref": new OxmlAttr("emma:endpoint-pair-ref", OxmlType.StringValue),
    "emma:service-name": new OxmlAttr("emma:service-name", OxmlType.StringValue),
    "emma:media-type": new OxmlAttr("emma:media-type", OxmlType.StringValue),
    "emma:medium": new OxmlAttr("emma:medium", OxmlType.EnumValue, MediumValuesArray),
    "emma:mode": new OxmlAttr("emma:mode", OxmlType.ListValue)
  };
  EndPointInfo._C = {
    "emma:endpoint": EndPoint
  };
  EndPointInfo._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  Model._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  Grammar._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  Derivation._C = {
    "emma:interpretation": Interpretation,
    "emma:one-of": OneOf,
    "emma:sequence": Sequence,
    "emma:group": Group
  };
  GroupInfo._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  Sequence._C = {
    "emma:derived-from": DerivedFrom,
    "emma:info": Info,
    "emma:interpretation": Interpretation,
    "emma:one-of": OneOf,
    "emma:group": Group,
    "emma:sequence": Sequence
  };
  Sequence._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    "emma:tokens": new OxmlAttr("emma:tokens", OxmlType.StringValue),
    "emma:process": new OxmlAttr("emma:process", OxmlType.StringValue),
    "emma:lang": new OxmlAttr("emma:lang", OxmlType.StringValue),
    "emma:signal": new OxmlAttr("emma:signal", OxmlType.StringValue),
    "emma:signal-size": new OxmlAttr("emma:signal-size", OxmlType.IntegerValue),
    "emma:media-type": new OxmlAttr("emma:media-type", OxmlType.StringValue),
    "emma:confidence": new OxmlAttr("emma:confidence", OxmlType.DecimalValue),
    "emma:source": new OxmlAttr("emma:source", OxmlType.StringValue),
    "emma:start": new OxmlAttr("emma:start", OxmlType.UInt64Value),
    "emma:end": new OxmlAttr("emma:end", OxmlType.UInt64Value),
    "emma:time-ref-uri": new OxmlAttr("emma:time-ref-uri", OxmlType.StringValue),
    "emma:time-ref-anchor-point": new OxmlAttr("emma:time-ref-anchor-point", OxmlType.EnumValue, AnchorPointValuesArray),
    "emma:offset-to-start": new OxmlAttr("emma:offset-to-start", OxmlType.IntegerValue),
    "emma:duration": new OxmlAttr("emma:duration", OxmlType.IntegerValue),
    "emma:medium": new OxmlAttr("emma:medium", OxmlType.EnumValue, MediumValuesArray),
    "emma:mode": new OxmlAttr("emma:mode", OxmlType.ListValue),
    "emma:function": new OxmlAttr("emma:function", OxmlType.StringValue),
    "emma:verbal": new OxmlAttr("emma:verbal", OxmlType.BooleanValue),
    "emma:cost": new OxmlAttr("emma:cost", OxmlType.DecimalValue),
    "emma:grammar-ref": new OxmlAttr("emma:grammar-ref", OxmlType.StringValue),
    "emma:endpoint-info-ref": new OxmlAttr("emma:endpoint-info-ref", OxmlType.StringValue),
    "emma:model-ref": new OxmlAttr("emma:model-ref", OxmlType.StringValue),
    "emma:dialog-turn": new OxmlAttr("emma:dialog-turn", OxmlType.StringValue)
  };
  Group._C = {
    "emma:derived-from": DerivedFrom,
    "emma:group-info": GroupInfo,
    "emma:info": Info,
    "emma:interpretation": Interpretation,
    "emma:one-of": OneOf,
    "emma:group": Group,
    "emma:sequence": Sequence
  };
  Group._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    "emma:tokens": new OxmlAttr("emma:tokens", OxmlType.StringValue),
    "emma:process": new OxmlAttr("emma:process", OxmlType.StringValue),
    "emma:lang": new OxmlAttr("emma:lang", OxmlType.StringValue),
    "emma:signal": new OxmlAttr("emma:signal", OxmlType.StringValue),
    "emma:signal-size": new OxmlAttr("emma:signal-size", OxmlType.IntegerValue),
    "emma:media-type": new OxmlAttr("emma:media-type", OxmlType.StringValue),
    "emma:confidence": new OxmlAttr("emma:confidence", OxmlType.DecimalValue),
    "emma:source": new OxmlAttr("emma:source", OxmlType.StringValue),
    "emma:start": new OxmlAttr("emma:start", OxmlType.UInt64Value),
    "emma:end": new OxmlAttr("emma:end", OxmlType.UInt64Value),
    "emma:time-ref-uri": new OxmlAttr("emma:time-ref-uri", OxmlType.StringValue),
    "emma:time-ref-anchor-point": new OxmlAttr("emma:time-ref-anchor-point", OxmlType.EnumValue, AnchorPointValuesArray),
    "emma:offset-to-start": new OxmlAttr("emma:offset-to-start", OxmlType.IntegerValue),
    "emma:duration": new OxmlAttr("emma:duration", OxmlType.IntegerValue),
    "emma:medium": new OxmlAttr("emma:medium", OxmlType.EnumValue, MediumValuesArray),
    "emma:mode": new OxmlAttr("emma:mode", OxmlType.ListValue),
    "emma:function": new OxmlAttr("emma:function", OxmlType.StringValue),
    "emma:verbal": new OxmlAttr("emma:verbal", OxmlType.BooleanValue),
    "emma:cost": new OxmlAttr("emma:cost", OxmlType.DecimalValue),
    "emma:grammar-ref": new OxmlAttr("emma:grammar-ref", OxmlType.StringValue),
    "emma:endpoint-info-ref": new OxmlAttr("emma:endpoint-info-ref", OxmlType.StringValue),
    "emma:model-ref": new OxmlAttr("emma:model-ref", OxmlType.StringValue),
    "emma:dialog-turn": new OxmlAttr("emma:dialog-turn", OxmlType.StringValue)
  };
  OneOf._C = {
    "emma:derived-from": DerivedFrom,
    "emma:info": Info,
    "emma:interpretation": Interpretation,
    "emma:one-of": OneOf,
    "emma:group": Group,
    "emma:sequence": Sequence
  };
  OneOf._D = {
    ":disjunction-type": new OxmlAttr(":disjunction-type", OxmlType.EnumValue, DisjunctionTypeValuesArray),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    "emma:tokens": new OxmlAttr("emma:tokens", OxmlType.StringValue),
    "emma:process": new OxmlAttr("emma:process", OxmlType.StringValue),
    "emma:lang": new OxmlAttr("emma:lang", OxmlType.StringValue),
    "emma:signal": new OxmlAttr("emma:signal", OxmlType.StringValue),
    "emma:signal-size": new OxmlAttr("emma:signal-size", OxmlType.IntegerValue),
    "emma:media-type": new OxmlAttr("emma:media-type", OxmlType.StringValue),
    "emma:confidence": new OxmlAttr("emma:confidence", OxmlType.DecimalValue),
    "emma:source": new OxmlAttr("emma:source", OxmlType.StringValue),
    "emma:start": new OxmlAttr("emma:start", OxmlType.UInt64Value),
    "emma:end": new OxmlAttr("emma:end", OxmlType.UInt64Value),
    "emma:time-ref-uri": new OxmlAttr("emma:time-ref-uri", OxmlType.StringValue),
    "emma:time-ref-anchor-point": new OxmlAttr("emma:time-ref-anchor-point", OxmlType.EnumValue, AnchorPointValuesArray),
    "emma:offset-to-start": new OxmlAttr("emma:offset-to-start", OxmlType.IntegerValue),
    "emma:duration": new OxmlAttr("emma:duration", OxmlType.IntegerValue),
    "emma:medium": new OxmlAttr("emma:medium", OxmlType.EnumValue, MediumValuesArray),
    "emma:mode": new OxmlAttr("emma:mode", OxmlType.ListValue),
    "emma:function": new OxmlAttr("emma:function", OxmlType.StringValue),
    "emma:verbal": new OxmlAttr("emma:verbal", OxmlType.BooleanValue),
    "emma:cost": new OxmlAttr("emma:cost", OxmlType.DecimalValue),
    "emma:grammar-ref": new OxmlAttr("emma:grammar-ref", OxmlType.StringValue),
    "emma:endpoint-info-ref": new OxmlAttr("emma:endpoint-info-ref", OxmlType.StringValue),
    "emma:model-ref": new OxmlAttr("emma:model-ref", OxmlType.StringValue),
    "emma:dialog-turn": new OxmlAttr("emma:dialog-turn", OxmlType.StringValue)
  };
  Interpretation._C = {
    "emma:derived-from": DerivedFrom,
    "emma:info": Info,
    "emma:lattice": Lattice,
    "emma:literal": Literal,
    "msink:context": MsinkContextNode
  };
  Interpretation._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    "emma:tokens": new OxmlAttr("emma:tokens", OxmlType.StringValue),
    "emma:process": new OxmlAttr("emma:process", OxmlType.StringValue),
    "emma:lang": new OxmlAttr("emma:lang", OxmlType.StringValue),
    "emma:signal": new OxmlAttr("emma:signal", OxmlType.StringValue),
    "emma:signal-size": new OxmlAttr("emma:signal-size", OxmlType.IntegerValue),
    "emma:media-type": new OxmlAttr("emma:media-type", OxmlType.StringValue),
    "emma:confidence": new OxmlAttr("emma:confidence", OxmlType.DecimalValue),
    "emma:source": new OxmlAttr("emma:source", OxmlType.StringValue),
    "emma:start": new OxmlAttr("emma:start", OxmlType.UInt64Value),
    "emma:end": new OxmlAttr("emma:end", OxmlType.UInt64Value),
    "emma:time-ref-uri": new OxmlAttr("emma:time-ref-uri", OxmlType.StringValue),
    "emma:time-ref-anchor-point": new OxmlAttr("emma:time-ref-anchor-point", OxmlType.EnumValue, AnchorPointValuesArray),
    "emma:offset-to-start": new OxmlAttr("emma:offset-to-start", OxmlType.IntegerValue),
    "emma:duration": new OxmlAttr("emma:duration", OxmlType.IntegerValue),
    "emma:medium": new OxmlAttr("emma:medium", OxmlType.EnumValue, MediumValuesArray),
    "emma:mode": new OxmlAttr("emma:mode", OxmlType.ListValue),
    "emma:function": new OxmlAttr("emma:function", OxmlType.StringValue),
    "emma:verbal": new OxmlAttr("emma:verbal", OxmlType.BooleanValue),
    "emma:cost": new OxmlAttr("emma:cost", OxmlType.DecimalValue),
    "emma:grammar-ref": new OxmlAttr("emma:grammar-ref", OxmlType.StringValue),
    "emma:endpoint-info-ref": new OxmlAttr("emma:endpoint-info-ref", OxmlType.StringValue),
    "emma:model-ref": new OxmlAttr("emma:model-ref", OxmlType.StringValue),
    "emma:dialog-turn": new OxmlAttr("emma:dialog-turn", OxmlType.StringValue),
    "emma:no-input": new OxmlAttr("emma:no-input", OxmlType.BooleanValue),
    "emma:uninterpreted": new OxmlAttr("emma:uninterpreted", OxmlType.BooleanValue)
  };
  Lattice._C = {
    "emma:arc": Arc,
    "emma:node": Node
  };
  Lattice._D = {
    ":initial": new OxmlAttr(":initial", OxmlType.IntegerValue),
    ":final": new OxmlAttr(":final", OxmlType.ListValue),
    "emma:time-ref-uri": new OxmlAttr("emma:time-ref-uri", OxmlType.StringValue),
    "emma:time-ref-anchor-point": new OxmlAttr("emma:time-ref-anchor-point", OxmlType.EnumValue, AnchorPointValuesArray)
  };
  Info._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  DerivedFrom._D = {
    ":resource": new OxmlAttr(":resource", OxmlType.StringValue),
    ":composite": new OxmlAttr(":composite", OxmlType.BooleanValue)
  };
  return {
    prefix: "emma",
    xmlns: "http://www.w3.org/2003/04/emma"
  };
}
export {
  AnchorPointValues,
  AnchorPointValuesArray,
  Arc,
  Derivation,
  DerivedFrom,
  DisjunctionTypeValues,
  DisjunctionTypeValuesArray,
  Emma,
  EndPoint,
  EndPointInfo,
  EndPointRoleValues,
  EndPointRoleValuesArray,
  Grammar,
  Group,
  GroupInfo,
  Info,
  Interpretation,
  Lattice,
  Literal,
  MediumValues,
  MediumValuesArray,
  Model,
  Node,
  OneOf,
  Sequence,
  initEMMANamespace
};
