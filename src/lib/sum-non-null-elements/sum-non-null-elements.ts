export default function sumNonNullElements(
  arr: (number | null)[],
): number | null {
  const definedElements = arr.filter((element) => element !== null);

  if (definedElements.length === 0) return null;

  return definedElements.reduce((acc, element) => acc + element, 0);
}
