import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
/** Defines the Scope Class. Serialized as `ntns:xsnScope` */
export declare class Scope extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the OpenByDefault Class. Serialized as `ntns:openByDefault` */
export declare class OpenByDefault extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the CachedView Class. Serialized as `ntns:cached` */
export declare class CachedView extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the XsnLocation Class. Serialized as `ntns:xsnLocation` */
export declare class XsnLocation extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the CustomXsn Class. Serialized as `ntns:customXsn` */
export declare class CustomXsn extends OxmlCompositeElement<XsnLocation | CachedView | OpenByDefault | Scope> {
    static _Q: string;
    /** Returns XsnLocation. */
    get xsnLocation(): XsnLocation | undefined;
    /** Returns CachedView. */
    get cachedView(): CachedView | undefined;
    /** Returns OpenByDefault. */
    get openByDefault(): OpenByDefault | undefined;
    /** Returns Scope. */
    get scope(): Scope | undefined;
}
export declare function initOfficeCustomXsnNamespace(): {
    prefix: string;
    xmlns: string;
};
