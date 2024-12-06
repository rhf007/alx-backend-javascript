export default function hasValuesFromArray(set, array) {
  const set2 = new Set(array);

  return set.isSupersetOf(set2);
}
