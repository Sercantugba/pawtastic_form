import './App.css';
import React, { Component } from 'react'



// Create a component class with constructor

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {name: '', gender: '', breed: '', birthday: ''}

// create a way to pass user input to to other components

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

// create a way to register an event change

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`Thank you for submitting info for: ${this.state.name},${this.state.gender},${this.state.breed},${this.state.birthday}`);
    event.preventDefault();

  } 

  render() {
    return (
      <div id='label-container'>
        <div id='label-child'>
        <img src="https://static.wixstatic.com/media/3769aa_a3246839636b45658f434a688ddfd3f2.jpg/v1/fill/w_488,h_470,al_c,q_80,usm_0.66_1.00_0.01/3769aa_a3246839636b45658f434a688ddfd3f2.webp"alt="paw logo"/>
        <h1>Yay, we love dogs! Give Us the basics about your pup</h1>
         <form onSubmit={this.handleChange}>
           <div>
           </div>

        {/* create a component for each label, 
        use component instance in App.js div instead of HTML elements*/}

        <label>  
          Name: 
          <input  name="name" type="text"  value={this.state.name} onChange={event => this.setState({name:event.target.value})}/>
        </label>
      </form>
      <form onSubmit={this.handleChange}>
      <label>  
          Gender: 
          <input  name="gender" type="text"  value={this.state.gender} onChange={event => this.setState({gender:event.target.value})}/>
        </label>
      </form>
      <form onSubmit={this.handleChange}>
      <label>  
          Breed: 
          <input name="breed" type="text"  value={this.state.breed} onChange={event => this.setState({breed:event.target.value})}/>
        </label>
      </form>
      <form onSubmit={this.handleChange}>
      <label>  
          Birthday: 
          <input name="birtday" type="date"  value={this.state.birthday} onChange={event => this.setState({birthday:event.target.value})}/>
        </label>
      </form>
      <br></br>
                <input type="submit"  value="Submit" onClick={this.handleSubmit}/>
      

     </div>

      </div>
    );
  }
}
