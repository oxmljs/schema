import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Extension as PExtension } from '../../../Presentation';


/** Defines the ExtensionList Class. Serialized as `p202:extLst` */
export class ExtensionList extends OxmlCompositeElement<PExtension> {

    public static override _Q = 'p202:extLst';

}
/** Defines the DesignerTag Class. Serialized as `p202:designTag` */
export class DesignerTag extends OxmlLeafElement {

    public static override _Q = 'p202:designTag';
    public static override _A = [':name',':val',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the DesignerDrawingProps Class. Serialized as `p202:designPr` */
export class DesignerDrawingProps extends OxmlCompositeElement<DesignerTagList | ExtensionList> {

    public static override _Q = 'p202:designPr';
    public static override _A = [':edtDesignElem',];
    /** edtDesignElem. Serialized as `:edtDesignElem` */
    public get edtDesignElem(): BooleanValue | undefined { return this._g(':edtDesignElem'); }
    public set edtDesignElem(v: BooleanValue | undefined) { this._s(':edtDesignElem', v); }
    /** Returns DesignerTagList. */
    public get designerTagList(): DesignerTagList | undefined { return this._f(DesignerTagList); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the DesignerTagList Class. Serialized as `p202:designTagLst` */
export class DesignerTagList extends OxmlCompositeElement<DesignerTag> {

    public static override _Q = 'p202:designTagLst';

}

export function initOffice2021PowerPointDesignerNamespace() {
    ExtensionList._C = {
        'p:ext': PExtension,
    };
    DesignerTag._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    DesignerDrawingProps._C = {
        'p202:designTagLst': DesignerTagList,
        'p202:extLst': ExtensionList,
    };
    DesignerDrawingProps._D = {
        ':edtDesignElem': new OxmlAttr(':edtDesignElem', OxmlType.BooleanValue),
    };
    DesignerTagList._C = {
        'p202:designTag': DesignerTag,
    };
    return {
        prefix: 'p202',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2020/02/main',
    };
}
