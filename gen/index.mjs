//@ts-check

import { SchemasRenderer } from './renderer.mjs';

const dataPath = '../data';
const srcPath = '../src';

const render = new SchemasRenderer(dataPath, srcPath);
render.render();

console.log(render.stats);