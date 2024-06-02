import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
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
class Ribbon extends OxmlCompositeElement {
  static _Q = "mso:ribbon";
  static _A = [":startFromScratch"];
  /** startFromScratch. Serialized as `:startFromScratch` */
  get startFromScratch() {
    return this._g(":startFromScratch");
  }
  set startFromScratch(v) {
    this._s(":startFromScratch", v);
  }
  /** Returns OfficeMenu. */
  get officeMenu() {
    return this._f(OfficeMenu);
  }
  /** Returns QuickAccessToolbar. */
  get quickAccessToolbar() {
    return this._f(QuickAccessToolbar);
  }
  /** Returns Tabs. */
  get tabs() {
    return this._f(Tabs);
  }
  /** Returns ContextualTabSets. */
  get contextualTabSets() {
    return this._f(ContextualTabSets);
  }
}
class RepurposedCommands extends OxmlCompositeElement {
  static _Q = "mso:commands";
}
class ContextualTabSets extends OxmlCompositeElement {
  static _Q = "mso:contextualTabs";
}
class Tabs extends OxmlCompositeElement {
  static _Q = "mso:tabs";
}
class QuickAccessToolbar extends OxmlCompositeElement {
  static _Q = "mso:qat";
  /** Returns SharedQatControls. */
  get sharedQatControls() {
    return this._f(SharedQatControls);
  }
  /** Returns DocumentSpecificQuickAccessToolbarControls. */
  get documentSpecificQuickAccessToolbarControls() {
    return this._f(DocumentSpecificQuickAccessToolbarControls);
  }
}
class OfficeMenu extends OxmlCompositeElement {
  static _Q = "mso:officeMenu";
}
class RepurposedCommand extends OxmlLeafElement {
  static _Q = "mso:command";
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
class ContextualTabSet extends OxmlCompositeElement {
  static _Q = "mso:tabSet";
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
  static _Q = "mso:tab";
  static _A = [":id", ":idQ", ":idMso", ":tag", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip"];
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class DocumentSpecificQuickAccessToolbarControls extends QatItemsType {
  static _Q = "mso:documentControls";
}
class SharedQatControls extends QatItemsType {
  static _Q = "mso:sharedControls";
}
class QuickAccessToolbarControlClone extends OxmlLeafElement {
  static _Q = "mso:control";
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:group";
  static _A = [":id", ":idQ", ":idMso", ":tag", ":label", ":getLabel", ":image", ":imageMso", ":getImage", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":visible", ":getVisible", ":keytip", ":getKeytip"];
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
}
class DialogBoxLauncher extends OxmlCompositeElement {
  static _Q = "mso:dialogBoxLauncher";
  /** Returns UnsizedButton. */
  get unsizedButton() {
    return this._f(UnsizedButton);
  }
}
class VerticalSeparator extends OxmlLeafElement {
  static _Q = "mso:separator";
  static _A = [":id", ":idQ", ":visible", ":getVisible", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ"];
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
    this._s(":insertBeforeQ", v);
  }
}
class VisibleToggleButton extends OxmlLeafElement {
  static _Q = "mso:toggleButton";
  static _A = [":getPressed", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:button";
  static _A = [":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:item";
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
  static _Q = "mso:customUI";
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
  /** Returns RepurposedCommands. */
  get repurposedCommands() {
    return this._f(RepurposedCommands);
  }
  /** Returns Ribbon. */
  get ribbon() {
    return this._f(Ribbon);
  }
}
class MenuRoot extends OxmlCompositeElement {
  static _Q = "mso:menu";
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
class ButtonGroup extends OxmlCompositeElement {
  static _Q = "mso:buttonGroup";
  static _A = [":id", ":idQ", ":visible", ":getVisible", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ"];
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
    this._s(":insertBeforeQ", v);
  }
}
class Box extends OxmlCompositeElement {
  static _Q = "mso:box";
  static _A = [":id", ":idQ", ":visible", ":getVisible", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":boxStyle"];
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:splitButton";
  static _A = [":size", ":getSize", ":enabled", ":getEnabled", ":id", ":idQ", ":idMso", ":tag", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel"];
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:dynamicMenu";
  static _A = [":size", ":getSize", ":description", ":getDescription", ":id", ":idQ", ":idMso", ":tag", ":getContent", ":invalidateContentOnDrop", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:menu";
  static _A = [":size", ":getSize", ":itemSize", ":description", ":getDescription", ":id", ":idQ", ":idMso", ":tag", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:gallery";
  static _A = [":size", ":getSize", ":description", ":getDescription", ":invalidateContentOnDrop", ":columns", ":rows", ":itemWidth", ":itemHeight", ":getItemWidth", ":getItemHeight", ":showItemLabel", ":onAction", ":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":showItemImage", ":getItemCount", ":getItemLabel", ":getItemScreentip", ":getItemSupertip", ":getItemImage", ":getItemID", ":sizeString", ":getSelectedItemID", ":getSelectedItemIndex", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class DropDown extends OxmlCompositeElement {
  static _Q = "mso:dropDown";
  static _A = [":onAction", ":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":showItemImage", ":getItemCount", ":getItemLabel", ":getItemScreentip", ":getItemSupertip", ":getItemImage", ":getItemID", ":sizeString", ":getSelectedItemID", ":getSelectedItemIndex", ":showItemLabel", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:comboBox";
  static _A = [":showItemImage", ":getItemCount", ":getItemLabel", ":getItemScreentip", ":getItemSupertip", ":getItemImage", ":getItemID", ":sizeString", ":invalidateContentOnDrop", ":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":maxLength", ":getText", ":onChange", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:editBox";
  static _A = [":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":maxLength", ":getText", ":onChange", ":sizeString", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:toggleButton";
  static _A = [":size", ":getSize", ":getPressed", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:button";
  static _A = [":size", ":getSize", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class TextLabel extends OxmlLeafElement {
  static _Q = "mso:labelControl";
  static _A = [":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":showLabel", ":getShowLabel"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:control";
  static _A = [":size", ":getSize", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class MenuWithTitle extends OxmlCompositeElement {
  static _Q = "mso:menu";
  static _A = [":id", ":idQ", ":idMso", ":tag", ":itemSize", ":title", ":getTitle", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:splitButton";
  static _A = [":enabled", ":getEnabled", ":id", ":idQ", ":idMso", ":tag", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel"];
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class UnsizedDynamicMenu extends OxmlLeafElement {
  static _Q = "mso:dynamicMenu";
  static _A = [":description", ":getDescription", ":id", ":idQ", ":idMso", ":tag", ":getContent", ":invalidateContentOnDrop", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class UnsizedMenu extends OxmlCompositeElement {
  static _Q = "mso:menu";
  static _A = [":itemSize", ":description", ":getDescription", ":id", ":idQ", ":idMso", ":tag", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class UnsizedSplitButton extends OxmlCompositeElement {
  static _Q = "mso:splitButton";
  static _A = [":enabled", ":getEnabled", ":id", ":idQ", ":idMso", ":tag", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel"];
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:menuSeparator";
  static _A = [":id", ":idQ", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":title", ":getTitle"];
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class UnsizedToggleButton extends OxmlLeafElement {
  static _Q = "mso:toggleButton";
  static _A = [":getPressed", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class UnsizedGallery extends OxmlCompositeElement {
  static _Q = "mso:gallery";
  static _A = [":description", ":getDescription", ":invalidateContentOnDrop", ":columns", ":rows", ":itemWidth", ":itemHeight", ":getItemWidth", ":getItemHeight", ":showItemLabel", ":onAction", ":enabled", ":getEnabled", ":image", ":imageMso", ":getImage", ":showItemImage", ":getItemCount", ":getItemLabel", ":getItemScreentip", ":getItemSupertip", ":getItemImage", ":getItemID", ":sizeString", ":getSelectedItemID", ":getSelectedItemIndex", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
  static _Q = "mso:checkBox";
  static _A = [":getPressed", ":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class UnsizedButton extends OxmlLeafElement {
  static _Q = "mso:button";
  static _A = [":onAction", ":enabled", ":getEnabled", ":description", ":getDescription", ":image", ":imageMso", ":getImage", ":id", ":idQ", ":idMso", ":tag", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
class UnsizedControlClone extends OxmlLeafElement {
  static _Q = "mso:control";
  static _A = [":idQ", ":idMso", ":tag", ":image", ":imageMso", ":getImage", ":screentip", ":getScreentip", ":supertip", ":getSupertip", ":enabled", ":getEnabled", ":label", ":getLabel", ":insertAfterMso", ":insertBeforeMso", ":insertAfterQ", ":insertBeforeQ", ":visible", ":getVisible", ":keytip", ":getKeytip", ":showLabel", ":getShowLabel", ":showImage", ":getShowImage"];
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
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
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
  get insertAfterQ() {
    return this._g(":insertAfterQ");
  }
  set insertAfterQ(v) {
    this._s(":insertAfterQ", v);
  }
  /** insertBeforeQ. Serialized as `:insertBeforeQ` */
  get insertBeforeQ() {
    return this._g(":insertBeforeQ");
  }
  set insertBeforeQ(v) {
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
function initOfficeCustomUINamespace() {
  Ribbon._C = {
    "mso:officeMenu": OfficeMenu,
    "mso:qat": QuickAccessToolbar,
    "mso:tabs": Tabs,
    "mso:contextualTabs": ContextualTabSets
  };
  Ribbon._D = {
    ":startFromScratch": new OxmlAttr(":startFromScratch", OxmlType.BooleanValue)
  };
  RepurposedCommands._C = {
    "mso:command": RepurposedCommand
  };
  ContextualTabSets._C = {
    "mso:tabSet": ContextualTabSet
  };
  Tabs._C = {
    "mso:tab": Tab
  };
  QuickAccessToolbar._C = {
    "mso:sharedControls": SharedQatControls,
    "mso:documentControls": DocumentSpecificQuickAccessToolbarControls
  };
  OfficeMenu._C = {
    "mso:control": UnsizedControlClone,
    "mso:button": UnsizedButton,
    "mso:checkBox": CheckBox,
    "mso:gallery": UnsizedGallery,
    "mso:toggleButton": UnsizedToggleButton,
    "mso:menuSeparator": MenuSeparator,
    "mso:splitButton": SplitButtonWithTitle,
    "mso:menu": MenuWithTitle,
    "mso:dynamicMenu": UnsizedDynamicMenu
  };
  RepurposedCommand._D = {
    ":onAction": new OxmlAttr(":onAction", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue)
  };
  ContextualTabSet._C = {
    "mso:tab": Tab
  };
  ContextualTabSet._D = {
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue)
  };
  Tab._C = {
    "mso:group": Group
  };
  Tab._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    "mso:control": QuickAccessToolbarControlClone,
    "mso:button": UnsizedButton,
    "mso:separator": VerticalSeparator
  };
  DocumentSpecificQuickAccessToolbarControls._C = {
    "mso:control": QuickAccessToolbarControlClone,
    "mso:button": UnsizedButton,
    "mso:separator": VerticalSeparator
  };
  SharedQatControls._C = {
    "mso:control": QuickAccessToolbarControlClone,
    "mso:button": UnsizedButton,
    "mso:separator": VerticalSeparator
  };
  QuickAccessToolbarControlClone._D = {
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
    "mso:control": ControlClone,
    "mso:labelControl": TextLabel,
    "mso:button": Button,
    "mso:toggleButton": ToggleButton,
    "mso:checkBox": CheckBox,
    "mso:editBox": EditBox,
    "mso:comboBox": ComboBox,
    "mso:dropDown": DropDown,
    "mso:gallery": Gallery,
    "mso:menu": Menu,
    "mso:dynamicMenu": DynamicMenu,
    "mso:splitButton": SplitButton,
    "mso:box": Box,
    "mso:buttonGroup": ButtonGroup,
    "mso:separator": VerticalSeparator,
    "mso:dialogBoxLauncher": DialogBoxLauncher
  };
  Group._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    ":getKeytip": new OxmlAttr(":getKeytip", OxmlType.StringValue)
  };
  DialogBoxLauncher._C = {
    "mso:button": UnsizedButton
  };
  VerticalSeparator._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    "mso:commands": RepurposedCommands,
    "mso:ribbon": Ribbon
  };
  CustomUI._D = {
    ":onLoad": new OxmlAttr(":onLoad", OxmlType.StringValue),
    ":loadImage": new OxmlAttr(":loadImage", OxmlType.StringValue)
  };
  MenuRoot._C = {
    "mso:control": UnsizedControlClone,
    "mso:button": UnsizedButton,
    "mso:checkBox": CheckBox,
    "mso:gallery": UnsizedGallery,
    "mso:toggleButton": UnsizedToggleButton,
    "mso:menuSeparator": MenuSeparator,
    "mso:splitButton": UnsizedSplitButton,
    "mso:menu": UnsizedMenu,
    "mso:dynamicMenu": UnsizedDynamicMenu
  };
  MenuRoot._D = {
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":getTitle": new OxmlAttr(":getTitle", OxmlType.StringValue),
    ":itemSize": new OxmlAttr(":itemSize", OxmlType.EnumValue, ItemSizeValuesArray)
  };
  ButtonGroup._C = {
    "mso:control": UnsizedControlClone,
    "mso:button": UnsizedButton,
    "mso:toggleButton": UnsizedToggleButton,
    "mso:gallery": UnsizedGallery,
    "mso:menu": UnsizedMenu,
    "mso:dynamicMenu": UnsizedDynamicMenu,
    "mso:splitButton": UnsizedSplitButton
  };
  ButtonGroup._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue)
  };
  Box._C = {
    "mso:control": ControlClone,
    "mso:labelControl": TextLabel,
    "mso:button": Button,
    "mso:toggleButton": ToggleButton,
    "mso:checkBox": CheckBox,
    "mso:editBox": EditBox,
    "mso:comboBox": ComboBox,
    "mso:dropDown": DropDown,
    "mso:gallery": Gallery,
    "mso:menu": Menu,
    "mso:dynamicMenu": DynamicMenu,
    "mso:splitButton": SplitButton,
    "mso:box": Box,
    "mso:buttonGroup": ButtonGroup
  };
  Box._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue),
    ":getVisible": new OxmlAttr(":getVisible", OxmlType.StringValue),
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":boxStyle": new OxmlAttr(":boxStyle", OxmlType.EnumValue, BoxStyleValuesArray)
  };
  SplitButton._C = {
    "mso:button": VisibleButton,
    "mso:toggleButton": VisibleToggleButton,
    "mso:menu": UnsizedMenu
  };
  SplitButton._D = {
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    "mso:control": UnsizedControlClone,
    "mso:button": UnsizedButton,
    "mso:checkBox": CheckBox,
    "mso:gallery": UnsizedGallery,
    "mso:toggleButton": UnsizedToggleButton,
    "mso:menuSeparator": MenuSeparator,
    "mso:splitButton": UnsizedSplitButton,
    "mso:menu": UnsizedMenu,
    "mso:dynamicMenu": UnsizedDynamicMenu
  };
  Menu._D = {
    ":size": new OxmlAttr(":size", OxmlType.EnumValue, SizeValuesArray),
    ":getSize": new OxmlAttr(":getSize", OxmlType.StringValue),
    ":itemSize": new OxmlAttr(":itemSize", OxmlType.EnumValue, ItemSizeValuesArray),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    "mso:item": Item,
    "mso:button": UnsizedButton
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
  DropDown._C = {
    "mso:item": Item,
    "mso:button": UnsizedButton
  };
  DropDown._D = {
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    "mso:item": Item
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
  TextLabel._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
  MenuWithTitle._C = {
    "mso:control": UnsizedControlClone,
    "mso:button": UnsizedButton,
    "mso:checkBox": CheckBox,
    "mso:gallery": UnsizedGallery,
    "mso:toggleButton": UnsizedToggleButton,
    "mso:menuSeparator": MenuSeparator,
    "mso:splitButton": SplitButtonWithTitle,
    "mso:menu": MenuWithTitle,
    "mso:dynamicMenu": UnsizedDynamicMenu
  };
  MenuWithTitle._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    "mso:button": VisibleButton,
    "mso:toggleButton": VisibleToggleButton,
    "mso:menu": MenuWithTitle
  };
  SplitButtonWithTitle._D = {
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
  UnsizedDynamicMenu._D = {
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
  UnsizedMenu._C = {
    "mso:control": UnsizedControlClone,
    "mso:button": UnsizedButton,
    "mso:checkBox": CheckBox,
    "mso:gallery": UnsizedGallery,
    "mso:toggleButton": UnsizedToggleButton,
    "mso:menuSeparator": MenuSeparator,
    "mso:splitButton": UnsizedSplitButton,
    "mso:menu": UnsizedMenu,
    "mso:dynamicMenu": UnsizedDynamicMenu
  };
  UnsizedMenu._D = {
    ":itemSize": new OxmlAttr(":itemSize", OxmlType.EnumValue, ItemSizeValuesArray),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":getDescription": new OxmlAttr(":getDescription", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
  UnsizedSplitButton._C = {
    "mso:button": VisibleButton,
    "mso:toggleButton": VisibleToggleButton,
    "mso:menu": UnsizedMenu
  };
  UnsizedSplitButton._D = {
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":getEnabled": new OxmlAttr(":getEnabled", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    ":insertAfterMso": new OxmlAttr(":insertAfterMso", OxmlType.StringValue),
    ":insertBeforeMso": new OxmlAttr(":insertBeforeMso", OxmlType.StringValue),
    ":insertAfterQ": new OxmlAttr(":insertAfterQ", OxmlType.StringValue),
    ":insertBeforeQ": new OxmlAttr(":insertBeforeQ", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":getTitle": new OxmlAttr(":getTitle", OxmlType.StringValue)
  };
  UnsizedToggleButton._D = {
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
  UnsizedGallery._C = {
    "mso:item": Item,
    "mso:button": UnsizedButton
  };
  UnsizedGallery._D = {
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
  UnsizedButton._D = {
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
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
  UnsizedControlClone._D = {
    ":idQ": new OxmlAttr(":idQ", OxmlType.StringValue),
    ":idMso": new OxmlAttr(":idMso", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
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
    prefix: "mso",
    xmlns: "http://schemas.microsoft.com/office/2006/01/customui"
  };
}
export {
  Box,
  BoxStyleValues,
  BoxStyleValuesArray,
  Button,
  ButtonGroup,
  CheckBox,
  ComboBox,
  ContextualTabSet,
  ContextualTabSets,
  ControlClone,
  CustomUI,
  DialogBoxLauncher,
  DocumentSpecificQuickAccessToolbarControls,
  DropDown,
  DynamicMenu,
  EditBox,
  Gallery,
  Group,
  Item,
  ItemSizeValues,
  ItemSizeValuesArray,
  Menu,
  MenuRoot,
  MenuSeparator,
  MenuWithTitle,
  OfficeMenu,
  QatItemsType,
  QuickAccessToolbar,
  QuickAccessToolbarControlClone,
  RepurposedCommand,
  RepurposedCommands,
  Ribbon,
  SharedQatControls,
  SizeValues,
  SizeValuesArray,
  SplitButton,
  SplitButtonWithTitle,
  Tab,
  Tabs,
  TextLabel,
  ToggleButton,
  UnsizedButton,
  UnsizedControlClone,
  UnsizedDynamicMenu,
  UnsizedGallery,
  UnsizedMenu,
  UnsizedSplitButton,
  UnsizedToggleButton,
  VerticalSeparator,
  VisibleButton,
  VisibleToggleButton,
  initOfficeCustomUINamespace
};
