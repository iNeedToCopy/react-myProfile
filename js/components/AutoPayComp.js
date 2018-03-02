import React, {Component, PropTypes} from 'react'
import  '../../style/ChangeTicket.scss'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {
};
let defaultVars = {
};

export default class AutoPayComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    this.refs.autoPay.focus();
  }
  componentWillUpdate(){

  }
  componentDidUpdate(){

  }
  goToPay(){
    browserHistory.push({
      pathname: '/QRCode',
      state: {
        carNumber:this.refs.autoPay.value,
      },
   });
  }
  goToChangeTicket(){
    browserHistory.push('/changeTicket')
  }
  render(){

    return(
      <div className="ticketContainer">
        <div className="title">
          <span className="company">重庆金田储运有限公司</span>
          <span className="autoPay" onClick={this.goToChangeTicket}>切换至自助换票</span>
        </div>
        <div className="middle-container">
          <p className="subTitle">出库自助支付</p>

          <div className="small-container">
            <p className="city" >行&nbsp;驶&nbsp;证&nbsp;号</p>
            <input type="text" className="car-number" spellCheck={false} ref="autoPay" maxLength={6}/>
          </div>
          <button className="change-button autoPay" onClick={this.goToPay.bind(this)}>生成支付二维码</button>
        </div>
      </div>
    )
  }
}

