import { useState } from 'react'
import './App.css'
import SearchInput from './components/Input/SearchInput'
import Layout from './components/Layout/Layout'
import TaskList from './components/Lists/TaskList'
import { Task } from './types'

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Prueba',
    description: 'descripcion prueba',
    completed: true,
  },
  {
    id: 2,
    title: 'Prueba 2',
    description: 'descripcion prueba 2',
    completed: false,
  },
]

function App() {
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <>
      <div>
        <Layout>
          <SearchInput label="prueba" value={inputValue} onChange={(texto) => setInputValue(texto)} />
          <TaskList tasks={initialTasks} filterText={inputValue} />
        </Layout>
      </div>
    </>
  )
}

export default App
