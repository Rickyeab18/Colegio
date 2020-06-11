import React from "react";


/*
	Read a text file and out put the content.
	
	Example Usage:
	var myTxt = require("./myTxt.txt");
	...
	<TextFileReader
		txt={myTxt}
	/>
 */
class TextFileReader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            text: "",
            file: "./public/PadreHijoData.xml"
            
		};
	}

	componentDidMount() {
		this.readTextFile(this.props.txt);
	}

	readTextFile = file => {
		const pathFile = "./public/PadreHijoData.xml"
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", pathFile, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					console.log(allText);
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
	};

	render() {
		return (
			<div>
				{this.state.text.split("\n").map((item, key) => {
					return <span key={key}>{item}<br /></span>;
				})}
			</div>
		);
	}
}

export default TextFileReader;