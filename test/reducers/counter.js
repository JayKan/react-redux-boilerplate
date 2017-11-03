import counter from '../../src/reducers/counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../src/actions/counter';

describe('reducers', () => {
  describe('counter()', () => {
    test('should handle initial state', () => {
      const result = counter(undefined, {});
      expect(result).toBe(0);
    });

    test('should handle INCREMENT_COUNTER', () => {
      const result = counter(1, { type: INCREMENT_COUNTER });
      expect(result).toBe(2);
    });

    test('should handle DECREMENT_COUNTER', () => {
      const result = counter(1, { type: DECREMENT_COUNTER });
      expect(result).toBe(0);
    });

    test('should handle unknown action type', () => {
      const result = counter(1, { type: 'unknown' });
      expect(result).toBe(1);
    });
  });
});
