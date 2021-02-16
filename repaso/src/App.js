// import Counter from './components/class/Counter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './components/class/Counter';
import ListaCursos from './components/hooks-api/ListaCursos';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/classes' component={Counter} />
          <Route path='/hooks-api' component={ListaCursos} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
