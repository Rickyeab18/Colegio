import React, { Component } from 'react'

import xmlData from '/Users/ricardoa/cjewebpage/src/PadreHijoData.xml';
import XMLParser from 'react-xml-parser';

class xml_data extends Component {

   /*  constructor(props) {
		super(props);

		this.state = {
            text: "",
            file: "./public/PadreHijoData.xml"
            
		};
    }

    readTextFile = file => {
        const rawFile = new XMLHttpRequest();
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status == 0)) {
                const parser = new DOMParser();
                const xml = parser.parseFromString(rawFile.response, 'xmldata');
                this.setState({
                    text: xml
                });
            }
        }; 
        rawFile.open("GET", this.xml_data.file[0], false);
};*/
    
    render() {
        return (
            <div>
               { xmlData }
                {/* {new XMLParser().parseFromString(xmlData)} */}
               {/*  {this.state.text} */}
            </div>
        )
    }
}

export default xml_data
