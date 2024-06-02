import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';


/** Defines the Scope Class. Serialized as `ntns:xsnScope` */
export class Scope extends OxmlLeafTextElement {

    public static override _Q = 'ntns:xsnScope';

}
/** Defines the OpenByDefault Class. Serialized as `ntns:openByDefault` */
export class OpenByDefault extends OxmlLeafTextElement {

    public static override _Q = 'ntns:openByDefault';

}
/** Defines the CachedView Class. Serialized as `ntns:cached` */
export class CachedView extends OxmlLeafTextElement {

    public static override _Q = 'ntns:cached';

}
/** Defines the XsnLocation Class. Serialized as `ntns:xsnLocation` */
export class XsnLocation extends OxmlLeafTextElement {

    public static override _Q = 'ntns:xsnLocation';

}
/** Defines the CustomXsn Class. Serialized as `ntns:customXsn` */
export class CustomXsn extends OxmlCompositeElement<XsnLocation | CachedView | OpenByDefault | Scope> {

    public static override _Q = 'ntns:customXsn';
    /** Returns XsnLocation. */
    public get xsnLocation(): XsnLocation | undefined { return this._f(XsnLocation); }
    /** Returns CachedView. */
    public get cachedView(): CachedView | undefined { return this._f(CachedView); }
    /** Returns OpenByDefault. */
    public get openByDefault(): OpenByDefault | undefined { return this._f(OpenByDefault); }
    /** Returns Scope. */
    public get scope(): Scope | undefined { return this._f(Scope); }

}

export function initOfficeCustomXsnNamespace() {
    CustomXsn._C = {
        'ntns:xsnLocation': XsnLocation,
        'ntns:cached': CachedView,
        'ntns:openByDefault': OpenByDefault,
        'ntns:xsnScope': Scope,
    };
    return {
        prefix: 'ntns',
        xmlns: 'http://schemas.microsoft.com/office/2006/metadata/customXsn',
    };
}
