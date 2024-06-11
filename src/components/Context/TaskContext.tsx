import { createContext, useReducer } from 'react'
import { Task, TaskWithOutId } from '../../types'

interface TaskContextType {
  tasks: Task[]
  addTask: (task: TaskWithOutId) => void
  updateTask: (task: Task) => void
}

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
})

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

const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  const addTask = (task: TaskWithOutId) => {
    dispatch({ type: TaskAction.CREATE, task })
  }

  const updateTask = (task: Task) => {
    const taskId = task.id
    dispatch({ type: TaskAction.UPDATE, taskId })
  }

  return <TaskContext.Provider value={{ tasks, addTask, updateTask }}>{children}</TaskContext.Provider>
}
export { TaskContext, TaskContextProvider }
