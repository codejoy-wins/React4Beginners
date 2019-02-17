import React, { Component } from 'react'

export class Footer extends Component {
    
  render() {
    const mySty = {
        "background": "#fff",
        "color": "#0f0",
        "padding": "4px",
        "display": "inline-block"
    }
    return (
      <div style={mySty}>
        <a href="https://www.maxjann.com">Jann Software</a>
      </div>
    )
  }
}

export default Footer
