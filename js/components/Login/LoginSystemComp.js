import React, {Component, PropTypes} from 'react'
import '../../../style/Login/LoginSystem.scss'
import {Link, browserHistory, History, hashHistory} from 'react-router'
export default class LoginSystemComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div className="loginSystem-container">
        <div className="system-head">
          <span>重庆金田储运有限公司</span>
        </div>
        <div className="system-title">
          <span>钢材帮云仓系统管理入口</span>
        </div>
        <div className="system-login">
          <input  type="text" placeholder="用户名"   />
          <input  type="password" placeholder="密码"  style={{marginTop:24,marginBottom:36}}/>
          <button>登录</button>
        </div>
        <div className="system-foot">
          <span>请注意您正在登录私有系统，如果非法登录，<strong>我们将追究您的法律责任！</strong></span>
        </div>
      </div>
    )
  }
}
