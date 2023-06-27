import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', function() {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe('someClass class1 class2')
  })

  test('with mods', () => {
    expect(classNames('someClass', { hovered: true, scroll: true }, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered scroll')
  })

  test('with mods false', () => {
    expect(classNames('someClass', { hovered: false, scroll: true }, ['class1', 'class2']))
      .toBe('someClass class1 class2 scroll')
  })
})
