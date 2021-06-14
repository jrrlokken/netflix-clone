import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Loading from "../loading/Loading";
import { useSelector } from "react-redux";

function Layout() {
  const loading = useSelector((state) => state.loading);

  return (
    <>
      <Router>
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* End Home Route */}
          {/* Login Route */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* End Login Route */}
        </Switch>
      </Router>
      {loading.isLoadingShown && <Loading />}
    </>
  );
}

export default Layout;
