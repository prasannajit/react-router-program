import React from 'react';
import { useParams, Route } from 'react-router';
import Comments from './Comments';
const QuoteDetail = ()=>{
    const params=useParams();
    console.log(params.quoteId);
    return (
        <React.Fragment>
            <Route path={`/quotes/{params.quoteId}/comments`}>
                <Comments></Comments>
            </Route>
            Quote Detail
        </React.Fragment>
    )
};

export default QuoteDetail;