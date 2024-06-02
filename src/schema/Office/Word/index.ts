import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { IntegerValue } from '../../../framework/types/IntegerValue';
import { OnOffValue } from '../../../framework/types/OnOffValue';
import { StringValue } from '../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';


/** Defines the SingleDataSourceRecord Class. Serialized as `wne:recipientData` */
export class SingleDataSourceRecord extends OxmlCompositeElement<RecordIncluded | RecordHashCode> {

    public static override _Q = 'wne:recipientData';
    /** Returns RecordIncluded. */
    public get recordIncluded(): RecordIncluded | undefined { return this._f(RecordIncluded); }
    /** Returns RecordHashCode. */
    public get recordHashCode(): RecordHashCode | undefined { return this._f(RecordHashCode); }

}
/** Defines the RecordHashCode Class. Serialized as `wne:hash` */
export class RecordHashCode extends OxmlLeafElement {

    public static override _Q = 'wne:hash';
    public static override _A = ['wne:val',];
    /** val. Serialized as `wne:val` */
    public get val(): IntegerValue | undefined { return this._g('wne:val'); }
    public set val(v: IntegerValue | undefined) { this._s('wne:val', v); }

}
/** Defines the RecordIncluded Class. Serialized as `wne:active` */
export class RecordIncluded extends OxmlLeafElement {

    public static override _Q = 'wne:active';
    public static override _A = ['wne:val',];
    /** val. Serialized as `wne:val` */
    public get val(): OnOffValue | undefined { return this._g('wne:val'); }
    public set val(v: OnOffValue | undefined) { this._s('wne:val', v); }

}
/** Defines the AllocatedCommands Class. Serialized as `wne:acds` */
export class AllocatedCommands extends OxmlCompositeElement<AllocatedCommand> {

    public static override _Q = 'wne:acds';

}
/** Defines the Toolbars Class. Serialized as `wne:toolbars` */
export class Toolbars extends OxmlCompositeElement<AllocatedCommandManifest | ToolbarData> {

    public static override _Q = 'wne:toolbars';

}
/** Defines the KeymapsType Class. */
export abstract class KeymapsType extends OxmlCompositeElement<KeyMapEntry> {


}
/** Defines the MismatchedKeyMapCustomization Class. Serialized as `wne:keymapsBad` */
export class MismatchedKeyMapCustomization extends KeymapsType {

    public static override _Q = 'wne:keymapsBad';

}
/** Defines the KeyMapCustomizations Class. Serialized as `wne:keymaps` */
export class KeyMapCustomizations extends KeymapsType {

    public static override _Q = 'wne:keymaps';

}
/** Defines the ToolbarData Class. Serialized as `wne:toolbarData` */
export class ToolbarData extends OxmlLeafElement {

    public static override _Q = 'wne:toolbarData';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the AllocatedCommandManifest Class. Serialized as `wne:acdManifest` */
export class AllocatedCommandManifest extends OxmlCompositeElement<AllocatedCommandManifestEntry> {

    public static override _Q = 'wne:acdManifest';

}
/** Defines the DocEvents Class. Serialized as `wne:docEvents` */
export class DocEvents extends OxmlCompositeElement<EventDocNewXsdString | EventDocOpenXsdString | EventDocCloseXsdString | EventDocSyncXsdString | EventDocXmlAfterInsertXsdString | EventDocXmlBeforeDeleteXsdString | EventDocContentControlAfterInsertXsdString | EventDocContentControlBeforeDeleteXsdString | EventDocContentControlOnExistXsdString | EventDocContentControlOnEnterXsdString | EventDocStoreUpdateXsdString | EventDocContentControlUpdateXsdString | EventDocBuildingBlockAfterInsertXsdString> {

