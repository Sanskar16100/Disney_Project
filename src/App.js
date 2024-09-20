
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <Header></Header>
    {/* Hello we'll build the Disney + clone🚀 */}
    <Routes>
      <Route exact path='/' element=<Login></Login>></Route>
      <Route path='/home' element=<Home></Home>></Route>
      {/* <Route path='/detail/:id' element={} */}
    </Routes>
     
    </div>
  );
}

export default App;
 