type Chainable<T = object> = {
  option: <K extends string, V>(
    key: K,
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>
  get: () => T
}
