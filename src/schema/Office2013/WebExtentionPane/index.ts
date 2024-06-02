import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { Extension as AExtension } from '../../Drawing';


/** Defines the WebExtensionTaskpane Class. Serialized as `wetp:taskpane` */
export class WebExtensionTaskpane extends OxmlCompositeElement<WebExtensionPartReference | OfficeArtExtensionList> {

    public static override _Q = 'wetp:taskpane';
    public static override _A = [':dockstate',':visibility',':width',':row',':locked',];
    /** dockstate. Serialized as `:dockstate` */
    public get dockState(): StringValue | undefined { return this._g(':dockstate'); }
    public set dockState(v: StringValue | undefined) { this._s(':dockstate', v); }
    /** visibility. Serialized as `:visibility` */
    public get visibility(): BooleanValue | undefined { return this._g(':visibility'); }
    public set visibility(v: BooleanValue | undefined) { this._s(':visibility', v); }
    /** width. Serialized as `:width` */
    public get width(): DoubleValue | undefined { return this._g(':width'); }
    public set width(v: DoubleValue | undefined) { this._s(':width', v); }
    /** row. Serialized as `:row` */
    public get row(): UInt32Value | undefined { return this._g(':row'); }
    public set row(v: UInt32Value | undefined) { this._s(':row', v); }
    /** locked. Serialized as `:locked` */
    public get locked(): BooleanValue | undefined { return this._g(':locked'); }
    public set locked(v: BooleanValue | undefined) { this._s(':locked', v); }
    /** Returns WebExtensionPartReference. */
    public get webExtensionPartReference(): WebExtensionPartReference | undefined { return this._f(WebExtensionPartReference); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the OfficeArtExtensionList Class. Serialized as `wetp:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'wetp:extLst';

}
/** Defines the WebExtensionPartReference Class. Serialized as `wetp:webextensionref` */
export class WebExtensionPartReference extends OxmlLeafElement {

    public static override _Q = 'wetp:webextensionref';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the Taskpanes Class. Serialized as `wetp:taskpanes` */
export class Taskpanes extends OxmlPartRootElement<WebExtensionTaskpane> {

    public static override _Q = 'wetp:taskpanes';

}

export function initOffice2013WebExtentionPaneNamespace() {
    WebExtensionTaskpane._C = {
        'wetp:webextensionref': WebExtensionPartReference,
        'wetp:extLst': OfficeArtExtensionList,
    };
    WebExtensionTaskpane._D = {
        ':dockstate': new OxmlAttr(':dockstate', OxmlType.StringValue),
        ':visibility': new OxmlAttr(':visibility', OxmlType.BooleanValue),
        ':width': new OxmlAttr(':width', OxmlType.DoubleValue),
        ':row': new OxmlAttr(':row', OxmlType.UInt32Value),
        ':locked': new OxmlAttr(':locked', OxmlType.BooleanValue),
    };
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    WebExtensionPartReference._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Taskpanes._C = {
        'wetp:taskpane': WebExtensionTaskpane,
    };
    return {
        prefix: 'wetp',
        xmlns: 'http://schemas.microsoft.com/office/webextensions/taskpanes/2010/11',
    };
}
