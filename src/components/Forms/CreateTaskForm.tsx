import { FC, FormEvent, useContext, useState } from 'react'
import { TaskWithOutId } from '../../types'
import { TaskContext } from '../Context/TaskContext'
import Input from '../Input/Input'

interface CreateTaskFormProps {}

const CreateTaskForm: FC<CreateTaskFormProps> = () => {
  const { addTask } = useContext(TaskContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const CreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const task: TaskWithOutId = {
      title: taskTitle,
      description: taskDescription,
      completed: false,
    }

    addTask(task)
  }

  return (
    <form onSubmit={(e) => CreateTask(e)}>
      <Input
        label={'createTaskForm-title'}
        value={taskTitle}
        onValueChange={(value: string) => {
          setTaskTitle(value)
        }}
      />
      <Input
        label={'createTaskForm-description'}
        value={taskDescription}
        onValueChange={(value: string) => {
          setTaskDescription(value)
        }}
      />
      <button>Create</button>
    </form>
  )
}

export default CreateTaskForm
