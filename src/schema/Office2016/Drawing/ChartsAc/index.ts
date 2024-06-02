import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { PointCount as CPointCount } from '../../../Drawing/Charts';
import { Level as CLevel } from '../../../Drawing/Charts';
import { ExtensionList as CExtensionList } from '../../../Drawing/Charts';


/** Defines the MultiLvlStrData Class. Serialized as `c16ac:multiLvlStrLit` */
export class MultiLvlStrData extends OxmlCompositeElement<CPointCount | CLevel | CExtensionList> {

    public static override _Q = 'c16ac:multiLvlStrLit';
    /** Returns CPointCount. */
    public get pointCount(): CPointCount | undefined { return this._f(CPointCount); }

}

export function initOffice2016DrawingChartsAcNamespace() {
    MultiLvlStrData._C = {
        'c:ptCount': CPointCount,
        'c:lvl': CLevel,
        'c:extLst': CExtensionList,
    };
    return {
        prefix: 'c16ac',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2014/chart/ac',
    };
}
