// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T as key extends K ? never : key]: T[key];
// }

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as
    P extends K
      ? never
      : P
  ]: T[P]
}
