import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./core/Home";
import { Signup } from "./user/Signup";
import { Signin } from "./user/Signin";
import { AdminRoute } from "./auth/helper/AdminRoutes";
import { PrivateRoute } from "./auth/helper/PrivateRoutes";
import { UserDashBoard } from "./user/UserDashBoard";
import { AdminDashBoard } from "./user/AdminDashBoard";
import { AddMovie } from "./admin/AddMovie";
import BookTicket from "./user/BookTicket";
import { ViewTickets } from "./user/ViewTickets";
import { ResetTicket } from "./user/ResetTicket";
import { UserTicket } from "./user/UserTicket";
import { Confirm } from "./user/Confirm";
import { CancelTicket } from "./user/CancelTicket";
import { AdminCancelTicket } from "./user/AdminCancelTicket";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Signup} />
        <Route path="/login" exact component={Signin} />
        <PrivateRoute path="/bookTicket" exact component={BookTicket} />
        <PrivateRoute path="/user/dashBoard" exact component={UserDashBoard} />
        <PrivateRoute
          path="/user/ticket/userTicket"
          exact
          component={UserTicket}
        />
        <PrivateRoute path="/ticket/confirmTicket" exact component={Confirm} />
        <PrivateRoute
          path="/ticket/cancelTicket"
          exact
          component={CancelTicket}
        />

        <AdminRoute path="/admin/dashBoard" exact component={AdminDashBoard} />
        <AdminRoute path="/admin/create/movie" exact component={AddMovie} />
        <AdminRoute
          path="/admin/ticket/closedTicket"
          exact
          component={ViewTickets}
        />
        <AdminRoute
          path="/admin/ticket/cancelTicket"
          exact
          component={AdminCancelTicket}
        />

        <AdminRoute
          path="/admin/ticket/resetTicket"
          exact
          component={ResetTicket}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
