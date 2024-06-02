import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { Extension as AExtension } from '../../../Drawing';


/** Defines the LiveFeedBackgroundProperties Class. Serialized as `alf:backgroundProps` */
export class LiveFeedBackgroundProperties extends OxmlCompositeElement<BackgroundNormalProperties | BackgroundRemovedProperties | BackgroundBlurProperties | BackgroundCustomProperties | OfficeArtExtensionList> {

    public static override _Q = 'alf:backgroundProps';

}
/** Defines the OfficeArtExtensionList Class. Serialized as `alf:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'alf:extLst';

}
/** Defines the LiveFeedProperties Class. Serialized as `alf:liveFeedProps` */
export class LiveFeedProperties extends OxmlCompositeElement<LiveFeedBackgroundProperties | OfficeArtExtensionList> {

    public static override _Q = 'alf:liveFeedProps';
    /** Returns LiveFeedBackgroundProperties. */
    public get liveFeedBackgroundProperties(): LiveFeedBackgroundProperties | undefined { return this._f(LiveFeedBackgroundProperties); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the BackgroundCustomProperties Class. Serialized as `alf:Custom` */
export class BackgroundCustomProperties extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'alf:Custom';
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the BackgroundBlurProperties Class. Serialized as `alf:Blur` */
export class BackgroundBlurProperties extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'alf:Blur';
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the BackgroundRemovedProperties Class. Serialized as `alf:Removed` */
export class BackgroundRemovedProperties extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'alf:Removed';
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the BackgroundNormalProperties Class. Serialized as `alf:Normal` */
export class BackgroundNormalProperties extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'alf:Normal';
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOffice2021DrawingLivefeedNamespace() {
    LiveFeedBackgroundProperties._C = {
        'alf:Normal': BackgroundNormalProperties,
        'alf:Removed': BackgroundRemovedProperties,
        'alf:Blur': BackgroundBlurProperties,
        'alf:Custom': BackgroundCustomProperties,
        'alf:extLst': OfficeArtExtensionList,
    };
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    LiveFeedProperties._C = {
        'alf:backgroundProps': LiveFeedBackgroundProperties,
        'alf:extLst': OfficeArtExtensionList,
    };
    BackgroundCustomProperties._C = {
        'alf:extLst': OfficeArtExtensionList,
    };
    BackgroundBlurProperties._C = {
        'alf:extLst': OfficeArtExtensionList,
    };
    BackgroundRemovedProperties._C = {
        'alf:extLst': OfficeArtExtensionList,
    };
    BackgroundNormalProperties._C = {
        'alf:extLst': OfficeArtExtensionList,
    };
    return {
        prefix: 'alf',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2021/livefeed',
    };
}
