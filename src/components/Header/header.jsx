import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  
  render() {
    return (
      <h2 style={{ textAlign: 'center' }}>TO DO LIST APPLICATION</h2>
    )
  }
}