    public static override _Q = 'wne:docEvents';
    /** Returns EventDocNewXsdString. */
    public get eventDocNewXsdString(): EventDocNewXsdString | undefined { return this._f(EventDocNewXsdString); }
    /** Returns EventDocOpenXsdString. */
    public get eventDocOpenXsdString(): EventDocOpenXsdString | undefined { return this._f(EventDocOpenXsdString); }
    /** Returns EventDocCloseXsdString. */
    public get eventDocCloseXsdString(): EventDocCloseXsdString | undefined { return this._f(EventDocCloseXsdString); }
    /** Returns EventDocSyncXsdString. */
    public get eventDocSyncXsdString(): EventDocSyncXsdString | undefined { return this._f(EventDocSyncXsdString); }
    /** Returns EventDocXmlAfterInsertXsdString. */
    public get eventDocXmlAfterInsertXsdString(): EventDocXmlAfterInsertXsdString | undefined { return this._f(EventDocXmlAfterInsertXsdString); }
    /** Returns EventDocXmlBeforeDeleteXsdString. */
    public get eventDocXmlBeforeDeleteXsdString(): EventDocXmlBeforeDeleteXsdString | undefined { return this._f(EventDocXmlBeforeDeleteXsdString); }
    /** Returns EventDocContentControlAfterInsertXsdString. */
    public get eventDocContentControlAfterInsertXsdString(): EventDocContentControlAfterInsertXsdString | undefined { return this._f(EventDocContentControlAfterInsertXsdString); }
    /** Returns EventDocContentControlBeforeDeleteXsdString. */
    public get eventDocContentControlBeforeDeleteXsdString(): EventDocContentControlBeforeDeleteXsdString | undefined { return this._f(EventDocContentControlBeforeDeleteXsdString); }
    /** Returns EventDocContentControlOnExistXsdString. */
    public get eventDocContentControlOnExistXsdString(): EventDocContentControlOnExistXsdString | undefined { return this._f(EventDocContentControlOnExistXsdString); }
    /** Returns EventDocContentControlOnEnterXsdString. */
    public get eventDocContentControlOnEnterXsdString(): EventDocContentControlOnEnterXsdString | undefined { return this._f(EventDocContentControlOnEnterXsdString); }
    /** Returns EventDocStoreUpdateXsdString. */
    public get eventDocStoreUpdateXsdString(): EventDocStoreUpdateXsdString | undefined { return this._f(EventDocStoreUpdateXsdString); }
    /** Returns EventDocContentControlUpdateXsdString. */
    public get eventDocContentControlUpdateXsdString(): EventDocContentControlUpdateXsdString | undefined { return this._f(EventDocContentControlUpdateXsdString); }
    /** Returns EventDocBuildingBlockAfterInsertXsdString. */
    public get eventDocBuildingBlockAfterInsertXsdString(): EventDocBuildingBlockAfterInsertXsdString | undefined { return this._f(EventDocBuildingBlockAfterInsertXsdString); }

}
/** Defines the EventDocBuildingBlockAfterInsertXsdString Class. Serialized as `wne:eventDocBuildingBlockAfterInsert` */
export class EventDocBuildingBlockAfterInsertXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocBuildingBlockAfterInsert';

}
/** Defines the EventDocContentControlUpdateXsdString Class. Serialized as `wne:eventDocContentControlContentUpdate` */
export class EventDocContentControlUpdateXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocContentControlContentUpdate';

}
/** Defines the EventDocStoreUpdateXsdString Class. Serialized as `wne:eventDocStoreUpdate` */
export class EventDocStoreUpdateXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocStoreUpdate';

}
/** Defines the EventDocContentControlOnEnterXsdString Class. Serialized as `wne:eventDocContentControlOnEnter` */
export class EventDocContentControlOnEnterXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocContentControlOnEnter';

}
/** Defines the EventDocContentControlOnExistXsdString Class. Serialized as `wne:eventDocContentControlOnExit` */
export class EventDocContentControlOnExistXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocContentControlOnExit';

}
/** Defines the EventDocContentControlBeforeDeleteXsdString Class. Serialized as `wne:eventDocContentControlBeforeDelete` */
export class EventDocContentControlBeforeDeleteXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocContentControlBeforeDelete';

}
/** Defines the EventDocContentControlAfterInsertXsdString Class. Serialized as `wne:eventDocContentControlAfterInsert` */
export class EventDocContentControlAfterInsertXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocContentControlAfterInsert';

}
/** Defines the EventDocXmlBeforeDeleteXsdString Class. Serialized as `wne:eventDocXmlBeforeDelete` */
export class EventDocXmlBeforeDeleteXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocXmlBeforeDelete';

}
/** Defines the EventDocXmlAfterInsertXsdString Class. Serialized as `wne:eventDocXmlAfterInsert` */
export class EventDocXmlAfterInsertXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocXmlAfterInsert';

}
/** Defines the EventDocSyncXsdString Class. Serialized as `wne:eventDocSync` */
export class EventDocSyncXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocSync';

}
/** Defines the EventDocCloseXsdString Class. Serialized as `wne:eventDocClose` */
export class EventDocCloseXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocClose';

}
/** Defines the EventDocOpenXsdString Class. Serialized as `wne:eventDocOpen` */
export class EventDocOpenXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocOpen';

}
/** Defines the EventDocNewXsdString Class. Serialized as `wne:eventDocNew` */
export class EventDocNewXsdString extends OxmlLeafTextElement {

