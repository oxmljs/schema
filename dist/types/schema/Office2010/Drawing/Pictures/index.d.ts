import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { Extension as AExtension } from '../../../Drawing';
import { LineReference as ALineReference } from '../../../Drawing';
import { FillReference as AFillReference } from '../../../Drawing';
import { EffectReference as AEffectReference } from '../../../Drawing';
import { FontReference as AFontReference } from '../../../Drawing';
/** Defines the OfficeArtExtensionList Class. Serialized as `pic14:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the ShapeStyle Class. Serialized as `pic14:style` */
export declare class ShapeStyle extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {
    static _Q: string;
    /** Returns ALineReference. */
    get lineReference(): ALineReference | undefined;
    /** Returns AFillReference. */
    get fillReference(): AFillReference | undefined;
    /** Returns AEffectReference. */
    get effectReference(): AEffectReference | undefined;
    /** Font Reference. */
    get fontReference(): AFontReference | undefined;
}
export declare function initOffice2010DrawingPicturesNamespace(): {
    prefix: string;
    xmlns: string;
};
