import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
  render() {
    return (
      <div className="col-4">
        <p>Số bàn thắng: <span>0</span></p>
        <p>Số bàn chơi: <span>0</span></p>
        <button className='btn btn-success'>Play Game</button>
      </div>
    )
  }
}

const mapStateToProps= (rootReducer) => {
  return {
    gameReducer: rootReducer.gameReducer
  }
}

export default connect(mapStateToProps)(KetQua)
