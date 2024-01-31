Type predicates are special functions that allow you to encapsulate [guard](./guards) logic.

### boolean predicates
```ts
class User {
  email: string
}
class RegisteredUser extends User {
  username: string
}

function isRegisteredUser(user: User): user is RegisteredUser {
  return 'username' in user
}

function GreetUser({ user }: { user: User }) {
  return isRegisteredUser(user) && <div>Hello {user.username}</div>
}
```

### assertion predicates
```ts
function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number!')
  }
}
function double(input: any): number {
  assertIsNumber(input)
  return input * 2 // type of `input` is definitely `number` now
}
```