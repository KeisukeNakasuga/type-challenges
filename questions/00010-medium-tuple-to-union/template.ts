type TupleToUnion<T extends ReadonlyArray<unknown>> = T[number]

const arr_00010 = [1, 'foo', true] as const
type test_00010_1 = ReadonlyArray<[1, 'foo', true]>
