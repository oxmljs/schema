import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { PointCount as CPointCount } from '../../../Drawing/Charts';
import { Level as CLevel } from '../../../Drawing/Charts';
import { ExtensionList as CExtensionList } from '../../../Drawing/Charts';
/** Defines the MultiLvlStrData Class. Serialized as `c16ac:multiLvlStrLit` */
export declare class MultiLvlStrData extends OxmlCompositeElement<CPointCount | CLevel | CExtensionList> {
    static _Q: string;
    /** Returns CPointCount. */
    get pointCount(): CPointCount | undefined;
}
export declare function initOffice2016DrawingChartsAcNamespace(): {
    prefix: string;
    xmlns: string;
};
