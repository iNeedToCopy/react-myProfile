import React, {Component, PropTypes} from 'react'
import '../../../style/Login/Login.scss'
import {Link, browserHistory, History, hashHistory} from 'react-router'
import temp from '../../../images/temp.gif'

export default class LoginComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
    this.goLoginStore=this.goLoginStore.bind(this)
  }
  goLoginStore(){
    browserHistory.push('/loginStore')
  }
  goLoginBusiness(){
    browserHistory.push('/loginBusiness')
  }
  goLoginUser(){
    browserHistory.push('/loginUser')
  }
  goLoginSystem(){
    browserHistory.push('/loginSystem')
  }

  _handleClick(){
    browserHistory.push('/ArrNotice')
  }
  main(){
    browserHistory.push('/main')
  }

  render() {
    return(
      <div className="login-container">
          <div className="login-head"></div>
          <div className="login-type">
            <span className="login-title">钢材帮2云仓   演示入口</span>
            <div className="login-change">
              <span className="login-changetype" onClick={this.goLoginStore}>点击进入仓库管理入口</span>
              <span className="login-changetype" onClick={this.goLoginBusiness}>点击进入业务入口</span>
              <span className="login-changetype" onClick={this.goLoginUser}>点击进入用户入口</span>
              <span className="login-changetype" onClick={this.goLoginSystem}>点击进入自助出库入口</span>
            </div>
          </div>
        <button onClick={this.main}>click</button>
        <button onClick={this._handleClick}>clidddd</button>

      </div>
    )
  }
}
