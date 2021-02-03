import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import PhotoDetails from '../PhotoDetails/PhotoDetails';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PrivateRoute from '../PrivateRouter/PrivateRouter';

const MyRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PhotoGallery} />
                <Route exact path="/login" component={Login} />

                <PrivateRoute exact path="/:caption" component={PhotoDetails} />
                {/* <Route exact path="*" render={() => <h1>hello</h1>} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default MyRoute;