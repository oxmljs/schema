import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { Extension as AExtension } from '../../../Drawing';
/** Defines the OfficeArtExtensionList Class. Serialized as `sle:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the Slicer Class. Serialized as `sle:slicer` */
export declare class Slicer extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOffice2010DrawingSlicerNamespace(): {
    prefix: string;
    xmlns: string;
};
