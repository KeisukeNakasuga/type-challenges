type MyParameters<T extends (...args: any[]) => any> =   // Tは関数型である
  T extends (...any: infer S) => any  // Tが関数の形であることを確認 & inferで引数の型を推論 
    ? S  // 推論できる形であれば、それをそのまま結果にする
    : never

function foo(arg1: string, arg2: number): void {}
type f = typeof foo; 
