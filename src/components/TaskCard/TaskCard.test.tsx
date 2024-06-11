import { RenderResult, render } from '@testing-library/react'
import { Task } from '../../types'
import TaskCard from './TaskCard'

describe('TaskCard', () => {
  let task: Task
  let renderedTask: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>

  beforeEach(() => {
    task = { id: 1, title: 'title', description: 'description', completed: true }
    renderedTask = render(<TaskCard task={task} />)
  })

  it('should render the component', () => {
    const { container } = renderedTask
    expect(container.firstChild).not.toBeNull()
  })

  it('should render the title of the task', () => {
    const { getByText } = renderedTask

    expect(getByText('title')).toBeInTheDocument()
  })

  it('should render the description of the task', () => {
    const { getByText } = renderedTask

    expect(getByText('description')).toBeInTheDocument()
  })

  it('should render the id of the task', () => {
    const { getByText } = renderedTask

    expect(getByText('Task 1')).toBeInTheDocument()
  })

  it('should not render the component if task is null', () => {
    task.completed = false
    const { container } = render(<TaskCard task={task} />)
    expect(container.firstChild).not.toBeChecked()
  })

  it('should render the completed status of the task', () => {
    const { getByRole } = renderedTask

    expect(getByRole('checkbox')).toBeChecked()
  })
})
