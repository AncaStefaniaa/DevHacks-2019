import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
export default function RootComp(props){
    const [user,setUser] = React.useState("andrei")
const UserContext = React.createContext("plm");
return(
    <>
     <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/auth" />

    </Switch>
  </BrowserRouter>
    </>
)
}