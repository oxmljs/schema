import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
export declare enum DisplayLocation {
    /** undefined. Serialized value: `media` */
    Media = "media",
    /** undefined. Serialized value: `slide` */
    Slide = "slide"
}
export declare const DisplayLocationArray: readonly [DisplayLocation.Media, DisplayLocation.Slide];
/** Defines the TrackList Class. Serialized as `p173:trackLst` */
export declare class TrackList extends OxmlCompositeElement<Track> {
    static _Q: string;
}
/** Defines the Track Class. Serialized as `p173:track` */
export declare class Track extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** label. Serialized as `:label` */
    get label(): StringValue | undefined;
    set label(v: StringValue | undefined);
    /** lang. Serialized as `:lang` */
    get lang(): StringValue | undefined;
    set lang(v: StringValue | undefined);
    /** Embedded Picture Reference. Serialized as `r:embed` */
    get embed(): StringValue | undefined;
    set embed(v: StringValue | undefined);
    /** Linked Picture Reference. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
}
/** Defines the TracksInfo Class. Serialized as `p173:tracksInfo` */
export declare class TracksInfo extends OxmlCompositeElement<TrackList> {
    static _Q: string;
    static _A: string[];
    /** displayLoc. Serialized as `:displayLoc` */
    get displayLoc(): DisplayLocation | undefined;
    set displayLoc(v: DisplayLocation | undefined);
    /** Returns TrackList. */
    get trackList(): TrackList | undefined;
}
export declare function initOffice2019Presentationp173Namespace(): {
    prefix: string;
    xmlns: string;
};
