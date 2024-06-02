import { TemplateCommandGroup } from '../schema/Office/Word';
import { OxmlPart } from '../framework/OxmlPart';
import { WordAttachedToolbarsPart } from './WordAttachedToolbarsPart';

export class CustomizationPart extends OxmlPart<TemplateCommandGroup> {

    public static override _N = 'CustomizationPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/keyMapCustomizations';
    public static override _C = 'application/vnd.ms-word.keyMapCustomizations+xml';
    public static _P = '.';
    public static _T = 'customizations';
    public static override _E = TemplateCommandGroup;

    public get customizations() { return this._r; }
    public set customizations(root: TemplateCommandGroup | undefined) { this._r = root; }

    public get wordAttachedToolbarsPart() { return this._f<WordAttachedToolbarsPart>('WordAttachedToolbarsPart'); }

}
