import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { Extension as AExtension } from '../../../Drawing';
/** Defines the OfficeArtExtensionList Class. Serialized as `tsle:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the TimeSlicer Class. Serialized as `tsle:timeslicer` */
export declare class TimeSlicer extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOffice2013DrawingTimeSlicerNamespace(): {
    prefix: string;
    xmlns: string;
};
