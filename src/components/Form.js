import React, { Component } from 'react'

export class Form extends Component {
// constructor
    constructor(props){
        super(props);

        this.initialState = {
            'name': '',
            'job': '',
        };

        this.state = this.initialState;
        
    }
    // dont know where to put handle change so I'll put here
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state); // use the function you were given by props and pass into that the current state which reflects the user input
        this.setState(this.initialState); // reset form i guess
    }
  render() {
      //destructuring
      const { name, job } = this.state;
      
    return (
      <form>
      <label>Name</label>
      <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={this.handleChange} />
      <label>Job</label>
      <input 
          type="text" 
          name="job" 
          value={job} 
          onChange={this.handleChange}/>
        <input 
          type="button" 
          value="obey" 
          onClick={this.submitForm}/>
  </form>
    )
  }
}

export default Form
