
import './App.css';
import SideNav from './components/sideNav';

import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Class from './pages/class';
import ClassDetailCard from './components/classDetailCard';



function App() {
  return (
    <div className="App">
      <Router>
          <SideNav/>
          <Routes>
          <Route path="/classes" element={<Class/>} />
          <Route path="/class-detail" element={<ClassDetailCard/>} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
