import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../../framework/types/UInt32Value';
import { Int32Value } from '../../../../../framework/types/Int32Value';
import { Extension as AExtension } from '../../../../Drawing';
import { OfficeArtExtensionList as AanimOfficeArtExtensionList } from '../../../../Office2019/Drawing/Animation';
/** Defines the OfficeArtExtensionList Class. Serialized as `a3danim:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the AnimationProperties Class. Serialized as `a3danim:animPr` */
export declare class AnimationProperties extends OxmlCompositeElement<AanimOfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** length. Serialized as `:length` */
    get length(): StringValue | undefined;
    set length(v: StringValue | undefined);
    /** count. Serialized as `:count` */
    get count(): StringValue | undefined;
    set count(v: StringValue | undefined);
    /** auto. Serialized as `:auto` */
    get auto(): BooleanValue | undefined;
    set auto(v: BooleanValue | undefined);
    /** offset. Serialized as `:offset` */
    get offset(): StringValue | undefined;
    set offset(v: StringValue | undefined);
    /** st. Serialized as `:st` */
    get st(): StringValue | undefined;
    set st(v: StringValue | undefined);
    /** end. Serialized as `:end` */
    get end(): StringValue | undefined;
    set end(v: StringValue | undefined);
    /** Returns AanimOfficeArtExtensionList. */
    get officeArtExtensionList(): AanimOfficeArtExtensionList | undefined;
}
/** Defines the PosterFrame Class. Serialized as `a3danim:posterFrame` */
export declare class PosterFrame extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** animId. Serialized as `:animId` */
    get animId(): UInt32Value | undefined;
    set animId(v: UInt32Value | undefined);
    /** frame. Serialized as `:frame` */
    get frame(): Int32Value | undefined;
    set frame(v: Int32Value | undefined);
}
/** Defines the EmbeddedAnimation Class. Serialized as `a3danim:embedAnim` */
export declare class EmbeddedAnimation extends OxmlCompositeElement<AnimationProperties | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** animId. Serialized as `:animId` */
    get animId(): UInt32Value | undefined;
    set animId(v: UInt32Value | undefined);
    /** Returns AnimationProperties. */
    get animationProperties(): AnimationProperties | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOffice2019DrawingAnimationModel3DNamespace(): {
    prefix: string;
    xmlns: string;
};
