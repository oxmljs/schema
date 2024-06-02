export declare enum SpaceProcessingModeValues {
    /** undefined. Serialized value: `default` */
    Default = "default",
    /** undefined. Serialized value: `preserve` */
    Preserve = "preserve"
}
export declare const SpaceProcessingModeValuesArray: readonly [SpaceProcessingModeValues.Default, SpaceProcessingModeValues.Preserve];
export declare function initNamespace(): {
    prefix: string;
    xmlns: string;
};