    public static override _Q = 'wne:eventDocNew';

}
/** Defines the Mcd Class. Serialized as `wne:mcd` */
export class Mcd extends OxmlLeafElement {

    public static override _Q = 'wne:mcd';
    public static override _A = ['wne:macroName','wne:name','wne:menuHelp','wne:bEncrypt','wne:cmg',];
    /** macroName. Serialized as `wne:macroName` */
    public get macroName(): StringValue | undefined { return this._g('wne:macroName'); }
    public set macroName(v: StringValue | undefined) { this._s('wne:macroName', v); }
    /** name. Serialized as `wne:name` */
    public get name(): StringValue | undefined { return this._g('wne:name'); }
    public set name(v: StringValue | undefined) { this._s('wne:name', v); }
    /** menuHelp. Serialized as `wne:menuHelp` */
    public get menuHelp(): StringValue | undefined { return this._g('wne:menuHelp'); }
    public set menuHelp(v: StringValue | undefined) { this._s('wne:menuHelp', v); }
    /** bEncrypt. Serialized as `wne:bEncrypt` */
    public get bEncrypt(): HexBinaryValue | undefined { return this._g('wne:bEncrypt'); }
    public set bEncrypt(v: HexBinaryValue | undefined) { this._s('wne:bEncrypt', v); }
    /** cmg. Serialized as `wne:cmg` */
    public get cmg(): HexBinaryValue | undefined { return this._g('wne:cmg'); }
    public set cmg(v: HexBinaryValue | undefined) { this._s('wne:cmg', v); }

}
/** Defines the AllocatedCommand Class. Serialized as `wne:acd` */
export class AllocatedCommand extends OxmlLeafElement {

    public static override _Q = 'wne:acd';
    public static override _A = ['wne:argValue','wne:fciBasedOn','wne:fciIndexBasedOn','wne:acdName',];
    /** argValue. Serialized as `wne:argValue` */
    public get argumentValue(): StringValue | undefined { return this._g('wne:argValue'); }
    public set argumentValue(v: StringValue | undefined) { this._s('wne:argValue', v); }
    /** fciBasedOn. Serialized as `wne:fciBasedOn` */
    public get commandBasedOn(): StringValue | undefined { return this._g('wne:fciBasedOn'); }
    public set commandBasedOn(v: StringValue | undefined) { this._s('wne:fciBasedOn', v); }
    /** fciIndexBasedOn. Serialized as `wne:fciIndexBasedOn` */
    public get commandIndexBasedOn(): HexBinaryValue | undefined { return this._g('wne:fciIndexBasedOn'); }
    public set commandIndexBasedOn(v: HexBinaryValue | undefined) { this._s('wne:fciIndexBasedOn', v); }
    /** acdName. Serialized as `wne:acdName` */
    public get acceleratorName(): StringValue | undefined { return this._g('wne:acdName'); }
    public set acceleratorName(v: StringValue | undefined) { this._s('wne:acdName', v); }

}
/** Defines the KeyMapEntry Class. Serialized as `wne:keymap` */
export class KeyMapEntry extends OxmlCompositeElement<FixedCommandKeyboardCustomization | MacroKeyboardCustomization | AllocatedCommandKeyboardCustomization | WllMacroKeyboardCustomization | CharacterInsertion> {

