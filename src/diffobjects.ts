export function diffObjects<T extends Record<string, any>>(oldObj: T, newObj: T): { added: string[]; removed: string[]; changed: string[] } {
  if (oldObj === null || oldObj === undefined) throw new Error("Invalid input");
  const oldKeys = new Set(Object.keys(oldObj));
  const newKeys = new Set(Object.keys(newObj));
  return {
    added: [...newKeys].filter(k => !oldKeys.has(k)),
    removed: [...oldKeys].filter(k => !newKeys.has(k)),
    changed: [...oldKeys].filter(k => newKeys.has(k) && JSON.stringify(oldObj[k]) !== JSON.stringify(newObj[k])),
  };
}
