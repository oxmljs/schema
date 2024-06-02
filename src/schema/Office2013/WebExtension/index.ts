import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { BlipCompressionValues, BlipCompressionValuesArray } from '../../Drawing';import { AlphaBiLevel as AAlphaBiLevel } from '../../Drawing';
import { AlphaCeiling as AAlphaCeiling } from '../../Drawing';
import { AlphaFloor as AAlphaFloor } from '../../Drawing';
import { AlphaInverse as AAlphaInverse } from '../../Drawing';
import { AlphaModulationEffect as AAlphaModulationEffect } from '../../Drawing';
import { AlphaModulationFixed as AAlphaModulationFixed } from '../../Drawing';
import { AlphaReplace as AAlphaReplace } from '../../Drawing';
import { BiLevel as ABiLevel } from '../../Drawing';
import { Blur as ABlur } from '../../Drawing';
import { ColorChange as AColorChange } from '../../Drawing';
import { ColorReplacement as AColorReplacement } from '../../Drawing';
import { Duotone as ADuotone } from '../../Drawing';
import { FillOverlay as AFillOverlay } from '../../Drawing';
import { Grayscale as AGrayscale } from '../../Drawing';
import { Hsl as AHsl } from '../../Drawing';
import { LuminanceEffect as ALuminanceEffect } from '../../Drawing';
import { TintEffect as ATintEffect } from '../../Drawing';
import { BlipExtensionList as ABlipExtensionList } from '../../Drawing';
import { Extension as AExtension } from '../../Drawing';


/** Defines the Snapshot Class. Serialized as `we:snapshot` */
export class Snapshot extends OxmlCompositeElement<AAlphaBiLevel | AAlphaCeiling | AAlphaFloor | AAlphaInverse | AAlphaModulationEffect | AAlphaModulationFixed | AAlphaReplace | ABiLevel | ABlur | AColorChange | AColorReplacement | ADuotone | AFillOverlay | AGrayscale | AHsl | ALuminanceEffect | ATintEffect | ABlipExtensionList> {

    public static override _Q = 'we:snapshot';
    public static override _A = ['r:embed','r:link',':cstate',];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    public get embed(): StringValue | undefined { return this._g('r:embed'); }
    public set embed(v: StringValue | undefined) { this._s('r:embed', v); }
    /** Linked Picture Reference. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }
    /** Compression state for blips.. Serialized as `:cstate` */
    public get compressionState(): BlipCompressionValues | undefined { return this._g(':cstate'); }
    public set compressionState(v: BlipCompressionValues | undefined) { this._s(':cstate', v); }

}
/** Defines the WebExtensionBindingList Class. Serialized as `we:bindings` */
export class WebExtensionBindingList extends OxmlCompositeElement<WebExtensionBinding> {

    public static override _Q = 'we:bindings';

}
/** Defines the WebExtensionPropertyBag Class. Serialized as `we:properties` */
export class WebExtensionPropertyBag extends OxmlCompositeElement<WebExtensionProperty> {

    public static override _Q = 'we:properties';

}
/** Defines the WebExtensionReferenceList Class. Serialized as `we:alternateReferences` */
export class WebExtensionReferenceList extends OxmlCompositeElement<WebExtensionStoreReference> {

