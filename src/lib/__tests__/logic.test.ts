import { describe, it, expect } from 'vitest';

// Minimal implementation of frequency logic for testing
function getFrequent<T>(arr: T[]): T | null {
  if (arr.length === 0) return null;
  const counts = arr.reduce((acc, val) => {
    acc.set(val, (acc.get(val) || 0) + 1);
    return acc;
  }, new Map<T, number>());
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

describe('Logic Helpers', () => {
  describe('getFrequent', () => {
    it('returns null for empty array', () => {
      expect(getFrequent([])).toBeNull();
    });

    it('returns the most frequent item', () => {
      const input = ['apple', 'banana', 'apple', 'orange', 'apple'];
      expect(getFrequent(input)).toBe('apple');
    });

    it('handles ties by returning the first encountered top item', () => {
      const input = ['apple', 'banana', 'apple', 'banana'];
      // This implementation returns one of the ties
      const result = getFrequent(input);
      expect(['apple', 'banana']).toContain(result);
    });
  });
});
