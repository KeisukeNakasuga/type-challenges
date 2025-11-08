import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

type cases2 = [
  Expect<Equal<Last2<[]>, never>>,
  Expect<Equal<Last2<[2]>, 2>>,
  Expect<Equal<Last2<[3, 2, 1]>, 1>>,
  Expect<Equal<Last2<[() => 123, { a: string }]>, { a: string }>>,
]
