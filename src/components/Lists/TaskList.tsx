import React from 'react'
import { Task } from '../../types'
import TaskCard from '../TaskCard/TaskCard'
import './TaskList.css'

interface TaskListProps {
  tasks: Task[]
  filterText: string
}

const TaskList: React.FC<TaskListProps> = ({ tasks, filterText }) => {
  return (
    <ul className="taskList">
      {filterText && <p>filtrando por: {filterText}</p>}
      {tasks
        .filter((task) => task.title.includes(filterText))
        .map((task) => (
          <li key={`li-task-${task.id}`}>
            <TaskCard key={`task-${task.id}`} task={task} />
          </li>
        ))}
    </ul>
  )
}

export default TaskList
