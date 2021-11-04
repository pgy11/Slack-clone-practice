import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <h1>LoginPage</h1>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* React-Router -> Chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