    public static override _Q = 'wne:keymap';
    public static override _A = ['wne:chmPrimary','wne:chmSecondary','wne:kcmPrimary','wne:kcmSecondary','wne:mask',];
    /** chmPrimary. Serialized as `wne:chmPrimary` */
    public get characterMapPrimary(): HexBinaryValue | undefined { return this._g('wne:chmPrimary'); }
    public set characterMapPrimary(v: HexBinaryValue | undefined) { this._s('wne:chmPrimary', v); }
    /** chmSecondary. Serialized as `wne:chmSecondary` */
    public get characterMapSecondary(): HexBinaryValue | undefined { return this._g('wne:chmSecondary'); }
    public set characterMapSecondary(v: HexBinaryValue | undefined) { this._s('wne:chmSecondary', v); }
    /** kcmPrimary. Serialized as `wne:kcmPrimary` */
    public get keyCodePrimary(): HexBinaryValue | undefined { return this._g('wne:kcmPrimary'); }
    public set keyCodePrimary(v: HexBinaryValue | undefined) { this._s('wne:kcmPrimary', v); }
    /** kcmSecondary. Serialized as `wne:kcmSecondary` */
    public get keyCodeSecondary(): HexBinaryValue | undefined { return this._g('wne:kcmSecondary'); }
    public set keyCodeSecondary(v: HexBinaryValue | undefined) { this._s('wne:kcmSecondary', v); }
    /** mask. Serialized as `wne:mask` */
    public get mask(): OnOffValue | undefined { return this._g('wne:mask'); }
    public set mask(v: OnOffValue | undefined) { this._s('wne:mask', v); }
    /** Returns FixedCommandKeyboardCustomization. */
    public get fixedCommandKeyboardCustomization(): FixedCommandKeyboardCustomization | undefined { return this._f(FixedCommandKeyboardCustomization); }
    /** Returns MacroKeyboardCustomization. */
    public get macroKeyboardCustomization(): MacroKeyboardCustomization | undefined { return this._f(MacroKeyboardCustomization); }
    /** Returns AllocatedCommandKeyboardCustomization. */
    public get allocatedCommandKeyboardCustomization(): AllocatedCommandKeyboardCustomization | undefined { return this._f(AllocatedCommandKeyboardCustomization); }
    /** Returns WllMacroKeyboardCustomization. */
    public get wllMacroKeyboardCustomization(): WllMacroKeyboardCustomization | undefined { return this._f(WllMacroKeyboardCustomization); }
    /** Returns CharacterInsertion. */
    public get characterInsertion(): CharacterInsertion | undefined { return this._f(CharacterInsertion); }

}
/** Defines the CharacterInsertion Class. Serialized as `wne:wch` */
export class CharacterInsertion extends OxmlLeafElement {

    public static override _Q = 'wne:wch';
    public static override _A = ['wne:val',];
    /** val. Serialized as `wne:val` */
    public get val(): HexBinaryValue | undefined { return this._g('wne:val'); }
    public set val(v: HexBinaryValue | undefined) { this._s('wne:val', v); }

}
/** Defines the AcceleratorKeymapType Class. */
export abstract class AcceleratorKeymapType extends OxmlLeafElement {

    public static override _A = ['wne:acdName',];
    /** acdName. Serialized as `wne:acdName` */
    public get acceleratorName(): StringValue | undefined { return this._g('wne:acdName'); }
    public set acceleratorName(v: StringValue | undefined) { this._s('wne:acdName', v); }

}
/** Defines the AllocatedCommandManifestEntry Class. Serialized as `wne:acdEntry` */
export class AllocatedCommandManifestEntry extends AcceleratorKeymapType {

    public static override _Q = 'wne:acdEntry';

}
/** Defines the AllocatedCommandKeyboardCustomization Class. Serialized as `wne:acd` */
export class AllocatedCommandKeyboardCustomization extends AcceleratorKeymapType {

    public static override _Q = 'wne:acd';

}
/** Defines the MacroWllType Class. */
export abstract class MacroWllType extends OxmlLeafElement {

    public static override _A = ['wne:macroName',];
    /** macroName. Serialized as `wne:macroName` */
    public get macroName(): StringValue | undefined { return this._g('wne:macroName'); }
    public set macroName(v: StringValue | undefined) { this._s('wne:macroName', v); }

}
/** Defines the WllMacroKeyboardCustomization Class. Serialized as `wne:wll` */
export class WllMacroKeyboardCustomization extends MacroWllType {

