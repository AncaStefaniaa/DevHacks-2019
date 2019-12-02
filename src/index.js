import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import RootComp from "./RootComp.jsx";
import AuthLayout from "layouts/Auth.jsx";

ReactDOM.render(
  <RootComp/>
 ,
  document.getElementById("root")
);
