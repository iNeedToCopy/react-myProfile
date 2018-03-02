/**
 * Created by Aaron on 2017/11/8.
 */
import React, {Component, PropTypes} from 'react'
import '../../style/Login/Login.scss'
import {Link, browserHistory, History} from 'react-router'

export default class MainBriefComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  click1(){
    browserHistory.push('/PickUpGoods')
  }
  click2(){
    browserHistory.push('/TransferAccount')
  }
  click3(){
    browserHistory.push('/PickUpGoodsSix')
  }
  click4(){
    browserHistory.push('/TransferAccountThree')
  }
  render() {
    return(
      <div className="login-container">
        <p>hello world!</p>
        <button onClick={this.click1}>1</button>
        <button onClick={this.click2}>2</button>
        <button onClick={this.click3}>3</button>
        <button onClick={this.click4}>4</button>
      </div>
    )
  }
}
