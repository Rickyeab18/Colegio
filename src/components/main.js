import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import IdentifiedId from './identifiedid';
import OperationData from './operationdata';
import ReadFile from './readfile';
import TextReader from './textreader';
import XMLData from './xml_data';
import IdLoad from './idload';
import AddField from './addfields';

const Main=() =>(
    <Switch>
        <Route exact path="/landingpage/:id" component={LandingPage} />
        <Route path="/identifiedid" component={IdentifiedId} />
        <Route path="/operationdata" component={OperationData} />
        <Route path="/readfile" component={ReadFile} />
        <Route path="/textreader" component={TextReader} />
        <Route path="/xml_data" component={XMLData} />
        <Route path="/idload" component={IdLoad} />
        <Route path="/addfields" component={AddField} />
    </Switch>
)

export default Main;