    public static override _Q = 'wne:wll';

}
/** Defines the MacroKeyboardCustomization Class. Serialized as `wne:macro` */
export class MacroKeyboardCustomization extends MacroWllType {

    public static override _Q = 'wne:macro';

}
/** Defines the FixedCommandKeyboardCustomization Class. Serialized as `wne:fci` */
export class FixedCommandKeyboardCustomization extends OxmlLeafElement {

    public static override _Q = 'wne:fci';
    public static override _A = ['wne:fciName','wne:fciIndex','wne:swArg',];
    /** fciName. Serialized as `wne:fciName` */
    public get commandName(): StringValue | undefined { return this._g('wne:fciName'); }
    public set commandName(v: StringValue | undefined) { this._s('wne:fciName', v); }
    /** fciIndex. Serialized as `wne:fciIndex` */
    public get commandIndex(): HexBinaryValue | undefined { return this._g('wne:fciIndex'); }
    public set commandIndex(v: HexBinaryValue | undefined) { this._s('wne:fciIndex', v); }
    /** swArg. Serialized as `wne:swArg` */
    public get argument(): HexBinaryValue | undefined { return this._g('wne:swArg'); }
    public set argument(v: HexBinaryValue | undefined) { this._s('wne:swArg', v); }

}
/** Defines the MailMergeRecipients Class. Serialized as `wne:recipients` */
export class MailMergeRecipients extends OxmlPartRootElement<SingleDataSourceRecord> {

    public static override _Q = 'wne:recipients';

}
/** Defines the VbaSuppData Class. Serialized as `wne:vbaSuppData` */
export class VbaSuppData extends OxmlPartRootElement<DocEvents | Mcds> {

    public static override _Q = 'wne:vbaSuppData';
    /** Returns DocEvents. */
    public get docEvents(): DocEvents | undefined { return this._f(DocEvents); }
    /** Returns Mcds. */
    public get mcds(): Mcds | undefined { return this._f(Mcds); }

}
/** Defines the Mcds Class. Serialized as `wne:mcds` */
export class Mcds extends OxmlCompositeElement<Mcd> {

    public static override _Q = 'wne:mcds';

}
/** Defines the TemplateCommandGroup Class. Serialized as `wne:tcg` */
export class TemplateCommandGroup extends OxmlPartRootElement<KeyMapCustomizations | MismatchedKeyMapCustomization | Toolbars | AllocatedCommands> {

    public static override _Q = 'wne:tcg';

}

