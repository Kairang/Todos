import React, { Component } from 'react'
import ListItemt from './ListItem'
import './style.css'

export default class Todos extends Component {
  render() {
    return (
      <div className='list-content'>
          <ListItemt />
          <ListItemt />
          <ListItemt />
          <ListItemt />
          <ListItemt />
      </div>
    )
  }
}
