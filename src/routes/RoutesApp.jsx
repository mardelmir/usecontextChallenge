import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import MyJob from '../pages/MyJob'
import { useTheme } from "../themes/ThemeContext"

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

// Corrección clase

// function RoutesApp() {
//     const { theme } = useTheme()
//     return (
//         <Router>
//             <section className={`App ${theme}`}>
//                 <div className='content'>
//                     <header>
//                         <nav>
//                             <Link to='/'>Home</Link>
//                             <Link to='/profile'>Profile</Link>
//                             <Link to='/myjob'>My Job</Link>
//                         </nav>
//                     </header>
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/profile' element={<Profile />} />
//                         <Route path='/myjob' element={<MyJob />} />
//                     </Routes>
//                 </div>
//             </section>
//         </Router>
//     )
// }

// function RoutesApp() {
//     const { theme } = useTheme()
//     return (
//         <Router>
//             <section className={`App ${theme}`}>
//                 <div className='content'>
//                     NOTA: function Header({children})
//                     <Header>
//                         <Button />
//                     </Header>
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/profile' element={<Profile />} />
//                         <Route path='/myjob' element={<MyJob />} />
//                     </Routes>
//                 </div>
//             </section>
//         </Router>
//     )
// }