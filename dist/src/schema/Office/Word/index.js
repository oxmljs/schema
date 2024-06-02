import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class SingleDataSourceRecord extends OxmlCompositeElement {
  static _Q = "wne:recipientData";
  /** Returns RecordIncluded. */
  get recordIncluded() {
    return this._f(RecordIncluded);
  }
  /** Returns RecordHashCode. */
  get recordHashCode() {
    return this._f(RecordHashCode);
  }
}
class RecordHashCode extends OxmlLeafElement {
  static _Q = "wne:hash";
  static _A = ["wne:val"];
  /** val. Serialized as `wne:val` */
  get val() {
    return this._g("wne:val");
  }
  set val(v) {
    this._s("wne:val", v);
  }
}
class RecordIncluded extends OxmlLeafElement {
  static _Q = "wne:active";
  static _A = ["wne:val"];
  /** val. Serialized as `wne:val` */
  get val() {
    return this._g("wne:val");
  }
  set val(v) {
    this._s("wne:val", v);
  }
}
class AllocatedCommands extends OxmlCompositeElement {
  static _Q = "wne:acds";
}
class Toolbars extends OxmlCompositeElement {
  static _Q = "wne:toolbars";
}
class KeymapsType extends OxmlCompositeElement {
}
class MismatchedKeyMapCustomization extends KeymapsType {
  static _Q = "wne:keymapsBad";
}
class KeyMapCustomizations extends KeymapsType {
  static _Q = "wne:keymaps";
}
class ToolbarData extends OxmlLeafElement {
  static _Q = "wne:toolbarData";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class AllocatedCommandManifest extends OxmlCompositeElement {
  static _Q = "wne:acdManifest";
}
class DocEvents extends OxmlCompositeElement {
  static _Q = "wne:docEvents";
  /** Returns EventDocNewXsdString. */
  get eventDocNewXsdString() {
    return this._f(EventDocNewXsdString);
  }
  /** Returns EventDocOpenXsdString. */
  get eventDocOpenXsdString() {
    return this._f(EventDocOpenXsdString);
  }
  /** Returns EventDocCloseXsdString. */
  get eventDocCloseXsdString() {
    return this._f(EventDocCloseXsdString);
  }
  /** Returns EventDocSyncXsdString. */
  get eventDocSyncXsdString() {
    return this._f(EventDocSyncXsdString);
  }
  /** Returns EventDocXmlAfterInsertXsdString. */
  get eventDocXmlAfterInsertXsdString() {
    return this._f(EventDocXmlAfterInsertXsdString);
  }
  /** Returns EventDocXmlBeforeDeleteXsdString. */
  get eventDocXmlBeforeDeleteXsdString() {
    return this._f(EventDocXmlBeforeDeleteXsdString);
  }
  /** Returns EventDocContentControlAfterInsertXsdString. */
  get eventDocContentControlAfterInsertXsdString() {
    return this._f(EventDocContentControlAfterInsertXsdString);
  }
  /** Returns EventDocContentControlBeforeDeleteXsdString. */
  get eventDocContentControlBeforeDeleteXsdString() {
    return this._f(EventDocContentControlBeforeDeleteXsdString);
  }
  /** Returns EventDocContentControlOnExistXsdString. */
  get eventDocContentControlOnExistXsdString() {
    return this._f(EventDocContentControlOnExistXsdString);
  }
  /** Returns EventDocContentControlOnEnterXsdString. */
  get eventDocContentControlOnEnterXsdString() {
    return this._f(EventDocContentControlOnEnterXsdString);
  }
  /** Returns EventDocStoreUpdateXsdString. */
  get eventDocStoreUpdateXsdString() {
    return this._f(EventDocStoreUpdateXsdString);
  }
  /** Returns EventDocContentControlUpdateXsdString. */
  get eventDocContentControlUpdateXsdString() {
    return this._f(EventDocContentControlUpdateXsdString);
  }
  /** Returns EventDocBuildingBlockAfterInsertXsdString. */
  get eventDocBuildingBlockAfterInsertXsdString() {
    return this._f(EventDocBuildingBlockAfterInsertXsdString);
  }
}
class EventDocBuildingBlockAfterInsertXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocBuildingBlockAfterInsert";
}
class EventDocContentControlUpdateXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocContentControlContentUpdate";
}
class EventDocStoreUpdateXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocStoreUpdate";
}
class EventDocContentControlOnEnterXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocContentControlOnEnter";
}
class EventDocContentControlOnExistXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocContentControlOnExit";
}
class EventDocContentControlBeforeDeleteXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocContentControlBeforeDelete";
}
class EventDocContentControlAfterInsertXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocContentControlAfterInsert";
}
class EventDocXmlBeforeDeleteXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocXmlBeforeDelete";
}
class EventDocXmlAfterInsertXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocXmlAfterInsert";
}
class EventDocSyncXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocSync";
}
class EventDocCloseXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocClose";
}
class EventDocOpenXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocOpen";
}
class EventDocNewXsdString extends OxmlLeafTextElement {
  static _Q = "wne:eventDocNew";
}
class Mcd extends OxmlLeafElement {
  static _Q = "wne:mcd";
  static _A = ["wne:macroName", "wne:name", "wne:menuHelp", "wne:bEncrypt", "wne:cmg"];
  /** macroName. Serialized as `wne:macroName` */
  get macroName() {
    return this._g("wne:macroName");
  }
  set macroName(v) {
    this._s("wne:macroName", v);
  }
  /** name. Serialized as `wne:name` */
  get name() {
    return this._g("wne:name");
  }
  set name(v) {
    this._s("wne:name", v);
  }
  /** menuHelp. Serialized as `wne:menuHelp` */
  get menuHelp() {
    return this._g("wne:menuHelp");
  }
  set menuHelp(v) {
    this._s("wne:menuHelp", v);
  }
  /** bEncrypt. Serialized as `wne:bEncrypt` */
  get bEncrypt() {
    return this._g("wne:bEncrypt");
  }
  set bEncrypt(v) {
    this._s("wne:bEncrypt", v);
  }
  /** cmg. Serialized as `wne:cmg` */
  get cmg() {
    return this._g("wne:cmg");
  }
  set cmg(v) {
    this._s("wne:cmg", v);
  }
}
class AllocatedCommand extends OxmlLeafElement {
  static _Q = "wne:acd";
  static _A = ["wne:argValue", "wne:fciBasedOn", "wne:fciIndexBasedOn", "wne:acdName"];
  /** argValue. Serialized as `wne:argValue` */
  get argumentValue() {
    return this._g("wne:argValue");
  }
  set argumentValue(v) {
    this._s("wne:argValue", v);
  }
  /** fciBasedOn. Serialized as `wne:fciBasedOn` */
  get commandBasedOn() {
    return this._g("wne:fciBasedOn");
  }
  set commandBasedOn(v) {
    this._s("wne:fciBasedOn", v);
  }
  /** fciIndexBasedOn. Serialized as `wne:fciIndexBasedOn` */
  get commandIndexBasedOn() {
    return this._g("wne:fciIndexBasedOn");
  }
  set commandIndexBasedOn(v) {
    this._s("wne:fciIndexBasedOn", v);
  }
  /** acdName. Serialized as `wne:acdName` */
  get acceleratorName() {
    return this._g("wne:acdName");
  }
  set acceleratorName(v) {
    this._s("wne:acdName", v);
  }
}
class KeyMapEntry extends OxmlCompositeElement {
  static _Q = "wne:keymap";
  static _A = ["wne:chmPrimary", "wne:chmSecondary", "wne:kcmPrimary", "wne:kcmSecondary", "wne:mask"];
  /** chmPrimary. Serialized as `wne:chmPrimary` */
  get characterMapPrimary() {
    return this._g("wne:chmPrimary");
  }
  set characterMapPrimary(v) {
    this._s("wne:chmPrimary", v);
  }
  /** chmSecondary. Serialized as `wne:chmSecondary` */
  get characterMapSecondary() {
    return this._g("wne:chmSecondary");
  }
  set characterMapSecondary(v) {
    this._s("wne:chmSecondary", v);
  }
  /** kcmPrimary. Serialized as `wne:kcmPrimary` */
  get keyCodePrimary() {
    return this._g("wne:kcmPrimary");
  }
  set keyCodePrimary(v) {
    this._s("wne:kcmPrimary", v);
  }
  /** kcmSecondary. Serialized as `wne:kcmSecondary` */
  get keyCodeSecondary() {
    return this._g("wne:kcmSecondary");
  }
  set keyCodeSecondary(v) {
    this._s("wne:kcmSecondary", v);
  }
  /** mask. Serialized as `wne:mask` */
  get mask() {
    return this._g("wne:mask");
  }
  set mask(v) {
    this._s("wne:mask", v);
  }
  /** Returns FixedCommandKeyboardCustomization. */
  get fixedCommandKeyboardCustomization() {
    return this._f(FixedCommandKeyboardCustomization);
  }
  /** Returns MacroKeyboardCustomization. */
  get macroKeyboardCustomization() {
    return this._f(MacroKeyboardCustomization);
  }
  /** Returns AllocatedCommandKeyboardCustomization. */
  get allocatedCommandKeyboardCustomization() {
    return this._f(AllocatedCommandKeyboardCustomization);
  }
  /** Returns WllMacroKeyboardCustomization. */
  get wllMacroKeyboardCustomization() {
    return this._f(WllMacroKeyboardCustomization);
  }
  /** Returns CharacterInsertion. */
  get characterInsertion() {
    return this._f(CharacterInsertion);
  }
}
class CharacterInsertion extends OxmlLeafElement {
  static _Q = "wne:wch";
  static _A = ["wne:val"];
  /** val. Serialized as `wne:val` */
  get val() {
    return this._g("wne:val");
  }
  set val(v) {
    this._s("wne:val", v);
  }
}
class AcceleratorKeymapType extends OxmlLeafElement {
  static _A = ["wne:acdName"];
  /** acdName. Serialized as `wne:acdName` */
  get acceleratorName() {
    return this._g("wne:acdName");
  }
  set acceleratorName(v) {
    this._s("wne:acdName", v);
  }
}
class AllocatedCommandManifestEntry extends AcceleratorKeymapType {
  static _Q = "wne:acdEntry";
}
class AllocatedCommandKeyboardCustomization extends AcceleratorKeymapType {
  static _Q = "wne:acd";
}
class MacroWllType extends OxmlLeafElement {
  static _A = ["wne:macroName"];
  /** macroName. Serialized as `wne:macroName` */
  get macroName() {
    return this._g("wne:macroName");
  }
  set macroName(v) {
    this._s("wne:macroName", v);
  }
}
class WllMacroKeyboardCustomization extends MacroWllType {
  static _Q = "wne:wll";
}
class MacroKeyboardCustomization extends MacroWllType {
  static _Q = "wne:macro";
}
class FixedCommandKeyboardCustomization extends OxmlLeafElement {
  static _Q = "wne:fci";
  static _A = ["wne:fciName", "wne:fciIndex", "wne:swArg"];
  /** fciName. Serialized as `wne:fciName` */
  get commandName() {
    return this._g("wne:fciName");
  }
  set commandName(v) {
    this._s("wne:fciName", v);
  }
  /** fciIndex. Serialized as `wne:fciIndex` */
  get commandIndex() {
    return this._g("wne:fciIndex");
  }
  set commandIndex(v) {
    this._s("wne:fciIndex", v);
  }
  /** swArg. Serialized as `wne:swArg` */
  get argument() {
    return this._g("wne:swArg");
  }
  set argument(v) {
    this._s("wne:swArg", v);
  }
}
class MailMergeRecipients extends OxmlPartRootElement {
  static _Q = "wne:recipients";
}
class VbaSuppData extends OxmlPartRootElement {
  static _Q = "wne:vbaSuppData";
  /** Returns DocEvents. */
  get docEvents() {
    return this._f(DocEvents);
  }
  /** Returns Mcds. */
  get mcds() {
    return this._f(Mcds);
  }
}
class Mcds extends OxmlCompositeElement {
  static _Q = "wne:mcds";
}
class TemplateCommandGroup extends OxmlPartRootElement {
  static _Q = "wne:tcg";
}
function initOfficeWordNamespace() {
  SingleDataSourceRecord._C = {
    "wne:active": RecordIncluded,
    "wne:hash": RecordHashCode
  };
  RecordHashCode._D = {
    "wne:val": new OxmlAttr("wne:val", OxmlType.IntegerValue)
  };
  RecordIncluded._D = {
    "wne:val": new OxmlAttr("wne:val", OxmlType.OnOffValue)
  };
  AllocatedCommands._C = {
    "wne:acd": AllocatedCommand
  };
  Toolbars._C = {
    "wne:acdManifest": AllocatedCommandManifest,
    "wne:toolbarData": ToolbarData
  };
  KeymapsType._C = {
    "wne:keymap": KeyMapEntry
  };
  MismatchedKeyMapCustomization._C = {
    "wne:keymap": KeyMapEntry
  };
  KeyMapCustomizations._C = {
    "wne:keymap": KeyMapEntry
  };
  ToolbarData._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  AllocatedCommandManifest._C = {
    "wne:acdEntry": AllocatedCommandManifestEntry
  };
  DocEvents._C = {
    "wne:eventDocNew": EventDocNewXsdString,
    "wne:eventDocOpen": EventDocOpenXsdString,
    "wne:eventDocClose": EventDocCloseXsdString,
    "wne:eventDocSync": EventDocSyncXsdString,
    "wne:eventDocXmlAfterInsert": EventDocXmlAfterInsertXsdString,
    "wne:eventDocXmlBeforeDelete": EventDocXmlBeforeDeleteXsdString,
    "wne:eventDocContentControlAfterInsert": EventDocContentControlAfterInsertXsdString,
    "wne:eventDocContentControlBeforeDelete": EventDocContentControlBeforeDeleteXsdString,
    "wne:eventDocContentControlOnExit": EventDocContentControlOnExistXsdString,
    "wne:eventDocContentControlOnEnter": EventDocContentControlOnEnterXsdString,
    "wne:eventDocStoreUpdate": EventDocStoreUpdateXsdString,
    "wne:eventDocContentControlContentUpdate": EventDocContentControlUpdateXsdString,
    "wne:eventDocBuildingBlockAfterInsert": EventDocBuildingBlockAfterInsertXsdString
  };
  Mcd._D = {
    "wne:macroName": new OxmlAttr("wne:macroName", OxmlType.StringValue),
    "wne:name": new OxmlAttr("wne:name", OxmlType.StringValue),
    "wne:menuHelp": new OxmlAttr("wne:menuHelp", OxmlType.StringValue),
    "wne:bEncrypt": new OxmlAttr("wne:bEncrypt", OxmlType.HexBinaryValue),
    "wne:cmg": new OxmlAttr("wne:cmg", OxmlType.HexBinaryValue)
  };
  AllocatedCommand._D = {
    "wne:argValue": new OxmlAttr("wne:argValue", OxmlType.StringValue),
    "wne:fciBasedOn": new OxmlAttr("wne:fciBasedOn", OxmlType.StringValue),
    "wne:fciIndexBasedOn": new OxmlAttr("wne:fciIndexBasedOn", OxmlType.HexBinaryValue),
    "wne:acdName": new OxmlAttr("wne:acdName", OxmlType.StringValue)
  };
  KeyMapEntry._C = {
    "wne:fci": FixedCommandKeyboardCustomization,
    "wne:macro": MacroKeyboardCustomization,
    "wne:acd": AllocatedCommandKeyboardCustomization,
    "wne:wll": WllMacroKeyboardCustomization,
    "wne:wch": CharacterInsertion
  };
  KeyMapEntry._D = {
    "wne:chmPrimary": new OxmlAttr("wne:chmPrimary", OxmlType.HexBinaryValue),
    "wne:chmSecondary": new OxmlAttr("wne:chmSecondary", OxmlType.HexBinaryValue),
    "wne:kcmPrimary": new OxmlAttr("wne:kcmPrimary", OxmlType.HexBinaryValue),
    "wne:kcmSecondary": new OxmlAttr("wne:kcmSecondary", OxmlType.HexBinaryValue),
    "wne:mask": new OxmlAttr("wne:mask", OxmlType.OnOffValue)
  };
  CharacterInsertion._D = {
    "wne:val": new OxmlAttr("wne:val", OxmlType.HexBinaryValue)
  };
  AcceleratorKeymapType._D = {
    "wne:acdName": new OxmlAttr("wne:acdName", OxmlType.StringValue)
  };
  MacroWllType._D = {
    "wne:macroName": new OxmlAttr("wne:macroName", OxmlType.StringValue)
  };
  FixedCommandKeyboardCustomization._D = {
    "wne:fciName": new OxmlAttr("wne:fciName", OxmlType.StringValue),
    "wne:fciIndex": new OxmlAttr("wne:fciIndex", OxmlType.HexBinaryValue),
    "wne:swArg": new OxmlAttr("wne:swArg", OxmlType.HexBinaryValue)
  };
  MailMergeRecipients._C = {
    "wne:recipientData": SingleDataSourceRecord
  };
  VbaSuppData._C = {
    "wne:docEvents": DocEvents,
    "wne:mcds": Mcds
  };
  Mcds._C = {
    "wne:mcd": Mcd
  };
  TemplateCommandGroup._C = {
    "wne:keymaps": KeyMapCustomizations,
    "wne:keymapsBad": MismatchedKeyMapCustomization,
    "wne:toolbars": Toolbars,
    "wne:acds": AllocatedCommands
  };
  return {
    prefix: "wne",
    xmlns: "http://schemas.microsoft.com/office/word/2006/wordml"
  };
}
export {
  AcceleratorKeymapType,
  AllocatedCommand,
  AllocatedCommandKeyboardCustomization,
  AllocatedCommandManifest,
  AllocatedCommandManifestEntry,
  AllocatedCommands,
  CharacterInsertion,
  DocEvents,
  EventDocBuildingBlockAfterInsertXsdString,
  EventDocCloseXsdString,
  EventDocContentControlAfterInsertXsdString,
  EventDocContentControlBeforeDeleteXsdString,
  EventDocContentControlOnEnterXsdString,
  EventDocContentControlOnExistXsdString,
  EventDocContentControlUpdateXsdString,
  EventDocNewXsdString,
  EventDocOpenXsdString,
  EventDocStoreUpdateXsdString,
  EventDocSyncXsdString,
  EventDocXmlAfterInsertXsdString,
  EventDocXmlBeforeDeleteXsdString,
  FixedCommandKeyboardCustomization,
  KeyMapCustomizations,
  KeyMapEntry,
  KeymapsType,
  MacroKeyboardCustomization,
  MacroWllType,
  MailMergeRecipients,
  Mcd,
  Mcds,
  MismatchedKeyMapCustomization,
  RecordHashCode,
  RecordIncluded,
  SingleDataSourceRecord,
  TemplateCommandGroup,
  ToolbarData,
  Toolbars,
  VbaSuppData,
  WllMacroKeyboardCustomization,
  initOfficeWordNamespace
};
