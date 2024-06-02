import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../../framework/OxmlType';
import { StringValue } from '../../../../../framework/types/StringValue';


/** Defines the OpenXmlAlternateUrlElement Class. */
export abstract class OpenXmlAlternateUrlElement extends OxmlLeafElement {

    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the RelativeUrlAlternateUrl Class. Serialized as `xxl21:relativeUrl` */
export class RelativeUrlAlternateUrl extends OpenXmlAlternateUrlElement {

    public static override _Q = 'xxl21:relativeUrl';

}
/** Defines the AbsoluteUrlAlternateUrl Class. Serialized as `xxl21:absoluteUrl` */
export class AbsoluteUrlAlternateUrl extends OpenXmlAlternateUrlElement {

    public static override _Q = 'xxl21:absoluteUrl';

}
/** Defines the ExternalBookAlternateUrls Class. Serialized as `xxl21:alternateUrls` */
export class ExternalBookAlternateUrls extends OxmlCompositeElement<AbsoluteUrlAlternateUrl | RelativeUrlAlternateUrl> {

    public static override _Q = 'xxl21:alternateUrls';
    public static override _A = [':driveId',':itemId',];
    /** driveId. Serialized as `:driveId` */
    public get driveId(): StringValue | undefined { return this._g(':driveId'); }
    public set driveId(v: StringValue | undefined) { this._s(':driveId', v); }
    /** itemId. Serialized as `:itemId` */
    public get itemId(): StringValue | undefined { return this._g(':itemId'); }
    public set itemId(v: StringValue | undefined) { this._s(':itemId', v); }
    /** Returns AbsoluteUrlAlternateUrl. */
    public get absoluteUrlAlternateUrl(): AbsoluteUrlAlternateUrl | undefined { return this._f(AbsoluteUrlAlternateUrl); }
    /** Returns RelativeUrlAlternateUrl. */
    public get relativeUrlAlternateUrl(): RelativeUrlAlternateUrl | undefined { return this._f(RelativeUrlAlternateUrl); }

}

export function initOfficeSpreadSheetMLY2021ExtLinks2021Namespace() {
    OpenXmlAlternateUrlElement._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ExternalBookAlternateUrls._C = {
        'xxl21:absoluteUrl': AbsoluteUrlAlternateUrl,
        'xxl21:relativeUrl': RelativeUrlAlternateUrl,
    };
    ExternalBookAlternateUrls._D = {
        ':driveId': new OxmlAttr(':driveId', OxmlType.StringValue),
        ':itemId': new OxmlAttr(':itemId', OxmlType.StringValue),
    };
    return {
        prefix: 'xxl21',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2021/extlinks2021',
    };
}
