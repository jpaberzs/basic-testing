// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const msg = 'test value';
    const result = await resolveValue(msg);

    expect(result).toBe(msg);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => {
      throwError('test error');
    }).toThrow();
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => {
      throwError();
    }).toThrow();
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => {
      throwCustomError();
    }).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect(async () => {
      await rejectCustomError();
    }).rejects.toThrow(MyAwesomeError);
  });
});
