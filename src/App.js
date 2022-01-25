import React from "react";
import { ConnectedRouter } from "connected-react-router";
import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
import "./styles/App.scss";
const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Navigation />
        <main>
          <div className="container">
            <Cards />
            <Sidebar />
          </div>
        </main>
      </div>
    </ConnectedRouter>
  );
};

// App.propTypes = {
//   history: PropTypes.object,
// };

export default App;
