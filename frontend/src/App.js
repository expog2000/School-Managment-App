
import './App.css';
import SideNav from './components/sideNav';
import { BrowserRouter as Router } from 'react-router-dom';






function App() {
  return (
    <div className="App">
      <Router>
          <SideNav/>
      </Router>
      
    </div>
  );
}

export default App;
