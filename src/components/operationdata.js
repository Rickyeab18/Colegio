import React, { Component } from 'react'

class operationdata extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ciruc: '',
             comments: '',
             topic: ''
        }
    }
    
    handleCirucChange = event => {
        this.setState({
            ciruc: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    } 

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    } 

    render() {
        return (
             <form>
                <div>
                    <label>CI/RUC</label>
                    <input 
                    type='text' 
                    value={this.state.ciruc} 
                    onChange={this.handleCirucChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={ this.handleCommentsChange }
                    >
                    </textarea>
                </div>
                <div>
                    <label>Combo</label>
                    <select
                        value={this.state.topic}
                        onChange={ this.handleTopicChange }
                    >
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
            </form> 
          /*   <div> Hello </div> */
         )
    }
}

export default operationdata
