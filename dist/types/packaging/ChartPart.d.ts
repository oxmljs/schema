import { ChartSpace } from '../schema/Drawing/Charts';
import { OxmlPart } from '../framework/OxmlPart';
import { ChartDrawingPart } from './ChartDrawingPart';
import { EmbeddedPackagePart } from './EmbeddedPackagePart';
import { ImagePart } from './ImagePart';
import { ThemeOverridePart } from './ThemeOverridePart';
import { ChartStylePart } from './ChartStylePart';
import { ChartColorStylePart } from './ChartColorStylePart';
export declare class ChartPart extends OxmlPart<ChartSpace> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ChartSpace;
    get chart(): ChartSpace | undefined;
    set chart(root: ChartSpace | undefined);
    get chartDrawingPart(): ChartDrawingPart | undefined;
    get embeddedPackagePart(): EmbeddedPackagePart | undefined;
    get imageParts(): ImagePart[];
    get themeOverridePart(): ThemeOverridePart | undefined;
    get chartStyleParts(): ChartStylePart[];
    get chartColorStyleParts(): ChartColorStylePart[];
}
