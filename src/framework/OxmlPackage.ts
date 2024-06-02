import JSZip from 'jszip';
import { oxmlParse } from './OxmlParser';
import { OxmlPartContainer } from "./OxmlPartContainer";
import { Default, Override, Types } from './schema/ContentTypes';

export abstract class OxmlPackage extends OxmlPartContainer {

    private static _S = false;
    private static _P = false;


    public static _E = '';

    public static packages: { [k: string]: Function } = {};

    protected override _pkg = true;

    public getContents(uri: string, type: JSZip.OutputType = 'string') {
        const file = this.zip.files[uri];
        if (!file) return undefined;
        return file.async(type);
    }

    private readonly zip = new JSZip();

    private init() {
        return new Promise(async (res, rej) => {
            try {
                const start = Date.now();
                if (!OxmlPackage._S) {
                    const { oxmlInitPackaging } = await import('../packaging/_init');
                    oxmlInitPackaging();
                    OxmlPackage._S = true;
                }
                if (!OxmlPackage._P) {
                    const { oxmlInitSchema } = await import('../schema/_init');
                    oxmlInitSchema();
                    OxmlPackage._P = true;
                }
                const end = Date.now();
                console.log(`Init time: ${end - start}ms`);
                res(null);
            } catch (e) {
                rej(e);
            }
        })
    }

    protected async open(source: JSZip.InputType) {
        await this.init();
        const start = Date.now();
        await this.zip.loadAsync(source);
        await this.load();
        const end = Date.now();
        console.log(`Load time: ${end - start}ms`);
    }

    protected async create() {
        await this.init();
    }

    public getContentType(path: string) {

        const { overrides } = this;

        const ct = overrides[path];

        if (ct) return ct;

        const { defaults } = this;

        const ext = path.split('.').pop() || '';

        return defaults[ext] || '';

    }

    private defaults: { [k: string]: string } = {};
    private overrides: { [k: string]: string } = {};

    protected override async load() {

        const { defaults, overrides } = this;
        const xml = await this.getContents('[Content_Types].xml');
        const types = oxmlParse(xml as string, Types) as Types;
        const children = types.children;
        const childrenLength = children.length;

        for (let i = 0; i < childrenLength; ++i) {
            const type = children[i];
            if (type instanceof Override) {
                const ct = type.contentType;
                const pn = type.partName;
                if (ct && pn) overrides[pn.substring(1)] = ct;
            } else if (type instanceof Default) {
                const ct = type.contentType;
                const ex = type.extension;
                if (ct && ex) defaults[ex] = ct;
            }
        }

        await super.load();

    }

}
