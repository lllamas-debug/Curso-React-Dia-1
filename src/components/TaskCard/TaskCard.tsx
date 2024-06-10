import { FC } from 'react'
import { Task } from '../../types'
import './TaskCard.css'

interface TaskCardProps {
  task: Task
}

const TaskCard: FC<TaskCardProps> = (props) => {
  return (
    <div className="taskCard">
      <h3>Task {props.task.id}</h3>
      <label>title: </label>
      <span>{props.task.title}</span>
      <br />
      <label>Description: </label>
      <span>{props.task.description}</span>
      <br />
      <label>Completed: </label>
      <span>{props.task.completed ? '✔' : '❌'}</span>
    </div>
  )
}

export default TaskCard
