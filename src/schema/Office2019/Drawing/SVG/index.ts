import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';


/** Defines the SVGBlip Class. Serialized as `asvg:svgBlip` */
export class SVGBlip extends OxmlLeafElement {

    public static override _Q = 'asvg:svgBlip';
    public static override _A = ['r:embed','r:link',];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    public get embed(): StringValue | undefined { return this._g('r:embed'); }
    public set embed(v: StringValue | undefined) { this._s('r:embed', v); }
    /** Linked Picture Reference. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }

}

export function initOffice2019DrawingSVGNamespace() {
    SVGBlip._D = {
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
    };
    return {
        prefix: 'asvg',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2016/SVG/main',
    };
}
