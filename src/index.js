export default function expl(obj, arr) {
  let array = [];
  const check = arr.every((el) => el in obj);

  if (check && (Object.keys(obj).length !== 0)) {
    for (const key in obj) {
      array.push({ key, value: obj[key] });
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
  throw new Error('invalid key or empty object');
}
