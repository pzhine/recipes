```ts
type DieselEngine = {
  fuel: 'petrol' | 'bio' | 'synthetic'
}
type GasEngine = {
  fuel: 'hybrid' | 'conventional'
}
type Bus = {
  engine: DieselEngine
}
type Car = {
  engine: GasEngine
}

type Engine<T> = T extends { engine: unknown } ? T['engine'] : never

const busEngine: Engine<Bus> = {
  fuel: 'bio',
}
const carEngine: Engine<Car> = {
  fuel: 'hybrid',
}
const invalidEngine: Engine<Car> = {
  fuel: 'bio', // <-- this will raise a TS error
}
```