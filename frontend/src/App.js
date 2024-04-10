
import './App.css';
import SideNav from './components/sideNav';

import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Class from './pages/class';






function App() {
  return (
    <div className="App">
      <Router>
          <SideNav/>
          <Routes>
          <Route path="/classes" element={<Class/>} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
