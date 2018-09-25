import React from 'react';
import {render} from 'react-dom';
import './styles/index.css';
import store from './store'
import {init_client} from "./common/Api";
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppRoute from './pages/Layout/AppRoute'
import Layout from './pages/Layout/Layout'
import PageTest from './pages/PageTest';
import PageLayout from './pages/PageLayout';
import PageHome from './pages/PageHome';
import Page404 from './pages/Page404';
import registerServiceWorker from './registerServiceWorker';

init_client(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <AppRoute layout={Layout} exact path={"/layout"} component={PageLayout}/>
                        <AppRoute layout={Layout} exact path={"/test"} component={PageTest}/>
                        <AppRoute layout={Layout} exact path={"/"} component={PageHome}/>
                        <AppRoute layout={Layout}       path={"*"} component={Page404}/>
                    </Switch>
                </BrowserRouter>
            </Provider>,
            document.getElementById('root')
        )
    }
);

registerServiceWorker();
