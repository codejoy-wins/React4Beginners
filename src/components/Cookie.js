import React, { Component } from 'react'

export class Cookie extends Component {

    



  render() {
    const {prop_cookies, eat_cookies} = this.props;
    // const {eat} = this.props;
    // want to add an onClick to the button to trigger an event that affects the home state
    return (
      <div>
        <h1> {prop_cookies}     Cookies</h1>
        <button onClick={()=>eat_cookies(prop_cookies)}>Eat more cookies</button>
      </div>
    )
  }
}

export default Cookie
