import { useCallback, useState } from 'react'
import './App.css'
import CreateTaskForm from './components/Forms/CreateTaskForm'
import SearchInput from './components/Input/SearchInput'
import Layout from './components/Layout/Layout'
import ListWithFilter from './components/Lists/TaskList'
import TaskCard from './components/TaskCard/TaskCard'
import { Task, TaskWithOutId } from './types'

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
  {
    id: 3,
    title: 'Prueba 3',
    description: 'descripcion prueba 3',
    completed: true,
  },
]

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [taskList, setTaskList] = useState<Task[]>(initialTasks)
  const changeCompletedStatus = useCallback((taskId: number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
    )
  }, [])

  return (
    <>
      <div>
        <Layout>
          <SearchInput label="prueba" value={inputValue} onValueChange={(texto) => setInputValue(texto)} />
          <ListWithFilter
            filterText={inputValue}
            items={taskList}
            getKey={(task: Task) => task.id}
            filterByText={(task: Task, text) => (text ? task.title.includes(text) : true)}
            renderItem={(task: Task) => <TaskCard task={task} changeCompletedStatus={changeCompletedStatus} />}
          />
          <CreateTaskForm
            addTask={(task: TaskWithOutId) => {
              const newTask: Task = {
                id: 10,
                ...task,
              }
              setTaskList([...taskList, newTask])
            }}
          />
        </Layout>
      </div>
    </>
  )
}

export default App
