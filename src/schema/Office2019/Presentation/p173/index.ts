import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';


export enum DisplayLocation {
    /** undefined. Serialized value: `media` */
    Media = 'media',
    /** undefined. Serialized value: `slide` */
    Slide = 'slide',
}

export const DisplayLocationArray = [
    DisplayLocation.Media,
    DisplayLocation.Slide,
] as const;

/** Defines the TrackList Class. Serialized as `p173:trackLst` */
export class TrackList extends OxmlCompositeElement<Track> {

    public static override _Q = 'p173:trackLst';

}
/** Defines the Track Class. Serialized as `p173:track` */
export class Track extends OxmlLeafElement {

    public static override _Q = 'p173:track';
    public static override _A = [':id',':label',':lang','r:embed','r:link',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** label. Serialized as `:label` */
    public get label(): StringValue | undefined { return this._g(':label'); }
    public set label(v: StringValue | undefined) { this._s(':label', v); }
    /** lang. Serialized as `:lang` */
    public get lang(): StringValue | undefined { return this._g(':lang'); }
    public set lang(v: StringValue | undefined) { this._s(':lang', v); }
    /** Embedded Picture Reference. Serialized as `r:embed` */
    public get embed(): StringValue | undefined { return this._g('r:embed'); }
    public set embed(v: StringValue | undefined) { this._s('r:embed', v); }
    /** Linked Picture Reference. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }

}
/** Defines the TracksInfo Class. Serialized as `p173:tracksInfo` */
export class TracksInfo extends OxmlCompositeElement<TrackList> {

    public static override _Q = 'p173:tracksInfo';
    public static override _A = [':displayLoc',];
    /** displayLoc. Serialized as `:displayLoc` */
    public get displayLoc(): DisplayLocation | undefined { return this._g(':displayLoc'); }
    public set displayLoc(v: DisplayLocation | undefined) { this._s(':displayLoc', v); }
    /** Returns TrackList. */
    public get trackList(): TrackList | undefined { return this._f(TrackList); }

}

export function initOffice2019Presentationp173Namespace() {
    TrackList._C = {
        'p173:track': Track,
    };
    Track._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':label': new OxmlAttr(':label', OxmlType.StringValue),
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
    };
    TracksInfo._C = {
        'p173:trackLst': TrackList,
    };
    TracksInfo._D = {
        ':displayLoc': new OxmlAttr(':displayLoc', OxmlType.EnumValue, DisplayLocationArray),
    };
    return {
        prefix: 'p173',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2017/3/main',
    };
}
