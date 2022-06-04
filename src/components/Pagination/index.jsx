import React, { Component } from 'react'
import './style.css'

export default class Pagination extends Component {
  render() {
    return (
      <div className='panigation-wrapper'>
        <span className='btn'>{'<'}</span>
        <span className='btn btn--active'>1</span>
        <span className='btn'>2</span>
        <span className='btn'>3</span>
        <span className='btn'>{'>'}</span>
      </div>
    )
  }
}
