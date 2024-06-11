import { fireEvent, render } from '@testing-library/react'
import { TaskWithOutId } from '../../types'
import { TaskContext } from '../Context/TaskContext'
import CreateTaskForm from './CreateTaskForm'

describe('CreateTaskForm', () => {
  it('should add a task correctly', () => {
    const addSpy = vitest.fn()
    const { getByLabelText, getByText } = render(
      <TaskContext.Provider value={{ tasks: [], addTask: addSpy, updateTask: () => {} }}>
        <CreateTaskForm />
      </TaskContext.Provider>,
    )

    // Fill out the form
    const titleInput = getByLabelText('createTaskForm-title')
    const descriptionInput = getByLabelText('createTaskForm-description')
    const createButton = getByText('Create')

    expect(titleInput).toBeInTheDocument()
    expect(descriptionInput).toBeInTheDocument()
    expect(createButton).toBeInTheDocument()

    const newTask: TaskWithOutId = {
      title: 'new Task',
      description: 'new description',
      completed: false,
    }

    fireEvent.change(titleInput, { target: { value: newTask.title } })
    fireEvent.change(descriptionInput, { target: { value: newTask.description } })
    fireEvent.click(createButton)

    expect(addSpy).toHaveBeenCalledWith(newTask)
  })
})
