import './App.css';
import React, { Component } from 'react'
// import { DogName } from './components/DogName';
// import { DogBreed } from './components/DogBreed';
// import { DogDob } from './components/DogName';


          /* Create a component class */
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''}

          /* create a way to pass user input to to other components */

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

            /* create a way to register an event change */

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`Thank you for submitting info for: ${this.state.value}`);
    event.preventDefault();

  } 

  render() {
    return (
      <div id='label-container'>
        <div id='label-child'>
        <img src="https://i.dlpng.com/static/png/6103810-dog-paw-paw-prints-transparent-background-png-clipart-hiclipart-black-paw-print-png-800_750_preview.png"alt="paw logo"/>
        <h1>Yay, we love dogs! Give Us the basics about your pup.</h1>
         <form onSubmit={this.handleChange}>
           <div>
           </div>

        {/* create a component for each label, 
        use component instance in App.js div instead of HTML elements*/}

        <label>  
          Name: 
          <input type="text"  value={this.state.value} onChange={this.handleChange}/>
        </label>
      </form>
      <form onSubmit={this.handleChange}>
      <label>  
          Breed: 
          <input type="text"  value={this.state.value} onChange={this.handleChange}/>
        </label>
      </form>
      <form onSubmit={this.handleChange}>
      <label>  
          Birthday: 
          <input type="date"  value={this.state.value} onChange={this.handleChange}/>
        </label>
      </form>
                <input type="submit"  value="Submit" onClick={this.handleSubmit}/>

     </div>

      </div>
    );
  }
}
