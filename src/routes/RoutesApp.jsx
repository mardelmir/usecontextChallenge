import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import MyJob from '../pages/MyJob'

const routesApp = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/profile', element: <Profile /> },
                { path: '/myjob', element: <MyJob /> }
            ]
        }
    ]
)

export default routesApp