```sh
npm install react-router-dom
```

`main.tsx`
```tsx
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

`App.tsx`
```tsx
import { Route, Routes, useParams, Link } from 'react-router-dom'

export function App() {
  return (
    <Routes>
      <Route path='/records' element={<RecordBrowser />} />
      <Route path='/records/:id' element={<RecordEditor />} />
    </Routes>
  )
}

export function RecordBrowser() {
  const { data, isLoading, error } = useRecords()
  return isLoading ? (
    <p>Loading...</p>
  ) : data.map((record) => (
    <div>
      <Link to={`records/${record.id}`}>
        {record.name}
      </Link>
    </div>
  ))
}

export function RecordEditor() {
  const { id } = useParams()
  const { data, isLoading, error } = useRecord(id!)

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Record id={id!} />
    </div>
  )
}
```