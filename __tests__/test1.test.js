import expl from '../src/index';

test('initial test1', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = expl(obj, ['name', 'level']);
  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('initial test2', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, speed: 40,
  };
  const result = expl(obj, ['level', 'speed']);
  expect(result).toEqual([
    { key: 'level', value: 2 },
    { key: 'speed', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('test for invalid key', () => {
  expect(() => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, speed: 40,
    };
    expl(obj, ['level', 'power']);
    Error('invalid key or empty object');
  }).toThrow();
});

test('test for invalid key', () => {
  expect(() => {
    const obj = {};
    expl(obj, ['level', 'power']);
    Error('invalid key or empty object');
  }).toThrow();
});
