import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { SortByValues, SortByValuesArray } from '../../../Spreadsheet';
import { IconSetTypeValues, IconSetTypeValuesArray } from '../../../Office2010/Excel';
import { SortMethodValues, SortMethodValuesArray } from '../../../Spreadsheet';import { Filters as XFilters } from '../../../Spreadsheet';
import { Top10 as XTop10 } from '../../../Spreadsheet';
import { CustomFilters as X14CustomFilters } from '../../../Office2010/Excel';
import { CustomFilters as XCustomFilters } from '../../../Spreadsheet';
import { DynamicFilter as XDynamicFilter } from '../../../Spreadsheet';
import { ColorFilter as XColorFilter } from '../../../Spreadsheet';
import { IconFilter as X14IconFilter } from '../../../Office2010/Excel';
import { IconFilter as XIconFilter } from '../../../Spreadsheet';
import { ExtensionList as XExtensionList } from '../../../Spreadsheet';
import { Font as XFont } from '../../../Spreadsheet';
import { NumberingFormat as XNumberingFormat } from '../../../Spreadsheet';
import { Fill as XFill } from '../../../Spreadsheet';
import { Alignment as XAlignment } from '../../../Spreadsheet';
import { Border as XBorder } from '../../../Spreadsheet';
import { Protection as XProtection } from '../../../Spreadsheet';
import { Extension as XExtension } from '../../../Spreadsheet';


/** Defines the RichSortCondition Class. Serialized as `xnsv:richSortCondition` */
export class RichSortCondition extends OxmlLeafElement {

    public static override _Q = 'xnsv:richSortCondition';
    public static override _A = [':richSortKey',':descending',':sortBy',':ref',':customList',':dxfId',':iconSet',':iconId',];
    /** richSortKey. Serialized as `:richSortKey` */
    public get richSortKey(): StringValue | undefined { return this._g(':richSortKey'); }
    public set richSortKey(v: StringValue | undefined) { this._s(':richSortKey', v); }
    /** descending. Serialized as `:descending` */
    public get descending(): BooleanValue | undefined { return this._g(':descending'); }
    public set descending(v: BooleanValue | undefined) { this._s(':descending', v); }
    /** sortBy. Serialized as `:sortBy` */
    public get sortBy(): SortByValues | undefined { return this._g(':sortBy'); }
    public set sortBy(v: SortByValues | undefined) { this._s(':sortBy', v); }
    /** ref. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** customList. Serialized as `:customList` */
    public get customList(): StringValue | undefined { return this._g(':customList'); }
    public set customList(v: StringValue | undefined) { this._s(':customList', v); }
    /** dxfId. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }
    /** iconSet. Serialized as `:iconSet` */
    public get iconSet(): IconSetTypeValues | undefined { return this._g(':iconSet'); }
    public set iconSet(v: IconSetTypeValues | undefined) { this._s(':iconSet', v); }
    /** iconId. Serialized as `:iconId` */
    public get iconId(): UInt32Value | undefined { return this._g(':iconId'); }
    public set iconId(v: UInt32Value | undefined) { this._s(':iconId', v); }

}
/** Defines the SortCondition Class. Serialized as `xnsv:sortCondition` */
export class SortCondition extends OxmlLeafElement {

    public static override _Q = 'xnsv:sortCondition';
    public static override _A = [':descending',':sortBy',':ref',':customList',':dxfId',':iconSet',':iconId',];
    /** descending. Serialized as `:descending` */
    public get descending(): BooleanValue | undefined { return this._g(':descending'); }
    public set descending(v: BooleanValue | undefined) { this._s(':descending', v); }
    /** sortBy. Serialized as `:sortBy` */
    public get sortBy(): SortByValues | undefined { return this._g(':sortBy'); }
    public set sortBy(v: SortByValues | undefined) { this._s(':sortBy', v); }
    /** ref. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** customList. Serialized as `:customList` */
    public get customList(): StringValue | undefined { return this._g(':customList'); }
    public set customList(v: StringValue | undefined) { this._s(':customList', v); }
    /** dxfId. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }
    /** iconSet. Serialized as `:iconSet` */
    public get iconSet(): IconSetTypeValues | undefined { return this._g(':iconSet'); }
    public set iconSet(v: IconSetTypeValues | undefined) { this._s(':iconSet', v); }
    /** iconId. Serialized as `:iconId` */
    public get iconId(): UInt32Value | undefined { return this._g(':iconId'); }
    public set iconId(v: UInt32Value | undefined) { this._s(':iconId', v); }

}
/** Defines the SortRule Class. Serialized as `xnsv:sortRule` */
export class SortRule extends OxmlCompositeElement<DifferentialFormatType | SortCondition | RichSortCondition> {

