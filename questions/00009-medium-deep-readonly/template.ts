// type DeepReadonly<T> =
//     T extends object
//       ? { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] }
//       : never

type DeepReadonly<T> = keyof T extends never
    ? T
    : { readonly [k in keyof T]: DeepReadonly<T[k]> };