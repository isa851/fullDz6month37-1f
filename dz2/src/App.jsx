import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


function App() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos').then(res => res.data)
  })
  return (
    <div>
      {data?.map(todo => (
        <div key={todo.id}>
          <h1>{todo.id}</h1>
          <h1>{todo.title}</h1>
          <input type="checkbox" checked={todo.completed} />
        </div>
      ))}
    </div>
  )
}

export default App