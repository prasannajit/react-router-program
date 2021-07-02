import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
const App = () => {
    console.log("heelo1")
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/quotes'></Redirect>
                </Route>
                <Route path='/quotes' exact>
                    <AllQuotes />
                </Route>
                <Route path='/quotes/:quoteId'>
                    <QuoteDetail />
                </Route>
                <Route path='/new-quote'>
                    <NewQuote />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>

    );
}

export default App;