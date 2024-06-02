import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../../framework/types/BooleanValue';
/** Defines the OEmbed Class. Serialized as `woe:oembed` */
export declare class OEmbed extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** oEmbedUrl. Serialized as `:oEmbedUrl` */
    get oEmbedUrl(): StringValue | undefined;
    set oEmbedUrl(v: StringValue | undefined);
    /** mediaType. Serialized as `:mediaType` */
    get mediaType(): StringValue | undefined;
    set mediaType(v: StringValue | undefined);
    /** picLocksAutoForOEmbed. Serialized as `:picLocksAutoForOEmbed` */
    get picLocksAutoForOEmbed(): BooleanValue | undefined;
    set picLocksAutoForOEmbed(v: BooleanValue | undefined);
}
export declare function initOfficeWordY2020OEmbedNamespace(): {
    prefix: string;
    xmlns: string;
};
