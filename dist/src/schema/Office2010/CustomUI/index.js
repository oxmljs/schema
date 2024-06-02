import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
var GalleryShowInRibbonValues = /* @__PURE__ */ ((GalleryShowInRibbonValues2) => {
  GalleryShowInRibbonValues2["False"] = "false";
  GalleryShowInRibbonValues2["Zero"] = "0";
  return GalleryShowInRibbonValues2;
})(GalleryShowInRibbonValues || {});
const GalleryShowInRibbonValuesArray = [
  "false" /* False */,
  "0" /* Zero */
];
var SizeValues = /* @__PURE__ */ ((SizeValues2) => {
  SizeValues2["Normal"] = "normal";
  SizeValues2["Large"] = "large";
  return SizeValues2;
})(SizeValues || {});
const SizeValuesArray = [
  "normal" /* Normal */,
  "large" /* Large */
];
var ItemSizeValues = /* @__PURE__ */ ((ItemSizeValues2) => {
  ItemSizeValues2["Normal"] = "normal";
  ItemSizeValues2["Large"] = "large";
  return ItemSizeValues2;
})(ItemSizeValues || {});
const ItemSizeValuesArray = [
  "normal" /* Normal */,
  "large" /* Large */
];
var BoxStyleValues = /* @__PURE__ */ ((BoxStyleValues2) => {
  BoxStyleValues2["Horizontal"] = "horizontal";
  BoxStyleValues2["Vertical"] = "vertical";
  return BoxStyleValues2;
})(BoxStyleValues || {});
const BoxStyleValuesArray = [
  "horizontal" /* Horizontal */,
  "vertical" /* Vertical */
];
var TaskSizesValues = /* @__PURE__ */ ((TaskSizesValues2) => {
  TaskSizesValues2["LargeMediumSmall"] = "largeMediumSmall";
  TaskSizesValues2["LargeMedium"] = "largeMedium";
  TaskSizesValues2["Large"] = "large";
  TaskSizesValues2["MediumSmall"] = "mediumSmall";
  TaskSizesValues2["Medium"] = "medium";
  TaskSizesValues2["Small"] = "small";
  return TaskSizesValues2;
})(TaskSizesValues || {});
const TaskSizesValuesArray = [
  "largeMediumSmall" /* LargeMediumSmall */,
  "largeMedium" /* LargeMedium */,
  "large" /* Large */,
  "mediumSmall" /* MediumSmall */,
  "medium" /* Medium */,
  "small" /* Small */
];
var ExpandValues = /* @__PURE__ */ ((ExpandValues2) => {
  ExpandValues2["TopLeft"] = "topLeft";
  ExpandValues2["Top"] = "top";
  ExpandValues2["TopRight"] = "topRight";
  ExpandValues2["Left"] = "left";
  ExpandValues2["Center"] = "center";
  ExpandValues2["Right"] = "right";
  ExpandValues2["BottomLeft"] = "bottomLeft";
  ExpandValues2["Bottom"] = "bottom";
  ExpandValues2["BottomRight"] = "bottomRight";
  return ExpandValues2;
})(ExpandValues || {});
const ExpandValuesArray = [
  "topLeft" /* TopLeft */,
  "top" /* Top */,
  "topRight" /* TopRight */,
  "left" /* Left */,
  "center" /* Center */,
  "right" /* Right */,
  "bottomLeft" /* BottomLeft */,
  "bottom" /* Bottom */,
  "bottomRight" /* BottomRight */
];
var StyleValues = /* @__PURE__ */ ((StyleValues2) => {
  StyleValues2["Normal"] = "normal";
  StyleValues2["Warning"] = "warning";
  StyleValues2["Error"] = "error";
  return StyleValues2;
})(StyleValues || {});
const StyleValuesArray = [
  "normal" /* Normal */,
  "warning" /* Warning */,
  "error" /* Error */
];
var Style2Values = /* @__PURE__ */ ((Style2Values2) => {
  Style2Values2["Normal"] = "normal";
  Style2Values2["Borderless"] = "borderless";
  Style2Values2["Large"] = "large";
  return Style2Values2;
})(Style2Values || {});
const Style2ValuesArray = [
  "normal" /* Normal */,
  "borderless" /* Borderless */,
  "large" /* Large */
];
var LayoutChildrenValues = /* @__PURE__ */ ((LayoutChildrenValues2) => {
  LayoutChildrenValues2["Horizontal"] = "horizontal";
  LayoutChildrenValues2["Vertical"] = "vertical";
  return LayoutChildrenValues2;
})(LayoutChildrenValues || {});
const LayoutChildrenValuesArray = [
  "horizontal" /* Horizontal */,
  "vertical" /* Vertical */
];
class ContextMenus extends OxmlCompositeElement {
  static _Q = "mso14:contextMenus";
}
class Backstage extends OxmlCompositeElement {
  static _Q = "mso14:backstage";
  static _A = [":onShow", ":onHide"];
  /** onShow. Serialized as `:onShow` */
  get onShow() {
    return this._g(":onShow");
  }
  set onShow(v) {
    this._s(":onShow", v);
  }
  /** onHide. Serialized as `:onHide` */
  get onHide() {
    return this._g(":onHide");
  }
  set onHide(v) {
    this._s(":onHide", v);
  }
}
class Ribbon extends OxmlCompositeElement {
  static _Q = "mso14:ribbon";
  static _A = [":startFromScratch"];
  /** startFromScratch. Serialized as `:startFromScratch` */
  get startFromScratch() {
    return this._g(":startFromScratch");
  }
  set startFromScratch(v) {
    this._s(":startFromScratch", v);
  }
  /** Returns QuickAccessToolbar. */
  get quickAccessToolbar() {
    return this._f(QuickAccessToolbar);
  }
  /** Returns Tabs. */
  get tabs() {
    return this._f(Tabs);
  }
  /** Returns ContextualTabs. */
  get contextualTabs() {
    return this._f(ContextualTabs);
  }
}
class Commands extends OxmlCompositeElement {
  static _Q = "mso14:commands";
}
class BackstageFastCommandButton extends OxmlLeafElement {
  static _Q = "mso14:button";
  static _A = [":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":id", ":idQ", ":tag", ":onAction", ":isDefinitive", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip", ":image", ":imageMso", ":getImage"];
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** isDefinitive. Serialized as `:isDefinitive` */
  get isDefinitive() {
    return this._g(":isDefinitive");
  }
  set isDefinitive(v) {
    this._s(":isDefinitive", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
}
class BackstageTab extends OxmlCompositeElement {
  static _Q = "mso14:tab";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip", ":title", ":getTitle", ":columnWidthPercent", ":firstColumnMinWidth", ":firstColumnMaxWidth", ":secondColumnMinWidth", ":secondColumnMaxWidth"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** getTitle. Serialized as `:getTitle` */
  get getTitle() {
    return this._g(":getTitle");
  }
  set getTitle(v) {
    this._s(":getTitle", v);
  }
  /** columnWidthPercent. Serialized as `:columnWidthPercent` */
  get columnWidthPercent() {
    return this._g(":columnWidthPercent");
  }
  set columnWidthPercent(v) {
    this._s(":columnWidthPercent", v);
  }
  /** firstColumnMinWidth. Serialized as `:firstColumnMinWidth` */
  get firstColumnMinWidth() {
    return this._g(":firstColumnMinWidth");
  }
  set firstColumnMinWidth(v) {
    this._s(":firstColumnMinWidth", v);
  }
  /** firstColumnMaxWidth. Serialized as `:firstColumnMaxWidth` */
  get firstColumnMaxWidth() {
    return this._g(":firstColumnMaxWidth");
  }
  set firstColumnMaxWidth(v) {
    this._s(":firstColumnMaxWidth", v);
  }
  /** secondColumnMinWidth. Serialized as `:secondColumnMinWidth` */
  get secondColumnMinWidth() {
    return this._g(":secondColumnMinWidth");
  }
  set secondColumnMinWidth(v) {
    this._s(":secondColumnMinWidth", v);
  }
  /** secondColumnMaxWidth. Serialized as `:secondColumnMaxWidth` */
  get secondColumnMaxWidth() {
    return this._g(":secondColumnMaxWidth");
  }
  set secondColumnMaxWidth(v) {
    this._s(":secondColumnMaxWidth", v);
  }
  /** Returns BackstageGroups. */
  get backstageGroups() {
    return this._f(BackstageGroups);
  }
  /** Returns SimpleGroups. */
  get simpleGroups() {
    return this._f(SimpleGroups);
  }
}
class SimpleGroups extends OxmlCompositeElement {
  static _Q = "mso14:secondColumn";
}
class BackstageGroups extends OxmlCompositeElement {
  static _Q = "mso14:firstColumn";
}
class TaskFormGroup extends OxmlCompositeElement {
  static _Q = "mso14:taskFormGroup";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":label", ":getLabel", ":visible", ":getVisible", ":helperText", ":getHelperText", ":showLabel", ":getShowLabel", ":allowedTaskSizes"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** helperText. Serialized as `:helperText` */
  get helperText() {
    return this._g(":helperText");
  }
  set helperText(v) {
    this._s(":helperText", v);
  }
  /** getHelperText. Serialized as `:getHelperText` */
  get getHelperText() {
    return this._g(":getHelperText");
  }
  set getHelperText(v) {
    this._s(":getHelperText", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** allowedTaskSizes. Serialized as `:allowedTaskSizes` */
  get allowedTaskSizes() {
    return this._g(":allowedTaskSizes");
  }
  set allowedTaskSizes(v) {
    this._s(":allowedTaskSizes", v);
  }
}
class TaskFormGroupTask extends OxmlCompositeElement {
  static _Q = "mso14:task";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":image", ":imageMso", ":getImage", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":description", ":getDescription", ":keytip", ":getKeytip"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
}
class TaskFormGroupCategory extends OxmlCompositeElement {
  static _Q = "mso14:category";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":label", ":getLabel"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
}
class TaskGroupTask extends OxmlLeafElement {
  static _Q = "mso14:task";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":onAction", ":isDefinitive", ":image", ":imageMso", ":getImage", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":description", ":getDescription", ":keytip", ":getKeytip"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** isDefinitive. Serialized as `:isDefinitive` */
  get isDefinitive() {
    return this._g(":isDefinitive");
  }
  set isDefinitive(v) {
    this._s(":isDefinitive", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
}
class TaskGroupCategory extends OxmlCompositeElement {
  static _Q = "mso14:category";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":label", ":getLabel"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
}
class GroupControlsType extends OxmlCompositeElement {
}
class BottomItemsGroupControls extends GroupControlsType {
  static _Q = "mso14:bottomItems";
}
class TopItemsGroupControls extends GroupControlsType {
  static _Q = "mso14:topItems";
}
class PrimaryItem extends OxmlCompositeElement {
  static _Q = "mso14:primaryItem";
  /** Returns BackstageRegularButton. */
  get backstageRegularButton() {
    return this._f(BackstageRegularButton);
  }
  /** Returns BackstagePrimaryMenu. */
  get backstagePrimaryMenu() {
    return this._f(BackstagePrimaryMenu);
  }
}
class BackstageMenuGroup extends OxmlCompositeElement {
  static _Q = "mso14:menuGroup";
  static _A = [":id", ":idQ", ":tag", ":label", ":getLabel", ":itemSize"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** itemSize. Serialized as `:itemSize` */
  get itemSize() {
    return this._g(":itemSize");
  }
  set itemSize(v) {
    this._s(":itemSize", v);
  }
}
class BackstagePrimaryMenu extends OxmlCompositeElement {
  static _Q = "mso14:menu";
  static _A = [":screentip", ":getScreentip", ":supertip", ":getSupertip", ":id", ":idQ", ":tag", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":image", ":imageMso", ":getImage", ":keytip", ":getKeytip"];
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
}
class BackstageRegularButton extends OxmlLeafElement {
  static _Q = "mso14:button";
  static _A = [":screentip", ":getScreentip", ":supertip", ":getSupertip", ":id", ":idQ", ":tag", ":onAction", ":isDefinitive", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip", ":image", ":imageMso", ":getImage"];
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** isDefinitive. Serialized as `:isDefinitive` */
  get isDefinitive() {
    return this._g(":isDefinitive");
  }
  set isDefinitive(v) {
    this._s(":isDefinitive", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
}
class BackstageItemType extends OxmlLeafElement {
  static _A = [":id", ":label", ":getLabel"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
}
class RadioButtonBackstageItem extends BackstageItemType {
  static _Q = "mso14:radioButton";
}
class ItemBackstageItem extends BackstageItemType {
  static _Q = "mso14:item";
}
class ContextMenu extends OxmlCompositeElement {
  static _Q = "mso14:contextMenu";
  static _A = [":idMso"];
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
}
class ContextualTabs extends OxmlCompositeElement {
  static _Q = "mso14:contextualTabs";
}
class Tabs extends OxmlCompositeElement {
  static _Q = "mso14:tabs";
}
class QuickAccessToolbar extends OxmlCompositeElement {
  static _Q = "mso14:qat";
  /** Returns SharedControlsQatItems. */
  get sharedControlsQatItems() {
    return this._f(SharedControlsQatItems);
  }
  /** Returns DocumentControlsQatItems. */
  get documentControlsQatItems() {
    return this._f(DocumentControlsQatItems);
  }
}
class Command extends OxmlLeafElement {
  static _Q = "mso14:command";
  static _A = [":onAction", ":enabled", ":getEnabled", ":idMso"];
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
}
class TabSet extends OxmlCompositeElement {
  static _Q = "mso14:tabSet";
  static _A = [":idMso", ":visible", ":getVisible"];
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
}
class Tab extends OxmlCompositeElement {
  static _Q = "mso14:tab";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
}
class QatItemsType extends OxmlCompositeElement {
}
class DocumentControlsQatItems extends QatItemsType {
  static _Q = "mso14:documentControls";
}
class SharedControlsQatItems extends QatItemsType {
  static _Q = "mso14:sharedControls";
}
class ControlCloneQat extends OxmlLeafElement {
  static _Q = "mso14:control";
  static _A = [":id", ":idQ", ":idMso", ":description", ":getDescription", ":size", ":getSize", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get idQ() {
    return this._g(":idQ");
  }
  set idQ(v) {
    this._s(":idQ", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** getSize. Serialized as `:getSize` */
  get getSize() {
    return this._g(":getSize");
  }
  set getSize(v) {
    this._s(":getSize", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class Group extends OxmlCompositeElement {
  static _Q = "mso14:group";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":label", ":getLabel", ":image", ":imageMso", ":getImage", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":visible", ":getVisible", ":keytip", ":getKeytip", ":autoScale", ":centerVertically"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** autoScale. Serialized as `:autoScale` */
  get autoScale() {
    return this._g(":autoScale");
  }
  set autoScale(v) {
    this._s(":autoScale", v);
  }
  /** centerVertically. Serialized as `:centerVertically` */
  get centerVertically() {
    return this._g(":centerVertically");
  }
  set centerVertically(v) {
    this._s(":centerVertically", v);
  }
}
class DialogBoxLauncher extends OxmlCompositeElement {
  static _Q = "mso14:dialogBoxLauncher";
  /** Returns ButtonRegular. */
  get buttonRegular() {
    return this._f(ButtonRegular);
  }
}
class Separator extends OxmlLeafElement {
  static _Q = "mso14:separator";
  static _A = [":id", ":idQ", ":tag", ":visible", ":getVisible", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
}
class VisibleToggleButton extends OxmlLeafElement {
  static _Q = "mso14:toggleButton";
  static _A = [":getPressed", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** getPressed. Serialized as `:getPressed` */
  get getPressed() {
    return this._g(":getPressed");
  }
  set getPressed(v) {
    this._s(":getPressed", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class VisibleButton extends OxmlLeafElement {
  static _Q = "mso14:button";
  static _A = [":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class Item extends OxmlLeafElement {
  static _Q = "mso14:item";
  static _A = [":id", ":label", ":image", ":imageMso", ":screentip", ":supertip"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
}
class CustomUI extends OxmlPartRootElement {
  static _Q = "mso14:customUI";
  static _A = [":onLoad", ":loadImage"];
  /** onLoad. Serialized as `:onLoad` */
  get onLoad() {
    return this._g(":onLoad");
  }
  set onLoad(v) {
    this._s(":onLoad", v);
  }
  /** loadImage. Serialized as `:loadImage` */
  get loadImage() {
    return this._g(":loadImage");
  }
  set loadImage(v) {
    this._s(":loadImage", v);
  }
  /** Returns Commands. */
  get commands() {
    return this._f(Commands);
  }
  /** Returns Ribbon. */
  get ribbon() {
    return this._f(Ribbon);
  }
  /** Returns Backstage. */
  get backstage() {
    return this._f(Backstage);
  }
  /** Returns ContextMenus. */
  get contextMenus() {
    return this._f(ContextMenus);
  }
}
class MenuRoot extends OxmlCompositeElement {
  static _Q = "mso14:menu";
  static _A = [":title", ":getTitle", ":itemSize"];
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** getTitle. Serialized as `:getTitle` */
  get getTitle() {
    return this._g(":getTitle");
  }
  set getTitle(v) {
    this._s(":getTitle", v);
  }
  /** itemSize. Serialized as `:itemSize` */
  get itemSize() {
    return this._g(":itemSize");
  }
  set itemSize(v) {
    this._s(":itemSize", v);
  }
}
class TaskGroup extends OxmlCompositeElement {
  static _Q = "mso14:taskGroup";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":label", ":getLabel", ":visible", ":getVisible", ":helperText", ":getHelperText", ":showLabel", ":getShowLabel", ":allowedTaskSizes"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** helperText. Serialized as `:helperText` */
  get helperText() {
    return this._g(":helperText");
  }
  set helperText(v) {
    this._s(":helperText", v);
  }
  /** getHelperText. Serialized as `:getHelperText` */
  get getHelperText() {
    return this._g(":getHelperText");
  }
  set getHelperText(v) {
    this._s(":getHelperText", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** allowedTaskSizes. Serialized as `:allowedTaskSizes` */
  get allowedTaskSizes() {
    return this._g(":allowedTaskSizes");
  }
  set allowedTaskSizes(v) {
    this._s(":allowedTaskSizes", v);
  }
}
class BackstageGroup extends OxmlCompositeElement {
  static _Q = "mso14:group";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":label", ":getLabel", ":visible", ":getVisible", ":style", ":getStyle", ":helperText", ":getHelperText", ":showLabel", ":getShowLabel"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** getStyle. Serialized as `:getStyle` */
  get getStyle() {
    return this._g(":getStyle");
  }
  set getStyle(v) {
    this._s(":getStyle", v);
  }
  /** helperText. Serialized as `:helperText` */
  get helperText() {
    return this._g(":helperText");
  }
  set helperText(v) {
    this._s(":helperText", v);
  }
  /** getHelperText. Serialized as `:getHelperText` */
  get getHelperText() {
    return this._g(":getHelperText");
  }
  set getHelperText(v) {
    this._s(":getHelperText", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
}
class ImageControl extends OxmlLeafElement {
  static _Q = "mso14:imageControl";
  static _A = [":id", ":idQ", ":tag", ":enabled", ":getEnabled", ":visible", ":getVisible", ":image", ":imageMso", ":getImage", ":altText", ":getAltText"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** altText. Serialized as `:altText` */
  get altText() {
    return this._g(":altText");
  }
  set altText(v) {
    this._s(":altText", v);
  }
  /** getAltText. Serialized as `:getAltText` */
  get getAltText() {
    return this._g(":getAltText");
  }
  set getAltText(v) {
    this._s(":getAltText", v);
  }
}
class LayoutContainer extends OxmlCompositeElement {
  static _Q = "mso14:layoutContainer";
  static _A = [":id", ":idQ", ":tag", ":align", ":expand", ":layoutChildren"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** align. Serialized as `:align` */
  get align() {
    return this._g(":align");
  }
  set align(v) {
    this._s(":align", v);
  }
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** layoutChildren. Serialized as `:layoutChildren` */
  get layoutChildren() {
    return this._g(":layoutChildren");
  }
  set layoutChildren(v) {
    this._s(":layoutChildren", v);
  }
}
class GroupBox extends OxmlCompositeElement {
  static _Q = "mso14:groupBox";
  static _A = [":id", ":idQ", ":tag", ":expand", ":label", ":getLabel"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
}
class BackstageLabelControl extends OxmlLeafElement {
  static _Q = "mso14:labelControl";
  static _A = [":id", ":idQ", ":tag", ":alignLabel", ":expand", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":noWrap"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** alignLabel. Serialized as `:alignLabel` */
  get alignLabel() {
    return this._g(":alignLabel");
  }
  set alignLabel(v) {
    this._s(":alignLabel", v);
  }
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** noWrap. Serialized as `:noWrap` */
  get noWrap() {
    return this._g(":noWrap");
  }
  set noWrap(v) {
    this._s(":noWrap", v);
  }
}
class Hyperlink extends OxmlLeafElement {
  static _Q = "mso14:hyperlink";
  static _A = [":id", ":idQ", ":tag", ":alignLabel", ":expand", ":enabled", ":getEnabled", ":visible", ":getVisible", ":keytip", ":getKeytip", ":label", ":getLabel", ":onAction", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":target", ":getTarget"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** alignLabel. Serialized as `:alignLabel` */
  get alignLabel() {
    return this._g(":alignLabel");
  }
  set alignLabel(v) {
    this._s(":alignLabel", v);
  }
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** getTarget. Serialized as `:getTarget` */
  get getTarget() {
    return this._g(":getTarget");
  }
  set getTarget(v) {
    this._s(":getTarget", v);
  }
}
class BackstageComboBox extends OxmlCompositeElement {
  static _Q = "mso14:comboBox";
  static _A = [":id", ":idQ", ":tag", ":alignLabel", ":expand", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip", ":getText", ":onChange", ":sizeString", ":getItemCount", ":getItemLabel", ":getItemID"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** alignLabel. Serialized as `:alignLabel` */
  get alignLabel() {
    return this._g(":alignLabel");
  }
  set alignLabel(v) {
    this._s(":alignLabel", v);
  }
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** getText. Serialized as `:getText` */
  get getText() {
    return this._g(":getText");
  }
  set getText(v) {
    this._s(":getText", v);
  }
  /** onChange. Serialized as `:onChange` */
  get onChange() {
    return this._g(":onChange");
  }
  set onChange(v) {
    this._s(":onChange", v);
  }
  /** sizeString. Serialized as `:sizeString` */
  get sizeString() {
    return this._g(":sizeString");
  }
  set sizeString(v) {
    this._s(":sizeString", v);
  }
  /** getItemCount. Serialized as `:getItemCount` */
  get getItemCount() {
    return this._g(":getItemCount");
  }
  set getItemCount(v) {
    this._s(":getItemCount", v);
  }
  /** getItemLabel. Serialized as `:getItemLabel` */
  get getItemLabel() {
    return this._g(":getItemLabel");
  }
  set getItemLabel(v) {
    this._s(":getItemLabel", v);
  }
  /** getItemID. Serialized as `:getItemID` */
  get getItemID() {
    return this._g(":getItemID");
  }
  set getItemID(v) {
    this._s(":getItemID", v);
  }
}
class RadioGroup extends OxmlCompositeElement {
  static _Q = "mso14:radioGroup";
  static _A = [":id", ":idQ", ":tag", ":alignLabel", ":expand", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":onAction", ":keytip", ":getKeytip", ":getSelectedItemIndex", ":getItemCount", ":getItemLabel", ":getItemID"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** alignLabel. Serialized as `:alignLabel` */
  get alignLabel() {
    return this._g(":alignLabel");
  }
  set alignLabel(v) {
    this._s(":alignLabel", v);
  }
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
  get getSelectedItemIndex() {
    return this._g(":getSelectedItemIndex");
  }
  set getSelectedItemIndex(v) {
    this._s(":getSelectedItemIndex", v);
  }
  /** getItemCount. Serialized as `:getItemCount` */
  get getItemCount() {
    return this._g(":getItemCount");
  }
  set getItemCount(v) {
    this._s(":getItemCount", v);
  }
  /** getItemLabel. Serialized as `:getItemLabel` */
  get getItemLabel() {
    return this._g(":getItemLabel");
  }
  set getItemLabel(v) {
    this._s(":getItemLabel", v);
  }
  /** getItemID. Serialized as `:getItemID` */
  get getItemID() {
    return this._g(":getItemID");
  }
  set getItemID(v) {
    this._s(":getItemID", v);
  }
}
class BackstageDropDown extends OxmlCompositeElement {
  static _Q = "mso14:dropDown";
  static _A = [":id", ":idQ", ":tag", ":alignLabel", ":expand", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":onAction", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":keytip", ":getKeytip", ":getSelectedItemIndex", ":sizeString", ":getItemCount", ":getItemLabel", ":getItemID"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** alignLabel. Serialized as `:alignLabel` */
  get alignLabel() {
    return this._g(":alignLabel");
  }
  set alignLabel(v) {
    this._s(":alignLabel", v);
  }
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
  get getSelectedItemIndex() {
    return this._g(":getSelectedItemIndex");
  }
  set getSelectedItemIndex(v) {
    this._s(":getSelectedItemIndex", v);
  }
  /** sizeString. Serialized as `:sizeString` */
  get sizeString() {
    return this._g(":sizeString");
  }
  set sizeString(v) {
    this._s(":sizeString", v);
  }
  /** getItemCount. Serialized as `:getItemCount` */
  get getItemCount() {
    return this._g(":getItemCount");
  }
  set getItemCount(v) {
    this._s(":getItemCount", v);
  }
  /** getItemLabel. Serialized as `:getItemLabel` */
  get getItemLabel() {
    return this._g(":getItemLabel");
  }
  set getItemLabel(v) {
    this._s(":getItemLabel", v);
  }
  /** getItemID. Serialized as `:getItemID` */
  get getItemID() {
    return this._g(":getItemID");
  }
  set getItemID(v) {
    this._s(":getItemID", v);
  }
}
class BackstageEditBox extends OxmlLeafElement {
  static _Q = "mso14:editBox";
  static _A = [":id", ":idQ", ":tag", ":alignLabel", ":expand", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip", ":getText", ":onChange", ":maxLength", ":sizeString"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** alignLabel. Serialized as `:alignLabel` */
  get alignLabel() {
    return this._g(":alignLabel");
  }
  set alignLabel(v) {
    this._s(":alignLabel", v);
  }
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** getText. Serialized as `:getText` */
  get getText() {
    return this._g(":getText");
  }
  set getText(v) {
    this._s(":getText", v);
  }
  /** onChange. Serialized as `:onChange` */
  get onChange() {
    return this._g(":onChange");
  }
  set onChange(v) {
    this._s(":onChange", v);
  }
  /** maxLength. Serialized as `:maxLength` */
  get maxLength() {
    return this._g(":maxLength");
  }
  set maxLength(v) {
    this._s(":maxLength", v);
  }
  /** sizeString. Serialized as `:sizeString` */
  get sizeString() {
    return this._g(":sizeString");
  }
  set sizeString(v) {
    this._s(":sizeString", v);
  }
}
class BackstageCheckBox extends OxmlLeafElement {
  static _Q = "mso14:checkBox";
  static _A = [":expand", ":description", ":getDescription", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":id", ":idQ", ":tag", ":onAction", ":getPressed", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip"];
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** getPressed. Serialized as `:getPressed` */
  get getPressed() {
    return this._g(":getPressed");
  }
  set getPressed(v) {
    this._s(":getPressed", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
}
class BackstageGroupButton extends OxmlLeafElement {
  static _Q = "mso14:button";
  static _A = [":expand", ":style", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":id", ":idQ", ":tag", ":onAction", ":isDefinitive", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip", ":image", ":imageMso", ":getImage"];
  /** expand. Serialized as `:expand` */
  get expand() {
    return this._g(":expand");
  }
  set expand(v) {
    this._s(":expand", v);
  }
  /** style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** isDefinitive. Serialized as `:isDefinitive` */
  get isDefinitive() {
    return this._g(":isDefinitive");
  }
  set isDefinitive(v) {
    this._s(":isDefinitive", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
}
class BackstageMenuToggleButton extends OxmlLeafElement {
  static _Q = "mso14:toggleButton";
  static _A = [":image", ":imageMso", ":getImage", ":description", ":getDescription", ":id", ":idQ", ":tag", ":onAction", ":getPressed", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip"];
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** getPressed. Serialized as `:getPressed` */
  get getPressed() {
    return this._g(":getPressed");
  }
  set getPressed(v) {
    this._s(":getPressed", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
}
class BackstageSubMenu extends OxmlCompositeElement {
  static _Q = "mso14:menu";
  static _A = [":description", ":getDescription", ":id", ":idQ", ":tag", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":image", ":imageMso", ":getImage", ":keytip", ":getKeytip"];
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
}
class BackstageMenuCheckBox extends OxmlLeafElement {
  static _Q = "mso14:checkBox";
  static _A = [":description", ":getDescription", ":id", ":idQ", ":tag", ":onAction", ":getPressed", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip"];
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** getPressed. Serialized as `:getPressed` */
  get getPressed() {
    return this._g(":getPressed");
  }
  set getPressed(v) {
    this._s(":getPressed", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
}
class BackstageMenuButton extends OxmlLeafElement {
  static _Q = "mso14:button";
  static _A = [":description", ":getDescription", ":id", ":idQ", ":tag", ":onAction", ":isDefinitive", ":enabled", ":getEnabled", ":label", ":getLabel", ":visible", ":getVisible", ":keytip", ":getKeytip", ":image", ":imageMso", ":getImage"];
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** isDefinitive. Serialized as `:isDefinitive` */
  get isDefinitive() {
    return this._g(":isDefinitive");
  }
  set isDefinitive(v) {
    this._s(":isDefinitive", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
}
class ButtonGroup extends OxmlCompositeElement {
  static _Q = "mso14:buttonGroup";
  static _A = [":id", ":idQ", ":tag", ":visible", ":getVisible", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
}
class Box extends OxmlCompositeElement {
  static _Q = "mso14:box";
  static _A = [":id", ":idQ", ":tag", ":visible", ":getVisible", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":boxStyle"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** boxStyle. Serialized as `:boxStyle` */
  get boxStyle() {
    return this._g(":boxStyle");
  }
  set boxStyle(v) {
    this._s(":boxStyle", v);
  }
}
class SplitButton extends OxmlCompositeElement {
  static _Q = "mso14:splitButton";
  static _A = [":size", ":getSize", ":enabled", ":getEnabled", ":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel"];
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** getSize. Serialized as `:getSize` */
  get getSize() {
    return this._g(":getSize");
  }
  set getSize(v) {
    this._s(":getSize", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
}
class DynamicMenu extends OxmlLeafElement {
  static _Q = "mso14:dynamicMenu";
  static _A = [":size", ":getSize", ":description", ":getDescription", ":id", ":idQ", ":tag", ":idMso", ":getContent", ":invalidateContentOnDrop", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** getSize. Serialized as `:getSize` */
  get getSize() {
    return this._g(":getSize");
  }
  set getSize(v) {
    this._s(":getSize", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** getContent. Serialized as `:getContent` */
  get getContent() {
    return this._g(":getContent");
  }
  set getContent(v) {
    this._s(":getContent", v);
  }
  /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
  get invalidateContentOnDrop() {
    return this._g(":invalidateContentOnDrop");
  }
  set invalidateContentOnDrop(v) {
    this._s(":invalidateContentOnDrop", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class Menu extends OxmlCompositeElement {
  static _Q = "mso14:menu";
  static _A = [":size", ":getSize", ":itemSize", ":description", ":getDescription", ":id", ":idQ", ":tag", ":idMso", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** getSize. Serialized as `:getSize` */
  get getSize() {
    return this._g(":getSize");
  }
  set getSize(v) {
    this._s(":getSize", v);
  }
  /** itemSize. Serialized as `:itemSize` */
  get itemSize() {
    return this._g(":itemSize");
  }
  set itemSize(v) {
    this._s(":itemSize", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class Gallery extends OxmlCompositeElement {
  static _Q = "mso14:gallery";
  static _A = [":size", ":getSize", ":description", ":getDescription", ":invalidateContentOnDrop", ":columns", ":rows", ":itemWidth", ":itemHeight", ":getItemWidth", ":getItemHeight", ":showItemLabel", ":showInRibbon", ":onAction", ":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":showItemImage", ":getItemCount", ":getItemLabel", ":getItemScreentip", ":getItemSupertip", ":getItemImage", ":getItemID", ":sizeString", ":getSelectedItemID", ":getSelectedItemIndex", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** getSize. Serialized as `:getSize` */
  get getSize() {
    return this._g(":getSize");
  }
  set getSize(v) {
    this._s(":getSize", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
  get invalidateContentOnDrop() {
    return this._g(":invalidateContentOnDrop");
  }
  set invalidateContentOnDrop(v) {
    this._s(":invalidateContentOnDrop", v);
  }
  /** columns. Serialized as `:columns` */
  get columns() {
    return this._g(":columns");
  }
  set columns(v) {
    this._s(":columns", v);
  }
  /** rows. Serialized as `:rows` */
  get rows() {
    return this._g(":rows");
  }
  set rows(v) {
    this._s(":rows", v);
  }
  /** itemWidth. Serialized as `:itemWidth` */
  get itemWidth() {
    return this._g(":itemWidth");
  }
  set itemWidth(v) {
    this._s(":itemWidth", v);
  }
  /** itemHeight. Serialized as `:itemHeight` */
  get itemHeight() {
    return this._g(":itemHeight");
  }
  set itemHeight(v) {
    this._s(":itemHeight", v);
  }
  /** getItemWidth. Serialized as `:getItemWidth` */
  get getItemWidth() {
    return this._g(":getItemWidth");
  }
  set getItemWidth(v) {
    this._s(":getItemWidth", v);
  }
  /** getItemHeight. Serialized as `:getItemHeight` */
  get getItemHeight() {
    return this._g(":getItemHeight");
  }
  set getItemHeight(v) {
    this._s(":getItemHeight", v);
  }
  /** showItemLabel. Serialized as `:showItemLabel` */
  get showItemLabel() {
    return this._g(":showItemLabel");
  }
  set showItemLabel(v) {
    this._s(":showItemLabel", v);
  }
  /** showInRibbon. Serialized as `:showInRibbon` */
  get showInRibbon() {
    return this._g(":showInRibbon");
  }
  set showInRibbon(v) {
    this._s(":showInRibbon", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** showItemImage. Serialized as `:showItemImage` */
  get showItemImage() {
    return this._g(":showItemImage");
  }
  set showItemImage(v) {
    this._s(":showItemImage", v);
  }
  /** getItemCount. Serialized as `:getItemCount` */
  get getItemCount() {
    return this._g(":getItemCount");
  }
  set getItemCount(v) {
    this._s(":getItemCount", v);
  }
  /** getItemLabel. Serialized as `:getItemLabel` */
  get getItemLabel() {
    return this._g(":getItemLabel");
  }
  set getItemLabel(v) {
    this._s(":getItemLabel", v);
  }
  /** getItemScreentip. Serialized as `:getItemScreentip` */
  get getItemScreentip() {
    return this._g(":getItemScreentip");
  }
  set getItemScreentip(v) {
    this._s(":getItemScreentip", v);
  }
  /** getItemSupertip. Serialized as `:getItemSupertip` */
  get getItemSupertip() {
    return this._g(":getItemSupertip");
  }
  set getItemSupertip(v) {
    this._s(":getItemSupertip", v);
  }
  /** getItemImage. Serialized as `:getItemImage` */
  get getItemImage() {
    return this._g(":getItemImage");
  }
  set getItemImage(v) {
    this._s(":getItemImage", v);
  }
  /** getItemID. Serialized as `:getItemID` */
  get getItemID() {
    return this._g(":getItemID");
  }
  set getItemID(v) {
    this._s(":getItemID", v);
  }
  /** sizeString. Serialized as `:sizeString` */
  get sizeString() {
    return this._g(":sizeString");
  }
  set sizeString(v) {
    this._s(":sizeString", v);
  }
  /** getSelectedItemID. Serialized as `:getSelectedItemID` */
  get getSelectedItemID() {
    return this._g(":getSelectedItemID");
  }
  set getSelectedItemID(v) {
    this._s(":getSelectedItemID", v);
  }
  /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
  get getSelectedItemIndex() {
    return this._g(":getSelectedItemIndex");
  }
  set getSelectedItemIndex(v) {
    this._s(":getSelectedItemIndex", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class DropDownRegular extends OxmlCompositeElement {
  static _Q = "mso14:dropDown";
  static _A = [":onAction", ":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":showItemImage", ":getItemCount", ":getItemLabel", ":getItemScreentip", ":getItemSupertip", ":getItemImage", ":getItemID", ":sizeString", ":getSelectedItemID", ":getSelectedItemIndex", ":showItemLabel", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** showItemImage. Serialized as `:showItemImage` */
  get showItemImage() {
    return this._g(":showItemImage");
  }
  set showItemImage(v) {
    this._s(":showItemImage", v);
  }
  /** getItemCount. Serialized as `:getItemCount` */
  get getItemCount() {
    return this._g(":getItemCount");
  }
  set getItemCount(v) {
    this._s(":getItemCount", v);
  }
  /** getItemLabel. Serialized as `:getItemLabel` */
  get getItemLabel() {
    return this._g(":getItemLabel");
  }
  set getItemLabel(v) {
    this._s(":getItemLabel", v);
  }
  /** getItemScreentip. Serialized as `:getItemScreentip` */
  get getItemScreentip() {
    return this._g(":getItemScreentip");
  }
  set getItemScreentip(v) {
    this._s(":getItemScreentip", v);
  }
  /** getItemSupertip. Serialized as `:getItemSupertip` */
  get getItemSupertip() {
    return this._g(":getItemSupertip");
  }
  set getItemSupertip(v) {
    this._s(":getItemSupertip", v);
  }
  /** getItemImage. Serialized as `:getItemImage` */
  get getItemImage() {
    return this._g(":getItemImage");
  }
  set getItemImage(v) {
    this._s(":getItemImage", v);
  }
  /** getItemID. Serialized as `:getItemID` */
  get getItemID() {
    return this._g(":getItemID");
  }
  set getItemID(v) {
    this._s(":getItemID", v);
  }
  /** sizeString. Serialized as `:sizeString` */
  get sizeString() {
    return this._g(":sizeString");
  }
  set sizeString(v) {
    this._s(":sizeString", v);
  }
  /** getSelectedItemID. Serialized as `:getSelectedItemID` */
  get getSelectedItemID() {
    return this._g(":getSelectedItemID");
  }
  set getSelectedItemID(v) {
    this._s(":getSelectedItemID", v);
  }
  /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
  get getSelectedItemIndex() {
    return this._g(":getSelectedItemIndex");
  }
  set getSelectedItemIndex(v) {
    this._s(":getSelectedItemIndex", v);
  }
  /** showItemLabel. Serialized as `:showItemLabel` */
  get showItemLabel() {
    return this._g(":showItemLabel");
  }
  set showItemLabel(v) {
    this._s(":showItemLabel", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class ComboBox extends OxmlCompositeElement {
  static _Q = "mso14:comboBox";
  static _A = [":showItemImage", ":getItemCount", ":getItemLabel", ":getItemScreentip", ":getItemSupertip", ":getItemImage", ":getItemID", ":sizeString", ":invalidateContentOnDrop", ":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":maxLength", ":getText", ":onChange", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** showItemImage. Serialized as `:showItemImage` */
  get showItemImage() {
    return this._g(":showItemImage");
  }
  set showItemImage(v) {
    this._s(":showItemImage", v);
  }
  /** getItemCount. Serialized as `:getItemCount` */
  get getItemCount() {
    return this._g(":getItemCount");
  }
  set getItemCount(v) {
    this._s(":getItemCount", v);
  }
  /** getItemLabel. Serialized as `:getItemLabel` */
  get getItemLabel() {
    return this._g(":getItemLabel");
  }
  set getItemLabel(v) {
    this._s(":getItemLabel", v);
  }
  /** getItemScreentip. Serialized as `:getItemScreentip` */
  get getItemScreentip() {
    return this._g(":getItemScreentip");
  }
  set getItemScreentip(v) {
    this._s(":getItemScreentip", v);
  }
  /** getItemSupertip. Serialized as `:getItemSupertip` */
  get getItemSupertip() {
    return this._g(":getItemSupertip");
  }
  set getItemSupertip(v) {
    this._s(":getItemSupertip", v);
  }
  /** getItemImage. Serialized as `:getItemImage` */
  get getItemImage() {
    return this._g(":getItemImage");
  }
  set getItemImage(v) {
    this._s(":getItemImage", v);
  }
  /** getItemID. Serialized as `:getItemID` */
  get getItemID() {
    return this._g(":getItemID");
  }
  set getItemID(v) {
    this._s(":getItemID", v);
  }
  /** sizeString. Serialized as `:sizeString` */
  get sizeString() {
    return this._g(":sizeString");
  }
  set sizeString(v) {
    this._s(":sizeString", v);
  }
  /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
  get invalidateContentOnDrop() {
    return this._g(":invalidateContentOnDrop");
  }
  set invalidateContentOnDrop(v) {
    this._s(":invalidateContentOnDrop", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** maxLength. Serialized as `:maxLength` */
  get maxLength() {
    return this._g(":maxLength");
  }
  set maxLength(v) {
    this._s(":maxLength", v);
  }
  /** getText. Serialized as `:getText` */
  get getText() {
    return this._g(":getText");
  }
  set getText(v) {
    this._s(":getText", v);
  }
  /** onChange. Serialized as `:onChange` */
  get onChange() {
    return this._g(":onChange");
  }
  set onChange(v) {
    this._s(":onChange", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class EditBox extends OxmlLeafElement {
  static _Q = "mso14:editBox";
  static _A = [":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":maxLength", ":getText", ":onChange", ":sizeString", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** maxLength. Serialized as `:maxLength` */
  get maxLength() {
    return this._g(":maxLength");
  }
  set maxLength(v) {
    this._s(":maxLength", v);
  }
  /** getText. Serialized as `:getText` */
  get getText() {
    return this._g(":getText");
  }
  set getText(v) {
    this._s(":getText", v);
  }
  /** onChange. Serialized as `:onChange` */
  get onChange() {
    return this._g(":onChange");
  }
  set onChange(v) {
    this._s(":onChange", v);
  }
  /** sizeString. Serialized as `:sizeString` */
  get sizeString() {
    return this._g(":sizeString");
  }
  set sizeString(v) {
    this._s(":sizeString", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class ToggleButton extends OxmlLeafElement {
  static _Q = "mso14:toggleButton";
  static _A = [":size", ":getSize", ":getPressed", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** getSize. Serialized as `:getSize` */
  get getSize() {
    return this._g(":getSize");
  }
  set getSize(v) {
    this._s(":getSize", v);
  }
  /** getPressed. Serialized as `:getPressed` */
  get getPressed() {
    return this._g(":getPressed");
  }
  set getPressed(v) {
    this._s(":getPressed", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class Button extends OxmlLeafElement {
  static _Q = "mso14:button";
  static _A = [":size", ":getSize", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** getSize. Serialized as `:getSize` */
  get getSize() {
    return this._g(":getSize");
  }
  set getSize(v) {
    this._s(":getSize", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class LabelControl extends OxmlLeafElement {
  static _Q = "mso14:labelControl";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":showLabel", ":getShowLabel"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
}
class ControlClone extends OxmlLeafElement {
  static _Q = "mso14:control";
  static _A = [":size", ":getSize", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** getSize. Serialized as `:getSize` */
  get getSize() {
    return this._g(":getSize");
  }
  set getSize(v) {
    this._s(":getSize", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class MenuSeparatorNoTitle extends OxmlLeafElement {
  static _Q = "mso14:menuSeparator";
  static _A = [":id", ":idQ", ":tag", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
}
class MenuWithTitle extends OxmlCompositeElement {
  static _Q = "mso14:menu";
  static _A = [":id", ":idQ", ":tag", ":idMso", ":itemSize", ":title", ":getTitle", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** itemSize. Serialized as `:itemSize` */
  get itemSize() {
    return this._g(":itemSize");
  }
  set itemSize(v) {
    this._s(":itemSize", v);
  }
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** getTitle. Serialized as `:getTitle` */
  get getTitle() {
    return this._g(":getTitle");
  }
  set getTitle(v) {
    this._s(":getTitle", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class SplitButtonWithTitle extends OxmlCompositeElement {
  static _Q = "mso14:splitButton";
  static _A = [":enabled", ":getEnabled", ":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel"];
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
}
class DynamicMenuRegular extends OxmlLeafElement {
  static _Q = "mso14:dynamicMenu";
  static _A = [":description", ":getDescription", ":id", ":idQ", ":tag", ":idMso", ":getContent", ":invalidateContentOnDrop", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** getContent. Serialized as `:getContent` */
  get getContent() {
    return this._g(":getContent");
  }
  set getContent(v) {
    this._s(":getContent", v);
  }
  /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
  get invalidateContentOnDrop() {
    return this._g(":invalidateContentOnDrop");
  }
  set invalidateContentOnDrop(v) {
    this._s(":invalidateContentOnDrop", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class MenuRegular extends OxmlCompositeElement {
  static _Q = "mso14:menu";
  static _A = [":itemSize", ":description", ":getDescription", ":id", ":idQ", ":tag", ":idMso", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** itemSize. Serialized as `:itemSize` */
  get itemSize() {
    return this._g(":itemSize");
  }
  set itemSize(v) {
    this._s(":itemSize", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class SplitButtonRegular extends OxmlCompositeElement {
  static _Q = "mso14:splitButton";
  static _A = [":enabled", ":getEnabled", ":id", ":idQ", ":tag", ":idMso", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel"];
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
}
class MenuSeparator extends OxmlLeafElement {
  static _Q = "mso14:menuSeparator";
  static _A = [":id", ":idQ", ":tag", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":title", ":getTitle"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** getTitle. Serialized as `:getTitle` */
  get getTitle() {
    return this._g(":getTitle");
  }
  set getTitle(v) {
    this._s(":getTitle", v);
  }
}
class ToggleButtonRegular extends OxmlLeafElement {
  static _Q = "mso14:toggleButton";
  static _A = [":getPressed", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** getPressed. Serialized as `:getPressed` */
  get getPressed() {
    return this._g(":getPressed");
  }
  set getPressed(v) {
    this._s(":getPressed", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class GalleryRegular extends OxmlCompositeElement {
  static _Q = "mso14:gallery";
  static _A = [":description", ":getDescription", ":invalidateContentOnDrop", ":columns", ":rows", ":itemWidth", ":itemHeight", ":getItemWidth", ":getItemHeight", ":showItemLabel", ":showInRibbon", ":onAction", ":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":showItemImage", ":getItemCount", ":getItemLabel", ":getItemScreentip", ":getItemSupertip", ":getItemImage", ":getItemID", ":sizeString", ":getSelectedItemID", ":getSelectedItemIndex", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** invalidateContentOnDrop. Serialized as `:invalidateContentOnDrop` */
  get invalidateContentOnDrop() {
    return this._g(":invalidateContentOnDrop");
  }
  set invalidateContentOnDrop(v) {
    this._s(":invalidateContentOnDrop", v);
  }
  /** columns. Serialized as `:columns` */
  get columns() {
    return this._g(":columns");
  }
  set columns(v) {
    this._s(":columns", v);
  }
  /** rows. Serialized as `:rows` */
  get rows() {
    return this._g(":rows");
  }
  set rows(v) {
    this._s(":rows", v);
  }
  /** itemWidth. Serialized as `:itemWidth` */
  get itemWidth() {
    return this._g(":itemWidth");
  }
  set itemWidth(v) {
    this._s(":itemWidth", v);
  }
  /** itemHeight. Serialized as `:itemHeight` */
  get itemHeight() {
    return this._g(":itemHeight");
  }
  set itemHeight(v) {
    this._s(":itemHeight", v);
  }
  /** getItemWidth. Serialized as `:getItemWidth` */
  get getItemWidth() {
    return this._g(":getItemWidth");
  }
  set getItemWidth(v) {
    this._s(":getItemWidth", v);
  }
  /** getItemHeight. Serialized as `:getItemHeight` */
  get getItemHeight() {
    return this._g(":getItemHeight");
  }
  set getItemHeight(v) {
    this._s(":getItemHeight", v);
  }
  /** showItemLabel. Serialized as `:showItemLabel` */
  get showItemLabel() {
    return this._g(":showItemLabel");
  }
  set showItemLabel(v) {
    this._s(":showItemLabel", v);
  }
  /** showInRibbon. Serialized as `:showInRibbon` */
  get showInRibbon() {
    return this._g(":showInRibbon");
  }
  set showInRibbon(v) {
    this._s(":showInRibbon", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** showItemImage. Serialized as `:showItemImage` */
  get showItemImage() {
    return this._g(":showItemImage");
  }
  set showItemImage(v) {
    this._s(":showItemImage", v);
  }
  /** getItemCount. Serialized as `:getItemCount` */
  get getItemCount() {
    return this._g(":getItemCount");
  }
  set getItemCount(v) {
    this._s(":getItemCount", v);
  }
  /** getItemLabel. Serialized as `:getItemLabel` */
  get getItemLabel() {
    return this._g(":getItemLabel");
  }
  set getItemLabel(v) {
    this._s(":getItemLabel", v);
  }
  /** getItemScreentip. Serialized as `:getItemScreentip` */
  get getItemScreentip() {
    return this._g(":getItemScreentip");
  }
  set getItemScreentip(v) {
    this._s(":getItemScreentip", v);
  }
  /** getItemSupertip. Serialized as `:getItemSupertip` */
  get getItemSupertip() {
    return this._g(":getItemSupertip");
  }
  set getItemSupertip(v) {
    this._s(":getItemSupertip", v);
  }
  /** getItemImage. Serialized as `:getItemImage` */
  get getItemImage() {
    return this._g(":getItemImage");
  }
  set getItemImage(v) {
    this._s(":getItemImage", v);
  }
  /** getItemID. Serialized as `:getItemID` */
  get getItemID() {
    return this._g(":getItemID");
  }
  set getItemID(v) {
    this._s(":getItemID", v);
  }
  /** sizeString. Serialized as `:sizeString` */
  get sizeString() {
    return this._g(":sizeString");
  }
  set sizeString(v) {
    this._s(":sizeString", v);
  }
  /** getSelectedItemID. Serialized as `:getSelectedItemID` */
  get getSelectedItemID() {
    return this._g(":getSelectedItemID");
  }
  set getSelectedItemID(v) {
    this._s(":getSelectedItemID", v);
  }
  /** getSelectedItemIndex. Serialized as `:getSelectedItemIndex` */
  get getSelectedItemIndex() {
    return this._g(":getSelectedItemIndex");
  }
  set getSelectedItemIndex(v) {
    this._s(":getSelectedItemIndex", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class CheckBox extends OxmlLeafElement {
  static _Q = "mso14:checkBox";
  static _A = [":getPressed", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip"];
  /** getPressed. Serialized as `:getPressed` */
  get getPressed() {
    return this._g(":getPressed");
  }
  set getPressed(v) {
    this._s(":getPressed", v);
  }
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
}
class ButtonRegular extends OxmlLeafElement {
  static _Q = "mso14:button";
  static _A = [":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":tag", ":idMso", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** onAction. Serialized as `:onAction` */
  get onAction() {
    return this._g(":onAction");
  }
  set onAction(v) {
    this._s(":onAction", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** getDescription. Serialized as `:getDescription` */
  get getDescription() {
    return this._g(":getDescription");
  }
  set getDescription(v) {
    this._s(":getDescription", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
class ControlCloneRegular extends OxmlLeafElement {
  static _Q = "mso14:control";
  static _A = [":idQ", ":tag", ":idMso", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
  /** idQ. Serialized as `:idQ` */
  get qualifiedId() {
    return this._g(":idQ");
  }
  set qualifiedId(v) {
    this._s(":idQ", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** idMso. Serialized as `:idMso` */
  get idMso() {
    return this._g(":idMso");
  }
  set idMso(v) {
    this._s(":idMso", v);
  }
  /** image. Serialized as `:image` */
  get image() {
    return this._g(":image");
  }
  set image(v) {
    this._s(":image", v);
  }
  /** imageMso. Serialized as `:imageMso` */
  get imageMso() {
    return this._g(":imageMso");
  }
  set imageMso(v) {
    this._s(":imageMso", v);
  }
  /** getImage. Serialized as `:getImage` */
  get getImage() {
    return this._g(":getImage");
  }
  set getImage(v) {
    this._s(":getImage", v);
  }
  /** screentip. Serialized as `:screentip` */
  get screentip() {
    return this._g(":screentip");
  }
  set screentip(v) {
    this._s(":screentip", v);
  }
  /** getScreentip. Serialized as `:getScreentip` */
  get getScreentip() {
    return this._g(":getScreentip");
  }
  set getScreentip(v) {
    this._s(":getScreentip", v);
  }
  /** supertip. Serialized as `:supertip` */
  get supertip() {
    return this._g(":supertip");
  }
  set supertip(v) {
    this._s(":supertip", v);
  }
  /** getSupertip. Serialized as `:getSupertip` */
  get getSupertip() {
    return this._g(":getSupertip");
  }
  set getSupertip(v) {
    this._s(":getSupertip", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** getEnabled. Serialized as `:getEnabled` */
  get getEnabled() {
    return this._g(":getEnabled");
  }
  set getEnabled(v) {
    this._s(":getEnabled", v);
  }
  /** label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** getLabel. Serialized as `:getLabel` */
  get getLabel() {
    return this._g(":getLabel");
  }
  set getLabel(v) {
    this._s(":getLabel", v);
  }
  /** insertAfterMso. Serialized as `:insertAfterMso` */
  get insertAfterMso() {
    return this._g(":insertAfterMso");
  }
  set insertAfterMso(v) {
    this._s(":insertAfterMso", v);
  }
  /** insertBeforeMso. Serialized as `:insertBeforeMso` */
  get insertBeforeMso() {
    return this._g(":insertBeforeMso");
  }
  set insertBeforeMso(v) {
    this._s(":insertBeforeMso", v);
  }
  /** insertAfterQ. Serialized as `:insertAfterQ` */
  get insertAfterQulifiedId() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQulifiedId(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQulifiedId() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQulifiedId(v) {
    this._s(":insertBeforeQ", v);
  }
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** getVisible. Serialized as `:getVisible` */
  get getVisible() {
    return this._g(":getVisible");
  }
  set getVisible(v) {
    this._s(":getVisible", v);
  }
  /** keytip. Serialized as `:keytip` */
  get keytip() {
    return this._g(":keytip");
  }
  set keytip(v) {
    this._s(":keytip", v);
  }
  /** getKeytip. Serialized as `:getKeytip` */
  get getKeytip() {
    return this._g(":getKeytip");
  }
  set getKeytip(v) {
    this._s(":getKeytip", v);
  }
  /** showLabel. Serialized as `:showLabel` */
  get showLabel() {
    return this._g(":showLabel");
  }
  set showLabel(v) {
    this._s(":showLabel", v);
  }
  /** getShowLabel. Serialized as `:getShowLabel` */
  get getShowLabel() {
    return this._g(":getShowLabel");
  }
  set getShowLabel(v) {
    this._s(":getShowLabel", v);
  }
  /** showImage. Serialized as `:showImage` */
  get showImage() {
    return this._g(":showImage");
  }
  set showImage(v) {
    this._s(":showImage", v);
  }
  /** getShowImage. Serialized as `:getShowImage` */
  get getShowImage() {
    return this._g(":getShowImage");
  }
  set getShowImage(v) {
    this._s(":getShowImage", v);
  }
}
function initOffice2010CustomUINamespace() {
  ContextMenus._C = {
    "mso14:contextMenu": ContextMenu
  };
  Backstage._C = {
    "mso14:tab": BackstageTab,
    "mso14:button": BackstageFastCommandButton
  };
  Backstage._D = {
    ":onShow": new OxmlAttr(":onShow", OxmlType.StringValue),
    ":onHide": new OxmlAttr(":onHide", OxmlType.StringValue)
  };
  Ribbon._C = {
    "mso14:qat": QuickAccessToolbar,
    "mso14:tabs": Tabs,
    "mso14:contextualTabs": ContextualTabs
  };
  Ribbon._D = {
    ":startFromScratch": new OxmlAttr(":startFromScratch", OxmlType.BooleanValue)
  };
  Commands._C = {
    "mso14:command": Command
  };
  BackstageFastCommandButton._D = {
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":isDefinitive": new OxmlAttr(":isDefinitive", OxmlType.BooleanValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue)
  };
  BackstageTab._C = {
    "mso14:firstColumn": BackstageGroups,
    "mso14:secondColumn": SimpleGroups
  };
  BackstageTab._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":getTitle": new OxmlAttr(":getTitle", OxmlType.StringValue),
    ":columnWidthPercent": new OxmlAttr(":columnWidthPercent", OxmlType.IntegerValue),
    ":firstColumnMinWidth": new OxmlAttr(":firstColumnMinWidth", OxmlType.IntegerValue),
    ":firstColumnMaxWidth": new OxmlAttr(":firstColumnMaxWidth", OxmlType.IntegerValue),
    ":secondColumnMinWidth": new OxmlAttr(":secondColumnMinWidth", OxmlType.IntegerValue),
    ":secondColumnMaxWidth": new OxmlAttr(":secondColumnMaxWidth", OxmlType.IntegerValue)
  };
  SimpleGroups._C = {
    "mso14:group": BackstageGroup,
    "mso14:taskGroup": TaskGroup
  };
  BackstageGroups._C = {
    "mso14:taskFormGroup": TaskFormGroup,
    "mso14:group": BackstageGroup,
    "mso14:taskGroup": TaskGroup
  };
  TaskFormGroup._C = {
    "mso14:category": TaskFormGroupCategory
  };
  TaskFormGroup._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":helperText": new OxmlAttr(":helperText", OxmlType.StringValue),
    ":getHelperText": new OxmlAttr(":getHelperText", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":allowedTaskSizes": new OxmlAttr(":allowedTaskSizes", OxmlType.EnumValue, TaskSizesValuesArray)
  };
  TaskFormGroupTask._C = {
    "mso14:group": BackstageGroup
  };
  TaskFormGroupTask._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  TaskFormGroupCategory._C = {
    "mso14:task": TaskFormGroupTask
  };
  TaskFormGroupCategory._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue)
  };
  TaskGroupTask._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":isDefinitive": new OxmlAttr(":isDefinitive", OxmlType.BooleanValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  TaskGroupCategory._C = {
    "mso14:task": TaskGroupTask
  };
  TaskGroupCategory._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue)
  };
  GroupControlsType._C = {
    "mso14:button": BackstageGroupButton,
    "mso14:checkBox": BackstageCheckBox,
    "mso14:editBox": BackstageEditBox,
    "mso14:dropDown": BackstageDropDown,
    "mso14:radioGroup": RadioGroup,
    "mso14:comboBox": BackstageComboBox,
    "mso14:hyperlink": Hyperlink,
    "mso14:labelControl": BackstageLabelControl,
    "mso14:groupBox": GroupBox,
    "mso14:layoutContainer": LayoutContainer,
    "mso14:imageControl": ImageControl
  };
  BottomItemsGroupControls._C = {
    "mso14:button": BackstageGroupButton,
    "mso14:checkBox": BackstageCheckBox,
    "mso14:editBox": BackstageEditBox,
    "mso14:dropDown": BackstageDropDown,
    "mso14:radioGroup": RadioGroup,
    "mso14:comboBox": BackstageComboBox,
    "mso14:hyperlink": Hyperlink,
    "mso14:labelControl": BackstageLabelControl,
    "mso14:groupBox": GroupBox,
    "mso14:layoutContainer": LayoutContainer,
    "mso14:imageControl": ImageControl
  };
  TopItemsGroupControls._C = {
    "mso14:button": BackstageGroupButton,
    "mso14:checkBox": BackstageCheckBox,
    "mso14:editBox": BackstageEditBox,
    "mso14:dropDown": BackstageDropDown,
    "mso14:radioGroup": RadioGroup,
    "mso14:comboBox": BackstageComboBox,
    "mso14:hyperlink": Hyperlink,
    "mso14:labelControl": BackstageLabelControl,
    "mso14:groupBox": GroupBox,
    "mso14:layoutContainer": LayoutContainer,
    "mso14:imageControl": ImageControl
  };
  PrimaryItem._C = {
    "mso14:button": BackstageRegularButton,
    "mso14:menu": BackstagePrimaryMenu
  };
  BackstageMenuGroup._C = {
    "mso14:button": BackstageMenuButton,
    "mso14:checkBox": BackstageMenuCheckBox,
    "mso14:menu": BackstageSubMenu,
    "mso14:toggleButton": BackstageMenuToggleButton
  };
  BackstageMenuGroup._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":itemSize": new OxmlAttr(":itemSize", OxmlType.EnumValue, ItemSizeValuesArray)
  };
  BackstagePrimaryMenu._C = {
    "mso14:menuGroup": BackstageMenuGroup
  };
  BackstagePrimaryMenu._D = {
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  BackstageRegularButton._D = {
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":isDefinitive": new OxmlAttr(":isDefinitive", OxmlType.BooleanValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue)
  };
  BackstageItemType._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue)
  };
  ContextMenu._C = {
    "mso14:control": ControlCloneRegular,
    "mso14:button": ButtonRegular,
    "mso14:checkBox": CheckBox,
    "mso14:gallery": GalleryRegular,
    "mso14:toggleButton": ToggleButtonRegular,
    "mso14:splitButton": SplitButtonRegular,
    "mso14:menu": MenuRegular,
    "mso14:dynamicMenu": DynamicMenuRegular,
    "mso14:menuSeparator": MenuSeparatorNoTitle
  };
  ContextMenu._D = {
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue)
  };
  ContextualTabs._C = {
    "mso14:tabSet": TabSet
  };
  Tabs._C = {
    "mso14:tab": Tab
  };
  QuickAccessToolbar._C = {
    "mso14:sharedControls": SharedControlsQatItems,
    "mso14:documentControls": DocumentControlsQatItems
  };
  Command._D = {
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue)
  };
  TabSet._C = {
    "mso14:tab": Tab
  };
  TabSet._D = {
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue)
  };
  Tab._C = {
    "mso14:group": Group
  };
  Tab._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  QatItemsType._C = {
    "mso14:control": ControlCloneQat,
    "mso14:button": ButtonRegular,
    "mso14:separator": Separator
  };
  DocumentControlsQatItems._C = {
    "mso14:control": ControlCloneQat,
    "mso14:button": ButtonRegular,
    "mso14:separator": Separator
  };
  SharedControlsQatItems._C = {
    "mso14:control": ControlCloneQat,
    "mso14:button": ButtonRegular,
    "mso14:separator": Separator
  };
  ControlCloneQat._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  Group._C = {
    "mso14:control": ControlClone,
    "mso14:labelControl": LabelControl,
    "mso14:button": Button,
    "mso14:toggleButton": ToggleButton,
    "mso14:checkBox": CheckBox,
    "mso14:editBox": EditBox,
    "mso14:comboBox": ComboBox,
    "mso14:dropDown": DropDownRegular,
    "mso14:gallery": Gallery,
    "mso14:menu": Menu,
    "mso14:dynamicMenu": DynamicMenu,
    "mso14:splitButton": SplitButton,
    "mso14:box": Box,
    "mso14:buttonGroup": ButtonGroup,
    "mso14:separator": Separator,
    "mso14:dialogBoxLauncher": DialogBoxLauncher
  };
  Group._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":autoScale": new OxmlAttr(":autoScale", OxmlType.BooleanValue),
    ":centerVertically": new OxmlAttr(":centerVertically", OxmlType.BooleanValue)
  };
  DialogBoxLauncher._C = {
    "mso14:button": ButtonRegular
  };
  Separator._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue)
  };
  VisibleToggleButton._D = {
    ":getPressed": new OxmlAttr(":getPressed", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  VisibleButton._D = {
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  Item._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue)
  };
  CustomUI._C = {
    "mso14:commands": Commands,
    "mso14:ribbon": Ribbon,
    "mso14:backstage": Backstage,
    "mso14:contextMenus": ContextMenus
  };
  CustomUI._D = {
    ":onLoad": new OxmlAttr(":onLoad", OxmlType.StringValue),
    ":loadImage": new OxmlAttr(":loadImage", OxmlType.StringValue)
  };
  MenuRoot._C = {
    "mso14:control": ControlCloneRegular,
    "mso14:button": ButtonRegular,
    "mso14:checkBox": CheckBox,
    "mso14:gallery": GalleryRegular,
    "mso14:toggleButton": ToggleButtonRegular,
    "mso14:menuSeparator": MenuSeparator,
    "mso14:splitButton": SplitButtonRegular,
    "mso14:menu": MenuRegular,
    "mso14:dynamicMenu": DynamicMenuRegular
  };
  MenuRoot._D = {
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":getTitle": new OxmlAttr(":getTitle", OxmlType.StringValue),
    ":itemSize": new OxmlAttr(":itemSize", OxmlType.EnumValue, ItemSizeValuesArray)
  };
  TaskGroup._C = {
    "mso14:category": TaskGroupCategory
  };
  TaskGroup._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":helperText": new OxmlAttr(":helperText", OxmlType.StringValue),
    ":getHelperText": new OxmlAttr(":getHelperText", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":allowedTaskSizes": new OxmlAttr(":allowedTaskSizes", OxmlType.EnumValue, TaskSizesValuesArray)
  };
  BackstageGroup._C = {
    "mso14:primaryItem": PrimaryItem,
    "mso14:topItems": TopItemsGroupControls,
    "mso14:bottomItems": BottomItemsGroupControls
  };
  BackstageGroup._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.EnumValue, StyleValuesArray),
    ":getStyle": new OxmlAttr(":getStyle", OxmlType.StringValue),
    ":helperText": new OxmlAttr(":helperText", OxmlType.StringValue),
    ":getHelperText": new OxmlAttr(":getHelperText", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue)
  };
  ImageControl._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":altText": new OxmlAttr(":altText", OxmlType.StringValue),
    ":getAltText": new OxmlAttr(":getAltText", OxmlType.StringValue)
  };
  LayoutContainer._C = {
    "mso14:button": BackstageGroupButton,
    "mso14:checkBox": BackstageCheckBox,
    "mso14:editBox": BackstageEditBox,
    "mso14:dropDown": BackstageDropDown,
    "mso14:radioGroup": RadioGroup,
    "mso14:comboBox": BackstageComboBox,
    "mso14:hyperlink": Hyperlink,
    "mso14:labelControl": BackstageLabelControl,
    "mso14:groupBox": GroupBox,
    "mso14:layoutContainer": LayoutContainer,
    "mso14:imageControl": ImageControl
  };
  LayoutContainer._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":align": new OxmlAttr(":align", OxmlType.EnumValue, ExpandValuesArray),
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":layoutChildren": new OxmlAttr(":layoutChildren", OxmlType.EnumValue, LayoutChildrenValuesArray)
  };
  GroupBox._C = {
    "mso14:button": BackstageGroupButton,
    "mso14:checkBox": BackstageCheckBox,
    "mso14:editBox": BackstageEditBox,
    "mso14:dropDown": BackstageDropDown,
    "mso14:radioGroup": RadioGroup,
    "mso14:comboBox": BackstageComboBox,
    "mso14:hyperlink": Hyperlink,
    "mso14:labelControl": BackstageLabelControl,
    "mso14:groupBox": GroupBox,
    "mso14:layoutContainer": LayoutContainer,
    "mso14:imageControl": ImageControl
  };
  GroupBox._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue)
  };
  BackstageLabelControl._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":alignLabel": new OxmlAttr(":alignLabel", OxmlType.EnumValue, ExpandValuesArray),
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":noWrap": new OxmlAttr(":noWrap", OxmlType.BooleanValue)
  };
  Hyperlink._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":alignLabel": new OxmlAttr(":alignLabel", OxmlType.EnumValue, ExpandValuesArray),
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":getTarget": new OxmlAttr(":getTarget", OxmlType.StringValue)
  };
  BackstageComboBox._C = {
    "mso14:item": ItemBackstageItem
  };
  BackstageComboBox._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":alignLabel": new OxmlAttr(":alignLabel", OxmlType.EnumValue, ExpandValuesArray),
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":getText": new OxmlAttr(":getText", OxmlType.StringValue),
    ":onChange": new OxmlAttr(":onChange", OxmlType.StringValue),
    ":sizeString": new OxmlAttr(":sizeString", OxmlType.StringValue),
    ":getItemCount": new OxmlAttr(":getItemCount", OxmlType.StringValue),
    ":getItemLabel": new OxmlAttr(":getItemLabel", OxmlType.StringValue),
    ":getItemID": new OxmlAttr(":getItemID", OxmlType.StringValue)
  };
  RadioGroup._C = {
    "mso14:radioButton": RadioButtonBackstageItem
  };
  RadioGroup._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":alignLabel": new OxmlAttr(":alignLabel", OxmlType.EnumValue, ExpandValuesArray),
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":getSelectedItemIndex": new OxmlAttr(":getSelectedItemIndex", OxmlType.StringValue),
    ":getItemCount": new OxmlAttr(":getItemCount", OxmlType.StringValue),
    ":getItemLabel": new OxmlAttr(":getItemLabel", OxmlType.StringValue),
    ":getItemID": new OxmlAttr(":getItemID", OxmlType.StringValue)
  };
  BackstageDropDown._C = {
    "mso14:item": ItemBackstageItem
  };
  BackstageDropDown._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":alignLabel": new OxmlAttr(":alignLabel", OxmlType.EnumValue, ExpandValuesArray),
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":getSelectedItemIndex": new OxmlAttr(":getSelectedItemIndex", OxmlType.StringValue),
    ":sizeString": new OxmlAttr(":sizeString", OxmlType.StringValue),
    ":getItemCount": new OxmlAttr(":getItemCount", OxmlType.StringValue),
    ":getItemLabel": new OxmlAttr(":getItemLabel", OxmlType.StringValue),
    ":getItemID": new OxmlAttr(":getItemID", OxmlType.StringValue)
  };
  BackstageEditBox._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":alignLabel": new OxmlAttr(":alignLabel", OxmlType.EnumValue, ExpandValuesArray),
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":getText": new OxmlAttr(":getText", OxmlType.StringValue),
    ":onChange": new OxmlAttr(":onChange", OxmlType.StringValue),
    ":maxLength": new OxmlAttr(":maxLength", OxmlType.IntegerValue),
    ":sizeString": new OxmlAttr(":sizeString", OxmlType.StringValue)
  };
  BackstageCheckBox._D = {
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":getPressed": new OxmlAttr(":getPressed", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  BackstageGroupButton._D = {
    ":expand": new OxmlAttr(":expand", OxmlType.EnumValue, ExpandValuesArray),
    ":style": new OxmlAttr(":style", OxmlType.EnumValue, Style2ValuesArray),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":isDefinitive": new OxmlAttr(":isDefinitive", OxmlType.BooleanValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue)
  };
  BackstageMenuToggleButton._D = {
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":getPressed": new OxmlAttr(":getPressed", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  BackstageSubMenu._C = {
    "mso14:menuGroup": BackstageMenuGroup
  };
  BackstageSubMenu._D = {
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  BackstageMenuCheckBox._D = {
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":getPressed": new OxmlAttr(":getPressed", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  BackstageMenuButton._D = {
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":isDefinitive": new OxmlAttr(":isDefinitive", OxmlType.BooleanValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue)
  };
  ButtonGroup._C = {
    "mso14:control": ControlCloneRegular,
    "mso14:button": ButtonRegular,
    "mso14:toggleButton": ToggleButtonRegular,
    "mso14:gallery": GalleryRegular,
    "mso14:menu": MenuRegular,
    "mso14:dynamicMenu": DynamicMenuRegular,
    "mso14:splitButton": SplitButtonRegular,
    "mso14:separator": Separator
  };
  ButtonGroup._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue)
  };
  Box._C = {
    "mso14:control": ControlClone,
    "mso14:labelControl": LabelControl,
    "mso14:button": Button,
    "mso14:toggleButton": ToggleButton,
    "mso14:checkBox": CheckBox,
    "mso14:editBox": EditBox,
    "mso14:comboBox": ComboBox,
    "mso14:dropDown": DropDownRegular,
    "mso14:gallery": Gallery,
    "mso14:menu": Menu,
    "mso14:dynamicMenu": DynamicMenu,
    "mso14:splitButton": SplitButton,
    "mso14:box": Box,
    "mso14:buttonGroup": ButtonGroup
  };
  Box._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":boxStyle": new OxmlAttr(":boxStyle", OxmlType.EnumValue, BoxStyleValuesArray)
  };
  SplitButton._C = {
    "mso14:button": VisibleButton,
    "mso14:toggleButton": VisibleToggleButton,
    "mso14:menu": MenuRegular
  };
  SplitButton._D = {
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue)
  };
  DynamicMenu._D = {
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":getContent": new OxmlAttr(":getContent", OxmlType.StringValue),
    ":invalidateContentOnDrop": new OxmlAttr(":invalidateContentOnDrop", OxmlType.BooleanValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  Menu._C = {
    "mso14:control": ControlCloneRegular,
    "mso14:button": ButtonRegular,
    "mso14:checkBox": CheckBox,
    "mso14:gallery": GalleryRegular,
    "mso14:toggleButton": ToggleButtonRegular,
    "mso14:menuSeparator": MenuSeparator,
    "mso14:splitButton": SplitButtonRegular,
    "mso14:menu": MenuRegular,
    "mso14:dynamicMenu": DynamicMenuRegular
  };
  Menu._D = {
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":itemSize": new OxmlAttr(":itemSize", OxmlType.EnumValue, ItemSizeValuesArray),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  Gallery._C = {
    "mso14:item": Item,
    "mso14:button": ButtonRegular
  };
  Gallery._D = {
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":invalidateContentOnDrop": new OxmlAttr(":invalidateContentOnDrop", OxmlType.BooleanValue),
    ":columns": new OxmlAttr(":columns", OxmlType.IntegerValue),
    ":rows": new OxmlAttr(":rows", OxmlType.IntegerValue),
    ":itemWidth": new OxmlAttr(":itemWidth", OxmlType.IntegerValue),
    ":itemHeight": new OxmlAttr(":itemHeight", OxmlType.IntegerValue),
    ":getItemWidth": new OxmlAttr(":getItemWidth", OxmlType.StringValue),
    ":getItemHeight": new OxmlAttr(":getItemHeight", OxmlType.StringValue),
    ":showItemLabel": new OxmlAttr(":showItemLabel", OxmlType.BooleanValue),
    ":showInRibbon": new OxmlAttr(":showInRibbon", OxmlType.EnumValue, GalleryShowInRibbonValuesArray),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":showItemImage": new OxmlAttr(":showItemImage", OxmlType.BooleanValue),
    ":getItemCount": new OxmlAttr(":getItemCount", OxmlType.StringValue),
    ":getItemLabel": new OxmlAttr(":getItemLabel", OxmlType.StringValue),
    ":getItemScreentip": new OxmlAttr(":getItemScreentip", OxmlType.StringValue),
    ":getItemSupertip": new OxmlAttr(":getItemSupertip", OxmlType.StringValue),
    ":getItemImage": new OxmlAttr(":getItemImage", OxmlType.StringValue),
    ":getItemID": new OxmlAttr(":getItemID", OxmlType.StringValue),
    ":sizeString": new OxmlAttr(":sizeString", OxmlType.StringValue),
    ":getSelectedItemID": new OxmlAttr(":getSelectedItemID", OxmlType.StringValue),
    ":getSelectedItemIndex": new OxmlAttr(":getSelectedItemIndex", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  DropDownRegular._C = {
    "mso14:item": Item,
    "mso14:button": ButtonRegular
  };
  DropDownRegular._D = {
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":showItemImage": new OxmlAttr(":showItemImage", OxmlType.BooleanValue),
    ":getItemCount": new OxmlAttr(":getItemCount", OxmlType.StringValue),
    ":getItemLabel": new OxmlAttr(":getItemLabel", OxmlType.StringValue),
    ":getItemScreentip": new OxmlAttr(":getItemScreentip", OxmlType.StringValue),
    ":getItemSupertip": new OxmlAttr(":getItemSupertip", OxmlType.StringValue),
    ":getItemImage": new OxmlAttr(":getItemImage", OxmlType.StringValue),
    ":getItemID": new OxmlAttr(":getItemID", OxmlType.StringValue),
    ":sizeString": new OxmlAttr(":sizeString", OxmlType.StringValue),
    ":getSelectedItemID": new OxmlAttr(":getSelectedItemID", OxmlType.StringValue),
    ":getSelectedItemIndex": new OxmlAttr(":getSelectedItemIndex", OxmlType.StringValue),
    ":showItemLabel": new OxmlAttr(":showItemLabel", OxmlType.BooleanValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  ComboBox._C = {
    "mso14:item": Item
  };
  ComboBox._D = {
    ":showItemImage": new OxmlAttr(":showItemImage", OxmlType.BooleanValue),
    ":getItemCount": new OxmlAttr(":getItemCount", OxmlType.StringValue),
    ":getItemLabel": new OxmlAttr(":getItemLabel", OxmlType.StringValue),
    ":getItemScreentip": new OxmlAttr(":getItemScreentip", OxmlType.StringValue),
    ":getItemSupertip": new OxmlAttr(":getItemSupertip", OxmlType.StringValue),
    ":getItemImage": new OxmlAttr(":getItemImage", OxmlType.StringValue),
    ":getItemID": new OxmlAttr(":getItemID", OxmlType.StringValue),
    ":sizeString": new OxmlAttr(":sizeString", OxmlType.StringValue),
    ":invalidateContentOnDrop": new OxmlAttr(":invalidateContentOnDrop", OxmlType.BooleanValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":maxLength": new OxmlAttr(":maxLength", OxmlType.IntegerValue),
    ":getText": new OxmlAttr(":getText", OxmlType.StringValue),
    ":onChange": new OxmlAttr(":onChange", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  EditBox._D = {
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":maxLength": new OxmlAttr(":maxLength", OxmlType.IntegerValue),
    ":getText": new OxmlAttr(":getText", OxmlType.StringValue),
    ":onChange": new OxmlAttr(":onChange", OxmlType.StringValue),
    ":sizeString": new OxmlAttr(":sizeString", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  ToggleButton._D = {
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":getPressed": new OxmlAttr(":getPressed", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  Button._D = {
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  LabelControl._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue)
  };
  ControlClone._D = {
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  MenuSeparatorNoTitle._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue)
  };
  MenuWithTitle._C = {
    "mso14:control": ControlCloneRegular,
    "mso14:button": ButtonRegular,
    "mso14:checkBox": CheckBox,
    "mso14:gallery": GalleryRegular,
    "mso14:toggleButton": ToggleButtonRegular,
    "mso14:menuSeparator": MenuSeparator,
    "mso14:splitButton": SplitButtonWithTitle,
    "mso14:menu": MenuWithTitle,
    "mso14:dynamicMenu": DynamicMenuRegular
  };
  MenuWithTitle._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":itemSize": new OxmlAttr(":itemSize", OxmlType.EnumValue, ItemSizeValuesArray),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":getTitle": new OxmlAttr(":getTitle", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  SplitButtonWithTitle._C = {
    "mso14:button": VisibleButton,
    "mso14:toggleButton": VisibleToggleButton,
    "mso14:menu": MenuWithTitle
  };
  SplitButtonWithTitle._D = {
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue)
  };
  DynamicMenuRegular._D = {
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":getContent": new OxmlAttr(":getContent", OxmlType.StringValue),
    ":invalidateContentOnDrop": new OxmlAttr(":invalidateContentOnDrop", OxmlType.BooleanValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  MenuRegular._C = {
    "mso14:control": ControlCloneRegular,
    "mso14:button": ButtonRegular,
    "mso14:checkBox": CheckBox,
    "mso14:gallery": GalleryRegular,
    "mso14:toggleButton": ToggleButtonRegular,
    "mso14:menuSeparator": MenuSeparator,
    "mso14:splitButton": SplitButtonRegular,
    "mso14:menu": MenuRegular,
    "mso14:dynamicMenu": DynamicMenuRegular
  };
  MenuRegular._D = {
    ":itemSize": new OxmlAttr(":itemSize", OxmlType.EnumValue, ItemSizeValuesArray),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  SplitButtonRegular._C = {
    "mso14:button": VisibleButton,
    "mso14:toggleButton": VisibleToggleButton,
    "mso14:menu": MenuRegular
  };
  SplitButtonRegular._D = {
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue)
  };
  MenuSeparator._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":getTitle": new OxmlAttr(":getTitle", OxmlType.StringValue)
  };
  ToggleButtonRegular._D = {
    ":getPressed": new OxmlAttr(":getPressed", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  GalleryRegular._C = {
    "mso14:item": Item,
    "mso14:button": ButtonRegular
  };
  GalleryRegular._D = {
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":invalidateContentOnDrop": new OxmlAttr(":invalidateContentOnDrop", OxmlType.BooleanValue),
    ":columns": new OxmlAttr(":columns", OxmlType.IntegerValue),
    ":rows": new OxmlAttr(":rows", OxmlType.IntegerValue),
    ":itemWidth": new OxmlAttr(":itemWidth", OxmlType.IntegerValue),
    ":itemHeight": new OxmlAttr(":itemHeight", OxmlType.IntegerValue),
    ":getItemWidth": new OxmlAttr(":getItemWidth", OxmlType.StringValue),
    ":getItemHeight": new OxmlAttr(":getItemHeight", OxmlType.StringValue),
    ":showItemLabel": new OxmlAttr(":showItemLabel", OxmlType.BooleanValue),
    ":showInRibbon": new OxmlAttr(":showInRibbon", OxmlType.EnumValue, GalleryShowInRibbonValuesArray),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":showItemImage": new OxmlAttr(":showItemImage", OxmlType.BooleanValue),
    ":getItemCount": new OxmlAttr(":getItemCount", OxmlType.StringValue),
    ":getItemLabel": new OxmlAttr(":getItemLabel", OxmlType.StringValue),
    ":getItemScreentip": new OxmlAttr(":getItemScreentip", OxmlType.StringValue),
    ":getItemSupertip": new OxmlAttr(":getItemSupertip", OxmlType.StringValue),
    ":getItemImage": new OxmlAttr(":getItemImage", OxmlType.StringValue),
    ":getItemID": new OxmlAttr(":getItemID", OxmlType.StringValue),
    ":sizeString": new OxmlAttr(":sizeString", OxmlType.StringValue),
    ":getSelectedItemID": new OxmlAttr(":getSelectedItemID", OxmlType.StringValue),
    ":getSelectedItemIndex": new OxmlAttr(":getSelectedItemIndex", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  CheckBox._D = {
    ":getPressed": new OxmlAttr(":getPressed", OxmlType.StringValue),
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  ButtonRegular._D = {
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  ControlCloneRegular._D = {
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":image": new OxmlAttr(":image", OxmlType.StringValue),
    ":imageMso": new OxmlAttr(":imageMso", OxmlType.StringValue),
    ":getImage": new OxmlAttr(":getImage", OxmlType.StringValue),
    ":screentip": new OxmlAttr(":screentip", OxmlType.StringValue),
    ":getScreentip": new OxmlAttr(":getScreentip", OxmlType.StringValue),
    ":supertip": new OxmlAttr(":supertip", OxmlType.StringValue),
    ":getSupertip": new OxmlAttr(":getSupertip", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":label": new OxmlAttr(":label", OxmlType.StringValue),
    ":getLabel": new OxmlAttr(":getLabel", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":keytip": new OxmlAttr(":keytip", OxmlType.StringValue),
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue),
    ":showLabel": new OxmlAttr(":showLabel", OxmlType.BooleanValue),
    ":getShowLabel": new OxmlAttr(":getShowLabel", OxmlType.StringValue),
    ":showImage": new OxmlAttr(":showImage", OxmlType.BooleanValue),
    ":getShowImage": new OxmlAttr(":getShowImage", OxmlType.StringValue)
  };
  return {
    prefix: "mso14",
    xmlns: "http://schemas.microsoft.com/office/2009/07/customui"
  };
}
export {
  Backstage,
  BackstageCheckBox,
  BackstageComboBox,
  BackstageDropDown,
  BackstageEditBox,
  BackstageFastCommandButton,
  BackstageGroup,
  BackstageGroupButton,
  BackstageGroups,
  BackstageItemType,
  BackstageLabelControl,
  BackstageMenuButton,
  BackstageMenuCheckBox,
  BackstageMenuGroup,
  BackstageMenuToggleButton,
  BackstagePrimaryMenu,
  BackstageRegularButton,
  BackstageSubMenu,
  BackstageTab,
  BottomItemsGroupControls,
  Box,
  BoxStyleValues,
  BoxStyleValuesArray,
  Button,
  ButtonGroup,
  ButtonRegular,
  CheckBox,
  ComboBox,
  Command,
  Commands,
  ContextMenu,
  ContextMenus,
  ContextualTabs,
  ControlClone,
  ControlCloneQat,
  ControlCloneRegular,
  CustomUI,
  DialogBoxLauncher,
  DocumentControlsQatItems,
  DropDownRegular,
  DynamicMenu,
  DynamicMenuRegular,
  EditBox,
  ExpandValues,
  ExpandValuesArray,
  Gallery,
  GalleryRegular,
  GalleryShowInRibbonValues,
  GalleryShowInRibbonValuesArray,
  Group,
  GroupBox,
  GroupControlsType,
  Hyperlink,
  ImageControl,
  Item,
  ItemBackstageItem,
  ItemSizeValues,
  ItemSizeValuesArray,
  LabelControl,
  LayoutChildrenValues,
  LayoutChildrenValuesArray,
  LayoutContainer,
  Menu,
  MenuRegular,
  MenuRoot,
  MenuSeparator,
  MenuSeparatorNoTitle,
  MenuWithTitle,
  PrimaryItem,
  QatItemsType,
  QuickAccessToolbar,
  RadioButtonBackstageItem,
  RadioGroup,
  Ribbon,
  Separator,
  SharedControlsQatItems,
  SimpleGroups,
  SizeValues,
  SizeValuesArray,
  SplitButton,
  SplitButtonRegular,
  SplitButtonWithTitle,
  Style2Values,
  Style2ValuesArray,
  StyleValues,
  StyleValuesArray,
  Tab,
  TabSet,
  Tabs,
  TaskFormGroup,
  TaskFormGroupCategory,
  TaskFormGroupTask,
  TaskGroup,
  TaskGroupCategory,
  TaskGroupTask,
  TaskSizesValues,
  TaskSizesValuesArray,
  ToggleButton,
  ToggleButtonRegular,
  TopItemsGroupControls,
  VisibleButton,
  VisibleToggleButton,
  initOffice2010CustomUINamespace
};
