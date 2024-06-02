

export enum SpaceProcessingModeValues {
    /** undefined. Serialized value: `default` */
    Default = 'default',
    /** undefined. Serialized value: `preserve` */
    Preserve = 'preserve',
}

export const SpaceProcessingModeValuesArray = [
    SpaceProcessingModeValues.Default,
    SpaceProcessingModeValues.Preserve,
] as const;


export function initNamespace() {
    return {
        prefix: 'xml',
        xmlns: 'http://www.w3.org/XML/1998/namespace',
    };
}
