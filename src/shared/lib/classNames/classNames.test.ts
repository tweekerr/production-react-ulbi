import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('one class', () => {
    expect(classNames('testClass')).toBe('testClass');
  });

  test('with additional', () => {
    expect(classNames('testClass', {}, ['123'])).toBe('testClass 123');
  });

  test('with mods', () => {
    const expected = 'testClass 123 hover';
    expect(classNames('testClass', { hover: true }, ['123'])).toBe(expected);
  });

  test('with false mod', () => {
    const expected = 'testClass 123';
    expect(classNames('testClass', { hover: false }, ['123'])).toBe(expected);
  });

  test('with undefined mod', () => {
    const expected = 'testClass 123';
    expect(classNames('testClass', { hover: undefined }, ['123'])).toBe(expected);
  });
});
