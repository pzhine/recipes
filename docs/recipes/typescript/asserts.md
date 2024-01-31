```ts
function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== 'number') {
    throw new AssertionError('Not a number!')
  }
}

function double(input: any): number {
  assertIsNumber(input)
  return input * 2
}
```