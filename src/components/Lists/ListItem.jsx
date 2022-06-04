import React, { Component } from 'react'
import SpecialBtn from '../Button/specialBtn'
import Line from '../Line/line'
import './style.css'

export default class ListItemt extends Component {
  render() {
    return (
      <>
        <div className='list-item'>
          <p>This is a task!</p>
          <SpecialBtn />
        </div>
        <Line/>
      </>
    )
  }
}
