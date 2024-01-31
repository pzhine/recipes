### basic fetch
```ts
import useSWR from 'swr'
import fetch from 'unfetch'
 
const fetcher = url => fetch(url).then(r => r.json())
 
function Profile () {
  const { data, error, isLoading } = useSWR('/api/user/123', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 
  // render data
  return <div>hello {data.name}!</div>
}
```
