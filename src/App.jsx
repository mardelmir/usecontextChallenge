import './App.css';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './themes/ThemeContext';
import { Outlet } from 'react-router-dom';

function App() {
  const { theme } = useTheme()
  return (
    <>
      <div className={`App ${theme}`}>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;

// Corrección clase

// function App() {
// return(
//   <RoutesApp />
// )
// }