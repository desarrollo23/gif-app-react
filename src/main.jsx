import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { GiftApp } from './GiftApp'
import { NumberListComponent } from './NumberList'
import { CounterApp } from './CounterApp'
import { ToDoListApp } from './ToDoListApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftApp />
    {/* <NumberListComponent numbers={[2,6,34,9,10]}/> */}
    {/* <CounterApp/> */}
    {/* <ToDoListApp/> */}
  </StrictMode>,
)
