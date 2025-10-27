// type MyExclude<T extends , U extends string | number> = {
//   [_ in T]: T extends U ? never : T
// }[T]

type MyExclude<T, U> = T extends U ? never : T;