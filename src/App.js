import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import { Nav } from './components/Nav';
import MyTabs from './screens/Ex';
import Dash from './screens/Dash';
import MenuComponent from './screens/Ex';




function App() {
  return (
    <div><Nav />
      <Routes>
        <Route path='/' element={<Dash />}></Route>
        <Route path='/a' element={<MenuComponent />}></Route>

      </Routes>
    </div>
  );
}

export default App;
