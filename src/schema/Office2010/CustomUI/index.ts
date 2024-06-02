import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { IntegerValue } from '../../../framework/types/IntegerValue';


export enum GalleryShowInRibbonValues {
    /** undefined. Serialized value: `false` */
    False = 'false',
    /** undefined. Serialized value: `0` */
    Zero = '0',
}

export const GalleryShowInRibbonValuesArray = [
    GalleryShowInRibbonValues.False,
    GalleryShowInRibbonValues.Zero,
] as const;

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

export enum TaskSizesValues {
    /** undefined. Serialized value: `largeMediumSmall` */
    LargeMediumSmall = 'largeMediumSmall',
    /** undefined. Serialized value: `largeMedium` */
    LargeMedium = 'largeMedium',
    /** undefined. Serialized value: `large` */
    Large = 'large',
    /** undefined. Serialized value: `mediumSmall` */
    MediumSmall = 'mediumSmall',
    /** undefined. Serialized value: `medium` */
    Medium = 'medium',
    /** undefined. Serialized value: `small` */
    Small = 'small',
}

export const TaskSizesValuesArray = [
    TaskSizesValues.LargeMediumSmall,
    TaskSizesValues.LargeMedium,
    TaskSizesValues.Large,
    TaskSizesValues.MediumSmall,
    TaskSizesValues.Medium,
    TaskSizesValues.Small,
] as const;

export enum ExpandValues {
    /** undefined. Serialized value: `topLeft` */
    TopLeft = 'topLeft',
    /** undefined. Serialized value: `top` */
    Top = 'top',
    /** undefined. Serialized value: `topRight` */
    TopRight = 'topRight',
    /** undefined. Serialized value: `left` */
    Left = 'left',
    /** undefined. Serialized value: `center` */
    Center = 'center',
    /** undefined. Serialized value: `right` */
    Right = 'right',
    /** undefined. Serialized value: `bottomLeft` */
    BottomLeft = 'bottomLeft',
    /** undefined. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** undefined. Serialized value: `bottomRight` */
    BottomRight = 'bottomRight',
}

export const ExpandValuesArray = [
    ExpandValues.TopLeft,
    ExpandValues.Top,
    ExpandValues.TopRight,
    ExpandValues.Left,
    ExpandValues.Center,
    ExpandValues.Right,
    ExpandValues.BottomLeft,
    ExpandValues.Bottom,
    ExpandValues.BottomRight,
] as const;

export enum StyleValues {
    /** undefined. Serialized value: `normal` */
    Normal = 'normal',
    /** undefined. Serialized value: `warning` */
    Warning = 'warning',
    /** undefined. Serialized value: `error` */
    Error = 'error',
}

export const StyleValuesArray = [
    StyleValues.Normal,
    StyleValues.Warning,
    StyleValues.Error,
] as const;

export enum Style2Values {
    /** undefined. Serialized value: `normal` */
    Normal = 'normal',
    /** undefined. Serialized value: `borderless` */
    Borderless = 'borderless',
    /** undefined. Serialized value: `large` */
    Large = 'large',
}

export const Style2ValuesArray = [
    Style2Values.Normal,
    Style2Values.Borderless,
    Style2Values.Large,
] as const;

export enum LayoutChildrenValues {
    /** undefined. Serialized value: `horizontal` */
    Horizontal = 'horizontal',
    /** undefined. Serialized value: `vertical` */
    Vertical = 'vertical',
}

export const LayoutChildrenValuesArray = [
    LayoutChildrenValues.Horizontal,
    LayoutChildrenValues.Vertical,
] as const;

/** Defines the ContextMenus Class. Serialized as `mso14:contextMenus` */
export class ContextMenus extends OxmlCompositeElement<ContextMenu> {

    public static override _Q = 'mso14:contextMenus';

}
/** Defines the Backstage Class. Serialized as `mso14:backstage` */
export class Backstage extends OxmlCompositeElement<BackstageTab | BackstageFastCommandButton> {

    public static override _Q = 'mso14:backstage';
    public static override _A = [':onShow',':onHide',];
    /** onShow. Serialized as `:onShow` */
    public get onShow(): StringValue | undefined { return this._g(':onShow'); }
    public set onShow(v: StringValue | undefined) { this._s(':onShow', v); }
    /** onHide. Serialized as `:onHide` */
    public get onHide(): StringValue | undefined { return this._g(':onHide'); }
    public set onHide(v: StringValue | undefined) { this._s(':onHide', v); }

}
/** Defines the Ribbon Class. Serialized as `mso14:ribbon` */
export class Ribbon extends OxmlCompositeElement<QuickAccessToolbar | Tabs | ContextualTabs> {

    public static override _Q = 'mso14:ribbon';
    public static override _A = [':startFromScratch',];
    /** startFromScratch. Serialized as `:startFromScratch` */
    public get startFromScratch(): BooleanValue | undefined { return this._g(':startFromScratch'); }
    public set startFromScratch(v: BooleanValue | undefined) { this._s(':startFromScratch', v); }
    /** Returns QuickAccessToolbar. */
    public get quickAccessToolbar(): QuickAccessToolbar | undefined { return this._f(QuickAccessToolbar); }
    /** Returns Tabs. */
    public get tabs(): Tabs | undefined { return this._f(Tabs); }
    /** Returns ContextualTabs. */
    public get contextualTabs(): ContextualTabs | undefined { return this._f(ContextualTabs); }

}
/** Defines the Commands Class. Serialized as `mso14:commands` */
export class Commands extends OxmlCompositeElement<Command> {

    public static override _Q = 'mso14:commands';

}
/** Defines the BackstageFastCommandButton Class. Serialized as `mso14:button` */
export class BackstageFastCommandButton extends OxmlLeafElement {

    public static override _Q = 'mso14:button';
    public static override _A = [':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':id',':idQ',':tag',':onAction',':isDefinitive',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',':image',':imageMso',':getImage',];
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** isDefinitive. Serialized as `:isDefinitive` */
    public get isDefinitive(): BooleanValue | undefined { return this._g(':isDefinitive'); }
    public set isDefinitive(v: BooleanValue | undefined) { this._s(':isDefinitive', v); }
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
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }

}
/** Defines the BackstageTab Class. Serialized as `mso14:tab` */
export class BackstageTab extends OxmlCompositeElement<BackstageGroups | SimpleGroups> {

    public static override _Q = 'mso14:tab';
    public static override _A = [':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',':title',':getTitle',':columnWidthPercent',':firstColumnMinWidth',':firstColumnMaxWidth',':secondColumnMinWidth',':secondColumnMaxWidth',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** getTitle. Serialized as `:getTitle` */
    public get getTitle(): StringValue | undefined { return this._g(':getTitle'); }
    public set getTitle(v: StringValue | undefined) { this._s(':getTitle', v); }
    /** columnWidthPercent. Serialized as `:columnWidthPercent` */
    public get columnWidthPercent(): IntegerValue | undefined { return this._g(':columnWidthPercent'); }
    public set columnWidthPercent(v: IntegerValue | undefined) { this._s(':columnWidthPercent', v); }
    /** firstColumnMinWidth. Serialized as `:firstColumnMinWidth` */
    public get firstColumnMinWidth(): IntegerValue | undefined { return this._g(':firstColumnMinWidth'); }
    public set firstColumnMinWidth(v: IntegerValue | undefined) { this._s(':firstColumnMinWidth', v); }
    /** firstColumnMaxWidth. Serialized as `:firstColumnMaxWidth` */
    public get firstColumnMaxWidth(): IntegerValue | undefined { return this._g(':firstColumnMaxWidth'); }
    public set firstColumnMaxWidth(v: IntegerValue | undefined) { this._s(':firstColumnMaxWidth', v); }
    /** secondColumnMinWidth. Serialized as `:secondColumnMinWidth` */
    public get secondColumnMinWidth(): IntegerValue | undefined { return this._g(':secondColumnMinWidth'); }
    public set secondColumnMinWidth(v: IntegerValue | undefined) { this._s(':secondColumnMinWidth', v); }
    /** secondColumnMaxWidth. Serialized as `:secondColumnMaxWidth` */
    public get secondColumnMaxWidth(): IntegerValue | undefined { return this._g(':secondColumnMaxWidth'); }
    public set secondColumnMaxWidth(v: IntegerValue | undefined) { this._s(':secondColumnMaxWidth', v); }
    /** Returns BackstageGroups. */
    public get backstageGroups(): BackstageGroups | undefined { return this._f(BackstageGroups); }
    /** Returns SimpleGroups. */
    public get simpleGroups(): SimpleGroups | undefined { return this._f(SimpleGroups); }

}
/** Defines the SimpleGroups Class. Serialized as `mso14:secondColumn` */
export class SimpleGroups extends OxmlCompositeElement<BackstageGroup | TaskGroup> {

    public static override _Q = 'mso14:secondColumn';

}
/** Defines the BackstageGroups Class. Serialized as `mso14:firstColumn` */
export class BackstageGroups extends OxmlCompositeElement<TaskFormGroup | BackstageGroup | TaskGroup> {

    public static override _Q = 'mso14:firstColumn';

}
/** Defines the TaskFormGroup Class. Serialized as `mso14:taskFormGroup` */
export class TaskFormGroup extends OxmlCompositeElement<TaskFormGroupCategory> {

