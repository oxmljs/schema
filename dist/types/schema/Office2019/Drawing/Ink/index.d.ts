export declare enum ExtendedBrushPropertyName {
    /** undefined. Serialized value: `inkEffects` */
    InkEffects = "inkEffects",
    /** undefined. Serialized value: `anchorX` */
    AnchorX = "anchorX",
    /** undefined. Serialized value: `anchorY` */
    AnchorY = "anchorY",
    /** undefined. Serialized value: `scaleFactor` */
    ScaleFactor = "scaleFactor"
}
export declare const ExtendedBrushPropertyNameArray: readonly [ExtendedBrushPropertyName.InkEffects, ExtendedBrushPropertyName.AnchorX, ExtendedBrushPropertyName.AnchorY, ExtendedBrushPropertyName.ScaleFactor];
export declare enum InkEffectsType {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `pencil` */
    Pencil = "pencil",
    /** undefined. Serialized value: `rainbow` */
    Rainbow = "rainbow",
    /** undefined. Serialized value: `galaxy` */
    Galaxy = "galaxy",
    /** undefined. Serialized value: `gold` */
    Gold = "gold",
    /** undefined. Serialized value: `silver` */
    Silver = "silver",
    /** undefined. Serialized value: `lava` */
    Lava = "lava",
    /** undefined. Serialized value: `ocean` */
    Ocean = "ocean",
    /** undefined. Serialized value: `rosegold` */
    Rosegold = "rosegold",
    /** undefined. Serialized value: `bronze` */
    Bronze = "bronze"
}
export declare const InkEffectsTypeArray: readonly [InkEffectsType.None, InkEffectsType.Pencil, InkEffectsType.Rainbow, InkEffectsType.Galaxy, InkEffectsType.Gold, InkEffectsType.Silver, InkEffectsType.Lava, InkEffectsType.Ocean, InkEffectsType.Rosegold, InkEffectsType.Bronze];
export declare function initOffice2019DrawingInkNamespace(): {
    prefix: string;
    xmlns: string;
};
