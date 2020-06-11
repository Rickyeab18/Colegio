import React, { Component } from 'react';
import { Button } from './Button';
import LandingPage from './landingpage';
import { Textfield } from 'react-mdl';
import { matchPath } from 'react-router-dom';
import getCustumerData from './getClientData';

class IdentifiedId extends Component {
    
    render(){
        return(
            <div>
                {/* <h1>IdentifiedId Page</h1> */}
            {/* Numeric textfield */}
             <Textfield
                id="ciruc"
                onChange={() => {}}
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Input is not a number!"
                label="CI/RUC"
                style={{width: '200px'}}
                //value={this.state.value}
                //onChange={this.handleChange}
            />
            <Button onClick={()=>{window.location = '/landingpage/32'}} 
            type="button"
            buttonStyle="btn--primary--outline" 
            buttonSize="btn--medium"
            >
                Siguiente
            </Button> 
            <getCustumerData name="asadsa"/>
            </div>
            /* <div style={{width: '80%', margin: 'auto'}}>
            <Grid className="demo-grid-ruler">
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
            </Grid>
            <Grid className="demo-grid-1">
                <Cell col={4}>4</Cell>
                <Cell col={4}>4</Cell>
                <Cell col={4}>4</Cell>
            </Grid>
            <Grid className="demo-grid-2">
                <Cell col={6}>6</Cell>
                <Cell col={4}>4</Cell>
                <Cell col={2}>2</Cell>
            </Grid>
            <Grid className="demo-grid-3">
                <Cell col={6} tablet={8}>6 (8 tablet)</Cell>
                <Cell col={4} tablet={6}>4 (6 tablet)</Cell>
                <Cell col={2} phone={4}>2 (4 phone)</Cell>
            </Grid>
        </div> */
        )
    }
}

export default IdentifiedId;