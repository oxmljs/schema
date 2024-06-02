import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { Extension as AExtension } from '../../../Drawing';
import { LineReference as ALineReference } from '../../../Drawing';
import { FillReference as AFillReference } from '../../../Drawing';
import { EffectReference as AEffectReference } from '../../../Drawing';
import { FontReference as AFontReference } from '../../../Drawing';


/** Defines the OfficeArtExtensionList Class. Serialized as `pic14:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'pic14:extLst';

}
/** Defines the ShapeStyle Class. Serialized as `pic14:style` */
export class ShapeStyle extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {

    public static override _Q = 'pic14:style';
    /** Returns ALineReference. */
    public get lineReference(): ALineReference | undefined { return this._f(ALineReference); }
    /** Returns AFillReference. */
    public get fillReference(): AFillReference | undefined { return this._f(AFillReference); }
    /** Returns AEffectReference. */
    public get effectReference(): AEffectReference | undefined { return this._f(AEffectReference); }
    /** Font Reference. */
    public get fontReference(): AFontReference | undefined { return this._f(AFontReference); }

}

export function initOffice2010DrawingPicturesNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    ShapeStyle._C = {
        'a:lnRef': ALineReference,
        'a:fillRef': AFillReference,
        'a:effectRef': AEffectReference,
        'a:fontRef': AFontReference,
    };
    return {
        prefix: 'pic14',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2010/picture',
    };
}
