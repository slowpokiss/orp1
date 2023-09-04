export default function expl(obj, arr) {
  let array = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      array.push({ key, value: obj[key] });
    }
  }
  array = array.sort((a, b) => (a.key > b.key ? 1 : -1));

  array.forEach((el, ind) => {
    if (el.key === arr[1]) {
      array.splice(0, 0, array.splice(ind, 1)[0]);
    }
  });

  array.forEach((el, ind) => {
    if (el.key === arr[0]) {
      array.splice(0, 0, array.splice(ind, 1)[0]);
    }
  });
  return array;
}
