import React, { Component } from 'react'
import './style.css'

export default class SpecialBtn extends Component {
  render() {
    return (
      <div className='btn-special'>
          <span>&#x02713;</span>
          <span>&#x02717;</span>
      </div>
    )
  }
}
