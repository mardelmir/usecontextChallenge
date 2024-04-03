import Header from '../components/Header'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import MyJob from '../pages/MyJob'
import { createBrowserRouter } from "react-router-dom"

const routesApp = createBrowserRouter(
    [
        {
            path: '/',
            element: <Header />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/profile', element: <Profile /> },
                { path: '/myjob', element: <MyJob /> }
            ]
        }
    ]
)

export default routesApp