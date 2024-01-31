### `typeof` guard
```ts
function double(item: string | number) {
  if (typeof item === "string") {
    return item.concat(item);
  } else {
    return item + item;
  }
}
```

### `instanceof` guard
```ts
class User {
  email: string
}
class RegisteredUser extends User {
  username: string
}
function getUsername(user: User) {
  if (user instanceof RegisteredUser) {
    return user.username
  }
  return null
}
```

### `in` guard
```ts
class User {
  email: string
}
class RegisteredUser extends User {
  username: string
}
function getUsername(user: User) {
  if ('username' in user) {
    return user.username
  }
  return null
}
```