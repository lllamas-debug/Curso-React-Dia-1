import './App.css'
import Layout from './components/Layout/Layout'
import TaskCard from './components/TaskCard/TaskCard'
import { Task } from './types'

function App() {
  const taskData: Task = {
    id: 1,
    title: 'Prueba',
    description: 'descripcion prueba',
    completed: true,
  }
  return (
    <>
      <div>
        <Layout>
          <TaskCard task={taskData} />
        </Layout>
      </div>
    </>
  )
}

export default App