    public static override _Q = 'mso14:taskFormGroup';
    public static override _A = [':id',':idQ',':tag',':idMso',':label',':getLabel',':visible',':getVisible',':helperText',':getHelperText',':showLabel',':getShowLabel',':allowedTaskSizes',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** helperText. Serialized as `:helperText` */
    public get helperText(): StringValue | undefined { return this._g(':helperText'); }
    public set helperText(v: StringValue | undefined) { this._s(':helperText', v); }
    /** getHelperText. Serialized as `:getHelperText` */
    public get getHelperText(): StringValue | undefined { return this._g(':getHelperText'); }
    public set getHelperText(v: StringValue | undefined) { this._s(':getHelperText', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** allowedTaskSizes. Serialized as `:allowedTaskSizes` */
    public get allowedTaskSizes(): TaskSizesValues | undefined { return this._g(':allowedTaskSizes'); }
    public set allowedTaskSizes(v: TaskSizesValues | undefined) { this._s(':allowedTaskSizes', v); }

}
/** Defines the TaskFormGroupTask Class. Serialized as `mso14:task` */
export class TaskFormGroupTask extends OxmlCompositeElement<BackstageGroup> {

    public static override _Q = 'mso14:task';
    public static override _A = [':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':image',':imageMso',':getImage',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':description',':getDescription',':keytip',':getKeytip',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
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
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }

}
/** Defines the TaskFormGroupCategory Class. Serialized as `mso14:category` */
export class TaskFormGroupCategory extends OxmlCompositeElement<TaskFormGroupTask> {

    public static override _Q = 'mso14:category';
    public static override _A = [':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':label',':getLabel',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }

}
/** Defines the TaskGroupTask Class. Serialized as `mso14:task` */
export class TaskGroupTask extends OxmlLeafElement {

    public static override _Q = 'mso14:task';
    public static override _A = [':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':onAction',':isDefinitive',':image',':imageMso',':getImage',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':description',':getDescription',':keytip',':getKeytip',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** isDefinitive. Serialized as `:isDefinitive` */
    public get isDefinitive(): BooleanValue | undefined { return this._g(':isDefinitive'); }
    public set isDefinitive(v: BooleanValue | undefined) { this._s(':isDefinitive', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
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
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }

}
/** Defines the TaskGroupCategory Class. Serialized as `mso14:category` */
export class TaskGroupCategory extends OxmlCompositeElement<TaskGroupTask> {

    public static override _Q = 'mso14:category';
    public static override _A = [':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':label',':getLabel',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }

}
/** Defines the GroupControlsType Class. */
export abstract class GroupControlsType extends OxmlCompositeElement<BackstageGroupButton | BackstageCheckBox | BackstageEditBox | BackstageDropDown | RadioGroup | BackstageComboBox | Hyperlink | BackstageLabelControl | GroupBox | LayoutContainer | ImageControl> {


}
/** Defines the BottomItemsGroupControls Class. Serialized as `mso14:bottomItems` */
export class BottomItemsGroupControls extends GroupControlsType {

    public static override _Q = 'mso14:bottomItems';

}
/** Defines the TopItemsGroupControls Class. Serialized as `mso14:topItems` */
export class TopItemsGroupControls extends GroupControlsType {

    public static override _Q = 'mso14:topItems';

}
/** Defines the PrimaryItem Class. Serialized as `mso14:primaryItem` */
export class PrimaryItem extends OxmlCompositeElement<BackstageRegularButton | BackstagePrimaryMenu> {

    public static override _Q = 'mso14:primaryItem';
    /** Returns BackstageRegularButton. */
    public get backstageRegularButton(): BackstageRegularButton | undefined { return this._f(BackstageRegularButton); }
    /** Returns BackstagePrimaryMenu. */
    public get backstagePrimaryMenu(): BackstagePrimaryMenu | undefined { return this._f(BackstagePrimaryMenu); }

}
/** Defines the BackstageMenuGroup Class. Serialized as `mso14:menuGroup` */
export class BackstageMenuGroup extends OxmlCompositeElement<BackstageMenuButton | BackstageMenuCheckBox | BackstageSubMenu | BackstageMenuToggleButton> {

    public static override _Q = 'mso14:menuGroup';
    public static override _A = [':id',':idQ',':tag',':label',':getLabel',':itemSize',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** itemSize. Serialized as `:itemSize` */
    public get itemSize(): ItemSizeValues | undefined { return this._g(':itemSize'); }
    public set itemSize(v: ItemSizeValues | undefined) { this._s(':itemSize', v); }

}
/** Defines the BackstagePrimaryMenu Class. Serialized as `mso14:menu` */
export class BackstagePrimaryMenu extends OxmlCompositeElement<BackstageMenuGroup> {

    public static override _Q = 'mso14:menu';
    public static override _A = [':screentip',':getScreentip',':supertip',':getSupertip',':id',':idQ',':tag',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':image',':imageMso',':getImage',':keytip',':getKeytip',];
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
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
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
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }

}
/** Defines the BackstageRegularButton Class. Serialized as `mso14:button` */
export class BackstageRegularButton extends OxmlLeafElement {

    public static override _Q = 'mso14:button';
    public static override _A = [':screentip',':getScreentip',':supertip',':getSupertip',':id',':idQ',':tag',':onAction',':isDefinitive',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',':image',':imageMso',':getImage',];
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
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** isDefinitive. Serialized as `:isDefinitive` */
    public get isDefinitive(): BooleanValue | undefined { return this._g(':isDefinitive'); }
    public set isDefinitive(v: BooleanValue | undefined) { this._s(':isDefinitive', v); }
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
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }

}
/** Defines the BackstageItemType Class. */
export abstract class BackstageItemType extends OxmlLeafElement {

    public static override _A = [':id',':label',':getLabel',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }

}
/** Defines the RadioButtonBackstageItem Class. Serialized as `mso14:radioButton` */
export class RadioButtonBackstageItem extends BackstageItemType {

    public static override _Q = 'mso14:radioButton';

}
/** Defines the ItemBackstageItem Class. Serialized as `mso14:item` */
export class ItemBackstageItem extends BackstageItemType {

    public static override _Q = 'mso14:item';

}
/** Defines the ContextMenu Class. Serialized as `mso14:contextMenu` */
export class ContextMenu extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | SplitButtonRegular | MenuRegular | DynamicMenuRegular | MenuSeparatorNoTitle> {

    public static override _Q = 'mso14:contextMenu';
    public static override _A = [':idMso',];
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }

}
/** Defines the ContextualTabs Class. Serialized as `mso14:contextualTabs` */
export class ContextualTabs extends OxmlCompositeElement<TabSet> {

    public static override _Q = 'mso14:contextualTabs';

}
/** Defines the Tabs Class. Serialized as `mso14:tabs` */
export class Tabs extends OxmlCompositeElement<Tab> {

    public static override _Q = 'mso14:tabs';

}
/** Defines the QuickAccessToolbar Class. Serialized as `mso14:qat` */
export class QuickAccessToolbar extends OxmlCompositeElement<SharedControlsQatItems | DocumentControlsQatItems> {

    public static override _Q = 'mso14:qat';
    /** Returns SharedControlsQatItems. */
    public get sharedControlsQatItems(): SharedControlsQatItems | undefined { return this._f(SharedControlsQatItems); }
    /** Returns DocumentControlsQatItems. */
    public get documentControlsQatItems(): DocumentControlsQatItems | undefined { return this._f(DocumentControlsQatItems); }

}
/** Defines the Command Class. Serialized as `mso14:command` */
export class Command extends OxmlLeafElement {

    public static override _Q = 'mso14:command';
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
/** Defines the TabSet Class. Serialized as `mso14:tabSet` */
export class TabSet extends OxmlCompositeElement<Tab> {

    public static override _Q = 'mso14:tabSet';
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
/** Defines the Tab Class. Serialized as `mso14:tab` */
export class Tab extends OxmlCompositeElement<Group> {

    public static override _Q = 'mso14:tab';
    public static override _A = [':id',':idQ',':tag',':idMso',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
export abstract class QatItemsType extends OxmlCompositeElement<ControlCloneQat | ButtonRegular | Separator> {


}
/** Defines the DocumentControlsQatItems Class. Serialized as `mso14:documentControls` */
export class DocumentControlsQatItems extends QatItemsType {

    public static override _Q = 'mso14:documentControls';

}
/** Defines the SharedControlsQatItems Class. Serialized as `mso14:sharedControls` */
export class SharedControlsQatItems extends QatItemsType {

    public static override _Q = 'mso14:sharedControls';

}
/** Defines the ControlCloneQat Class. Serialized as `mso14:control` */
export class ControlCloneQat extends OxmlLeafElement {

    public static override _Q = 'mso14:control';
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the Group Class. Serialized as `mso14:group` */
export class Group extends OxmlCompositeElement<ControlClone | LabelControl | Button | ToggleButton | CheckBox | EditBox | ComboBox | DropDownRegular | Gallery | Menu | DynamicMenu | SplitButton | Box | ButtonGroup | Separator | DialogBoxLauncher> {

    public static override _Q = 'mso14:group';
    public static override _A = [':id',':idQ',':tag',':idMso',':label',':getLabel',':image',':imageMso',':getImage',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':screentip',':getScreentip',':supertip',':getSupertip',':visible',':getVisible',':keytip',':getKeytip',':autoScale',':centerVertically',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
    /** autoScale. Serialized as `:autoScale` */
    public get autoScale(): BooleanValue | undefined { return this._g(':autoScale'); }
    public set autoScale(v: BooleanValue | undefined) { this._s(':autoScale', v); }
    /** centerVertically. Serialized as `:centerVertically` */
    public get centerVertically(): BooleanValue | undefined { return this._g(':centerVertically'); }
    public set centerVertically(v: BooleanValue | undefined) { this._s(':centerVertically', v); }

}
/** Defines the DialogBoxLauncher Class. Serialized as `mso14:dialogBoxLauncher` */
export class DialogBoxLauncher extends OxmlCompositeElement<ButtonRegular> {

    public static override _Q = 'mso14:dialogBoxLauncher';
    /** Returns ButtonRegular. */
    public get buttonRegular(): ButtonRegular | undefined { return this._f(ButtonRegular); }

}
/** Defines the Separator Class. Serialized as `mso14:separator` */
export class Separator extends OxmlLeafElement {

    public static override _Q = 'mso14:separator';
    public static override _A = [':id',':idQ',':tag',':visible',':getVisible',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }

}
/** Defines the VisibleToggleButton Class. Serialized as `mso14:toggleButton` */
export class VisibleToggleButton extends OxmlLeafElement {

    public static override _Q = 'mso14:toggleButton';
    public static override _A = [':getPressed',':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the VisibleButton Class. Serialized as `mso14:button` */
export class VisibleButton extends OxmlLeafElement {

    public static override _Q = 'mso14:button';
    public static override _A = [':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the Item Class. Serialized as `mso14:item` */
export class Item extends OxmlLeafElement {

    public static override _Q = 'mso14:item';
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
/** Defines the CustomUI Class. Serialized as `mso14:customUI` */
export class CustomUI extends OxmlPartRootElement<Commands | Ribbon | Backstage | ContextMenus> {

    public static override _Q = 'mso14:customUI';
    public static override _A = [':onLoad',':loadImage',];
    /** onLoad. Serialized as `:onLoad` */
    public get onLoad(): StringValue | undefined { return this._g(':onLoad'); }
    public set onLoad(v: StringValue | undefined) { this._s(':onLoad', v); }
    /** loadImage. Serialized as `:loadImage` */
    public get loadImage(): StringValue | undefined { return this._g(':loadImage'); }
    public set loadImage(v: StringValue | undefined) { this._s(':loadImage', v); }
    /** Returns Commands. */
    public get commands(): Commands | undefined { return this._f(Commands); }
    /** Returns Ribbon. */
    public get ribbon(): Ribbon | undefined { return this._f(Ribbon); }
    /** Returns Backstage. */
    public get backstage(): Backstage | undefined { return this._f(Backstage); }
    /** Returns ContextMenus. */
    public get contextMenus(): ContextMenus | undefined { return this._f(ContextMenus); }

}
/** Defines the MenuRoot Class. Serialized as `mso14:menu` */
export class MenuRoot extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | MenuSeparator | SplitButtonRegular | MenuRegular | DynamicMenuRegular> {

    public static override _Q = 'mso14:menu';
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
/** Defines the TaskGroup Class. Serialized as `mso14:taskGroup` */
export class TaskGroup extends OxmlCompositeElement<TaskGroupCategory> {

    public static override _Q = 'mso14:taskGroup';
    public static override _A = [':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':label',':getLabel',':visible',':getVisible',':helperText',':getHelperText',':showLabel',':getShowLabel',':allowedTaskSizes',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** helperText. Serialized as `:helperText` */
    public get helperText(): StringValue | undefined { return this._g(':helperText'); }
    public set helperText(v: StringValue | undefined) { this._s(':helperText', v); }
    /** getHelperText. Serialized as `:getHelperText` */
    public get getHelperText(): StringValue | undefined { return this._g(':getHelperText'); }
    public set getHelperText(v: StringValue | undefined) { this._s(':getHelperText', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }
    /** allowedTaskSizes. Serialized as `:allowedTaskSizes` */
    public get allowedTaskSizes(): TaskSizesValues | undefined { return this._g(':allowedTaskSizes'); }
    public set allowedTaskSizes(v: TaskSizesValues | undefined) { this._s(':allowedTaskSizes', v); }

}
/** Defines the BackstageGroup Class. Serialized as `mso14:group` */
export class BackstageGroup extends OxmlCompositeElement<PrimaryItem | TopItemsGroupControls | BottomItemsGroupControls> {

    public static override _Q = 'mso14:group';
    public static override _A = [':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':label',':getLabel',':visible',':getVisible',':style',':getStyle',':helperText',':getHelperText',':showLabel',':getShowLabel',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** style. Serialized as `:style` */
    public get style(): StyleValues | undefined { return this._g(':style'); }
    public set style(v: StyleValues | undefined) { this._s(':style', v); }
    /** getStyle. Serialized as `:getStyle` */
    public get getStyle(): StringValue | undefined { return this._g(':getStyle'); }
    public set getStyle(v: StringValue | undefined) { this._s(':getStyle', v); }
    /** helperText. Serialized as `:helperText` */
    public get helperText(): StringValue | undefined { return this._g(':helperText'); }
    public set helperText(v: StringValue | undefined) { this._s(':helperText', v); }
    /** getHelperText. Serialized as `:getHelperText` */
    public get getHelperText(): StringValue | undefined { return this._g(':getHelperText'); }
    public set getHelperText(v: StringValue | undefined) { this._s(':getHelperText', v); }
    /** showLabel. Serialized as `:showLabel` */
    public get showLabel(): BooleanValue | undefined { return this._g(':showLabel'); }
    public set showLabel(v: BooleanValue | undefined) { this._s(':showLabel', v); }
    /** getShowLabel. Serialized as `:getShowLabel` */
    public get getShowLabel(): StringValue | undefined { return this._g(':getShowLabel'); }
    public set getShowLabel(v: StringValue | undefined) { this._s(':getShowLabel', v); }

}
/** Defines the ImageControl Class. Serialized as `mso14:imageControl` */
export class ImageControl extends OxmlLeafElement {

    public static override _Q = 'mso14:imageControl';
    public static override _A = [':id',':idQ',':tag',':enabled',':getEnabled',':visible',':getVisible',':image',':imageMso',':getImage',':altText',':getAltText',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** altText. Serialized as `:altText` */
    public get altText(): StringValue | undefined { return this._g(':altText'); }
    public set altText(v: StringValue | undefined) { this._s(':altText', v); }
    /** getAltText. Serialized as `:getAltText` */
    public get getAltText(): StringValue | undefined { return this._g(':getAltText'); }
    public set getAltText(v: StringValue | undefined) { this._s(':getAltText', v); }

}
/** Defines the LayoutContainer Class. Serialized as `mso14:layoutContainer` */
export class LayoutContainer extends OxmlCompositeElement<BackstageGroupButton | BackstageCheckBox | BackstageEditBox | BackstageDropDown | RadioGroup | BackstageComboBox | Hyperlink | BackstageLabelControl | GroupBox | LayoutContainer | ImageControl> {

    public static override _Q = 'mso14:layoutContainer';
    public static override _A = [':id',':idQ',':tag',':align',':expand',':layoutChildren',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** align. Serialized as `:align` */
    public get align(): ExpandValues | undefined { return this._g(':align'); }
    public set align(v: ExpandValues | undefined) { this._s(':align', v); }
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
    /** layoutChildren. Serialized as `:layoutChildren` */
    public get layoutChildren(): LayoutChildrenValues | undefined { return this._g(':layoutChildren'); }
    public set layoutChildren(v: LayoutChildrenValues | undefined) { this._s(':layoutChildren', v); }

}
/** Defines the GroupBox Class. Serialized as `mso14:groupBox` */
export class GroupBox extends OxmlCompositeElement<BackstageGroupButton | BackstageCheckBox | BackstageEditBox | BackstageDropDown | RadioGroup | BackstageComboBox | Hyperlink | BackstageLabelControl | GroupBox | LayoutContainer | ImageControl> {

    public static override _Q = 'mso14:groupBox';
    public static override _A = [':id',':idQ',':tag',':expand',':label',':getLabel',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }

}
/** Defines the BackstageLabelControl Class. Serialized as `mso14:labelControl` */
export class BackstageLabelControl extends OxmlLeafElement {

    public static override _Q = 'mso14:labelControl';
    public static override _A = [':id',':idQ',':tag',':alignLabel',':expand',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':noWrap',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** alignLabel. Serialized as `:alignLabel` */
    public get alignLabel(): ExpandValues | undefined { return this._g(':alignLabel'); }
    public set alignLabel(v: ExpandValues | undefined) { this._s(':alignLabel', v); }
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
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
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** noWrap. Serialized as `:noWrap` */
    public get noWrap(): BooleanValue | undefined { return this._g(':noWrap'); }
    public set noWrap(v: BooleanValue | undefined) { this._s(':noWrap', v); }

}
/** Defines the Hyperlink Class. Serialized as `mso14:hyperlink` */
export class Hyperlink extends OxmlLeafElement {

    public static override _Q = 'mso14:hyperlink';
    public static override _A = [':id',':idQ',':tag',':alignLabel',':expand',':enabled',':getEnabled',':visible',':getVisible',':keytip',':getKeytip',':label',':getLabel',':onAction',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':target',':getTarget',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** alignLabel. Serialized as `:alignLabel` */
    public get alignLabel(): ExpandValues | undefined { return this._g(':alignLabel'); }
    public set alignLabel(v: ExpandValues | undefined) { this._s(':alignLabel', v); }
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** getEnabled. Serialized as `:getEnabled` */
    public get getEnabled(): StringValue | undefined { return this._g(':getEnabled'); }
    public set getEnabled(v: StringValue | undefined) { this._s(':getEnabled', v); }
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
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** getLabel. Serialized as `:getLabel` */
    public get getLabel(): StringValue | undefined { return this._g(':getLabel'); }
    public set getLabel(v: StringValue | undefined) { this._s(':getLabel', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
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
    /** target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** getTarget. Serialized as `:getTarget` */
    public get getTarget(): StringValue | undefined { return this._g(':getTarget'); }
    public set getTarget(v: StringValue | undefined) { this._s(':getTarget', v); }

}
/** Defines the BackstageComboBox Class. Serialized as `mso14:comboBox` */
export class BackstageComboBox extends OxmlCompositeElement<ItemBackstageItem> {

    public static override _Q = 'mso14:comboBox';
    public static override _A = [':id',':idQ',':tag',':alignLabel',':expand',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',':getText',':onChange',':sizeString',':getItemCount',':getItemLabel',':getItemID',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** alignLabel. Serialized as `:alignLabel` */
    public get alignLabel(): ExpandValues | undefined { return this._g(':alignLabel'); }
    public set alignLabel(v: ExpandValues | undefined) { this._s(':alignLabel', v); }
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
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
    /** getText. Serialized as `:getText` */
    public get getText(): StringValue | undefined { return this._g(':getText'); }
    public set getText(v: StringValue | undefined) { this._s(':getText', v); }
    /** onChange. Serialized as `:onChange` */
    public get onChange(): StringValue | undefined { return this._g(':onChange'); }
    public set onChange(v: StringValue | undefined) { this._s(':onChange', v); }
    /** sizeString. Serialized as `:sizeString` */
    public get sizeString(): StringValue | undefined { return this._g(':sizeString'); }
    public set sizeString(v: StringValue | undefined) { this._s(':sizeString', v); }
    /** getItemCount. Serialized as `:getItemCount` */
    public get getItemCount(): StringValue | undefined { return this._g(':getItemCount'); }
    public set getItemCount(v: StringValue | undefined) { this._s(':getItemCount', v); }
    /** getItemLabel. Serialized as `:getItemLabel` */
    public get getItemLabel(): StringValue | undefined { return this._g(':getItemLabel'); }
    public set getItemLabel(v: StringValue | undefined) { this._s(':getItemLabel', v); }
    /** getItemID. Serialized as `:getItemID` */
    public get getItemID(): StringValue | undefined { return this._g(':getItemID'); }
    public set getItemID(v: StringValue | undefined) { this._s(':getItemID', v); }

}
/** Defines the RadioGroup Class. Serialized as `mso14:radioGroup` */
export class RadioGroup extends OxmlCompositeElement<RadioButtonBackstageItem> {

    public static override _Q = 'mso14:radioGroup';
    public static override _A = [':id',':idQ',':tag',':alignLabel',':expand',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':onAction',':keytip',':getKeytip',':getSelectedItemIndex',':getItemCount',':getItemLabel',':getItemID',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** alignLabel. Serialized as `:alignLabel` */
    public get alignLabel(): ExpandValues | undefined { return this._g(':alignLabel'); }
    public set alignLabel(v: ExpandValues | undefined) { this._s(':alignLabel', v); }
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
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
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    public get getSelectedItemIndex(): StringValue | undefined { return this._g(':getSelectedItemIndex'); }
    public set getSelectedItemIndex(v: StringValue | undefined) { this._s(':getSelectedItemIndex', v); }
    /** getItemCount. Serialized as `:getItemCount` */
    public get getItemCount(): StringValue | undefined { return this._g(':getItemCount'); }
    public set getItemCount(v: StringValue | undefined) { this._s(':getItemCount', v); }
    /** getItemLabel. Serialized as `:getItemLabel` */
    public get getItemLabel(): StringValue | undefined { return this._g(':getItemLabel'); }
    public set getItemLabel(v: StringValue | undefined) { this._s(':getItemLabel', v); }
    /** getItemID. Serialized as `:getItemID` */
    public get getItemID(): StringValue | undefined { return this._g(':getItemID'); }
    public set getItemID(v: StringValue | undefined) { this._s(':getItemID', v); }

}
/** Defines the BackstageDropDown Class. Serialized as `mso14:dropDown` */
export class BackstageDropDown extends OxmlCompositeElement<ItemBackstageItem> {

    public static override _Q = 'mso14:dropDown';
    public static override _A = [':id',':idQ',':tag',':alignLabel',':expand',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':onAction',':screentip',':getScreentip',':supertip',':getSupertip',':keytip',':getKeytip',':getSelectedItemIndex',':sizeString',':getItemCount',':getItemLabel',':getItemID',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** alignLabel. Serialized as `:alignLabel` */
    public get alignLabel(): ExpandValues | undefined { return this._g(':alignLabel'); }
    public set alignLabel(v: ExpandValues | undefined) { this._s(':alignLabel', v); }
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
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
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
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
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }
    /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
    public get getSelectedItemIndex(): StringValue | undefined { return this._g(':getSelectedItemIndex'); }
    public set getSelectedItemIndex(v: StringValue | undefined) { this._s(':getSelectedItemIndex', v); }
    /** sizeString. Serialized as `:sizeString` */
    public get sizeString(): StringValue | undefined { return this._g(':sizeString'); }
    public set sizeString(v: StringValue | undefined) { this._s(':sizeString', v); }
    /** getItemCount. Serialized as `:getItemCount` */
    public get getItemCount(): StringValue | undefined { return this._g(':getItemCount'); }
    public set getItemCount(v: StringValue | undefined) { this._s(':getItemCount', v); }
    /** getItemLabel. Serialized as `:getItemLabel` */
    public get getItemLabel(): StringValue | undefined { return this._g(':getItemLabel'); }
    public set getItemLabel(v: StringValue | undefined) { this._s(':getItemLabel', v); }
    /** getItemID. Serialized as `:getItemID` */
    public get getItemID(): StringValue | undefined { return this._g(':getItemID'); }
    public set getItemID(v: StringValue | undefined) { this._s(':getItemID', v); }

}
/** Defines the BackstageEditBox Class. Serialized as `mso14:editBox` */
export class BackstageEditBox extends OxmlLeafElement {

    public static override _Q = 'mso14:editBox';
    public static override _A = [':id',':idQ',':tag',':alignLabel',':expand',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',':getText',':onChange',':maxLength',':sizeString',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** alignLabel. Serialized as `:alignLabel` */
    public get alignLabel(): ExpandValues | undefined { return this._g(':alignLabel'); }
    public set alignLabel(v: ExpandValues | undefined) { this._s(':alignLabel', v); }
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
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
    /** getText. Serialized as `:getText` */
    public get getText(): StringValue | undefined { return this._g(':getText'); }
    public set getText(v: StringValue | undefined) { this._s(':getText', v); }
    /** onChange. Serialized as `:onChange` */
    public get onChange(): StringValue | undefined { return this._g(':onChange'); }
    public set onChange(v: StringValue | undefined) { this._s(':onChange', v); }
    /** maxLength. Serialized as `:maxLength` */
    public get maxLength(): IntegerValue | undefined { return this._g(':maxLength'); }
    public set maxLength(v: IntegerValue | undefined) { this._s(':maxLength', v); }
    /** sizeString. Serialized as `:sizeString` */
    public get sizeString(): StringValue | undefined { return this._g(':sizeString'); }
    public set sizeString(v: StringValue | undefined) { this._s(':sizeString', v); }

}
/** Defines the BackstageCheckBox Class. Serialized as `mso14:checkBox` */
export class BackstageCheckBox extends OxmlLeafElement {

    public static override _Q = 'mso14:checkBox';
    public static override _A = [':expand',':description',':getDescription',':screentip',':getScreentip',':supertip',':getSupertip',':id',':idQ',':tag',':onAction',':getPressed',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',];
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** getDescription. Serialized as `:getDescription` */
    public get getDescription(): StringValue | undefined { return this._g(':getDescription'); }
    public set getDescription(v: StringValue | undefined) { this._s(':getDescription', v); }
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
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** getPressed. Serialized as `:getPressed` */
    public get getPressed(): StringValue | undefined { return this._g(':getPressed'); }
    public set getPressed(v: StringValue | undefined) { this._s(':getPressed', v); }
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
/** Defines the BackstageGroupButton Class. Serialized as `mso14:button` */
export class BackstageGroupButton extends OxmlLeafElement {

    public static override _Q = 'mso14:button';
    public static override _A = [':expand',':style',':screentip',':getScreentip',':supertip',':getSupertip',':id',':idQ',':tag',':onAction',':isDefinitive',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',':image',':imageMso',':getImage',];
    /** expand. Serialized as `:expand` */
    public get expand(): ExpandValues | undefined { return this._g(':expand'); }
    public set expand(v: ExpandValues | undefined) { this._s(':expand', v); }
    /** style. Serialized as `:style` */
    public get style(): Style2Values | undefined { return this._g(':style'); }
    public set style(v: Style2Values | undefined) { this._s(':style', v); }
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
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** isDefinitive. Serialized as `:isDefinitive` */
    public get isDefinitive(): BooleanValue | undefined { return this._g(':isDefinitive'); }
    public set isDefinitive(v: BooleanValue | undefined) { this._s(':isDefinitive', v); }
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
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }

}
/** Defines the BackstageMenuToggleButton Class. Serialized as `mso14:toggleButton` */
export class BackstageMenuToggleButton extends OxmlLeafElement {

    public static override _Q = 'mso14:toggleButton';
    public static override _A = [':image',':imageMso',':getImage',':description',':getDescription',':id',':idQ',':tag',':onAction',':getPressed',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',];
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** getPressed. Serialized as `:getPressed` */
    public get getPressed(): StringValue | undefined { return this._g(':getPressed'); }
    public set getPressed(v: StringValue | undefined) { this._s(':getPressed', v); }
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
/** Defines the BackstageSubMenu Class. Serialized as `mso14:menu` */
export class BackstageSubMenu extends OxmlCompositeElement<BackstageMenuGroup> {

    public static override _Q = 'mso14:menu';
    public static override _A = [':description',':getDescription',':id',':idQ',':tag',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':image',':imageMso',':getImage',':keytip',':getKeytip',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
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
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** getVisible. Serialized as `:getVisible` */
    public get getVisible(): StringValue | undefined { return this._g(':getVisible'); }
    public set getVisible(v: StringValue | undefined) { this._s(':getVisible', v); }
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }
    /** keytip. Serialized as `:keytip` */
    public get keytip(): StringValue | undefined { return this._g(':keytip'); }
    public set keytip(v: StringValue | undefined) { this._s(':keytip', v); }
    /** getKeytip. Serialized as `:getKeytip` */
    public get getKeytip(): StringValue | undefined { return this._g(':getKeytip'); }
    public set getKeytip(v: StringValue | undefined) { this._s(':getKeytip', v); }

}
/** Defines the BackstageMenuCheckBox Class. Serialized as `mso14:checkBox` */
export class BackstageMenuCheckBox extends OxmlLeafElement {

    public static override _Q = 'mso14:checkBox';
    public static override _A = [':description',':getDescription',':id',':idQ',':tag',':onAction',':getPressed',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** getPressed. Serialized as `:getPressed` */
    public get getPressed(): StringValue | undefined { return this._g(':getPressed'); }
    public set getPressed(v: StringValue | undefined) { this._s(':getPressed', v); }
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
/** Defines the BackstageMenuButton Class. Serialized as `mso14:button` */
export class BackstageMenuButton extends OxmlLeafElement {

    public static override _Q = 'mso14:button';
    public static override _A = [':description',':getDescription',':id',':idQ',':tag',':onAction',':isDefinitive',':enabled',':getEnabled',':label',':getLabel',':visible',':getVisible',':keytip',':getKeytip',':image',':imageMso',':getImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** onAction. Serialized as `:onAction` */
    public get onAction(): StringValue | undefined { return this._g(':onAction'); }
    public set onAction(v: StringValue | undefined) { this._s(':onAction', v); }
    /** isDefinitive. Serialized as `:isDefinitive` */
    public get isDefinitive(): BooleanValue | undefined { return this._g(':isDefinitive'); }
    public set isDefinitive(v: BooleanValue | undefined) { this._s(':isDefinitive', v); }
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
    /** image. Serialized as `:image` */
    public get image(): StringValue | undefined { return this._g(':image'); }
    public set image(v: StringValue | undefined) { this._s(':image', v); }
    /** imageMso. Serialized as `:imageMso` */
    public get imageMso(): StringValue | undefined { return this._g(':imageMso'); }
    public set imageMso(v: StringValue | undefined) { this._s(':imageMso', v); }
    /** getImage. Serialized as `:getImage` */
    public get getImage(): StringValue | undefined { return this._g(':getImage'); }
    public set getImage(v: StringValue | undefined) { this._s(':getImage', v); }

}
/** Defines the ButtonGroup Class. Serialized as `mso14:buttonGroup` */
export class ButtonGroup extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | ToggleButtonRegular | GalleryRegular | MenuRegular | DynamicMenuRegular | SplitButtonRegular | Separator> {

    public static override _Q = 'mso14:buttonGroup';
    public static override _A = [':id',':idQ',':tag',':visible',':getVisible',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }

}
/** Defines the Box Class. Serialized as `mso14:box` */
export class Box extends OxmlCompositeElement<ControlClone | LabelControl | Button | ToggleButton | CheckBox | EditBox | ComboBox | DropDownRegular | Gallery | Menu | DynamicMenu | SplitButton | Box | ButtonGroup> {

    public static override _Q = 'mso14:box';
    public static override _A = [':id',':idQ',':tag',':visible',':getVisible',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':boxStyle',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** boxStyle. Serialized as `:boxStyle` */
    public get boxStyle(): BoxStyleValues | undefined { return this._g(':boxStyle'); }
    public set boxStyle(v: BoxStyleValues | undefined) { this._s(':boxStyle', v); }

}
/** Defines the SplitButton Class. Serialized as `mso14:splitButton` */
export class SplitButton extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | MenuRegular> {

    public static override _Q = 'mso14:splitButton';
    public static override _A = [':size',':getSize',':enabled',':getEnabled',':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the DynamicMenu Class. Serialized as `mso14:dynamicMenu` */
export class DynamicMenu extends OxmlLeafElement {

    public static override _Q = 'mso14:dynamicMenu';
    public static override _A = [':size',':getSize',':description',':getDescription',':id',':idQ',':tag',':idMso',':getContent',':invalidateContentOnDrop',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the Menu Class. Serialized as `mso14:menu` */
export class Menu extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | MenuSeparator | SplitButtonRegular | MenuRegular | DynamicMenuRegular> {

    public static override _Q = 'mso14:menu';
    public static override _A = [':size',':getSize',':itemSize',':description',':getDescription',':id',':idQ',':tag',':idMso',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the Gallery Class. Serialized as `mso14:gallery` */
export class Gallery extends OxmlCompositeElement<Item | ButtonRegular> {

    public static override _Q = 'mso14:gallery';
    public static override _A = [':size',':getSize',':description',':getDescription',':invalidateContentOnDrop',':columns',':rows',':itemWidth',':itemHeight',':getItemWidth',':getItemHeight',':showItemLabel',':showInRibbon',':onAction',':enabled',':getEnabled',':image',':imageMso',':getImage',':showItemImage',':getItemCount',':getItemLabel',':getItemScreentip',':getItemSupertip',':getItemImage',':getItemID',':sizeString',':getSelectedItemID',':getSelectedItemIndex',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    /** showInRibbon. Serialized as `:showInRibbon` */
    public get showInRibbon(): GalleryShowInRibbonValues | undefined { return this._g(':showInRibbon'); }
    public set showInRibbon(v: GalleryShowInRibbonValues | undefined) { this._s(':showInRibbon', v); }
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the DropDownRegular Class. Serialized as `mso14:dropDown` */
export class DropDownRegular extends OxmlCompositeElement<Item | ButtonRegular> {

    public static override _Q = 'mso14:dropDown';
    public static override _A = [':onAction',':enabled',':getEnabled',':image',':imageMso',':getImage',':showItemImage',':getItemCount',':getItemLabel',':getItemScreentip',':getItemSupertip',':getItemImage',':getItemID',':sizeString',':getSelectedItemID',':getSelectedItemIndex',':showItemLabel',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the ComboBox Class. Serialized as `mso14:comboBox` */
export class ComboBox extends OxmlCompositeElement<Item> {

    public static override _Q = 'mso14:comboBox';
    public static override _A = [':showItemImage',':getItemCount',':getItemLabel',':getItemScreentip',':getItemSupertip',':getItemImage',':getItemID',':sizeString',':invalidateContentOnDrop',':enabled',':getEnabled',':image',':imageMso',':getImage',':maxLength',':getText',':onChange',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the EditBox Class. Serialized as `mso14:editBox` */
export class EditBox extends OxmlLeafElement {

    public static override _Q = 'mso14:editBox';
    public static override _A = [':enabled',':getEnabled',':image',':imageMso',':getImage',':maxLength',':getText',':onChange',':sizeString',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the ToggleButton Class. Serialized as `mso14:toggleButton` */
export class ToggleButton extends OxmlLeafElement {

    public static override _Q = 'mso14:toggleButton';
    public static override _A = [':size',':getSize',':getPressed',':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the Button Class. Serialized as `mso14:button` */
export class Button extends OxmlLeafElement {

    public static override _Q = 'mso14:button';
    public static override _A = [':size',':getSize',':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the LabelControl Class. Serialized as `mso14:labelControl` */
export class LabelControl extends OxmlLeafElement {

    public static override _Q = 'mso14:labelControl';
    public static override _A = [':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':showLabel',':getShowLabel',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the ControlClone Class. Serialized as `mso14:control` */
export class ControlClone extends OxmlLeafElement {

    public static override _Q = 'mso14:control';
    public static override _A = [':size',':getSize',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the MenuSeparatorNoTitle Class. Serialized as `mso14:menuSeparator` */
export class MenuSeparatorNoTitle extends OxmlLeafElement {

    public static override _Q = 'mso14:menuSeparator';
    public static override _A = [':id',':idQ',':tag',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }

}
/** Defines the MenuWithTitle Class. Serialized as `mso14:menu` */
export class MenuWithTitle extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | MenuSeparator | SplitButtonWithTitle | MenuWithTitle | DynamicMenuRegular> {

    public static override _Q = 'mso14:menu';
    public static override _A = [':id',':idQ',':tag',':idMso',':itemSize',':title',':getTitle',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the SplitButtonWithTitle Class. Serialized as `mso14:splitButton` */
export class SplitButtonWithTitle extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | MenuWithTitle> {

    public static override _Q = 'mso14:splitButton';
    public static override _A = [':enabled',':getEnabled',':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the DynamicMenuRegular Class. Serialized as `mso14:dynamicMenu` */
export class DynamicMenuRegular extends OxmlLeafElement {

    public static override _Q = 'mso14:dynamicMenu';
    public static override _A = [':description',':getDescription',':id',':idQ',':tag',':idMso',':getContent',':invalidateContentOnDrop',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the MenuRegular Class. Serialized as `mso14:menu` */
export class MenuRegular extends OxmlCompositeElement<ControlCloneRegular | ButtonRegular | CheckBox | GalleryRegular | ToggleButtonRegular | MenuSeparator | SplitButtonRegular | MenuRegular | DynamicMenuRegular> {

    public static override _Q = 'mso14:menu';
    public static override _A = [':itemSize',':description',':getDescription',':id',':idQ',':tag',':idMso',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the SplitButtonRegular Class. Serialized as `mso14:splitButton` */
export class SplitButtonRegular extends OxmlCompositeElement<VisibleButton | VisibleToggleButton | MenuRegular> {

    public static override _Q = 'mso14:splitButton';
    public static override _A = [':enabled',':getEnabled',':id',':idQ',':tag',':idMso',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
    /** insertAfterMso. Serialized as `:insertAfterMso` */
    public get insertAfterMso(): StringValue | undefined { return this._g(':insertAfterMso'); }
    public set insertAfterMso(v: StringValue | undefined) { this._s(':insertAfterMso', v); }
    /** insertBeforeMso. Serialized as `:insertBeforeMso` */
    public get insertBeforeMso(): StringValue | undefined { return this._g(':insertBeforeMso'); }
    public set insertBeforeMso(v: StringValue | undefined) { this._s(':insertBeforeMso', v); }
    /** insertAfterQ. Serialized as `:insertAfterQ` */
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the MenuSeparator Class. Serialized as `mso14:menuSeparator` */
export class MenuSeparator extends OxmlLeafElement {

    public static override _Q = 'mso14:menuSeparator';
    public static override _A = [':id',':idQ',':tag',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':title',':getTitle',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** getTitle. Serialized as `:getTitle` */
    public get getTitle(): StringValue | undefined { return this._g(':getTitle'); }
    public set getTitle(v: StringValue | undefined) { this._s(':getTitle', v); }

}
/** Defines the ToggleButtonRegular Class. Serialized as `mso14:toggleButton` */
export class ToggleButtonRegular extends OxmlLeafElement {

    public static override _Q = 'mso14:toggleButton';
    public static override _A = [':getPressed',':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the GalleryRegular Class. Serialized as `mso14:gallery` */
export class GalleryRegular extends OxmlCompositeElement<Item | ButtonRegular> {

    public static override _Q = 'mso14:gallery';
    public static override _A = [':description',':getDescription',':invalidateContentOnDrop',':columns',':rows',':itemWidth',':itemHeight',':getItemWidth',':getItemHeight',':showItemLabel',':showInRibbon',':onAction',':enabled',':getEnabled',':image',':imageMso',':getImage',':showItemImage',':getItemCount',':getItemLabel',':getItemScreentip',':getItemSupertip',':getItemImage',':getItemID',':sizeString',':getSelectedItemID',':getSelectedItemIndex',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    /** showInRibbon. Serialized as `:showInRibbon` */
    public get showInRibbon(): GalleryShowInRibbonValues | undefined { return this._g(':showInRibbon'); }
    public set showInRibbon(v: GalleryShowInRibbonValues | undefined) { this._s(':showInRibbon', v); }
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the CheckBox Class. Serialized as `mso14:checkBox` */
export class CheckBox extends OxmlLeafElement {

    public static override _Q = 'mso14:checkBox';
    public static override _A = [':getPressed',':onAction',':enabled',':getEnabled',':description',':getDescription',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the ButtonRegular Class. Serialized as `mso14:button` */
export class ButtonRegular extends OxmlLeafElement {

    public static override _Q = 'mso14:button';
    public static override _A = [':onAction',':enabled',':getEnabled',':description',':getDescription',':image',':imageMso',':getImage',':id',':idQ',':tag',':idMso',':screentip',':getScreentip',':supertip',':getSupertip',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
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
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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
/** Defines the ControlCloneRegular Class. Serialized as `mso14:control` */
export class ControlCloneRegular extends OxmlLeafElement {

    public static override _Q = 'mso14:control';
    public static override _A = [':idQ',':tag',':idMso',':image',':imageMso',':getImage',':screentip',':getScreentip',':supertip',':getSupertip',':enabled',':getEnabled',':label',':getLabel',':insertAfterMso',':insertBeforeMso',':insertAfterQ',':insertBeforeQ',':visible',':getVisible',':keytip',':getKeytip',':showLabel',':getShowLabel',':showImage',':getShowImage',];
    /** idQ. Serialized as `:idQ` */
    public get qualifiedId(): StringValue | undefined { return this._g(':idQ'); }
    public set qualifiedId(v: StringValue | undefined) { this._s(':idQ', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** idMso. Serialized as `:idMso` */
    public get idMso(): StringValue | undefined { return this._g(':idMso'); }
    public set idMso(v: StringValue | undefined) { this._s(':idMso', v); }
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
    public get insertAfterQulifiedId(): StringValue | undefined { return this._g(':insertAfterQ'); }
    public set insertAfterQulifiedId(v: StringValue | undefined) { this._s(':insertAfterQ', v); }
    /** insertBeforeQ. Serialized as `:insertBeforeQ` */
    public get insertBeforeQulifiedId(): StringValue | undefined { return this._g(':insertBeforeQ'); }
    public set insertBeforeQulifiedId(v: StringValue | undefined) { this._s(':insertBeforeQ', v); }
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

export function initOffice2010CustomUINamespace() {
    ContextMenus._C = {
        'mso14:contextMenu': ContextMenu,
    };
    Backstage._C = {
        'mso14:tab': BackstageTab,
        'mso14:button': BackstageFastCommandButton,
    };
    Backstage._D = {
        ':onShow': new OxmlAttr(':onShow', OxmlType.StringValue),
        ':onHide': new OxmlAttr(':onHide', OxmlType.StringValue),
    };
    Ribbon._C = {
        'mso14:qat': QuickAccessToolbar,
        'mso14:tabs': Tabs,
        'mso14:contextualTabs': ContextualTabs,
    };
    Ribbon._D = {
        ':startFromScratch': new OxmlAttr(':startFromScratch', OxmlType.BooleanValue),
    };
    Commands._C = {
        'mso14:command': Command,
    };
    BackstageFastCommandButton._D = {
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':isDefinitive': new OxmlAttr(':isDefinitive', OxmlType.BooleanValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
    };
    BackstageTab._C = {
        'mso14:firstColumn': BackstageGroups,
        'mso14:secondColumn': SimpleGroups,
    };
    BackstageTab._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':getTitle': new OxmlAttr(':getTitle', OxmlType.StringValue),
        ':columnWidthPercent': new OxmlAttr(':columnWidthPercent', OxmlType.IntegerValue),
        ':firstColumnMinWidth': new OxmlAttr(':firstColumnMinWidth', OxmlType.IntegerValue),
        ':firstColumnMaxWidth': new OxmlAttr(':firstColumnMaxWidth', OxmlType.IntegerValue),
        ':secondColumnMinWidth': new OxmlAttr(':secondColumnMinWidth', OxmlType.IntegerValue),
        ':secondColumnMaxWidth': new OxmlAttr(':secondColumnMaxWidth', OxmlType.IntegerValue),
    };
    SimpleGroups._C = {
        'mso14:group': BackstageGroup,
        'mso14:taskGroup': TaskGroup,
    };
    BackstageGroups._C = {
        'mso14:taskFormGroup': TaskFormGroup,
        'mso14:group': BackstageGroup,
        'mso14:taskGroup': TaskGroup,
    };
    TaskFormGroup._C = {
        'mso14:category': TaskFormGroupCategory,
    };
    TaskFormGroup._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':helperText': new OxmlAttr(':helperText', OxmlType.StringValue),
        ':getHelperText': new OxmlAttr(':getHelperText', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':allowedTaskSizes': new OxmlAttr(':allowedTaskSizes', OxmlType.EnumValue, TaskSizesValuesArray),
    };
    TaskFormGroupTask._C = {
        'mso14:group': BackstageGroup,
    };
    TaskFormGroupTask._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    TaskFormGroupCategory._C = {
        'mso14:task': TaskFormGroupTask,
    };
    TaskFormGroupCategory._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
    };
    TaskGroupTask._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':isDefinitive': new OxmlAttr(':isDefinitive', OxmlType.BooleanValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    TaskGroupCategory._C = {
        'mso14:task': TaskGroupTask,
    };
    TaskGroupCategory._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
    };
    GroupControlsType._C = {
        'mso14:button': BackstageGroupButton,
        'mso14:checkBox': BackstageCheckBox,
        'mso14:editBox': BackstageEditBox,
        'mso14:dropDown': BackstageDropDown,
        'mso14:radioGroup': RadioGroup,
        'mso14:comboBox': BackstageComboBox,
        'mso14:hyperlink': Hyperlink,
        'mso14:labelControl': BackstageLabelControl,
        'mso14:groupBox': GroupBox,
        'mso14:layoutContainer': LayoutContainer,
        'mso14:imageControl': ImageControl,
    };
    BottomItemsGroupControls._C = {
        'mso14:button': BackstageGroupButton,
        'mso14:checkBox': BackstageCheckBox,
        'mso14:editBox': BackstageEditBox,
        'mso14:dropDown': BackstageDropDown,
        'mso14:radioGroup': RadioGroup,
        'mso14:comboBox': BackstageComboBox,
        'mso14:hyperlink': Hyperlink,
        'mso14:labelControl': BackstageLabelControl,
        'mso14:groupBox': GroupBox,
        'mso14:layoutContainer': LayoutContainer,
        'mso14:imageControl': ImageControl,
    };
    TopItemsGroupControls._C = {
        'mso14:button': BackstageGroupButton,
        'mso14:checkBox': BackstageCheckBox,
        'mso14:editBox': BackstageEditBox,
        'mso14:dropDown': BackstageDropDown,
        'mso14:radioGroup': RadioGroup,
        'mso14:comboBox': BackstageComboBox,
        'mso14:hyperlink': Hyperlink,
        'mso14:labelControl': BackstageLabelControl,
        'mso14:groupBox': GroupBox,
        'mso14:layoutContainer': LayoutContainer,
        'mso14:imageControl': ImageControl,
    };
    PrimaryItem._C = {
        'mso14:button': BackstageRegularButton,
        'mso14:menu': BackstagePrimaryMenu,
    };
    BackstageMenuGroup._C = {
        'mso14:button': BackstageMenuButton,
        'mso14:checkBox': BackstageMenuCheckBox,
        'mso14:menu': BackstageSubMenu,
        'mso14:toggleButton': BackstageMenuToggleButton,
    };
    BackstageMenuGroup._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':itemSize': new OxmlAttr(':itemSize', OxmlType.EnumValue, ItemSizeValuesArray),
    };
    BackstagePrimaryMenu._C = {
        'mso14:menuGroup': BackstageMenuGroup,
    };
    BackstagePrimaryMenu._D = {
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    BackstageRegularButton._D = {
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':isDefinitive': new OxmlAttr(':isDefinitive', OxmlType.BooleanValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
    };
    BackstageItemType._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
    };
    ContextMenu._C = {
        'mso14:control': ControlCloneRegular,
        'mso14:button': ButtonRegular,
        'mso14:checkBox': CheckBox,
        'mso14:gallery': GalleryRegular,
        'mso14:toggleButton': ToggleButtonRegular,
        'mso14:splitButton': SplitButtonRegular,
        'mso14:menu': MenuRegular,
        'mso14:dynamicMenu': DynamicMenuRegular,
        'mso14:menuSeparator': MenuSeparatorNoTitle,
    };
    ContextMenu._D = {
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
    };
    ContextualTabs._C = {
        'mso14:tabSet': TabSet,
    };
    Tabs._C = {
        'mso14:tab': Tab,
    };
    QuickAccessToolbar._C = {
        'mso14:sharedControls': SharedControlsQatItems,
        'mso14:documentControls': DocumentControlsQatItems,
    };
    Command._D = {
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
    };
    TabSet._C = {
        'mso14:tab': Tab,
    };
    TabSet._D = {
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
    };
    Tab._C = {
        'mso14:group': Group,
    };
    Tab._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        'mso14:control': ControlCloneQat,
        'mso14:button': ButtonRegular,
        'mso14:separator': Separator,
    };
    DocumentControlsQatItems._C = {
        'mso14:control': ControlCloneQat,
        'mso14:button': ButtonRegular,
        'mso14:separator': Separator,
    };
    SharedControlsQatItems._C = {
        'mso14:control': ControlCloneQat,
        'mso14:button': ButtonRegular,
        'mso14:separator': Separator,
    };
    ControlCloneQat._D = {
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
        'mso14:control': ControlClone,
        'mso14:labelControl': LabelControl,
        'mso14:button': Button,
        'mso14:toggleButton': ToggleButton,
        'mso14:checkBox': CheckBox,
        'mso14:editBox': EditBox,
        'mso14:comboBox': ComboBox,
        'mso14:dropDown': DropDownRegular,
        'mso14:gallery': Gallery,
        'mso14:menu': Menu,
        'mso14:dynamicMenu': DynamicMenu,
        'mso14:splitButton': SplitButton,
        'mso14:box': Box,
        'mso14:buttonGroup': ButtonGroup,
        'mso14:separator': Separator,
        'mso14:dialogBoxLauncher': DialogBoxLauncher,
    };
    Group._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        ':autoScale': new OxmlAttr(':autoScale', OxmlType.BooleanValue),
        ':centerVertically': new OxmlAttr(':centerVertically', OxmlType.BooleanValue),
    };
    DialogBoxLauncher._C = {
        'mso14:button': ButtonRegular,
    };
    Separator._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        'mso14:commands': Commands,
        'mso14:ribbon': Ribbon,
        'mso14:backstage': Backstage,
        'mso14:contextMenus': ContextMenus,
    };
    CustomUI._D = {
        ':onLoad': new OxmlAttr(':onLoad', OxmlType.StringValue),
        ':loadImage': new OxmlAttr(':loadImage', OxmlType.StringValue),
    };
    MenuRoot._C = {
        'mso14:control': ControlCloneRegular,
        'mso14:button': ButtonRegular,
        'mso14:checkBox': CheckBox,
        'mso14:gallery': GalleryRegular,
        'mso14:toggleButton': ToggleButtonRegular,
        'mso14:menuSeparator': MenuSeparator,
        'mso14:splitButton': SplitButtonRegular,
        'mso14:menu': MenuRegular,
        'mso14:dynamicMenu': DynamicMenuRegular,
    };
    MenuRoot._D = {
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':getTitle': new OxmlAttr(':getTitle', OxmlType.StringValue),
        ':itemSize': new OxmlAttr(':itemSize', OxmlType.EnumValue, ItemSizeValuesArray),
    };
    TaskGroup._C = {
        'mso14:category': TaskGroupCategory,
    };
    TaskGroup._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':helperText': new OxmlAttr(':helperText', OxmlType.StringValue),
        ':getHelperText': new OxmlAttr(':getHelperText', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
        ':allowedTaskSizes': new OxmlAttr(':allowedTaskSizes', OxmlType.EnumValue, TaskSizesValuesArray),
    };
    BackstageGroup._C = {
        'mso14:primaryItem': PrimaryItem,
        'mso14:topItems': TopItemsGroupControls,
        'mso14:bottomItems': BottomItemsGroupControls,
    };
    BackstageGroup._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':style': new OxmlAttr(':style', OxmlType.EnumValue, StyleValuesArray),
        ':getStyle': new OxmlAttr(':getStyle', OxmlType.StringValue),
        ':helperText': new OxmlAttr(':helperText', OxmlType.StringValue),
        ':getHelperText': new OxmlAttr(':getHelperText', OxmlType.StringValue),
        ':showLabel': new OxmlAttr(':showLabel', OxmlType.BooleanValue),
        ':getShowLabel': new OxmlAttr(':getShowLabel', OxmlType.StringValue),
    };
    ImageControl._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':altText': new OxmlAttr(':altText', OxmlType.StringValue),
        ':getAltText': new OxmlAttr(':getAltText', OxmlType.StringValue),
    };
    LayoutContainer._C = {
        'mso14:button': BackstageGroupButton,
        'mso14:checkBox': BackstageCheckBox,
        'mso14:editBox': BackstageEditBox,
        'mso14:dropDown': BackstageDropDown,
        'mso14:radioGroup': RadioGroup,
        'mso14:comboBox': BackstageComboBox,
        'mso14:hyperlink': Hyperlink,
        'mso14:labelControl': BackstageLabelControl,
        'mso14:groupBox': GroupBox,
        'mso14:layoutContainer': LayoutContainer,
        'mso14:imageControl': ImageControl,
    };
    LayoutContainer._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':align': new OxmlAttr(':align', OxmlType.EnumValue, ExpandValuesArray),
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':layoutChildren': new OxmlAttr(':layoutChildren', OxmlType.EnumValue, LayoutChildrenValuesArray),
    };
    GroupBox._C = {
        'mso14:button': BackstageGroupButton,
        'mso14:checkBox': BackstageCheckBox,
        'mso14:editBox': BackstageEditBox,
        'mso14:dropDown': BackstageDropDown,
        'mso14:radioGroup': RadioGroup,
        'mso14:comboBox': BackstageComboBox,
        'mso14:hyperlink': Hyperlink,
        'mso14:labelControl': BackstageLabelControl,
        'mso14:groupBox': GroupBox,
        'mso14:layoutContainer': LayoutContainer,
        'mso14:imageControl': ImageControl,
    };
    GroupBox._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
    };
    BackstageLabelControl._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':alignLabel': new OxmlAttr(':alignLabel', OxmlType.EnumValue, ExpandValuesArray),
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':noWrap': new OxmlAttr(':noWrap', OxmlType.BooleanValue),
    };
    Hyperlink._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':alignLabel': new OxmlAttr(':alignLabel', OxmlType.EnumValue, ExpandValuesArray),
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':getTarget': new OxmlAttr(':getTarget', OxmlType.StringValue),
    };
    BackstageComboBox._C = {
        'mso14:item': ItemBackstageItem,
    };
    BackstageComboBox._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':alignLabel': new OxmlAttr(':alignLabel', OxmlType.EnumValue, ExpandValuesArray),
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':getText': new OxmlAttr(':getText', OxmlType.StringValue),
        ':onChange': new OxmlAttr(':onChange', OxmlType.StringValue),
        ':sizeString': new OxmlAttr(':sizeString', OxmlType.StringValue),
        ':getItemCount': new OxmlAttr(':getItemCount', OxmlType.StringValue),
        ':getItemLabel': new OxmlAttr(':getItemLabel', OxmlType.StringValue),
        ':getItemID': new OxmlAttr(':getItemID', OxmlType.StringValue),
    };
    RadioGroup._C = {
        'mso14:radioButton': RadioButtonBackstageItem,
    };
    RadioGroup._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':alignLabel': new OxmlAttr(':alignLabel', OxmlType.EnumValue, ExpandValuesArray),
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':getSelectedItemIndex': new OxmlAttr(':getSelectedItemIndex', OxmlType.StringValue),
        ':getItemCount': new OxmlAttr(':getItemCount', OxmlType.StringValue),
        ':getItemLabel': new OxmlAttr(':getItemLabel', OxmlType.StringValue),
        ':getItemID': new OxmlAttr(':getItemID', OxmlType.StringValue),
    };
    BackstageDropDown._C = {
        'mso14:item': ItemBackstageItem,
    };
    BackstageDropDown._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':alignLabel': new OxmlAttr(':alignLabel', OxmlType.EnumValue, ExpandValuesArray),
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':getSelectedItemIndex': new OxmlAttr(':getSelectedItemIndex', OxmlType.StringValue),
        ':sizeString': new OxmlAttr(':sizeString', OxmlType.StringValue),
        ':getItemCount': new OxmlAttr(':getItemCount', OxmlType.StringValue),
        ':getItemLabel': new OxmlAttr(':getItemLabel', OxmlType.StringValue),
        ':getItemID': new OxmlAttr(':getItemID', OxmlType.StringValue),
    };
    BackstageEditBox._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':alignLabel': new OxmlAttr(':alignLabel', OxmlType.EnumValue, ExpandValuesArray),
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':getText': new OxmlAttr(':getText', OxmlType.StringValue),
        ':onChange': new OxmlAttr(':onChange', OxmlType.StringValue),
        ':maxLength': new OxmlAttr(':maxLength', OxmlType.IntegerValue),
        ':sizeString': new OxmlAttr(':sizeString', OxmlType.StringValue),
    };
    BackstageCheckBox._D = {
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':getPressed': new OxmlAttr(':getPressed', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    BackstageGroupButton._D = {
        ':expand': new OxmlAttr(':expand', OxmlType.EnumValue, ExpandValuesArray),
        ':style': new OxmlAttr(':style', OxmlType.EnumValue, Style2ValuesArray),
        ':screentip': new OxmlAttr(':screentip', OxmlType.StringValue),
        ':getScreentip': new OxmlAttr(':getScreentip', OxmlType.StringValue),
        ':supertip': new OxmlAttr(':supertip', OxmlType.StringValue),
        ':getSupertip': new OxmlAttr(':getSupertip', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':isDefinitive': new OxmlAttr(':isDefinitive', OxmlType.BooleanValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
    };
    BackstageMenuToggleButton._D = {
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':getPressed': new OxmlAttr(':getPressed', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    BackstageSubMenu._C = {
        'mso14:menuGroup': BackstageMenuGroup,
    };
    BackstageSubMenu._D = {
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    BackstageMenuCheckBox._D = {
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':getPressed': new OxmlAttr(':getPressed', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
    };
    BackstageMenuButton._D = {
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':onAction': new OxmlAttr(':onAction', OxmlType.StringValue),
        ':isDefinitive': new OxmlAttr(':isDefinitive', OxmlType.BooleanValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':getLabel': new OxmlAttr(':getLabel', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':keytip': new OxmlAttr(':keytip', OxmlType.StringValue),
        ':getKeytip': new OxmlAttr(':getKeytip', OxmlType.StringValue),
        ':image': new OxmlAttr(':image', OxmlType.StringValue),
        ':imageMso': new OxmlAttr(':imageMso', OxmlType.StringValue),
        ':getImage': new OxmlAttr(':getImage', OxmlType.StringValue),
    };
    ButtonGroup._C = {
        'mso14:control': ControlCloneRegular,
        'mso14:button': ButtonRegular,
        'mso14:toggleButton': ToggleButtonRegular,
        'mso14:gallery': GalleryRegular,
        'mso14:menu': MenuRegular,
        'mso14:dynamicMenu': DynamicMenuRegular,
        'mso14:splitButton': SplitButtonRegular,
        'mso14:separator': Separator,
    };
    ButtonGroup._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
    };
    Box._C = {
        'mso14:control': ControlClone,
        'mso14:labelControl': LabelControl,
        'mso14:button': Button,
        'mso14:toggleButton': ToggleButton,
        'mso14:checkBox': CheckBox,
        'mso14:editBox': EditBox,
        'mso14:comboBox': ComboBox,
        'mso14:dropDown': DropDownRegular,
        'mso14:gallery': Gallery,
        'mso14:menu': Menu,
        'mso14:dynamicMenu': DynamicMenu,
        'mso14:splitButton': SplitButton,
        'mso14:box': Box,
        'mso14:buttonGroup': ButtonGroup,
    };
    Box._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
        ':getVisible': new OxmlAttr(':getVisible', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':boxStyle': new OxmlAttr(':boxStyle', OxmlType.EnumValue, BoxStyleValuesArray),
    };
    SplitButton._C = {
        'mso14:button': VisibleButton,
        'mso14:toggleButton': VisibleToggleButton,
        'mso14:menu': MenuRegular,
    };
    SplitButton._D = {
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        'mso14:control': ControlCloneRegular,
        'mso14:button': ButtonRegular,
        'mso14:checkBox': CheckBox,
        'mso14:gallery': GalleryRegular,
        'mso14:toggleButton': ToggleButtonRegular,
        'mso14:menuSeparator': MenuSeparator,
        'mso14:splitButton': SplitButtonRegular,
        'mso14:menu': MenuRegular,
        'mso14:dynamicMenu': DynamicMenuRegular,
    };
    Menu._D = {
        ':size': new OxmlAttr(':size', OxmlType.EnumValue, SizeValuesArray),
        ':getSize': new OxmlAttr(':getSize', OxmlType.StringValue),
        ':itemSize': new OxmlAttr(':itemSize', OxmlType.EnumValue, ItemSizeValuesArray),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        'mso14:item': Item,
        'mso14:button': ButtonRegular,
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
        ':showInRibbon': new OxmlAttr(':showInRibbon', OxmlType.EnumValue, GalleryShowInRibbonValuesArray),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
    DropDownRegular._C = {
        'mso14:item': Item,
        'mso14:button': ButtonRegular,
    };
    DropDownRegular._D = {
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        'mso14:item': Item,
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
    LabelControl._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
    MenuSeparatorNoTitle._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
    };
    MenuWithTitle._C = {
        'mso14:control': ControlCloneRegular,
        'mso14:button': ButtonRegular,
        'mso14:checkBox': CheckBox,
        'mso14:gallery': GalleryRegular,
        'mso14:toggleButton': ToggleButtonRegular,
        'mso14:menuSeparator': MenuSeparator,
        'mso14:splitButton': SplitButtonWithTitle,
        'mso14:menu': MenuWithTitle,
        'mso14:dynamicMenu': DynamicMenuRegular,
    };
    MenuWithTitle._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        'mso14:button': VisibleButton,
        'mso14:toggleButton': VisibleToggleButton,
        'mso14:menu': MenuWithTitle,
    };
    SplitButtonWithTitle._D = {
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
    DynamicMenuRegular._D = {
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
    MenuRegular._C = {
        'mso14:control': ControlCloneRegular,
        'mso14:button': ButtonRegular,
        'mso14:checkBox': CheckBox,
        'mso14:gallery': GalleryRegular,
        'mso14:toggleButton': ToggleButtonRegular,
        'mso14:menuSeparator': MenuSeparator,
        'mso14:splitButton': SplitButtonRegular,
        'mso14:menu': MenuRegular,
        'mso14:dynamicMenu': DynamicMenuRegular,
    };
    MenuRegular._D = {
        ':itemSize': new OxmlAttr(':itemSize', OxmlType.EnumValue, ItemSizeValuesArray),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':getDescription': new OxmlAttr(':getDescription', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
    SplitButtonRegular._C = {
        'mso14:button': VisibleButton,
        'mso14:toggleButton': VisibleToggleButton,
        'mso14:menu': MenuRegular,
    };
    SplitButtonRegular._D = {
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':getEnabled': new OxmlAttr(':getEnabled', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':insertAfterMso': new OxmlAttr(':insertAfterMso', OxmlType.StringValue),
        ':insertBeforeMso': new OxmlAttr(':insertBeforeMso', OxmlType.StringValue),
        ':insertAfterQ': new OxmlAttr(':insertAfterQ', OxmlType.StringValue),
        ':insertBeforeQ': new OxmlAttr(':insertBeforeQ', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':getTitle': new OxmlAttr(':getTitle', OxmlType.StringValue),
    };
    ToggleButtonRegular._D = {
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
    GalleryRegular._C = {
        'mso14:item': Item,
        'mso14:button': ButtonRegular,
    };
    GalleryRegular._D = {
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
        ':showInRibbon': new OxmlAttr(':showInRibbon', OxmlType.EnumValue, GalleryShowInRibbonValuesArray),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
    ButtonRegular._D = {
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
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
    ControlCloneRegular._D = {
        ':idQ': new OxmlAttr(':idQ', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':idMso': new OxmlAttr(':idMso', OxmlType.StringValue),
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
        prefix: 'mso14',
        xmlns: 'http://schemas.microsoft.com/office/2009/07/customui',
    };
}
