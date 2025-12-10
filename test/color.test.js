const { describe, it } = require('node:test');
const assert = require('assert');
const { hslToRgb } = require('../utils/color');

describe('hslToRgb', () => {
  it('converts red hue correctly', () => {
    const rgb = hslToRgb(0, 1, 0.5);
    assert.deepStrictEqual(rgb, [255, 0, 0]);
  });

  it('converts green hue correctly', () => {
    const rgb = hslToRgb(1 / 3, 1, 0.5);
    assert.deepStrictEqual(rgb, [0, 255, 0]);
  });

  it('converts blue hue correctly', () => {
    const rgb = hslToRgb(2 / 3, 1, 0.5);
    assert.deepStrictEqual(rgb, [0, 0, 255]);
  });

  it('handles greyscale when saturation is zero', () => {
    const rgb = hslToRgb(0.25, 0, 0.25);
    assert.deepStrictEqual(rgb, [64, 64, 64]);
  });
});