    public static override _Q = 'xnsv:sortRule';
    public static override _A = [':colId',':id',];
    /** colId. Serialized as `:colId` */
    public get colId(): UInt32Value | undefined { return this._g(':colId'); }
    public set colId(v: UInt32Value | undefined) { this._s(':colId', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns DifferentialFormatType. */
    public get differentialFormatType(): DifferentialFormatType | undefined { return this._f(DifferentialFormatType); }

}
/** Defines the FilterColumn Class. Serialized as `xnsv:filter` */
export class FilterColumn extends OxmlCompositeElement<XFilters | XTop10 | X14CustomFilters | XCustomFilters | XDynamicFilter | XColorFilter | X14IconFilter | XIconFilter | XExtensionList> {

    public static override _Q = 'xnsv:filter';
    public static override _A = [':colId',':hiddenButton',':showButton',];
    /** Filter Column Data. Serialized as `:colId` */
    public get columnId(): UInt32Value | undefined { return this._g(':colId'); }
    public set columnId(v: UInt32Value | undefined) { this._s(':colId', v); }
    /** Hidden AutoFilter Button. Serialized as `:hiddenButton` */
    public get hiddenButton(): BooleanValue | undefined { return this._g(':hiddenButton'); }
    public set hiddenButton(v: BooleanValue | undefined) { this._s(':hiddenButton', v); }
    /** Show Filter Button. Serialized as `:showButton` */
    public get showButton(): BooleanValue | undefined { return this._g(':showButton'); }
    public set showButton(v: BooleanValue | undefined) { this._s(':showButton', v); }
    /** Filter Criteria. */
    public get filters(): XFilters | undefined { return this._f(XFilters); }
    /** Top 10. */
    public get top10(): XTop10 | undefined { return this._f(XTop10); }
    /** Returns X14CustomFilters. */
    public get customFilters14(): X14CustomFilters | undefined { return this._f(X14CustomFilters); }
    /** Custom Filters. */
    public get customFilters(): XCustomFilters | undefined { return this._f(XCustomFilters); }
    /** Dynamic Filter. */
    public get dynamicFilter(): XDynamicFilter | undefined { return this._f(XDynamicFilter); }
    /** Color Filter Criteria. */
    public get colorFilter(): XColorFilter | undefined { return this._f(XColorFilter); }
    /** Returns X14IconFilter. */
    public get iconFilter14(): X14IconFilter | undefined { return this._f(X14IconFilter); }
    /** Icon Filter. */
    public get iconFilter(): XIconFilter | undefined { return this._f(XIconFilter); }
    /** Returns XExtensionList. */
    public get extensionList(): XExtensionList | undefined { return this._f(XExtensionList); }

}
/** Defines the DifferentialFormatType Class. Serialized as `xnsv:dxf` */
export class DifferentialFormatType extends OxmlCompositeElement<XFont | XNumberingFormat | XFill | XAlignment | XBorder | XProtection | XExtensionList> {

    public static override _Q = 'xnsv:dxf';
    /** Font Properties. */
    public get font(): XFont | undefined { return this._f(XFont); }
    /** Number Format. */
    public get numberingFormat(): XNumberingFormat | undefined { return this._f(XNumberingFormat); }
    /** Fill. */
    public get fill(): XFill | undefined { return this._f(XFill); }
    /** Alignment. */
    public get alignment(): XAlignment | undefined { return this._f(XAlignment); }
    /** Border Properties. */
    public get border(): XBorder | undefined { return this._f(XBorder); }
    /** Protection Properties. */
    public get protection(): XProtection | undefined { return this._f(XProtection); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): XExtensionList | undefined { return this._f(XExtensionList); }

}
/** Defines the SortRules Class. Serialized as `xnsv:sortRules` */
export class SortRules extends OxmlCompositeElement<SortRule | ExtensionList> {

    public static override _Q = 'xnsv:sortRules';
    public static override _A = [':sortMethod',':caseSensitive',];
    /** sortMethod. Serialized as `:sortMethod` */
    public get sortMethod(): SortMethodValues | undefined { return this._g(':sortMethod'); }
    public set sortMethod(v: SortMethodValues | undefined) { this._s(':sortMethod', v); }
    /** caseSensitive. Serialized as `:caseSensitive` */
    public get caseSensitive(): BooleanValue | undefined { return this._g(':caseSensitive'); }
    public set caseSensitive(v: BooleanValue | undefined) { this._s(':caseSensitive', v); }

}
/** Defines the ColumnFilter Class. Serialized as `xnsv:columnFilter` */
export class ColumnFilter extends OxmlCompositeElement<DifferentialFormatType | FilterColumn | ExtensionList> {

    public static override _Q = 'xnsv:columnFilter';
    public static override _A = [':colId',':id',];
    /** colId. Serialized as `:colId` */
    public get colId(): UInt32Value | undefined { return this._g(':colId'); }
    public set colId(v: UInt32Value | undefined) { this._s(':colId', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns DifferentialFormatType. */
    public get differentialFormatType(): DifferentialFormatType | undefined { return this._f(DifferentialFormatType); }

}
/** Defines the NsvFilter Class. Serialized as `xnsv:nsvFilter` */
export class NsvFilter extends OxmlCompositeElement<ColumnFilter | SortRules | ExtensionList> {

    public static override _Q = 'xnsv:nsvFilter';
    public static override _A = [':filterId',':ref',':tableId',];
    /** filterId. Serialized as `:filterId` */
    public get filterId(): StringValue | undefined { return this._g(':filterId'); }
    public set filterId(v: StringValue | undefined) { this._s(':filterId', v); }
    /** ref. Serialized as `:ref` */
    public get ref(): StringValue | undefined { return this._g(':ref'); }
    public set ref(v: StringValue | undefined) { this._s(':ref', v); }
    /** tableId. Serialized as `:tableId` */
    public get tableId(): UInt32Value | undefined { return this._g(':tableId'); }
    public set tableId(v: UInt32Value | undefined) { this._s(':tableId', v); }

}
/** Defines the ExtensionList Class. Serialized as `xnsv:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'xnsv:extLst';

}
/** Defines the NamedSheetView Class. Serialized as `xnsv:namedSheetView` */
export class NamedSheetView extends OxmlCompositeElement<NsvFilter | ExtensionList> {

    public static override _Q = 'xnsv:namedSheetView';
    public static override _A = [':name',':id',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the NamedSheetViews Class. Serialized as `xnsv:namedSheetViews` */
export class NamedSheetViews extends OxmlPartRootElement<NamedSheetView | ExtensionList> {

    public static override _Q = 'xnsv:namedSheetViews';

}

export function initOffice2021ExcelNamedSheetViewsNamespace() {
    RichSortCondition._D = {
        ':richSortKey': new OxmlAttr(':richSortKey', OxmlType.StringValue),
        ':descending': new OxmlAttr(':descending', OxmlType.BooleanValue),
        ':sortBy': new OxmlAttr(':sortBy', OxmlType.EnumValue, SortByValuesArray),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':customList': new OxmlAttr(':customList', OxmlType.StringValue),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetTypeValuesArray),
        ':iconId': new OxmlAttr(':iconId', OxmlType.UInt32Value),
    };
    SortCondition._D = {
        ':descending': new OxmlAttr(':descending', OxmlType.BooleanValue),
        ':sortBy': new OxmlAttr(':sortBy', OxmlType.EnumValue, SortByValuesArray),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':customList': new OxmlAttr(':customList', OxmlType.StringValue),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetTypeValuesArray),
        ':iconId': new OxmlAttr(':iconId', OxmlType.UInt32Value),
    };
    SortRule._C = {
        'xnsv:dxf': DifferentialFormatType,
        'xnsv:sortCondition': SortCondition,
        'xnsv:richSortCondition': RichSortCondition,
    };
    SortRule._D = {
        ':colId': new OxmlAttr(':colId', OxmlType.UInt32Value),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    FilterColumn._C = {
        'x:filters': XFilters,
        'x:top10': XTop10,
        'x14:customFilters': X14CustomFilters,
        'x:customFilters': XCustomFilters,
        'x:dynamicFilter': XDynamicFilter,
        'x:colorFilter': XColorFilter,
        'x14:iconFilter': X14IconFilter,
        'x:iconFilter': XIconFilter,
        'x:extLst': XExtensionList,
    };
    FilterColumn._D = {
        ':colId': new OxmlAttr(':colId', OxmlType.UInt32Value),
        ':hiddenButton': new OxmlAttr(':hiddenButton', OxmlType.BooleanValue),
        ':showButton': new OxmlAttr(':showButton', OxmlType.BooleanValue),
    };
    DifferentialFormatType._C = {
        'x:font': XFont,
        'x:numFmt': XNumberingFormat,
        'x:fill': XFill,
        'x:alignment': XAlignment,
        'x:border': XBorder,
        'x:protection': XProtection,
        'x:extLst': XExtensionList,
    };
    SortRules._C = {
        'xnsv:sortRule': SortRule,
        'xnsv:extLst': ExtensionList,
    };
    SortRules._D = {
        ':sortMethod': new OxmlAttr(':sortMethod', OxmlType.EnumValue, SortMethodValuesArray),
        ':caseSensitive': new OxmlAttr(':caseSensitive', OxmlType.BooleanValue),
    };
    ColumnFilter._C = {
        'xnsv:dxf': DifferentialFormatType,
        'xnsv:filter': FilterColumn,
        'xnsv:extLst': ExtensionList,
    };
    ColumnFilter._D = {
        ':colId': new OxmlAttr(':colId', OxmlType.UInt32Value),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    NsvFilter._C = {
        'xnsv:columnFilter': ColumnFilter,
        'xnsv:sortRules': SortRules,
        'xnsv:extLst': ExtensionList,
    };
    NsvFilter._D = {
        ':filterId': new OxmlAttr(':filterId', OxmlType.StringValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':tableId': new OxmlAttr(':tableId', OxmlType.UInt32Value),
    };
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    NamedSheetView._C = {
        'xnsv:nsvFilter': NsvFilter,
        'xnsv:extLst': ExtensionList,
    };
    NamedSheetView._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    NamedSheetViews._C = {
        'xnsv:namedSheetView': NamedSheetView,
        'xnsv:extLst': ExtensionList,
    };
    return {
        prefix: 'xnsv',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2019/namedsheetviews',
    };
}
