import assert from 'node:assert/strict';
import { createGoldenEggDomain, packEggBits, resolveVariant, VARIANTS } from '../src/domain/goldenEgg.js';

const egg = createGoldenEggDomain({ radius: 5, color: [1, 0.843, 0], shineLevel: 3 });
assert.equal(egg.radius, 5);
assert.equal(egg.variant, VARIANTS.POLISHED);
assert.equal(resolveVariant(packEggBits({ shineLevel: 6 })), VARIANTS.SHINY);
assert.equal(resolveVariant(packEggBits({ shineLevel: 1 })), VARIANTS.MATTE);
console.log('Golden Egg Tech domain tests passed.');
