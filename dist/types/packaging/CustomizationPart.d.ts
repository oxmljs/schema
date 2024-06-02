import { TemplateCommandGroup } from '../schema/Office/Word';
import { OxmlPart } from '../framework/OxmlPart';
import { WordAttachedToolbarsPart } from './WordAttachedToolbarsPart';
export declare class CustomizationPart extends OxmlPart<TemplateCommandGroup> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof TemplateCommandGroup;
    get customizations(): TemplateCommandGroup | undefined;
    set customizations(root: TemplateCommandGroup | undefined);
    get wordAttachedToolbarsPart(): WordAttachedToolbarsPart | undefined;
}
