// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const calcProps = { a: 1, b: 2, action: Action.Add };

    expect(simpleCalculator(calcProps)).toBe(3);
  });

  test('should subtract two numbers', () => {
    const calcProps = { a: 5, b: 2, action: Action.Subtract };

    expect(simpleCalculator(calcProps)).toBe(3);
  });

  test('should multiply two numbers', () => {
    const calcProps = { a: 5, b: 2, action: Action.Multiply };

    expect(simpleCalculator(calcProps)).toBe(10);
  });

  test('should divide two numbers', () => {
    const calcProps = { a: 10, b: 2, action: Action.Divide };

    expect(simpleCalculator(calcProps)).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const calcProps = { a: 10, b: 2, action: Action.Exponentiate };

    expect(simpleCalculator(calcProps)).toBe(100);
  });

  test('should return null for invalid action', () => {
    const calcProps = { a: 10, b: 2, action: 'asd' };

    expect(simpleCalculator(calcProps)).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const calcProps = { a: 'asd', b: 2, action: Action.Exponentiate };

    expect(simpleCalculator(calcProps)).toBeNull();
  });
});
