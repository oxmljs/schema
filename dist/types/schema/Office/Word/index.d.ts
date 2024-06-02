import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { IntegerValue } from '../../../framework/types/IntegerValue';
import { OnOffValue } from '../../../framework/types/OnOffValue';
import { StringValue } from '../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
/** Defines the SingleDataSourceRecord Class. Serialized as `wne:recipientData` */
export declare class SingleDataSourceRecord extends OxmlCompositeElement<RecordIncluded | RecordHashCode> {
    static _Q: string;
    /** Returns RecordIncluded. */
    get recordIncluded(): RecordIncluded | undefined;
    /** Returns RecordHashCode. */
    get recordHashCode(): RecordHashCode | undefined;
}
/** Defines the RecordHashCode Class. Serialized as `wne:hash` */
export declare class RecordHashCode extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `wne:val` */
    get val(): IntegerValue | undefined;
    set val(v: IntegerValue | undefined);
}
/** Defines the RecordIncluded Class. Serialized as `wne:active` */
export declare class RecordIncluded extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `wne:val` */
    get val(): OnOffValue | undefined;
    set val(v: OnOffValue | undefined);
}
/** Defines the AllocatedCommands Class. Serialized as `wne:acds` */
export declare class AllocatedCommands extends OxmlCompositeElement<AllocatedCommand> {
    static _Q: string;
}
/** Defines the Toolbars Class. Serialized as `wne:toolbars` */
export declare class Toolbars extends OxmlCompositeElement<AllocatedCommandManifest | ToolbarData> {
    static _Q: string;
}
/** Defines the KeymapsType Class. */
export declare abstract class KeymapsType extends OxmlCompositeElement<KeyMapEntry> {
}
/** Defines the MismatchedKeyMapCustomization Class. Serialized as `wne:keymapsBad` */
export declare class MismatchedKeyMapCustomization extends KeymapsType {
    static _Q: string;
}
/** Defines the KeyMapCustomizations Class. Serialized as `wne:keymaps` */
export declare class KeyMapCustomizations extends KeymapsType {
    static _Q: string;
}
/** Defines the ToolbarData Class. Serialized as `wne:toolbarData` */
export declare class ToolbarData extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the AllocatedCommandManifest Class. Serialized as `wne:acdManifest` */
export declare class AllocatedCommandManifest extends OxmlCompositeElement<AllocatedCommandManifestEntry> {
    static _Q: string;
}
/** Defines the DocEvents Class. Serialized as `wne:docEvents` */
export declare class DocEvents extends OxmlCompositeElement<EventDocNewXsdString | EventDocOpenXsdString | EventDocCloseXsdString | EventDocSyncXsdString | EventDocXmlAfterInsertXsdString | EventDocXmlBeforeDeleteXsdString | EventDocContentControlAfterInsertXsdString | EventDocContentControlBeforeDeleteXsdString | EventDocContentControlOnExistXsdString | EventDocContentControlOnEnterXsdString | EventDocStoreUpdateXsdString | EventDocContentControlUpdateXsdString | EventDocBuildingBlockAfterInsertXsdString> {
    static _Q: string;
    /** Returns EventDocNewXsdString. */
    get eventDocNewXsdString(): EventDocNewXsdString | undefined;
    /** Returns EventDocOpenXsdString. */
    get eventDocOpenXsdString(): EventDocOpenXsdString | undefined;
    /** Returns EventDocCloseXsdString. */
    get eventDocCloseXsdString(): EventDocCloseXsdString | undefined;
    /** Returns EventDocSyncXsdString. */
    get eventDocSyncXsdString(): EventDocSyncXsdString | undefined;
    /** Returns EventDocXmlAfterInsertXsdString. */
    get eventDocXmlAfterInsertXsdString(): EventDocXmlAfterInsertXsdString | undefined;
    /** Returns EventDocXmlBeforeDeleteXsdString. */
    get eventDocXmlBeforeDeleteXsdString(): EventDocXmlBeforeDeleteXsdString | undefined;
    /** Returns EventDocContentControlAfterInsertXsdString. */
    get eventDocContentControlAfterInsertXsdString(): EventDocContentControlAfterInsertXsdString | undefined;
    /** Returns EventDocContentControlBeforeDeleteXsdString. */
    get eventDocContentControlBeforeDeleteXsdString(): EventDocContentControlBeforeDeleteXsdString | undefined;
    /** Returns EventDocContentControlOnExistXsdString. */
    get eventDocContentControlOnExistXsdString(): EventDocContentControlOnExistXsdString | undefined;
    /** Returns EventDocContentControlOnEnterXsdString. */
    get eventDocContentControlOnEnterXsdString(): EventDocContentControlOnEnterXsdString | undefined;
    /** Returns EventDocStoreUpdateXsdString. */
    get eventDocStoreUpdateXsdString(): EventDocStoreUpdateXsdString | undefined;
    /** Returns EventDocContentControlUpdateXsdString. */
    get eventDocContentControlUpdateXsdString(): EventDocContentControlUpdateXsdString | undefined;
    /** Returns EventDocBuildingBlockAfterInsertXsdString. */
    get eventDocBuildingBlockAfterInsertXsdString(): EventDocBuildingBlockAfterInsertXsdString | undefined;
}
/** Defines the EventDocBuildingBlockAfterInsertXsdString Class. Serialized as `wne:eventDocBuildingBlockAfterInsert` */
export declare class EventDocBuildingBlockAfterInsertXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocContentControlUpdateXsdString Class. Serialized as `wne:eventDocContentControlContentUpdate` */
export declare class EventDocContentControlUpdateXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocStoreUpdateXsdString Class. Serialized as `wne:eventDocStoreUpdate` */
export declare class EventDocStoreUpdateXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocContentControlOnEnterXsdString Class. Serialized as `wne:eventDocContentControlOnEnter` */
export declare class EventDocContentControlOnEnterXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocContentControlOnExistXsdString Class. Serialized as `wne:eventDocContentControlOnExit` */
export declare class EventDocContentControlOnExistXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocContentControlBeforeDeleteXsdString Class. Serialized as `wne:eventDocContentControlBeforeDelete` */
export declare class EventDocContentControlBeforeDeleteXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocContentControlAfterInsertXsdString Class. Serialized as `wne:eventDocContentControlAfterInsert` */
export declare class EventDocContentControlAfterInsertXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocXmlBeforeDeleteXsdString Class. Serialized as `wne:eventDocXmlBeforeDelete` */
export declare class EventDocXmlBeforeDeleteXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocXmlAfterInsertXsdString Class. Serialized as `wne:eventDocXmlAfterInsert` */
export declare class EventDocXmlAfterInsertXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocSyncXsdString Class. Serialized as `wne:eventDocSync` */
export declare class EventDocSyncXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocCloseXsdString Class. Serialized as `wne:eventDocClose` */
export declare class EventDocCloseXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocOpenXsdString Class. Serialized as `wne:eventDocOpen` */
export declare class EventDocOpenXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EventDocNewXsdString Class. Serialized as `wne:eventDocNew` */
export declare class EventDocNewXsdString extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the Mcd Class. Serialized as `wne:mcd` */
export declare class Mcd extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** macroName. Serialized as `wne:macroName` */
    get macroName(): StringValue | undefined;
    set macroName(v: StringValue | undefined);
    /** name. Serialized as `wne:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** menuHelp. Serialized as `wne:menuHelp` */
    get menuHelp(): StringValue | undefined;
    set menuHelp(v: StringValue | undefined);
    /** bEncrypt. Serialized as `wne:bEncrypt` */
    get bEncrypt(): HexBinaryValue | undefined;
    set bEncrypt(v: HexBinaryValue | undefined);
    /** cmg. Serialized as `wne:cmg` */
    get cmg(): HexBinaryValue | undefined;
    set cmg(v: HexBinaryValue | undefined);
}
/** Defines the AllocatedCommand Class. Serialized as `wne:acd` */
export declare class AllocatedCommand extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** argValue. Serialized as `wne:argValue` */
    get argumentValue(): StringValue | undefined;
    set argumentValue(v: StringValue | undefined);
    /** fciBasedOn. Serialized as `wne:fciBasedOn` */
    get commandBasedOn(): StringValue | undefined;
    set commandBasedOn(v: StringValue | undefined);
    /** fciIndexBasedOn. Serialized as `wne:fciIndexBasedOn` */
    get commandIndexBasedOn(): HexBinaryValue | undefined;
    set commandIndexBasedOn(v: HexBinaryValue | undefined);
    /** acdName. Serialized as `wne:acdName` */
    get acceleratorName(): StringValue | undefined;
    set acceleratorName(v: StringValue | undefined);
}
/** Defines the KeyMapEntry Class. Serialized as `wne:keymap` */
export declare class KeyMapEntry extends OxmlCompositeElement<FixedCommandKeyboardCustomization | MacroKeyboardCustomization | AllocatedCommandKeyboardCustomization | WllMacroKeyboardCustomization | CharacterInsertion> {
    static _Q: string;
    static _A: string[];
    /** chmPrimary. Serialized as `wne:chmPrimary` */
    get characterMapPrimary(): HexBinaryValue | undefined;
    set characterMapPrimary(v: HexBinaryValue | undefined);
    /** chmSecondary. Serialized as `wne:chmSecondary` */
    get characterMapSecondary(): HexBinaryValue | undefined;
    set characterMapSecondary(v: HexBinaryValue | undefined);
    /** kcmPrimary. Serialized as `wne:kcmPrimary` */
    get keyCodePrimary(): HexBinaryValue | undefined;
    set keyCodePrimary(v: HexBinaryValue | undefined);
    /** kcmSecondary. Serialized as `wne:kcmSecondary` */
    get keyCodeSecondary(): HexBinaryValue | undefined;
    set keyCodeSecondary(v: HexBinaryValue | undefined);
    /** mask. Serialized as `wne:mask` */
    get mask(): OnOffValue | undefined;
    set mask(v: OnOffValue | undefined);
    /** Returns FixedCommandKeyboardCustomization. */
    get fixedCommandKeyboardCustomization(): FixedCommandKeyboardCustomization | undefined;
    /** Returns MacroKeyboardCustomization. */
    get macroKeyboardCustomization(): MacroKeyboardCustomization | undefined;
    /** Returns AllocatedCommandKeyboardCustomization. */
    get allocatedCommandKeyboardCustomization(): AllocatedCommandKeyboardCustomization | undefined;
    /** Returns WllMacroKeyboardCustomization. */
    get wllMacroKeyboardCustomization(): WllMacroKeyboardCustomization | undefined;
    /** Returns CharacterInsertion. */
    get characterInsertion(): CharacterInsertion | undefined;
}
/** Defines the CharacterInsertion Class. Serialized as `wne:wch` */
export declare class CharacterInsertion extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `wne:val` */
    get val(): HexBinaryValue | undefined;
    set val(v: HexBinaryValue | undefined);
}
/** Defines the AcceleratorKeymapType Class. */
export declare abstract class AcceleratorKeymapType extends OxmlLeafElement {
    static _A: string[];
    /** acdName. Serialized as `wne:acdName` */
    get acceleratorName(): StringValue | undefined;
    set acceleratorName(v: StringValue | undefined);
}
/** Defines the AllocatedCommandManifestEntry Class. Serialized as `wne:acdEntry` */
export declare class AllocatedCommandManifestEntry extends AcceleratorKeymapType {
    static _Q: string;
}
/** Defines the AllocatedCommandKeyboardCustomization Class. Serialized as `wne:acd` */
export declare class AllocatedCommandKeyboardCustomization extends AcceleratorKeymapType {
    static _Q: string;
}
/** Defines the MacroWllType Class. */
export declare abstract class MacroWllType extends OxmlLeafElement {
    static _A: string[];
    /** macroName. Serialized as `wne:macroName` */
    get macroName(): StringValue | undefined;
    set macroName(v: StringValue | undefined);
}
/** Defines the WllMacroKeyboardCustomization Class. Serialized as `wne:wll` */
export declare class WllMacroKeyboardCustomization extends MacroWllType {
    static _Q: string;
}
/** Defines the MacroKeyboardCustomization Class. Serialized as `wne:macro` */
export declare class MacroKeyboardCustomization extends MacroWllType {
    static _Q: string;
}
/** Defines the FixedCommandKeyboardCustomization Class. Serialized as `wne:fci` */
export declare class FixedCommandKeyboardCustomization extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** fciName. Serialized as `wne:fciName` */
    get commandName(): StringValue | undefined;
    set commandName(v: StringValue | undefined);
    /** fciIndex. Serialized as `wne:fciIndex` */
    get commandIndex(): HexBinaryValue | undefined;
    set commandIndex(v: HexBinaryValue | undefined);
    /** swArg. Serialized as `wne:swArg` */
    get argument(): HexBinaryValue | undefined;
    set argument(v: HexBinaryValue | undefined);
}
/** Defines the MailMergeRecipients Class. Serialized as `wne:recipients` */
export declare class MailMergeRecipients extends OxmlPartRootElement<SingleDataSourceRecord> {
    static _Q: string;
}
/** Defines the VbaSuppData Class. Serialized as `wne:vbaSuppData` */
export declare class VbaSuppData extends OxmlPartRootElement<DocEvents | Mcds> {
    static _Q: string;
    /** Returns DocEvents. */
    get docEvents(): DocEvents | undefined;
    /** Returns Mcds. */
    get mcds(): Mcds | undefined;
}
/** Defines the Mcds Class. Serialized as `wne:mcds` */
export declare class Mcds extends OxmlCompositeElement<Mcd> {
    static _Q: string;
}
/** Defines the TemplateCommandGroup Class. Serialized as `wne:tcg` */
export declare class TemplateCommandGroup extends OxmlPartRootElement<KeyMapCustomizations | MismatchedKeyMapCustomization | Toolbars | AllocatedCommands> {
    static _Q: string;
}
export declare function initOfficeWordNamespace(): {
    prefix: string;
    xmlns: string;
};
