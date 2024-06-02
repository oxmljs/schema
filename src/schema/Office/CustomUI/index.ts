import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { IntegerValue } from '../../../framework/types/IntegerValue';


export enum SizeValues {
    /** undefined. Serialized value: `normal` */
    Normal = 'normal',
    /** undefined. Serialized value: `large` */
    Large = 'large',
}

export const SizeValuesArray = [
    SizeValues.Normal,
    SizeValues.Large,
] as const;

export enum ItemSizeValues {
    /** undefined. Serialized value: `normal` */
    Normal = 'normal',
    /** undefined. Serialized value: `large` */
    Large = 'large',
}

export const ItemSizeValuesArray = [
    ItemSizeValues.Normal,
    ItemSizeValues.Large,
] as const;

export enum BoxStyleValues {
    /** undefined. Serialized value: `horizontal` */
    Horizontal = 'horizontal',
    /** undefined. Serialized value: `vertical` */
    Vertical = 'vertical',
}

export const BoxStyleValuesArray = [
    BoxStyleValues.Horizontal,
    BoxStyleValues.Vertical,
] as const;

/** Defines the Ribbon Class. Serialized as `mso:ribbon` */
export class Ribbon extends OxmlCompositeElement<OfficeMenu | QuickAccessToolbar | Tabs | ContextualTabSets> {

    public static override _Q = 'mso:ribbon';
    public static override _A = [':startFromScratch',];
    /** startFromScratch. Serialized as `:startFromScratch` */
    public get startFromScratch(): BooleanValue | undefined { return this._g(':startFromScratch'); }
    public set startFromScratch(v: BooleanValue | undefined) { this._s(':startFromScratch', v); }
    /** Returns OfficeMenu. */
    public get officeMenu(): OfficeMenu | undefined { return this._f(OfficeMenu); }
    /** Returns QuickAccessToolbar. */
    public get quickAccessToolbar(): QuickAccessToolbar | undefined { return this._f(QuickAccessToolbar); }
    /** Returns Tabs. */
    public get tabs(): Tabs | undefined { return this._f(Tabs); }
    /** Returns ContextualTabSets. */
    public get contextualTabSets(): ContextualTabSets | undefined { return this._f(ContextualTabSets); }

}
/** Defines the RepurposedCommands Class. Serialized as `mso:commands` */
export class RepurposedCommands extends OxmlCompositeElement<RepurposedCommand> {

    public static override _Q = 'mso:commands';

}
/** Defines the ContextualTabSets Class. Serialized as `mso:contextualTabs` */
export class ContextualTabSets extends OxmlCompositeElement<ContextualTabSet> {

    public static override _Q = 'mso:contextualTabs';

}
/** Defines the Tabs Class. Serialized as `mso:tabs` */
export class Tabs extends OxmlCompositeElement<Tab> {

    public static override _Q = 'mso:tabs';

}
/** Defines the QuickAccessToolbar Class. Serialized as `mso:qat` */
export class QuickAccessToolbar extends OxmlCompositeElement<SharedQatControls | DocumentSpecificQuickAccessToolbarControls> {

    public static override _Q = 'mso:qat';
    /** Returns SharedQatControls. */
    public get sharedQatControls(): SharedQatControls | undefined { return this._f(SharedQatControls); }
    /** Returns DocumentSpecificQuickAccessToolbarControls. */
    public get documentSpecificQuickAccessToolbarControls(): DocumentSpecificQuickAccessToolbarControls | undefined { return this._f(DocumentSpecificQuickAccessToolbarControls); }

}
/** Defines the OfficeMenu Class. Serialized as `mso:officeMenu` */
export class OfficeMenu extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | SplitButtonWithTitle | MenuWithTitle | UnsizedDynamicMenu> {

    public static override _Q = 'mso:officeMenu';

}
/** Defines the RepurposedCommand Class. Serialized as `mso:command` */
export class RepurposedCommand extends OxmlLeafElement {

    public static override _Q = 'mso:command';
    public static override _A = [':onAction',':enabled',':getEnabled',':idMso',];
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }

}
/** Defines the ContextualTabSet Class. Serialized as `mso:tabSet` */
export class ContextualTabSet extends OxmlCompositeElement<Tab> {

    public static override _Q = 'mso:tabSet';
    public static override _A = [':idMso',':visible',':getVisible',];
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }

}
/** Defines the Tab Class. Serialized as `mso:tab` */
export class Tab extends OxmlCompositeElement<Group> {

    public static override _Q = 'mso:tab';
    public static override _A = [':id',':idQ',':idMso',':tag',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }

}
/** Defines the QatItemsType Class. */
export abstract class QatItemsType extends OxmlCompositeElement<QuickAccessToolbarControlClone | UnsizedButton | VerticalSeparator> {


}
/** Defines the DocumentSpecificQuickAccessToolbarControls Class. Serialized as `mso:documentControls` */
export class DocumentSpecificQuickAccessToolbarControls extends QatItemsType {

    public static override _Q = 'mso:documentControls';

}
/** Defines the SharedQatControls Class. Serialized as `mso:sharedControls` */
export class SharedQatControls extends QatItemsType {

    public static override _Q = 'mso:sharedControls';

}
/** Defines the QuickAccessToolbarControlClone Class. Serialized as `mso:control` */
export class QuickAccessToolbarControlClone extends OxmlLeafElement {

