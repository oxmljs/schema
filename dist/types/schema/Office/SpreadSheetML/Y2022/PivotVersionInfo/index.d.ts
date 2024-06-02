import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../../framework/OxmlLeafTextElement';
/** Defines the LastUpdateFeatureXsdstring Class. Serialized as `xxpvi:lastUpdateFeature` */
export declare class LastUpdateFeatureXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the LastRefreshFeatureXsdstring Class. Serialized as `xxpvi:lastRefreshFeature` */
export declare class LastRefreshFeatureXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the RequiredFeatureXsdstring Class. Serialized as `xxpvi:requiredFeature` */
export declare class RequiredFeatureXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the PivotVersionInfo Class. Serialized as `xxpvi:pivotVersionInfo` */
export declare class PivotVersionInfo extends OxmlCompositeElement<RequiredFeatureXsdstring | LastUpdateFeatureXsdstring> {
    static _Q: string;
}
/** Defines the CacheVersionInfo Class. Serialized as `xxpvi:cacheVersionInfo` */
export declare class CacheVersionInfo extends OxmlCompositeElement<RequiredFeatureXsdstring | LastRefreshFeatureXsdstring> {
    static _Q: string;
}
export declare function initOfficeSpreadSheetMLY2022PivotVersionInfoNamespace(): {
    prefix: string;
    xmlns: string;
};
