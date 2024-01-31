### fetch graphql data
```ts
import { request } from 'graphql-request'
 
const fetcher = query => request('/api/graphql', query)
 
function App () {
  const { data, error } = useSWR(
    `{
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }`,
    fetcher
  )
  // ...
}
```

### pass variables
```ts
import { request } from 'graphql-request'
import useSWR from 'swr'
 
const fetcher = query => request('/api/graphql', query)

const FindMoviesByTitle = gql`{
  query FindMoviesByTitle($title: string!) {
    FindMoviesByTitle(title: $title) {
      releaseDate
      actors {
        name
      }
    }
  }
}`
 
function Movie({ partialTitle }) {
  const { data, error } = useSWR([
    FindMoviesByTitle, 
    { 
      title: partialTitle
    },
  ], fetcher)
  // ...
}
```

### mutations
https://graphql.wtf/episodes/58-graphql-queries-and-mutations-with-react-swr
https://supabase.github.io/pg_graphql/api/#insert