Use `infer` as a placeholder in a conditional expression to extract a type

### example 1
```ts
// some data fetched from an API or library
const backlog = {
  releases: [
    {
      codename: 'Daisy',
      version: '1.0.1'
    },
    {
      codename: 'Tulip',
      version: '1.0.2'
    },
  ]
}

// application code
type Unarray<T> = T extends Array<infer U> ? U : T
type Release = Unarray<typeof backlog['releases']>
```

### example 2
```ts
// some function from a library
function lastNumberInArray(arr: number[]) {
  if (arr.length === 0) {
    return 'none'
  }
  return arr[arr.length - 1]
}

// application code
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type r = GetReturnType<typeof lastNumberInArray> // number | 'none'
```



