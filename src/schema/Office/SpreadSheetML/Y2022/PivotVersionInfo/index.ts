import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../../framework/OxmlLeafTextElement';


/** Defines the LastUpdateFeatureXsdstring Class. Serialized as `xxpvi:lastUpdateFeature` */
export class LastUpdateFeatureXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'xxpvi:lastUpdateFeature';

}
/** Defines the LastRefreshFeatureXsdstring Class. Serialized as `xxpvi:lastRefreshFeature` */
export class LastRefreshFeatureXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'xxpvi:lastRefreshFeature';

}
/** Defines the RequiredFeatureXsdstring Class. Serialized as `xxpvi:requiredFeature` */
export class RequiredFeatureXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'xxpvi:requiredFeature';

}
/** Defines the PivotVersionInfo Class. Serialized as `xxpvi:pivotVersionInfo` */
export class PivotVersionInfo extends OxmlCompositeElement<RequiredFeatureXsdstring | LastUpdateFeatureXsdstring> {

    public static override _Q = 'xxpvi:pivotVersionInfo';

}
/** Defines the CacheVersionInfo Class. Serialized as `xxpvi:cacheVersionInfo` */
export class CacheVersionInfo extends OxmlCompositeElement<RequiredFeatureXsdstring | LastRefreshFeatureXsdstring> {

    public static override _Q = 'xxpvi:cacheVersionInfo';

}

export function initOfficeSpreadSheetMLY2022PivotVersionInfoNamespace() {
    PivotVersionInfo._C = {
        'xxpvi:requiredFeature': RequiredFeatureXsdstring,
        'xxpvi:lastUpdateFeature': LastUpdateFeatureXsdstring,
    };
    CacheVersionInfo._C = {
        'xxpvi:requiredFeature': RequiredFeatureXsdstring,
        'xxpvi:lastRefreshFeature': LastRefreshFeatureXsdstring,
    };
    return {
        prefix: 'xxpvi',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2022/pivotVersionInfo',
    };
}
