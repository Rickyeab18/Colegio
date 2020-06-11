import React, { Component } from 'react'

class readfile extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
			text: ""
		};
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
/* 
	readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
	};
 */

    render() {
        return (
            <div>
                <input type="file" onChange={(e) => this.showFile(e)}/>
                {this.state.text.split("\n").map((item, key) => {
					return <span key={key}>{item}<br /></span>;
				})}
            </div>
        )
    }
}

export default readfile;