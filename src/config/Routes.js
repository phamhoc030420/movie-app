import React from "react";
import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home";
import Login from "../components/dangNhap/Login";
const Routes = () => {
    return (
        <Switch>
            <Route path='/'
                exact
                component={Home}
            />
        </Switch>
    )
}
export default Routes;