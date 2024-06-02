import { OxmlCompositeElement } from "../../../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../../../framework/OxmlLeafTextElement";
class LastUpdateFeatureXsdstring extends OxmlLeafTextElement {
  static _Q = "xxpvi:lastUpdateFeature";
}
class LastRefreshFeatureXsdstring extends OxmlLeafTextElement {
  static _Q = "xxpvi:lastRefreshFeature";
}
class RequiredFeatureXsdstring extends OxmlLeafTextElement {
  static _Q = "xxpvi:requiredFeature";
}
class PivotVersionInfo extends OxmlCompositeElement {
  static _Q = "xxpvi:pivotVersionInfo";
}
class CacheVersionInfo extends OxmlCompositeElement {
  static _Q = "xxpvi:cacheVersionInfo";
}
function initOfficeSpreadSheetMLY2022PivotVersionInfoNamespace() {
  PivotVersionInfo._C = {
    "xxpvi:requiredFeature": RequiredFeatureXsdstring,
    "xxpvi:lastUpdateFeature": LastUpdateFeatureXsdstring
  };
  CacheVersionInfo._C = {
    "xxpvi:requiredFeature": RequiredFeatureXsdstring,
    "xxpvi:lastRefreshFeature": LastRefreshFeatureXsdstring
  };
  return {
    prefix: "xxpvi",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2022/pivotVersionInfo"
  };
}
export {
  CacheVersionInfo,
  LastRefreshFeatureXsdstring,
  LastUpdateFeatureXsdstring,
  PivotVersionInfo,
  RequiredFeatureXsdstring,
  initOfficeSpreadSheetMLY2022PivotVersionInfoNamespace
};
