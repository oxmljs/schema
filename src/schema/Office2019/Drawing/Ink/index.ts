

export enum ExtendedBrushPropertyName {
    /** undefined. Serialized value: `inkEffects` */
    InkEffects = 'inkEffects',
    /** undefined. Serialized value: `anchorX` */
    AnchorX = 'anchorX',
    /** undefined. Serialized value: `anchorY` */
    AnchorY = 'anchorY',
    /** undefined. Serialized value: `scaleFactor` */
    ScaleFactor = 'scaleFactor',
}

export const ExtendedBrushPropertyNameArray = [
    ExtendedBrushPropertyName.InkEffects,
    ExtendedBrushPropertyName.AnchorX,
    ExtendedBrushPropertyName.AnchorY,
    ExtendedBrushPropertyName.ScaleFactor,
] as const;

export enum InkEffectsType {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `pencil` */
    Pencil = 'pencil',
    /** undefined. Serialized value: `rainbow` */
    Rainbow = 'rainbow',
    /** undefined. Serialized value: `galaxy` */
    Galaxy = 'galaxy',
    /** undefined. Serialized value: `gold` */
    Gold = 'gold',
    /** undefined. Serialized value: `silver` */
    Silver = 'silver',
    /** undefined. Serialized value: `lava` */
    Lava = 'lava',
    /** undefined. Serialized value: `ocean` */
    Ocean = 'ocean',
    /** undefined. Serialized value: `rosegold` */
    Rosegold = 'rosegold',
    /** undefined. Serialized value: `bronze` */
    Bronze = 'bronze',
}

export const InkEffectsTypeArray = [
    InkEffectsType.None,
    InkEffectsType.Pencil,
    InkEffectsType.Rainbow,
    InkEffectsType.Galaxy,
    InkEffectsType.Gold,
    InkEffectsType.Silver,
    InkEffectsType.Lava,
    InkEffectsType.Ocean,
    InkEffectsType.Rosegold,
    InkEffectsType.Bronze,
] as const;


export function initOffice2019DrawingInkNamespace() {
    return {
        prefix: 'aink',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2016/ink',
    };
}
