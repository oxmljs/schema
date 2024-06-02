import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Extension as PExtension } from '../../../Presentation';
/** Defines the ExtensionList Class. Serialized as `p202:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<PExtension> {
    static _Q: string;
}
/** Defines the DesignerTag Class. Serialized as `p202:designTag` */
export declare class DesignerTag extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** val. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the DesignerDrawingProps Class. Serialized as `p202:designPr` */
export declare class DesignerDrawingProps extends OxmlCompositeElement<DesignerTagList | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** edtDesignElem. Serialized as `:edtDesignElem` */
    get edtDesignElem(): BooleanValue | undefined;
    set edtDesignElem(v: BooleanValue | undefined);
    /** Returns DesignerTagList. */
    get designerTagList(): DesignerTagList | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the DesignerTagList Class. Serialized as `p202:designTagLst` */
export declare class DesignerTagList extends OxmlCompositeElement<DesignerTag> {
    static _Q: string;
}
export declare function initOffice2021PowerPointDesignerNamespace(): {
    prefix: string;
    xmlns: string;
};
