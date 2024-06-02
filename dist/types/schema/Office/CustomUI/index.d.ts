import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { IntegerValue } from '../../../framework/types/IntegerValue';
export declare enum SizeValues {
    /** undefined. Serialized value: `normal` */
    Normal = "normal",
    /** undefined. Serialized value: `large` */
    Large = "large"
}
export declare const SizeValuesArray: readonly [SizeValues.Normal, SizeValues.Large];
export declare enum ItemSizeValues {
    /** undefined. Serialized value: `normal` */
    Normal = "normal",
    /** undefined. Serialized value: `large` */
    Large = "large"
}
export declare const ItemSizeValuesArray: readonly [ItemSizeValues.Normal, ItemSizeValues.Large];
export declare enum BoxStyleValues {
    /** undefined. Serialized value: `horizontal` */
    Horizontal = "horizontal",
    /** undefined. Serialized value: `vertical` */
    Vertical = "vertical"
}
export declare const BoxStyleValuesArray: readonly [BoxStyleValues.Horizontal, BoxStyleValues.Vertical];
/** Defines the Ribbon Class. Serialized as `mso:ribbon` */
export declare class Ribbon extends OxmlCompositeElement<OfficeMenu | QuickAccessToolbar | Tabs | ContextualTabSets> {
    static _Q: string;
    static _A: string[];
    /** startFromScratch. Serialized as `:startFromScratch` */
    get startFromScratch(): BooleanValue | undefined;
    set startFromScratch(v: BooleanValue | undefined);
    /** Returns OfficeMenu. */
    get officeMenu(): OfficeMenu | undefined;
    /** Returns QuickAccessToolbar. */
    get quickAccessToolbar(): QuickAccessToolbar | undefined;
    /** Returns Tabs. */
    get tabs(): Tabs | undefined;
    /** Returns ContextualTabSets. */
    get contextualTabSets(): ContextualTabSets | undefined;
}
/** Defines the RepurposedCommands Class. Serialized as `mso:commands` */
export declare class RepurposedCommands extends OxmlCompositeElement<RepurposedCommand> {
    static _Q: string;
}
/** Defines the ContextualTabSets Class. Serialized as `mso:contextualTabs` */
export declare class ContextualTabSets extends OxmlCompositeElement<ContextualTabSet> {
    static _Q: string;
}
/** Defines the Tabs Class. Serialized as `mso:tabs` */
export declare class Tabs extends OxmlCompositeElement<Tab> {
    static _Q: string;
}
/** Defines the QuickAccessToolbar Class. Serialized as `mso:qat` */
export declare class QuickAccessToolbar extends OxmlCompositeElement<SharedQatControls | DocumentSpecificQuickAccessToolbarControls> {
    static _Q: string;
    /** Returns SharedQatControls. */
    get sharedQatControls(): SharedQatControls | undefined;
    /** Returns DocumentSpecificQuickAccessToolbarControls. */
    get documentSpecificQuickAccessToolbarControls(): DocumentSpecificQuickAccessToolbarControls | undefined;
}
/** Defines the OfficeMenu Class. Serialized as `mso:officeMenu` */
export declare class OfficeMenu extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | SplitButtonWithTitle | MenuWithTitle | UnsizedDynamicMenu> {
    static _Q: string;
}
/** Defines the RepurposedCommand Class. Serialized as `mso:command` */
export declare class RepurposedCommand extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
}
/** Defines the ContextualTabSet Class. Serialized as `mso:tabSet` */
export declare class ContextualTabSet extends OxmlCompositeElement<Tab> {
    static _Q: string;
    static _A: string[];
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
}
/** Defines the Tab Class. Serialized as `mso:tab` */
export declare class Tab extends OxmlCompositeElement<Group> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
}
/** Defines the QatItemsType Class. */
export declare abstract class QatItemsType extends OxmlCompositeElement<QuickAccessToolbarControlClone | UnsizedButton | VerticalSeparator> {
}
/** Defines the DocumentSpecificQuickAccessToolbarControls Class. Serialized as `mso:documentControls` */
export declare class DocumentSpecificQuickAccessToolbarControls extends QatItemsType {
    static _Q: string;
}
/** Defines the SharedQatControls Class. Serialized as `mso:sharedControls` */
export declare class SharedQatControls extends QatItemsType {
    static _Q: string;
}
/** Defines the QuickAccessToolbarControlClone Class. Serialized as `mso:control` */
export declare class QuickAccessToolbarControlClone extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** size. Serialized as `:size` */
    get size(): SizeValues | undefined;
    set size(v: SizeValues | undefined);
    /** getSize. Serialized as `:getSize` */
    get getSize(): StringValue | undefined;
    set getSize(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the Group Class. Serialized as `mso:group` */
export declare class Group extends OxmlCompositeElement<ControlClone | TextLabel | Button | ToggleButton | CheckBox | EditBox | ComboBox | DropDown | Gallery | Menu | DynamicMenu | SplitButton | Box | ButtonGroup | VerticalSeparator | DialogBoxLauncher> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
}
/** Defines the DialogBoxLauncher Class. Serialized as `mso:dialogBoxLauncher` */
export declare class DialogBoxLauncher extends OxmlCompositeElement<UnsizedButton> {
    static _Q: string;
    /** Returns UnsizedButton. */
    get unsizedButton(): UnsizedButton | undefined;
}
/** Defines the VerticalSeparator Class. Serialized as `mso:separator` */
export declare class VerticalSeparator extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
}
/** Defines the VisibleToggleButton Class. Serialized as `mso:toggleButton` */
export declare class VisibleToggleButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** getPressed. Serialized as `:getPressed` */
    get getPressed(): StringValue | undefined;
    set getPressed(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the VisibleButton Class. Serialized as `mso:button` */
export declare class VisibleButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the Item Class. Serialized as `mso:item` */
export declare class Item extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
}
/** Defines the CustomUI Class. Serialized as `mso:customUI` */
export declare class CustomUI extends OxmlPartRootElement<RepurposedCommands | Ribbon> {
    static _Q: string;
    static _A: string[];
    /** onLoad. Serialized as `:onLoad` */
    get onLoad(): StringValue | undefined;
    set onLoad(v: StringValue | undefined);
    /** loadImage. Serialized as `:loadImage` */
    get loadImage(): StringValue | undefined;
    set loadImage(v: StringValue | undefined);
    /** Returns RepurposedCommands. */
    get repurposedCommands(): RepurposedCommands | undefined;
    /** Returns Ribbon. */
    get ribbon(): Ribbon | undefined;
}
/** Defines the MenuRoot Class. Serialized as `mso:menu` */
export declare class MenuRoot extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | UnsizedSplitButton | UnsizedMenu | UnsizedDynamicMenu> {
    static _Q: string;
    static _A: string[];
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** getTitle. Serialized as `:getTitle` */
    get getTitle(): StringValue | undefined;
    set getTitle(v: StringValue | undefined);
    /** itemSize. Serialized as `:itemSize` */
    get itemSize(): ItemSizeValues | undefined;
    set itemSize(v: ItemSizeValues | undefined);
}
/** Defines the ButtonGroup Class. Serialized as `mso:buttonGroup` */
export declare class ButtonGroup extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | UnsizedToggleButton | UnsizedGallery | UnsizedMenu | UnsizedDynamicMenu | UnsizedSplitButton> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
}
/** Defines the Box Class. Serialized as `mso:box` */
export declare class Box extends OxmlCompositeElement<ControlClone | TextLabel | Button | ToggleButton | CheckBox | EditBox | ComboBox | DropDown | Gallery | Menu | DynamicMenu | SplitButton | Box | ButtonGroup> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** boxStyle. Serialized as `:boxStyle` */
    get boxStyle(): BoxStyleValues | undefined;
    set boxStyle(v: BoxStyleValues | undefined);
}
/** Defines the SplitButton Class. Serialized as `mso:splitButton` */
export declare class SplitButton extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | UnsizedMenu> {
    static _Q: string;
    static _A: string[];
    /** size. Serialized as `:size` */
    get size(): SizeValues | undefined;
    set size(v: SizeValues | undefined);
    /** getSize. Serialized as `:getSize` */
    get getSize(): StringValue | undefined;
    set getSize(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
}
/** Defines the DynamicMenu Class. Serialized as `mso:dynamicMenu` */
export declare class DynamicMenu extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** size. Serialized as `:size` */
    get size(): SizeValues | undefined;
    set size(v: SizeValues | undefined);
    /** getSize. Serialized as `:getSize` */
    get getSize(): StringValue | undefined;
    set getSize(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** getContent. Serialized as `:getContent` */
    get getContent(): StringValue | undefined;
    set getContent(v: StringValue | undefined);
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    get invalidateContentOnDrop(): BooleanValue | undefined;
    set invalidateContentOnDrop(v: BooleanValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the Menu Class. Serialized as `mso:menu` */
export declare class Menu extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | UnsizedSplitButton | UnsizedMenu | UnsizedDynamicMenu> {
    static _Q: string;
    static _A: string[];
    /** size. Serialized as `:size` */
    get size(): SizeValues | undefined;
    set size(v: SizeValues | undefined);
    /** getSize. Serialized as `:getSize` */
    get getSize(): StringValue | undefined;
    set getSize(v: StringValue | undefined);
    /** itemSize. Serialized as `:itemSize` */
    get itemSize(): ItemSizeValues | undefined;
    set itemSize(v: ItemSizeValues | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the Gallery Class. Serialized as `mso:gallery` */
export declare class Gallery extends OxmlCompositeElement<Item | UnsizedButton> {
    static _Q: string;
    static _A: string[];
    /** size. Serialized as `:size` */
    get size(): SizeValues | undefined;
    set size(v: SizeValues | undefined);
    /** getSize. Serialized as `:getSize` */
    get getSize(): StringValue | undefined;
    set getSize(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    get invalidateContentOnDrop(): BooleanValue | undefined;
    set invalidateContentOnDrop(v: BooleanValue | undefined);
    /** columns. Serialized as `:columns` */
    get columns(): IntegerValue | undefined;
    set columns(v: IntegerValue | undefined);
    /** rows. Serialized as `:rows` */
    get rows(): IntegerValue | undefined;
    set rows(v: IntegerValue | undefined);
    /** itemWidth. Serialized as `:itemWidth` */
    get itemWidth(): IntegerValue | undefined;
    set itemWidth(v: IntegerValue | undefined);
    /** itemHeight. Serialized as `:itemHeight` */
    get itemHeight(): IntegerValue | undefined;
    set itemHeight(v: IntegerValue | undefined);
    /** getItemWidth. Serialized as `:getItemWidth` */
    get getItemWidth(): StringValue | undefined;
    set getItemWidth(v: StringValue | undefined);
    /** getItemHeight. Serialized as `:getItemHeight` */
    get getItemHeight(): StringValue | undefined;
    set getItemHeight(v: StringValue | undefined);
    /** showItemLabel. Serialized as `:showItemLabel` */
    get showItemLabel(): BooleanValue | undefined;
    set showItemLabel(v: BooleanValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** showItemImage. Serialized as `:showItemImage` */
    get showItemImage(): BooleanValue | undefined;
    set showItemImage(v: BooleanValue | undefined);
    /** getItemCount. Serialized as `:getItemCount` */
    get getItemCount(): StringValue | undefined;
    set getItemCount(v: StringValue | undefined);
    /** getItemLabel. Serialized as `:getItemLabel` */
    get getItemLabel(): StringValue | undefined;
    set getItemLabel(v: StringValue | undefined);
    /** getItemScreentip. Serialized as `:getItemScreentip` */
    get getItemScreentip(): StringValue | undefined;
    set getItemScreentip(v: StringValue | undefined);
    /** getItemSupertip. Serialized as `:getItemSupertip` */
    get getItemSupertip(): StringValue | undefined;
    set getItemSupertip(v: StringValue | undefined);
    /** getItemImage. Serialized as `:getItemImage` */
    get getItemImage(): StringValue | undefined;
    set getItemImage(v: StringValue | undefined);
    /** getItemID. Serialized as `:getItemID` */
    get getItemID(): StringValue | undefined;
    set getItemID(v: StringValue | undefined);
    /** sizeString. Serialized as `:sizeString` */
    get sizeString(): StringValue | undefined;
    set sizeString(v: StringValue | undefined);
    /** getSelectedItemID. Serialized as `:getSelectedItemID` */
    get getSelectedItemID(): StringValue | undefined;
    set getSelectedItemID(v: StringValue | undefined);
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    get getSelectedItemIndex(): StringValue | undefined;
    set getSelectedItemIndex(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the DropDown Class. Serialized as `mso:dropDown` */
export declare class DropDown extends OxmlCompositeElement<Item | UnsizedButton> {
    static _Q: string;
    static _A: string[];
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** showItemImage. Serialized as `:showItemImage` */
    get showItemImage(): BooleanValue | undefined;
    set showItemImage(v: BooleanValue | undefined);
    /** getItemCount. Serialized as `:getItemCount` */
    get getItemCount(): StringValue | undefined;
    set getItemCount(v: StringValue | undefined);
    /** getItemLabel. Serialized as `:getItemLabel` */
    get getItemLabel(): StringValue | undefined;
    set getItemLabel(v: StringValue | undefined);
    /** getItemScreentip. Serialized as `:getItemScreentip` */
    get getItemScreentip(): StringValue | undefined;
    set getItemScreentip(v: StringValue | undefined);
    /** getItemSupertip. Serialized as `:getItemSupertip` */
    get getItemSupertip(): StringValue | undefined;
    set getItemSupertip(v: StringValue | undefined);
    /** getItemImage. Serialized as `:getItemImage` */
    get getItemImage(): StringValue | undefined;
    set getItemImage(v: StringValue | undefined);
    /** getItemID. Serialized as `:getItemID` */
    get getItemID(): StringValue | undefined;
    set getItemID(v: StringValue | undefined);
    /** sizeString. Serialized as `:sizeString` */
    get sizeString(): StringValue | undefined;
    set sizeString(v: StringValue | undefined);
    /** getSelectedItemID. Serialized as `:getSelectedItemID` */
    get getSelectedItemID(): StringValue | undefined;
    set getSelectedItemID(v: StringValue | undefined);
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    get getSelectedItemIndex(): StringValue | undefined;
    set getSelectedItemIndex(v: StringValue | undefined);
    /** showItemLabel. Serialized as `:showItemLabel` */
    get showItemLabel(): BooleanValue | undefined;
    set showItemLabel(v: BooleanValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the ComboBox Class. Serialized as `mso:comboBox` */
export declare class ComboBox extends OxmlCompositeElement<Item> {
    static _Q: string;
    static _A: string[];
    /** showItemImage. Serialized as `:showItemImage` */
    get showItemImage(): BooleanValue | undefined;
    set showItemImage(v: BooleanValue | undefined);
    /** getItemCount. Serialized as `:getItemCount` */
    get getItemCount(): StringValue | undefined;
    set getItemCount(v: StringValue | undefined);
    /** getItemLabel. Serialized as `:getItemLabel` */
    get getItemLabel(): StringValue | undefined;
    set getItemLabel(v: StringValue | undefined);
    /** getItemScreentip. Serialized as `:getItemScreentip` */
    get getItemScreentip(): StringValue | undefined;
    set getItemScreentip(v: StringValue | undefined);
    /** getItemSupertip. Serialized as `:getItemSupertip` */
    get getItemSupertip(): StringValue | undefined;
    set getItemSupertip(v: StringValue | undefined);
    /** getItemImage. Serialized as `:getItemImage` */
    get getItemImage(): StringValue | undefined;
    set getItemImage(v: StringValue | undefined);
    /** getItemID. Serialized as `:getItemID` */
    get getItemID(): StringValue | undefined;
    set getItemID(v: StringValue | undefined);
    /** sizeString. Serialized as `:sizeString` */
    get sizeString(): StringValue | undefined;
    set sizeString(v: StringValue | undefined);
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    get invalidateContentOnDrop(): BooleanValue | undefined;
    set invalidateContentOnDrop(v: BooleanValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** maxLength. Serialized as `:maxLength` */
    get maxLength(): IntegerValue | undefined;
    set maxLength(v: IntegerValue | undefined);
    /** getText. Serialized as `:getText` */
    get getText(): StringValue | undefined;
    set getText(v: StringValue | undefined);
    /** onChange. Serialized as `:onChange` */
    get onChange(): StringValue | undefined;
    set onChange(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the EditBox Class. Serialized as `mso:editBox` */
export declare class EditBox extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** maxLength. Serialized as `:maxLength` */
    get maxLength(): IntegerValue | undefined;
    set maxLength(v: IntegerValue | undefined);
    /** getText. Serialized as `:getText` */
    get getText(): StringValue | undefined;
    set getText(v: StringValue | undefined);
    /** onChange. Serialized as `:onChange` */
    get onChange(): StringValue | undefined;
    set onChange(v: StringValue | undefined);
    /** sizeString. Serialized as `:sizeString` */
    get sizeString(): StringValue | undefined;
    set sizeString(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the ToggleButton Class. Serialized as `mso:toggleButton` */
export declare class ToggleButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** size. Serialized as `:size` */
    get size(): SizeValues | undefined;
    set size(v: SizeValues | undefined);
    /** getSize. Serialized as `:getSize` */
    get getSize(): StringValue | undefined;
    set getSize(v: StringValue | undefined);
    /** getPressed. Serialized as `:getPressed` */
    get getPressed(): StringValue | undefined;
    set getPressed(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the Button Class. Serialized as `mso:button` */
export declare class Button extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** size. Serialized as `:size` */
    get size(): SizeValues | undefined;
    set size(v: SizeValues | undefined);
    /** getSize. Serialized as `:getSize` */
    get getSize(): StringValue | undefined;
    set getSize(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the TextLabel Class. Serialized as `mso:labelControl` */
export declare class TextLabel extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
}
/** Defines the ControlClone Class. Serialized as `mso:control` */
export declare class ControlClone extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** size. Serialized as `:size` */
    get size(): SizeValues | undefined;
    set size(v: SizeValues | undefined);
    /** getSize. Serialized as `:getSize` */
    get getSize(): StringValue | undefined;
    set getSize(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the MenuWithTitle Class. Serialized as `mso:menu` */
export declare class MenuWithTitle extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | SplitButtonWithTitle | MenuWithTitle | UnsizedDynamicMenu> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** itemSize. Serialized as `:itemSize` */
    get itemSize(): ItemSizeValues | undefined;
    set itemSize(v: ItemSizeValues | undefined);
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** getTitle. Serialized as `:getTitle` */
    get getTitle(): StringValue | undefined;
    set getTitle(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the SplitButtonWithTitle Class. Serialized as `mso:splitButton` */
export declare class SplitButtonWithTitle extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | MenuWithTitle> {
    static _Q: string;
    static _A: string[];
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
}
/** Defines the UnsizedDynamicMenu Class. Serialized as `mso:dynamicMenu` */
export declare class UnsizedDynamicMenu extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** getContent. Serialized as `:getContent` */
    get getContent(): StringValue | undefined;
    set getContent(v: StringValue | undefined);
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    get invalidateContentOnDrop(): BooleanValue | undefined;
    set invalidateContentOnDrop(v: BooleanValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the UnsizedMenu Class. Serialized as `mso:menu` */
export declare class UnsizedMenu extends OxmlCompositeElement<UnsizedControlClone | UnsizedButton | CheckBox | UnsizedGallery | UnsizedToggleButton | MenuSeparator | UnsizedSplitButton | UnsizedMenu | UnsizedDynamicMenu> {
    static _Q: string;
    static _A: string[];
    /** itemSize. Serialized as `:itemSize` */
    get itemSize(): ItemSizeValues | undefined;
    set itemSize(v: ItemSizeValues | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the UnsizedSplitButton Class. Serialized as `mso:splitButton` */
export declare class UnsizedSplitButton extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | UnsizedMenu> {
    static _Q: string;
    static _A: string[];
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
}
/** Defines the MenuSeparator Class. Serialized as `mso:menuSeparator` */
export declare class MenuSeparator extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** getTitle. Serialized as `:getTitle` */
    get getTitle(): StringValue | undefined;
    set getTitle(v: StringValue | undefined);
}
/** Defines the UnsizedToggleButton Class. Serialized as `mso:toggleButton` */
export declare class UnsizedToggleButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** getPressed. Serialized as `:getPressed` */
    get getPressed(): StringValue | undefined;
    set getPressed(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the UnsizedGallery Class. Serialized as `mso:gallery` */
export declare class UnsizedGallery extends OxmlCompositeElement<Item | UnsizedButton> {
    static _Q: string;
    static _A: string[];
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
    get invalidateContentOnDrop(): BooleanValue | undefined;
    set invalidateContentOnDrop(v: BooleanValue | undefined);
    /** columns. Serialized as `:columns` */
    get columns(): IntegerValue | undefined;
    set columns(v: IntegerValue | undefined);
    /** rows. Serialized as `:rows` */
    get rows(): IntegerValue | undefined;
    set rows(v: IntegerValue | undefined);
    /** itemWidth. Serialized as `:itemWidth` */
    get itemWidth(): IntegerValue | undefined;
    set itemWidth(v: IntegerValue | undefined);
    /** itemHeight. Serialized as `:itemHeight` */
    get itemHeight(): IntegerValue | undefined;
    set itemHeight(v: IntegerValue | undefined);
    /** getItemWidth. Serialized as `:getItemWidth` */
    get getItemWidth(): StringValue | undefined;
    set getItemWidth(v: StringValue | undefined);
    /** getItemHeight. Serialized as `:getItemHeight` */
    get getItemHeight(): StringValue | undefined;
    set getItemHeight(v: StringValue | undefined);
    /** showItemLabel. Serialized as `:showItemLabel` */
    get showItemLabel(): BooleanValue | undefined;
    set showItemLabel(v: BooleanValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** showItemImage. Serialized as `:showItemImage` */
    get showItemImage(): BooleanValue | undefined;
    set showItemImage(v: BooleanValue | undefined);
    /** getItemCount. Serialized as `:getItemCount` */
    get getItemCount(): StringValue | undefined;
    set getItemCount(v: StringValue | undefined);
    /** getItemLabel. Serialized as `:getItemLabel` */
    get getItemLabel(): StringValue | undefined;
    set getItemLabel(v: StringValue | undefined);
    /** getItemScreentip. Serialized as `:getItemScreentip` */
    get getItemScreentip(): StringValue | undefined;
    set getItemScreentip(v: StringValue | undefined);
    /** getItemSupertip. Serialized as `:getItemSupertip` */
    get getItemSupertip(): StringValue | undefined;
    set getItemSupertip(v: StringValue | undefined);
    /** getItemImage. Serialized as `:getItemImage` */
    get getItemImage(): StringValue | undefined;
    set getItemImage(v: StringValue | undefined);
    /** getItemID. Serialized as `:getItemID` */
    get getItemID(): StringValue | undefined;
    set getItemID(v: StringValue | undefined);
    /** sizeString. Serialized as `:sizeString` */
    get sizeString(): StringValue | undefined;
    set sizeString(v: StringValue | undefined);
    /** getSelectedItemID. Serialized as `:getSelectedItemID` */
    get getSelectedItemID(): StringValue | undefined;
    set getSelectedItemID(v: StringValue | undefined);
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    get getSelectedItemIndex(): StringValue | undefined;
    set getSelectedItemIndex(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the CheckBox Class. Serialized as `mso:checkBox` */
export declare class CheckBox extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** getPressed. Serialized as `:getPressed` */
    get getPressed(): StringValue | undefined;
    set getPressed(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
}
/** Defines the UnsizedButton Class. Serialized as `mso:button` */
export declare class UnsizedButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
/** Defines the UnsizedControlClone Class. Serialized as `mso:control` */
export declare class UnsizedControlClone extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** idQ. Serialized as `:idQ` */
    get idQ(): StringValue | undefined;
    set idQ(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** screentip. Serialized as `:screentip` */
    get screentip(): StringValue | undefined;
    set screentip(v: StringValue | undefined);
    /** getScreentip. Serialized as `:getScreentip` */
    get getScreentip(): StringValue | undefined;
    set getScreentip(v: StringValue | undefined);
    /** supertip. Serialized as `:supertip` */
    get supertip(): StringValue | undefined;
    set supertip(v: StringValue | undefined);
    /** getSupertip. Serialized as `:getSupertip` */
    get getSupertip(): StringValue | undefined;
    set getSupertip(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQ(): StringValue | undefined;
    set insertAfterQ(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQ(): StringValue | undefined;
    set insertBeforeQ(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** showImage. Serialized as `:showImage` */
    get showImage(): BooleanValue | undefined;
    set showImage(v: BooleanValue | undefined);
    /** getShowImage. Serialized as `:getShowImage` */
    get getShowImage(): StringValue | undefined;
    set getShowImage(v: StringValue | undefined);
}
export declare function initOfficeCustomUINamespace(): {
    prefix: string;
    xmlns: string;
};
