import React from 'react'
import { Task } from '../../types'
import TaskCard from '../TaskCard/TaskCard'

interface TaskListProps {
  tasks: Task[]
  filterText: string
}

const TaskList: React.FC<TaskListProps> = ({ tasks, filterText }) => {
  return (
    <>
      {tasks
        .filter((task) => task.title.includes(filterText))
        .map((task) => (
          <TaskCard key={`task-${task.id}`} task={task} />
        ))}
    </>
  )
}

export default TaskList
