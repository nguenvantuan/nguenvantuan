import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Scholarships from './pages/Scholarships';
import Schools from './pages/Schools';
import FieldsOfStudy from './pages/FieldsOfStudy';
import Rankings from './pages/Rankings';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/schools" component={Schools} />
          <Route path="/fields-of-study" component={FieldsOfStudy} />
          <Route path="/rankings" component={Rankings} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;