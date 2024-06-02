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

export class PresentationPart extends OxmlPart<Presentation> {

    public static override _N = 'PresentationPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument';
    public static override _C = '*';
    public static _P = 'ppt';
    public static _T = 'presentation';
    public static override _E = Presentation;

    public get presentation() { return this._r; }
    public set presentation(root: Presentation | undefined) { this._r = root; }

    public get customXmlParts() { return this._m<CustomXmlPart>('CustomXmlPart'); }
    public get fontParts() { return this._m<FontPart>('FontPart'); }
    public get presentationPropertiesPart() { return this._f<PresentationPropertiesPart>('PresentationPropertiesPart'); }
    public get tableStylesPart() { return this._f<TableStylesPart>('TableStylesPart'); }
    public get themePart() { return this._f<ThemePart>('ThemePart'); }
    public get viewPropertiesPart() { return this._f<ViewPropertiesPart>('ViewPropertiesPart'); }
    public get notesMasterPart() { return this._f<NotesMasterPart>('NotesMasterPart'); }
    public get slideParts() { return this._m<SlidePart>('SlidePart'); }
    public get slideMasterParts() { return this._m<SlideMasterPart>('SlideMasterPart'); }
    public get userDefinedTagsPart() { return this._f<UserDefinedTagsPart>('UserDefinedTagsPart'); }
    public get commentAuthorsPart() { return this._f<CommentAuthorsPart>('CommentAuthorsPart'); }
    public get handoutMasterPart() { return this._f<HandoutMasterPart>('HandoutMasterPart'); }
    public get legacyDiagramTextInfoPart() { return this._f<LegacyDiagramTextInfoPart>('LegacyDiagramTextInfoPart'); }
    public get vbaProjectPart() { return this._f<VbaProjectPart>('VbaProjectPart'); }
    public get commentParts() { return this._m<PowerPointCommentPart>('PowerPointCommentPart'); }
    public get authorsPart() { return this._f<PowerPointAuthorsPart>('PowerPointAuthorsPart'); }

}
