import React, {Component, PropTypes} from 'react'
import '../../../style/Login/LoginStore.scss'
import {Link, browserHistory, History, hashHistory} from 'react-router'
export default class LoginStoreComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
    this.change=this.change.bind(this)
    this._handleClick=this._handleClick.bind(this)
  }
  change(){
    browserHistory.push('/loginBusiness')
  }
  _handleClick(){
    //console.log(browserHistory)
    browserHistory.push('/changeTicket')
  }

  render() {
    return(
      <div className="loginStore-container">
         <div className="store-head">
           <span>重庆金田储运有限公司</span>
         </div>
        <h1 className="store-title">钢材帮云仓仓库管理入口</h1>
        <div className="store-login">
          <input  type="text" placeholder="用户名"   />
          <input  type="password" placeholder="密码"  style={{marginTop:24,marginBottom:36}}/>
          <button onClick={this._handleClick}>登录</button>
          <span className="store-change" onClick={this.change}>切换到业务入口</span>
        </div>
        <div className="store-foot">
          <span>请注意您正在登录私有系统，如果非法登录，<strong>我们将追究您的法律责任！</strong></span>
        </div>
      </div>
    )
  }
}
