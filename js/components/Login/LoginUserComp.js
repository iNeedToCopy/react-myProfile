import React, {Component, PropTypes} from 'react'
import '../../../style/Login/LoginUser.scss'
import steelgang from '../../../images/steelgang.png'
import {Link, browserHistory, History, hashHistory} from 'react-router'
export default class LoginUserComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div className="loginUser-container">
        <div className="user-head">
          <span>重庆金田储运有限公司</span>
        </div>
        <div className="user-title">
          <img src={steelgang}/>
          <span>钢材帮客户登录</span>
        </div>
        <div className="user-login">
          <input  type="text" placeholder="用户名"   />
          <input  type="password" placeholder="密码"  style={{marginTop:24,marginBottom:36}}/>
          <button>登录</button>
        </div>
        <div className="user-foot">
          <span>请注意您正在登录私有系统，如果非法登录，<strong>我们将追究您的法律责任！</strong></span>
        </div>
      </div>
    )
  }
}
