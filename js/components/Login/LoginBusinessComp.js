import React, {Component, PropTypes} from 'react'
import '../../../style/Login/LoginBusiness.scss'
import {Link, browserHistory, History, hashHistory} from 'react-router'
export default class LoginBusinessComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
    this.change=this.change.bind(this)
  }
  change(){
    browserHistory.push('/loginStore')
  }
  render() {
    return(
      <div className="loginBusiness-container">
        <div className="business-head">
          <span>重庆金田储运有限公司</span>
        </div>
        <h1 className="business-title">钢材帮云仓业务入口</h1>
        <div className="business-login">
          <input  type="text" placeholder="用户名"   />
          <input  type="password" placeholder="密码"  style={{marginTop:24,marginBottom:36}}/>
          <button>登录</button>
          <span className="business-change" onClick={this.change}>切换到仓库管理入口</span>
        </div>
        <div className="business-foot">
          <span>请注意您正在登录私有系统，如果非法登录，<strong>我们将追究您的法律责任！</strong></span>
        </div>
      </div>
    )
  }
}
