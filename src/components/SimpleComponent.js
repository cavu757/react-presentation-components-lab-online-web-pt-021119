import React, {Component} from 'react'

class SimpleComponent extends Component {
  constructor(props){
    super(props);

    this.state={
      mood: "happy"
    }
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>

    )
  }

  handleClick = () =>{
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy' ;
    this.setState({mood: newMood})
  }
}

export default SimpleComponent
