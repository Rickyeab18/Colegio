import React, { Component } from 'react'
/* import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedsButton';
// import RadioButton from 'material-ui/RadioButton'; */
import { Layout, Header, Navigation, TextField, Drawer, Content} from 'react-mdl';

class addfields extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             ciruc: '',
             text: "",
             repData: []
        }
    }

    addData(){
        this.setState({repData: [...this.state.repData, '' ]})
    }

    searchData(){

    }

    handleCirucChange = event => {
        this.setState({
            ciruc: event.target.value
        })
    }

    handleFieldChange(e,index){
        this.state.repData[index] = e.target.value

        this.setState({repData: this.state.repData})
    }

    render() {

     

        return (
            <div>
                <h1>Consulta de Obligaciones</h1>

                <div>
                    <form style={{margin: '3.25rem'}}>
                        <label>CI/RUC</label>
                        <input style={{margin: '0.5rem'}}
                            type='text' 
                            value={this.state.ciruc} 
                            onChange={this.handleCirucChange}
                        />
                    
                       {/*  <TextField 
                            hintText="Ingrese su numero de identificacion"
                            floatingLabelText="CI/RUC"
                            onChange={this.handleCirucChange}
                            value={this.state.ciruc}
                        /> */}
                       
                        <button style={{margin: '.5rem'}} onClick={(e)=>this.searchData(e)}>Buscar</button>
                        </form>
                </div>

                {
                    this.state.repData.map((repField, index)=>{
                        return(
                            <div key={index} style={{margin: '.5rem'}}>

                                <input onChange={(e)=>this.handleFieldChange(e, index)} value={repField} />
                            </div>
                        )
                    })
                }
                <hr />
                <button style={{margin: '1rem'}} onClick={(e)=>this.addData(e)}>Add Field</button>

                <hr />

                

            </div>
             
        )
    }
}

export default addfields
