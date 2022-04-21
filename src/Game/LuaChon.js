import React, { Component } from 'react'
import KetQua from './KetQua'
import {connect} from 'react-redux'

class LuaChon extends Component {
  render() {
    console.log(this.props.mangXuXi)
    return (
      <div className="row">
        <div className="col-4">
          <div className="btnplayer">
            <img src="./img/Game/player.png" alt="" />
          </div>

          <div className='imgGround'>
            <button className='btn btnGame'>
              <img src="./img/Game/bao.png" alt="" />
            </button>
            <button className='btn btnGame'>
              <img src="./img/Game/bua.png" alt="" />
            </button>
            <button className='btn btnGame'>
              <img src="./img/Game/keo.png" alt="" />
            </button>
          </div>
        </div>


        <KetQua/>

        <div className="col-4">
          <div className="btnplayer">
            <img src="./img/Game/playerComputer.png" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangXuXi: rootReducer.gameReducer.mangXuXi
  }
}

export default connect(mapStateToProps)(LuaChon)