    public static override _Q = 'we:alternateReferences';

}
/** Defines the WebExtensionStoreReference Class. Serialized as `we:reference` */
export class WebExtensionStoreReference extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'we:reference';
    public static override _A = [':id',':version',':store',':storeType',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** version. Serialized as `:version` */
    public get version(): StringValue | undefined { return this._g(':version'); }
    public set version(v: StringValue | undefined) { this._s(':version', v); }
    /** store. Serialized as `:store` */
    public get store(): StringValue | undefined { return this._g(':store'); }
    public set store(v: StringValue | undefined) { this._s(':store', v); }
    /** storeType. Serialized as `:storeType` */
    public get storeType(): StringValue | undefined { return this._g(':storeType'); }
    public set storeType(v: StringValue | undefined) { this._s(':storeType', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the WebExtensionBinding Class. Serialized as `we:binding` */
export class WebExtensionBinding extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'we:binding';
    public static override _A = [':id',':type',':appref',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** appref. Serialized as `:appref` */
    public get appReference(): StringValue | undefined { return this._g(':appref'); }
    public set appReference(v: StringValue | undefined) { this._s(':appref', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the OfficeArtExtensionList Class. Serialized as `we:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'we:extLst';

}
/** Defines the WebExtensionProperty Class. Serialized as `we:property` */
export class WebExtensionProperty extends OxmlLeafElement {

    public static override _Q = 'we:property';
    public static override _A = [':name',':value',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** value. Serialized as `:value` */
    public get value(): StringValue | undefined { return this._g(':value'); }
    public set value(v: StringValue | undefined) { this._s(':value', v); }

}
/** Defines the WebExtensionReference Class. Serialized as `we:webextensionref` */
export class WebExtensionReference extends OxmlLeafElement {

    public static override _Q = 'we:webextensionref';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the WebExtension Class. Serialized as `we:webextension` */
export class WebExtension extends OxmlPartRootElement<WebExtensionStoreReference | WebExtensionReferenceList | WebExtensionPropertyBag | WebExtensionBindingList | Snapshot | OfficeArtExtensionList> {

    public static override _Q = 'we:webextension';
    public static override _A = [':id',':frozen',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** frozen. Serialized as `:frozen` */
    public get frozen(): BooleanValue | undefined { return this._g(':frozen'); }
    public set frozen(v: BooleanValue | undefined) { this._s(':frozen', v); }
    /** Returns WebExtensionStoreReference. */
    public get webExtensionStoreReference(): WebExtensionStoreReference | undefined { return this._f(WebExtensionStoreReference); }
    /** Returns WebExtensionReferenceList. */
    public get webExtensionReferenceList(): WebExtensionReferenceList | undefined { return this._f(WebExtensionReferenceList); }
    /** Returns WebExtensionPropertyBag. */
    public get webExtensionPropertyBag(): WebExtensionPropertyBag | undefined { return this._f(WebExtensionPropertyBag); }
    /** Returns WebExtensionBindingList. */
    public get webExtensionBindingList(): WebExtensionBindingList | undefined { return this._f(WebExtensionBindingList); }
    /** Returns Snapshot. */
    public get snapshot(): Snapshot | undefined { return this._f(Snapshot); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOffice2013WebExtensionNamespace() {
    Snapshot._C = {
        'a:alphaBiLevel': AAlphaBiLevel,
        'a:alphaCeiling': AAlphaCeiling,
        'a:alphaFloor': AAlphaFloor,
        'a:alphaInv': AAlphaInverse,
        'a:alphaMod': AAlphaModulationEffect,
        'a:alphaModFix': AAlphaModulationFixed,
        'a:alphaRepl': AAlphaReplace,
        'a:biLevel': ABiLevel,
        'a:blur': ABlur,
        'a:clrChange': AColorChange,
        'a:clrRepl': AColorReplacement,
        'a:duotone': ADuotone,
        'a:fillOverlay': AFillOverlay,
        'a:grayscl': AGrayscale,
        'a:hsl': AHsl,
        'a:lum': ALuminanceEffect,
        'a:tint': ATintEffect,
        'a:extLst': ABlipExtensionList,
    };
    Snapshot._D = {
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
        ':cstate': new OxmlAttr(':cstate', OxmlType.EnumValue, BlipCompressionValuesArray),
    };
    WebExtensionBindingList._C = {
        'we:binding': WebExtensionBinding,
    };
    WebExtensionPropertyBag._C = {
        'we:property': WebExtensionProperty,
    };
    WebExtensionReferenceList._C = {
        'we:reference': WebExtensionStoreReference,
    };
    WebExtensionStoreReference._C = {
        'we:extLst': OfficeArtExtensionList,
    };
    WebExtensionStoreReference._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':version': new OxmlAttr(':version', OxmlType.StringValue),
        ':store': new OxmlAttr(':store', OxmlType.StringValue),
        ':storeType': new OxmlAttr(':storeType', OxmlType.StringValue),
    };
    WebExtensionBinding._C = {
        'we:extLst': OfficeArtExtensionList,
    };
    WebExtensionBinding._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        ':appref': new OxmlAttr(':appref', OxmlType.StringValue),
    };
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    WebExtensionProperty._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':value': new OxmlAttr(':value', OxmlType.StringValue),
    };
    WebExtensionReference._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    WebExtension._C = {
        'we:reference': WebExtensionStoreReference,
        'we:alternateReferences': WebExtensionReferenceList,
        'we:properties': WebExtensionPropertyBag,
        'we:bindings': WebExtensionBindingList,
        'we:snapshot': Snapshot,
        'we:extLst': OfficeArtExtensionList,
    };
    WebExtension._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':frozen': new OxmlAttr(':frozen', OxmlType.BooleanValue),
    };
    return {
        prefix: 'we',
        xmlns: 'http://schemas.microsoft.com/office/webextensions/webextension/2010/11',
    };
}
