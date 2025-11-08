type Last<T extends unknown[]> =
  T extends [infer First, ...infer Rest]
    ? Rest extends []
      ? First
      : Last<Rest>
    : never

type Last2<T extends unknown[]> = T extends [...infer _, infer L] ? L : never
