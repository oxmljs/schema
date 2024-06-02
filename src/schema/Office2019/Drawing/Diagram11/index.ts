import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { NoBullet as ANoBullet } from '../../../Drawing';
import { AutoNumberedBullet as AAutoNumberedBullet } from '../../../Drawing';
import { CharacterBullet as ACharacterBullet } from '../../../Drawing';
import { PictureBullet as APictureBullet } from '../../../Drawing';


export enum STorageType {
    /** undefined. Serialized value: `sibTrans` */
    SibTrans = 'sibTrans',
    /** undefined. Serialized value: `parTrans` */
    ParTrans = 'parTrans',
}

export const STorageTypeArray = [
    STorageType.SibTrans,
    STorageType.ParTrans,
] as const;

/** Defines the NumberDiagramInfo Class. Serialized as `dgm1611:autoBuNodeInfo` */
export class NumberDiagramInfo extends OxmlCompositeElement<DiagramAutoBullet> {

    public static override _Q = 'dgm1611:autoBuNodeInfo';
    public static override _A = [':lvl',':ptType',];
    /** lvl. Serialized as `:lvl` */
    public get lvl(): UInt32Value | undefined { return this._g(':lvl'); }
    public set lvl(v: UInt32Value | undefined) { this._s(':lvl', v); }
    /** ptType. Serialized as `:ptType` */
    public get ptType(): STorageType | undefined { return this._g(':ptType'); }
    public set ptType(v: STorageType | undefined) { this._s(':ptType', v); }
    /** Returns DiagramAutoBullet. */
    public get diagramAutoBullet(): DiagramAutoBullet | undefined { return this._f(DiagramAutoBullet); }

}
/** Defines the DiagramAutoBullet Class. Serialized as `dgm1611:buPr` */
export class DiagramAutoBullet extends OxmlCompositeElement<ANoBullet | AAutoNumberedBullet | ACharacterBullet | APictureBullet> {

    public static override _Q = 'dgm1611:buPr';
    public static override _A = [':prefix',':leadZeros',];
    /** prefix. Serialized as `:prefix` */
    public get autoBulletPrefix(): StringValue | undefined { return this._g(':prefix'); }
    public set autoBulletPrefix(v: StringValue | undefined) { this._s(':prefix', v); }
    /** leadZeros. Serialized as `:leadZeros` */
    public get leadZeros(): BooleanValue | undefined { return this._g(':leadZeros'); }
    public set leadZeros(v: BooleanValue | undefined) { this._s(':leadZeros', v); }
    /** No Bullet. */
    public get noBullet(): ANoBullet | undefined { return this._f(ANoBullet); }
    /** Auto-Numbered Bullet. */
    public get autoNumberedBullet(): AAutoNumberedBullet | undefined { return this._f(AAutoNumberedBullet); }
    /** Character Bullet. */
    public get characterBullet(): ACharacterBullet | undefined { return this._f(ACharacterBullet); }
    /** Picture Bullet. */
    public get pictureBullet(): APictureBullet | undefined { return this._f(APictureBullet); }

}
/** Defines the NumberDiagramInfoList Class. Serialized as `dgm1611:autoBuNodeInfoLst` */
export class NumberDiagramInfoList extends OxmlCompositeElement<NumberDiagramInfo> {

    public static override _Q = 'dgm1611:autoBuNodeInfoLst';

}

export function initOffice2019DrawingDiagram11Namespace() {
    NumberDiagramInfo._C = {
        'dgm1611:buPr': DiagramAutoBullet,
    };
    NumberDiagramInfo._D = {
        ':lvl': new OxmlAttr(':lvl', OxmlType.UInt32Value),
        ':ptType': new OxmlAttr(':ptType', OxmlType.EnumValue, STorageTypeArray),
    };
    DiagramAutoBullet._C = {
        'a:buNone': ANoBullet,
        'a:buAutoNum': AAutoNumberedBullet,
        'a:buChar': ACharacterBullet,
        'a:buBlip': APictureBullet,
    };
    DiagramAutoBullet._D = {
        ':prefix': new OxmlAttr(':prefix', OxmlType.StringValue),
        ':leadZeros': new OxmlAttr(':leadZeros', OxmlType.BooleanValue),
    };
    NumberDiagramInfoList._C = {
        'dgm1611:autoBuNodeInfo': NumberDiagramInfo,
    };
    return {
        prefix: 'dgm1611',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2016/11/diagram',
    };
}
