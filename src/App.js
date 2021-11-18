import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { getCookie } from "./cookie";
import { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const cookie = getCookie("googleToken");
    if (cookie) {
      dispatch({
        type: "SET_USER",
        user: cookie,
      });
    }
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
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
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