    public static override _Q = 'mso:control';
    public static override _A = [':id',':idQ',':idMso',':description',':getDescription',':size',':getSize',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** size. Serialized as `:size` */
    public get size(): SizeValues | undefined { return this._g(':size'); }
    public set size(v: SizeValues | undefined) { this._s(':size', v); }
    /** getSize. Serialized as `:getSize` */
    public get getSize(): StringValue | undefined { return this._g(':getSize'); }
    public set getSize(v: StringValue | undefined) { this._s(':getSize', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the Group Class. Serialized as `mso:group` */
export class Group extends OxmlCompositeElement<ControlClone | TextLabel | Button | ToggleButton | CheckBox | EditBox | ComboBox | DropDown | Gallery | Menu | DynamicMenu | SplitButton | Box | ButtonGroup | VerticalSeparator | DialogBoxLauncher> {

    public static override _Q = 'mso:group';
    public static override _A = [':id',':idQ',':idMso',':tag',':label',':getLabel',':image',':imageMso',':getImage',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':screentip',':getScreentip',':supertip',':getSupertip',':visible',':getVisible',':keytip',':getKeytip',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }

}
/** Defines the DialogBoxLauncher Class. Serialized as `mso:dialogBoxLauncher` */
export class DialogBoxLauncher extends OxmlCompositeElement<UnsizedButton> {

    public static override _Q = 'mso:dialogBoxLauncher';
    /** Returns UnsizedButton. */
    public get unsizedButton(): UnsizedButton | undefined { return this._f(UnsizedButton); }

}
/** Defines the VerticalSeparator Class. Serialized as `mso:separator` */
export class VerticalSeparator extends OxmlLeafElement {

    public static override _Q = 'mso:separator';
    public static override _A = [':id',':idQ',':visible',':getVisible',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }

}
/** Defines the VisibleToggleButton Class. Serialized as `mso:toggleButton` */
export class VisibleToggleButton extends OxmlLeafElement {

    public static override _Q = 'mso:toggleButton';
    public static override _A = [':getPressed',':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** getPressed. Serialized as `:getPressed` */
    public get getPressed(): StringValue | undefined { return this._g(':getPressed'); }
    public set getPressed(v: StringValue | undefined) { this._s(':getPressed', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the VisibleButton Class. Serialized as `mso:button` */
export class VisibleButton extends OxmlLeafElement {

    public static override _Q = 'mso:button';
    public static override _A = [':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the Item Class. Serialized as `mso:item` */
export class Item extends OxmlLeafElement {

    public static override _Q = 'mso:item';
    public static override _A = [':id',':label',':image',':imageMso',':screentip',':supertip',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }

}
/** Defines the CustomUI Class. Serialized as `mso:customUI` */
export class CustomUI extends OxmlPartRootElement<RepurposedCommands | Ribbon> {

    public static override _Q = 'mso:customUI';
    public static override _A = [':onLoad',':loadImage',];
    /** onLoad. Serialized as `:onLoad` */
    public get onLoad(): StringValue | undefined { return this._g(':onLoad'); }
    public set onLoad(v: StringValue | undefined) { this._s(':onLoad', v); }
    /** loadImage. Serialized as `:loadImage` */
    public get loadImage(): StringValue | undefined { return this._g(':loadImage'); }
    public set loadImage(v: StringValue | undefined) { this._s(':loadImage', v); }
    /** Returns RepurposedCommands. */
    public get repurposedCommands(): RepurposedCommands | undefined { return this._f(RepurposedCommands); }
    /** Returns Ribbon. */
    public get ribbon(): Ribbon | undefined { return this._f(Ribbon); }

}
/** Defines the MenuRoot Class. Serialized as `mso:menu` */
export class MenuRoot extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | UnsizedSplitButton | UnsizedMenu | UnsizedDynamicMenu> {

    public static override _Q = 'mso:menu';
    public static override _A = [':title',':getTitle',':itemSize',];
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** getTitle. Serialized as `:getTitle` */
    public get getTitle(): StringValue | undefined { return this._g(':getTitle'); }
    public set getTitle(v: StringValue | undefined) { this._s(':getTitle', v); }
    /** itemSize. Serialized as `:itemSize` */
    public get itemSize(): ItemSizeValues | undefined { return this._g(':itemSize'); }
    public set itemSize(v: ItemSizeValues | undefined) { this._s(':itemSize', v); }

}
/** Defines the ButtonGroup Class. Serialized as `mso:buttonGroup` */
export class ButtonGroup extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | UnsizedToggleButton | UnsizedGallery | UnsizedMenu | UnsizedDynamicMenu | UnsizedSplitButton> {

    public static override _Q = 'mso:buttonGroup';
    public static override _A = [':id',':idQ',':visible',':getVisible',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }

}
/** Defines the Box Class. Serialized as `mso:box` */
export class Box extends OxmlCompositeElement<ControlClone | TextLabel | Button | ToggleButton | CheckBox | EditBox | ComboBox | DropDown | Gallery | Menu | DynamicMenu | SplitButton | Box | ButtonGroup> {

    public static override _Q = 'mso:box';
    public static override _A = [':id',':idQ',':visible',':getVisible',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':boxStyle',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** boxStyle. Serialized as `:boxStyle` */
    public get boxStyle(): BoxStyleValues | undefined { return this._g(':boxStyle'); }
    public set boxStyle(v: BoxStyleValues | undefined) { this._s(':boxStyle', v); }

}
/** Defines the SplitButton Class. Serialized as `mso:splitButton` */
export class SplitButton extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | UnsizedMenu> {

    public static override _Q = 'mso:splitButton';
    public static override _A = [':size',':getSize',':enabled',':getEnabled',':id',':idQ',':idMso',':tag',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',];
    /** size. Serialized as `:size` */
    public get size(): SizeValues | undefined { return this._g(':size'); }
    public set size(v: SizeValues | undefined) { this._s(':size', v); }
    /** getSize. Serialized as `:getSize` */
    public get getSize(): StringValue | undefined { return this._g(':getSize'); }
    public set getSize(v: StringValue | undefined) { this._s(':getSize', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }

}
/** Defines the DynamicMenu Class. Serialized as `mso:dynamicMenu` */
export class DynamicMenu extends OxmlLeafElement {

    public static override _Q = 'mso:dynamicMenu';
    public static override _A = [':size',':getSize',':description',':getDescription',':id',':idQ',':idMso',':tag',':getContent',':invalidateContentOnDrop',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** size. Serialized as `:size` */
    public get size(): SizeValues | undefined { return this._g(':size'); }
    public set size(v: SizeValues | undefined) { this._s(':size', v); }
    /** getSize. Serialized as `:getSize` */
    public get getSize(): StringValue | undefined { return this._g(':getSize'); }
    public set getSize(v: StringValue | undefined) { this._s(':getSize', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** getContent. Serialized as `:getContent` */
    public get getContent(): StringValue | undefined { return this._g(':getContent'); }
    public set getContent(v: StringValue | undefined) { this._s(':getContent', v); }
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    public get invalidateContentOnDrop(): BooleanValue | undefined { return this._g(':invalidateContentOnDrop'); }
    public set invalidateContentOnDrop(v: BooleanValue | undefined) { this._s(':invalidateContentOnDrop', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the Menu Class. Serialized as `mso:menu` */
export class Menu extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | UnsizedSplitButton | UnsizedMenu | UnsizedDynamicMenu> {

    public static override _Q = 'mso:menu';
    public static override _A = [':size',':getSize',':itemSize',':description',':getDescription',':id',':idQ',':idMso',':tag',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** size. Serialized as `:size` */
    public get size(): SizeValues | undefined { return this._g(':size'); }
    public set size(v: SizeValues | undefined) { this._s(':size', v); }
    /** getSize. Serialized as `:getSize` */
    public get getSize(): StringValue | undefined { return this._g(':getSize'); }
    public set getSize(v: StringValue | undefined) { this._s(':getSize', v); }
    /** itemSize. Serialized as `:itemSize` */
    public get itemSize(): ItemSizeValues | undefined { return this._g(':itemSize'); }
    public set itemSize(v: ItemSizeValues | undefined) { this._s(':itemSize', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the Gallery Class. Serialized as `mso:gallery` */
export class Gallery extends OxmlCompositeElement<Item | UnsizedButton> {

    public static override _Q = 'mso:gallery';
    public static override _A = [':size',':getSize',':description',':getDescription',':invalidateContentOnDrop',':columns',':rows',':itemWidth',':itemHeight',':getItemWidth',':getItemHeight',':showItemLabel',':onAction',':enabled',':getEnabled',':image',':imageMso',':getImage',':showItemImage',':getItemCount',':getItemLabel',':getItemScreentip',':getItemSupertip',':getItemImage',':getItemID',':sizeString',':getSelectedItemID',':getSelectedItemIndex',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** size. Serialized as `:size` */
    public get size(): SizeValues | undefined { return this._g(':size'); }
    public set size(v: SizeValues | undefined) { this._s(':size', v); }
    /** getSize. Serialized as `:getSize` */
    public get getSize(): StringValue | undefined { return this._g(':getSize'); }
    public set getSize(v: StringValue | undefined) { this._s(':getSize', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    public get invalidateContentOnDrop(): BooleanValue | undefined { return this._g(':invalidateContentOnDrop'); }
    public set invalidateContentOnDrop(v: BooleanValue | undefined) { this._s(':invalidateContentOnDrop', v); }
    /** columns. Serialized as `:columns` */
    public get columns(): IntegerValue | undefined { return this._g(':columns'); }
    public set columns(v: IntegerValue | undefined) { this._s(':columns', v); }
    /** rows. Serialized as `:rows` */
    public get rows(): IntegerValue | undefined { return this._g(':rows'); }
    public set rows(v: IntegerValue | undefined) { this._s(':rows', v); }
    /** itemWidth. Serialized as `:itemWidth` */
    public get itemWidth(): IntegerValue | undefined { return this._g(':itemWidth'); }
    public set itemWidth(v: IntegerValue | undefined) { this._s(':itemWidth', v); }
    /** itemHeight. Serialized as `:itemHeight` */
    public get itemHeight(): IntegerValue | undefined { return this._g(':itemHeight'); }
    public set itemHeight(v: IntegerValue | undefined) { this._s(':itemHeight', v); }
    /** getItemWidth. Serialized as `:getItemWidth` */
    public get getItemWidth(): StringValue | undefined { return this._g(':getItemWidth'); }
    public set getItemWidth(v: StringValue | undefined) { this._s(':getItemWidth', v); }
    /** getItemHeight. Serialized as `:getItemHeight` */
    public get getItemHeight(): StringValue | undefined { return this._g(':getItemHeight'); }
    public set getItemHeight(v: StringValue | undefined) { this._s(':getItemHeight', v); }
    /** showItemLabel. Serialized as `:showItemLabel` */
    public get showItemLabel(): BooleanValue | undefined { return this._g(':showItemLabel'); }
    public set showItemLabel(v: BooleanValue | undefined) { this._s(':showItemLabel', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** showItemImage. Serialized as `:showItemImage` */
    public get showItemImage(): BooleanValue | undefined { return this._g(':showItemImage'); }
    public set showItemImage(v: BooleanValue | undefined) { this._s(':showItemImage', v); }
    /** getItemCount. Serialized as `:getItemCount` */
    public get getItemCount(): StringValue | undefined { return this._g(':getItemCount'); }
    public set getItemCount(v: StringValue | undefined) { this._s(':getItemCount', v); }
    /** getItemLabel. Serialized as `:getItemLabel` */
    public get getItemLabel(): StringValue | undefined { return this._g(':getItemLabel'); }
    public set getItemLabel(v: StringValue | undefined) { this._s(':getItemLabel', v); }
    /** getItemScreentip. Serialized as `:getItemScreentip` */
    public get getItemScreentip(): StringValue | undefined { return this._g(':getItemScreentip'); }
    public set getItemScreentip(v: StringValue | undefined) { this._s(':getItemScreentip', v); }
    /** getItemSupertip. Serialized as `:getItemSupertip` */
    public get getItemSupertip(): StringValue | undefined { return this._g(':getItemSupertip'); }
    public set getItemSupertip(v: StringValue | undefined) { this._s(':getItemSupertip', v); }
    /** getItemImage. Serialized as `:getItemImage` */
    public get getItemImage(): StringValue | undefined { return this._g(':getItemImage'); }
    public set getItemImage(v: StringValue | undefined) { this._s(':getItemImage', v); }
    /** getItemID. Serialized as `:getItemID` */
    public get getItemID(): StringValue | undefined { return this._g(':getItemID'); }
    public set getItemID(v: StringValue | undefined) { this._s(':getItemID', v); }
    /** sizeString. Serialized as `:sizeString` */
    public get sizeString(): StringValue | undefined { return this._g(':sizeString'); }
    public set sizeString(v: StringValue | undefined) { this._s(':sizeString', v); }
    /** getSelectedItemID. Serialized as `:getSelectedItemID` */
    public get getSelectedItemID(): StringValue | undefined { return this._g(':getSelectedItemID'); }
    public set getSelectedItemID(v: StringValue | undefined) { this._s(':getSelectedItemID', v); }
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    public get getSelectedItemIndex(): StringValue | undefined { return this._g(':getSelectedItemIndex'); }
    public set getSelectedItemIndex(v: StringValue | undefined) { this._s(':getSelectedItemIndex', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the DropDown Class. Serialized as `mso:dropDown` */
export class DropDown extends OxmlCompositeElement<Item | UnsizedButton> {

    public static override _Q = 'mso:dropDown';
    public static override _A = [':onAction',':enabled',':getEnabled',':image',':imageMso',':getImage',':showItemImage',':getItemCount',':getItemLabel',':getItemScreentip',':getItemSupertip',':getItemImage',':getItemID',':sizeString',':getSelectedItemID',':getSelectedItemIndex',':showItemLabel',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** showItemImage. Serialized as `:showItemImage` */
    public get showItemImage(): BooleanValue | undefined { return this._g(':showItemImage'); }
    public set showItemImage(v: BooleanValue | undefined) { this._s(':showItemImage', v); }
    /** getItemCount. Serialized as `:getItemCount` */
    public get getItemCount(): StringValue | undefined { return this._g(':getItemCount'); }
    public set getItemCount(v: StringValue | undefined) { this._s(':getItemCount', v); }
    /** getItemLabel. Serialized as `:getItemLabel` */
    public get getItemLabel(): StringValue | undefined { return this._g(':getItemLabel'); }
    public set getItemLabel(v: StringValue | undefined) { this._s(':getItemLabel', v); }
    /** getItemScreentip. Serialized as `:getItemScreentip` */
    public get getItemScreentip(): StringValue | undefined { return this._g(':getItemScreentip'); }
    public set getItemScreentip(v: StringValue | undefined) { this._s(':getItemScreentip', v); }
    /** getItemSupertip. Serialized as `:getItemSupertip` */
    public get getItemSupertip(): StringValue | undefined { return this._g(':getItemSupertip'); }
    public set getItemSupertip(v: StringValue | undefined) { this._s(':getItemSupertip', v); }
    /** getItemImage. Serialized as `:getItemImage` */
    public get getItemImage(): StringValue | undefined { return this._g(':getItemImage'); }
    public set getItemImage(v: StringValue | undefined) { this._s(':getItemImage', v); }
    /** getItemID. Serialized as `:getItemID` */
    public get getItemID(): StringValue | undefined { return this._g(':getItemID'); }
    public set getItemID(v: StringValue | undefined) { this._s(':getItemID', v); }
    /** sizeString. Serialized as `:sizeString` */
    public get sizeString(): StringValue | undefined { return this._g(':sizeString'); }
    public set sizeString(v: StringValue | undefined) { this._s(':sizeString', v); }
    /** getSelectedItemID. Serialized as `:getSelectedItemID` */
    public get getSelectedItemID(): StringValue | undefined { return this._g(':getSelectedItemID'); }
    public set getSelectedItemID(v: StringValue | undefined) { this._s(':getSelectedItemID', v); }
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    public get getSelectedItemIndex(): StringValue | undefined { return this._g(':getSelectedItemIndex'); }
    public set getSelectedItemIndex(v: StringValue | undefined) { this._s(':getSelectedItemIndex', v); }
    /** showItemLabel. Serialized as `:showItemLabel` */
    public get showItemLabel(): BooleanValue | undefined { return this._g(':showItemLabel'); }
    public set showItemLabel(v: BooleanValue | undefined) { this._s(':showItemLabel', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the ComboBox Class. Serialized as `mso:comboBox` */
export class ComboBox extends OxmlCompositeElement<Item> {

    public static override _Q = 'mso:comboBox';
    public static override _A = [':showItemImage',':getItemCount',':getItemLabel',':getItemScreentip',':getItemSupertip',':getItemImage',':getItemID',':sizeString',':invalidateContentOnDrop',':enabled',':getEnabled',':image',':imageMso',':getImage',':maxLength',':getText',':onChange',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** showItemImage. Serialized as `:showItemImage` */
    public get showItemImage(): BooleanValue | undefined { return this._g(':showItemImage'); }
    public set showItemImage(v: BooleanValue | undefined) { this._s(':showItemImage', v); }
    /** getItemCount. Serialized as `:getItemCount` */
    public get getItemCount(): StringValue | undefined { return this._g(':getItemCount'); }
    public set getItemCount(v: StringValue | undefined) { this._s(':getItemCount', v); }
    /** getItemLabel. Serialized as `:getItemLabel` */
    public get getItemLabel(): StringValue | undefined { return this._g(':getItemLabel'); }
    public set getItemLabel(v: StringValue | undefined) { this._s(':getItemLabel', v); }
    /** getItemScreentip. Serialized as `:getItemScreentip` */
    public get getItemScreentip(): StringValue | undefined { return this._g(':getItemScreentip'); }
    public set getItemScreentip(v: StringValue | undefined) { this._s(':getItemScreentip', v); }
    /** getItemSupertip. Serialized as `:getItemSupertip` */
    public get getItemSupertip(): StringValue | undefined { return this._g(':getItemSupertip'); }
    public set getItemSupertip(v: StringValue | undefined) { this._s(':getItemSupertip', v); }
    /** getItemImage. Serialized as `:getItemImage` */
    public get getItemImage(): StringValue | undefined { return this._g(':getItemImage'); }
    public set getItemImage(v: StringValue | undefined) { this._s(':getItemImage', v); }
    /** getItemID. Serialized as `:getItemID` */
    public get getItemID(): StringValue | undefined { return this._g(':getItemID'); }
    public set getItemID(v: StringValue | undefined) { this._s(':getItemID', v); }
    /** sizeString. Serialized as `:sizeString` */
    public get sizeString(): StringValue | undefined { return this._g(':sizeString'); }
    public set sizeString(v: StringValue | undefined) { this._s(':sizeString', v); }
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    public get invalidateContentOnDrop(): BooleanValue | undefined { return this._g(':invalidateContentOnDrop'); }
    public set invalidateContentOnDrop(v: BooleanValue | undefined) { this._s(':invalidateContentOnDrop', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** maxLength. Serialized as `:maxLength` */
    public get maxLength(): IntegerValue | undefined { return this._g(':maxLength'); }
    public set maxLength(v: IntegerValue | undefined) { this._s(':maxLength', v); }
    /** getText. Serialized as `:getText` */
    public get getText(): StringValue | undefined { return this._g(':getText'); }
    public set getText(v: StringValue | undefined) { this._s(':getText', v); }
    /** onChange. Serialized as `:onChange` */
    public get onChange(): StringValue | undefined { return this._g(':onChange'); }
    public set onChange(v: StringValue | undefined) { this._s(':onChange', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the EditBox Class. Serialized as `mso:editBox` */
export class EditBox extends OxmlLeafElement {

    public static override _Q = 'mso:editBox';
    public static override _A = [':enabled',':getEnabled',':image',':imageMso',':getImage',':maxLength',':getText',':onChange',':sizeString',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** maxLength. Serialized as `:maxLength` */
    public get maxLength(): IntegerValue | undefined { return this._g(':maxLength'); }
    public set maxLength(v: IntegerValue | undefined) { this._s(':maxLength', v); }
    /** getText. Serialized as `:getText` */
    public get getText(): StringValue | undefined { return this._g(':getText'); }
    public set getText(v: StringValue | undefined) { this._s(':getText', v); }
    /** onChange. Serialized as `:onChange` */
    public get onChange(): StringValue | undefined { return this._g(':onChange'); }
    public set onChange(v: StringValue | undefined) { this._s(':onChange', v); }
    /** sizeString. Serialized as `:sizeString` */
    public get sizeString(): StringValue | undefined { return this._g(':sizeString'); }
    public set sizeString(v: StringValue | undefined) { this._s(':sizeString', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the ToggleButton Class. Serialized as `mso:toggleButton` */
export class ToggleButton extends OxmlLeafElement {

    public static override _Q = 'mso:toggleButton';
    public static override _A = [':size',':getSize',':getPressed',':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** size. Serialized as `:size` */
    public get size(): SizeValues | undefined { return this._g(':size'); }
    public set size(v: SizeValues | undefined) { this._s(':size', v); }
    /** getSize. Serialized as `:getSize` */
    public get getSize(): StringValue | undefined { return this._g(':getSize'); }
    public set getSize(v: StringValue | undefined) { this._s(':getSize', v); }
    /** getPressed. Serialized as `:getPressed` */
    public get getPressed(): StringValue | undefined { return this._g(':getPressed'); }
    public set getPressed(v: StringValue | undefined) { this._s(':getPressed', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the Button Class. Serialized as `mso:button` */
export class Button extends OxmlLeafElement {

    public static override _Q = 'mso:button';
    public static override _A = [':size',':getSize',':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** size. Serialized as `:size` */
    public get size(): SizeValues | undefined { return this._g(':size'); }
    public set size(v: SizeValues | undefined) { this._s(':size', v); }
    /** getSize. Serialized as `:getSize` */
    public get getSize(): StringValue | undefined { return this._g(':getSize'); }
    public set getSize(v: StringValue | undefined) { this._s(':getSize', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the TextLabel Class. Serialized as `mso:labelControl` */
export class TextLabel extends OxmlLeafElement {

    public static override _Q = 'mso:labelControl';
    public static override _A = [':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':showLabel',':getShowLabel',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }

}
/** Defines the ControlClone Class. Serialized as `mso:control` */
export class ControlClone extends OxmlLeafElement {

    public static override _Q = 'mso:control';
    public static override _A = [':size',':getSize',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** size. Serialized as `:size` */
    public get size(): SizeValues | undefined { return this._g(':size'); }
    public set size(v: SizeValues | undefined) { this._s(':size', v); }
    /** getSize. Serialized as `:getSize` */
    public get getSize(): StringValue | undefined { return this._g(':getSize'); }
    public set getSize(v: StringValue | undefined) { this._s(':getSize', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the MenuWithTitle Class. Serialized as `mso:menu` */
export class MenuWithTitle extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | SplitButtonWithTitle | MenuWithTitle | UnsizedDynamicMenu> {

    public static override _Q = 'mso:menu';
    public static override _A = [':id',':idQ',':idMso',':tag',':itemSize',':title',':getTitle',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** itemSize. Serialized as `:itemSize` */
    public get itemSize(): ItemSizeValues | undefined { return this._g(':itemSize'); }
    public set itemSize(v: ItemSizeValues | undefined) { this._s(':itemSize', v); }
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** getTitle. Serialized as `:getTitle` */
    public get getTitle(): StringValue | undefined { return this._g(':getTitle'); }
    public set getTitle(v: StringValue | undefined) { this._s(':getTitle', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the SplitButtonWithTitle Class. Serialized as `mso:splitButton` */
export class SplitButtonWithTitle extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | MenuWithTitle> {

    public static override _Q = 'mso:splitButton';
    public static override _A = [':enabled',':getEnabled',':id',':idQ',':idMso',':tag',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',];
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }

}
/** Defines the UnsizedDynamicMenu Class. Serialized as `mso:dynamicMenu` */
export class UnsizedDynamicMenu extends OxmlLeafElement {

    public static override _Q = 'mso:dynamicMenu';
    public static override _A = [':description',':getDescription',':id',':idQ',':idMso',':tag',':getContent',':invalidateContentOnDrop',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** getContent. Serialized as `:getContent` */
    public get getContent(): StringValue | undefined { return this._g(':getContent'); }
    public set getContent(v: StringValue | undefined) { this._s(':getContent', v); }
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    public get invalidateContentOnDrop(): BooleanValue | undefined { return this._g(':invalidateContentOnDrop'); }
    public set invalidateContentOnDrop(v: BooleanValue | undefined) { this._s(':invalidateContentOnDrop', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the UnsizedMenu Class. Serialized as `mso:menu` */
export class UnsizedMenu extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | UnsizedSplitButton | UnsizedMenu | UnsizedDynamicMenu> {

    public static override _Q = 'mso:menu';
    public static override _A = [':itemSize',':description',':getDescription',':id',':idQ',':idMso',':tag',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** itemSize. Serialized as `:itemSize` */
    public get itemSize(): ItemSizeValues | undefined { return this._g(':itemSize'); }
    public set itemSize(v: ItemSizeValues | undefined) { this._s(':itemSize', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the UnsizedSplitButton Class. Serialized as `mso:splitButton` */
export class UnsizedSplitButton extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | UnsizedMenu> {

    public static override _Q = 'mso:splitButton';
    public static override _A = [':enabled',':getEnabled',':id',':idQ',':idMso',':tag',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',];
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }

}
/** Defines the MenuSeparator Class. Serialized as `mso:menuSeparator` */
export class MenuSeparator extends OxmlLeafElement {

    public static override _Q = 'mso:menuSeparator';
    public static override _A = [':id',':idQ',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':title',':getTitle',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** getTitle. Serialized as `:getTitle` */
    public get getTitle(): StringValue | undefined { return this._g(':getTitle'); }
    public set getTitle(v: StringValue | undefined) { this._s(':getTitle', v); }

}
/** Defines the UnsizedToggleButton Class. Serialized as `mso:toggleButton` */
export class UnsizedToggleButton extends OxmlLeafElement {

    public static override _Q = 'mso:toggleButton';
    public static override _A = [':getPressed',':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** getPressed. Serialized as `:getPressed` */
    public get getPressed(): StringValue | undefined { return this._g(':getPressed'); }
    public set getPressed(v: StringValue | undefined) { this._s(':getPressed', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the UnsizedGallery Class. Serialized as `mso:gallery` */
export class UnsizedGallery extends OxmlCompositeElement<Item | UnsizedButton> {

    public static override _Q = 'mso:gallery';
    public static override _A = [':description',':getDescription',':invalidateContentOnDrop',':columns',':rows',':itemWidth',':itemHeight',':getItemWidth',':getItemHeight',':showItemLabel',':onAction',':enabled',':getEnabled',':image',':imageMso',':getImage',':showItemImage',':getItemCount',':getItemLabel',':getItemScreentip',':getItemSupertip',':getItemImage',':getItemID',':sizeString',':getSelectedItemID',':getSelectedItemIndex',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    public get invalidateContentOnDrop(): BooleanValue | undefined { return this._g(':invalidateContentOnDrop'); }
    public set invalidateContentOnDrop(v: BooleanValue | undefined) { this._s(':invalidateContentOnDrop', v); }
    /** columns. Serialized as `:columns` */
    public get columns(): IntegerValue | undefined { return this._g(':columns'); }
    public set columns(v: IntegerValue | undefined) { this._s(':columns', v); }
    /** rows. Serialized as `:rows` */
    public get rows(): IntegerValue | undefined { return this._g(':rows'); }
    public set rows(v: IntegerValue | undefined) { this._s(':rows', v); }
    /** itemWidth. Serialized as `:itemWidth` */
    public get itemWidth(): IntegerValue | undefined { return this._g(':itemWidth'); }
    public set itemWidth(v: IntegerValue | undefined) { this._s(':itemWidth', v); }
    /** itemHeight. Serialized as `:itemHeight` */
    public get itemHeight(): IntegerValue | undefined { return this._g(':itemHeight'); }
    public set itemHeight(v: IntegerValue | undefined) { this._s(':itemHeight', v); }
    /** getItemWidth. Serialized as `:getItemWidth` */
    public get getItemWidth(): StringValue | undefined { return this._g(':getItemWidth'); }
    public set getItemWidth(v: StringValue | undefined) { this._s(':getItemWidth', v); }
    /** getItemHeight. Serialized as `:getItemHeight` */
    public get getItemHeight(): StringValue | undefined { return this._g(':getItemHeight'); }
    public set getItemHeight(v: StringValue | undefined) { this._s(':getItemHeight', v); }
    /** showItemLabel. Serialized as `:showItemLabel` */
    public get showItemLabel(): BooleanValue | undefined { return this._g(':showItemLabel'); }
    public set showItemLabel(v: BooleanValue | undefined) { this._s(':showItemLabel', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** showItemImage. Serialized as `:showItemImage` */
    public get showItemImage(): BooleanValue | undefined { return this._g(':showItemImage'); }
    public set showItemImage(v: BooleanValue | undefined) { this._s(':showItemImage', v); }
    /** getItemCount. Serialized as `:getItemCount` */
    public get getItemCount(): StringValue | undefined { return this._g(':getItemCount'); }
    public set getItemCount(v: StringValue | undefined) { this._s(':getItemCount', v); }
    /** getItemLabel. Serialized as `:getItemLabel` */
    public get getItemLabel(): StringValue | undefined { return this._g(':getItemLabel'); }
    public set getItemLabel(v: StringValue | undefined) { this._s(':getItemLabel', v); }
    /** getItemScreentip. Serialized as `:getItemScreentip` */
    public get getItemScreentip(): StringValue | undefined { return this._g(':getItemScreentip'); }
    public set getItemScreentip(v: StringValue | undefined) { this._s(':getItemScreentip', v); }
    /** getItemSupertip. Serialized as `:getItemSupertip` */
    public get getItemSupertip(): StringValue | undefined { return this._g(':getItemSupertip'); }
    public set getItemSupertip(v: StringValue | undefined) { this._s(':getItemSupertip', v); }
    /** getItemImage. Serialized as `:getItemImage` */
    public get getItemImage(): StringValue | undefined { return this._g(':getItemImage'); }
    public set getItemImage(v: StringValue | undefined) { this._s(':getItemImage', v); }
    /** getItemID. Serialized as `:getItemID` */
    public get getItemID(): StringValue | undefined { return this._g(':getItemID'); }
    public set getItemID(v: StringValue | undefined) { this._s(':getItemID', v); }
    /** sizeString. Serialized as `:sizeString` */
    public get sizeString(): StringValue | undefined { return this._g(':sizeString'); }
    public set sizeString(v: StringValue | undefined) { this._s(':sizeString', v); }
    /** getSelectedItemID. Serialized as `:getSelectedItemID` */
    public get getSelectedItemID(): StringValue | undefined { return this._g(':getSelectedItemID'); }
    public set getSelectedItemID(v: StringValue | undefined) { this._s(':getSelectedItemID', v); }
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    public get getSelectedItemIndex(): StringValue | undefined { return this._g(':getSelectedItemIndex'); }
    public set getSelectedItemIndex(v: StringValue | undefined) { this._s(':getSelectedItemIndex', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the CheckBox Class. Serialized as `mso:checkBox` */
export class CheckBox extends OxmlLeafElement {

    public static override _Q = 'mso:checkBox';
    public static override _A = [':getPressed',':onAction',':enabled',':getEnabled',':description',':getDescription',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',];
    /** getPressed. Serialized as `:getPressed` */
    public get getPressed(): StringValue | undefined { return this._g(':getPressed'); }
    public set getPressed(v: StringValue | undefined) { this._s(':getPressed', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }

}
/** Defines the UnsizedButton Class. Serialized as `mso:button` */
export class UnsizedButton extends OxmlLeafElement {

    public static override _Q = 'mso:button';
    public static override _A = [':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':idMso',':tag',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}
/** Defines the UnsizedControlClone Class. Serialized as `mso:control` */
export class UnsizedControlClone extends OxmlLeafElement {

    public static override _Q = 'mso:control';
    public static override _A = [':idQ',':idMso',':tag',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** idQ. Serialized as `:idQ` */
    public get idQ(): StringValue | undefined { return this._g(':idQ'); }
    public set idQ(v: StringValue | undefined) { this._s(':idQ', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** screentip. Serialized as `:screentip` */
    public get screentip(): StringValue | undefined { return this._g(':screentip'); }
    public set screentip(v: StringValue | undefined) { this._s(':screentip', v); }
    /** getScreentip. Serialized as `:getScreentip` */
    public get getScreentip(): StringValue | undefined { return this._g(':getScreentip'); }
    public set getScreentip(v: StringValue | undefined) { this._s(':getScreentip', v); }
    /** supertip. Serialized as `:supertip` */
    public get supertip(): StringValue | undefined { return this._g(':supertip'); }
    public set supertip(v: StringValue | undefined) { this._s(':supertip', v); }
    /** getSupertip. Serialized as `:getSupertip` */
    public get getSupertip(): StringValue | undefined { return this._g(':getSupertip'); }
    public set getSupertip(v: StringValue | undefined) { this._s(':getSupertip', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQ(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQ(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQ(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQ(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** showImage. Serialized as `:showImage` */
    public get showImage(): BooleanValue | undefined { return this._g(':showImage'); }
    public set showImage(v: BooleanValue | undefined) { this._s(':showImage', v); }
    /** getShowImage. Serialized as `:getShowImage` */
    public get getShowImage(): StringValue | undefined { return this._g(':getShowImage'); }
    public set getShowImage(v: StringValue | undefined) { this._s(':getShowImage', v); }

}

export function initOfficeCustomUINamespace() {
    Ribbon._C = {
        'mso:officeMenu': OfficeMenu,
        'mso:qat': QuickAccessToolbar,
        'mso:tabs': Tabs,
        'mso:contextualTabs': ContextualTabSets,
    };
    Ribbon._D = {
        ':startFromScratch': new OxmlAttr(':startFromScratch', OxmlType.BooleanValue),
    };
    RepurposedCommands._C = {
        'mso:command': RepurposedCommand,
    };
    ContextualTabSets._C = {
        'mso:tabSet': ContextualTabSet,
    };
    Tabs._C = {
        'mso:tab': Tab,
    };
    QuickAccessToolbar._C = {
        'mso:sharedControls': SharedQatControls,
        'mso:documentControls': DocumentSpecificQuickAccessToolbarControls,
    };
    OfficeMenu._C = {
        'mso:control': UnsizedControlClone,
        'mso:button': UnsizedButton,
        'mso:checkBox': CheckBox,
        'mso:gallery': UnsizedGallery,
        'mso:toggleButton': UnsizedToggleButton,
        'mso:menuSeparator': MenuSeparator,
        'mso:splitButton': SplitButtonWithTitle,
        'mso:menu': MenuWithTitle,
        'mso:dynamicMenu': UnsizedDynamicMenu,
    };
    RepurposedCommand._D = {
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
    };
    ContextualTabSet._C = {
        'mso:tab': Tab,
    };
    ContextualTabSet._D = {
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
    };
    Tab._C = {
        'mso:group': Group,
    };
    Tab._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    QatItemsType._C = {
        'mso:control': QuickAccessToolbarControlClone,
        'mso:button': UnsizedButton,
        'mso:separator': VerticalSeparator,
    };
    DocumentSpecificQuickAccessToolbarControls._C = {
        'mso:control': QuickAccessToolbarControlClone,
        'mso:button': UnsizedButton,
        'mso:separator': VerticalSeparator,
    };
    SharedQatControls._C = {
        'mso:control': QuickAccessToolbarControlClone,
        'mso:button': UnsizedButton,
        'mso:separator': VerticalSeparator,
    };
    QuickAccessToolbarControlClone._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    Group._C = {
        'mso:control': ControlClone,
        'mso:labelControl': TextLabel,
        'mso:button': Button,
        'mso:toggleButton': ToggleButton,
        'mso:checkBox': CheckBox,
        'mso:editBox': EditBox,
        'mso:comboBox': ComboBox,
        'mso:dropDown': DropDown,
        'mso:gallery': Gallery,
        'mso:menu': Menu,
        'mso:dynamicMenu': DynamicMenu,
        'mso:splitButton': SplitButton,
        'mso:box': Box,
        'mso:buttonGroup': ButtonGroup,
        'mso:separator': VerticalSeparator,
        'mso:dialogBoxLauncher': DialogBoxLauncher,
    };
    Group._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    DialogBoxLauncher._C = {
        'mso:button': UnsizedButton,
    };
    VerticalSeparator._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
    };
    VisibleToggleButton._D = {
        ':getPressed': new OxmlAttr(':getPressed', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    VisibleButton._D = {
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    Item._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
    };
    CustomUI._C = {
        'mso:commands': RepurposedCommands,
        'mso:ribbon': Ribbon,
    };
    CustomUI._D = {
        ':onLoad': new OxmlAttr(':onLoad', OxmlType.StringValue),
        ':loadImage': new OxmlAttr(':loadImage', OxmlType.StringValue),
    };
    MenuRoot._C = {
        'mso:control': UnsizedControlClone,
        'mso:button': UnsizedButton,
        'mso:checkBox': CheckBox,
        'mso:gallery': UnsizedGallery,
        'mso:toggleButton': UnsizedToggleButton,
        'mso:menuSeparator': MenuSeparator,
        'mso:splitButton': UnsizedSplitButton,
        'mso:menu': UnsizedMenu,
        'mso:dynamicMenu': UnsizedDynamicMenu,
    };
    MenuRoot._D = {
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':getTitle': new OxmlAttr(':getTitle', OxmlType.StringValue),
        ':itemSize': new OxmlAttr(':itemSize', OxmlType.EnumValue, ItemSizeValuesArray),
    };
    ButtonGroup._C = {
        'mso:control': UnsizedControlClone,
        'mso:button': UnsizedButton,
        'mso:toggleButton': UnsizedToggleButton,
        'mso:gallery': UnsizedGallery,
        'mso:menu': UnsizedMenu,
        'mso:dynamicMenu': UnsizedDynamicMenu,
        'mso:splitButton': UnsizedSplitButton,
    };
    ButtonGroup._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
    };
    Box._C = {
        'mso:control': ControlClone,
        'mso:labelControl': TextLabel,
        'mso:button': Button,
        'mso:toggleButton': ToggleButton,
        'mso:checkBox': CheckBox,
        'mso:editBox': EditBox,
        'mso:comboBox': ComboBox,
        'mso:dropDown': DropDown,
        'mso:gallery': Gallery,
        'mso:menu': Menu,
        'mso:dynamicMenu': DynamicMenu,
        'mso:splitButton': SplitButton,
        'mso:box': Box,
        'mso:buttonGroup': ButtonGroup,
    };
    Box._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':boxStyle': new OxmlAttr(':boxStyle', OxmlType.EnumValue, BoxStyleValuesArray),
    };
    SplitButton._C = {
        'mso:button': VisibleButton,
        'mso:toggleButton': VisibleToggleButton,
        'mso:menu': UnsizedMenu,
    };
    SplitButton._D = {
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
    };
    DynamicMenu._D = {
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':getContent': new OxmlAttr(':getContent', OxmlType.StringValue),
        ':invalidateContentOnDrop': new OxmlAttr(':invalidateContentOnDrop', OxmlType.BooleanValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    Menu._C = {
        'mso:control': UnsizedControlClone,
        'mso:button': UnsizedButton,
        'mso:checkBox': CheckBox,
        'mso:gallery': UnsizedGallery,
        'mso:toggleButton': UnsizedToggleButton,
        'mso:menuSeparator': MenuSeparator,
        'mso:splitButton': UnsizedSplitButton,
        'mso:menu': UnsizedMenu,
        'mso:dynamicMenu': UnsizedDynamicMenu,
    };
    Menu._D = {
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':itemSize': new OxmlAttr(':itemSize', OxmlType.EnumValue, ItemSizeValuesArray),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    Gallery._C = {
        'mso:item': Item,
        'mso:button': UnsizedButton,
    };
    Gallery._D = {
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':invalidateContentOnDrop': new OxmlAttr(':invalidateContentOnDrop', OxmlType.BooleanValue),
        ':columns': new OxmlAttr(':columns', OxmlType.IntegerValue),
        ':rows': new OxmlAttr(':rows', OxmlType.IntegerValue),
        ':itemWidth': new OxmlAttr(':itemWidth', OxmlType.IntegerValue),
        ':itemHeight': new OxmlAttr(':itemHeight', OxmlType.IntegerValue),
        ':getItemWidth': new OxmlAttr(':getItemWidth', OxmlType.StringValue),
        ':getItemHeight': new OxmlAttr(':getItemHeight', OxmlType.StringValue),
        ':showItemLabel': new OxmlAttr(':showItemLabel', OxmlType.BooleanValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':showItemImage': new OxmlAttr(':showItemImage', OxmlType.BooleanValue),
        ':getItemCount': new OxmlAttr(':getItemCount', OxmlType.StringValue),
        ':getItemLabel': new OxmlAttr(':getItemLabel', OxmlType.StringValue),
        ':getItemScreentip': new OxmlAttr(':getItemScreentip', OxmlType.StringValue),
        ':getItemSupertip': new OxmlAttr(':getItemSupertip', OxmlType.StringValue),
        ':getItemImage': new OxmlAttr(':getItemImage', OxmlType.StringValue),
        ':getItemID': new OxmlAttr(':getItemID', OxmlType.StringValue),
        ':sizeString': new OxmlAttr(':sizeString', OxmlType.StringValue),
        ':getSelectedItemID': new OxmlAttr(':getSelectedItemID', OxmlType.StringValue),
        ':getSelectedItemIndex': new OxmlAttr(':getSelectedItemIndex', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    DropDown._C = {
        'mso:item': Item,
        'mso:button': UnsizedButton,
    };
    DropDown._D = {
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':showItemImage': new OxmlAttr(':showItemImage', OxmlType.BooleanValue),
        ':getItemCount': new OxmlAttr(':getItemCount', OxmlType.StringValue),
        ':getItemLabel': new OxmlAttr(':getItemLabel', OxmlType.StringValue),
        ':getItemScreentip': new OxmlAttr(':getItemScreentip', OxmlType.StringValue),
        ':getItemSupertip': new OxmlAttr(':getItemSupertip', OxmlType.StringValue),
        ':getItemImage': new OxmlAttr(':getItemImage', OxmlType.StringValue),
        ':getItemID': new OxmlAttr(':getItemID', OxmlType.StringValue),
        ':sizeString': new OxmlAttr(':sizeString', OxmlType.StringValue),
        ':getSelectedItemID': new OxmlAttr(':getSelectedItemID', OxmlType.StringValue),
        ':getSelectedItemIndex': new OxmlAttr(':getSelectedItemIndex', OxmlType.StringValue),
        ':showItemLabel': new OxmlAttr(':showItemLabel', OxmlType.BooleanValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    ComboBox._C = {
        'mso:item': Item,
    };
    ComboBox._D = {
        ':showItemImage': new OxmlAttr(':showItemImage', OxmlType.BooleanValue),
        ':getItemCount': new OxmlAttr(':getItemCount', OxmlType.StringValue),
        ':getItemLabel': new OxmlAttr(':getItemLabel', OxmlType.StringValue),
        ':getItemScreentip': new OxmlAttr(':getItemScreentip', OxmlType.StringValue),
        ':getItemSupertip': new OxmlAttr(':getItemSupertip', OxmlType.StringValue),
        ':getItemImage': new OxmlAttr(':getItemImage', OxmlType.StringValue),
        ':getItemID': new OxmlAttr(':getItemID', OxmlType.StringValue),
        ':sizeString': new OxmlAttr(':sizeString', OxmlType.StringValue),
        ':invalidateContentOnDrop': new OxmlAttr(':invalidateContentOnDrop', OxmlType.BooleanValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':maxLength': new OxmlAttr(':maxLength', OxmlType.IntegerValue),
        ':getText': new OxmlAttr(':getText', OxmlType.StringValue),
        ':onChange': new OxmlAttr(':onChange', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    EditBox._D = {
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':maxLength': new OxmlAttr(':maxLength', OxmlType.IntegerValue),
        ':getText': new OxmlAttr(':getText', OxmlType.StringValue),
        ':onChange': new OxmlAttr(':onChange', OxmlType.StringValue),
        ':sizeString': new OxmlAttr(':sizeString', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    ToggleButton._D = {
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':getPressed': new OxmlAttr(':getPressed', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    Button._D = {
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    TextLabel._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
    };
    ControlClone._D = {
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    MenuWithTitle._C = {
        'mso:control': UnsizedControlClone,
        'mso:button': UnsizedButton,
        'mso:checkBox': CheckBox,
        'mso:gallery': UnsizedGallery,
        'mso:toggleButton': UnsizedToggleButton,
        'mso:menuSeparator': MenuSeparator,
        'mso:splitButton': SplitButtonWithTitle,
        'mso:menu': MenuWithTitle,
        'mso:dynamicMenu': UnsizedDynamicMenu,
    };
    MenuWithTitle._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':itemSize': new OxmlAttr(':itemSize', OxmlType.EnumValue, ItemSizeValuesArray),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':getTitle': new OxmlAttr(':getTitle', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    SplitButtonWithTitle._C = {
        'mso:button': VisibleButton,
        'mso:toggleButton': VisibleToggleButton,
        'mso:menu': MenuWithTitle,
    };
    SplitButtonWithTitle._D = {
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
    };
    UnsizedDynamicMenu._D = {
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':getContent': new OxmlAttr(':getContent', OxmlType.StringValue),
        ':invalidateContentOnDrop': new OxmlAttr(':invalidateContentOnDrop', OxmlType.BooleanValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    UnsizedMenu._C = {
        'mso:control': UnsizedControlClone,
        'mso:button': UnsizedButton,
        'mso:checkBox': CheckBox,
        'mso:gallery': UnsizedGallery,
        'mso:toggleButton': UnsizedToggleButton,
        'mso:menuSeparator': MenuSeparator,
        'mso:splitButton': UnsizedSplitButton,
        'mso:menu': UnsizedMenu,
        'mso:dynamicMenu': UnsizedDynamicMenu,
    };
    UnsizedMenu._D = {
        ':itemSize': new OxmlAttr(':itemSize', OxmlType.EnumValue, ItemSizeValuesArray),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    UnsizedSplitButton._C = {
        'mso:button': VisibleButton,
        'mso:toggleButton': VisibleToggleButton,
        'mso:menu': UnsizedMenu,
    };
    UnsizedSplitButton._D = {
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
    };
    MenuSeparator._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':getTitle': new OxmlAttr(':getTitle', OxmlType.StringValue),
    };
    UnsizedToggleButton._D = {
        ':getPressed': new OxmlAttr(':getPressed', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    UnsizedGallery._C = {
        'mso:item': Item,
        'mso:button': UnsizedButton,
    };
    UnsizedGallery._D = {
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':invalidateContentOnDrop': new OxmlAttr(':invalidateContentOnDrop', OxmlType.BooleanValue),
        ':columns': new OxmlAttr(':columns', OxmlType.IntegerValue),
        ':rows': new OxmlAttr(':rows', OxmlType.IntegerValue),
        ':itemWidth': new OxmlAttr(':itemWidth', OxmlType.IntegerValue),
        ':itemHeight': new OxmlAttr(':itemHeight', OxmlType.IntegerValue),
        ':getItemWidth': new OxmlAttr(':getItemWidth', OxmlType.StringValue),
        ':getItemHeight': new OxmlAttr(':getItemHeight', OxmlType.StringValue),
        ':showItemLabel': new OxmlAttr(':showItemLabel', OxmlType.BooleanValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':showItemImage': new OxmlAttr(':showItemImage', OxmlType.BooleanValue),
        ':getItemCount': new OxmlAttr(':getItemCount', OxmlType.StringValue),
        ':getItemLabel': new OxmlAttr(':getItemLabel', OxmlType.StringValue),
        ':getItemScreentip': new OxmlAttr(':getItemScreentip', OxmlType.StringValue),
        ':getItemSupertip': new OxmlAttr(':getItemSupertip', OxmlType.StringValue),
        ':getItemImage': new OxmlAttr(':getItemImage', OxmlType.StringValue),
        ':getItemID': new OxmlAttr(':getItemID', OxmlType.StringValue),
        ':sizeString': new OxmlAttr(':sizeString', OxmlType.StringValue),
        ':getSelectedItemID': new OxmlAttr(':getSelectedItemID', OxmlType.StringValue),
        ':getSelectedItemIndex': new OxmlAttr(':getSelectedItemIndex', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    CheckBox._D = {
        ':getPressed': new OxmlAttr(':getPressed', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    UnsizedButton._D = {
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    UnsizedControlClone._D = {
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':showImage': new OxmlAttr(':showImage', OxmlType.BooleanValue),
        ':getShowImage': new OxmlAttr(':getShowImage', OxmlType.StringValue),
    };
    return {
        prefix: 'mso',
        xmlns: 'http://schemas.microsoft.com/office/2006/01/customui',
    };
}
