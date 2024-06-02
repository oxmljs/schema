import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';


/** Defines the ClassificationExtensionList Class. Serialized as `clbl:extLst` */
export class ClassificationExtensionList extends OxmlCompositeElement<ClassificationExtension> {

    public static override _Q = 'clbl:extLst';

}
/** Defines the ClassificationLabel Class. Serialized as `clbl:label` */
export class ClassificationLabel extends OxmlLeafElement {

    public static override _Q = 'clbl:label';
    public static override _A = [':id',':enabled',':setDate',':method',':name',':siteId',':actionId',':contentBits',':removed',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** setDate. Serialized as `:setDate` */
    public get setDate(): StringValue | undefined { return this._g(':setDate'); }
    public set setDate(v: StringValue | undefined) { this._s(':setDate', v); }
    /** method. Serialized as `:method` */
    public get method(): StringValue | undefined { return this._g(':method'); }
    public set method(v: StringValue | undefined) { this._s(':method', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** siteId. Serialized as `:siteId` */
    public get siteId(): StringValue | undefined { return this._g(':siteId'); }
    public set siteId(v: StringValue | undefined) { this._s(':siteId', v); }
    /** actionId. Serialized as `:actionId` */
    public get actionId(): StringValue | undefined { return this._g(':actionId'); }
    public set actionId(v: StringValue | undefined) { this._s(':actionId', v); }
    /** contentBits. Serialized as `:contentBits` */
    public get contentBits(): UInt32Value | undefined { return this._g(':contentBits'); }
    public set contentBits(v: UInt32Value | undefined) { this._s(':contentBits', v); }
    /** removed. Serialized as `:removed` */
    public get removed(): BooleanValue | undefined { return this._g(':removed'); }
    public set removed(v: BooleanValue | undefined) { this._s(':removed', v); }

}
/** Defines the ClassificationExtension Class. Serialized as `clbl:ext` */
export class ClassificationExtension extends OxmlCompositeElement {

    public static override _Q = 'clbl:ext';
    public static override _A = [':uri',];
    /** uri. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }

}
/** Defines the ClassificationLabelList Class. Serialized as `clbl:labelList` */
export class ClassificationLabelList extends OxmlPartRootElement<ClassificationLabel | ClassificationExtensionList> {

    public static override _Q = 'clbl:labelList';

}

export function initOffice2021MipLabelMetaDataNamespace() {
    ClassificationExtensionList._C = {
        'clbl:ext': ClassificationExtension,
    };
    ClassificationLabel._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':setDate': new OxmlAttr(':setDate', OxmlType.StringValue),
        ':method': new OxmlAttr(':method', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':siteId': new OxmlAttr(':siteId', OxmlType.StringValue),
        ':actionId': new OxmlAttr(':actionId', OxmlType.StringValue),
        ':contentBits': new OxmlAttr(':contentBits', OxmlType.UInt32Value),
        ':removed': new OxmlAttr(':removed', OxmlType.BooleanValue),
    };
    ClassificationExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ClassificationLabelList._C = {
        'clbl:label': ClassificationLabel,
        'clbl:extLst': ClassificationExtensionList,
    };
    return {
        prefix: 'clbl',
        xmlns: 'http://schemas.microsoft.com/office/2020/mipLabelMetadata',
    };
}
