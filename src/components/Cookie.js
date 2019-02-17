import React, { Component } from 'react'

export class Cookie extends Component {

  render() {
      //es6 destructuring
    const {prop_cookies, eat_cookies, btn} = this.props;
    // want to add an onClick to the button to trigger an event that affects the home state
    // I'm practicing my own components with different methods
    return (
      <div>
        <h1> {prop_cookies}     Cookies</h1>
        <button onClick={()=>eat_cookies(prop_cookies)}>Eat more cookies {btn}</button>
        <div id="output"></div>
      </div>
    )
  }
}

export default Cookie