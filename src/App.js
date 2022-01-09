import React from "react";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";
import Navigation from "./components/Navigation";
import "./styles/App.scss";
const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Navigation />
      </div>
      {/* <Routes /> */}
    </ConnectedRouter>
  );
};

// App.propTypes = {
//   history: PropTypes.object,
// };

export default App;
