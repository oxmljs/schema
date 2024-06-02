import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { SortByValues } from '../../../Spreadsheet';
import { IconSetTypeValues } from '../../../Office2010/Excel';
import { SortMethodValues } from '../../../Spreadsheet';
import { Filters as XFilters } from '../../../Spreadsheet';
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
export declare class RichSortCondition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** richSortKey. Serialized as `:richSortKey` */
    get richSortKey(): StringValue | undefined;
    set richSortKey(v: StringValue | undefined);
    /** descending. Serialized as `:descending` */
    get descending(): BooleanValue | undefined;
    set descending(v: BooleanValue | undefined);
    /** sortBy. Serialized as `:sortBy` */
    get sortBy(): SortByValues | undefined;
    set sortBy(v: SortByValues | undefined);
    /** ref. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** customList. Serialized as `:customList` */
    get customList(): StringValue | undefined;
    set customList(v: StringValue | undefined);
    /** dxfId. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** iconSet. Serialized as `:iconSet` */
    get iconSet(): IconSetTypeValues | undefined;
    set iconSet(v: IconSetTypeValues | undefined);
    /** iconId. Serialized as `:iconId` */
    get iconId(): UInt32Value | undefined;
    set iconId(v: UInt32Value | undefined);
}
/** Defines the SortCondition Class. Serialized as `xnsv:sortCondition` */
export declare class SortCondition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** descending. Serialized as `:descending` */
    get descending(): BooleanValue | undefined;
    set descending(v: BooleanValue | undefined);
    /** sortBy. Serialized as `:sortBy` */
    get sortBy(): SortByValues | undefined;
    set sortBy(v: SortByValues | undefined);
    /** ref. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** customList. Serialized as `:customList` */
    get customList(): StringValue | undefined;
    set customList(v: StringValue | undefined);
    /** dxfId. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** iconSet. Serialized as `:iconSet` */
    get iconSet(): IconSetTypeValues | undefined;
    set iconSet(v: IconSetTypeValues | undefined);
    /** iconId. Serialized as `:iconId` */
    get iconId(): UInt32Value | undefined;
    set iconId(v: UInt32Value | undefined);
}
/** Defines the SortRule Class. Serialized as `xnsv:sortRule` */
export declare class SortRule extends OxmlCompositeElement<DifferentialFormatType | SortCondition | RichSortCondition> {
    static _Q: string;
    static _A: string[];
    /** colId. Serialized as `:colId` */
    get colId(): UInt32Value | undefined;
    set colId(v: UInt32Value | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns DifferentialFormatType. */
    get differentialFormatType(): DifferentialFormatType | undefined;
}
/** Defines the FilterColumn Class. Serialized as `xnsv:filter` */
export declare class FilterColumn extends OxmlCompositeElement<XFilters | XTop10 | X14CustomFilters | XCustomFilters | XDynamicFilter | XColorFilter | X14IconFilter | XIconFilter | XExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Filter Column Data. Serialized as `:colId` */
    get columnId(): UInt32Value | undefined;
    set columnId(v: UInt32Value | undefined);
    /** Hidden AutoFilter Button. Serialized as `:hiddenButton` */
    get hiddenButton(): BooleanValue | undefined;
    set hiddenButton(v: BooleanValue | undefined);
    /** Show Filter Button. Serialized as `:showButton` */
    get showButton(): BooleanValue | undefined;
    set showButton(v: BooleanValue | undefined);
    /** Filter Criteria. */
    get filters(): XFilters | undefined;
    /** Top 10. */
    get top10(): XTop10 | undefined;
    /** Returns X14CustomFilters. */
    get customFilters14(): X14CustomFilters | undefined;
    /** Custom Filters. */
    get customFilters(): XCustomFilters | undefined;
    /** Dynamic Filter. */
    get dynamicFilter(): XDynamicFilter | undefined;
    /** Color Filter Criteria. */
    get colorFilter(): XColorFilter | undefined;
    /** Returns X14IconFilter. */
    get iconFilter14(): X14IconFilter | undefined;
    /** Icon Filter. */
    get iconFilter(): XIconFilter | undefined;
    /** Returns XExtensionList. */
    get extensionList(): XExtensionList | undefined;
}
/** Defines the DifferentialFormatType Class. Serialized as `xnsv:dxf` */
export declare class DifferentialFormatType extends OxmlCompositeElement<XFont | XNumberingFormat | XFill | XAlignment | XBorder | XProtection | XExtensionList> {
    static _Q: string;
    /** Font Properties. */
    get font(): XFont | undefined;
    /** Number Format. */
    get numberingFormat(): XNumberingFormat | undefined;
    /** Fill. */
    get fill(): XFill | undefined;
    /** Alignment. */
    get alignment(): XAlignment | undefined;
    /** Border Properties. */
    get border(): XBorder | undefined;
    /** Protection Properties. */
    get protection(): XProtection | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): XExtensionList | undefined;
}
/** Defines the SortRules Class. Serialized as `xnsv:sortRules` */
export declare class SortRules extends OxmlCompositeElement<SortRule | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** sortMethod. Serialized as `:sortMethod` */
    get sortMethod(): SortMethodValues | undefined;
    set sortMethod(v: SortMethodValues | undefined);
    /** caseSensitive. Serialized as `:caseSensitive` */
    get caseSensitive(): BooleanValue | undefined;
    set caseSensitive(v: BooleanValue | undefined);
}
/** Defines the ColumnFilter Class. Serialized as `xnsv:columnFilter` */
export declare class ColumnFilter extends OxmlCompositeElement<DifferentialFormatType | FilterColumn | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** colId. Serialized as `:colId` */
    get colId(): UInt32Value | undefined;
    set colId(v: UInt32Value | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns DifferentialFormatType. */
    get differentialFormatType(): DifferentialFormatType | undefined;
}
/** Defines the NsvFilter Class. Serialized as `xnsv:nsvFilter` */
export declare class NsvFilter extends OxmlCompositeElement<ColumnFilter | SortRules | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** filterId. Serialized as `:filterId` */
    get filterId(): StringValue | undefined;
    set filterId(v: StringValue | undefined);
    /** ref. Serialized as `:ref` */
    get ref(): StringValue | undefined;
    set ref(v: StringValue | undefined);
    /** tableId. Serialized as `:tableId` */
    get tableId(): UInt32Value | undefined;
    set tableId(v: UInt32Value | undefined);
}
/** Defines the ExtensionList Class. Serialized as `xnsv:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the NamedSheetView Class. Serialized as `xnsv:namedSheetView` */
export declare class NamedSheetView extends OxmlCompositeElement<NsvFilter | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the NamedSheetViews Class. Serialized as `xnsv:namedSheetViews` */
export declare class NamedSheetViews extends OxmlPartRootElement<NamedSheetView | ExtensionList> {
    static _Q: string;
}
export declare function initOffice2021ExcelNamedSheetViewsNamespace(): {
    prefix: string;
    xmlns: string;
};
