/// <reference types="node" />
import JSZip from 'jszip';
import { OxmlPartContainer } from "./OxmlPartContainer";
export declare abstract class OxmlPackage extends OxmlPartContainer {
    private static _S;
    private static _P;
    static _E: string;
    static packages: {
        [k: string]: Function;
    };
    protected _pkg: boolean;
    getContents(uri: string, type?: JSZip.OutputType): Promise<string | number[] | Uint8Array | ArrayBuffer | Blob | Buffer> | undefined;
    private readonly zip;
    private init;
    protected open(source: JSZip.InputType): Promise<void>;
    protected create(): Promise<void>;
    getContentType(path: string): string;
    private defaults;
    private overrides;
    protected load(): Promise<void>;
}
