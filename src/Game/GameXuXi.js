import React, { Component } from 'react'
import LuaChon from './LuaChon'
import "./GameXuXi.css"

export default class GameXuXi extends Component {
  render() {
    return (
      <div className="container-fluid gameXX">
        <div className="w-75 mx-auto text-center py-5">
          <LuaChon/>
        </div>
      </div>
    )
  }
}
