export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);

  if (position > view.length || position < 0) {
    throw new Error('Position outside range');
  }

  const newView = view.set(position, value);
  return newView;
}
