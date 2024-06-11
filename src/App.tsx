import { useContext } from 'react'
import './App.css'
import { FilterContext } from './components/Context/FilterContext'
import { TaskContext } from './components/Context/TaskContext'
import CreateTaskForm from './components/Forms/CreateTaskForm'
import CheckBoxInput from './components/Input/CheckBoxInput'
import SearchInput from './components/Input/SearchInput'
import Layout from './components/Layout/Layout'
import ListWithFilter from './components/Lists/TaskList'
import TaskCard from './components/TaskCard/TaskCard'
import { Task } from './types'

function App() {
  const { tasks } = useContext(TaskContext)
  const { filterText, filterBoolean, setFilterText, setFilterBoolean } = useContext(FilterContext)

  return (
    <div>
      <Layout>
        <SearchInput label="Busqueda: " value={filterText} onValueChange={(texto) => setFilterText(texto)} />
        <CheckBoxInput
          label="Mostrar solo completadas"
          value={filterBoolean}
          onValueChange={(value) => setFilterBoolean(value)}
        />
        <ListWithFilter
          items={tasks}
          getKey={(task: Task) => task.id}
          renderItem={(task: Task) => <TaskCard task={task} />}
        />
        <CreateTaskForm />
      </Layout>
    </div>
  )
}

export default App
