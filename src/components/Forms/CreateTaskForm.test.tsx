import { fireEvent, render } from '@testing-library/react'
import { TaskContextProvider } from '../Context/TaskContext'
import CreateTaskForm from './CreateTaskForm'

describe('CreateTaskForm', () => {
  it('should add a task correctly', () => {
    const { getByLabelText, getByText } = render(
      <TaskContextProvider>
        <CreateTaskForm />
      </TaskContextProvider>,
    )

    // Fill out the form
    const titleInput = getByLabelText('createTaskForm-title')
    const descriptionInput = getByLabelText('createTaskForm-description')
    const createButton = getByText('Create')

    expect(titleInput).toBeInTheDocument()
    expect(descriptionInput).toBeInTheDocument()
    expect(createButton).toBeInTheDocument()

    fireEvent.change(titleInput, { target: { value: 'New Task' } })
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } })
    fireEvent.click(createButton)
  })
})
