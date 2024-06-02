import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { Extension as AExtension } from '../../../Drawing';


/** Defines the OfficeArtExtensionList Class. Serialized as `sle:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'sle:extLst';

}
/** Defines the Slicer Class. Serialized as `sle:slicer` */
export class Slicer extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'sle:slicer';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOffice2010DrawingSlicerNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    Slicer._C = {
        'sle:extLst': OfficeArtExtensionList,
    };
    Slicer._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    return {
        prefix: 'sle',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2010/slicer',
    };
}
