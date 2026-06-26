export function diffArrays<T>(oldArr: T[], newArr: T[]): { added: T[]; removed: T[] } {
  const oldSet = new Set(oldArr);
  const newSet = new Set(newArr);
  return {
    added: newArr.filter(x => !oldSet.has(x)),
    removed: oldArr.filter(x => !newSet.has(x)),
  };
}