export function initOfficeWordNamespace() {
    SingleDataSourceRecord._C = {
        'wne:active': RecordIncluded,
        'wne:hash': RecordHashCode,
    };
    RecordHashCode._D = {
        'wne:val': new OxmlAttr('wne:val', OxmlType.IntegerValue),
    };
    RecordIncluded._D = {
        'wne:val': new OxmlAttr('wne:val', OxmlType.OnOffValue),
    };
    AllocatedCommands._C = {
        'wne:acd': AllocatedCommand,
    };
    Toolbars._C = {
        'wne:acdManifest': AllocatedCommandManifest,
        'wne:toolbarData': ToolbarData,
    };
    KeymapsType._C = {
        'wne:keymap': KeyMapEntry,
    };
    MismatchedKeyMapCustomization._C = {
        'wne:keymap': KeyMapEntry,
    };
    KeyMapCustomizations._C = {
        'wne:keymap': KeyMapEntry,
    };
    ToolbarData._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    AllocatedCommandManifest._C = {
        'wne:acdEntry': AllocatedCommandManifestEntry,
    };
    DocEvents._C = {
        'wne:eventDocNew': EventDocNewXsdString,
        'wne:eventDocOpen': EventDocOpenXsdString,
        'wne:eventDocClose': EventDocCloseXsdString,
        'wne:eventDocSync': EventDocSyncXsdString,
        'wne:eventDocXmlAfterInsert': EventDocXmlAfterInsertXsdString,
        'wne:eventDocXmlBeforeDelete': EventDocXmlBeforeDeleteXsdString,
        'wne:eventDocContentControlAfterInsert': EventDocContentControlAfterInsertXsdString,
        'wne:eventDocContentControlBeforeDelete': EventDocContentControlBeforeDeleteXsdString,
        'wne:eventDocContentControlOnExit': EventDocContentControlOnExistXsdString,
        'wne:eventDocContentControlOnEnter': EventDocContentControlOnEnterXsdString,
        'wne:eventDocStoreUpdate': EventDocStoreUpdateXsdString,
        'wne:eventDocContentControlContentUpdate': EventDocContentControlUpdateXsdString,
        'wne:eventDocBuildingBlockAfterInsert': EventDocBuildingBlockAfterInsertXsdString,
    };
    Mcd._D = {
        'wne:macroName': new OxmlAttr('wne:macroName', OxmlType.StringValue),
        'wne:name': new OxmlAttr('wne:name', OxmlType.StringValue),
        'wne:menuHelp': new OxmlAttr('wne:menuHelp', OxmlType.StringValue),
        'wne:bEncrypt': new OxmlAttr('wne:bEncrypt', OxmlType.HexBinaryValue),
        'wne:cmg': new OxmlAttr('wne:cmg', OxmlType.HexBinaryValue),
    };
    AllocatedCommand._D = {
        'wne:argValue': new OxmlAttr('wne:argValue', OxmlType.StringValue),
        'wne:fciBasedOn': new OxmlAttr('wne:fciBasedOn', OxmlType.StringValue),
        'wne:fciIndexBasedOn': new OxmlAttr('wne:fciIndexBasedOn', OxmlType.HexBinaryValue),
        'wne:acdName': new OxmlAttr('wne:acdName', OxmlType.StringValue),
    };
    KeyMapEntry._C = {
        'wne:fci': FixedCommandKeyboardCustomization,
        'wne:macro': MacroKeyboardCustomization,
        'wne:acd': AllocatedCommandKeyboardCustomization,
        'wne:wll': WllMacroKeyboardCustomization,
        'wne:wch': CharacterInsertion,
    };
    KeyMapEntry._D = {
        'wne:chmPrimary': new OxmlAttr('wne:chmPrimary', OxmlType.HexBinaryValue),
        'wne:chmSecondary': new OxmlAttr('wne:chmSecondary', OxmlType.HexBinaryValue),
        'wne:kcmPrimary': new OxmlAttr('wne:kcmPrimary', OxmlType.HexBinaryValue),
        'wne:kcmSecondary': new OxmlAttr('wne:kcmSecondary', OxmlType.HexBinaryValue),
        'wne:mask': new OxmlAttr('wne:mask', OxmlType.OnOffValue),
    };
    CharacterInsertion._D = {
        'wne:val': new OxmlAttr('wne:val', OxmlType.HexBinaryValue),
    };
    AcceleratorKeymapType._D = {
        'wne:acdName': new OxmlAttr('wne:acdName', OxmlType.StringValue),
    };
    MacroWllType._D = {
        'wne:macroName': new OxmlAttr('wne:macroName', OxmlType.StringValue),
    };
    FixedCommandKeyboardCustomization._D = {
        'wne:fciName': new OxmlAttr('wne:fciName', OxmlType.StringValue),
        'wne:fciIndex': new OxmlAttr('wne:fciIndex', OxmlType.HexBinaryValue),
        'wne:swArg': new OxmlAttr('wne:swArg', OxmlType.HexBinaryValue),
    };
    MailMergeRecipients._C = {
        'wne:recipientData': SingleDataSourceRecord,
    };
    VbaSuppData._C = {
        'wne:docEvents': DocEvents,
        'wne:mcds': Mcds,
    };
    Mcds._C = {
        'wne:mcd': Mcd,
    };
    TemplateCommandGroup._C = {
        'wne:keymaps': KeyMapCustomizations,
        'wne:keymapsBad': MismatchedKeyMapCustomization,
        'wne:toolbars': Toolbars,
        'wne:acds': AllocatedCommands,
    };
    return {
        prefix: 'wne',
        xmlns: 'http://schemas.microsoft.com/office/word/2006/wordml',
    };
}
