export const GOLDEN_EGG_DIRECTIVE = 'INIT -> PACK_BITS -> RESOLVE_VARIANT -> ASSIMILATE_VECTOR -> RENDER_SAFE';

export const VARIANTS = Object.freeze({
  MATTE: 'matte',
  POLISHED: 'polished',
  SHINY: 'shiny'
});

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function packEggBits({ radius = 5, color = [1, 0.843, 0], shineLevel = 3 } = {}) {
  const radiusBucket = clamp(Math.round(radius), 0, 31);
  const shineBucket = clamp(Math.round(shineLevel), 0, 7);
  const colorBucket = clamp(Math.round(((color[0] + color[1] + color[2]) / 3) * 7), 0, 7);
  return (radiusBucket & 0b11111) | ((colorBucket & 0b111) << 5) | ((shineBucket & 0b111) << 8);
}

export function resolveVariant(packedBits) {
  const shineLevel = (packedBits >> 8) & 0b111;
  if (shineLevel >= 5) return VARIANTS.SHINY;
  if (shineLevel >= 3) return VARIANTS.POLISHED;
  return VARIANTS.MATTE;
}

export function createGoldenEggDomain(definition = {}) {
  const egg = {
    radius: definition.radius ?? 5,
    color: definition.color ?? [1, 0.843, 0],
    shineLevel: definition.shineLevel ?? 3,
    timeVector: definition.timeVector ?? [0, 0, 1]
  };
  const packedBits = packEggBits(egg);
  return {
    ...egg,
    directive: GOLDEN_EGG_DIRECTIVE,
    packedBits,
    variant: resolveVariant(packedBits)
  };
}
