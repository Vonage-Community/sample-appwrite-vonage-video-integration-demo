import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import Root from './components/Root'
import Login from './components/Login'
import Home from './components/Home'
import Logout from './components/Logout'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<RequireAuth><Home /></RequireAuth>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
