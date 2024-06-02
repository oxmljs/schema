import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { Extension as AExtension } from '../../Drawing';
/** Defines the WebExtensionTaskpane Class. Serialized as `wetp:taskpane` */
export declare class WebExtensionTaskpane extends OxmlCompositeElement<WebExtensionPartReference | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** dockstate. Serialized as `:dockstate` */
    get dockState(): StringValue | undefined;
    set dockState(v: StringValue | undefined);
    /** visibility. Serialized as `:visibility` */
    get visibility(): BooleanValue | undefined;
    set visibility(v: BooleanValue | undefined);
    /** width. Serialized as `:width` */
    get width(): DoubleValue | undefined;
    set width(v: DoubleValue | undefined);
    /** row. Serialized as `:row` */
    get row(): UInt32Value | undefined;
    set row(v: UInt32Value | undefined);
    /** locked. Serialized as `:locked` */
    get locked(): BooleanValue | undefined;
    set locked(v: BooleanValue | undefined);
    /** Returns WebExtensionPartReference. */
    get webExtensionPartReference(): WebExtensionPartReference | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the OfficeArtExtensionList Class. Serialized as `wetp:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the WebExtensionPartReference Class. Serialized as `wetp:webextensionref` */
export declare class WebExtensionPartReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the Taskpanes Class. Serialized as `wetp:taskpanes` */
export declare class Taskpanes extends OxmlPartRootElement<WebExtensionTaskpane> {
    static _Q: string;
}
export declare function initOffice2013WebExtentionPaneNamespace(): {
    prefix: string;
    xmlns: string;
};
