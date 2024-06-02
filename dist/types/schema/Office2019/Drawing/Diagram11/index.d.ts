import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { NoBullet as ANoBullet } from '../../../Drawing';
import { AutoNumberedBullet as AAutoNumberedBullet } from '../../../Drawing';
import { CharacterBullet as ACharacterBullet } from '../../../Drawing';
import { PictureBullet as APictureBullet } from '../../../Drawing';
export declare enum STorageType {
    /** undefined. Serialized value: `sibTrans` */
    SibTrans = "sibTrans",
    /** undefined. Serialized value: `parTrans` */
    ParTrans = "parTrans"
}
export declare const STorageTypeArray: readonly [STorageType.SibTrans, STorageType.ParTrans];
/** Defines the NumberDiagramInfo Class. Serialized as `dgm1611:autoBuNodeInfo` */
export declare class NumberDiagramInfo extends OxmlCompositeElement<DiagramAutoBullet> {
    static _Q: string;
    static _A: string[];
    /** lvl. Serialized as `:lvl` */
    get lvl(): UInt32Value | undefined;
    set lvl(v: UInt32Value | undefined);
    /** ptType. Serialized as `:ptType` */
    get ptType(): STorageType | undefined;
    set ptType(v: STorageType | undefined);
    /** Returns DiagramAutoBullet. */
    get diagramAutoBullet(): DiagramAutoBullet | undefined;
}
/** Defines the DiagramAutoBullet Class. Serialized as `dgm1611:buPr` */
export declare class DiagramAutoBullet extends OxmlCompositeElement<ANoBullet | AAutoNumberedBullet | ACharacterBullet | APictureBullet> {
    static _Q: string;
    static _A: string[];
    /** prefix. Serialized as `:prefix` */
    get autoBulletPrefix(): StringValue | undefined;
    set autoBulletPrefix(v: StringValue | undefined);
    /** leadZeros. Serialized as `:leadZeros` */
    get leadZeros(): BooleanValue | undefined;
    set leadZeros(v: BooleanValue | undefined);
    /** No Bullet. */
    get noBullet(): ANoBullet | undefined;
    /** Auto-Numbered Bullet. */
    get autoNumberedBullet(): AAutoNumberedBullet | undefined;
    /** Character Bullet. */
    get characterBullet(): ACharacterBullet | undefined;
    /** Picture Bullet. */
    get pictureBullet(): APictureBullet | undefined;
}
/** Defines the NumberDiagramInfoList Class. Serialized as `dgm1611:autoBuNodeInfoLst` */
export declare class NumberDiagramInfoList extends OxmlCompositeElement<NumberDiagramInfo> {
    static _Q: string;
}
export declare function initOffice2019DrawingDiagram11Namespace(): {
    prefix: string;
    xmlns: string;
};
