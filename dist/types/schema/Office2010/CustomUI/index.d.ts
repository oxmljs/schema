import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { IntegerValue } from '../../../framework/types/IntegerValue';
export declare enum GalleryShowInRibbonValues {
    /** undefined. Serialized value: `false` */
    False = "false",
    /** undefined. Serialized value: `0` */
    Zero = "0"
}
export declare const GalleryShowInRibbonValuesArray: readonly [GalleryShowInRibbonValues.False, GalleryShowInRibbonValues.Zero];
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
export declare enum TaskSizesValues {
    /** undefined. Serialized value: `largeMediumSmall` */
    LargeMediumSmall = "largeMediumSmall",
    /** undefined. Serialized value: `largeMedium` */
    LargeMedium = "largeMedium",
    /** undefined. Serialized value: `large` */
    Large = "large",
    /** undefined. Serialized value: `mediumSmall` */
    MediumSmall = "mediumSmall",
    /** undefined. Serialized value: `medium` */
    Medium = "medium",
    /** undefined. Serialized value: `small` */
    Small = "small"
}
export declare const TaskSizesValuesArray: readonly [TaskSizesValues.LargeMediumSmall, TaskSizesValues.LargeMedium, TaskSizesValues.Large, TaskSizesValues.MediumSmall, TaskSizesValues.Medium, TaskSizesValues.Small];
export declare enum ExpandValues {
    /** undefined. Serialized value: `topLeft` */
    TopLeft = "topLeft",
    /** undefined. Serialized value: `top` */
    Top = "top",
    /** undefined. Serialized value: `topRight` */
    TopRight = "topRight",
    /** undefined. Serialized value: `left` */
    Left = "left",
    /** undefined. Serialized value: `center` */
    Center = "center",
    /** undefined. Serialized value: `right` */
    Right = "right",
    /** undefined. Serialized value: `bottomLeft` */
    BottomLeft = "bottomLeft",
    /** undefined. Serialized value: `bottom` */
    Bottom = "bottom",
    /** undefined. Serialized value: `bottomRight` */
    BottomRight = "bottomRight"
}
export declare const ExpandValuesArray: readonly [ExpandValues.TopLeft, ExpandValues.Top, ExpandValues.TopRight, ExpandValues.Left, ExpandValues.Center, ExpandValues.Right, ExpandValues.BottomLeft, ExpandValues.Bottom, ExpandValues.BottomRight];
export declare enum StyleValues {
    /** undefined. Serialized value: `normal` */
    Normal = "normal",
    /** undefined. Serialized value: `warning` */
    Warning = "warning",
    /** undefined. Serialized value: `error` */
    Error = "error"
}
export declare const StyleValuesArray: readonly [StyleValues.Normal, StyleValues.Warning, StyleValues.Error];
export declare enum Style2Values {
    /** undefined. Serialized value: `normal` */
    Normal = "normal",
    /** undefined. Serialized value: `borderless` */
    Borderless = "borderless",
    /** undefined. Serialized value: `large` */
    Large = "large"
}
export declare const Style2ValuesArray: readonly [Style2Values.Normal, Style2Values.Borderless, Style2Values.Large];
export declare enum LayoutChildrenValues {
    /** undefined. Serialized value: `horizontal` */
    Horizontal = "horizontal",
    /** undefined. Serialized value: `vertical` */
    Vertical = "vertical"
}
export declare const LayoutChildrenValuesArray: readonly [LayoutChildrenValues.Horizontal, LayoutChildrenValues.Vertical];
/** Defines the ContextMenus Class. Serialized as `mso14:contextMenus` */
export declare class ContextMenus extends OxmlCompositeElement<ContextMenu> {
    static _Q: string;
}
/** Defines the Backstage Class. Serialized as `mso14:backstage` */
export declare class Backstage extends OxmlCompositeElement<BackstageTab | BackstageFastCommandButton> {
    static _Q: string;
    static _A: string[];
    /** onShow. Serialized as `:onShow` */
    get onShow(): StringValue | undefined;
    set onShow(v: StringValue | undefined);
    /** onHide. Serialized as `:onHide` */
    get onHide(): StringValue | undefined;
    set onHide(v: StringValue | undefined);
}
/** Defines the Ribbon Class. Serialized as `mso14:ribbon` */
export declare class Ribbon extends OxmlCompositeElement<QuickAccessToolbar | Tabs | ContextualTabs> {
    static _Q: string;
    static _A: string[];
    /** startFromScratch. Serialized as `:startFromScratch` */
    get startFromScratch(): BooleanValue | undefined;
    set startFromScratch(v: BooleanValue | undefined);
    /** Returns QuickAccessToolbar. */
    get quickAccessToolbar(): QuickAccessToolbar | undefined;
    /** Returns Tabs. */
    get tabs(): Tabs | undefined;
    /** Returns ContextualTabs. */
    get contextualTabs(): ContextualTabs | undefined;
}
/** Defines the Commands Class. Serialized as `mso14:commands` */
export declare class Commands extends OxmlCompositeElement<Command> {
    static _Q: string;
}
/** Defines the BackstageFastCommandButton Class. Serialized as `mso14:button` */
export declare class BackstageFastCommandButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** isDefinitive. Serialized as `:isDefinitive` */
    get isDefinitive(): BooleanValue | undefined;
    set isDefinitive(v: BooleanValue | undefined);
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
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
}
/** Defines the BackstageTab Class. Serialized as `mso14:tab` */
export declare class BackstageTab extends OxmlCompositeElement<BackstageGroups | SimpleGroups> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** getTitle. Serialized as `:getTitle` */
    get getTitle(): StringValue | undefined;
    set getTitle(v: StringValue | undefined);
    /** columnWidthPercent. Serialized as `:columnWidthPercent` */
    get columnWidthPercent(): IntegerValue | undefined;
    set columnWidthPercent(v: IntegerValue | undefined);
    /** firstColumnMinWidth. Serialized as `:firstColumnMinWidth` */
    get firstColumnMinWidth(): IntegerValue | undefined;
    set firstColumnMinWidth(v: IntegerValue | undefined);
    /** firstColumnMaxWidth. Serialized as `:firstColumnMaxWidth` */
    get firstColumnMaxWidth(): IntegerValue | undefined;
    set firstColumnMaxWidth(v: IntegerValue | undefined);
    /** secondColumnMinWidth. Serialized as `:secondColumnMinWidth` */
    get secondColumnMinWidth(): IntegerValue | undefined;
    set secondColumnMinWidth(v: IntegerValue | undefined);
    /** secondColumnMaxWidth. Serialized as `:secondColumnMaxWidth` */
    get secondColumnMaxWidth(): IntegerValue | undefined;
    set secondColumnMaxWidth(v: IntegerValue | undefined);
    /** Returns BackstageGroups. */
    get backstageGroups(): BackstageGroups | undefined;
    /** Returns SimpleGroups. */
    get simpleGroups(): SimpleGroups | undefined;
}
/** Defines the SimpleGroups Class. Serialized as `mso14:secondColumn` */
export declare class SimpleGroups extends OxmlCompositeElement<BackstageGroup | TaskGroup> {
    static _Q: string;
}
/** Defines the BackstageGroups Class. Serialized as `mso14:firstColumn` */
export declare class BackstageGroups extends OxmlCompositeElement<TaskFormGroup | BackstageGroup | TaskGroup> {
    static _Q: string;
}
/** Defines the TaskFormGroup Class. Serialized as `mso14:taskFormGroup` */
export declare class TaskFormGroup extends OxmlCompositeElement<TaskFormGroupCategory> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** helperText. Serialized as `:helperText` */
    get helperText(): StringValue | undefined;
    set helperText(v: StringValue | undefined);
    /** getHelperText. Serialized as `:getHelperText` */
    get getHelperText(): StringValue | undefined;
    set getHelperText(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** allowedTaskSizes. Serialized as `:allowedTaskSizes` */
    get allowedTaskSizes(): TaskSizesValues | undefined;
    set allowedTaskSizes(v: TaskSizesValues | undefined);
}
/** Defines the TaskFormGroupTask Class. Serialized as `mso14:task` */
export declare class TaskFormGroupTask extends OxmlCompositeElement<BackstageGroup> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
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
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
}
/** Defines the TaskFormGroupCategory Class. Serialized as `mso14:category` */
export declare class TaskFormGroupCategory extends OxmlCompositeElement<TaskFormGroupTask> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
}
/** Defines the TaskGroupTask Class. Serialized as `mso14:task` */
export declare class TaskGroupTask extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** isDefinitive. Serialized as `:isDefinitive` */
    get isDefinitive(): BooleanValue | undefined;
    set isDefinitive(v: BooleanValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
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
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
}
/** Defines the TaskGroupCategory Class. Serialized as `mso14:category` */
export declare class TaskGroupCategory extends OxmlCompositeElement<TaskGroupTask> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
}
/** Defines the GroupControlsType Class. */
export declare abstract class GroupControlsType extends OxmlCompositeElement<BackstageGroupButton | BackstageCheckBox | BackstageEditBox | BackstageDropDown | RadioGroup | BackstageComboBox | Hyperlink | BackstageLabelControl | GroupBox | LayoutContainer | ImageControl> {
}
/** Defines the BottomItemsGroupControls Class. Serialized as `mso14:bottomItems` */
export declare class BottomItemsGroupControls extends GroupControlsType {
    static _Q: string;
}
/** Defines the TopItemsGroupControls Class. Serialized as `mso14:topItems` */
export declare class TopItemsGroupControls extends GroupControlsType {
    static _Q: string;
}
/** Defines the PrimaryItem Class. Serialized as `mso14:primaryItem` */
export declare class PrimaryItem extends OxmlCompositeElement<BackstageRegularButton | BackstagePrimaryMenu> {
    static _Q: string;
    /** Returns BackstageRegularButton. */
    get backstageRegularButton(): BackstageRegularButton | undefined;
    /** Returns BackstagePrimaryMenu. */
    get backstagePrimaryMenu(): BackstagePrimaryMenu | undefined;
}
/** Defines the BackstageMenuGroup Class. Serialized as `mso14:menuGroup` */
export declare class BackstageMenuGroup extends OxmlCompositeElement<BackstageMenuButton | BackstageMenuCheckBox | BackstageSubMenu | BackstageMenuToggleButton> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** itemSize. Serialized as `:itemSize` */
    get itemSize(): ItemSizeValues | undefined;
    set itemSize(v: ItemSizeValues | undefined);
}
/** Defines the BackstagePrimaryMenu Class. Serialized as `mso14:menu` */
export declare class BackstagePrimaryMenu extends OxmlCompositeElement<BackstageMenuGroup> {
    static _Q: string;
    static _A: string[];
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
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
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
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
}
/** Defines the BackstageRegularButton Class. Serialized as `mso14:button` */
export declare class BackstageRegularButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
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
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** isDefinitive. Serialized as `:isDefinitive` */
    get isDefinitive(): BooleanValue | undefined;
    set isDefinitive(v: BooleanValue | undefined);
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
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
}
/** Defines the BackstageItemType Class. */
export declare abstract class BackstageItemType extends OxmlLeafElement {
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
}
/** Defines the RadioButtonBackstageItem Class. Serialized as `mso14:radioButton` */
export declare class RadioButtonBackstageItem extends BackstageItemType {
    static _Q: string;
}
/** Defines the ItemBackstageItem Class. Serialized as `mso14:item` */
export declare class ItemBackstageItem extends BackstageItemType {
    static _Q: string;
}
/** Defines the ContextMenu Class. Serialized as `mso14:contextMenu` */
export declare class ContextMenu extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | SplitButtonRegular | MenuRegular | DynamicMenuRegular | MenuSeparatorNoTitle> {
    static _Q: string;
    static _A: string[];
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
}
/** Defines the ContextualTabs Class. Serialized as `mso14:contextualTabs` */
export declare class ContextualTabs extends OxmlCompositeElement<TabSet> {
    static _Q: string;
}
/** Defines the Tabs Class. Serialized as `mso14:tabs` */
export declare class Tabs extends OxmlCompositeElement<Tab> {
    static _Q: string;
}
/** Defines the QuickAccessToolbar Class. Serialized as `mso14:qat` */
export declare class QuickAccessToolbar extends OxmlCompositeElement<SharedControlsQatItems | DocumentControlsQatItems> {
    static _Q: string;
    /** Returns SharedControlsQatItems. */
    get sharedControlsQatItems(): SharedControlsQatItems | undefined;
    /** Returns DocumentControlsQatItems. */
    get documentControlsQatItems(): DocumentControlsQatItems | undefined;
}
/** Defines the Command Class. Serialized as `mso14:command` */
export declare class Command extends OxmlLeafElement {
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
/** Defines the TabSet Class. Serialized as `mso14:tabSet` */
export declare class TabSet extends OxmlCompositeElement<Tab> {
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
/** Defines the Tab Class. Serialized as `mso14:tab` */
export declare class Tab extends OxmlCompositeElement<Group> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
export declare abstract class QatItemsType extends OxmlCompositeElement<ControlCloneQat | ButtonRegular | Separator> {
}
/** Defines the DocumentControlsQatItems Class. Serialized as `mso14:documentControls` */
export declare class DocumentControlsQatItems extends QatItemsType {
    static _Q: string;
}
/** Defines the SharedControlsQatItems Class. Serialized as `mso14:sharedControls` */
export declare class SharedControlsQatItems extends QatItemsType {
    static _Q: string;
}
/** Defines the ControlCloneQat Class. Serialized as `mso14:control` */
export declare class ControlCloneQat extends OxmlLeafElement {
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the Group Class. Serialized as `mso14:group` */
export declare class Group extends OxmlCompositeElement<ControlClone | LabelControl | Button | ToggleButton | CheckBox | EditBox | ComboBox | DropDownRegular | Gallery | Menu | DynamicMenu | SplitButton | Box | ButtonGroup | Separator | DialogBoxLauncher> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
    /** autoScale. Serialized as `:autoScale` */
    get autoScale(): BooleanValue | undefined;
    set autoScale(v: BooleanValue | undefined);
    /** centerVertically. Serialized as `:centerVertically` */
    get centerVertically(): BooleanValue | undefined;
    set centerVertically(v: BooleanValue | undefined);
}
/** Defines the DialogBoxLauncher Class. Serialized as `mso14:dialogBoxLauncher` */
export declare class DialogBoxLauncher extends OxmlCompositeElement<ButtonRegular> {
    static _Q: string;
    /** Returns ButtonRegular. */
    get buttonRegular(): ButtonRegular | undefined;
}
/** Defines the Separator Class. Serialized as `mso14:separator` */
export declare class Separator extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
}
/** Defines the VisibleToggleButton Class. Serialized as `mso14:toggleButton` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the VisibleButton Class. Serialized as `mso14:button` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the Item Class. Serialized as `mso14:item` */
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
/** Defines the CustomUI Class. Serialized as `mso14:customUI` */
export declare class CustomUI extends OxmlPartRootElement<Commands | Ribbon | Backstage | ContextMenus> {
    static _Q: string;
    static _A: string[];
    /** onLoad. Serialized as `:onLoad` */
    get onLoad(): StringValue | undefined;
    set onLoad(v: StringValue | undefined);
    /** loadImage. Serialized as `:loadImage` */
    get loadImage(): StringValue | undefined;
    set loadImage(v: StringValue | undefined);
    /** Returns Commands. */
    get commands(): Commands | undefined;
    /** Returns Ribbon. */
    get ribbon(): Ribbon | undefined;
    /** Returns Backstage. */
    get backstage(): Backstage | undefined;
    /** Returns ContextMenus. */
    get contextMenus(): ContextMenus | undefined;
}
/** Defines the MenuRoot Class. Serialized as `mso14:menu` */
export declare class MenuRoot extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | MenuSeparator | SplitButtonRegular | MenuRegular | DynamicMenuRegular> {
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
/** Defines the TaskGroup Class. Serialized as `mso14:taskGroup` */
export declare class TaskGroup extends OxmlCompositeElement<TaskGroupCategory> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** helperText. Serialized as `:helperText` */
    get helperText(): StringValue | undefined;
    set helperText(v: StringValue | undefined);
    /** getHelperText. Serialized as `:getHelperText` */
    get getHelperText(): StringValue | undefined;
    set getHelperText(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
    /** allowedTaskSizes. Serialized as `:allowedTaskSizes` */
    get allowedTaskSizes(): TaskSizesValues | undefined;
    set allowedTaskSizes(v: TaskSizesValues | undefined);
}
/** Defines the BackstageGroup Class. Serialized as `mso14:group` */
export declare class BackstageGroup extends OxmlCompositeElement<PrimaryItem | TopItemsGroupControls | BottomItemsGroupControls> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** style. Serialized as `:style` */
    get style(): StyleValues | undefined;
    set style(v: StyleValues | undefined);
    /** getStyle. Serialized as `:getStyle` */
    get getStyle(): StringValue | undefined;
    set getStyle(v: StringValue | undefined);
    /** helperText. Serialized as `:helperText` */
    get helperText(): StringValue | undefined;
    set helperText(v: StringValue | undefined);
    /** getHelperText. Serialized as `:getHelperText` */
    get getHelperText(): StringValue | undefined;
    set getHelperText(v: StringValue | undefined);
    /** showLabel. Serialized as `:showLabel` */
    get showLabel(): BooleanValue | undefined;
    set showLabel(v: BooleanValue | undefined);
    /** getShowLabel. Serialized as `:getShowLabel` */
    get getShowLabel(): StringValue | undefined;
    set getShowLabel(v: StringValue | undefined);
}
/** Defines the ImageControl Class. Serialized as `mso14:imageControl` */
export declare class ImageControl extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** altText. Serialized as `:altText` */
    get altText(): StringValue | undefined;
    set altText(v: StringValue | undefined);
    /** getAltText. Serialized as `:getAltText` */
    get getAltText(): StringValue | undefined;
    set getAltText(v: StringValue | undefined);
}
/** Defines the LayoutContainer Class. Serialized as `mso14:layoutContainer` */
export declare class LayoutContainer extends OxmlCompositeElement<BackstageGroupButton | BackstageCheckBox | BackstageEditBox | BackstageDropDown | RadioGroup | BackstageComboBox | Hyperlink | BackstageLabelControl | GroupBox | LayoutContainer | ImageControl> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** align. Serialized as `:align` */
    get align(): ExpandValues | undefined;
    set align(v: ExpandValues | undefined);
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
    /** layoutChildren. Serialized as `:layoutChildren` */
    get layoutChildren(): LayoutChildrenValues | undefined;
    set layoutChildren(v: LayoutChildrenValues | undefined);
}
/** Defines the GroupBox Class. Serialized as `mso14:groupBox` */
export declare class GroupBox extends OxmlCompositeElement<BackstageGroupButton | BackstageCheckBox | BackstageEditBox | BackstageDropDown | RadioGroup | BackstageComboBox | Hyperlink | BackstageLabelControl | GroupBox | LayoutContainer | ImageControl> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
}
/** Defines the BackstageLabelControl Class. Serialized as `mso14:labelControl` */
export declare class BackstageLabelControl extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** alignLabel. Serialized as `:alignLabel` */
    get alignLabel(): ExpandValues | undefined;
    set alignLabel(v: ExpandValues | undefined);
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
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
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** noWrap. Serialized as `:noWrap` */
    get noWrap(): BooleanValue | undefined;
    set noWrap(v: BooleanValue | undefined);
}
/** Defines the Hyperlink Class. Serialized as `mso14:hyperlink` */
export declare class Hyperlink extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** alignLabel. Serialized as `:alignLabel` */
    get alignLabel(): ExpandValues | undefined;
    set alignLabel(v: ExpandValues | undefined);
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** getEnabled. Serialized as `:getEnabled` */
    get getEnabled(): StringValue | undefined;
    set getEnabled(v: StringValue | undefined);
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
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** getLabel. Serialized as `:getLabel` */
    get getLabel(): StringValue | undefined;
    set getLabel(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
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
    /** target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** getTarget. Serialized as `:getTarget` */
    get getTarget(): StringValue | undefined;
    set getTarget(v: StringValue | undefined);
}
/** Defines the BackstageComboBox Class. Serialized as `mso14:comboBox` */
export declare class BackstageComboBox extends OxmlCompositeElement<ItemBackstageItem> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** alignLabel. Serialized as `:alignLabel` */
    get alignLabel(): ExpandValues | undefined;
    set alignLabel(v: ExpandValues | undefined);
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
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
    /** getText. Serialized as `:getText` */
    get getText(): StringValue | undefined;
    set getText(v: StringValue | undefined);
    /** onChange. Serialized as `:onChange` */
    get onChange(): StringValue | undefined;
    set onChange(v: StringValue | undefined);
    /** sizeString. Serialized as `:sizeString` */
    get sizeString(): StringValue | undefined;
    set sizeString(v: StringValue | undefined);
    /** getItemCount. Serialized as `:getItemCount` */
    get getItemCount(): StringValue | undefined;
    set getItemCount(v: StringValue | undefined);
    /** getItemLabel. Serialized as `:getItemLabel` */
    get getItemLabel(): StringValue | undefined;
    set getItemLabel(v: StringValue | undefined);
    /** getItemID. Serialized as `:getItemID` */
    get getItemID(): StringValue | undefined;
    set getItemID(v: StringValue | undefined);
}
/** Defines the RadioGroup Class. Serialized as `mso14:radioGroup` */
export declare class RadioGroup extends OxmlCompositeElement<RadioButtonBackstageItem> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** alignLabel. Serialized as `:alignLabel` */
    get alignLabel(): ExpandValues | undefined;
    set alignLabel(v: ExpandValues | undefined);
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
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
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    get getSelectedItemIndex(): StringValue | undefined;
    set getSelectedItemIndex(v: StringValue | undefined);
    /** getItemCount. Serialized as `:getItemCount` */
    get getItemCount(): StringValue | undefined;
    set getItemCount(v: StringValue | undefined);
    /** getItemLabel. Serialized as `:getItemLabel` */
    get getItemLabel(): StringValue | undefined;
    set getItemLabel(v: StringValue | undefined);
    /** getItemID. Serialized as `:getItemID` */
    get getItemID(): StringValue | undefined;
    set getItemID(v: StringValue | undefined);
}
/** Defines the BackstageDropDown Class. Serialized as `mso14:dropDown` */
export declare class BackstageDropDown extends OxmlCompositeElement<ItemBackstageItem> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** alignLabel. Serialized as `:alignLabel` */
    get alignLabel(): ExpandValues | undefined;
    set alignLabel(v: ExpandValues | undefined);
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
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
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
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
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    get getSelectedItemIndex(): StringValue | undefined;
    set getSelectedItemIndex(v: StringValue | undefined);
    /** sizeString. Serialized as `:sizeString` */
    get sizeString(): StringValue | undefined;
    set sizeString(v: StringValue | undefined);
    /** getItemCount. Serialized as `:getItemCount` */
    get getItemCount(): StringValue | undefined;
    set getItemCount(v: StringValue | undefined);
    /** getItemLabel. Serialized as `:getItemLabel` */
    get getItemLabel(): StringValue | undefined;
    set getItemLabel(v: StringValue | undefined);
    /** getItemID. Serialized as `:getItemID` */
    get getItemID(): StringValue | undefined;
    set getItemID(v: StringValue | undefined);
}
/** Defines the BackstageEditBox Class. Serialized as `mso14:editBox` */
export declare class BackstageEditBox extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** alignLabel. Serialized as `:alignLabel` */
    get alignLabel(): ExpandValues | undefined;
    set alignLabel(v: ExpandValues | undefined);
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
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
    /** getText. Serialized as `:getText` */
    get getText(): StringValue | undefined;
    set getText(v: StringValue | undefined);
    /** onChange. Serialized as `:onChange` */
    get onChange(): StringValue | undefined;
    set onChange(v: StringValue | undefined);
    /** maxLength. Serialized as `:maxLength` */
    get maxLength(): IntegerValue | undefined;
    set maxLength(v: IntegerValue | undefined);
    /** sizeString. Serialized as `:sizeString` */
    get sizeString(): StringValue | undefined;
    set sizeString(v: StringValue | undefined);
}
/** Defines the BackstageCheckBox Class. Serialized as `mso14:checkBox` */
export declare class BackstageCheckBox extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** getDescription. Serialized as `:getDescription` */
    get getDescription(): StringValue | undefined;
    set getDescription(v: StringValue | undefined);
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
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** getPressed. Serialized as `:getPressed` */
    get getPressed(): StringValue | undefined;
    set getPressed(v: StringValue | undefined);
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
/** Defines the BackstageGroupButton Class. Serialized as `mso14:button` */
export declare class BackstageGroupButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** expand. Serialized as `:expand` */
    get expand(): ExpandValues | undefined;
    set expand(v: ExpandValues | undefined);
    /** style. Serialized as `:style` */
    get style(): Style2Values | undefined;
    set style(v: Style2Values | undefined);
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
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** isDefinitive. Serialized as `:isDefinitive` */
    get isDefinitive(): BooleanValue | undefined;
    set isDefinitive(v: BooleanValue | undefined);
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
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
}
/** Defines the BackstageMenuToggleButton Class. Serialized as `mso14:toggleButton` */
export declare class BackstageMenuToggleButton extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** getPressed. Serialized as `:getPressed` */
    get getPressed(): StringValue | undefined;
    set getPressed(v: StringValue | undefined);
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
/** Defines the BackstageSubMenu Class. Serialized as `mso14:menu` */
export declare class BackstageSubMenu extends OxmlCompositeElement<BackstageMenuGroup> {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
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
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** getVisible. Serialized as `:getVisible` */
    get getVisible(): StringValue | undefined;
    set getVisible(v: StringValue | undefined);
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
    /** keytip. Serialized as `:keytip` */
    get keytip(): StringValue | undefined;
    set keytip(v: StringValue | undefined);
    /** getKeytip. Serialized as `:getKeytip` */
    get getKeytip(): StringValue | undefined;
    set getKeytip(v: StringValue | undefined);
}
/** Defines the BackstageMenuCheckBox Class. Serialized as `mso14:checkBox` */
export declare class BackstageMenuCheckBox extends OxmlLeafElement {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** getPressed. Serialized as `:getPressed` */
    get getPressed(): StringValue | undefined;
    set getPressed(v: StringValue | undefined);
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
/** Defines the BackstageMenuButton Class. Serialized as `mso14:button` */
export declare class BackstageMenuButton extends OxmlLeafElement {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** onAction. Serialized as `:onAction` */
    get onAction(): StringValue | undefined;
    set onAction(v: StringValue | undefined);
    /** isDefinitive. Serialized as `:isDefinitive` */
    get isDefinitive(): BooleanValue | undefined;
    set isDefinitive(v: BooleanValue | undefined);
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
    /** image. Serialized as `:image` */
    get image(): StringValue | undefined;
    set image(v: StringValue | undefined);
    /** imageMso. Serialized as `:imageMso` */
    get imageMso(): StringValue | undefined;
    set imageMso(v: StringValue | undefined);
    /** getImage. Serialized as `:getImage` */
    get getImage(): StringValue | undefined;
    set getImage(v: StringValue | undefined);
}
/** Defines the ButtonGroup Class. Serialized as `mso14:buttonGroup` */
export declare class ButtonGroup extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | ToggleButtonRegular | GalleryRegular | MenuRegular | DynamicMenuRegular | SplitButtonRegular | Separator> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
}
/** Defines the Box Class. Serialized as `mso14:box` */
export declare class Box extends OxmlCompositeElement<ControlClone | LabelControl | Button | ToggleButton | CheckBox | EditBox | ComboBox | DropDownRegular | Gallery | Menu | DynamicMenu | SplitButton | Box | ButtonGroup> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
    /** boxStyle. Serialized as `:boxStyle` */
    get boxStyle(): BoxStyleValues | undefined;
    set boxStyle(v: BoxStyleValues | undefined);
}
/** Defines the SplitButton Class. Serialized as `mso14:splitButton` */
export declare class SplitButton extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | MenuRegular> {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the DynamicMenu Class. Serialized as `mso14:dynamicMenu` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the Menu Class. Serialized as `mso14:menu` */
export declare class Menu extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | MenuSeparator | SplitButtonRegular | MenuRegular | DynamicMenuRegular> {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the Gallery Class. Serialized as `mso14:gallery` */
export declare class Gallery extends OxmlCompositeElement<Item | ButtonRegular> {
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
    /** showInRibbon. Serialized as `:showInRibbon` */
    get showInRibbon(): GalleryShowInRibbonValues | undefined;
    set showInRibbon(v: GalleryShowInRibbonValues | undefined);
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the DropDownRegular Class. Serialized as `mso14:dropDown` */
export declare class DropDownRegular extends OxmlCompositeElement<Item | ButtonRegular> {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the ComboBox Class. Serialized as `mso14:comboBox` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the EditBox Class. Serialized as `mso14:editBox` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the ToggleButton Class. Serialized as `mso14:toggleButton` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the Button Class. Serialized as `mso14:button` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the LabelControl Class. Serialized as `mso14:labelControl` */
export declare class LabelControl extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the ControlClone Class. Serialized as `mso14:control` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the MenuSeparatorNoTitle Class. Serialized as `mso14:menuSeparator` */
export declare class MenuSeparatorNoTitle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
}
/** Defines the MenuWithTitle Class. Serialized as `mso14:menu` */
export declare class MenuWithTitle extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | MenuSeparator | SplitButtonWithTitle | MenuWithTitle | DynamicMenuRegular> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the SplitButtonWithTitle Class. Serialized as `mso14:splitButton` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the DynamicMenuRegular Class. Serialized as `mso14:dynamicMenu` */
export declare class DynamicMenuRegular extends OxmlLeafElement {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the MenuRegular Class. Serialized as `mso14:menu` */
export declare class MenuRegular extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | MenuSeparator | SplitButtonRegular | MenuRegular | DynamicMenuRegular> {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the SplitButtonRegular Class. Serialized as `mso14:splitButton` */
export declare class SplitButtonRegular extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | MenuRegular> {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    get insertAfterMso(): StringValue | undefined;
    set insertAfterMso(v: StringValue | undefined);
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    get insertBeforeMso(): StringValue | undefined;
    set insertBeforeMso(v: StringValue | undefined);
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the MenuSeparator Class. Serialized as `mso14:menuSeparator` */
export declare class MenuSeparator extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** getTitle. Serialized as `:getTitle` */
    get getTitle(): StringValue | undefined;
    set getTitle(v: StringValue | undefined);
}
/** Defines the ToggleButtonRegular Class. Serialized as `mso14:toggleButton` */
export declare class ToggleButtonRegular extends OxmlLeafElement {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the GalleryRegular Class. Serialized as `mso14:gallery` */
export declare class GalleryRegular extends OxmlCompositeElement<Item | ButtonRegular> {
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
    /** showInRibbon. Serialized as `:showInRibbon` */
    get showInRibbon(): GalleryShowInRibbonValues | undefined;
    set showInRibbon(v: GalleryShowInRibbonValues | undefined);
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the CheckBox Class. Serialized as `mso14:checkBox` */
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the ButtonRegular Class. Serialized as `mso14:button` */
export declare class ButtonRegular extends OxmlLeafElement {
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
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
/** Defines the ControlCloneRegular Class. Serialized as `mso14:control` */
export declare class ControlCloneRegular extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** idQ. Serialized as `:idQ` */
    get qualifiedId(): StringValue | undefined;
    set qualifiedId(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** idMso. Serialized as `:idMso` */
    get idMso(): StringValue | undefined;
    set idMso(v: StringValue | undefined);
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
    get insertAfterQulifiedId(): StringValue | undefined;
    set insertAfterQulifiedId(v: StringValue | undefined);
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    get insertBeforeQulifiedId(): StringValue | undefined;
    set insertBeforeQulifiedId(v: StringValue | undefined);
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
export declare function initOffice2010CustomUINamespace(): {
    prefix: string;
    xmlns: string;
};
