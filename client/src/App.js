import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Department from './pages/Department';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/department/:department_id' component={Department} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
