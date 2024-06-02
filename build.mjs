import esbuild from "esbuild";

import {
    existsSync,
    mkdirSync,
    readdirSync
} from "fs";

import { join } from "path";

const dist = join(process.cwd(), "dist", 'src');

if (!existsSync(dist)) {
    mkdirSync(dist);
}

function readDirRecursively(dir) {

    const result = [];
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const entryPath = join(dir, entry.name);

        if (entry.isDirectory()) {
            const subdirFiles = readDirRecursively(entryPath);
            result.push(...subdirFiles);
        } else {
            result.push(entryPath);
        }
    }

    return result;
}

const entryPoints = readDirRecursively(join(process.cwd(), "src"))
    .filter(
        (file) =>
            file.endsWith(".ts")
    );
// .map((file) => `src/${file}`);

//console.log(entryPoints);

// esm output bundles with code splitting
esbuild
    .build({
        entryPoints: entryPoints,//[join(process.cwd(), "src", 'index.ts')],
        outdir: dist,
        bundle: false,
        sourcemap: false,
        minify: false,
        splitting: false,
        format: "esm",
        target: ["esnext"],
        //external: ['jszip']
    })
    .catch(() => process.exit(1));

// // cjs output bundle
// esbuild
//     .build({
//         entryPoints: ["src/index.ts"],
//         outfile: "dist/cjs/index.cjs.js",
//         bundle: true,
//         sourcemap: true,
//         minify: true,
//         platform: "node",
//         target: ["node16"],
//     })
//     .catch(() => process.exit(1));

// // an entry file for cjs at the root of the bundle
// writeFileSync(join(dist, "index.js"), "export * from './esm/index.js';");

// // an entry file for esm at the root of the bundle
// writeFileSync(
//     join(dist, "index.cjs.js"),
//     "module.exports = require('./cjs/index.cjs.js');"
// );