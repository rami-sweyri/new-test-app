import React, { Suspense, lazy } from "react";

import { Route, Switch } from "react-router-dom";

const About = lazy(() => import("../pages/About"));
const Store = lazy(() => import("../pages/Store"));
const Broadcast = lazy(() => import("../pages/Broadcast"));
const AllCourses = lazy(() => import("../pages/AllCourses"));
const SingleCourse = lazy(() => import("../pages/SingleCourse"));
const Reservation = lazy(() => import("../pages/Reservation"));

const Routes = () => {
  return (
    <Suspense
      fallback={
        <div
          className="w-full flex justify-center items-start"
          style={{ minHeight: 500 }}
        >
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/broadcast" component={Broadcast} />
        <Route exact path="/courses" component={AllCourses} />
        <Route exact path="/courses/:id" component={SingleCourse} />
        <Route exact path="/reservation" component={Reservation} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
