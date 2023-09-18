import './App.css'
import MainPage from './pages/MainPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <MainPage />
  }])

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
