import { FC } from 'react'
import { Task } from '../../types'
import './TaskCard.css'

interface TaskCardProps {
  task: Task
  changeCompletedStatus: (taskId: number) => void
}

const TaskCard: FC<TaskCardProps> = (props) => {
  return (
    <div className="taskCard">
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={() => props.changeCompletedStatus(props.task.id)}
      />
      <h3>Task {props.task.id}</h3>
      <label>title: </label>
      <h4>{props.task.title}</h4>
      <br />
      <label>Description: </label>
      <h5>{props.task.description}</h5>
      <br />
    </div>
  )
}

export default TaskCard
