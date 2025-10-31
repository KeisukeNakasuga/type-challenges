// my solution
// type MyReturnType<T extends (...args: any[]) => any> =
//   T extends (...any: infer _) => infer U
//     ? U
//     : never

type MyReturnType<T extends Function> =
  T extends (...args: any) => infer R
    ? R
    : never

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = typeof fn

type t1 = MyReturnType<typeof fn>;
