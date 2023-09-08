export default function expl(obj, Array) {
  const good = [];
  const noGood = [];

  for (const property in obj) {
    if (Array.includes(property)) {
      good.push(property);
    } else {
      noGood.push(property);
    }
  }

  const sortGood = good.sort((a, b) => Array.indexOf(a) - Array.indexOf(b));
  const sortNoGood = noGood.sort();

  const sortedGood = sortGood.map((property) => ({
    key: property,
    value: obj[property],
  }));
  const unsortedGood = sortNoGood.map((property) => ({
    key: property,
    value: obj[property],
  }));

  return [...sortedGood, ...unsortedGood];
}
