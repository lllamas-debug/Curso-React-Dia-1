import { useReducer, useState } from 'react'
import './App.css'
import CreateTaskForm from './components/Forms/CreateTaskForm'
import CheckBoxInput from './components/Input/CheckBoxInput'
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

enum TaskAction {
  'CREATE',
  'UPDATE',
}

interface TaskCreateAction {
  type: TaskAction.CREATE
  task: TaskWithOutId
}

interface TaskUpdateAction {
  type: TaskAction.UPDATE
  taskId: number
}

type TaskReducerAction = TaskCreateAction | TaskUpdateAction

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [hideCompleted, setHideCompletedValue] = useState<boolean>(false)
  const [taskList, setTaskList] = useState<Task[]>(initialTasks)

  const taskReducer = (state: Task[], action: TaskReducerAction) => {
    switch (action.type) {
      case TaskAction.CREATE:
        // eslint-disable-next-line no-case-declarations
        const newTask: Task = {
          id: state.length + 1,
          ...action.task,
          completed: false,
        }
        return [...state, newTask]
      case TaskAction.UPDATE:
        return state.map((task) => (task.id === action.taskId ? { ...task, completed: !task.completed } : task))
    }
  }

  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  return (
    <>
      <div>
        <Layout>
          <SearchInput label="prueba" value={inputValue} onValueChange={(texto) => setInputValue(texto)} />
          <CheckBoxInput
            label="Mostrar solo completadas"
            value={hideCompleted}
            onValueChange={(value) => setHideCompletedValue(value)}
          />
          <ListWithFilter
            filterText={inputValue}
            filterBoolean={hideCompleted}
            items={tasks}
            getKey={(task: Task) => task.id}
            filterByText={(task: Task, text) => (text ? task.title.includes(text) : true)}
            filterByBoolean={(task: Task, bool) => (bool ? task.completed == bool : true)}
            renderItem={(task: Task) => (
              <TaskCard
                task={task}
                changeCompletedStatus={() => dispatch({ type: TaskAction.UPDATE, taskId: task.id })}
              />
            )}
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
