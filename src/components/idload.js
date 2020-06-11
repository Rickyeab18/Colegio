import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import { RadioGroup, Radio } from 'react-mdl'
import loadArray from './loopArray'
import XMLParser from 'react-xml-parser';

class idload extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ciruc: '',
             text: ""
        }
    }

    

    handleCirucChange = event => {
        this.setState({
            ciruc: event.target.value
        })
    }

    showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) =>{
            const text = (e.target.result)
            console.log(text)
            //alert(text)
            var allText =  (e.target.result)
					this.setState({
						text: allText
					});
        };
        reader.readAsText(e.target.files[0])
    }


    render() {
        return (
            
            <div>
                <div>
                <input type="file" onChange={(e) => this.showFile(e)}/>
                </div>
                <form>
                    <div>
                        <label>CI/RUC</label>
                        <input 
                        type='text' 
                        value={this.state.ciruc} 
                        onChange={this.handleCirucChange}
                        />
                    </div>
                    <button onClick={()=>{window.location = '/landingpage/32'}} >
                            Buscar
                    </button> 
                </form> 
                <div style={{width: '100%', margin: 'auto'}}>
                 {/*    <Grid className="demo-grid-ruler">
                        <Cell col={2}>
                        
                        </Cell>
                        <Cell col={12}>1</Cell>
                    </Grid> */}
                    <RadioGroup container="ul" childContainer="li" name="demo2" value="opt2">
                            <Radio value="opt1" ripple>Ripple option</Radio>
                            <Radio value="opt1" ripple>Ripple option</Radio>
                            <Radio value="opt1" ripple>Ripple option</Radio>
                            <Radio value="opt1" ripple>Ripple option</Radio>
                            <Radio value="opt1" ripple>Ripple option</Radio>
                            <Radio value="opt2">Other option</Radio>
                            <Radio value="opt2">Other option</Radio>
                            <Radio value="opt2">Other option</Radio>
                            <Radio value="opt2">Other option</Radio>
                            <Radio value="opt2">Other option</Radio>
                        </RadioGroup>
                </div>
                <div>
                <loadArray />
                    {/* { xml = new XMLParser().parseFromString(text)}
                    {console.log(xml)} */}
                    {/* {XMLParser.parseFromString("/Users/ricardoa/cjewebpage/src/PadreHijoData.xml")} */}
               {/*  {xml.getElementsByTagName('RepresentanteId')} */}
                }
                </div>
            </div>
        )
    }
}

export default idload
