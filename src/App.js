// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {Home,About ,Contact,Error, LogIn} from './components'

function App() {
  return (
    <div id='main' className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/LogIn' element={<LogIn/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
