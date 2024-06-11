import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FilterContextProvider } from './components/Context/FilterContext.tsx'
import { TaskContextProvider } from './components/Context/TaskContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FilterContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </FilterContextProvider>
  </React.StrictMode>,
)
