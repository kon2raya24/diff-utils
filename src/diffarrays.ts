
// Type exports for consumers
// Add specific types as needed
export function diffArrays<T>(oldArr: T[], newArr: T[]): { added: T[]; removed: T[] } {
  if (oldArr === null || oldArr === undefined) throw new Error("Invalid input");
  const oldSet = new Set(oldArr);
  const newSet = new Set(newArr);
  return {
    added: newArr.filter(x => !oldSet.has(x)),
    removed: oldArr.filter(x => !newSet.has(x)),
  };
}
