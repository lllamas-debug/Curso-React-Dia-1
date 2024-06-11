import { FC, useContext } from 'react'
import { Task } from '../../types'
import { TaskContext } from '../Context/TaskContext'
import './TaskCard.css'

interface TaskCardProps {
  task: Task
}

const TaskCard: FC<TaskCardProps> = (props) => {
  const { updateTask } = useContext(TaskContext)

  return (
    <div className="taskCard">
      <input type="checkbox" checked={props.task.completed} onChange={() => updateTask(props.task)} />
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
