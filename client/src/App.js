import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import CreateView from "./pages/CreateView"
import DashBoard from "./pages/DashBoard";
import DetailView from "./pages/DetailView"
import React from "react"

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/info/:id" children={<DetailView />} />
            <Route path="/create" children={<CreateView />} />
            <Route path="/" children={<DashBoard />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
