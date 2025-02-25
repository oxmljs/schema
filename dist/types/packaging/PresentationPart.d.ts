import { Presentation } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';
import { CustomXmlPart } from './CustomXmlPart';
import { FontPart } from './FontPart';
import { PresentationPropertiesPart } from './PresentationPropertiesPart';
import { TableStylesPart } from './TableStylesPart';
import { ThemePart } from './ThemePart';
import { ViewPropertiesPart } from './ViewPropertiesPart';
import { NotesMasterPart } from './NotesMasterPart';
import { SlidePart } from './SlidePart';
import { SlideMasterPart } from './SlideMasterPart';
import { UserDefinedTagsPart } from './UserDefinedTagsPart';
import { CommentAuthorsPart } from './CommentAuthorsPart';
import { HandoutMasterPart } from './HandoutMasterPart';
import { LegacyDiagramTextInfoPart } from './LegacyDiagramTextInfoPart';
import { VbaProjectPart } from './VbaProjectPart';
import { PowerPointCommentPart } from './PowerPointCommentPart';
import { PowerPointAuthorsPart } from './PowerPointAuthorsPart';
export declare class PresentationPart extends OxmlPart<Presentation> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Presentation;
    get presentation(): Presentation | undefined;
    set presentation(root: Presentation | undefined);
    get customXmlParts(): CustomXmlPart[];
    get fontParts(): FontPart[];
    get presentationPropertiesPart(): PresentationPropertiesPart | undefined;
    get tableStylesPart(): TableStylesPart | undefined;
    get themePart(): ThemePart | undefined;
    get viewPropertiesPart(): ViewPropertiesPart | undefined;
    get notesMasterPart(): NotesMasterPart | undefined;
    get slideParts(): SlidePart[];
    get slideMasterParts(): SlideMasterPart[];
    get userDefinedTagsPart(): UserDefinedTagsPart | undefined;
    get commentAuthorsPart(): CommentAuthorsPart | undefined;
    get handoutMasterPart(): HandoutMasterPart | undefined;
    get legacyDiagramTextInfoPart(): LegacyDiagramTextInfoPart | undefined;
    get vbaProjectPart(): VbaProjectPart | undefined;
    get commentParts(): PowerPointCommentPart[];
    get authorsPart(): PowerPointAuthorsPart | undefined;
}
