import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { Extension as AExtension } from '../../../Drawing';


/** Defines the OfficeArtExtensionList Class. Serialized as `tsle:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'tsle:extLst';

}
/** Defines the TimeSlicer Class. Serialized as `tsle:timeslicer` */
export class TimeSlicer extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'tsle:timeslicer';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOffice2013DrawingTimeSlicerNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    TimeSlicer._C = {
        'tsle:extLst': OfficeArtExtensionList,
    };
    TimeSlicer._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    return {
        prefix: 'tsle',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2012/timeslicer',
    };
}
