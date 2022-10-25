import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Home } />
      <Route exact path="/projects" component={Projects} />
      <Route path="/about" component={ About } />
      <Route path="/contact" component={ Contact } />
    </div>
  );
}

export default App;
