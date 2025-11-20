declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): 
  Promise<{ [key in keyof T]: Awaited<T[key]> }>

// 1. Tはなんでも入る配列
// 2. valuesにはTの各要素を展開
//    readonlyにするのは


function identityNoReadonly<T extends unknown[]>(
  values: readonly [...T]
): T {
  return values as T;
}

const data = [10, 'apple'] as const;

const res = identityNoReadonly(data);
