import './App.css';
import { ThemeProvider } from './themes/ThemeContext';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <div className='App'>
          <Button />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
